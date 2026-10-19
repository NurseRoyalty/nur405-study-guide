/* ============================================================
   site.js — shared per-page bootstrap for every page.
   Responsibilities:
     • the top navigation bar (single source of truth = SITE below),
       active-page highlighting, and the prev/next footer links
     • site chrome shared by all pages: dark-mode toggle, reading
       progress bar, back-to-top button, and the site search
     • an auto "On this page" table of contents on long content pages

   Desktop: Home + one top-level item per group; each group's pages
   appear in a hover dropdown. Mobile: a hamburger toggles a slide-
   down menu; tapping a group expands its pages.

   TO ADD A NEW PAGE (e.g. a new topic or practice exam):
     1. Create the .html file (copy an existing topic/exam page).
     2. Add one entry to the matching group's `items` array below.
   Everything else (menu, active state, prev/next) updates itself.
   The site search reads a prebuilt index from data/search-index.js;
   regenerate that after big content changes (see CLAUDE.md).
   ============================================================ */
/* Prefix for every localStorage key this site writes (exam scores,
   flashcard progress, in-progress exam answers). Change it per course so
   two study guides opened in the same browser never collide. site.js
   loads before exam.js and study.js on every page, so setting it here is
   enough. */
window.STORE_PREFIX = "nur405";   // CHANGE per course (e.g. "nur405") so two study guides in one browser never share saved scores

const SITE = {
  /* ---- EDIT THESE TWO for your course ---- */
  brand: "NUR405 Med Surg II",        // big text, top-left of the nav bar
  course: "Study Guide",              // small text under it

  home: { id: "home", title: "Home", file: "index.html" },

  /* ---- ONE ENTRY PER PAGE. This is the only place pages are listed. ----
     Adding an entry here wires up: the desktop dropdown, the mobile
     accordion, the "you are here" highlight, and the prev/next footer
     links. Order inside a group is the order they appear.
       id    - unique per page (used by search + per-page CSS hooks)
       num   - the little number badge in the dropdown
       title - display name; use &amp; for an ampersand
       file  - the filename, relative to this folder

     A group holds either `items` (a flat list) or `sections`
     (sub-headings, each with its own `items`) -- see the comment block
     at the bottom of this object for both shapes.                       */
  groups: [
    {
      label: "Week 1",
      items: [
        { id: "week1-comprehensive-study-guide", num: "1", title: "Comprehensive Study Guide", file: "week1-comprehensive-study-guide.html" },
        { id: "week1-cv-labs-diagnostics", num: "2", title: "CV Labs &amp; Diagnostics", file: "week1-cv-labs-diagnostics.html" },
        { id: "week1-cad-acs", num: "3", title: "CAD &amp; Acute Coronary Syndrome", file: "week1-cad-acs.html" },
        { id: "week1-pericarditis", num: "4", title: "Pericarditis", file: "week1-pericarditis.html" },
        { id: "week1-endocarditis", num: "5", title: "Infective Endocarditis", file: "week1-endocarditis.html" },
        { id: "week1-valvular-heart-disease", num: "6", title: "Valvular Heart Disease", file: "week1-valvular-heart-disease.html" },
        { id: "week1-big-picture-overview", num: "7", title: "Big Picture Overview", file: "week1-big-picture-overview.html" },
      ]
    },
    {
      label: "Week 2",
      items: [
        { id: "week2-comprehensive-study-guide", num: "1", title: "Comprehensive Study Guide", file: "week2-comprehensive-study-guide.html" },
        { id: "week2-eye-disorders", num: "2", title: "Eye Disorders", file: "week2-eye-disorders.html" },
        { id: "week2-prostate", num: "3", title: "Prostate &amp; BPH", file: "week2-prostate.html" },
        { id: "week2-stds", num: "4", title: "STDs", file: "week2-stds.html" },
        { id: "week2-big-picture-overview", num: "5", title: "Big Picture Overview", file: "week2-big-picture-overview.html" },
      ]
    },
    {
      label: "Week 3",
      items: [
        { id: "week3-comprehensive-study-guide", num: "1", title: "Comprehensive Study Guide", file: "week3-comprehensive-study-guide.html" },
        { id: "week3-intro-sinus-dysrhythmias", num: "2", title: "Intro &amp; Sinus Dysrhythmias", file: "week3-intro-sinus-dysrhythmias.html" },
        { id: "week3-atrial-dysrhythmias", num: "3", title: "PAC, A-Fib, A-Flutter &amp; PSVT", file: "week3-atrial-dysrhythmias.html" },
        { id: "week3-ventricular-dysrhythmias", num: "4", title: "PVC, V-Tach &amp; V-Fib", file: "week3-ventricular-dysrhythmias.html" },
        { id: "week3-hf-pad-aaa-raynauds", num: "5", title: "HF, PAD, AAA &amp; Raynaud's", file: "week3-hf-pad-aaa-raynauds.html" },
        { id: "week3-cvi-vte", num: "6", title: "CVI &amp; VTE", file: "week3-cvi-vte.html" },
        { id: "week3-big-picture-overview", num: "7", title: "Big Picture Overview", file: "week3-big-picture-overview.html" },
      ]
    },
    {
      label: "Med Surg I Review",
      items: [
        { id: "medsurg1-week1-respiratory", num: "1", title: "Week 1: Respiratory", file: "medsurg1-week1-respiratory.html" },
        { id: "medsurg1-week2-hematology", num: "2", title: "Week 2: Hematology", file: "medsurg1-week2-hematology.html" },
        { id: "medsurg1-week3-periop-fluids-electrolytes", num: "3", title: "Week 3: Periop, Fluids & Electrolytes", file: "medsurg1-week3-periop-fluids-electrolytes.html" },
        { id: "medsurg1-week4-renal-urinary", num: "4", title: "Week 4: Renal & Urinary", file: "medsurg1-week4-renal-urinary.html" },
        { id: "medsurg1-week5-integumentary-hiv-burns", num: "5", title: "Week 5: HIV, Skin, Wounds & Burns", file: "medsurg1-week5-integumentary-hiv-burns.html" },
        { id: "medsurg1-week6-gi", num: "6", title: "Week 6: Gastrointestinal", file: "medsurg1-week6-gi.html" },
        { id: "medsurg1-week7-cancer-hepatobiliary", num: "7", title: "Week 7: Cancer & Hepatobiliary", file: "medsurg1-week7-cancer-hepatobiliary.html" },
        { id: "medsurg1-comprehensive-study-guide", num: "8", title: "Comprehensive Study Guide (All 7 Weeks)", file: "medsurg1-comprehensive-study-guide.html" },
      ]
    },
    {
      label: "Exam Prep",
      items: [
        { id: "must-know",       num: "1", title: "Must Know Quick Reference", file: "must-know.html" },
        { id: "quiz-builder",    num: "2", title: "Build Your Own Exam",       file: "quiz-builder.html" },
        { id: "torture-chamber", num: "3", title: "The Torture Chamber",       file: "torture-chamber.html" },
        { id: "lecture-review-template", num: "4", title: "Lecture Review Template", file: "lecture-review-template.html" },
      ]
    },
    {
      label: "Jeopardy Games",
      items: [
        { id: "exam1-jeopardy", num: "1", title: "Exam 1 Jeopardy — 3 Player Game", file: "exam1-jeopardy.html" },
      ]
    },
    /* ---- ADD WHEN YOU BUILD THEM: the Jeopardy group ----
    {
      label: "Jeopardy Games",
      items: [
        { id: "exam2-jeopardy", num: "1", title: "Exam 1 Jeopardy — 3 Player Game", file: "exam2-jeopardy.html" },
      ]
    },
    ---- Weeks can also be grouped under sub-headings, e.g. one dropdown
    holding several weeks (this is how the NUR 326 site is laid out):
    {
      label: "Weeks 1–3",
      sections: [
        { heading: "Week 1", items: [ { id: "...", num: "1", title: "...", file: "..." } ] },
        { heading: "Week 2", items: [ ... ] },
      ]
    },
    */
  ]
};

// Cache-bust token read off our own <script src="assets/site.js?v=…">, so
// anything loaded lazily below shares the page's version without a second
// hardcoded string to keep in sync.
const SITE_VER = (function () {
  const s = document.currentScript || document.querySelector('script[src*="assets/site.js"]');
  const m = s && /[?&]v=([^&]+)/.exec(s.src || "");
  return m ? m[1] : "";
})();

(function () {
  // ---- Small helpers -------------------------------------------
  const isMobile = () => window.matchMedia("(max-width:899px)").matches;
  const slugify = s => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

  // localStorage that degrades to memory when the browser blocks it
  // (e.g. some file:// contexts) so features never throw.
  const store = (() => {
    const mem = {};
    return {
      get(k) { try { return localStorage.getItem(k); } catch (e) { return k in mem ? mem[k] : null; } },
      set(k, v) { try { localStorage.setItem(k, v); } catch (e) { mem[k] = v; } }
    };
  })();

  // Theme is applied by an inline <head> script on every page (no flash);
  // this file handles the toggle and carries the theme across page links so
  // it persists even where file:// blocks a shared localStorage.
  function withTheme(href) {
    const theme = document.documentElement.getAttribute("data-theme");
    let hash = "", h = href;
    const hi = h.indexOf("#"); if (hi >= 0) { hash = h.slice(hi); h = h.slice(0, hi); }
    const qi = h.indexOf("?");
    const path = qi >= 0 ? h.slice(0, qi) : h;
    const params = new URLSearchParams(qi >= 0 ? h.slice(qi + 1) : "");
    if (theme === "dark") params.set("theme", "dark"); else params.delete("theme");
    const qs = params.toString();
    return path + (qs ? "?" + qs : "") + hash;
  }
  document.addEventListener("click", e => {
    const a = e.target.closest && e.target.closest("a[href]");
    if (!a) return;
    const href = a.getAttribute("href");
    if (!href || href.charAt(0) === "#" || /^[a-z]+:/i.test(href)) return;
    if (!/\.html($|[?#])/.test(href)) return;
    a.setAttribute("href", withTheme(href));
  }, true);

  // ---- Which page are we on? (infer from filename) --------------
  const path = location.pathname.split("/").pop() || "index.html";
  const file = path === "" ? "index.html" : path;

  // Flatten the ordered list of pages for prev/next. Groups may list their
  // pages directly (`items`) or nested under sub-headings (`sections`, e.g.
  // the merged "Weeks 1–3" / "Weeks 4–6" dropdowns) — handle both shapes.
  const groupItems = g => g.sections ? g.sections.flatMap(s => s.items) : g.items;
  const flat = [];
  SITE.groups.forEach(g => groupItems(g).forEach(it => flat.push(it)));
  const current = flat.find(it => it.file === file) || null;

  // ---- Build the top nav ---------------------------------------
  let items = `<li class="top-item">
      <a class="toplink ${file === "index.html" ? "is-active" : ""}" href="index.html"${file === "index.html" ? ' aria-current="page"' : ""}>Home</a>
    </li>`;

  function droplinkHtml(it) {
    const active = it.file === file ? "is-active" : "";
    return `<li><a class="droplink ${active}" data-page="${it.id}" href="${it.file}"${active ? ' aria-current="page"' : ""}>
        <span class="num">${it.num}</span><span>${it.title}</span></a></li>`;
  }

  SITE.groups.forEach(g => {
    const groupActive = groupItems(g).some(it => it.file === file) ? "is-active" : "";
    let sub = "";
    if (g.sections) {
      g.sections.forEach(s => {
        sub += `<li class="dropdown-heading">${s.heading}</li>`;
        s.items.forEach(it => { sub += droplinkHtml(it); });
      });
    } else {
      g.items.forEach(it => { sub += droplinkHtml(it); });
    }
    items += `<li class="top-item has-dropdown">
      <a class="toplink ${groupActive}" href="#" aria-haspopup="true" aria-expanded="false">${g.label}<span class="caret" aria-hidden="true">▾</span></a>
      <ul class="dropdown">${sub}</ul>
    </li>`;
  });

  const header = document.createElement("header");
  header.className = "topnav";
  header.innerHTML = `
    <div class="topnav__inner">
      <a class="brand" href="index.html">
        <span class="brand__name">${SITE.brand}</span>
        <span class="brand__sub">${SITE.course}</span>
      </a>
      <nav class="topnav__menu" aria-label="Primary">
        <ul class="menu">${items}</ul>
      </nav>
      <div class="nav-utils">
        <button type="button" class="nav-icon" data-act="search" aria-label="Search the study guide" title="Search (press /)">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        </button>
        <button type="button" class="nav-icon" data-act="theme" aria-label="Toggle dark mode" title="Toggle dark mode">
          <svg class="ico-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>
          <svg class="ico-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>
        </button>
      </div>
      <button class="nav-toggle" aria-label="Open menu" aria-expanded="false">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
          <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
        </svg>
      </button>
    </div>`;

  document.body.insertBefore(header, document.body.firstChild);

  // ---- Reading progress bar (top of viewport) ------------------
  const progress = document.createElement("div");
  progress.className = "read-progress";
  progress.innerHTML = '<span></span>';
  document.body.appendChild(progress);
  const progressFill = progress.firstChild;

  // ---- Back-to-top button --------------------------------------
  const toTop = document.createElement("button");
  toTop.type = "button";
  toTop.className = "to-top";
  toTop.setAttribute("aria-label", "Back to top");
  toTop.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 15l-6-6-6 6"/></svg>';
  toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  document.body.appendChild(toTop);

  function onScroll() {
    const h = document.documentElement;
    const max = h.scrollHeight - h.clientHeight;
    const top = h.scrollTop || document.body.scrollTop;
    const pct = max > 0 ? top / max : 0;
    progressFill.style.width = (pct * 100).toFixed(2) + "%";
    toTop.classList.toggle("show", top > 600);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });
  onScroll();

  // ---- Nav interactions ----------------------------------------
  const toggle = header.querySelector(".nav-toggle");
  const closeMenu = () => { header.classList.remove("open"); toggle.setAttribute("aria-expanded", "false"); };

  toggle.addEventListener("click", () => {
    const open = header.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });

  // On mobile (hamburger visible), tapping a group heading expands
  // its sub-menu instead of following the "#" link.
  header.querySelectorAll(".has-dropdown > .toplink").forEach(a => {
    a.addEventListener("click", e => {
      e.preventDefault();
      if (isMobile()) {
        const li = a.parentElement;
        const expanded = li.classList.toggle("expanded");
        a.setAttribute("aria-expanded", expanded ? "true" : "false");
      }
    });
    // keep aria-expanded honest for desktop hover/focus users
    const li = a.parentElement;
    li.addEventListener("mouseenter", () => { if (!isMobile()) a.setAttribute("aria-expanded", "true"); });
    li.addEventListener("mouseleave", () => { if (!isMobile()) a.setAttribute("aria-expanded", "false"); });
    li.addEventListener("focusin", () => { if (!isMobile()) a.setAttribute("aria-expanded", "true"); });
    li.addEventListener("focusout", () => { if (!isMobile()) a.setAttribute("aria-expanded", "false"); });
  });

  // Tapping a real page link (or the brand/Home) closes the mobile menu.
  header.querySelectorAll('.droplink, .brand, .top-item > a.toplink[href="index.html"]').forEach(a => {
    a.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", e => { if (e.key === "Escape") closeMenu(); });

  // ---- Dark-mode toggle ----------------------------------------
  header.querySelector('[data-act="theme"]').addEventListener("click", () => {
    const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    store.set("theme", next);
    onScroll(); // heights can shift slightly
  });

  // ---- Section anchors, collapsible sections, TOC & top controls
  const contentRoot = document.getElementById("content");
  if (contentRoot) {
    const headings = Array.from(contentRoot.querySelectorAll("h2.block"));
    const used = {};
    headings.forEach(h => {
      if (!h.id) {
        let base = slugify(h.textContent) || "section";
        let id = base, n = 2;
        while (used[id]) id = base + "-" + n++;
        used[id] = true;
        h.id = id;
      }
    });

    function setCollapsed(sec, collapsed) {
      sec.h.classList.toggle("collapsed", collapsed);
      sec.body.classList.toggle("section-collapsed", collapsed);
      sec.h.setAttribute("aria-expanded", collapsed ? "false" : "true");
    }

    // Wrap each main section so its heading can collapse it.
    const sections = [];
    headings.forEach(h => {
      const body = document.createElement("div");
      body.className = "section-body";
      let el = h.nextElementSibling;
      while (el && !(el.matches && el.matches("h2.block, nav.page-flip, footer.site-foot"))) {
        const nxt = el.nextElementSibling;
        body.appendChild(el);
        el = nxt;
      }
      if (!body.childNodes.length) return;
      h.after(body);
      h.classList.add("section-h");
      h.setAttribute("role", "button");
      h.setAttribute("tabindex", "0");
      h.setAttribute("aria-expanded", "true");
      const caret = document.createElement("span");
      caret.className = "sec-caret";
      caret.setAttribute("aria-hidden", "true");
      caret.textContent = "▾";
      h.appendChild(caret);
      const sec = { h, body };
      sections.push(sec);
      const toggle = () => setCollapsed(sec, !h.classList.contains("collapsed"));
      h.addEventListener("click", toggle);
      h.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(); } });
    });

    // "On this page" TOC (long pages only), always a single column.
    let details = null;
    if (headings.length >= 3) {
      details = document.createElement("details");
      details.className = "page-toc";
      if (!isMobile()) details.open = true;
      const links = headings.filter(h => !h.hasAttribute("data-toc-skip")).map(h => {
        const label = (h.firstChild ? h.firstChild.textContent : h.textContent).trim();
        return `<li><a href="#${h.id}">${label}</a></li>`;
      }).join("");
      details.innerHTML = `<summary>On this page</summary><nav aria-label="On this page"><ul>${links}</ul></nav>`;
      details.querySelectorAll("a").forEach(a => {
        a.addEventListener("click", () => { if (isMobile()) details.open = false; });
      });
    }

    // Collapse/expand-all button, placed directly under the TOC.
    let cbtn = null;
    if (sections.length) {
      cbtn = document.createElement("button");
      cbtn.type = "button";
      cbtn.className = "def-btn page-toc-collapse-btn";
      cbtn.textContent = "Collapse all headings";
      let collapsedMode = false;
      cbtn.addEventListener("click", () => {
        collapsedMode = !collapsedMode;
        sections.forEach(sec => setCollapsed(sec, collapsedMode));
        cbtn.textContent = collapsedMode ? "Expand all headings" : "Collapse all headings";
      });
    }

    // Top block: TOC, with the collapse/expand button directly beneath it.
    if (details || cbtn) {
      const top = document.createElement("div");
      top.className = "page-top";
      if (details) top.appendChild(details);
      if (cbtn) top.appendChild(cbtn);
      const anchorEl = contentRoot.querySelector(".lead") || contentRoot.querySelector(".page-head");
      if (anchorEl) anchorEl.insertAdjacentElement("afterend", top);
      else {
        const inner = contentRoot.querySelector(".page-inner") || contentRoot;
        inner.insertBefore(top, inner.firstChild);
      }
    }
  }

  // ---- Site search ---------------------------------------------
  (function search() {
    const btn = header.querySelector('[data-act="search"]');
    if (!btn) return;

    /* The index is ~150 KB — more than the rest of the site's CSS+JS put
       together — and most page views never search. So it is NOT included by
       the pages; it is fetched the first time the search is opened. */
    const INDEX_SRC = "data/search-index.js" + (SITE_VER ? "?v=" + SITE_VER : "");
    let entries = null, loading = null;

    // Flatten the grouped index into one entry per keyword.
    function buildEntries() {
      const raw = window.SEARCH_INDEX || [];
      const out = [];
      raw.forEach(pg => (pg.secs || []).forEach(sec => (sec.k || []).forEach(kw => {
        out.push({
          f: pg.f, t: pg.t, s: sec.s, a: sec.a, kw,
          hay: (kw + " " + sec.s + " " + pg.t).toLowerCase(),
          kwl: kw.toLowerCase()
        });
      })));
      return out;
    }

    function loadIndex() {
      if (entries) return Promise.resolve();
      if (loading) return loading;
      loading = new Promise(resolve => {
        if (window.SEARCH_INDEX) { entries = buildEntries(); resolve(); return; }
        const s = document.createElement("script");
        s.src = INDEX_SRC;
        s.onload = () => { entries = buildEntries(); resolve(); };
        s.onerror = () => { entries = []; resolve(); };
        document.head.appendChild(s);
      });
      return loading;
    }

    const overlay = document.createElement("div");
    overlay.className = "search-overlay";
    overlay.innerHTML = `
      <div class="search-box" role="dialog" aria-modal="true" aria-label="Search the study guide">
        <div class="search-head">
          <svg class="search-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          <input type="search" class="search-input" placeholder="Search topics, terms, sections…" autocomplete="off" aria-label="Search">
          <button type="button" class="search-close" aria-label="Close search">✕</button>
        </div>
        <div class="search-results" role="listbox"></div>
        <p class="search-hint">Type at least 2 letters · ↑↓ to move · Enter opens · Esc closes</p>
      </div>`;
    document.body.appendChild(overlay);

    const input = overlay.querySelector(".search-input");
    const results = overlay.querySelector(".search-results");
    let matches = [], sel = 0;

    const esc = s => s.replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
    // Show a windowed snippet around the match (entries may be full sentences).
    function mark(text, q) {
      const i = text.toLowerCase().indexOf(q);
      if (i < 0) return esc(text.length > 100 ? text.slice(0, 100) + "…" : text);
      const pad = 48;
      const start = Math.max(0, i - pad), end = Math.min(text.length, i + q.length + pad);
      const pre = (start > 0 ? "…" : "") + text.slice(start, i);
      const post = text.slice(i + q.length, end) + (end < text.length ? "…" : "");
      return esc(pre) + "<mark>" + esc(text.slice(i, i + q.length)) + "</mark>" + esc(post);
    }

    function open() {
      overlay.classList.add("show");
      input.value = "";
      render("");
      setTimeout(() => input.focus(), 30);
      loadIndex();                       // warm it while she starts typing
    }
    function close() { overlay.classList.remove("show"); }

    function render(q) {
      q = q.trim().toLowerCase();
      if (q.length < 2) {
        matches = [];
        results.innerHTML = '<p class="search-empty">Start typing to search every page.</p>';
        return;
      }
      if (!entries) {                    // still fetching — re-render when it lands
        matches = [];
        results.innerHTML = '<p class="search-empty">Loading search index…</p>';
        loadIndex().then(() => { if (overlay.classList.contains("show")) render(input.value); });
        return;
      }
      const scored = [];
      for (const e of entries) {
        const idx = e.hay.indexOf(q);
        if (idx < 0) continue;
        let score = 3;
        if (e.kwl === q) score = 0;
        else if (e.kwl.startsWith(q)) score = 1;
        else if (e.kwl.indexOf(q) >= 0) score = 2;
        scored.push({ e, score });
      }
      scored.sort((a, b) => a.score - b.score || a.e.kw.length - b.e.kw.length);
      matches = scored.slice(0, 25).map(x => x.e);
      sel = 0;
      if (!matches.length) {
        results.innerHTML = '<p class="search-empty">No matches. Try a shorter or different term.</p>';
        return;
      }
      results.innerHTML = matches.map((e, i) => {
        const href = e.f + (e.a ? "#" + e.a : "");
        const crumb = e.t + (e.s && e.s !== e.kw ? " › " + e.s : "");
        return `<a class="search-hit${i === 0 ? " is-sel" : ""}" href="${href}" role="option" data-i="${i}">
          <span class="hit-kw">${mark(e.kw, q)}</span>
          <span class="hit-crumb">${esc(crumb)}</span></a>`;
      }).join("");
    }

    function updateSel() {
      const hits = results.querySelectorAll(".search-hit");
      hits.forEach((h, i) => h.classList.toggle("is-sel", i === sel));
      const cur = hits[sel];
      if (cur) cur.scrollIntoView({ block: "nearest" });
    }

    btn.addEventListener("click", open);
    overlay.querySelector(".search-close").addEventListener("click", close);
    overlay.addEventListener("click", e => { if (e.target === overlay) close(); });
    input.addEventListener("input", () => render(input.value));
    input.addEventListener("keydown", e => {
      if (e.key === "ArrowDown") { e.preventDefault(); if (matches.length) { sel = (sel + 1) % matches.length; updateSel(); } }
      else if (e.key === "ArrowUp") { e.preventDefault(); if (matches.length) { sel = (sel - 1 + matches.length) % matches.length; updateSel(); } }
      else if (e.key === "Enter") { const cur = matches[sel]; if (cur) location.href = withTheme(cur.f + (cur.a ? "#" + cur.a : "")); }
    });

    document.addEventListener("keydown", e => {
      if (e.key === "Escape") { close(); return; }
      const typing = /^(INPUT|TEXTAREA|SELECT)$/.test((e.target.tagName || "")) || e.target.isContentEditable;
      if (!typing && e.key === "/") { e.preventDefault(); open(); }
      if ((e.ctrlKey || e.metaKey) && (e.key === "k" || e.key === "K")) { e.preventDefault(); open(); }
    });
  })();

  // ---- Prev / next footer links --------------------------------
  const holder = document.querySelector("[data-page-flip]");
  if (holder && current) {
    const idx = flat.indexOf(current);
    const prev = idx > 0 ? flat[idx - 1] : null;
    const next = idx < flat.length - 1 ? flat[idx + 1] : null;
    let html = "";
    if (prev) html += `<a class="prev" href="${prev.file}"><span class="dir">← Previous</span><span class="ttl">${prev.title}</span></a>`;
    if (next) html += `<a class="next" href="${next.file}"><span class="dir">Next →</span><span class="ttl">${next.title}</span></a>`;
    holder.innerHTML = html;
  }
})();
