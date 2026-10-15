/* ============================================================
   quiz-bank.js — the "Build Your Own Exam" question bank.

   Structure: one entry per TOPIC, each with three question SETS.
   The page renders topics as rows and sets as columns, so a topic
   with an empty set shows a greyed-out, unselectable cell. Nothing
   breaks if a set is empty — leave it [] until you have content.

   ------------------------------------------------------------
   THE THREE SETS, AND WHAT EACH IS FOR
   ------------------------------------------------------------
   mustKnow       Tracks the bullets on must-know.html ONE FOR ONE.
                  This is a hard invariant. Cut a bullet there, the
                  question goes too — UNLESS a surviving bullet still
                  depends on it. Add a bullet, it needs a question.

   extraPractice  High-yield lecture content that is NOT on the Must
                  Know page. Must not test the same point as any
                  mustKnow question in the same topic.

   eaq            Imported from an outside question bank (a publisher's
                  adaptive quizzing product, a question app, whatever).
                  Rename the column in `columns` below to suit. If your
                  course has no such source, leave every one empty and
                  the column simply renders as disabled.

   ------------------------------------------------------------
   INVARIANTS TO CHECK AFTER ANY EDIT (see RULES.md)
   ------------------------------------------------------------
     * Every topic carries exactly 1 mustKnow SATA + 1 extraPractice
       SATA (topics with very little content are the only exception,
       and should be listed as exceptions in your CLAUDE.md).
     * No duplicate stems anywhere in the file.
     * No answer slot holds more than ~50% of a topic's questions.
       Authoring naturally puts the right answer first — rotate them
       deliberately, asserting the option SET is unchanged so no
       content drifts.
     * Every question has topic, source, and a non-empty rationale.
     * Every answer/answers index is in range.

   ------------------------------------------------------------
   ADDING A TOPIC
   ------------------------------------------------------------
   Copy a whole { id, label, week, sets } block. `label` is what shows
   in the row and in the topic-breakdown strip, and every question's
   `topic` field in that block must match it EXACTLY.
   ============================================================ */
window.QUIZ_BANK = {

  /* Column headings and the legend under the intro line. Rename these
     for your course — "EAQs" only means something in a nursing program. */
  columns: [
    { key: "mustKnow",      label: "Must Know",      blurb: "Everything the lectures explicitly stated or heavily hinted will be tested." },
    { key: "extraPractice", label: "Extra Practice", blurb: "Other topics from the lecture content, prioritized by highest yield." },
    { key: "eaq",           label: "Question Bank",  blurb: "Imported questions from an outside question bank, sorted by topic, with duplicates removed." }
  ],

  topics: [
    /* ---- one block per topic page. Copy this, fill it in, and remove the
       comment markers. `label` must equal every question's `topic` EXACTLY.
       See reference/practice-questions-style-sample.js for a real, finished topic.
    {
      "id": "week1-example-topic",
      "label": "Example Topic",
      "week": 1,
      "sets": {
        "mustKnow": [],
        "extraPractice": [
          {
            "stem": "A scenario stem ...",
            "options": ["...", "...", "...", "..."],
            "answer": 0,
            "rationale": "Correct: ... Incorrect: ...",
            "topic": "Example Topic",
            "source": "quiz-bank"
          }
        ],
        "eaq": []
      }
    }
    ---- */
  ],

  TOPIC_ORDER: [
  ]
};
