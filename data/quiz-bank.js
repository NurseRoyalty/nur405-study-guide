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
    {
      "id": "week1-cv-labs-diagnostics",
      "label": "CV Labs &amp; Diagnostics",
      "week": 1,
      "sets": {
        "mustKnow": [],
        "extraPractice": [
          {
            "stem": "A client is brought to the ED after a motor vehicle crash with bruising across the chest and both thighs. The client reports substernal pressure. Results show an elevated CK-MB and a troponin within normal limits. How should the nurse interpret these findings?",
            "options": [
              "The CK-MB rise may reflect the crash injuries, so the troponin is the more reliable guide to cardiac damage.",
              "The CK-MB rise confirms heart cell death, so the normal troponin is most likely a lab error or a timing error.",
              "Both markers are equally specific to the heart, so the conflicting results mean the test must be redrawn.",
              "The normal troponin rules out a cardiac cause, so serial draws and further cardiac workup are not needed."
            ],
            "answer": 0,
            "rationale": "Correct: CK-MB reflects muscle damage but is not specific to the heart; the page's own example is a motor vehicle crash patient whose CK-MB is elevated from muscle injury. Troponin is the most sensitive indicator of myocardial damage and helps tell cardiac from non-cardiac chest pain. Incorrect: Treating the CK-MB as proof of heart cell death ignores that it is less specific than troponin. The markers are not equally specific. A single normal troponin does not end the workup, because troponin is usually drawn serially (initial, then about 3 and 6 hours later).",
            "topic": "CV Labs &amp; Diagnostics",
            "source": "quiz-bank"
          },
          {
            "stem": "A client arrives at the ED 1 hour after the sudden onset of crushing substernal chest pressure. The initial troponin is normal, and the client says, \"Good, my heart is fine, so I can go home now.\" Which response by the nurse is most accurate?",
            "options": [
              "\"A normal troponin this early rules out heart damage, so the provider will most likely discharge you home soon.\"",
              "\"Troponin may not rise until 2 to 3 hours after heart damage, so it is usually repeated over several hours.\"",
              "\"Troponin rises within minutes but falls back quickly, so the next step is checking your CK-MB instead.\"",
              "\"Troponin only rises after 10 to 14 days, so the provider will rely on your cholesterol level for now.\""
            ],
            "answer": 1,
            "rationale": "Correct: Troponin elevates 2 to 3 hours after an MI and returns to baseline in 10 to 14 days, so a draw taken 1 hour after onset can be normal; that is why it is drawn serially (initial, then perhaps 3 and 6 hours later). Incorrect: An early normal value does not rule out damage. Troponin does not rise within minutes and fall quickly; it stays elevated for 10 to 14 days, and CK-MB is less specific, not a replacement. The 10 to 14 day figure is when troponin returns to baseline, not when it first rises, and cholesterol is a risk predictor rather than a marker of acute damage.",
            "topic": "CV Labs &amp; Diagnostics",
            "source": "quiz-bank"
          },
          {
            "stem": "A client with a long history of chronic lung disease comes to the ED short of breath. The provider is unsure whether the dyspnea is respiratory or cardiac. The pro-BNP is markedly elevated, the troponin is normal, and an echocardiogram shows an ejection fraction of 40%. Which conclusion is best supported?",
            "options": [
              "The lung history explains the dyspnea, since an elevated pro-BNP mainly reflects a respiratory problem.",
              "The troponin is normal, so the elevated pro-BNP and low ejection fraction are most likely from an MI.",
              "The pro-BNP comes mainly from the brain, so the result points to a neurologic cause of the dyspnea.",
              "The pro-BNP and the ejection fraction both point to left ventricular dysfunction, as in heart failure."
            ],
            "answer": 3,
            "rationale": "Correct: BNP and pro-BNP help distinguish cardiac from respiratory causes of dyspnea; an elevated value indicates left ventricular dysfunction, and pro-BNP rises much more than BNP in left-sided heart failure. A low ejection fraction such as 40% is seen in heart failure (normal is 55% to 70%). Rule of thumb: BNP elevated, think heart failure; troponin elevated, think MI. Incorrect: The lung history is a red herring; an elevated pro-BNP points toward a cardiac, not respiratory, cause. A normal troponin argues against MI rather than for it. Despite the name, the main source of BNP is the ventricles of the heart, not the brain.",
            "topic": "CV Labs &amp; Diagnostics",
            "source": "quiz-bank"
          },
          {
            "stem": "A client is on day 5 after an MI. The CRP has not normalized, and the ESR is also elevated. The client has a long history of arthritis. Which interpretation by the nurse is most accurate?",
            "options": [
              "The ESR is the better marker of acute changes after an MI, so the CRP can be disregarded at this point.",
              "The CRP shows that the inflammation is in the heart, so the arthritis can be safely excluded as a contributor.",
              "The elevated ESR proves an infection is present, so a source of infection should be the main concern.",
              "A CRP that fails to normalize may mean ongoing heart damage, though it cannot show where inflammation is."
            ],
            "answer": 3,
            "rationale": "Correct: CRP peaks within 18 to 72 hours after an MI, is more sensitive than the ESR, and monitors the acute picture more closely; failure to normalize might indicate ongoing damage to the heart muscle. Both CRP and ESR are non-specific and do not show where the inflammation is, so the arthritis could also contribute. Incorrect: The ESR is more useful for chronic inflammation, not the acute post-MI picture. The CRP does not localize inflammation to the heart. An elevated ESR could possibly reflect infection, but it does not prove one.",
            "topic": "CV Labs &amp; Diagnostics",
            "source": "quiz-bank"
          },
          {
            "stem": "During a health screening, a client says, \"My total cholesterol came back at 185, so I have no risk for heart disease and don't need the rest of the lipid panel.\" Which response by the nurse is most accurate?",
            "options": [
              "\"Your total is at goal, so the HDL and LDL are only drawn if you develop chest pain.\"",
              "\"Under 200 is the goal, but your HDL and LDL predict heart disease more accurately than the total alone.\"",
              "\"A total under 200 means your LDL must be low, so your provider will most likely skip the HDL test.\"",
              "\"Total cholesterol is the accurate predictor, so a value under 200 means your heart disease risk is very low.\""
            ],
            "answer": 1,
            "rationale": "Correct: Total cholesterol less than 200 is the number to know, but total cholesterol alone is not a totally accurate predictor of heart disease; HDL and LDL are an accurate predictor and help determine whether the client is at low, moderate, or high risk for CAD. Incorrect: HDL and LDL are part of the risk picture regardless of symptoms; chest pain is not the trigger for drawing them. A normal total does not mean the LDL is low or that HDL can be skipped, since high HDL and low LDL are each part of the risk picture. Calling the total the accurate predictor flips the page: that role belongs to HDL and LDL.",
            "topic": "CV Labs &amp; Diagnostics",
            "source": "quiz-bank"
          },
          {
            "stem": "A client on telemetry calls the nurse to report new chest pain, and the central monitor shows a change in rhythm. Which action should the nurse take first?",
            "options": [
              "Print a strip from the telemetry monitor so the provider can use it to diagnose an MI.",
              "Request a Holter monitor so the rhythm can be recorded and reviewed over the next day.",
              "Obtain a stat 12-lead EKG, since telemetry can monitor the rhythm but cannot diagnose.",
              "Schedule a stress test so the chest pain can be reproduced while the rhythm is watched."
            ],
            "answer": 2,
            "rationale": "Correct: Telemetry gives continuous monitoring but only a one-way perspective; it can monitor for abnormal rhythms but cannot diagnose. A tele patient with chest pain or an abnormal rhythm gets a stat 12-lead EKG, which looks from 12 perspectives at once and lets the provider diagnose an MI. Incorrect: A telemetry strip cannot be used to diagnose an MI. A Holter monitor is a recorded, at-home test that no one watches in real time, so it does not address acute chest pain. A stress test deliberately stresses the heart and is for chest pain with exertion, not new chest pain happening now.",
            "topic": "CV Labs &amp; Diagnostics",
            "source": "quiz-bank"
          },
          {
            "stem": "A client with a dysrhythmia that has not responded to standard treatment is scheduled for an electrophysiology (EP) study in 3 days. The client says, \"I'll keep taking my rhythm medication right up until the test so my heart stays steady for them.\" Which response by the nurse is most accurate?",
            "options": [
              "\"That's right; a steady rhythm lets the team see the electrical system clearly during the study.\"",
              "\"Take the medication with sips of water the morning of the test, then hold it after the procedure.\"",
              "\"Your rhythm medication is usually stopped a few days before, since the team wants to induce one.\"",
              "\"Stop it the night before only, and then you will stay NPO and awake throughout the procedure.\""
            ],
            "answer": 2,
            "rationale": "Correct: An EP study induces dysrhythmias on purpose in a controlled environment to confirm the root of the electrical problem, so antidysrhythmics are discontinued for a few days beforehand. Incorrect: Keeping the rhythm steady defeats the purpose of the study. Sips of water with morning meds is a provider decision before a heart cath, not a reason to continue antidysrhythmics before an EP study. Stopping the night before is too late, and the client is NPO 8 hours before and sedated during the study, not awake.",
            "topic": "CV Labs &amp; Diagnostics",
            "source": "quiz-bank"
          },
          {
            "stem": "A client returns from a transesophageal echocardiogram (TEE) done with conscious sedation. The client is alert, reports a sore throat, and asks for a glass of water. The gag reflex has not yet returned. Which action is most appropriate?",
            "options": [
              "Keep the client NPO for now, and explain that a sore throat afterward is an expected effect.",
              "Give small sips of water now, since the client is alert and the sedation has worn off.",
              "Report the sore throat to the provider at once as a sign of injury from the esophageal probe.",
              "Offer the water now, since forcing fluids after the test protects the kidneys from the dye."
            ],
            "answer": 0,
            "rationale": "Correct: After a TEE, the client stays NPO until the gag reflex returns, and a sore throat afterward is an expected finding. Incorrect: Being alert does not replace a returned gag reflex, so sips of water are unsafe yet. A sore throat is expected after the probe and is not by itself a sign of injury. Forcing fluids does apply when contrast dye is used, but it does not override NPO status before the gag reflex returns.",
            "topic": "CV Labs &amp; Diagnostics",
            "source": "quiz-bank"
          },
          {
            "stem": "Four hours after a left heart cath through the femoral artery, the nurse assesses the client. Which finding requires the nurse's immediate action?",
            "options": [
              "A firm, growing swelling at the groin site and a weaker pedal pulse on the affected leg",
              "Reports of low back stiffness from lying flat with the affected leg kept straight in bed",
              "Recall of a warm flush during the procedure that went away soon after the dye injection",
              "Reports of mild discomfort at the groin site after pressure was held for about 20 minutes"
            ],
            "answer": 0,
            "rationale": "Correct: Bleeding is the number one complication of a heart cath; heparin is used during the procedure and arteries are high-pressure vessels, so the site is watched closely for hematomas, and circulation distal to the puncture (pulse, color, sensation) is assessed frequently. A growing groin swelling with a weaker pedal pulse suggests a hematoma with poor distal perfusion. Incorrect: Bed rest of at least 8 hours with the leg straight and the head of the bed below 30 degrees is expected, so stiffness is an expected effect of required care. The warm flush during dye injection is an expected finding. Pressure is held up to about 20 minutes after sheath removal, and mild site discomfort is not the priority over a possible bleed.",
            "topic": "CV Labs &amp; Diagnostics",
            "source": "quiz-bank"
          },
          {
            "stem": "A client with diabetes and a fluid volume deficit is scheduled for a cardiac catheterization with angiography. Which actions should the nurse include in the plan of care? Select all that apply.",
            "options": [
              "Review BUN and creatinine results on the pre-procedure checklist",
              "Anticipate acetylcysteine given before the procedure, as ordered",
              "Encourage the client to force fluids after the procedure is done",
              "Limit fluids after the procedure so the dye stays more concentrated",
              "Stop the procedure if the client reports a warm flush with the dye",
              "Tell the client to expect sharp pain as the catheter moves upward"
            ],
            "answers": [
              0,
              1,
              2
            ],
            "rationale": "Correct: Contrast nephrotoxicity is an AKI after dye injection and a major cause of AKI in hospitalized patients; risk is higher with renal problems, diabetes, or fluid volume deficit. BUN and creatinine are monitored, acetylcysteine (and sometimes sodium bicarbonate) is given before the procedure, and the client forces fluids afterward to dilute the dye going through the kidneys. Incorrect: Limiting fluids flips the teaching, since fluids dilute the dye. The warm flush or hot flash with dye injection is an expected finding the client should be warned about, not a reason to stop. There is very little pain, because blood vessels do not have nerve fibers.",
            "topic": "CV Labs &amp; Diagnostics",
            "source": "quiz-bank"
          }
        ],
        "eaq": []
      }
    },
    {
      "id": "week1-cad-acs",
      "label": "CAD &amp; Acute Coronary Syndrome",
      "week": 1,
      "sets": {
        "mustKnow": [],
        "extraPractice": [
          {
            "stem": "A client with chronic stable angina calls the clinic from home. Chest pain began while mowing the lawn; the client sat down and took one sublingual nitroglycerin tablet, which tingled as it dissolved. Five minutes later the pain is worse. Which instruction by the nurse is correct?",
            "options": [
              "Call 911 right now, and chew an aspirin while waiting for emergency help to arrive.",
              "Take a second nitroglycerin tablet now, and call 911 if a third one is needed.",
              "Keep resting for another 15 minutes, since stable angina often resolves with rest.",
              "Replace the nitroglycerin bottle, since worsening pain means the tablets have expired."
            ],
            "answer": 0,
            "rationale": "Correct: The current guideline is that if chest pain has not improved, or has worsened, 5 minutes after the first nitro, the client calls 911 and chews an aspirin immediately. Incorrect: Taking up to three nitros before calling 911 is the old teaching that is no longer the case. Waiting longer costs heart muscle, because cells tolerate only about 20 minutes of ischemia. The tablet tingled, which argues against expired nitro, and continued pain calls for EMS either way.",
            "topic": "CAD &amp; Acute Coronary Syndrome",
            "source": "quiz-bank"
          },
          {
            "stem": "A client admitted with chest discomfort is on telemetry. The nurse notices new ST elevation on the monitor; the client is alert, BP is 132/80, and the client rates the discomfort 4 out of 10. What is the nurse's next best action?",
            "options": [
              "Document the finding as a STEMI and notify the provider of the diagnosis.",
              "Recheck the monitor in 15 minutes to see whether the ST change still persists.",
              "Obtain a 12-lead EKG to evaluate for ST elevation in two contiguous leads.",
              "Give sublingual nitroglycerin and reassess the ST segment on the monitor."
            ],
            "answer": 2,
            "rationale": "Correct: A STEMI cannot be diagnosed by telemetry; it takes a 12-lead EKG showing ST elevation in two anatomically contiguous leads, so a 12-lead is the next best nursing action when ST elevation appears on tele (cardiac nurses usually have a standing order). Incorrect: Labeling it a STEMI from the monitor is not possible. Waiting delays care when time is muscle. Treating pain does not answer whether this is an infarction, and the stable BP and moderate pain are red herrings that do not change the need for a 12-lead.",
            "topic": "CAD &amp; Acute Coronary Syndrome",
            "source": "quiz-bank"
          },
          {
            "stem": "A client with ACS received one sublingual nitroglycerin 5 minutes ago and still reports crushing chest pressure. Before the next dose, the nurse finds a BP of 86/56; the client's admission BP was 92/60. Which action is most appropriate?",
            "options": [
              "Give the next nitroglycerin dose, since chest pain persisting after 5 minutes requires it.",
              "Hold further nitroglycerin and anticipate IV morphine to relieve the client's chest pain.",
              "Give the next dose and recheck the BP 5 minutes later, before any third dose is given.",
              "Hold all pain medication until the BP returns above the client's admission baseline."
            ],
            "answer": 1,
            "rationale": "Correct: Always know the BP before giving nitroglycerin because it will lower it; a client with a low baseline such as 90/60 can plummet. If BP is too low, no more nitro is given and something different, like IV morphine, is used. Morphine eases cardiac workload, decreases preload and afterload, helps anxiety, and is often tolerated better than nitro. Incorrect: Persistent pain alone does not override hypotension. Checking BP after the dose is backward, because BP is checked before each dose. Withholding all pain relief leaves the MI pain untreated.",
            "topic": "CAD &amp; Acute Coronary Syndrome",
            "source": "quiz-bank"
          },
          {
            "stem": "Two clients with chest pain have 12-lead EKGs. Client A shows ST depression with T-wave inversion. Client B shows ST elevation in two anatomically contiguous leads with a wide QRS. Which interpretation by the nurse is accurate?",
            "options": [
              "Client A's changes point to infarction, while client B's changes point to ischemia.",
              "Client B's changes point to infarction, and a larger infarct with a worse outcome.",
              "Both clients have the same degree of damage, since each tracing shows ST changes.",
              "Client B's changes point to an incomplete occlusion, or else a transient thrombosis."
            ],
            "answer": 1,
            "rationale": "Correct: ST elevation above the isoelectric line points to infarction (cell death, permanent), and a STEMI, with ST elevation in contiguous leads and an often wide QRS, means a more extensive occlusion, a larger infarct, and a poorer outcome. Incorrect: The relationship is flipped in the first option, since ST depression points to ischemia (temporary). STEMI is worse than NSTEMI on the continuum, so the damage is not equal. An incomplete occlusion or transient thrombosis describes NSTEMI and unstable angina, not STEMI.",
            "topic": "CAD &amp; Acute Coronary Syndrome",
            "source": "quiz-bank"
          },
          {
            "stem": "A client is 3 hours post-PCI through the left femoral artery with the sheath still in place. Heart rate has risen from 76 to 102 over the past hour. The dressing is dry, and the left DP and PT pulses match the right foot. Which conclusion should guide the nurse's next step?",
            "options": [
              "The dry dressing rules out bleeding, so the rising heart rate is most likely anxiety.",
              "The equal pedal pulses confirm normal perfusion, so routine monitoring can continue.",
              "The sheath is due out soon, so the heart rate will settle once manual pressure is held.",
              "The rising heart rate may be compensation for blood loss that is not seen externally."
            ],
            "answer": 3,
            "rationale": "Correct: The nurse watches for bleeding both externally (the dressing) and internally; a heart rate creeping up can be the body compensating for lost blood volume, which matters more with dual antiplatelet therapy and possible heparin. Incorrect: A dry dressing only addresses external bleeding. Equal DP and PT pulses compared with the other foot show distal perfusion but do not exclude internal blood loss. Removing the sheath (usually 4 to 6 hours post-procedure, with about 20 minutes of manual pressure) does not explain or treat a rising heart rate.",
            "topic": "CAD &amp; Acute Coronary Syndrome",
            "source": "quiz-bank"
          },
          {
            "stem": "Four clients with a confirmed STEMI arrive in the ED. Which client should the nurse question as a candidate for thrombolytic therapy?",
            "options": [
              "A 74-year-old client whose chest pain began 2 hours before arrival at the ED",
              "A client with type 2 diabetes and a hemoglobin A1C above the target range",
              "A client who smokes two packs a day and reports chest pain at rest overnight",
              "A client recovering from abdominal surgery done 1 week before the chest pain"
            ],
            "answer": 3,
            "rationale": "Correct: Thrombolytics lyse fibrin, so bleeding risk drives the contraindications: recent abdominal surgery, a history of brain bleed or stroke (particularly hemorrhagic), active bleeding, and out-of-range coagulation studies. Incorrect: Age is a CAD risk factor, not a contraindication, and onset 2 hours ago falls within the window where thrombolytics are most effective (within 6 hours of the initial event). Diabetes and heavy smoking raise CAD risk but are not listed reasons to withhold clot busters.",
            "topic": "CAD &amp; Acute Coronary Syndrome",
            "source": "quiz-bank"
          },
          {
            "stem": "A client recovering from an MI says, \"I've smoked for 20 years, so the damage is done. I'll just switch to filtered, low-nicotine cigarettes to be safer.\" Which response by the nurse is most accurate?",
            "options": [
              "Switching to filtered, lower-nicotine cigarettes is a good first step toward quitting.",
              "Quitting has benefits that begin almost immediately, even after 20 years of smoking.",
              "After 20 years the risk is fixed, so the focus should now be on diet and exercise.",
              "Risk depends on the type of cigarette, so the filtered brand will lower the risk."
            ],
            "answer": 1,
            "rationale": "Correct: Tobacco risk is proportional to the number of cigarettes smoked, and the benefits of cessation are dramatic and start almost immediately, even after 20 years of smoking. Incorrect: Switching to lower-nicotine or filtered cigarettes does not impact the risk, so it is neither a safer option nor evidence that cigarette type drives risk. Tobacco remains one of the four most firmly established modifiable risk factors, so the risk is not fixed.",
            "topic": "CAD &amp; Acute Coronary Syndrome",
            "source": "quiz-bank"
          },
          {
            "stem": "A 58-year-old woman with diabetes comes to the ED reporting 2 days of marked fatigue, shortness of air, and indigestion. She denies chest pain and arm pain, and she has a history of gastric reflux. Which action should the nurse take first?",
            "options": [
              "Obtain a 12-lead EKG within 10 minutes, since these may be atypical ACS symptoms.",
              "Give an antacid first, since reflux history and indigestion point to a gastric cause.",
              "Ask about chest pain once more, since ACS is ruled out if she denies any chest pain.",
              "Check her blood glucose first, since poor glucose control explains the fatigue."
            ],
            "answer": 0,
            "rationale": "Correct: Women and people with diabetes often present atypically, without classic left-arm radiation; fatigue is a very big symptom, along with shortness of air and indigestion. ACS is considered with these symptoms, and a 12-lead EKG is due within 10 minutes of arrival. Incorrect: The reflux history is a red herring; epigastric pain can be cardiac and must be ruled in or out. Denying pain does not rule out ACS, since patients may deny pain yet report pressure. Glucose matters for CAD over time but does not explain away possible ACS.",
            "topic": "CAD &amp; Acute Coronary Syndrome",
            "source": "quiz-bank"
          },
          {
            "stem": "Cardiac catheterization results are reviewed for four clients. Which client is most likely to be referred for CABG rather than PCI?",
            "options": [
              "A client with an NSTEMI and a single blockage in an easily reached segment",
              "A client with a STEMI who arrived 40 minutes ago with one blocked artery",
              "A client with diabetes who has blockages in three of the coronary arteries",
              "A client with stable angina whose stress test results were low risk"
            ],
            "answer": 2,
            "rationale": "Correct: CABG is chosen for clients with diabetes, multi-vessel disease (3 or more vessels), or a blockage the catheter cannot reach. Incorrect: PCI is first-line for STEMI and NSTEMI and is what the client gets more times than not, especially with a single reachable lesion, and the STEMI client's PCI goal is within 90 minutes of ED arrival. The client with stable angina has none of the CABG criteria (diabetes, 3 or more vessels, or a blockage the catheter cannot reach).",
            "topic": "CAD &amp; Acute Coronary Syndrome",
            "source": "quiz-bank"
          },
          {
            "stem": "A client with a history of stable angina reports chest pressure. Which findings suggest an MI rather than an angina episode? Select all that apply.",
            "options": [
              "The pressure woke the client from sleep around 5 a.m. with no clear trigger.",
              "The pressure has lasted 25 minutes despite rest and a nitroglycerin tablet.",
              "The pressure started while climbing stairs and eased after resting briefly.",
              "The client is diaphoretic and nauseated, and also appears markedly anxious.",
              "The pressure lasted about 10 minutes, then faded once nitroglycerin was taken.",
              "The client describes it as crushing, like an elephant sitting on the chest."
            ],
            "answers": [
              0,
              1,
              3,
              5
            ],
            "rationale": "Correct: MI pain occurs without a cause and sometimes wakes people from early-morning sleep, lasts 20 minutes or longer, is not relieved by rest or nitrates, often comes with nausea, diaphoresis, shortness of breath, and marked anxiety, and is described as heaviness, pressure, or crushing (an elephant sitting on the chest). Incorrect: Pain precipitated by exertion and relieved by rest, or lasting less than 15 minutes and relieved by sublingual nitroglycerin, fits angina pain.",
            "topic": "CAD &amp; Acute Coronary Syndrome",
            "source": "quiz-bank"
          }
        ],
        "eaq": []
      }
    },
    {
      "id": "week1-pericarditis",
      "label": "Pericarditis",
      "week": 1,
      "sets": {
        "mustKnow": [],
        "extraPractice": [
          {
            "stem": "A client admitted with an MI four days ago reports new chest pain behind the breastbone that is sharp, worse with each breath in, and eased when the client sits up and leans over the bedside table. A sublingual nitroglycerin tablet given 5 minutes ago brought no relief. Which interpretation by the nurse is most accurate?",
            "options": [
              "The pattern fits pericarditis; nitroglycerin dilates coronary vessels and does nothing for pericardial inflammation.",
              "The pattern fits extending ischemia; a second nitroglycerin tablet should relieve pain that stays this positional.",
              "The pattern fits a new MI, because pain that changes with breathing and position is typical of ischemic MI pain.",
              "The pattern fits pericarditis; the nitroglycerin failed because the pain started too suddenly for it to take effect."
            ],
            "answer": 0,
            "rationale": "Correct: Pericarditis is an MI complication that usually shows up a few days after the MI. Its pain is worse on inspiration and better sitting up and leaning forward, and sublingual nitroglycerin will not help because nitro is a coronary vasodilator and pericarditis has nothing to do with coronary vasodilation. Incorrect: With MI pain, position does not matter and breathing does not affect the pain, so positional, breath-related pain argues against ischemia and against repeating nitro. A sudden onset is typical of pericarditis, but it is not the reason nitro fails; the reason is that nitro treats ischemia, not inflammation.",
            "topic": "Pericarditis",
            "source": "quiz-bank"
          },
          {
            "stem": "A client with pericarditis also has a recent history of pleurisy. While auscultating at the lower left sternal border, the nurse hears a grating, sandpaper-like sound. When the client holds their breath, the grating stops completely. Which conclusion is most accurate?",
            "options": [
              "The sound is a pericardial friction rub, because holding the breath brings the heart closer to the chest wall.",
              "The sound is a pericardial friction rub that faded once the pericardial layers regained their normal fluid.",
              "The sound is most likely respiratory in origin, from inflamed pleura rubbing, rather than a cardiac sound.",
              "The sound is most likely a pericardial effusion, since fluid around the heart makes the sounds less crisp."
            ],
            "answer": 2,
            "rationale": "Correct: The client is asked to hold their breath to eliminate breath sounds and focus on the heart. If the grating disappears when the breath is held, it is not cardiac in origin; it is respiratory, which fits a pleural friction rub from inflamed visceral and parietal pleura (as in pleurisy). Incorrect: A pericardial friction rub continues with the breath held, because the heart keeps beating. Leaning forward, not breath holding, is what brings the heart closer to the chest wall. Nothing suggests the inflammation resolved in the seconds of a breath hold, and an effusion makes heart sounds less crisp rather than producing a grating sound that stops with breath holding.",
            "topic": "Pericarditis",
            "source": "quiz-bank"
          },
          {
            "stem": "Two clients present to the emergency department with chest pain. Client A's 12-lead EKG shows ST elevation in only two contiguous leads. Client B's EKG shows ST elevation in almost all leads. Which interpretation is most accurate?",
            "options": [
              "Client A's localized pattern suggests pericarditis, and Client B's widespread elevation points toward an acute MI.",
              "Both patterns point to an acute MI, and the number of leads involved only reflects the size of the MI.",
              "Client A's pattern points toward an acute MI, and Client B's diffuse elevation is consistent with pericarditis.",
              "Both patterns point to pericarditis, since any ST elevation in a client with chest pain reflects inflammation."
            ],
            "answer": 2,
            "rationale": "Correct: In pericarditis the EKG shows diffuse, widespread ST elevation in almost all leads, which fits Client B. ST elevation in only two contiguous leads points to an acute MI instead, which fits Client A. Incorrect: The first option reverses the two patterns. The number of leads is the distinguishing feature between the two conditions, not just a measure of MI size, and ST elevation is not automatically inflammatory; localized elevation in two contiguous leads directs the nurse toward an MI.",
            "topic": "Pericarditis",
            "source": "quiz-bank"
          },
          {
            "stem": "A client diagnosed with acute idiopathic pericarditis rates chest pain 7/10 and asks for \"the strong pain medicine they gave my neighbor after open-heart surgery.\" Which medication does the nurse anticipate the provider will prescribe?",
            "options": [
              "Morphine, since severe chest pain from the heart is treated the same way as post-op pain after heart surgery",
              "High-dose ibuprofen or naproxen, since this chest pain comes from inflammation of the pericardium itself",
              "An antibiotic, since an \"-itis\" means an infection is present that must be cleared before the pain eases",
              "A prednisone taper, since a steroid is the first-line drug for quickly relieving inflammatory chest pain"
            ],
            "answer": 1,
            "rationale": "Correct: NSAIDs are the hallmark treatment for pericarditis: good old-fashioned naproxen or high-dose ibuprofen. There is no morphine or opioid, because the problem is inflammation, which is why making the diagnosis matters; treatment differs from post-op pain after open-heart surgery. Incorrect: Antibiotics are given only if bacteria is the causative agent, and this case is idiopathic; with pericarditis, \"-itis\" points to inflammation. A prednisone taper is reserved for when NSAIDs are ineffective, so it is not first line.",
            "topic": "Pericarditis",
            "source": "quiz-bank"
          },
          {
            "stem": "The nurse reviews two clients with pericarditis. Client A, who has lupus, is having a third episode of pericarditis this year. Client B is having a first episode and has had no relief after a full course of NSAIDs. Which plan best matches the expected treatment?",
            "options": [
              "Client A receives an antibiotic for the lupus-related cause; Client B receives colchicine after the NSAID failure.",
              "Client A receives colchicine for the recurrent pericarditis; Client B receives a prednisone taper after NSAIDs.",
              "Client A receives a prednisone taper for the recurrent episodes; Client B receives colchicine after the NSAIDs.",
              "Client A receives an opioid for the repeated episodes; Client B receives an antibiotic after the NSAID failure."
            ],
            "answer": 1,
            "rationale": "Correct: Colchicine is used for recurrent pericarditis, which fits Client A. A prednisone taper is used only if NSAIDs are ineffective, which fits Client B. Incorrect: Swapping the two drugs misplaces each one; recurrence is the cue for colchicine, and NSAID failure is the cue for prednisone. Lupus is a connective tissue disease (the pericardium is connective tissue), not a bacterial cause, so an antibiotic is not indicated for either client. Opioids are not used because the problem is inflammation.",
            "topic": "Pericarditis",
            "source": "quiz-bank"
          },
          {
            "stem": "The nurse receives report on four clients on a cardiac unit. Which client should the nurse assess first?",
            "options": [
              "A client with pericarditis whose chest pain is 6/10 and is relieved by sitting up and leaning forward",
              "A client with pericarditis whose new lab results show an elevated WBC count, sed rate, and CRP",
              "A client with an effusion whose BP fell to 108/92 with marked jugular venous distension and restlessness",
              "A client with pericarditis who has a loud, continuous, grating rub heard at the lower left sternal border"
            ],
            "answer": 2,
            "rationale": "Correct: A pericardial effusion that increases in volume can become cardiac tamponade, which is time-sensitive and life-threatening. A BP of 108/92 is a pulse pressure of 16, a narrowed pulse pressure, and with marked jugular venous distension and restlessness it signals decreased cardiac output from tamponade; emergency pericardiocentesis may be needed. Incorrect: Positional pain eased by leaning forward is the expected pericarditis pattern. WBC, sed rate, and CRP may be elevated with any \"-itis\" and are expected. The pericardial friction rub is the hallmark finding of pericarditis, so hearing it is expected rather than a sign of deterioration.",
            "topic": "Pericarditis",
            "source": "quiz-bank"
          },
          {
            "stem": "A client with pericarditis develops a new cough and tachypnea and says, \"I just can't catch my breath.\" On auscultation, the heart sounds are no longer crisp. Which diagnostic test does the nurse anticipate, and why?",
            "options": [
              "An echocardiogram, to look for fluid in the pericardial space that is squeezing the heart",
              "A 12-lead EKG, to look for ST elevation in two contiguous leads that points to a new MI",
              "A CRP level, to confirm that the inflammation causing these cues is located in the pericardium",
              "A WBC count, to determine whether bacteria is the causative agent that needs an antibiotic"
            ],
            "answer": 0,
            "rationale": "Correct: Cough, tachypnea, difficulty breathing, and heart sounds that are not crisp (fluid between the stethoscope and the heart) are cues of pericardial effusion. An echocardiogram (or TEE) delineates the heart's structures and determines whether an effusion or tamponade has occurred. Incorrect: The EKG in pericarditis shows diffuse ST elevation, and nothing here suggests a new MI; the EKG does not show fluid. CRP is a non-specific marker that cannot tell where the inflammation is. A WBC count may be elevated with any \"-itis\" but does not show whether fluid is collecting around the heart.",
            "topic": "Pericarditis",
            "source": "quiz-bank"
          },
          {
            "stem": "A nursing student reviewing a client's chart says, \"The CRP and sed rate are both high, so that proves the inflammation is in the pericardium, and they tell us it's a chronic case.\" Which response by the nurse best corrects the student?",
            "options": [
              "\"The two markers are specific to the heart, but the sed rate reflects acute changes and the CRP reflects chronic ones.\"",
              "\"Those markers only rise with bacterial causes, so the high values tell us an antibiotic needs to be started now.\"",
              "\"Those results confirm the pericardium is involved, and the EKG is only needed to rule out a pericardial effusion.\"",
              "\"Neither marker shows where the inflammation is; the sed rate leans more chronic, and the CRP leans more toward acute.\""
            ],
            "answer": 3,
            "rationale": "Correct: Sed rate and CRP are non-specific inflammation markers; the sed rate is more chronic and the CRP more acute, and neither tells where the inflammation is. They may be elevated in pericarditis because it is an \"-itis,\" but they do not prove the pericardium is the site. Incorrect: The first option reverses the acute and chronic roles and wrongly calls the markers specific. They are not limited to bacterial causes, and antibiotics are given only if bacteria is the causative agent. An echocardiogram, not the EKG, is the test that determines whether an effusion or tamponade has occurred.",
            "topic": "Pericarditis",
            "source": "quiz-bank"
          },
          {
            "stem": "A client with acute pericarditis is anxious and reports that the chest pain gets worse whenever the bed is flat. Which plan of care is most appropriate for the nurse to implement?",
            "options": [
              "Ambulation in the hall several times a day, with hourly coughing and deep breathing to keep the lungs clear",
              "Bed rest lying flat to decrease the heart's workload, with a dose of sublingual nitroglycerin for chest pain",
              "Bed rest with the head of the bed flat at night, and an opioid for pain so the client can sleep through it",
              "Bed rest with the head of the bed at 45 degrees, plus measures that decrease the client's level of anxiety"
            ],
            "answer": 3,
            "rationale": "Correct: Treatment for pericarditis includes bed rest with the head of the bed at 45 degrees plus measures to decrease anxiety. Pericarditis pain is worse lying down and better sitting up and leaning forward, so elevating the head of the bed fits this client. Incorrect: Breathing (mainly inspiration) and coughing aggravate pericarditis pain, so hourly coughing and deep breathing would worsen it, and bed rest is part of the plan. Lying flat worsens the pain, sublingual nitroglycerin will not help because pericarditis is not a coronary vasodilation problem, and opioids are not used because the problem is inflammation.",
            "topic": "Pericarditis",
            "source": "quiz-bank"
          },
          {
            "stem": "The nurse prepares to auscultate a client with suspected pericarditis for its hallmark finding. Which actions or expectations are appropriate? Select all that apply.",
            "options": [
              "Listen with the stethoscope at the lower left sternal border",
              "Lay the client flat so the heart moves closer to the chest wall",
              "Expect a soft, intermittent swishing sound like fluid moving",
              "Have the client sit up and lean forward during auscultation",
              "Expect the sound to be loudest with each deep breath in"
            ],
            "answers": [
              0,
              3
            ],
            "rationale": "Correct: The pericardial friction rub is the hallmark finding of pericarditis. The nurse listens at the lower left sternal border with the client leaning forward, which brings the heart closer to the chest wall. Incorrect: Leaning forward, not lying flat, brings the heart toward the chest wall, and lying down also worsens pericarditis pain. The rub is a grating, continuous grinding sound like two pieces of sandpaper rubbing together, because inflammation takes away the fluid between the visceral and parietal layers; it is not a soft, fluid swish. The client is asked to hold the breath to eliminate breath sounds and focus on the heart, so the nurse does not listen for the sound to peak with deep breaths; a grating that disappears with the breath held is respiratory, not cardiac.",
            "topic": "Pericarditis",
            "source": "quiz-bank"
          }
        ],
        "eaq": []
      }
    },
    {
      "id": "week1-endocarditis",
      "label": "Infective Endocarditis",
      "week": 1,
      "sets": {
        "mustKnow": [],
        "extraPractice": [
          {
            "stem": "A client with suspected endocarditis shows the nurse several tender, raised spots on the fingertips and toes that look as if they contain a little pus. How should the nurse interpret this finding?",
            "options": [
              "Janeway lesions, a common early sign that is seen in many febrile infections",
              "Petechiae, flat micro-emboli of vegetation that point to a left-sided source",
              "Splinter hemorrhages, a vascular sign of vegetation reaching the fingertips",
              "Osler nodes, a less common finding that is highly suggestive of endocarditis"
            ],
            "answer": 3,
            "rationale": "Correct: Tender papules on the fingertips and toes that look like they have a little pus in them are Osler nodes, which are relatively uncommon but highly suggestive of infective endocarditis. Incorrect: Janeway lesions are flat, macular, and painless and appear on the palms and soles, and they are also uncommon but highly suggestive rather than common. Petechiae are micro-emboli of vegetation, but they are smooth, flat, not raised, and not painful. Splinter hemorrhages are longitudinal streaks in the nail bed, not tender raised papules.",
            "topic": "Infective Endocarditis",
            "source": "quiz-bank"
          },
          {
            "stem": "A client being treated for infective endocarditis of the mitral valve has a new-onset murmur. Two days later the client has increasing dyspnea and swelling in both ankles. Which explanation best fits these new findings?",
            "options": [
              "Vegetation has broken off and lodged in a limb, causing a peripheral infarction",
              "Early non-specific symptoms are progressing, which is expected and needs no action",
              "A right-sided vegetation has embolized to the lungs, which produces the dyspnea",
              "Damaged valves leak blood backward, so it backs up and then heart failure develops"
            ],
            "answer": 3,
            "rationale": "Correct: Heart failure is the most common complication of infective endocarditis. Damaged valves leak blood back instead of letting it go one direction, the blood backs up, and the client develops left- and right-sided heart failure; the new murmur is the cue that the valve is damaged. Incorrect: A right-sided vegetation embolizing to the lungs would explain dyspnea, but this infection is on the mitral valve (between the left atrium and left ventricle), and an embolus does not explain bilateral ankle swelling. A limb infarction would cause a problem in that limb, not dyspnea and edema. New dyspnea and edema are not the flu-like non-specific symptoms of early disease.",
            "topic": "Infective Endocarditis",
            "source": "quiz-bank"
          },
          {
            "stem": "A client with a history of IV drug use has endocarditis with a vegetation on a valve on the right side of the heart. The client suddenly becomes short of breath. What should the nurse suspect?",
            "options": [
              "A vegetation has traveled to the brain, the usual target of right-sided emboli",
              "A limb infarction, since vegetation from either side travels out to the organs",
              "Vegetation has sloughed off to the lungs, acting much like a pulmonary embolus",
              "Heart failure from a mitral leak, since right-sided valves do not shed emboli"
            ],
            "answer": 2,
            "rationale": "Correct: Because the valves constantly open and close, vegetations can slough off and become emboli. Blood from the right side of the heart goes to the lungs, so a right-sided vegetation behaves like a pulmonary embolus. Incorrect: Vegetation that leaves the heart into the organs and causes a limb or organ infarction is the left-sided pattern, not right-sided, and the brain is not where right-sided blood flows. Right-sided vegetations can shed emboli, and a mitral valve problem would be left-sided.",
            "topic": "Infective Endocarditis",
            "source": "quiz-bank"
          },
          {
            "stem": "The provider orders blood cultures for a client admitted with suspected infective endocarditis. Which plan by the nurse is correct?",
            "options": [
              "Draw three cultures from three different sites, spaced over an hour apart",
              "Draw three cultures from one single site at the same time to compare growth",
              "Draw one culture now and repeat it only if the echocardiogram is abnormal",
              "Draw three cultures from the IV line already in place to avoid extra sticks"
            ],
            "answer": 0,
            "rationale": "Correct: Blood cultures for endocarditis are three cultures drawn over an hour apart from three different sites; positive results are indicative of endocarditis. Incorrect: Drawing all three from one site, or all at the same time, misses both requirements (different sites and spacing over an hour apart). Using the existing IV line is the same single-site error. A single culture tied to the echocardiogram is wrong because the echocardiogram looks for endocardial enlargement and does not replace the three-culture set.",
            "topic": "Infective Endocarditis",
            "source": "quiz-bank"
          },
          {
            "stem": "Four clients are scheduled for dental visits next week. Which client should the nurse identify as needing prophylactic antibiotics before the visit?",
            "options": [
              "A client with a history of pericarditis who now reports no chest symptoms",
              "A client who had a flu-like illness with fever and malaise one month ago",
              "A client who received a heart transplant several years ago at age forty",
              "A client who had a sore on the foot that healed fully without treatment"
            ],
            "answer": 2,
            "rationale": "Correct: Prophylactic antibiotics are given to clients with a mechanical heart valve, a history of endocarditis, a history of congenital heart disease, or a heart transplant, and any dental visit is one of the procedures that calls for it. A heart transplant qualifies no matter how long ago it was. Incorrect: Pericarditis is inflammation, not the infection of endocarditis, and it is not on the prophylaxis list. A past flu-like illness is not a history of endocarditis. A healed sore was a possible port of entry, but it is not a condition that calls for prophylaxis.",
            "topic": "Infective Endocarditis",
            "source": "quiz-bank"
          },
          {
            "stem": "Two clients are admitted with endocarditis. Client A has a known valve defect and a mild illness that has lingered for some time. Client B had healthy valves and became ill quickly. Which statement about these clients is accurate?",
            "options": [
              "Client A has acute endocarditis, which affects damaged valves and needs fast therapy",
              "Client B has subacute endocarditis, which tends to be milder and more chronic in course",
              "Both clients have the same form, since onset speed does not separate the two types",
              "Client B has acute endocarditis, so therapy for Client B must be prompt and vigorous"
            ],
            "answer": 3,
            "rationale": "Correct: Acute endocarditis affects healthy valves, manifests itself quicker, and its therapy needs to be prompt and vigorous, which matches Client B. Incorrect: Client A fits subacute endocarditis (pre-existing heart problems, milder presentation, more chronic), so calling Client A acute flips the two types. Calling Client B subacute applies the subacute features to the wrong client. Onset speed is one of the features that separates the two forms, so they are not the same.",
            "topic": "Infective Endocarditis",
            "source": "quiz-bank"
          },
          {
            "stem": "A student nurse caring for a client with a valve replacement who has fever, chills, fatigue, and joint pain says, \"Endocarditis is unlikely, because the client's fingers show no clubbing.\" Which response by the nurse is best?",
            "options": [
              "Clubbing comes later in endocarditis; the early signs are non-specific and flu-like",
              "Clubbing is an early sign, so its absence makes the flu the more likely explanation",
              "Clubbing is one of the findings unique to endocarditis, so we need it to confirm it",
              "Joint pain is not part of endocarditis, so these symptoms point to a different cause"
            ],
            "answer": 0,
            "rationale": "Correct: Early endocarditis is very non-specific (low-grade fever, chills, malaise, fatigue, anorexia, joint pain, muscle pain) and can look like the flu. Clubbing of the fingers is the odd one out and comes later in the disease process, so its absence early does not rule endocarditis out. Incorrect: Calling clubbing an early sign flips its timing. Clubbing is not on the list of findings unique to endocarditis (splinter hemorrhages, petechiae, Osler nodes, Janeway lesions, Roth spots), and diagnosis relies on history, blood cultures, and echocardiogram. Joint pain is one of the listed early manifestations.",
            "topic": "Infective Endocarditis",
            "source": "quiz-bank"
          },
          {
            "stem": "A client is going home with a PICC line to finish IV antibiotics for endocarditis. The client says, \"I feel fine now, so the infection must be gone for good.\" Which response by the nurse is most appropriate?",
            "options": [
              "Feeling well means the infection has cleared, so the PICC can be removed early",
              "Relapses are common, so report any return of fever, fatigue, chills, or malaise",
              "Relapses are rare once IV therapy has begun, so only watch for a new heart murmur",
              "Feeling well means the risk has passed, so future dental work needs no planning"
            ],
            "answer": 1,
            "rationale": "Correct: Complete eradication may take weeks upon weeks and relapses are common, so the nurse teaches the client to monitor for the non-specific signs and symptoms (fever, chills, fatigue, malaise) that indicate a recurrence. Incorrect: Saying relapses are rare flips the page's teaching, and limiting monitoring to a murmur ignores the non-specific early signs. Feeling well does not mean eradication is complete, and a client with a history of endocarditis should let the provider know before any dental procedure because prophylaxis is indicated.",
            "topic": "Infective Endocarditis",
            "source": "quiz-bank"
          },
          {
            "stem": "A client recovering from infective endocarditis asks which daily habit will best lower the risk of another episode. Which response by the nurse is most accurate?",
            "options": [
              "Limit rest, since staying active helps the body clear organisms from the valves",
              "Keep up good oral hygiene, since your mouth is a place where bacteria can enter",
              "Skip routine dental visits, since dental work is a port of entry you should avoid",
              "Take an antibiotic every day, since prophylaxis is meant to be given continuously"
            ],
            "answer": 1,
            "rationale": "Correct: Nursing teaching includes good rest and good oral hygiene, because the mouth is where bacteria can enter the bloodstream and reach a previously damaged endocardium. Incorrect: Skipping dental visits is the closest distractor; the teaching is to let the provider know before any dental procedure so prophylactic antibiotics can be given, not to avoid dental care. Prophylaxis is given before specific procedures (any dental visit, a biopsy, tonsil and adenoid removal, a wound infection or urinary tract infection), not daily. Good rest is part of the plan, so limiting rest is the opposite of the teaching.",
            "topic": "Infective Endocarditis",
            "source": "quiz-bank"
          },
          {
            "stem": "A client with a valve replacement reports fever, chills, malaise, and muscle aches and says, \"I think it's just the flu.\" Which assessment findings would most strongly point the nurse toward endocarditis rather than the flu? Select all that apply.",
            "options": [
              "Longitudinal streaks seen in the nail beds of several fingers",
              "Low-grade temperature elevation along with chills in the evening",
              "Flat, painless red spots found on the palms and on the soles",
              "Aching in several joints along with generalized muscle pain",
              "Small hemorrhagic areas seen in the back of the retina on exam",
              "Loss of appetite with fatigue that has worsened over the week"
            ],
            "answers": [
              0,
              2,
              4
            ],
            "rationale": "Correct: Splinter hemorrhages (longitudinal streaks in the nail bed), Janeway lesions (flat, macular, painless red spots on the palms and soles), and Roth spots (hemorrhagic areas in the back of the retina) are among the findings the instructor called unique to endocarditis, ones \"you don't hear about in any other condition.\" Incorrect: Low-grade fever with chills, joint and muscle pain, and anorexia with fatigue are real manifestations of endocarditis, but they are very non-specific and are exactly why early endocarditis can be mistaken for the flu, so they do not distinguish the two.",
            "topic": "Infective Endocarditis",
            "source": "quiz-bank"
          }
        ],
        "eaq": []
      }
    },
    {
      "id": "week1-valvular-heart-disease",
      "label": "Valvular Heart Disease",
      "week": 1,
      "sets": {
        "mustKnow": [],
        "extraPractice": [
          {
            "stem": "A client with mitral valve disease has a loud S2 at the base of the heart. The nurse now wants to isolate S1, the sound of the mitral valve closing. Where should the nurse place the stethoscope?",
            "options": [
              "Right sternal border, 2nd intercostal space, at the base of the heart",
              "Left sternal border, 3rd intercostal space, where both sounds are heard",
              "Left sternal border, 2nd intercostal space, just to the left of the base",
              "5th intercostal space, left midclavicular line, at the apex of the heart"
            ],
            "answer": 3,
            "rationale": "Correct: S1 is heard best at the mitral site, the 5th intercostal space at the left midclavicular line (the apex), because S1 reflects closure of the mitral valve. Incorrect: The right sternal border at the 2nd intercostal space is the aortic site at the base, where S2 (the competing finding in the stem) is heard best, not S1. The left sternal border at the 3rd intercostal space is Erb's point, where S1 and S2 are heard best together rather than S1 alone. The left sternal border at the 2nd intercostal space is the pulmonic site, not the apex.",
            "topic": "Valvular Heart Disease",
            "source": "quiz-bank"
          },
          {
            "stem": "Client A has a history of rheumatic heart disease and a valve that will not open all the way. Client B, age 78, has an incompetent valve that lets blood flow back into the previous chamber when it should not. How should the nurse classify these problems?",
            "options": [
              "Client A has stenosis; client B has regurgitation.",
              "Client A has regurgitation; client B has stenosis.",
              "Client A has prolapse; client B has stenosis.",
              "Client A has stenosis; client B has prolapse."
            ],
            "answer": 0,
            "rationale": "Correct: Stenosis is the door that will not open all the way (a constriction or narrowing) and is often linked to a history of rheumatic heart disease. Regurgitation is the door that will not close all the way (an incompetent valve that lets blood back into the previous chamber) and is associated with older age. Incorrect: Swapping the two reverses the door analogy. Prolapse is buckling of the leaflets with unknown etiology, often in younger people, so it fits neither the rheumatic history of client A nor the incompetent valve of client B.",
            "topic": "Valvular Heart Disease",
            "source": "quiz-bank"
          },
          {
            "stem": "A 19-year-old newly diagnosed with mitral valve prolapse says, \"I must have done something to cause this, and it will just keep getting worse as I age, like my grandfather's valve did.\" Which response by the nurse is most accurate?",
            "options": [
              "\"Prolapse usually follows rheumatic heart disease, so an old untreated illness is the likely cause.\"",
              "\"No clear cause is known, it is the most common valve problem in the US, and it may improve with age.\"",
              "\"Prolapse is a narrowing that backs blood up, so it tends to worsen steadily as the valve gets stiffer.\"",
              "\"Prolapse is mainly a problem of older age, so it is unusual to find it in someone who is nineteen.\""
            ],
            "answer": 1,
            "rationale": "Correct: Prolapse (buckling of the leaflets) has an unknown etiology, is the most common valve problem in the US, is often seen in younger people, and may improve with age, which corrects both parts of the client's belief. Incorrect: A history of rheumatic heart disease is the cause linked to stenosis, not prolapse. Narrowing that backs blood up describes stenosis, not buckling leaflets. Prolapse is often seen in younger people; older age is the association for regurgitation.",
            "topic": "Valvular Heart Disease",
            "source": "quiz-bank"
          },
          {
            "stem": "A client with long-standing aortic valve disease reports new shortness of breath with exertion and fatigue, and the nurse notes swelling in both ankles. The client asks why a valve problem is affecting both breathing and legs. Which explanation is accurate?",
            "options": [
              "\"Your valve problem affects only the left side, so the ankle swelling must have some other cause.\"",
              "\"Backup from the left side goes out to the periphery, and backup from the right side goes to the lungs.\"",
              "\"Breathlessness and fatigue are rare with valve disease, so they point to a primary lung problem.\"",
              "\"Blood backs up behind the valve; left-side backup reaches the lungs, right-side backup the periphery.\""
            ],
            "answer": 3,
            "rationale": "Correct: Regardless of the cause, valve disease backs blood up and the client starts to look like left and right heart failure; backup from the left side shows up in the lungs and backup from the right side goes to the periphery, which explains both the dyspnea and the ankle swelling. Incorrect: The flipped option reverses where each side backs up. Attributing the swelling to an unrelated cause ignores that the client shows both left and right failure. Exertional dyspnea, weakness, and fatigue are classic manifestations of valve disease, not signs pointing away from it.",
            "topic": "Valvular Heart Disease",
            "source": "quiz-bank"
          },
          {
            "stem": "A client with valve stenosis and mild symptoms asks, \"Why aren't they fixing my valve right now, and why do I have to cut back on salt?\" Which response by the nurse is accurate?",
            "options": [
              "\"Surgery is usually held until symptoms escalate, and less salt keeps extra fluid from building up.\"",
              "\"Surgery is done right away to prevent damage, and less salt mainly lowers the chance of valve clots.\"",
              "\"Surgery is never used for stenosis, and less salt is needed only after a valve is replaced later.\"",
              "\"Surgery waits until the valve can be replaced, and less salt helps heart failure medicines absorb.\""
            ],
            "answer": 0,
            "rationale": "Correct: Management starts conservatively and escalates only if the client becomes symptomatic enough; sodium restriction keeps excess fluid off board because water follows salt. Incorrect: Surgery is not the first step, and sodium restriction targets fluid, not clotting (anticoagulants may be ordered for that). Stenosis can be treated surgically, for example by commissurotomy or balloon valvuloplasty. When surgery is needed, repair of the client's own valve is preferred over replacement, and salt restriction is not about drug absorption.",
            "topic": "Valvular Heart Disease",
            "source": "quiz-bank"
          },
          {
            "stem": "Two clients are scheduled for valve repair. Client A has a stiff, narrowed valve that must be opened without being replaced. Client B has a valve that needs to be reshaped with rings so that it works better. Which procedure pairing fits these goals?",
            "options": [
              "Client A: annuloplasty; client B: balloon valvuloplasty",
              "Client A: balloon valvuloplasty; client B: annuloplasty",
              "Client A: valve replacement; client B: commissurotomy",
              "Client A: annuloplasty; client B: commissurotomy"
            ],
            "answer": 1,
            "rationale": "Correct: A balloon valvuloplasty inflates a balloon to open a stiff valve without replacing it, and an annuloplasty repairs and reshapes the valve using annuloplasty rings. Incorrect: Reversing the pair gives the reshaping procedure to the client who needs a valve opened. A replacement does not meet the goal of opening the client's own valve, and a commissurotomy opens a stenosed valve rather than reshaping it with rings, so neither fits client B.",
            "topic": "Valvular Heart Disease",
            "source": "quiz-bank"
          },
          {
            "stem": "The nurse is reviewing four clients who need a valve replacement. For which client would a biologic (porcine) valve be the most appropriate choice?",
            "options": [
              "A 40-year-old who wants the most durable valve and attends every lab visit",
              "A 52-year-old who is reliable with daily pills and wants to avoid a repeat surgery",
              "An 84-year-old with a short life expectancy who says, \"I won't do blood tests\"",
              "A 60-year-old who has taken warfarin faithfully for years and wants a lasting valve"
            ],
            "answer": 2,
            "rationale": "Correct: A biologic valve needs no anticoagulation but is less durable (less than 8 to 10 years), so it suits someone older with a shorter life expectancy or someone unwilling or unable to adhere to anticoagulation; this client is both. Incorrect: The other three clients are compliant and want durability, which describes the mechanical valve candidate: it lasts longer and is chosen for someone who will be compliant with lifetime anticoagulation. A younger client given a biologic valve would face its shorter lifespan.",
            "topic": "Valvular Heart Disease",
            "source": "quiz-bank"
          },
          {
            "stem": "A client asks, \"Why is it always the mitral or aortic valve that people get fixed? Nobody I know has had their tricuspid valve done.\" Which response by the nurse is accurate?",
            "options": [
              "\"The left side is the high-pressure system, so its valves take more of a beating over time.\"",
              "\"The right side is the high-pressure system, so its valves are shielded by thicker walls.\"",
              "\"The mitral and aortic are the only valves that a surgeon is able to reach to fix or replace.\"",
              "\"The tricuspid rarely fails because it does not slam shut when the next chamber contracts.\""
            ],
            "answer": 0,
            "rationale": "Correct: The left side of the heart is the high-pressure system, so the left heart valves take more of a beating, and a repaired or replaced valve is, more times than not, the mitral or the aortic. Incorrect: The right-side option flips which side carries the high pressure. Every valve slams shut when the next chamber contracts to keep blood moving in one direction, so the tricuspid is not spared that work. Nothing on reachability explains the pattern; the reason given is the pressure load on the left side.",
            "topic": "Valvular Heart Disease",
            "source": "quiz-bank"
          },
          {
            "stem": "A client going home on warfarin after a mechanical valve replacement makes these statements. Which statement requires follow-up teaching by the nurse?",
            "options": [
              "\"I'll use an electric razor now instead of the straight-edge razor I have at home.\"",
              "\"I'll remind staff about my valve before any scan, since I should not have an MRI.\"",
              "\"I'll mostly skip greens during the week and then have a big plate of kale on Sunday.\"",
              "\"I'll wear a medical alert bracelet and watch closely for any signs of heavy bleeding.\""
            ],
            "answer": 2,
            "rationale": "Correct: Vitamin K affects the clotting factors and reverses the effect of warfarin, so vitamin K foods such as kale should be eaten consistently rather than binged; a large weekend serving after skipping greens would swing the anticoagulation. Incorrect: Switching to an electric razor is the taught measure to avoid bleeding. Avoiding an MRI is correct because the valve has metal. A medical alert bracelet or card and monitoring for excessive bleeding are both part of the discharge teaching for an anticoagulated client.",
            "topic": "Valvular Heart Disease",
            "source": "quiz-bank"
          },
          {
            "stem": "A client is scheduled to receive a mechanical heart valve. Which statements accurately describe what the nurse should anticipate with this valve type? Select all that apply.",
            "options": [
              "It is more durable and is expected to last longer than a biologic valve.",
              "It typically lasts less than 8 to 10 years before it needs to be replaced.",
              "Lifetime anticoagulation is needed because the body sees it as foreign.",
              "A click may be heard, sometimes from the bedside without a stethoscope.",
              "No added sound is heard, because only the valve closure is audible.",
              "On warfarin, the client's INR will be monitored for the rest of life."
            ],
            "answers": [
              0,
              2,
              3,
              5
            ],
            "rationale": "Correct: A mechanical valve is more durable and lasts longer; it needs lifetime anticoagulation because the body sees the mechanical pieces as foreign and clots might form; it produces a click (it is metal) that some can hear from the bedside without a stethoscope; and with a prosthetic valve on warfarin the INR is monitored for a lifetime. Incorrect: Lasting less than 8 to 10 years describes the biologic (porcine) valve. Hearing only the closure of the valve with no click also describes the biologic valve; the click is the adventitious sound that identifies a mechanical valve.",
            "topic": "Valvular Heart Disease",
            "source": "quiz-bank"
          }
        ],
        "eaq": []
      }
    },
    {
      "id": "medsurg1-week1-respiratory",
      "label": "Med Surg I Wk 1: Respiratory",
      "sets": {
        "mustKnow": [],
        "extraPractice": [
          {
            "stem": "A client admitted with a COPD exacerbation after an upper respiratory infection is receiving oxygen at 6 L by nasal cannula. The oxygen saturation is 99%, and the client has become drowsy and harder to rouse over the past hour. Which action by the nurse is most appropriate?",
            "options": [
              "Stop the oxygen until an ABG confirms whether the client retains CO2",
              "Lower the oxygen flow and titrate to a saturation goal of 88 to 92%",
              "Keep the flow at 6 L, since 99 to 100% is the goal in an exacerbation",
              "Raise the flow briefly to hyperoxygenate, then wean to a 95% goal"
            ],
            "answer": 1,
            "rationale": "Correct: In a COPD exacerbation the saturation goal is 88 to 92%, and 99 to 100% is too high. A long-term CO2 retainer's drive to breathe is low oxygen, so too much oxygen (the page's own example is 6 L with a sat of 99%) can take that drive away, which fits the new drowsiness; the fix is to titrate down, not off. Incorrect: Oxygen should never be withheld from a hypoxemic patient, even though only an ABG proves someone is a CO2 retainer, so stopping it is unsafe. Keeping 6 L treats 99 to 100% as the goal, which flips the page's teaching. Hyperoxygenating is the exception reserved for trach suctioning, and 95% is the target for the average patient, not this client.",
            "topic": "Med Surg I Wk 1: Respiratory",
            "source": "quiz-bank"
          },
          {
            "stem": "Two clients have TB skin tests read at 60 hours. Client A has HIV and has 6 mm of raised induration surrounded by 15 mm of flat redness. Client B is a healthy nurse with no risk factors and has 12 mm of raised induration. How should the nurse interpret these results?",
            "options": [
              "Client A's result is positive, and client B's result is not positive",
              "Client B's result is positive; client A needs 10 mm to be positive",
              "Both are positive, since client A's redness measures 15 mm across",
              "Neither is positive, since 15 mm of induration is needed in all adults"
            ],
            "answer": 0,
            "rationale": "Correct: Only induration (the raised area) is measured, not redness. For the immunosuppressed, such as a client with HIV, 5 mm or more is positive, so 6 mm is positive; for healthy people with no risk factors the cut-off is 15 mm or more, so 12 mm is not positive. A 60-hour read falls within the 48 to 72 hour window. Incorrect: The 10 mm cut-off belongs to immigrants, drug users, nursing home residents, and young children, not the immunosuppressed. Flat redness that isn't raised is not positive, so it cannot be counted. The 15 mm cut-off applies only to people with no risk factors, not to every adult.",
            "topic": "Med Surg I Wk 1: Respiratory",
            "source": "quiz-bank"
          },
          {
            "stem": "A client had a thoracentesis 30 minutes ago to relieve dyspnea from a large pleural effusion. The client now reports new shortness of breath, and the oxygen saturation has dropped from 94% to 88%. The puncture site is dry. Which action should the nurse anticipate?",
            "options": [
              "Obtain a chest X-ray to evaluate for a pneumothorax and assess for hypoxia",
              "Reposition the client upright at the overbed table and repeat the procedure",
              "Reassure the client, since dyspnea is expected while the lung re-expands",
              "Apply firm pressure to the site, since bleeding is the main risk afterward"
            ],
            "answer": 0,
            "rationale": "Correct: After a thoracentesis, a chest X-ray is done to rule out a pneumothorax and the nurse assesses for hypoxia; new dyspnea with a falling saturation after the procedure fits a pneumothorax, one of the listed risks. Incorrect: Sitting upright with the elbows on the overbed table is the positioning before the procedure, not the response to a complication. The procedure is done to relieve dyspnea, so new dyspnea is not expected. Bleeding is also a listed risk, but the dry site and the respiratory cues point to the lungs.",
            "topic": "Med Surg I Wk 1: Respiratory",
            "source": "quiz-bank"
          },
          {
            "stem": "A 62-year-old client who smokes reports a productive cough for 5 weeks, night sweats, weight loss, and blood-streaked sputum. An IGRA is positive, and a chest X-ray shows a nodule. Which test will provide the definitive diagnosis of the condition this screening pathway is evaluating?",
            "options": [
              "Sputum cytology to look for malignant or abnormal cells in the lungs",
              "Sputum for acid-fast bacillus collected as a deep, coughed-up specimen",
              "Sputum culture and sensitivity to identify the organism and antibiotic",
              "A repeat TB skin test given intradermally and read in 48 to 72 hours"
            ],
            "answer": 1,
            "rationale": "Correct: A positive IGRA followed by a chest X-ray with a nodule leads to sputum for AFB, which is the definitive diagnosis of active TB; the fever-type symptoms, weight loss, productive cough, and hemoptysis longer than 3 weeks fit active disease. The specimen must come from deep in the lungs, not saliva. Incorrect: The smoking history and weight loss are a red herring for lung cancer; cytology looks for cancer cells, and even in lung cancer only 20 to 30 of 100 patients test positive, with biopsy as the definitive diagnosis. C and S identifies bacteria and the antibiotic that works, not active TB. A repeat skin test is still only a screening test and cannot tell latent from active TB.",
            "topic": "Med Surg I Wk 1: Respiratory",
            "source": "quiz-bank"
          },
          {
            "stem": "A nurse finds that a client's fresh post-op Shiley trach has come out of the stoma. A spare trach, the obturator, and a bag-valve device with a trach adapter are at the bedside. Which action reflects correct reinsertion technique?",
            "options": [
              "Place the obturator in the inner cannula and guide it into the stoma",
              "Leave the obturator in after insertion so the tube stays fully open",
              "Flex the client's neck forward and guide the tube straight back in",
              "Remove the obturator right away, then put the inner cannula back in"
            ],
            "answer": 3,
            "rationale": "Correct: After guiding the outer cannula into the stoma, the nurse removes the obturator immediately, because left in it obstructs the airway, and then reinserts the inner cannula; placement is confirmed by lung sounds, then the nurse calls for help, checks the sat, suctions as needed, and secures it. Incorrect: The inner cannula is taken out first and the obturator goes into the outer cannula, not the inner one. Leaving the obturator in blocks the airway rather than keeping it open. The neck is slightly extended, not flexed, and the tube is guided back and down.",
            "topic": "Med Surg I Wk 1: Respiratory",
            "source": "quiz-bank"
          },
          {
            "stem": "A nurse is orienting to a unit and is assigned a client who is 4 days post total laryngectomy with radical neck dissection. The new nurse says, \"If this client stops breathing, I'll bag over the mouth and nose like any other adult.\" Which response by the precepting nurse is correct?",
            "options": [
              "Use the adult face mask over the mouth and nose, but suction the stoma first",
              "Use a pediatric face mask that fits over the stoma, and bag through the stoma",
              "Use the face mask over the mouth and nose while a second nurse seals the stoma",
              "Use mouth-to-mouth breaths with the nose pinched and the head tilted back"
            ],
            "answer": 1,
            "rationale": "Correct: After a laryngectomy, air no longer enters through the nose or mouth, only the stoma, so during a code the nurse does not bag the mouth and nose; the stoma is bagged using a pediatric face mask that fits over it. Incorrect: Suctioning is important, since a mucus plug can cause a code, but bagging the mouth and nose afterward still sends no air to the lungs. Sealing the stoma while bagging the face blocks the only remaining airway. Mouth-to-mouth breaths fail for the same reason: the mouth and nose no longer connect to the trachea.",
            "topic": "Med Surg I Wk 1: Respiratory",
            "source": "quiz-bank"
          },
          {
            "stem": "A client on warfarin has posterior nasal packing for a nosebleed that would not stop. Assessment shows pain rated 6 out of 10, a drip pad that needs changing, an INR result pending, and an oxygen saturation of 89% on room air. Which action should the nurse take first?",
            "options": [
              "Change the saturated drip pad and document the amount of drainage",
              "Give the prescribed analgesic for the pain rated 6 out of 10",
              "Assess the airway and respond to the oxygen saturation of 89%",
              "Ask the provider whether protamine sulfate should be given now"
            ],
            "answer": 2,
            "rationale": "Correct: For a client with nasal packing, the priority assessment is the oxygen saturation, because packing (especially posterior packing or a balloon) can obstruct the airway; less than 90% can indicate hypoxemia, so ABCs come first. Incorrect: Pain and dressing drainage matter but come after the airway. Protamine sulfate is the antidote for IV heparin; the antidote for warfarin is vitamin K, so this pairs the right idea with the wrong drug, and it still is not the first action.",
            "topic": "Med Surg I Wk 1: Respiratory",
            "source": "quiz-bank"
          },
          {
            "stem": "An 80-year-old client admitted from a nursing home with bacterial pneumonia has a temperature of 39 C (102.2 F), crackles, and new-onset confusion. Which prescription should the nurse question?",
            "options": [
              "Acetaminophen for a temperature above 38.3 C (101 F)",
              "Encourage oral fluids unless the client develops fluid overload",
              "Incentive spirometer use every hour while awake, with documentation",
              "Complete bed rest until the client has been afebrile for 24 hours"
            ],
            "answer": 3,
            "rationale": "Correct: Complete bed rest worsens pneumonia; ambulation balanced with energy conservation (clustered care) is the goal, so this order should be clarified. Incorrect: Acetaminophen for fever is appropriate, because a higher temperature raises the cells' oxygen demand. Increasing fluids thins secretions and is appropriate unless contraindicated, such as severe heart failure. The incentive spirometer is part of pulmonary toilet, and the nurse makes sure it is used and documents it. The new confusion is an expected early sign of infection in the elderly, not a reason to restrict activity.",
            "topic": "Med Surg I Wk 1: Respiratory",
            "source": "quiz-bank"
          },
          {
            "stem": "A client scheduled for a chest CT with iodine-based contrast tells the nurse, \"I'm claustrophobic and I hate loud noises.\" The morning labs show a creatinine of 2.0 mg/dL. Which action should the nurse take before the scan?",
            "options": [
              "Request sedation, since the client's claustrophobia is the main barrier",
              "Proceed, then restrict fluids afterward to lower the kidneys' workload",
              "Notify the provider of the high creatinine level before the scan begins",
              "Explain that a warm flush during the scan signals an allergic reaction"
            ],
            "answer": 2,
            "rationale": "Correct: Iodine-based contrast is nephrotoxic, so the nurse checks BUN and creatinine and, with an elevated creatinine (the lecture's example is a creatinine of 2), lets the provider know before the scan; whether to proceed is the provider's risk-benefit call. Incorrect: Sedation may be needed for claustrophobia, but it does not address the kidney risk, which is the bigger safety issue. After contrast the nurse pushes fluids, so restricting them flips the teaching. The warm flush is expected, not a sign of a reaction.",
            "topic": "Med Surg I Wk 1: Respiratory",
            "source": "quiz-bank"
          },
          {
            "stem": "A client with active TB is starting isoniazid, rifampin, and ethambutol under directly observed therapy. Which statements by the client indicate correct understanding of the teaching? Select all that apply.",
            "options": [
              "\"If my urine turns a red-orange color, I know that is from the rifampin.\"",
              "\"I can take acetaminophen as often as I like for aches while on isoniazid.\"",
              "\"Once I feel better in a few weeks, I can stop taking my pills.\"",
              "\"I will report it if I start having trouble telling colors apart.\"",
              "\"I will report numbness or tingling that develops in my hands or feet.\"",
              "\"After one negative sputum culture, I am no longer contagious to others.\""
            ],
            "answers": [
              0,
              3,
              4
            ],
            "rationale": "Correct: Rifampin causes red-orange secretions (bright red urine that isn't hematuria). Ethambutol causes visual acuity changes and trouble telling colors apart. Isoniazid causes peripheral neuropathy, so numbness or tingling should be reported. Incorrect: Isoniazid is hepatotoxic, and acetaminophen is the other hepatotoxic drug to know in med surg, so unlimited use is unsafe. Drug therapy lasts months (6 or more) to years and strict adherence is essential; stopping early drives MDR-TB, which DOT is meant to prevent. Three negative sputum cultures, not one, typically mean the client is no longer infectious.",
            "topic": "Med Surg I Wk 1: Respiratory",
            "source": "quiz-bank"
          }
        ],
        "eaq": []
      }
    },
    {
      "id": "medsurg1-week2-hematology",
      "label": "Med Surg I Wk 2: Hematology",
      "sets": {
        "mustKnow": [],
        "extraPractice": [
          {
            "stem": "A 70-year-old woman admitted with a heart failure exacerbation has 3+ ankle edema and a 4 kg weight gain. Her hematocrit is 34%, and she denies fatigue or bleeding. A student says the client is anemic and asks whether iron studies should be requested. Which response by the nurse is most accurate?",
            "options": [
              "Yes, a hematocrit below 37% in a woman confirms anemia, so iron studies and a stool guaiac are indicated now.",
              "The value suggests polycythemia is being masked by the edema, so the hematocrit is likely to rise with diuresis.",
              "Retained fluid dilutes the plasma and can lower the hematocrit, so this may be a false low and not true anemia.",
              "A hematocrit roughly three times the hemoglobin means the RBC count is the better marker of anemia in this client."
            ],
            "answer": 2,
            "rationale": "Correct: Fluid retention, as in heart failure, adds plasma and lowers the percentage of blood volume made up of RBCs, producing a false low hematocrit rather than true anemia; trending and the clinical picture matter more than one stand-alone value. Incorrect: Below 37% is outside the female range, but the value alone does not confirm anemia when fluid overload explains it, and iron studies are for anemia of unknown origin. Polycythemia is the opposite problem and is falsely raised by dehydration, not masked by edema. The 3:1 hemoglobin-to-hematocrit relationship does not make the RBC count the preferred marker; the lecture says the H&H is used far more.",
            "topic": "Med Surg I Wk 2: Hematology",
            "source": "quiz-bank"
          },
          {
            "stem": "A 24-year-old client with heavy menstrual periods reports fatigue, craves ice, and has spoon-shaped nails. Which laboratory result would most strongly support the suspected diagnosis?",
            "options": [
              "Positive intrinsic factor antibodies with a large, fragile RBC on the smear",
              "Decreased serum ferritin with small, pale RBCs on the RBC morphology report",
              "Increased serum transferrin with normocytic, normochromic RBCs on the smear",
              "Positive direct Coombs test with a normal ferritin and normal serum iron"
            ],
            "answer": 1,
            "rationale": "Correct: Heavy menses, pagophagia, and koilonychia point to iron deficiency anemia; decreased ferritin (the storage protein) is the most sensitive test, and iron deficiency is microcytic and hypochromic. Incorrect: Transferrin, the transport protein, is decreased, not increased, in iron deficiency, and normocytic, normochromic cells describe aplastic anemia. Intrinsic factor antibodies with large, fragile cells indicate pernicious anemia (B12). A direct Coombs test is used when incompatible blood is suspected, not to diagnose iron deficiency.",
            "topic": "Med Surg I Wk 2: Hematology",
            "source": "quiz-bank"
          },
          {
            "stem": "A client with long-term alcohol abuse has a megaloblastic anemia. The client reports nausea, a sore red tongue, and new numbness and tingling in both feet, and is unsteady when walking. Which interpretation and action by the nurse are most appropriate?",
            "options": [
              "Folate deficiency is most likely because alcohol abuse is its usual cause; teach intake of leafy greens and legumes.",
              "Iron deficiency is most likely because glossitis is present; teach the client to take iron with orange juice daily.",
              "The findings fit folate deficiency, which matches B12 except for the GI signs; plan oral folic acid and rest periods.",
              "The paresthesia and ataxia point to B12 deficiency; do neuro checks, and use no heating pads to keep the feet warm."
            ],
            "answer": 3,
            "rationale": "Correct: Alcohol abuse can cause either megaloblastic anemia, but numbness, tingling, and ataxia are neuromuscular signs unique to B12 deficiency; folate deficiency looks similar without the neurologic problems. Nursing care includes neuro checks and keeping the client warm without heating pads because of the paresthesia. Incorrect: Choosing folate deficiency because of the alcohol history ignores the neurologic cues that differentiate the two. Glossitis appears in iron, B12, and folate deficiency, so it does not identify iron deficiency, which is not megaloblastic. Folate deficiency shares the GI signs with B12; what it lacks is the neurologic findings.",
            "topic": "Med Surg I Wk 2: Hematology",
            "source": "quiz-bank"
          },
          {
            "stem": "A nurse is teaching a client newly prescribed oral ferrous sulfate. Which client statement indicates correct understanding?",
            "options": [
              "\"I'll buy the extended-release form so the iron is gentler on my stomach over the whole day.\"",
              "\"If I notice my stools have turned black, I'll stop the iron and call the clinic right away.\"",
              "\"I'll take the liquid iron straight from the cup, then rinse my mouth so it won't stain my skin.\"",
              "\"If the iron makes me nauseated at first, I can take it with food rather than skip the dose.\""
            ],
            "answer": 3,
            "rationale": "Correct: Iron absorbs best in an acidic stomach before meals, but taking it with food for the first couple of weeks when it causes nausea is better than not taking it. Incorrect: Enteric-coated and extended-release forms should not be used. Black stool is an expected effect of iron; the client should be taught that melena is very malodorous and sticky. Liquid iron is taken through a straw because it stains the teeth; skin staining is the concern with IM injection, which is why the Z-track method is used.",
            "topic": "Med Surg I Wk 2: Hematology",
            "source": "quiz-bank"
          },
          {
            "stem": "A client with chronic kidney disease receives epoetin subcutaneously three times a week along with oral iron. Today's hemoglobin is 10.8 g/dL, up from 8.9 g/dL a month ago, and the client feels much less tired. What is the nurse's best action?",
            "options": [
              "Give the dose as scheduled, because the rising hemoglobin shows the drug is working well.",
              "Give the dose and hold the iron, because the hemoglobin no longer meets the anemia range.",
              "Hold the dose and notify the provider, since epoetin is stopped above a hemoglobin of 10.",
              "Hold the iron and give epoetin alone, because the two drugs are not to be given together."
            ],
            "answer": 2,
            "rationale": "Correct: Epoetin carries black box warnings and is discontinued when the hemoglobin is above 10 because of cardiovascular risk, so the nurse holds it and reports the value even though the client feels better. Incorrect: Improvement does not justify continuing past the threshold. A hemoglobin of 10.8 is still below the normal range for either sex, and the iron is not the drug with the hemoglobin cutoff. Epoetin is often given with iron (the buses and the wheels), so the claim that they cannot be combined is false.",
            "topic": "Med Surg I Wk 2: Hematology",
            "source": "quiz-bank"
          },
          {
            "stem": "A client with polycythemia vera is being seen in the clinic. Which finding requires the nurse's most immediate follow-up?",
            "options": [
              "The client's spouse reports that the client's speech became slurred an hour ago.",
              "The client reports intense itching that gets worse after a hot bath each night.",
              "The client has a ruddy, dusky red complexion and reports drenching night sweats.",
              "The client reports a dull headache and some trouble concentrating at work today."
            ],
            "answer": 0,
            "rationale": "Correct: The thick, excess blood of polycythemia raises the risk of clots, and stroke is the most common serious acute complication; new slurred speech suggests a stroke or TIA and needs immediate action. Incorrect: Itching worsened by a hot bath is the classic, expected finding and is managed with antihistamines. A ruddy complexion and night sweats reflect the increased RBC mass and hypermetabolic state. Headache and trouble concentrating are common manifestations of increased blood viscosity, but they are chronic findings and less urgent than a new focal neurologic change.",
            "topic": "Med Surg I Wk 2: Hematology",
            "source": "quiz-bank"
          },
          {
            "stem": "A registered nurse is preparing to remove a PICC from a client's right arm. The client takes an anticoagulant. Which plan is correct?",
            "options": [
              "Check the INR, have the client sit upright, and pull the catheter out quickly in one smooth motion.",
              "Have the client lie flat, take a deep breath in and hold it, and hold pressure for about 1 minute.",
              "Check the INR, have the client lie down with the hand below heart level, and withdraw inch by inch.",
              "Have the client lie down, withdraw it slowly, and leave a dry gauze dressing over the insertion site."
            ],
            "answer": 2,
            "rationale": "Correct: Before removing a PICC the RN checks the INR (especially with anticoagulants), positions the client lying down with the hand below heart level, has the client bear down or hum (Valsalva), and withdraws slowly inch by inch to avoid venous spasm, then measures the catheter against the charted length. Incorrect: Sitting upright and pulling quickly raises air embolus risk and can spasm the vein. Pressure is held for 3 to 5 minutes, not 1. The site needs an occlusive dressing, not dry gauze, to keep air from entering.",
            "topic": "Med Surg I Wk 2: Hematology",
            "source": "quiz-bank"
          },
          {
            "stem": "Ten minutes after a unit of packed RBCs is started, a client reports low back pain and feels flushed. The temperature has risen from 37.0 to 38.6 C, the blood pressure has dropped, and the urine is pink. After stopping the transfusion, which action should the nurse take next?",
            "options": [
              "Slow the infusion to a keep-open rate and call the provider to request IV furosemide.",
              "Hang a new bag of normal saline with new tubing at the same IV site to keep the line open.",
              "Open the saline already primed on the blood Y tubing and run it to keep the vein open.",
              "Give the ordered acetaminophen and then restart the unit slowly once the fever comes down."
            ],
            "answer": 1,
            "rationale": "Correct: Immediate fever, flushing, low back pain, hematuria, and dropping BP indicate an acute hemolytic reaction from incompatible blood. After stopping the transfusion, the nurse hangs a new bag of normal saline with new tubing at the same site so no more blood enters, then supports the BP, notifies the provider and blood bank, and saves the unit and tubing. Incorrect: The saline on the blood tubing would flush the blood remaining in that tubing into the client. Slowing the rate with furosemide is the response to TACO, the only reaction where the infusion may be slowed. Acetaminophen and a restart fit a febrile non-hemolytic reaction, which is a gradual rise without back pain, hematuria, or hemodynamic compromise.",
            "topic": "Med Surg I Wk 2: Hematology",
            "source": "quiz-bank"
          },
          {
            "stem": "A nurse brings a unit of PRBCs to the unit and finds the client's IV has infiltrated. After 30 minutes, new IV access has still not been obtained. What should the nurse do with the unit?",
            "options": [
              "Return the unit to the blood bank, since the time allowed to start it on the unit has now passed.",
              "Place the unit in the medication refrigerator until IV access is in place, then start the unit.",
              "Keep the unit at the bedside and start it once access is obtained, since it may hang for 4 hours.",
              "Start the unit through the infiltrated IV at a slow rate until the replacement access is in place."
            ],
            "answer": 0,
            "rationale": "Correct: Once blood reaches the floor the nurse has 30 minutes to start it; if that is not possible, the unit goes back to the blood bank. This is why everything, including IV access, should be ready before the blood is picked up. Incorrect: Blood is never stored in the medication refrigerator. The 4-hour limit is the maximum hang time once the infusion begins, to prevent bacterial proliferation, and does not extend the 30-minute window to start. An infiltrated IV is not usable access for any infusion.",
            "topic": "Med Surg I Wk 2: Hematology",
            "source": "quiz-bank"
          },
          {
            "stem": "A client with type B negative blood needs a transfusion of packed RBCs. Which blood types could the client safely receive? Select all that apply.",
            "options": [
              "B positive",
              "O negative",
              "AB negative",
              "B negative",
              "A negative",
              "AB positive"
            ],
            "answers": [
              1,
              3
            ],
            "rationale": "Correct: A client can receive only blood carrying antigens the client already has. B negative has the B antigen but no A antigen and no Rh, so O negative (no A, B, or Rh; the universal donor) and B negative are safe. Incorrect: B positive and AB positive carry the Rh antigen, which this client lacks. AB negative and A negative carry the A antigen, which would trigger a hemolytic reaction. Being Rh negative, like A negative and AB negative, is not enough when a foreign ABO antigen is present.",
            "topic": "Med Surg I Wk 2: Hematology",
            "source": "quiz-bank"
          }
        ],
        "eaq": []
      }
    },
    {
      "id": "medsurg1-week3-periop-fluids-electrolytes",
      "label": "Med Surg I Wk 3: Periop, Fluids &amp; Electrolytes",
      "sets": {
        "mustKnow": [],
        "extraPractice": [
          {
            "stem": "Forty minutes into a general anesthetic with a volatile agent, a client's end-tidal CO2 rises unexpectedly, the heart rate climbs to 128, and the masseter muscle becomes rigid. Temperature is 98.8 F. The client reports two prior uneventful surgeries and no family history of anesthesia problems. How should the nurse interpret these findings?",
            "options": [
              "Normal temperature and two uneventful past surgeries make malignant hyperthermia unlikely here.",
              "Malignant hyperthermia is familial, so with no family history another cause should be sought first.",
              "These are early malignant hyperthermia cues, so the team should prepare IV dantrolene right away.",
              "Malignant hyperthermia is confirmed only by fever, so the team should wait for the temperature to rise."
            ],
            "answer": 2,
            "rationale": "Correct: The most common initial sign of malignant hyperthermia is an unexpected rise in end-tidal CO2, not a fever; tachycardia and masseter spasm add to the picture, hyperthermia comes later, and the antidote is IV dantrolene. Incorrect: Over 50% of affected clients had uneventful general anesthetics before, so past surgeries do not rule it out. It has a familial tendency, but some clients have no family history. Waiting for fever delays treatment of a rare condition with high mortality if untreated.",
            "topic": "Med Surg I Wk 3: Periop, Fluids &amp; Electrolytes",
            "source": "quiz-bank"
          },
          {
            "stem": "After the surgeon explains a planned hysterectomy, the client signs the consent with the nurse as witness. A few minutes later the client says, \"I signed it, but I'm not sure anymore. My sister had a terrible recovery.\" What is the nurse's next best action?",
            "options": [
              "Explore the client's concerns and let the surgeon know the client is having second thoughts.",
              "Remind the client that the consent is already signed, so the surgery will go ahead as planned.",
              "Review the risks and alternatives again in detail so the client can make a final decision now.",
              "Reassure the client that recovery varies, then send the client on to surgery."
            ],
            "answer": 0,
            "rationale": "Correct: The nurse witnesses the signature and acts as the client's advocate; when a client expresses uncertainty, the nurse explores it, and the next best action is to let the provider know the client is having second thoughts. Signing is voluntary. Incorrect: Full disclosure of risks and alternatives is the surgeon's job, not the nurse's, so re-teaching them does not replace notifying the surgeon. A signed form does not bind a client who is voicing doubt, and reassuring then proceeding ignores the advocate role.",
            "topic": "Med Surg I Wk 3: Periop, Fluids &amp; Electrolytes",
            "source": "quiz-bank"
          },
          {
            "stem": "A nurse on a surgical unit receives four post-op reports at the same time. Which client requires immediate intervention?",
            "options": [
              "BP 92/60 and pulse 78 with warm, pink skin; the client's baseline BP is 90/60 and the client has no symptoms.",
              "Pulse 104 and BP at baseline; the client rates incision pain 7 out of 10 and has not had pain medication yet.",
              "Temperature 100.0 F at 18 hours after surgery; lungs clear, incision clean, and the client is resting quietly.",
              "BP 96/62 and pulse 118 with cool, clammy skin; the client's BP was 124/78 on arrival to the unit this morning."
            ],
            "answer": 3,
            "rationale": "Correct: Hypotension with a fast pulse or cold, clammy skin signals possible impending hypovolemic shock and needs immediate intervention, especially when it is a drop from the client's own baseline. Incorrect: Hypotension with a normal pulse and warm pink skin is watched, and 90/60 can be normal for an asymptomatic client at that baseline. A heart rate over 100 calls for assessing why, and untreated pain is a likely cause to address next. A low-grade temperature in the first 48 hours is usually the expected inflammatory response to surgery.",
            "topic": "Med Surg I Wk 3: Periop, Fluids &amp; Electrolytes",
            "source": "quiz-bank"
          },
          {
            "stem": "A 79-year-old client in the PACU after hip surgery becomes restless, picks at the gown, and tries to climb out of bed. The client's family says the client has mild memory problems at home, and the client grimaces when the hip is moved. Which action should the nurse take first?",
            "options": [
              "Give the prescribed opioid, since the grimace shows that pain is driving the agitation.",
              "Check the oxygen saturation and airway, and give oxygen if the client needs more of it.",
              "Reorient the client calmly, since post-op delirium is more common in older adults.",
              "Ask the family to compare this behavior with the client's usual baseline at home."
            ],
            "answer": 1,
            "rationale": "Correct: A restless post-op client always means think hypoxia first: does the client need more oxygen? Hypoxia can come from shallow breathing, anesthesia, and respiratory depression, so it is assessed before other causes. Incorrect: Pain is a real possible cause, but giving an opioid before ruling out hypoxia risks adding respiratory depression. Delirium is more common in the elderly and comparing to baseline matters, but both come after oxygenation is checked, because hypoxia is the cause that can kill.",
            "topic": "Med Surg I Wk 3: Periop, Fluids &amp; Electrolytes",
            "source": "quiz-bank"
          },
          {
            "stem": "Two clients had abdominal surgery. Client A has a temperature of 100.8 F at 30 hours after surgery. Client B has a temperature of 101.2 F on post-op day 4. Which plan best matches each finding?",
            "options": [
              "Client A: coughing, deep breathing, and fluids. Client B: check the WBC and neutrophils.",
              "Client A: check the WBC and neutrophils. Client B: coughing, deep breathing, and fluids.",
              "Both clients: expected inflammatory response to surgery; recheck temperatures in 4 hours.",
              "Both clients: wound infection is likely; obtain WBC and neutrophil counts on each client."
            ],
            "answer": 0,
            "rationale": "Correct: In the first 48 hours a fever is too soon for infection; above 100.4 the nurse thinks lung congestion or dehydration and uses pulmonary toilet and fluids. After 48 hours an elevated temperature raises concern for infection (wound, lungs), so the WBC and neutrophils are checked. Incorrect: Reversing the plans applies the infection workup to the early fever and the pulmonary toilet to the late one. Calling both expected ignores that Client A is above 100.4 and Client B is past 48 hours, and calling both infection ignores the timing.",
            "topic": "Med Surg I Wk 3: Periop, Fluids &amp; Electrolytes",
            "source": "quiz-bank"
          },
          {
            "stem": "An 82-year-old client with heart failure is receiving IV fluids. Today's weight is 1.5 kg higher than yesterday's on the same scale. The I&O record looks balanced, but the client admits some urine was not saved. Lungs have crackles, the pulse is bounding, and the BUN and hematocrit are lower than yesterday. What is the most accurate conclusion?",
            "options": [
              "The balanced I&O record shows stable fluid status; the lower hematocrit points to bleeding.",
              "The lower BUN and hematocrit reflect hemoconcentration from a fluid volume deficit.",
              "The weight gain and diluted labs point to fluid volume excess despite the I&O record.",
              "The crackles point to pneumonia; the weight change is within normal daily variation."
            ],
            "answer": 2,
            "rationale": "Correct: Daily weights are the key, most reliable measure of fluid status; I&O is less reliable when urine is not saved. Weight gain, crackles, and a bounding pulse fit fluid volume excess, and excess hemodilutes the blood, giving falsely low BUN and hematocrit. Older clients with heart failure on IV fluids are a classic cause. Incorrect: A fluid deficit hemoconcentrates the blood, raising BUN and hematocrit, so the lab direction is flipped. The I&O record is the less reliable measure here, and crackles with a bounding pulse fit pulmonary edema from excess fluid.",
            "topic": "Med Surg I Wk 3: Periop, Fluids &amp; Electrolytes",
            "source": "quiz-bank"
          },
          {
            "stem": "A client with SIADH has a serum sodium of 122 and is newly confused. The provider orders 3% saline. Which plan should the nurse expect?",
            "options": [
              "Infuse it rapidly so the sodium reaches 135 within hours, because the confusion is dangerous.",
              "Infuse half-normal saline instead, because hypotonic fluid is gentler on swollen brain cells.",
              "Encourage oral fluids with the infusion so the client does not become dehydrated.",
              "Infuse it slowly over about 48 hours and keep seizure precautions in place throughout."
            ],
            "answer": 3,
            "rationale": "Correct: Severe hyponatremia is treated with 3% hypertonic saline, which has three times the sodium of normal saline and is given over 24 to 48 hours (closer to 48), with a safe environment and seizure precautions. Sodium is corrected slowly because fast fluid shifts in brain cells can be life-threatening. Incorrect: Rapid correction is the danger the page warns against; potassium, not sodium, can be corrected faster. Hypotonic fluids such as half-normal saline are a cause of hyponatremia, and extra fluid works against the fluid restriction used for hyponatremia.",
            "topic": "Med Surg I Wk 3: Periop, Fluids &amp; Electrolytes",
            "source": "quiz-bank"
          },
          {
            "stem": "A client taking furosemide and digoxin has a potassium of 3.2. The provider orders IV KCl 10 mEq every hour for 4 doses and a 500 mL fluid bolus for low blood pressure. The client's maintenance bag is normal saline with 20 mEq KCl. Which nursing plan is correct?",
            "options": [
              "Give the first KCl dose by IV push for quick correction, since low potassium raises digoxin risk.",
              "Run the bolus from the maintenance bag so the potassium rises along with the fluid volume.",
              "Hold the KCl until a digoxin level returns, as potassium raises digoxin toxicity.",
              "Infuse each diluted KCl dose over an hour, and bolus from a separate plain saline bag."
            ],
            "answer": 3,
            "rationale": "Correct: IV KCl is always diluted, never pushed, and no more than 10 mEq an hour outside the ICU; a potassium-containing bag is never bolused, so plain 0.9% normal saline is obtained for the bolus. Incorrect: Low potassium does precipitate digoxin toxicity, which makes correction important, but pushing KCl is never safe. The hold option flips the relationship: it is hypokalemia, not added potassium, that precipitates digoxin toxicity, so delaying replacement increases the risk.",
            "topic": "Med Surg I Wk 3: Periop, Fluids &amp; Electrolytes",
            "source": "quiz-bank"
          },
          {
            "stem": "A client who received a massive transfusion protocol for a trauma bleed reports tingling around the mouth. When the nurse inflates a BP cuff on the arm, the client's hand goes into carpopedal spasm. Which interpretation and plan are most accurate?",
            "options": [
              "Hypercalcemia from the stored blood; anticipate IV isotonic saline and calcitonin.",
              "Hypocalcemia from citrate binding the calcium; anticipate IV calcium gluconate.",
              "Hypomagnesemia from GI losses; anticipate IV magnesium sulfate given quickly.",
              "Hyperphosphatemia as the direct cause; anticipate a calcium carbonate binder."
            ],
            "answer": 1,
            "rationale": "Correct: Blood transfusions, especially a massive transfusion protocol, cause hypocalcemia because the citrate anticoagulant binds calcium. A positive Trousseau's sign shows excess nerve excitability, and symptomatic hypocalcemia is treated with IV calcium gluconate. Incorrect: Hypomagnesemia can also produce Trousseau's sign, but its causes are malnutrition, GI losses, and alcohol abuse, none present here, and magnesium is replaced slowly because fast replacement can cause hypotension. Hypercalcemia acts like a sedative and reduces excitability, and hyperphosphatemia's symptoms come from the accompanying low calcium rather than the phosphorus itself.",
            "topic": "Med Surg I Wk 3: Periop, Fluids &amp; Electrolytes",
            "source": "quiz-bank"
          },
          {
            "stem": "A client with kidney failure who is not yet on dialysis has been taking Maalox for an upset stomach. The client is drowsy and weak with decreased deep tendon reflexes. Labs show high magnesium, high phosphorus, and low calcium. Which actions or expectations are appropriate? Select all that apply.",
            "options": [
              "Stop the Maalox and teach the client to avoid taking Mylanta as well.",
              "Encourage nuts, green vegetables, and peanut butter for nutrition.",
              "Expect IV calcium gluconate if cardiac effects of magnesium appear.",
              "Anticipate calcium carbonate as a phosphate binder with each meal.",
              "Expect the reflexes to become hyperactive as the magnesium keeps rising.",
              "Attribute any tetany to the low calcium rather than the phosphorus."
            ],
            "answers": [
              0,
              2,
              3,
              5
            ],
            "rationale": "Correct: Renal failure is the most common cause of hypermagnesemia, and a CKD client taking Maalox is the classic example, so magnesium-containing drugs (Maalox, Mylanta) are avoided. IV calcium gluconate is given if symptomatic because it opposes magnesium's effect on the heart. Kidney failure is the number one cause of hyperphosphatemia, treated with calcium-based binders such as calcium carbonate. Hyperphosphatemia is usually asymptomatic by itself; tetany, Chvostek's, and Trousseau's come from the accompanying hypocalcemia. Incorrect: Dietary magnesium (green vegetables, nuts, peanut butter, bananas, chocolate) is limited, not encouraged. Hypermagnesemia slows everything down with decreased DTRs; hyperactive reflexes belong to hypomagnesemia.",
            "topic": "Med Surg I Wk 3: Periop, Fluids &amp; Electrolytes",
            "source": "quiz-bank"
          }
        ],
        "eaq": []
      }
    },
    {
      "id": "medsurg1-week4-renal-urinary",
      "label": "Med Surg I Wk 4: Renal &amp; Urinary",
      "sets": {
        "mustKnow": [],
        "extraPractice": [
          {
            "stem": "A client admitted with fatigue has a BUN of 38 and a serum creatinine of 0.9. The client is on a regular diet, has had no vomiting or diarrhea, and the hemoglobin and hematocrit are lower today than yesterday. Which interpretation should guide the nurse's next assessment?",
            "options": [
              "The kidneys are the likely cause, since BUN is the lab most specific to kidney function.",
              "A source other than the kidneys is likely, such as slow bleeding into the GI tract.",
              "Overhydration is the likely cause, and the nurse should anticipate a fluid restriction.",
              "Early kidney injury is likely, and the creatinine will rise to match within hours."
            ],
            "answer": 1,
            "rationale": "Correct: An elevated BUN should be followed by a look at the creatinine, the most reliable indicator of kidney function. A normal creatinine (0.5 to 1.2) points away from the kidneys, and a dropping H&amp;H suggests a GI bleed, since digested blood is protein-rich and raises the BUN. Incorrect: BUN is not specific to the kidneys; creatinine is. Overhydration lowers the BUN (a false low) rather than raising it. Assuming kidney injury ignores the normal creatinine and misses the falling H&amp;H that points to bleeding.",
            "topic": "Med Surg I Wk 4: Renal &amp; Urinary",
            "source": "quiz-bank"
          },
          {
            "stem": "One hour after procedures, the nurse reviews two clients. Client A had a renal biopsy; the heart rate has risen from 84 to 106 while the blood pressure is unchanged. Client B had a cystoscopy and reports burning with pink-tinged urine and urinary frequency. Which action is the priority?",
            "options": [
              "Assess client A first, since a rising heart rate is the earliest sign of bleeding.",
              "Assess client B first, since any blood in the urine signals active hemorrhage.",
              "Assess client B first, since burning after a scope suggests a new infection.",
              "Assess client A later, since a stable blood pressure outweighs the heart rate change."
            ],
            "answer": 0,
            "rationale": "Correct: After a renal biopsy the kidney is very vascular, and vital signs are checked every 5 to 10 minutes the first hour because the heart rate rises first and the blood pressure drops later. A heart rate climbing to 106 is an early bleeding cue. Incorrect: Burning, pink-tinged urine, and frequency are expected after a cystoscopy; only bright red blood would be a concern. A normal blood pressure does not rule out bleeding, because the drop in BP comes after the heart rate rises.",
            "topic": "Med Surg I Wk 4: Renal &amp; Urinary",
            "source": "quiz-bank"
          },
          {
            "stem": "An 82-year-old client in long-term care has new confusion that began this morning. Temperature is normal, there is no flank pain, and a point-of-care dipstick is positive for nitrites and leukocyte esterase. Which conclusion best fits these findings?",
            "options": [
              "Pyelonephritis is most likely, since acute confusion is a systemic sign of upper infection.",
              "Urosepsis is most likely, since confusion means the infection has reached the blood.",
              "A UTI is unlikely, since the client has no dysuria and no fever reported today.",
              "A lower UTI is likely, since confusion can be the first sign in an older adult."
            ],
            "answer": 3,
            "rationale": "Correct: Older adults with a UTI often present with confusion, sometimes as the first sign. Positive nitrites and leukocyte esterase support a UTI, and the absence of fever and flank pain fits a lower UTI (cystitis), which has no systemic signs. Incorrect: Pyelonephritis is an upper UTI with systemic findings such as fever, chills, and CVA tenderness, none of which are present. Ruling out a UTI for lack of dysuria or fever ignores both the dipstick and the typical older-adult presentation.",
            "topic": "Med Surg I Wk 4: Renal &amp; Urinary",
            "source": "quiz-bank"
          },
          {
            "stem": "A client hospitalized with pyelonephritis has been receiving IV fluids and IV antibiotics. The nausea and vomiting have resolved, the client is drinking well, and the client asks what happens next with the antibiotics. Which response by the nurse is accurate?",
            "options": [
              "You can stop the antibiotics once the fever has been gone for a day or two.",
              "The IV antibiotics continue until a repeat culture is done in 14 to 21 days.",
              "You will likely be switched to oral antibiotics and may take them for weeks.",
              "The antibiotic is usually stopped once the first culture result comes back."
            ],
            "answer": 2,
            "rationale": "Correct: Hospitalized pyelonephritis is treated with IV hydration and IV antibiotics, switched to oral once nausea, vomiting, and dehydration improve. Antibiotics may continue for weeks, with cultures repeated after 14 to 21 days. Incorrect: The repeat culture at 14 to 21 days is a follow-up check, not a reason to keep the client on IV therapy once oral intake is tolerated. Stopping when the fever breaks or when the first culture returns conflicts with the need for a full course; the culture is used to narrow the broad-spectrum antibiotic, not to stop it.",
            "topic": "Med Surg I Wk 4: Renal &amp; Urinary",
            "source": "quiz-bank"
          },
          {
            "stem": "A client had external lithotripsy for a calcium oxalate stone and has a stent in place. Which statement by the client indicates a need for further teaching?",
            "options": [
              "I am going to cut way back on milk and cheese to keep from forming new stones.",
              "I expect to see some blood in my urine for a little while after the procedure.",
              "I should call if I start passing a lot less urine than I normally do each day.",
              "I will need to come back in a week or two so the stent can be taken back out."
            ],
            "answer": 0,
            "rationale": "Correct: Calcium oxalate stones are managed with a low-oxalate diet (dark roughage, spinach, cocoa, nuts), not a low-calcium diet, so cutting dairy shows a misconception. Incorrect: Hematuria is expected after lithotripsy. A stent placed to pass fragments comes out in 1 to 2 weeks. Decreased urine output is not expected and suggests obstruction, so reporting it is correct.",
            "topic": "Med Surg I Wk 4: Renal &amp; Urinary",
            "source": "quiz-bank"
          },
          {
            "stem": "A client who had a cystectomy with an orthotopic neobladder tells the nurse, \"Since my new bladder is connected to my urethra, I'll just go when I feel the urge, like before.\" Which response by the nurse is most accurate?",
            "options": [
              "You will not feel an urge, so you will relax and bear down to void every 2 to 4 hours.",
              "You will feel an urge, but you will need to empty it with a catheter every few hours.",
              "You will not feel an urge, since urine will flow out of a stoma into a bag all the time.",
              "You will feel the urge as usual, and you should expect to see mucus in the urine at first."
            ],
            "answer": 0,
            "rationale": "Correct: A neobladder is made from intestine and connected to the native urethra, so voiding is most like normal, but it has no nerve supply and gives no urge to void. The client relaxes the sphincter and bears down every 2 to 4 hours, which takes practice. Incorrect: Self-catheterization every few hours describes a continent cutaneous reservoir (Kock, Indiana, Miami pouch). Continuous flow into an external bag describes an ileal conduit, which is also where expected mucus from the ileum is taught.",
            "topic": "Med Surg I Wk 4: Renal &amp; Urinary",
            "source": "quiz-bank"
          },
          {
            "stem": "A client who had a prolonged hypotensive episode during surgery yesterday has an indwelling urinary catheter. Over the last 2 hours, 50 mL of urine has drained. Which action should the nurse take first?",
            "options": [
              "Continue to measure output until the 24-hour total confirms less than 400 mL.",
              "Check the catheter and tubing for a kink, then notify the provider if patent.",
              "Encourage oral fluids and recheck the output again at the end of the next hour.",
              "Anticipate a diuretic order, since fluid retention is expected in this situation."
            ],
            "answer": 1,
            "rationale": "Correct: Output under 30 mL/hour suggests oliguria; 50 mL in 2 hours warrants notifying the provider after first ruling out something fixable, such as a kinked Foley. A hypotensive event points to a prerenal AKI, and the oliguric phase begins about a day after such an event. Incorrect: Waiting for a 24-hour total under 400 mL may let the AKI worsen. Pushing fluids or anticipating a diuretic skips the patency check and the provider notification.",
            "topic": "Med Surg I Wk 4: Renal &amp; Urinary",
            "source": "quiz-bank"
          },
          {
            "stem": "A client with AKI and a paralytic ileus has a serum potassium of 6.8. The nurse reviews new orders. Which order should the nurse question?",
            "options": [
              "IV calcium gluconate to protect the heart against dysrhythmias",
              "IV regular insulin given together with dextrose to shift the potassium",
              "Sodium polystyrene sulfonate given as an enema to bind the potassium",
              "Preparation for dialysis to remove potassium from the body quickly"
            ],
            "answer": 2,
            "rationale": "Correct: GI potassium binders such as Kayexalate (sodium polystyrene sulfonate) are not given with a paralytic ileus because the bowel can necrose, and they act too slowly for an emergency. Incorrect: Calcium gluconate raises the threshold for excitation to protect against dysrhythmias, though it does not lower the potassium. Insulin with dextrose temporarily moves potassium into the cells. Dialysis is the most effective way to remove potassium and is appropriate here.",
            "topic": "Med Surg I Wk 4: Renal &amp; Urinary",
            "source": "quiz-bank"
          },
          {
            "stem": "A nurse is teaching a client with stage 4 CKD who is not yet on dialysis. Which client statement shows correct understanding?",
            "options": [
              "I will use ibuprofen for my knee pain, since acetaminophen is hard on the liver.",
              "I will track my intake and output, since that is more reliable than weighing.",
              "I will eat more potassium-rich foods so I can avoid getting muscle weakness.",
              "I will call if my weight goes up by more than 4 pounds within a 2-day period."
            ],
            "answer": 3,
            "rationale": "Correct: Clients with CKD weigh daily and report a gain of more than 4 pounds in 2 days, which signals fluid retention. Incorrect: NSAIDs such as ibuprofen are nephrotoxic and are avoided in CKD, even though acetaminophen is hard on the liver. Daily weights are more reliable than I&amp;O, not the other way around. The CKD diet is typically low in potassium, and muscle weakness is a sign of hyperkalemia, so eating more potassium would worsen it.",
            "topic": "Med Surg I Wk 4: Renal &amp; Urinary",
            "source": "quiz-bank"
          },
          {
            "stem": "A client with stage 5 CKD had a left forearm AV fistula created 2 weeks ago and receives hemodialysis through a temporary dialysis catheter in the meantime. Which actions are appropriate for the nurse? Select all that apply.",
            "options": [
              "Palpate for a thrill and listen for a bruit over the fistula on each shift",
              "Run the ordered maintenance IV fluids through the temporary dialysis catheter line",
              "Give a scheduled dialyzable antibiotic after the session rather than before it",
              "Plan to begin using the new fistula for access at this week's next session",
              "Check the radial pulse, capillary refill, and sensation in the left fingers"
            ],
            "answers": [
              0,
              2,
              4
            ],
            "rationale": "Correct: The fistula is assessed every shift for a thrill and a bruit, which confirm patency (a lost bruit is reported). Drugs that cross the dialysis membrane are dialyzed out, so dialyzable drugs are given after dialysis. Distal perfusion (cap refill, numbness, tingling, radial and ulnar pulses, motor function) is checked, especially after surgery. Incorrect: A temporary dialysis catheter looks like a central line but is not one, so medications and fluids are never run through it. A fistula needs about 6 weeks to mature, so it is not ready at 2 weeks; that is why the temporary access is in place.",
            "topic": "Med Surg I Wk 4: Renal &amp; Urinary",
            "source": "quiz-bank"
          }
        ],
        "eaq": []
      }
    },
    {
      "id": "medsurg1-week5-integumentary-hiv-burns",
      "label": "Med Surg I Wk 5: HIV, Skin, Wounds &amp; Burns",
      "sets": {
        "mustKnow": [],
        "extraPractice": [
          {
            "stem": "At 0900 a nurse sustains a needlestick while caring for a client with HIV, and employee health determines that drug therapy is indicated. The nurse's shift ends at 1500, and the nurse plans to finish the shift and go to employee health tomorrow morning. Which response by the charge nurse is most appropriate?",
            "options": [
              "Waiting until tomorrow is fine, since PEP works equally well at any point in the first 3 days.",
              "Get a baseline HIV test today, since PEP drugs are started only if that first test comes back positive.",
              "Report now so drugs can start within 1 to 2 hours, since 3 days is the outer limit, not the goal.",
              "Start drugs after the 6-week follow-up test, since an earlier result falls in the window period."
            ],
            "answer": 2,
            "rationale": "Correct: When post-exposure drug therapy is indicated, it is started within 1 to 2 hours and definitely within 3 days; 3 days is the latest acceptable start, not a target, so the nurse should not delay until tomorrow. Incorrect: Treating any time in 3 days as equivalent misreads the timing (the goal is 1 to 2 hours). PEP is not withheld until a test turns positive; the decision rests on how severe the exposure was and the source's status. The 6- and 12-week (then 6-month) tests are follow-up testing after PEP, not the point at which drugs begin.",
            "topic": "Med Surg I Wk 5: HIV, Skin, Wounds &amp; Burns",
            "source": "quiz-bank"
          },
          {
            "stem": "A client tested negative for HIV 1 week after unprotected sex with a new partner whose HIV status is unknown. The client says, \"Since I'm negative, we can stop using condoms.\" Which response by the nurse is most accurate?",
            "options": [
              "A test this early can miss infection, and you may still be infectious, so keep using condoms.",
              "A negative result is final, since a negative test never needs a second confirmatory test.",
              "Your result is indeterminate, so a Western blot must be done before any decision is made.",
              "You are in the eclipse period, so you cannot transmit HIV until your viral load has fully peaked."
            ],
            "answer": 0,
            "rationale": "Correct: One week falls within the window period, the time between exposure and an accurate positive, during which the client is still infectious but tests negative; even the preferred fourth-generation test turns positive at about 2 to 3 weeks, and most people develop antibodies around week 3 to 4. Incorrect: A negative test does not get a confirmatory test, but that does not make an early negative rule out recent infection. Indeterminate means positive at first and then negative on the confirmatory test, which is not this result. The eclipse period runs from exposure to peak viral load, and the client is infectious at the end of it, so it does not make transmission impossible.",
            "topic": "Med Surg I Wk 5: HIV, Skin, Wounds &amp; Burns",
            "source": "quiz-bank"
          },
          {
            "stem": "A client on antiretroviral therapy (ART) has a CD4 count of 620 and an undetectable viral load. The client says, \"I feel great and the virus is gone, so I'm going to stop my pills.\" Which response by the nurse is best?",
            "options": [
              "Your CD4 is above 500, so stopping ART is safe as long as you recheck labs in 3 to 4 months.",
              "Since the virus has cleared, you can switch from ART to daily PrEP to keep from being reinfected.",
              "Undetectable means it can't be measured, not that it is gone, and ART is what keeps it that way.",
              "You only need ART again once your CD4 count drops below 200 and you are diagnosed with AIDS."
            ],
            "answer": 2,
            "rationale": "Correct: Undetectable does not mean absent; the virus just cannot be measured, and suppressing HIV to undetectable is the goal of medication therapy, so the client should continue ART. A client who does not feel sick is less likely to take a daily regimen, which is why non-adherence is a real danger. Incorrect: A CD4 above 500 is the desired range, but it reflects immune health, not viral clearance, and does not make stopping ART safe. PrEP is pre-exposure prophylaxis for people without HIV, not a replacement for ART. Waiting for a CD4 below 200 means waiting for AIDS and opportunistic infections, the outcome ART aims to prevent.",
            "topic": "Med Surg I Wk 5: HIV, Skin, Wounds &amp; Burns",
            "source": "quiz-bank"
          },
          {
            "stem": "During a skin check, a fair-skinned client who works outdoors has two lesions. Lesion 1 is pearly and erythematous with defined borders, barely elevated, with a slight central depression. Lesion 2 is a mole with a notched border and uneven color that the client says has grown over the past 2 months. Which action is most appropriate?",
            "options": [
              "Report lesion 1 as the urgent concern, since its pearly look and central dip fit melanoma.",
              "Notify the provider promptly about lesion 2, since a mole that evolved over weeks fits melanoma.",
              "Recheck lesion 2 at next year's dermatology visit, since it is still smaller than a pea.",
              "Treat both lesions as equally urgent, since basal cell carcinoma can metastasize to any organ in the body."
            ],
            "answer": 1,
            "rationale": "Correct: Lesion 2 shows the ABCDE warning signs (irregular border, uneven color, changing diameter, and evolving over weeks or months), and an evolving mole means notifying the provider as soon as possible; melanoma has a poor prognosis unless diagnosed and treated early, and biopsy confirms it. Incorrect: Lesion 1's pearly, erythematous, barely elevated plaque with defined borders and a central depression describes basal cell carcinoma, which is locally invasive. Most melanomas are larger than a pea, but size is not a reason to wait when a mole is changing. It is melanoma, not basal cell carcinoma, that can metastasize to any organ.",
            "topic": "Med Surg I Wk 5: HIV, Skin, Wounds &amp; Burns",
            "source": "quiz-bank"
          },
          {
            "stem": "A nurse receives reports on two clients. Client A started a new medication 5 days ago and now has fever, cough, peeling lips, and areas of skin sloughing. Client B has an itchy red rash on both calves where new rubber boots rub. Which client should the nurse see first, and why?",
            "options": [
              "Client B, since contact dermatitis from boots spreads quickly to the lips and mucous membranes.",
              "Client B, since the rash is a wheal that can progress to angioedema with face and lip swelling.",
              "Client A, since peeling lips and scaling are the expected pattern of a mild drug reaction.",
              "Client A, since loss of skin and mucous membranes after a new medication suggests SJS or TEN."
            ],
            "answer": 3,
            "rationale": "Correct: Acute destruction of skin epithelium and mucous membranes (peeling lips) with fever and cough after a new medication fits Stevens-Johnson syndrome or toxic epidermal necrolysis, which is rare but life-threatening and can be fatal. Incorrect: Contact dermatitis, such as a reaction to rubber boots, is the benign end of the dermatitis spectrum and does not destroy mucous membranes. A wheal is edematous and lasts only a few hours, and nothing in client B's presentation suggests angioedema. Scaling can follow a drug reaction, but mucous membrane destruction with fever is not a mild, expected finding.",
            "topic": "Med Surg I Wk 5: HIV, Skin, Wounds &amp; Burns",
            "source": "quiz-bank"
          },
          {
            "stem": "A client arrives from an enclosed-room house fire with deep partial-thickness and full-thickness burns, including burns around the nose and mouth. The client reports excruciating pain. BP is 94/60 and HR is 118. Which action should the nurse take first?",
            "options": [
              "Start two large-bore IVs with lactated Ringer's, since hypovolemic shock is the main concern.",
              "Assess and secure the airway now, since inhaled heat can burn the airway and compromise it.",
              "Give IV opioids around the clock, since excruciating pain is the main takeaway for burns.",
              "Apply topical Silvadene to the burns, since sepsis is the leading cause of death in burns."
            ],
            "answer": 1,
            "rationale": "Correct: Burn nursing management is airway first, then fluids. Burns around the nose and mouth from an enclosed fire suggest inhalation injury, which burns the nose, mouth, esophagus, and lung parenchyma and compromises the airway. Incorrect: Aggressive fluid resuscitation through at least two large-bore IVs with crystalloids such as LR is the second priority, after the airway, even though shock from the massive fluid shift is the main concern of the emergent phase. Around-the-clock IV opioids and topical antimicrobials are both part of care, but neither comes before a threatened airway.",
            "topic": "Med Surg I Wk 5: HIV, Skin, Wounds &amp; Burns",
            "source": "quiz-bank"
          },
          {
            "stem": "A client with a large sacral wound has lost weight, eats less than half of each meal, and has a low prealbumin. Today the wound bed has yellow areas with a foul odor. When planning care, which nursing problem should the nurse address first?",
            "options": [
              "Impaired wound integrity, since strict aseptic technique is what drives wound closure.",
              "Risk for infection, since yellow tissue in a wound bed confirms an active infection.",
              "Acute pain, since dressing changes must be premedicated so the analgesic is peaking.",
              "Imbalanced nutrition, since a wound will not heal without adequate nutrition intake."
            ],
            "answer": 3,
            "rationale": "Correct: Nutrition is the priority in wound care; when choosing between impaired wound and imbalanced nutrition in a malnourished patient, imbalanced nutrition comes first, because all the asepsis in the world won't heal a wound without adequate protein, carbohydrates, vitamins, and moderate fat (monitor albumin and prealbumin). Incorrect: Aseptic technique matters, but it does not overcome malnutrition. Yellow tissue means the wound is maybe purulent, which needs follow-up, but it does not by itself confirm infection or outrank the nutritional cause. Premedicating so the analgesic peaks during the dressing change is good practice, but pain is not the problem that is preventing healing.",
            "topic": "Med Surg I Wk 5: HIV, Skin, Wounds &amp; Burns",
            "source": "quiz-bank"
          },
          {
            "stem": "A client is 20 hours past abdominal surgery. The temperature is low grade, the heart rate has risen from 82 to 104, the abdomen is more distended than it was at the start of the shift, and the dressing shows new sanguineous drainage. Which complication should the nurse suspect?",
            "options": [
              "Hemorrhage, since a rising heart rate and distension fit bleeding within the first 48 hours.",
              "Wound infection, since a low-grade temperature this early is a first sign of infection.",
              "Dehiscence, since sanguineous drainage alone confirms the wound layers have separated.",
              "Evisceration, since abdominal distension indicates the viscera are pushing through the incision."
            ],
            "answer": 0,
            "rationale": "Correct: The risk of hemorrhage is greatest up to 48 hours after surgery; internal bleeding shows as swelling and distension, sanguineous drainage, and subtle vital sign changes, with increased heart rate first as the body compensates for decreased stroke volume. The nurse applies direct pressure, notifies the provider, and monitors vitals closely. Incorrect: Infection does not happen within 24 to 48 hours, so a low-grade temperature then is not infection yet; infection shows 2 to 11 days after surgery. Dehiscence is signaled by a sudden large increase in drainage after straining with a feeling of something giving way, not drainage alone, and evisceration means viscera are visible in the wound.",
            "topic": "Med Surg I Wk 5: HIV, Skin, Wounds &amp; Burns",
            "source": "quiz-bank"
          },
          {
            "stem": "A client has a circumferential full-thickness burn of the left arm. The fingers are cool, and the radial pulse is weak. The client says, \"My arm doesn't even hurt, so it must be my least serious burn.\" Which intervention should the nurse anticipate?",
            "options": [
              "Elevating the arm and waiting for diuresis, since edema resolves once fluid mobilizes.",
              "An escharotomy, since edema under circumferential eschar is impairing distal perfusion.",
              "A split-thickness skin graft today, since full-thickness burns are covered with grafts.",
              "Pressure garments on the arm, since keeping scars flat is what restores circulation."
            ],
            "answer": 1,
            "rationale": "Correct: In circumferential burns, edema impairs circulation, and an escharotomy (a scalpel through the eschar) restores distal perfusion. The lack of pain does not mean a minor burn; full-thickness burns may be painless because the nerves are destroyed. Incorrect: Diuresis marks the end of the emergent phase, which can last up to 72 hours, too long to wait while the hand is losing perfusion. Grafting full-thickness wounds belongs to the acute phase, and pressure garments are a rehab measure to prevent hypertrophic scarring, not a treatment for lost circulation.",
            "topic": "Med Surg I Wk 5: HIV, Skin, Wounds &amp; Burns",
            "source": "quiz-bank"
          },
          {
            "stem": "On day 3 after abdominal surgery, a client coughs hard, says something \"gave way,\" and the nurse sees a loop of bowel through the separated incision. Which actions should the nurse take? Select all that apply.",
            "options": [
              "Cover the wound and bowel with sterile dressings soaked in sterile normal saline.",
              "Gently reinsert the exposed bowel so the sterile dressing can lie flat on the wound.",
              "Position the client with the hips and knees bent while awaiting the provider.",
              "Keep the client NPO, since emergency surgery is likely to be needed for this.",
              "Leave to page the provider and gather supplies, then return to the bedside.",
              "Cover the exposed bowel with dry sterile gauze so it stays clean until surgery."
            ],
            "answers": [
              0,
              2,
              3
            ],
            "rationale": "Correct: Evisceration (viscera visible in the wound) needs immediate surgery. The nurse covers the wound and any organs with sterile dressings soaked in sterile normal saline, positions the client with hips and knees bent, and keeps the client calm and NPO because emergency surgery is likely. Incorrect: Organs are never reinserted. The nurse notifies the provider immediately but stays with the client rather than leaving the bedside. Dry gauze is wrong because the page specifies dressings soaked in sterile normal saline.",
            "topic": "Med Surg I Wk 5: HIV, Skin, Wounds &amp; Burns",
            "source": "quiz-bank"
          }
        ],
        "eaq": []
      }
    },
    {
      "id": "medsurg1-week6-gi",
      "label": "Med Surg I Wk 6: Gastrointestinal",
      "sets": {
        "mustKnow": [],
        "extraPractice": [
          {
            "stem": "The nurse is reviewing four clients who returned from GI diagnostic procedures within the last hour. Which situation requires the nurse to intervene?",
            "options": [
              "A client after an upper GI series with barium is drinking several large glasses of water.",
              "A client after a colonoscopy reports passing a lot of gas and mild abdominal fullness.",
              "A client after a barium enema is told that stools may look white for a short time.",
              "A client after an EGD with conscious sedation is offered sips of water for a sore throat."
            ],
            "answer": 3,
            "rationale": "Correct: After an EGD the throat is anesthetized and the client stays NPO until the gag reflex returns, usually 2 to 4 hours, so offering water one hour after the procedure risks aspiration. Incorrect: Fluids are encouraged after barium studies because barium constipates; air is used during colonoscopy, so gas afterward is expected; and white stool teaching is part of care after barium studies, so none of these needs intervention.",
            "topic": "Med Surg I Wk 6: Gastrointestinal",
            "source": "quiz-bank"
          },
          {
            "stem": "A client with a duodenal ulcer has heart rates of 72, 80, 88, and 96 over the past 4 hours. Blood pressure is unchanged, and the client says the epigastric pain is better than it was this morning. Which action is the priority?",
            "options": [
              "Document the improved pain and continue to reassess vital signs every 4 hours.",
              "Give the prescribed antacid now, since antacids act quickly to relieve symptoms.",
              "Check the H and H and NG aspirate color, and report the rising heart rate trend.",
              "Prepare the client for a Gastrografin upper GI study to rule out a perforation."
            ],
            "answer": 2,
            "rationale": "Correct: Hemorrhage is the most common PUD complication, and a creeping heart rate is a cue to investigate; pain can actually decrease at first because blood neutralizes gastric contents, and a redder NG aspirate and falling H and H support bleeding. Incorrect: Treating the pain improvement as reassuring ignores the heart rate trend. An antacid treats symptoms only. Perforation presents with sudden, severe pain and a rigid, board-like abdomen, not improving pain.",
            "topic": "Med Surg I Wk 6: Gastrointestinal",
            "source": "quiz-bank"
          },
          {
            "stem": "Two days after small bowel surgery, a client has a distended abdomen, absent bowel sounds after 5 minutes of listening, and repeated vomiting. The abdomen is soft without rigidity, and pain is controlled. Which interpretation and action are most appropriate?",
            "options": [
              "Perforation, since bowel sounds are absent; prepare the client for emergency surgery.",
              "Adhesion-related obstruction; prepare for a bowel resection that will need a stoma.",
              "Paralytic ileus after bowel manipulation; place an NG tube to low wall suction now.",
              "Diverticulitis flare from surgery; keep the client NPO and start IV antibiotics."
            ],
            "answer": 2,
            "rationale": "Correct: Paralytic ileus is the non-mechanical obstruction in which peristalsis stops, most often after the bowel has been manipulated; care is NG to low wall suction while waiting for peristalsis to return, or the client keeps vomiting. Incorrect: Perforation brings sudden, severe pain and a rigid, board-like abdomen, which this client does not have. Adhesions are the top mechanical cause, but resection for obstruction is end-to-end anastomosis with no stoma. Diverticulitis presents with left lower quadrant pain and signs of infection.",
            "topic": "Med Surg I Wk 6: Gastrointestinal",
            "source": "quiz-bank"
          },
          {
            "stem": "A client who had a Roux-en-Y gastric bypass reports dizziness, sweating, and palpitations soon after meals, and feeling shaky about 2 hours later. Which meal plan should the nurse reinforce?",
            "options": [
              "Three moderate meals, fluids with each meal, low fat, and a brisk walk right after eating",
              "Six small meals, fluids between meals, protein and fat included, and rest after eating",
              "Six small meals, fruit juice with each meal, low protein, and rest after eating",
              "Three small meals, fluids between meals, simple sugars for energy, and rest after"
            ],
            "answer": 1,
            "rationale": "Correct: Early symptoms after eating plus postprandial hypoglycemia about 2 hours later fit dumping syndrome; the diet is six small meals, no fluids with meals, avoidance of concentrated simple sugars, protein and fat encouraged, and rest after eating. Incorrect: Fruit juice with meals adds both fluid and concentrated sugar, which drives the hyperosmolar bolus, and protein should be encouraged rather than limited. Simple sugars worsen the insulin surge, and fluids with meals or larger meals speed dumping.",
            "topic": "Med Surg I Wk 6: Gastrointestinal",
            "source": "quiz-bank"
          },
          {
            "stem": "A client with skip lesions in the terminal ileum, malabsorption, and a fistula says, \"My friend with ulcerative colitis was cured by having her colon removed, so I want that surgery too.\" Which response by the nurse is most accurate?",
            "options": [
              "Removing the colon is curative for both forms of inflammatory bowel disease.",
              "Your disease stays in the mucosa, so the bowel is unlikely to perforate later.",
              "Surgery for your disease is usually for strictures, and recurrence is very high.",
              "A J pouch would cure your disease, since it is the usual surgery for your type of IBD."
            ],
            "answer": 2,
            "rationale": "Correct: Skip lesions, terminal ileum involvement, malabsorption, and fistulas point to Crohn's disease, which can occur from mouth to anus; surgery is usually for strictures, is not curative, and recurrence is very high. Incorrect: Colectomy is curative only for ulcerative colitis, which is limited to the colon. Crohn's is transmural, making perforation more likely, not less. The J pouch is the most common surgery for UC, not Crohn's.",
            "topic": "Med Surg I Wk 6: Gastrointestinal",
            "source": "quiz-bank"
          },
          {
            "stem": "The nurse is reviewing nutrition orders for several clients. Which order should the nurse question?",
            "options": [
              "Start TPN for a comatose client after a stroke whose bowel function is intact.",
              "Check blood glucose every 6 hours with insulin coverage during TPN infusion.",
              "Taper the TPN rate down in steps before stopping it once oral intake improves.",
              "Infuse TPN through a dedicated central line and run the lipids separately."
            ],
            "answer": 0,
            "rationale": "Correct: If the gut works, use it; a comatose client with a working gut gets tube feedings, not TPN, which is reserved for a gut that cannot be used and causes gut atrophy when the bowel goes unused. Incorrect: Blood glucose checks every 6 hours with possible insulin coverage, starting and stopping slowly so the pancreas can adapt, and a central, dedicated line with lipids run separately are all correct TPN care.",
            "topic": "Med Surg I Wk 6: Gastrointestinal",
            "source": "quiz-bank"
          },
          {
            "stem": "The nurse is teaching several clients with new bowel ostomies. Which client statement indicates a need for further teaching?",
            "options": [
              "Ileostomy client: \"My output will stay liquid, so I will always need a pouch on.\"",
              "Sigmoid colostomy client: \"My stool should end up close to a normal bowel movement.\"",
              "Loop stoma client: \"Mucus from the distal opening is expected; stool comes from the other.\"",
              "Ileostomy client: \"Once it heals, I can irrigate it daily like an enema and skip a bag.\""
            ],
            "answer": 3,
            "rationale": "Correct: Irrigation like an enema every day or two is for a colostomy near the rectum with solid stool; an ileostomy in the right lower quadrant oozes very liquid, caustic stool almost continuously and always needs a bag. Incorrect: The ileostomy statement about liquid output and a constant pouch is accurate; a left lower quadrant sigmoid colostomy produces output almost like a normal BM; and with a loop stoma the proximal opening passes stool while the distal opening passes mucus.",
            "topic": "Med Surg I Wk 6: Gastrointestinal",
            "source": "quiz-bank"
          },
          {
            "stem": "Two 45-year-old clients ask about colorectal cancer screening. Client A has no risk factors. Client B has had ulcerative colitis for 10 years. Which plan is consistent with screening guidance?",
            "options": [
              "A: colonoscopy now and every 10 years; B: colonoscopy earlier and more often than A",
              "A: no screening until age 50; B: colonoscopy now and repeated every 10 years like A",
              "A: stool DNA test every 10 years; B: yearly fecal occult blood test in place of a scope",
              "A: colonoscopy every 5 years from age 50; B: start at the same time as A with a scope"
            ],
            "answer": 0,
            "rationale": "Correct: Colonoscopy is the gold standard, with average-risk screening starting at 45 and repeated every 10 years; an IBD history calls for screening earlier and more often. Incorrect: Waiting until 50 is later than the page's start age, and giving client B the same interval as an average-risk client ignores the IBD risk. Fecal occult blood and stool DNA tests are acceptable but less favorable and are done yearly, not every 10 years.",
            "topic": "Med Surg I Wk 6: Gastrointestinal",
            "source": "quiz-bank"
          },
          {
            "stem": "A 79-year-old client with known diverticulosis is newly confused today. The client has mild left lower quadrant tenderness and a palpable mass but denies pain. Which interpretation and action are most appropriate?",
            "options": [
              "Expected change with aging; continue the high-fiber diet and reassess tomorrow.",
              "Possible diverticulitis; keep the client NPO and report for IV fluids and antibiotics.",
              "Flare from nuts and seeds; remove them from the diet permanently and observe.",
              "Possible paralytic ileus; encourage fluids by mouth to help restart peristalsis quickly."
            ],
            "answer": 1,
            "rationale": "Correct: Diverticulitis presents with left lower quadrant pain, a palpable mass, and signs of infection, and an older adult may only be confused; care is NPO to rest the gut and, if severe, admission for IV fluids and antibiotics. Incorrect: Confusion with LLQ findings should not be attributed to aging. There is no evidence for avoiding nuts and seeds unless they cause a flare. Paralytic ileus is managed with NG suction, not oral fluids, and follows bowel manipulation.",
            "topic": "Med Surg I Wk 6: Gastrointestinal",
            "source": "quiz-bank"
          },
          {
            "stem": "The nurse is evaluating teaching for a client with GERD. Which client statements indicate understanding? Select all that apply.",
            "options": [
              "\"I will stay sitting up for 2 to 3 hours after I eat.\"",
              "\"I will put 4 to 6 inch blocks under the head of my bed.\"",
              "\"I will drink most of my fluids between meals, not with them.\"",
              "\"Quitting smoking should help my sphincter right away.\"",
              "\"A small snack at bedtime will keep acid from building up overnight.\"",
              "\"Fatty foods are fine as long as meals stay small.\""
            ],
            "answers": [
              0,
              1,
              2,
              3
            ],
            "rationale": "Correct: GERD teaching includes sitting up 2 to 3 hours after meals, raising the head of the bed on 4 to 6 inch blocks because gravity is not reflux's friend, drinking between meals rather than with them, and quitting smoking because LES strength improves immediately. Incorrect: Late-night snacking should be avoided, and fatty foods should be avoided even when meals are small; small meals are part of the plan but do not make fatty foods acceptable.",
            "topic": "Med Surg I Wk 6: Gastrointestinal",
            "source": "quiz-bank"
          }
        ],
        "eaq": []
      }
    },
    {
      "id": "medsurg1-week7-cancer-hepatobiliary",
      "label": "Med Surg I Wk 7: Cancer &amp; Hepatobiliary",
      "sets": {
        "mustKnow": [],
        "extraPractice": [
          {
            "stem": "A client receiving chemotherapy every two weeks arrives for the next scheduled dose. Today's absolute neutrophil count is 800, platelets are 210,000, and hemoglobin is stable. The client says, \"I've been dreading the nausea all week. Please just start it so I can get it over with.\" Which action should the nurse take?",
            "options": [
              "Premedicate with the antiemetic and begin the chemotherapy as scheduled",
              "Hold the chemotherapy and notify the provider that counts have not recovered",
              "Start the chemotherapy through a central line to lower the infection risk",
              "Begin the chemotherapy and place the client on strict neutropenic precautions"
            ],
            "answer": 1,
            "rationale": "Correct: Counts are checked before every dose and chemo is held if WBCs or platelets are too low. After the nadir (about days 7 to 9 on a two-week cycle) counts should recover by the next visit, or treatment is delayed. An ANC under 1,000 is neutropenic, so this client's marrow has not recovered even though platelets and hemoglobin are acceptable. Incorrect: Premedicating for anticipatory nausea is appropriate care, but it does not make it safe to give chemo on unrecovered counts; the client's distress is a red herring. A central line is preferred for giving chemo but does not offset neutropenia, and starting precautions while still giving the dose would push the count lower.",
            "topic": "Med Surg I Wk 7: Cancer &amp; Hepatobiliary",
            "source": "quiz-bank"
          },
          {
            "stem": "A nurse is infusing a vesicant chemotherapy drug through a peripheral IV. On a routine site check, the nurse can no longer obtain a blood return. The site is not swollen, and the client says, \"It doesn't hurt at all, so it must be fine.\" What should the nurse do first?",
            "options": [
              "Continue the infusion, since pain, the cardinal symptom, is not present",
              "Stop the infusion and leave the cannula in place to aspirate gently",
              "Remove the cannula right away and elevate the arm above the heart",
              "Slow the infusion rate and recheck the site for pain in 15 minutes"
            ],
            "answer": 1,
            "rationale": "Correct: Losing blood return means stopping the chemo. The response to extravasation is to stop the infusion immediately, attach a syringe and aspirate gently, then remove the cannula, elevate the arm, and give the antidote per protocol. Incorrect: Pain is the cardinal symptom of extravasation but is not always present, so the client's lack of pain is not reassurance. Removing the cannula first skips the aspiration step, which has to happen through the cannula that is still in place. Slowing the rate keeps the vesicant flowing into tissue, where it can cause necrosis and limb loss.",
            "topic": "Med Surg I Wk 7: Cancer &amp; Hepatobiliary",
            "source": "quiz-bank"
          },
          {
            "stem": "A nurse is caring for two clients on the oncology unit: one with sealed radioactive seeds implanted for prostate cancer, and one who swallowed iodine-131 for thyroid cancer this morning. Which plan of care is correct?",
            "options": [
              "Save the seed client's urine and stool in a lead container until discharge",
              "Allow the iodine client longer visits, since the dose was swallowed by mouth",
              "Share one dosimeter between both rooms to track the unit's total exposure",
              "Treat the iodine client's excretions as radioactive, not the seed client's"
            ],
            "answer": 3,
            "rationale": "Correct: With unsealed internal radiation such as swallowed iodine-131, the excretions (urine, stool, vomit, sweat) are radioactive. With a sealed implant, the client emits radiation while the implant is active, but the excretions are not radioactive. Incorrect: Saving the seed client's urine confuses sealed with unsealed therapy; what is saved for a sealed implant is dressings and linens until the source is removed, and the lead container is for a dislodged source picked up with forceps. A swallowed dose makes the client a source of radiation, so visiting is not relaxed. Each person wears their own dosimeter; it only tracks exposure and is never shared.",
            "topic": "Med Surg I Wk 7: Cancer &amp; Hepatobiliary",
            "source": "quiz-bank"
          },
          {
            "stem": "A client receiving chemotherapy has an absolute neutrophil count of 450. Family members arrive with several items. Which item can the nurse allow the client to have?",
            "options": [
              "A cup of fresh strawberries rinsed well under running water",
              "A small bag of raw peanuts bought from the local grocery store",
              "A banana that the client peels at the bedside before eating it",
              "A vase of fresh-cut flowers to set on the windowsill near the bed"
            ],
            "answer": 2,
            "rationale": "Correct: An ANC under 500 calls for protective precautions. Raw fruits that can be peeled, such as bananas, oranges, apples and pineapple, are acceptable. Incorrect: Berries cannot be peeled, so rinsing them does not make them acceptable; this is the closest distractor because it sounds like careful food handling. Raw peanuts and seeds are excluded from the neutropenic diet, and fresh flowers and plants are not allowed in the room.",
            "topic": "Med Surg I Wk 7: Cancer &amp; Hepatobiliary",
            "source": "quiz-bank"
          },
          {
            "stem": "A client with cirrhosis is scheduled for a percutaneous liver biopsy this afternoon. The nurse reviews the pre-procedure checklist. Which finding should the nurse report to the provider before the biopsy proceeds?",
            "options": [
              "The type and crossmatch was completed this morning and is on file",
              "The client asks whether normal breathing can continue during the needle",
              "The consent is signed, and the baseline vital signs are within normal limits",
              "This morning's prothrombin time and INR are both prolonged on the lab report"
            ],
            "answer": 3,
            "rationale": "Correct: The liver is very vascular, and liver disease impairs the production of prothrombin, so coagulation studies (PT and INR) are checked before a biopsy; a prolonged PT means a tendency to bleed and is reported before the needle goes in. Incorrect: A type and crossmatch, a signed consent, and baseline vital signs are expected parts of the pre-procedure checklist, not problems. The client's question is a teaching need: the client holds the breath after expiration for the needle, which the nurse explains rather than reports.",
            "topic": "Med Surg I Wk 7: Cancer &amp; Hepatobiliary",
            "source": "quiz-bank"
          },
          {
            "stem": "A client with cirrhosis has an elevated serum ammonia and asterixis and is prescribed lactulose. After a soft bowel movement this morning, the client refuses the noon dose, saying, \"I already went today. I'm not constipated, so I don't need a laxative.\" Which response by the nurse is best?",
            "options": [
              "Hold the dose and document that the client already had a bowel movement",
              "Offer a stool softener instead, since constipation is not a problem",
              "Restrict dietary protein today to lower ammonia instead of the dose",
              "Explain the drug removes ammonia, with a goal of 2 to 4 stools a day"
            ],
            "answer": 3,
            "rationale": "Correct: The goal of hepatic encephalopathy care is to get the ammonia down. Lactulose is titrated to about 2 to 4 stools a day to remove ammonia, and the nurse teaches why even when the client has already had a bowel movement that day. Incorrect: Holding the dose treats lactulose as a simple laxative, the same misconception the client holds. A stool softener prevents straining in bleeding precautions but does not remove ammonia. Protein is restricted only with severe encephalopathy, and otherwise its benefits outweigh the ammonia risk; it is not a substitute for a missed dose.",
            "topic": "Med Surg I Wk 7: Cancer &amp; Hepatobiliary",
            "source": "quiz-bank"
          },
          {
            "stem": "A client with a history of gallstones has yellow sclera, clay-colored stools, and dark urine. Which interpretation of these findings is most accurate?",
            "options": [
              "RBC breakdown has raised indirect bilirubin, so check the urine for blood",
              "Ammonia is not being converted to urea, so monitor for a change in mental status",
              "A stone may be blocking the common bile duct, raising direct bilirubin levels",
              "The liver cannot make albumin, so fluid is shifting into the peritoneum"
            ],
            "answer": 2,
            "rationale": "Correct: This is obstructive jaundice. A gallstone in the common bile duct keeps bilirubin from reaching the gut, so stools turn clay-colored. Conjugated (direct) bilirubin is water soluble and found in urine, so it rises in obstruction and darkens the urine. Incorrect: Hemolytic jaundice comes from RBC breakdown (and prompts a urine check for hematuria), but it does not explain clay-colored stools. Ammonia buildup causes hepatic encephalopathy, and low albumin drives ascites in cirrhosis; neither explains this triad in a client with gallstones.",
            "topic": "Med Surg I Wk 7: Cancer &amp; Hepatobiliary",
            "source": "quiz-bank"
          },
          {
            "stem": "A client admitted with acute pancreatitis reports severe epigastric pain, and vomiting has not relieved the nausea. Heart rate is 118, blood pressure is 100/62, and lipase is elevated. Which action should the nurse take first?",
            "options": [
              "Give the prescribed IV morphine and help the client into a knees-bent position",
              "Hold opioids for now, since they can increase pancreatic pain by causing spasms",
              "Offer small sips of clear fluids to replace the fluid lost by vomiting",
              "Place the client flat on the back to relieve the peritoneal irritation"
            ],
            "answer": 0,
            "rationale": "Correct: In acute pancreatitis, pain relief comes first because the pain itself can cause hemodynamic compromise; IV opioids such as morphine are given, and a knees-bent or fetal position helps. Incorrect: Giving opioids cautiously because some can increase pain through spasms applies to chronic pancreatitis, not to an acute flare. The client is kept NPO with an NG tube to low wall suction during a flare to rest the pancreas, and fluid loss is replaced with aggressive IV hydration, not oral sips. Lying flat does not ease the pain; knees bent or fetal position does.",
            "topic": "Med Surg I Wk 7: Cancer &amp; Hepatobiliary",
            "source": "quiz-bank"
          },
          {
            "stem": "A day-care worker was exposed to hepatitis A 10 days ago, and a coworker had a blood exposure from a client with hepatitis B 9 days ago. Neither has received any post-exposure treatment. Which statement about prophylaxis is accurate?",
            "options": [
              "The hepatitis A exposure can still benefit from vaccine or immune globulin",
              "The hepatitis B exposure can still benefit, since it is under two weeks old",
              "Neither exposure can benefit, since prophylaxis must begin within 24 hours",
              "Both exposures can still benefit, since each falls in its treatment window"
            ],
            "answer": 0,
            "rationale": "Correct: For hepatitis A, the vaccine or immune globulin (about 2 months of protection) is given within 2 weeks of exposure, so day 10 still qualifies. Incorrect: Hepatitis B prophylaxis is given within 24 hours, and there is no benefit after 7 days, so the day-9 exposure is too late. The two-week window belongs to hepatitis A, not B, which is why both the B-only and both-benefit options are wrong. The 24-hour rule is hepatitis B's, not hepatitis A's, so the neither option applies it to the wrong virus.",
            "topic": "Med Surg I Wk 7: Cancer &amp; Hepatobiliary",
            "source": "quiz-bank"
          },
          {
            "stem": "A client with cirrhosis has esophageal varices and a prolonged prothrombin time. Which instructions should the nurse include in discharge teaching? Select all that apply.",
            "options": [
              "Take a stool softener daily to avoid straining during bowel movements",
              "Use aspirin rather than other products for minor aches and pains",
              "Blow the nose gently rather than forcefully whenever it is congested",
              "Use a firm-bristled toothbrush to keep the gums clean and healthy",
              "Hold pressure longer than usual after an injection or a blood draw",
              "Use an enema rather than a laxative if constipation becomes a problem"
            ],
            "answers": [
              0,
              2,
              4
            ],
            "rationale": "Correct: Straining at stool and vigorous nose blowing raise pressure and can rupture varices, so stool softeners and gentle nose blowing are taught. A lack of prothrombin lengthens bleeding times, so pressure is held longer after an IM shot. Incorrect: Aspirin is on the page's avoid list for bleeding precautions. Hard toothbrushes are avoided because the gums bleed first. Enemas and rectal temperatures are also avoided; an enema is not a safer alternative for constipation in a client with varices.",
            "topic": "Med Surg I Wk 7: Cancer &amp; Hepatobiliary",
            "source": "quiz-bank"
          }
        ],
        "eaq": []
      }
    }
  ],

  TOPIC_ORDER: [
    "CV Labs &amp; Diagnostics",
    "CAD &amp; Acute Coronary Syndrome",
    "Pericarditis",
    "Infective Endocarditis",
    "Valvular Heart Disease",
    "Med Surg I Wk 1: Respiratory",
    "Med Surg I Wk 2: Hematology",
    "Med Surg I Wk 3: Periop, Fluids &amp; Electrolytes",
    "Med Surg I Wk 4: Renal &amp; Urinary",
    "Med Surg I Wk 5: HIV, Skin, Wounds &amp; Burns",
    "Med Surg I Wk 6: Gastrointestinal",
    "Med Surg I Wk 7: Cancer &amp; Hepatobiliary"
  ]
};

/* exam.js reads the breakdown order from window.TOPIC_ORDER. */
window.TOPIC_ORDER = window.QUIZ_BANK.TOPIC_ORDER;
