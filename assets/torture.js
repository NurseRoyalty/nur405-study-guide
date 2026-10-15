/* ============================================================
   torture.js — "The Torture Chamber" week picker.

   data/torture-chamber.js sets window.EXAM_DATA to the FULL question
   bank (every question carries a `week` number). This file reads that
   once, renders a week picker into #quiz-select (same look as Build
   Your Own Exam), and on Start sets window.EXAM_DATA to just the
   chosen questions and hands off to the shared exam engine
   (assets/exam.js) for rendering, grading and rationales.

   Each week row has a checkbox and a number box. The box defaults to
   that week's full count; type a smaller number and that many are
   drawn at random (reshuffled on every start and retake).

   Question order is a rejection-sampled shuffle: no two adjacent
   questions share a topic and no two adjacent questions are both
   all-correct, whenever the chosen mix makes that possible.
   ============================================================ */
// Cache-bust token read off our own <script src="assets/torture.js?v=…">.
const TORTURE_VER = (function () {
  const s = document.currentScript || document.querySelector('script[src*="assets/torture.js"]');
  const m = s && /[?&]v=([^&]+)/.exec(s.src || "");
  return m ? m[1] : "";
})();

(function () {
  const bankData = window.EXAM_DATA;
  const sel = document.getElementById("quiz-select");
  if (!bankData || !sel) return;
  const ALL = (bankData.questions || []).slice();
  const TITLE = bankData.title || "The Torture Chamber";

  // Group the bank by week (questions without a week fall into week 0 and
  // are shown as "Other" so nothing in the data file is ever unreachable).
  const byWeek = {};
  ALL.forEach(q => { const w = q.week || 0; (byWeek[w] = byWeek[w] || []).push(q); });
  const weeks = Object.keys(byWeek).map(Number).sort((a, b) => a - b);
  const TOPIC_ORDER = (window.TOPIC_ORDER || []).slice();

  function topicsOf(w) {
    const seen = [];
    byWeek[w].forEach(q => { if (q.topic && !seen.includes(q.topic)) seen.push(q.topic); });
    seen.sort((a, b) => {
      const ia = TOPIC_ORDER.indexOf(a), ib = TOPIC_ORDER.indexOf(b);
      return (ia < 0 ? 999 : ia) - (ib < 0 ? 999 : ib);
    });
    return seen;
  }

  let html = '<div class="quiz-picker">';
  html += '<header class="page-head"><p class="eyebrow">Exam Prep</p><h1>' + TITLE + '</h1></header>';
  html += '<p class="note">Every question here is select-all-that-apply and built to be hard. Choose the weeks you want to be tested on, then take the whole set or type how many questions you want from a week.</p>';
  html += '<p class="note">Each box defaults to that week\'s full question count. Edit the number down and that many are pulled <b>at random</b> — reshuffled every time you start or retake.</p>';
  html += '<div class="quiz-actions-top"><button type="button" class="btn btn-ghost" data-pick="all">Select all weeks</button><button type="button" class="btn btn-ghost" data-pick="none">Clear</button></div>';
  html += '<div class="table-wrap no-stack qb-table-wrap"><table class="qb-table"><thead><tr><th>Week</th><th>Topics</th><th>Questions</th></tr></thead><tbody>';
  weeks.forEach(w => {
    const n = byWeek[w].length;
    const label = w ? 'Week ' + w : 'Other';
    html += '<tr><td class="term">' + label + '</td>' +
      '<td class="tc-topics-cell">' + topicsOf(w).join(' · ') + '</td>' +
      '<td><label class="qb-cell">' +
      '<input type="checkbox" class="qb-topic-check" data-week="' + w + '">' +
      '<input type="number" class="qb-count" inputmode="numeric" min="1" max="' + n + '" step="1" value="' + n + '" data-max="' + n + '" aria-label="Number of questions from ' + label + ' (max ' + n + ')">' +
      '<span class="qb-max">/ ' + n + '</span></label></td></tr>';
  });
  html += '</tbody></table></div>';
  html += '<div class="quiz-start-bar"><span class="quiz-summary">No weeks selected</span><button type="button" class="btn btn-primary" data-act="start" disabled>Start exam</button></div>';
  html += '</div>';
  sel.innerHTML = html;

  const boxes = Array.from(sel.querySelectorAll("input.qb-topic-check"));
  const startBtn = sel.querySelector('[data-act="start"]');
  const summary = sel.querySelector(".quiz-summary");

  function selectedCount(b) {
    const max = byWeek[b.dataset.week].length;
    const input = b.closest(".qb-cell").querySelector(".qb-count");
    const v = parseInt(input.value, 10);
    if (!Number.isFinite(v) || v < 1) return max;
    return Math.min(v, max);
  }
  function update() {
    const chosen = boxes.filter(b => b.checked);
    const n = chosen.reduce((s, b) => s + selectedCount(b), 0);
    startBtn.disabled = n === 0;
    summary.textContent = chosen.length
      ? chosen.length + " week" + (chosen.length > 1 ? "s" : "") + " selected · " + n + " question" + (n !== 1 ? "s" : "")
      : "No weeks selected";
    startBtn.textContent = n ? "Start exam (" + n + ")" : "Start exam";
  }

  sel.addEventListener("change", e => {
    if (e.target.matches("input.qb-topic-check")) { update(); return; }
    if (e.target.matches("input.qb-count")) {
      const input = e.target;
      const max = parseInt(input.dataset.max, 10) || 1;
      let v = parseInt(input.value, 10);
      if (!Number.isFinite(v) || v < 1) v = max;
      if (v > max) v = max;
      input.value = v;
      // Typing a count means the week is wanted — tick it for them.
      const box = input.closest(".qb-cell").querySelector(".qb-topic-check");
      if (box) box.checked = true;
      update();
    }
  });
  sel.addEventListener("input", e => { if (e.target.matches("input.qb-count")) update(); });
  sel.addEventListener("click", e => {
    const pick = e.target.closest("[data-pick]");
    if (pick) { boxes.forEach(b => { b.checked = pick.dataset.pick === "all"; }); update(); }
  });

  function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  const isAllCorrect = q => q.answers.length === q.options.length;
  function violations(list) {
    let v = 0;
    for (let i = 1; i < list.length; i++) {
      if (list[i].topic === list[i - 1].topic) v++;
      if (isAllCorrect(list[i]) && isAllCorrect(list[i - 1])) v++;
    }
    return v;
  }
  // Rejection-sampled shuffle: keep the first arrangement with zero
  // violations; if the chosen mix makes that impossible (e.g. a single
  // topic), fall back to the best arrangement seen.
  function orderQuestions(list) {
    let best = null, bestV = Infinity;
    for (let t = 0; t < 400; t++) {
      const cand = shuffle(list.slice());
      const v = violations(cand);
      if (v < bestV) { best = cand; bestV = v; if (v === 0) break; }
    }
    return best || list;
  }

  function buildQuestionSet() {
    const qs = [];
    boxes.filter(b => b.checked).forEach(b => {
      const pool = shuffle(byWeek[b.dataset.week].slice());
      pool.slice(0, selectedCount(b)).forEach(q => qs.push(q));
    });
    return orderQuestions(qs);
  }

  let examScriptEl = null;
  function launchExam() {
    const qs = buildQuestionSet();
    if (!qs.length) return false;
    window.EXAM_DATA = {
      id: "torture-chamber",
      title: TITLE,
      questions: qs,
      history: false,
      onRetake: retakeExam,
      changeLabel: "Change weeks",
      onChangeSelection: backToPicker
    };
    const examRoot = document.getElementById("exam-root");
    if (examRoot) examRoot.innerHTML = "";
    if (examScriptEl) examScriptEl.remove();
    examScriptEl = document.createElement("script");
    examScriptEl.src = "assets/exam.js" + (TORTURE_VER ? "?v=" + TORTURE_VER : "");
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
    if (!boxes.some(b => b.checked)) return;
    if (!launchExam()) return;
    sel.classList.add("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  update();
})();
