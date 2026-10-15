/* ============================================================
   quiz.js — "Build Your Own Exam" page controller.
   Renders a topic x question-set table from window.QUIZ_BANK (rows =
   topics, columns = the three question sets), then on Start
   assembles whichever cells are checked, shuffles them, sets
   window.EXAM_DATA, and hands off to the shared exam engine
   (assets/exam.js) for rendering, grading, rationales, and the score
   history (saved under the id "quiz").
   ============================================================ */
// Cache-bust token read off our own <script src="assets/quiz.js?v=…">, so the
// exam engine injected on Start shares the page's version automatically.
const QUIZ_VER = (function () {
  const s = document.currentScript || document.querySelector('script[src*="assets/quiz.js"]');
  const m = s && /[?&]v=([^&]+)/.exec(s.src || "");
  return m ? m[1] : "";
})();

(function () {
  const bank = window.QUIZ_BANK;
  const sel = document.getElementById("quiz-select");
  if (!bank || !sel) return;
  const topics = bank.topics;
  const topicById = {};
  topics.forEach(t => { topicById[t.id] = t; });

  /* The three question-set columns. Both the column headings and the
     legend beneath the intro line come from data/quiz-bank.js, so the
     page can be relabelled for a different course without touching this
     file. Rename, reorder, or drop a column by editing `columns` there.
     If the third set has no source for your course, just leave every
     topic's third set empty and the column renders greyed out. */
  const SET_COLUMNS = bank.columns || [
    { key: "mustKnow",      label: "Must Know",      blurb: "Everything the lectures explicitly stated or heavily hinted will be tested." },
    { key: "extraPractice", label: "Extra Practice", blurb: "Other topics from the lecture content, prioritized by highest yield." },
    { key: "eaq",           label: "Question Bank",  blurb: "Imported questions from your publisher's question bank, sorted by topic, with duplicates removed." }
  ];
  function setQuestions(topic, key) { return (topic.sets && topic.sets[key]) || []; }
  function countOf(topic, key) { return setQuestions(topic, key).length; }

  /* With a single section row and a single column there is nothing to
     "select all" of — the bulk-select controls would just be noise. They
     come back automatically the moment a second section or column exists. */
  const showBulkPick = topics.length > 1 || SET_COLUMNS.length > 1;

  let html = '<div class="quiz-picker">';
  html += '<p class="note">Build a custom practice exam: check a topic, then take the whole set or type how many questions you want from it.</p>';
  html += '<p class="note">Each box defaults to that set\'s full question count. Edit the number down and that many are pulled <b>at random</b> — reshuffled every time you start or retake, so you get a different rotation each attempt.</p>';
  html += '<ul class="qb-legend">' +
    SET_COLUMNS.filter(c => c.blurb).map(c => `<li><b>${c.label}:</b> ${c.blurb}</li>`).join("") +
    '</ul>';
  if (showBulkPick) {
    html += '<div class="quiz-actions-top"><button type="button" class="btn btn-ghost" data-pick="all">Select all</button><button type="button" class="btn btn-ghost" data-pick="none">Clear</button></div>';
  }

  html += '<div class="table-wrap no-stack qb-table-wrap"><table class="qb-table"><thead><tr><th>Topic</th>';
  SET_COLUMNS.forEach(c => {
    html += `<th>${c.label}</th>`;
  });
  html += '</tr></thead><tbody>';

  if (showBulkPick) {
    html += '<tr class="qb-selectall-row"><td class="term">Select All</td>';
    SET_COLUMNS.forEach(c => {
      html += `<td><label class="qb-cell">` +
        `<input type="checkbox" class="qb-col-all" data-set="${c.key}">` +
        `<span>Select All</span></label></td>`;
    });
    html += '</tr>';
  }

  topics.forEach(t => {
    html += `<tr>`;
    const wk = t.week ? `<span class="qb-week">Week ${t.week}</span>` : '';
    html += `<td class="term">${wk}${t.label}</td>`;
    SET_COLUMNS.forEach(c => {
      const n = countOf(t, c.key);
      const empty = n === 0;
      if (empty) {
        html += `<td><label class="qb-cell qb-empty">` +
          `<input type="checkbox" class="qb-topic-check" data-topic="${t.id}" data-set="${c.key}" disabled>` +
          `<span>0</span></label></td>`;
      } else {
        // The number input defaults to the full count `n` — left alone, a
        // checked box behaves exactly like the old fixed-number checkbox
        // (pulls every question in the set). Typing a smaller number pulls
        // that many at random from the set instead.
        html += `<td><label class="qb-cell">` +
          `<input type="checkbox" class="qb-topic-check" data-topic="${t.id}" data-set="${c.key}">` +
          `<input type="number" class="qb-count" inputmode="numeric" min="1" max="${n}" step="1" value="${n}" data-max="${n}" aria-label="Number of ${c.label} questions from ${t.label} (max ${n})">` +
          `<span class="qb-max">/ ${n}</span></label></td>`;
      }
    });
    html += '</tr>';
  });
  html += '</tbody></table></div>';

  html += '<div class="quiz-start-bar"><span class="quiz-summary">No question sets selected</span><button type="button" class="btn btn-primary" data-act="start" disabled>Start exam</button></div>';
  sel.innerHTML = html;

  const boxes = Array.from(sel.querySelectorAll('.qb-table input.qb-topic-check'));
  const colAllBoxes = Array.from(sel.querySelectorAll('.qb-table input.qb-col-all'));
  const startBtn = sel.querySelector('[data-act="start"]');
  const summary = sel.querySelector(".quiz-summary");

  // How many questions a checked box actually contributes — its custom
  // count input if it has one and it's a valid in-range number, otherwise
  // the full set (same as the old fixed-number behavior).
  function selectedCount(b) {
    const max = countOf(topicById[b.dataset.topic], b.dataset.set);
    const input = b.closest(".qb-cell").querySelector(".qb-count");
    if (!input) return max;
    const v = parseInt(input.value, 10);
    if (!Number.isFinite(v) || v < 1) return max;
    return Math.min(v, max);
  }

  function totalSelected() {
    return boxes.filter(b => b.checked)
      .reduce((s, b) => s + selectedCount(b), 0);
  }

  function syncColumnCheckbox(colAllBox) {
    const key = colAllBox.dataset.set;
    const colBoxes = boxes.filter(b => b.dataset.set === key && !b.disabled);
    if (!colBoxes.length) {
      colAllBox.checked = false;
      colAllBox.indeterminate = false;
      return;
    }
    const checkedCount = colBoxes.filter(b => b.checked).length;
    colAllBox.checked = checkedCount === colBoxes.length;
    colAllBox.indeterminate = checkedCount > 0 && checkedCount < colBoxes.length;
  }

  function update() {
    const chosen = boxes.filter(b => b.checked);
    const n = totalSelected();
    startBtn.disabled = n === 0;
    summary.textContent = chosen.length
      ? `${chosen.length} set${chosen.length > 1 ? "s" : ""} selected · ${n} question${n !== 1 ? "s" : ""}`
      : "No question sets selected";
    startBtn.textContent = n ? `Start exam (${n})` : "Start exam";
    colAllBoxes.forEach(syncColumnCheckbox);
  }

  sel.addEventListener("change", e => {
    if (e.target.matches('.qb-table input.qb-topic-check')) {
      update();
      return;
    }
    if (e.target.matches('.qb-table input.qb-col-all')) {
      const key = e.target.dataset.set;
      const checked = e.target.checked;
      boxes.filter(b => b.dataset.set === key && !b.disabled).forEach(b => { b.checked = checked; });
      update();
      return;
    }
    if (e.target.matches('.qb-table input.qb-count')) {
      const input = e.target;
      const max = parseInt(input.dataset.max, 10) || 1;
      let v = parseInt(input.value, 10);
      // Empty or invalid falls back to the full set — same as never having
      // touched the field.
      if (!Number.isFinite(v) || v < 1) v = max;
      if (v > max) v = max;
      input.value = v;
      // Typing a custom count means this set is wanted — check it for them.
      const box = input.closest(".qb-cell").querySelector(".qb-topic-check");
      if (box && !box.disabled) box.checked = true;
      update();
    }
  });
  // Live-update the running total while typing, without fighting the
  // cursor by rewriting the field on every keystroke (that happens on
  // "change" above, once they're done editing).
  sel.addEventListener("input", e => {
    if (e.target.matches('.qb-table input.qb-count')) update();
  });
  sel.addEventListener("click", e => {
    const pick = e.target.closest("[data-pick]");
    if (pick) {
      boxes.forEach(b => { if (!b.disabled) b.checked = pick.dataset.pick === "all"; });
      update();
    }
  });

  // Pulls a fresh, randomly-shuffled question set from whatever's still
  // checked in the picker. Called on the first Start click AND on every
  // "Retake exam" click after that, so a re-take is never the same order —
  // and for a custom count, never the same subset either — even though the
  // picker's checkboxes/counts are left exactly as the user set them.
  function buildQuestionSet() {
    const chosen = boxes.filter(b => b.checked);
    const qs = [];
    chosen.forEach(b => {
      const t = topicById[b.dataset.topic];
      const want = selectedCount(b);
      const pool = setQuestions(t, b.dataset.set).slice();
      // want === pool.length (the default, untouched state) just takes
      // every question, unchanged from the old behavior. A smaller custom
      // count shuffles first so the subset taken is random, not always
      // the first N in the data file — and re-shuffled fresh on every call,
      // so a retake draws a new random subset too.
      if (want < pool.length) {
        for (let i = pool.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [pool[i], pool[j]] = [pool[j], pool[i]];
        }
      }
      pool.slice(0, want).forEach(q => qs.push(q));
    });
    for (let i = qs.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [qs[i], qs[j]] = [qs[j], qs[i]];
    }
    return qs;
  }

  // The exam engine (assets/exam.js) only ever appends into #exam-root and
  // re-runs its whole render on each fresh <script> injection, so a retake
  // has to clear the old render and drop in a new script tag itself — this
  // is that shared launch step, used by both the first Start click and every
  // later retake/change-topics round-trip.
  let examScriptEl = null;
  function launchExam() {
    const qs = buildQuestionSet();
    if (!qs.length) return false;
    window.EXAM_DATA = {
      id: "quiz",
      title: "Custom Exam",
      questions: qs,
      history: false,
      // Build Your Own Exam gets its own retake: reshuffle in place rather
      // than the site-wide default of reloading the page (which would wipe
      // the picker back to blank). Other exam types never set this, so
      // exam.js's location.reload() fallback still runs for them unchanged.
      onRetake: retakeExam,
      // Lets "Change topics" bring the picker back without a full reload,
      // keeping every checkbox/count exactly as the user left it.
      onChangeSelection: backToPicker
    };
    const examRoot = document.getElementById("exam-root");
    if (examRoot) examRoot.innerHTML = "";
    if (examScriptEl) examScriptEl.remove();
    examScriptEl = document.createElement("script");
    examScriptEl.src = "assets/exam.js" + (QUIZ_VER ? "?v=" + QUIZ_VER : "");
    document.body.appendChild(examScriptEl);
    return true;
  }

  function retakeExam() {
    launchExam();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function backToPicker() {
    const examRoot = document.getElementById("exam-root");
    if (examRoot) examRoot.innerHTML = "";
    if (examScriptEl) { examScriptEl.remove(); examScriptEl = null; }
    sel.classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  startBtn.addEventListener("click", () => {
    const chosen = boxes.filter(b => b.checked);
    if (!chosen.length) return;
    if (!launchExam()) return;
    sel.classList.add("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  update();
})();
