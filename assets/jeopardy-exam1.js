/* ============================================================
   assets/jeopardy-exam1.js — Exam 1 Jeopardy game engine (3-player).

   Cloned from assets/jeopardy3.js (the NUR 326 Exam 2/3 engine) per
   CLAUDE.md "Jeopardy engine". Reads window.JEOPARDY_EXAM1
   (data/exam1-jeopardy.js) and renders a board into #jp3-root. This
   file has ZERO content of its own — every category, clue, answer and
   rationale comes from the data file, so the bank can be expanded or
   edited later without touching any of this code.

   Differences from the source engine (everything else is identical):
   - Global JEOPARDY_EXAM1 and its own three localStorage keys.
   - Each game picks 2 categories from group "week1" (Week 1) and 4
     from group "ms1" (Med Surg I Review), then shuffles all 6.
   - The small label under each category name comes from the
     category's "badge" field ("Week 1" / "Med Surg I").

   Game shape (unchanged): 5 values (100-500 points) = 30 clues per
   game, difficulty rising with value. Click a value -> question only
   -> "Reveal Answer" -> answer + rationale -> Player 1/2/3 "+"/"-"
   buttons. Repeat avoidance is a rotating cycle per category+value
   pool, persisted in localStorage: every clue in a pool is used once
   before any repeat, and a new cycle never starts with the clue used
   last, so no question repeats from the previous round. "New Game" reshuffles categories AND clues;
   "Reset Game" clears scores/progress on the current board.
   ============================================================ */
(function () {
  "use strict";

  var STORE_PREFIX = window.STORE_PREFIX || "nur405";
  var LS_KEY = STORE_PREFIX + "-exam1-jeopardy-v1";
  var CYCLE_KEY = STORE_PREFIX + "-exam1-jeopardy-cycle";
  var HIST_KEY = STORE_PREFIX + "-exam1-jeopardy-history";
  var VALUES = [100, 200, 300, 400, 500];
  var PICK = { week1: 2, ms1: 4 }; // categories drawn per game from each group
  var PLAYER_NAMES = ["Player 1", "Player 2", "Player 3"];

  var root = document.getElementById("jp3-root");

  // Exposed for the project's Node-based test harness only — browsers
  // never define `module`, so this is a no-op in production.
  if (typeof module !== "undefined" && module.exports) {
    module.exports = { shuffle: shuffle, pickClue: pickClue, buildBoard: buildBoard };
  }
  if (!root) return;

  var state = null; // { board:[{catId,catName,badge,slots:[{value,clue,state}]}], scores:[0,0,0], answered, total, recorded }
  var activeSlot = null; // {catIndex, valIndex} of the clue currently open in the modal
  var revealed = false;

  // ---------------------------------------------------------------
  // data helpers
  // ---------------------------------------------------------------
  function bankCategories() {
    return (window.JEOPARDY_EXAM1 && window.JEOPARDY_EXAM1.categories) || [];
  }

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  // cycleMap: { "<catId>|<value>": [clue array-index-free ids already used this cycle] }
  // Picks a clue not yet used in the pool's current cycle; once every clue
  // in that pool has been used, the pool's cycle resets. Clues in this
  // bank have no "id" field (unlike Week 2's), so the question text
  // itself is used as the dedupe key.
  function pickClue(category, value, cycleMap) {
    var pool = (category.clues && category.clues[String(value)]) || [];
    if (!pool.length) return null;
    var key = category.id + "|" + value;
    var used = {};
    (cycleMap[key] || []).forEach(function (q) { used[q] = true; });
    var fresh = pool.filter(function (c) { return !used[c.q]; });
    if (!fresh.length) {
      // Cycle complete: start a new one, but never hand back the clue this
      // pool gave out most recently, so a category that appears in two
      // games in a row never repeats a question from the previous round.
      var last = (cycleMap[key] || []).slice(-1)[0];
      used = {};
      fresh = pool.filter(function (c) { return c.q !== last; });
      if (!fresh.length) fresh = pool.slice();
    }
    var choice = fresh[Math.floor(Math.random() * fresh.length)];
    used[choice.q] = true;
    cycleMap[key] = Object.keys(used);
    return choice;
  }

  // Picks 2 Week 1 + 4 Med Surg I categories at random, then shuffles
  // the combined order so the board layout itself (not just the clues)
  // changes every game.
  function pickCategories() {
    var bank = bankCategories();
    var picked = [];
    Object.keys(PICK).forEach(function (g) {
      var pool = bank.filter(function (c) { return c.group === g; });
      picked = picked.concat(shuffle(pool).slice(0, Math.min(PICK[g], pool.length)));
    });
    return shuffle(picked);
  }

  function buildBoard(cycleMap) {
    var cats = pickCategories();
    return cats.map(function (cat) {
      var slots = VALUES.map(function (v) {
        var clue = pickClue(cat, v, cycleMap);
        return { value: v, clue: clue, state: "unanswered" };
      });
      return { catId: cat.id, catName: cat.name, badge: cat.badge || "", slots: slots };
    });
  }

  // ---------------------------------------------------------------
  // persistence
  // ---------------------------------------------------------------
  function loadState() {
    try {
      var raw = localStorage.getItem(LS_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (e) { return null; }
  }
  function saveState() {
    try { localStorage.setItem(LS_KEY, JSON.stringify(state)); } catch (e) {}
  }
  function loadCycle() {
    try { return JSON.parse(localStorage.getItem(CYCLE_KEY)) || {}; } catch (e) { return {}; }
  }
  function saveCycle(cycleMap) {
    try { localStorage.setItem(CYCLE_KEY, JSON.stringify(cycleMap)); } catch (e) {}
  }

  // ---------------------------------------------------------------
  // game actions
  // ---------------------------------------------------------------
  function newGame() {
    var cycleMap = loadCycle();
    var board = buildBoard(cycleMap);
    saveCycle(cycleMap);
    state = {
      board: board,
      scores: [0, 0, 0],
      answered: 0,
      total: board.length * VALUES.length,
      recorded: false
    };
    saveState();
    closeModal();
    render();
  }

  function resetGame() {
    if (!state) { newGame(); return; }
    state.board.forEach(function (cat) {
      cat.slots.forEach(function (s) { s.state = "unanswered"; });
    });
    state.scores = [0, 0, 0];
    state.answered = 0;
    state.recorded = false;
    saveState();
    closeModal();
    render();
  }

  function markAnswered(catIndex, valIndex) {
    var slot = state.board[catIndex].slots[valIndex];
    if (slot.state === "unanswered") {
      slot.state = "answered";
      state.answered += 1;
      if (state.answered === state.total && !state.recorded) {
        state.recorded = true;
        recordHistory();
      }
    }
    saveState();
  }

  function adjustScore(playerIndex, delta) {
    state.scores[playerIndex] += delta;
    saveState();
    render();
    if (overlay.classList.contains("show")) renderModal();
  }

  // ---------------------------------------------------------------
  // stats: cross-game score history
  // ---------------------------------------------------------------
  function loadHistory() {
    try { return JSON.parse(localStorage.getItem(HIST_KEY)) || []; } catch (e) { return []; }
  }
  function recordHistory() {
    var hist = loadHistory();
    hist.push({ d: Date.now(), scores: state.scores.slice(), total: state.total });
    if (hist.length > 12) hist = hist.slice(-12);
    try { localStorage.setItem(HIST_KEY, JSON.stringify(hist)); } catch (e) {}
  }
  function fmtDate(ts) {
    var d = new Date(ts);
    return d.toLocaleDateString(undefined, { month: "short", day: "numeric" }) + " " +
      d.toLocaleTimeString(undefined, { hour: "numeric", minute: "2-digit" });
  }

  // ---------------------------------------------------------------
  // rendering
  // ---------------------------------------------------------------
  function render() {
    if (!state) { root.innerHTML = ""; return; }

    var done = state.answered === state.total;
    var html = "";

    html += '<div class="jp-bar">';
    state.scores.forEach(function (sc, i) {
      html += '<div class="jp-stat"><span class="jp-stat-num">' + sc + '</span><span class="jp-stat-lbl">' + PLAYER_NAMES[i] + '</span></div>';
    });
    html += '<div class="jp-stat"><span class="jp-stat-num">' + state.answered + '/' + state.total + '</span><span class="jp-stat-lbl">Completed</span></div>';
    html += '<div class="jp-bar-actions">';
    html += '<button type="button" class="btn btn-primary" data-jp3-new>New Game</button>';
    html += '<button type="button" class="btn btn-ghost" data-jp3-reset>Reset Game</button>';
    html += '</div></div>';

    if (done) {
      var top = Math.max.apply(null, state.scores);
      var winners = [];
      state.scores.forEach(function (sc, i) { if (sc === top) winners.push(PLAYER_NAMES[i]); });
      var winMsg = winners.length === 3 ? "It's a three-way tie!" :
        winners.length === 2 ? (winners.join(" and ") + " tie for the win!") :
        (winners[0] + " wins!");
      html += '<div class="result-card">';
      html += '<div class="result-score">' + state.scores.join(" &ndash; ") + '</div>';
      html += '<div class="result-detail">';
      html += '<p class="rmsg">Game over — ' + winMsg + '</p>';
      html += '<button type="button" class="btn btn-ghost" data-jp3-new-2>New Game</button> ';
      html += '<button type="button" class="btn btn-ghost" data-jp3-reset-2>Play Again (Same Board)</button>';
      html += '</div></div>';

      var hist = loadHistory();
      if (hist.length > 1) {
        html += '<div class="score-history"><h3 class="sh-title">Your recent games</h3><ul>';
        hist.slice().reverse().forEach(function (h, i) {
          html += '<li' + (i === 0 ? ' class="latest"' : '') + '>' +
            '<span class="sh-date">' + fmtDate(h.d) + '</span>' +
            '<span class="sh-score">P1 ' + h.scores[0] + ' &middot; P2 ' + h.scores[1] + ' &middot; P3 ' + h.scores[2] + '</span>' +
            '<span class="sh-pct">' + h.total + ' clues</span></li>';
        });
        html += '</ul></div>';
      }
    }

    html += '<div class="jp-board-wrap"><div class="jp-board" style="--jp-cols:' + state.board.length + '">';
    state.board.forEach(function (cat) {
      html += '<div class="jp-cat">' + escapeHtml(cat.catName) + '<span class="jp3-cat-wk">' + escapeHtml(cat.badge || "") + '</span></div>';
    });
    VALUES.forEach(function (v, valIndex) {
      state.board.forEach(function (cat, catIndex) {
        var slot = cat.slots[valIndex];
        var cls = "jp-cell";
        var content = String(v);
        var disabled = "";
        if (!slot.clue) {
          cls += " jp-cell-empty";
          content = "—";
          disabled = " disabled";
        } else if (slot.state === "answered") {
          cls += " jp-cell-correct";
          content = "✓";
          disabled = " disabled";
        }
        html += '<button type="button" class="' + cls + '"' + disabled +
          ' data-jp3-cell data-cat="' + catIndex + '" data-val="' + valIndex + '">' +
          content + '</button>';
      });
    });
    html += '</div></div>';

    root.innerHTML = html;

    root.querySelector("[data-jp3-new]").addEventListener("click", newGame);
    root.querySelector("[data-jp3-reset]").addEventListener("click", resetGame);
    var new2 = root.querySelector("[data-jp3-new-2]");
    var reset2 = root.querySelector("[data-jp3-reset-2]");
    if (new2) new2.addEventListener("click", newGame);
    if (reset2) reset2.addEventListener("click", resetGame);
    root.querySelectorAll("[data-jp3-cell]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        if (btn.disabled) return;
        openModal(parseInt(btn.getAttribute("data-cat"), 10), parseInt(btn.getAttribute("data-val"), 10));
      });
    });
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  // ---------------------------------------------------------------
  // modal (question / reveal / 3-player scoring)
  // ---------------------------------------------------------------
  var overlay = document.createElement("div");
  overlay.className = "jp-overlay";
  overlay.innerHTML = '<div class="jp-modal" role="dialog" aria-modal="true"></div>';
  document.body.appendChild(overlay);
  var modalEl = overlay.querySelector(".jp-modal");

  overlay.addEventListener("click", function (e) {
    if (e.target === overlay) closeModal();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && overlay.classList.contains("show")) closeModal();
  });

  function openModal(catIndex, valIndex) {
    var cat = state.board[catIndex];
    var slot = cat.slots[valIndex];
    if (!slot.clue) return;
    activeSlot = { catIndex: catIndex, valIndex: valIndex };
    revealed = slot.state === "answered";

    renderModal();
    overlay.classList.add("show");
  }

  function renderModal() {
    var cat = state.board[activeSlot.catIndex];
    var slot = cat.slots[activeSlot.valIndex];
    var clue = slot.clue;

    var html = "";
    html += '<button type="button" class="jp-modal-close" data-jp-close aria-label="Close">&times;</button>';
    html += '<p class="jp-modal-eyebrow">' + escapeHtml(cat.catName) + ' &middot; ' + slot.value + ' points</p>';
    html += '<p class="jp-modal-q">' + escapeHtml(clue.q) + '</p>';

    if (!revealed) {
      html += '<div class="jp-modal-actions"><button type="button" class="btn btn-primary" data-jp3-reveal>Reveal Answer</button></div>';
    } else {
      html += '<div class="jp-modal-answer">';
      html += '<span class="jp-a-label">Answer</span>';
      html += '<p class="jp-a-text">' + escapeHtml(clue.a) + '</p>';
      html += '<span class="jp-r-label">Rationale</span>';
      html += '<p class="jp-r-text">' + escapeHtml(clue.rationale) + '</p>';
      html += '</div>';
      html += '<div class="jp3-score-grid">';
      PLAYER_NAMES.forEach(function (name, i) {
        html += '<div class="jp3-score-row">';
        html += '<span class="jp3-score-name">' + name + '</span>';
        html += '<button type="button" class="jp3-score-btn jp3-score-plus" data-jp3-score="' + i + ':1">+ ' + slot.value + '</button>';
        html += '<button type="button" class="jp3-score-btn jp3-score-minus" data-jp3-score="' + i + ':-1">&minus; ' + slot.value + '</button>';
        html += '</div>';
      });
      html += '</div>';
      html += '<div class="jp-modal-actions"><button type="button" class="btn btn-ghost" data-jp-close-2>Done</button></div>';
    }

    modalEl.innerHTML = html;
    modalEl.querySelector("[data-jp-close]").addEventListener("click", closeModal);
    var closeBtn2 = modalEl.querySelector("[data-jp-close-2]");
    if (closeBtn2) closeBtn2.addEventListener("click", closeModal);
    var revealBtn = modalEl.querySelector("[data-jp3-reveal]");
    if (revealBtn) revealBtn.addEventListener("click", function () {
      revealed = true;
      markAnswered(activeSlot.catIndex, activeSlot.valIndex);
      renderModal();
      render();
    });
    modalEl.querySelectorAll("[data-jp3-score]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var parts = btn.getAttribute("data-jp3-score").split(":");
        var playerIndex = parseInt(parts[0], 10);
        var sign = parseInt(parts[1], 10);
        adjustScore(playerIndex, sign * slot.value);
      });
    });
  }

  function closeModal() {
    overlay.classList.remove("show");
    activeSlot = null;
    revealed = false;
  }

  // ---------------------------------------------------------------
  // boot
  // ---------------------------------------------------------------
  var saved = loadState();
  if (saved && saved.board && saved.board.length) {
    state = saved;
  } else {
    newGame();
    return;
  }
  render();
})();
