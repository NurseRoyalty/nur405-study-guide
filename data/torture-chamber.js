/* ============================================================
   torture-chamber.js — "The Torture Chamber" practice exam.

   A cumulative exam where EVERY question is select-all-that-apply.
   Content comes only from lecture material already taught on the
   topic pages. Aim for roughly one question per 10 of your topic
   pages' content, weighted toward whatever the instructor says the
   final actually emphasizes.

   ============================================================
   THE FOUR ANTI-GIVEAWAY RULES. READ BEFORE ADDING QUESTIONS.
   ============================================================
   These exist because each one was violated first and fixed later.
   Authoring naturally produces all four defects; scan for them
   explicitly after writing questions in bulk.

   1. INTERLEAVE the correct and incorrect options.
      The failure mode: listing every correct option first and the
      wrong one last. In the original site 48 of 50 questions did
      this and 38 keys were literally [0,1,2,3] — the whole exam was
      answerable without reading a single option.
      Check: tabulate the positions of the WRONG options across the
      whole file. There should be no pattern.

   2. VARY the number of correct options, and keep the spread even.
      The failure mode: nearly every question having exactly four
      correct, which makes "pick four" a viable strategy. Mix 1, 2,
      3, 4, 5, and all-correct. A couple of all-correct items and a
      couple of single-correct items are what make the set feel
      genuinely uncertain. Also mix 5-option and 6-option questions
      so "4 of 5" is never the default shape.
      Check: count correct-options-per-question and look at the
      histogram.

   3. NO LENGTH BIAS, and NO SELF-EXPLAINING correct options.
      The failure mode: the right answer is the longest option and
      the only one carrying a "because…" clause, so it reads as the
      one that knows what it's talking about. Trim the explanation
      into the rationale, and give the distractors plausible-sounding
      reasoning of their own (right reasoning, wrong fact).
      Check: compare average correct-option length to average
      wrong-option length, per question.

   4. NO STEM-WORD ECHO.
      The failure mode: a distinctive phrase from the stem appears
      only in the correct options, so the key is readable from
      vocabulary alone. Reword the stem, or put the same phrasing
      into a distractor.
      Check: for each question, find words that appear in the stem
      and in the correct options but in no incorrect option.

   Distractors should be plausible near-misses built from the same
   lecture material — a flipped sign, a wrong threshold, the right
   action attributed to the wrong person, a therapeutic value offered
   as a toxic one. When you drop a correct option to rebalance rule 2,
   the best replacement distractor is usually built from the fact you
   just removed, stated wrongly. Nothing is lost; it gets tested from
   the other side.

   ============================================================
   ORDERING
   ============================================================
   Scramble with a RANDOM SHUFFLE plus rejection sampling, not a
   greedy "place the topic with the most remaining questions next"
   pass. Greedy satisfies the no-adjacent-duplicates rule and still
   clusters badly — it front-loads the big topics into a visible
   rotation and then leaves them sparse. Accept an arrangement only if:

     * no two adjacent questions share a topic;
     * no two adjacent questions are both all-correct;
     * every topic with 4+ questions has a minimum gap of 3 (when the
       topic pool is large enough for this to be mathematically
       possible — see the 2026-08-23 note below for when it isn't);
     * no third of the exam holds far more of one topic than another;
     * no 3-topic cycle repeats three times running (A B C A B C A B C).

   ============================================================
   PROVENANCE NOTE
   ============================================================
   Keep a dated log here of what changed and why — question count,
   per-topic counts, the answer-count spread, and any rebalance. It is
   the only record of the design decisions once the questions are
   shuffled.

   (Add dated entries here as you build: question count, per-topic counts,
   the correct-answer-count histogram, and what the mechanical checks found.)
   ============================================================ */
// Every question carries `week: N`; assets/torture.js builds the week picker from it.
// See reference/torture-chamber-style-sample.js for finished questions.
window.EXAM_DATA = {
  id: "torture-chamber",
  title: "The Torture Chamber",
  history: false,

  questions: [
    /* { stem: "...", options: ["...", ...7 or 8...], answers: [1, 4, 6],
         rationale: "A (incorrect): ... B (correct): ...", topic: "Exact Topic Label", week: 1 }, */
  ]
};

/* Display order for the topic-breakdown strip at the top of the page. */
window.TOPIC_ORDER = [
];
