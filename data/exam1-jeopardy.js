/* ============================================================
   exam1-jeopardy.js -- the question bank for the Exam 1 Jeopardy game
   (3 players). Read by assets/jeopardy-exam1.js; the engine has no
   content of its own, so this file can be edited or expanded later
   (for example with a new category) without touching any game code.

   Covers Week 1 (5 categories, group "week1") and the Med Surg I
   Review (7 categories, group "ms1"). Each game draws 2 Week 1 + 4
   Med Surg I categories at random.

   Shape: 10 clues per category = 2 per value (100/200/300/400/500),
   difficulty rising with value; declared in "shape" for verify.js.
   Each clue: { q, a, rationale }. Category names use a literal "&"
   (the engine escapes at render time). Sourcing and quality bar:
   PROMPTS-AND-STANDARDS.md Part 4 and SESSION-LOG.md 2026-10-15.
   ============================================================ */
window.JEOPARDY_EXAM1 = {
  "shape": [
    2,
    2,
    2,
    2,
    2
  ],
  "categories": [
    {
      "id": "w1-cv-labs-diagnostics",
      "name": "CV Labs & Diagnostics",
      "group": "week1",
      "badge": "Week 1",
      "clues": {
        "100": [
          {
            "q": "A client reports chest pressure every time they climb the stairs at work, but never while sitting or sleeping. The resting 12-lead EKG in the clinic is completely normal. Which diagnostic test is designed to reveal what the resting EKG missed?",
            "a": "An exercise stress test.",
            "rationale": "The page says the stress test is for chest pain with exertion but not at rest: CAD may show minimal symptoms and a normal resting EKG, and stressing the heart on purpose on a treadmill or bike unmasks CAD symptoms or dysrhythmias."
          },
          {
            "q": "A client with several episodes of fainting of unknown origin is sent home wearing a 24-hour ambulatory EKG. The client says, \"Good, so the hospital will call me right away if my heart does something strange tonight.\" What should the nurse teach instead?",
            "a": "No one watches it in real time; it only records, so keep a diary of activities and symptoms.",
            "rationale": "The page describes the Holter monitor as recorded only, with no one watching it in real time, and says the patient keeps a diary of exercise and anything that feels funny in the heart so the recording can be matched to symptoms."
          }
        ],
        "200": [
          {
            "q": "An older adult admitted with weeks of poor appetite and weight loss has a total cholesterol well below 200. A new nurse documents this as a reassuringly low cardiac risk and moves on. Which other lab should the nurse look at, and why?",
            "a": "The serum albumin, to see how malnourished the client is.",
            "rationale": "Total cholesterol is affected by malnutrition; the page says that if it is very low, also look at the serum albumin to judge the degree of malnourishment, rather than reading the low value as purely good news."
          },
          {
            "q": "After an echocardiogram, a client reads the report and says, \"My ejection fraction is only 60%, so my heart is losing 40% of its blood and must be failing.\" What should the nurse explain?",
            "a": "60% is normal; a normal ejection fraction is 55% to 70%.",
            "rationale": "The page defines ejection fraction as the share of end-diastolic left ventricular blood pumped out with each contraction, normal 55% to 70% (about half or a little more); low values such as 40% are what is seen in heart failure."
          }
        ],
        "300": [
          {
            "q": "Three hours after a heart cath through the right femoral artery, a client asks to have the head of the bed raised to 45 degrees to eat lunch. The groin dressing is dry and the pedal pulse is strong. What should the nurse do?",
            "a": "Keep the head of the bed below 30 degrees with the leg straight on bed rest.",
            "rationale": "A dry site and strong pulse do not end the precautions: the page says a femoral site requires bed rest at least 8 hours, the affected leg straight, and the head of the bed below 30 degrees so the high-pressure arterial vessel doesn't bleed."
          },
          {
            "q": "Two hours after a cardiac catheterization, the client's groin site is dry with no hematoma, and distal pulse, color, and sensation are all normal. The client now has new slurred speech and one-sided weakness. Which cath complication should the nurse suspect?",
            "a": "Emboli causing a stroke.",
            "rationale": "The reassuring site findings rule out the number one complication (bleeding) as the explanation; the page lists emboli as a heart cath complication and says to monitor for signs and symptoms of stroke."
          }
        ],
        "400": [
          {
            "q": "A client received a heparin drip during a femoral heart cath and the sheath is ready to come out. A new nurse plans to pull it right away and hold pressure for a couple of minutes, as with a peripheral IV. Which two parts of this plan must be corrected?",
            "a": "Check clotting time before pulling the sheath, then hold pressure up to about 20 minutes.",
            "rationale": "The page says clotting time is monitored closely before the sheath is pulled because anticoagulants are used during the procedure and arteries are high-pressure vessels, and pressure is held up to about 20 minutes, far longer than for an IV, so the vessel can seal."
          },
          {
            "q": "A client with angina is scheduled for a heart cath to find a suspected coronary occlusion. A student says the team should go in through the femoral vein because it is the lower-pressure, safer vessel. Why would that approach fail to answer the clinical question?",
            "a": "Venous entry is a right heart cath, which cannot reach the coronary arteries; only a left heart cath through an artery can.",
            "rationale": "The page says a right heart cath enters the venous system and cannot look at the coronary arteries, while a left heart cath enters an artery (femoral, radial, or brachial), travels retrograde to the aorta, and is the absolute only way to reach the coronaries for suspected occlusion."
          }
        ],
        "500": [
          {
            "q": "Two clients present with suspected MIs. Client A's chest pain began yesterday; both CK-MB and troponin are elevated. Client B ignored crushing chest pain 5 days ago; troponin is elevated but CK-MB is normal. Does Client B's normal CK-MB argue against an MI, and what explains the difference?",
            "a": "No; CK-MB returns to normal within about 2 days, while troponin stays elevated 10 to 14 days.",
            "rationale": "Per the page, CK-MB is elevated 3 hours after an MI and stays elevated only 24 hours to 2 days, while troponin elevates 2 to 3 hours after and returns to baseline in 10 to 14 days. At day 5, CK-MB has already normalized but troponin still reflects the damage; at day 1 both are still up."
          },
          {
            "q": "A client with confirmed left-sided heart failure has both natriuretic peptides drawn. The BNP is only modestly elevated, while the pro-BNP is dramatically elevated. A colleague says the two results conflict, so one must be a lab error. How should the nurse interpret the mismatch?",
            "a": "It is expected; in left ventricular dysfunction pro-BNP rises much more than BNP, and both point to heart failure.",
            "rationale": "The page says plasma concentrations of BNP and pro-BNP are normally similar, but with left ventricular dysfunction (left-sided heart failure) pro-BNP rises much more significantly than BNP; an elevated BNP or pro-BNP means think heart failure, so the gap is the expected pattern, not an error."
          }
        ]
      }
    },
    {
      "id": "w1-cad-acs",
      "name": "CAD & ACS",
      "group": "week1",
      "badge": "Week 1",
      "clues": {
        "100": [
          {
            "q": "Two 52-year-old men with the same BMI come in for a screening visit. Client A carries his weight in his belly and his father had an MI at 46. Client B's hips are wider than his abdomen and he has no family history of heart disease. Which client is at higher risk for CAD, and why?",
            "a": "Client A, because apple-shaped obesity and a family history of early CAD both raise risk.",
            "rationale": "The page lists family history (especially relatives who developed CAD younger) as a non-modifiable risk factor and says apple-shaped people (rotund in the belly) are at higher risk than pear-shaped people (hips wider than the abdomen)."
          },
          {
            "q": "A client with suspected ACS is pale, diaphoretic, and pressing a fist against his sternum, but when the nurse asks, \"Are you having any pain in your chest?\" he says no. What should the nurse do next in the assessment?",
            "a": "Rephrase and ask whether he feels pressure in his chest.",
            "rationale": "The page warns that a cardiac patient may say no to \"pain in your chest\" and yes to \"pressure in your chest,\" so the nurse should ask about pressure, not just pain, using words the patient understands; MI pain is often described as pressure, heaviness, or tightness."
          }
        ],
        "200": [
          {
            "q": "A client admitted with chest pain has an order for sublingual nitroglycerin as needed. While reconciling home medications, the nurse learns the client took an erectile dysfunction drug last night. The client now reports chest pain and asks for the nitro. What should the nurse do?",
            "a": "Hold the nitroglycerin and notify the provider, because combining it with an erectile dysfunction drug can be fatal.",
            "rationale": "The page's nitro teaching states nitroglycerin must never be combined with erectile dysfunction drugs because the combination can be fatal; both cause vasodilation and nitro already lowers BP, so the order needs clarification before any dose."
          },
          {
            "q": "A client with chronic stable angina takes isosorbide every morning. He tells the nurse that during his next chest pain episode he plans to take an extra isosorbide instead of a sublingual nitroglycerin, since \"they're the same medicine.\" How should the nurse correct this plan?",
            "a": "Isosorbide is a daily preventive drug; sublingual nitroglycerin is the first-line treatment for acute chest pain.",
            "rationale": "The page describes isosorbide as taken daily to prevent angina attacks (with tolerance building over time), while sublingual nitrates are the rapid-acting, first-line treatment for acute anginal symptoms, working in less than 3 minutes."
          }
        ],
        "300": [
          {
            "q": "Two days after an MI caused by an LAD blockage, a client becomes short of breath and the nurse hears new crackles in both lung bases. Heart sounds have no new murmur. What complication does this most likely represent, and why does the blocked artery matter?",
            "a": "Left-sided heart failure, because the LAD perfuses the left ventricle and its muscle death lost pumping action.",
            "rationale": "The page says the LAD perfuses the left ventricle (the apex), that muscle death at the apex and ventricle loses pumping action (heart failure), and that crackles after a left ventricular infarction could point to left-sided heart failure. A new murmur would instead suggest papillary muscle dysfunction."
          },
          {
            "q": "On day 4 after CABG times three, a client with peripheral arterial disease has a clean, dry sternal incision, but the incision running down the inner leg from groin toward the ankle is red with drainage. What is the likely problem, and why is this client at particular risk?",
            "a": "Infection at the saphenous vein harvest site, made likelier by poor peripheral perfusion from his arterial disease.",
            "rationale": "The page lists infection of the sternal wound or the leg where the vein was harvested as a post-CABG risk; the saphenous vein runs from the groin down the medial leg to the ankle, and poor healing is likelier with atherosclerosis or peripheral arterial/vascular disease, which can lengthen the stay."
          }
        ],
        "400": [
          {
            "q": "Two clients arrive at a hospital with a cath lab, neither with any bleeding contraindication. Client A has an NSTEMI; Client B has a STEMI. Which treatment is first line for both clients and what is its time goal, and which client is also a candidate for thrombolytics?",
            "a": "PCI within 90 minutes of ED arrival for both; only the STEMI client (B) is also a thrombolytic candidate.",
            "rationale": "The page's treatment table lists PCI for both STEMI and NSTEMI as the first-line treatment for a confirmed MI, within 90 minutes of ED arrival, while thrombolytic therapy is listed only for STEMI patients (within 30 minutes of arrival). It also notes PCI is performed more often than thrombolytics."
          },
          {
            "q": "A client recovering from an MI takes metoprolol, amlodipine, isosorbide, and ranolazine. Wanting fewer pills, he says he will stop the metoprolol because \"the amlodipine is a blood pressure pill too, so it covers the same thing.\" Which drug should the nurse stress he keep, and why?",
            "a": "Keep the metoprolol, because beta blockers are the only class proven to prevent re-infarction and improve survival after MI.",
            "rationale": "The page states beta blockers (\"-olol\") are the only classification proven to prevent re-infarction and improve survival for MI patients, and calcium channel blockers are usually given in conjunction with the beta blocker, not as a replacement for it."
          }
        ],
        "500": [
          {
            "q": "Two clients both had an anterior MI from an LAD blockage yesterday. Client A has crackles and shortness of breath with BP 128/78 and warm, pink extremities. Client B has BP 78/50, is cool and mottled, and has barely any urine output. Both conditions come from left ventricular muscle death. What distinguishes Client B's complication, and why is it more dangerous?",
            "a": "Client B has cardiogenic shock: severe left ventricular failure with loss of blood pressure and perfusion, which carries high mortality.",
            "rationale": "The page explains that muscle death at the apex and ventricle loses pumping action (heart failure, as in Client A), while cardiogenic shock is shock from the heart itself due to severe left ventricular failure: blood pressure and perfusion are lost and the body shuts down, with high mortality."
          },
          {
            "q": "Two clients have chest pain that resolves within 10 minutes of rest. Client A has had the same pain climbing two flights of stairs for 5 years, controlled on medication. Client B never had chest pain until last week, and now it stops him in his tracks after walking half a block. Why is Client B's angina classified differently despite the same quick relief, and what is the concern?",
            "a": "Client B has unstable angina (ACS) because new-onset angina that markedly limits activity is unstable, and it can precede an MI.",
            "rationale": "The page defines stable angina by a familiar, predictable pattern with moderate to prolonged exertion, only slight activity limits, and fixed plaque, as with Client A. Unstable angina includes new onset that markedly limits physical activity (stops the person in their tracks); it is unpredictable, falls under ACS, and is an emergency because it precedes an MI."
          }
        ]
      }
    },
    {
      "id": "w1-pericarditis",
      "name": "Pericarditis",
      "group": "week1",
      "badge": "Week 1",
      "clues": {
        "100": [
          {
            "q": "Three days after an MI, a client is auscultated at the lower left sternal border while leaning forward. The nurse hears a squeaky, continuous grinding sound, like two pieces of sandpaper rubbing together, that keeps going while the client holds their breath. What finding is this?",
            "a": "A pericardial friction rub.",
            "rationale": "The page calls the pericardial friction rub the hallmark finding of pericarditis: a squeaky heart, a grating, continuous grinding sound like sandpaper. Pericarditis is an MI complication that usually shows up a few days after the MI, and a sound that persists with the breath held is cardiac rather than respiratory."
          },
          {
            "q": "A client with rheumatoid arthritis develops sudden chest pain behind the breastbone that radiates to the left side of the neck, the left shoulder, and the back. The pain is worse lying flat and eases when the client sits up and leans forward. What condition should the nurse suspect?",
            "a": "Pericarditis.",
            "rationale": "The page lists connective tissue diseases such as RA and lupus as causes of pericarditis, because the pericardium is connective tissue. Pericarditis pain is substernal, radiates to the left neck, shoulder, and back, has a more sudden onset, and is positional: worse lying down, better sitting up and leaning forward."
          }
        ],
        "200": [
          {
            "q": "A client with pericarditis says the chest pain makes it \"hard to catch my breath.\" The respiratory rate is normal, there is no cough, the heart sounds are crisp, and a friction rub is present. What best explains the client's complaint?",
            "a": "The oppressive quality of pericarditis pain, not a pericardial effusion.",
            "rationale": "The page describes pericarditis pain as grating and oppressive, defined as hard to catch your breath. The cues of a pericardial effusion are cough, tachypnea, difficulty breathing, and heart sounds that are not crisp; this client has none of the objective effusion cues, only the subjective oppressive pain."
          },
          {
            "q": "A client with pericarditis winces each time they swallow their oral medications and when they cough, and the nurse considers holding the oral medications until a new swallowing problem is ruled out. How should the nurse interpret the pain?",
            "a": "As expected pericarditis pain, which is aggravated by swallowing and coughing.",
            "rationale": "The page states pericarditis pain is aggravated by breathing (mainly inspiration), coughing, and swallowing. Pain with swallowing in this client fits the known pericarditis pain pattern rather than pointing to a separate new problem."
          }
        ],
        "300": [
          {
            "q": "Six hours after an MI, a client has new chest pain that does not change with position or breathing and is not eased by leaning forward. A colleague says it is probably pericarditis and suggests ibuprofen. What should the nurse conclude?",
            "a": "Pericarditis is unlikely; the timing and non-positional, non-respiratory pain fit MI (ischemic) pain.",
            "rationale": "The page says post-MI pericarditis usually shows up a few days after the MI, from the MI's inflammation, so six hours is too early. It also says that with MI pain, position does not matter and breathing does not affect the pain, whereas pericarditis pain is worse on inspiration and better leaning forward."
          },
          {
            "q": "A nurse documents that a client with pericarditis leans forward because \"leaning forward brings the heart closer to the chest wall, which relieves the pain.\" What correction should the nurse make?",
            "a": "Leaning forward relieves pain by minimizing stretch on the pericardium; bringing the heart closer to the chest wall is the reason for leaning forward during auscultation of the rub.",
            "rationale": "The page gives leaning forward two separate purposes: for pain, leaning forward minimizes the stretch on the pericardium; for listening to the friction rub, leaning forward brings the heart closer to the chest wall. The documentation merged the two reasons."
          }
        ],
        "400": [
          {
            "q": "Two nurses chart on the same client with a large pericardial effusion who has an arterial line. Nurse A writes, \"systolic BP 12 mmHg lower on inspiration.\" Nurse B writes, \"systolic BP 12 mmHg higher on expiration.\" The charge nurse thinks the entries conflict. What is the correct interpretation?",
            "a": "Both describe the same finding, pulsus paradoxus, which suggests cardiac tamponade.",
            "rationale": "The page notes Lewis describes pulsus paradoxus as systolic BP 10 mmHg or more higher on expiration, while UpToDate says 10 mmHg lower on inspiration, and calls them the same thing. BP normally drops a little with breathing, but a change greater than 10 mmHg is significant and is a classic finding of tamponade."
          },
          {
            "q": "A nurse reassures a client with pericarditis whose echocardiogram shows a pericardial effusion: \"Extra fluid around the heart just adds more cushioning, like the normal lubricating fluid.\" Why is this incorrect?",
            "a": "An effusion is useless third-spaced fluid that squeezes the heart in a space that cannot expand much, lowering cardiac output.",
            "rationale": "The page says normal pericardial fluid keeps the heart lubricated and smooth while it pumps, but an effusion is third spacing, a collection of fluid that serves absolutely no purpose. Because the pericardial space does not expand much, the heart gets squished, cannot contract and release normally, and cardiac output suffers."
          }
        ],
        "500": [
          {
            "q": "Two clients both have a pericardial effusion on echocardiogram. Client A has a cough, tachypnea, heart sounds that are not crisp, and a BP of 124/80. Client B has very muffled heart sounds, marked jugular venous distension, and a BP that has fallen to 106/90. What distinguishes Client B, and what underlying change explains it?",
            "a": "Client B has cardiac tamponade: the effusion has increased in volume enough to compress the heart and drop cardiac output.",
            "rationale": "The page says tamponade develops when a pericardial effusion increases in volume. Client A shows effusion cues (cough, tachypnea, heart sounds not crisp). Client B shows tamponade findings: very muffled heart sounds, marked JVD from fluid backup, a narrowed pulse pressure (16 versus Client A's 44), and a falling BP, which is an indirect measure of decreased cardiac output."
          },
          {
            "q": "Two clients have pericarditis. Client A has a loud, grating, continuous rub at the lower left sternal border. Client B has no rub, but the heart sounds are not crisp and the client has a new cough and tachypnea. Both findings involve the fluid between the pericardial layers. What is the underlying difference?",
            "a": "Client A has lost the lubricating fluid so the inflamed layers rub; Client B has excess fluid collecting (a pericardial effusion).",
            "rationale": "The page explains the friction rub as inflammation taking away the fluidity between the visceral and parietal pericardium, so the two layers rub. A pericardial effusion is the opposite fluid problem: third-spaced fluid collecting in the pericardial space, which makes heart sounds not crisp (fluid between the stethoscope and the heart) and causes cough, tachypnea, and difficulty breathing."
          }
        ]
      }
    },
    {
      "id": "w1-endocarditis",
      "name": "Infective Endocarditis",
      "group": "week1",
      "badge": "Week 1",
      "clues": {
        "100": [
          {
            "q": "A client who injects drugs is admitted with low-grade fever, chills, and fatigue. The nurse hears a new murmur where S1 and S2 had been crisp, and the blood cultures grow Staphylococcus aureus. What condition do these findings point to?",
            "a": "Infective endocarditis.",
            "rationale": "The page names IV drug use as a port of entry, Staphylococcus aureus as one of the two most common organisms, and a new-onset murmur as a key manifestation, because damaged valves no longer open and close crisply. Together they point to endocarditis rather than a simple viral illness."
          },
          {
            "q": "While bathing a client with endocarditis, the nurse finds small red spots in the antecubital and popliteal areas and inside the mouth. They are smooth, flat, not raised, and do not hurt when touched. What are these spots, and what causes them?",
            "a": "Petechiae, caused by micro-emboli of vegetation.",
            "rationale": "The page describes petechiae as little red hemorrhagic spots that are smooth, flat macules, not raised and not painful. They are micro-emboli of vegetation and can appear on the fingers, eye, mouth, ankles, and antecubital and popliteal areas."
          }
        ],
        "200": [
          {
            "q": "A client with a known valve defect has three positive blood cultures, drawn from three different sites, that grew Streptococcus viridans. The echocardiogram shows endocardial enlargement. A new nurse writes \"pericarditis\" in the care plan. What correction should the nurse make?",
            "a": "The client has endocarditis, an infection of the inner lining of the heart, not pericarditis, which is an inflammation.",
            "rationale": "The page sums it up as: with pericarditis think inflammation, with endocarditis think infection. The endocardium is the inside of the heart. Positive cultures for a common causative organism and endocardial enlargement on echocardiogram are the diagnostic findings for endocarditis."
          },
          {
            "q": "A client with a history of congenital heart disease is scheduled for tonsil and adenoid removal. The client says, \"I only need antibiotics before I go to the dentist.\" What should the nurse recognize about this surgery?",
            "a": "Tonsil and adenoid removal also calls for prophylactic antibiotics in this client.",
            "rationale": "The page lists a history of congenital heart disease as an indication for prophylaxis. It lists tonsil and adenoid removal among the procedures that require it, along with any dental visit, a biopsy of any kind, and a wound infection or urinary tract infection. Prophylaxis is not limited to dental work."
          }
        ],
        "300": [
          {
            "q": "A client with a congenital valve defect has had low-grade fever, malaise, anorexia, and joint aches for over a week. The client denies dental work and drug use, but mentions a cystoscopy shortly before the symptoms began and says, \"That couldn't matter, it wasn't my heart or my teeth.\" How should the nurse interpret this history?",
            "a": "The urological procedure was a possible port of entry, and with the damaged valve it completes both conditions for endocarditis.",
            "rationale": "The page says two things must happen: a history of damaged epithelium, such as a defect or valve replacement, and a port of entry for infection. The history to look for includes recent dental, urological, or gynecologic procedures, not only dental work. The flu-like symptoms are the non-specific early picture."
          },
          {
            "q": "A client with fever, chills, and muscle aches insists it is just the flu. During an eye exam, the provider sees small hemorrhagic areas at the back of the retina. What is this finding, and what does it suggest instead of the flu?",
            "a": "Roth spots, which are highly suggestive of infective endocarditis.",
            "rationale": "The early symptoms are very non-specific, and the page says you would think it was the flu if you didn't know better. Roth spots, little hemorrhagic areas in the back of the retina, are relatively uncommon but highly suggestive of endocarditis. They are one of the findings the instructor said you don't hear about in any other condition."
          }
        ],
        "400": [
          {
            "q": "On day 2 of treatment for endocarditis, a client who had crisp S1 and S2 sounds on admission now has a new grade 2 murmur on a 1-to-6 scale. A colleague says, \"It's only grade 2, the fever is what matters.\" Why should the nurse disagree?",
            "a": "Any new murmur means the valve is damaged and no longer opening and closing properly, so it must be reported even when the grade is low.",
            "rationale": "The page says a murmur reflects how the valves open and close. S1 and S2 should be crisp, and damaged valves produce a murmur, graded 1 to 6. The page lists new-onset murmur as a key clinical manifestation, and damaged, leaking valves lead to heart failure, the most common complication."
          },
          {
            "q": "A client with a valve replacement has tender, pus-looking papules on two fingertips and a new murmur. The blood cultures grow a fungus, not bacteria. A colleague says endocarditis is now unlikely because it is caused by Staph aureus and Strep viridans. What misconception should the nurse correct?",
            "a": "Those bacteria are only the most common causes; fungi and viruses can also cause endocarditis.",
            "rationale": "The page names Staphylococcus aureus and Streptococcus viridans as the most common organisms. It also lists fungi and viruses as possible pathogens, so not all endocarditis is bacterial. The Osler nodes, the new murmur, and the damaged valve still point strongly to endocarditis."
          }
        ],
        "500": [
          {
            "q": "Two clients have endocarditis of the mitral valve. Client A has gradually worsening dyspnea and swelling in both ankles. Client B suddenly has a cold, pale, painful hand, and new splinter hemorrhages. Both problems start at the same valve. What different mechanism explains each client's problem?",
            "a": "Client A has heart failure from a leaking damaged valve. Client B has an embolus from vegetation that broke off and traveled from the left heart to the periphery, causing a limb infarction.",
            "rationale": "The page describes two consequences of infection on a moving valve. In the first, the damaged valve leaks blood backward, blood backs up, and heart failure develops. In the second, vegetations slough off as the valve opens and closes, and left-sided emboli leave the heart and can infarct a limb or organ. Splinter hemorrhages are a sign of vegetation reaching the periphery."
          },
          {
            "q": "Two clients are scheduled for procedures next week. Client A had endocarditis three years ago, was fully treated, and has felt well since; the procedure is a skin biopsy. Client B actively injects drugs, has no heart history, and is having a dental cleaning. Which client needs prophylactic antibiotics, and what does the nurse do for the other client instead?",
            "a": "Client A needs prophylaxis; Client B does not have a listed indication and should be referred to drug rehab.",
            "rationale": "The page bases prophylaxis on the client's history: a mechanical valve, a history of endocarditis, a history of congenital heart disease, or a heart transplant. A biopsy of any kind is a listed procedure. IV drug use is a port of entry that raises the risk of getting endocarditis, but it is not on the prophylaxis list. Nursing care for IV drug users is a referral to drug rehab."
          }
        ]
      }
    },
    {
      "id": "w1-valvular-heart-disease",
      "name": "Valvular Heart Disease",
      "group": "week1",
      "badge": "Week 1",
      "clues": {
        "100": [
          {
            "q": "A newly admitted client cannot give a history, but the nurse notices a sternotomy scar and hears a crisp, metallic clicking sound from the bedside without using a stethoscope. What type of valve should the nurse suspect, and what therapy should the nurse expect the client to be on?",
            "a": "A mechanical heart valve, so the client is likely on lifelong anticoagulation.",
            "rationale": "The page says a mechanical valve produces a click because it is metal, and some can hear it from the bedside without a stethoscope; a biologic valve has no click. Mechanical valves need lifetime anticoagulation, so the click is a cue to look for that therapy."
          },
          {
            "q": "A client going home on warfarin after a valve replacement says, \"I'll keep shaving with my grandfather's straight razor; I'm very careful with it.\" What should the nurse teach instead, and why?",
            "a": "Switch to an electric razor, because the client is anticoagulated and must take measures not to bleed.",
            "rationale": "The page's discharge teaching for anticoagulated valve clients is to use an electric razor instead of a straight-edge razor to avoid bleeding. Being careful does not remove the risk of a cut in a client whose blood has been thinned."
          }
        ],
        "200": [
          {
            "q": "A nurse doing a quick focused assessment on a client with known mitral valve disease wants one stethoscope position where both S1 and S2 are heard best at the same time, rather than moving between the base and the apex. Where should the nurse listen?",
            "a": "Erb's point: left sternal border, 3rd intercostal space.",
            "rationale": "The page places Erb's point at the left sternal border, 3rd ICS, where S1 and S2 are both heard best simultaneously. The mitral history is a red herring: the mitral site (5th ICS, left midclavicular line) is where S1 alone is heard best, and the aortic site is where S2 is heard best."
          },
          {
            "q": "A new graduate caring for a client with a porcine valve replacement reports, \"I listened at every site and I can't hear any valve click. Should I call the provider?\" How should the nurse respond?",
            "a": "No; a biologic (porcine) valve has no click, so hearing only valve closure is the expected finding.",
            "rationale": "The page says a biologic valve produces no click and only the closure of the valve is heard; the click belongs to a mechanical valve because it is metal. The absent click is normal for this client, not a sign of valve failure."
          }
        ],
        "300": [
          {
            "q": "A nurse auscultating a client with aortic valve disease documents: \"S2 heard loudest at the aortic area, left sternal border, 2nd intercostal space.\" What is wrong with this entry?",
            "a": "The left sternal border, 2nd ICS is the pulmonic area; the aortic area is the right sternal border, 2nd ICS.",
            "rationale": "Per the page's landmark table, the aortic site is the right sternal border at the 2nd ICS, where S2 is heard best at the base of the heart. The pulmonic site is directly across at the left sternal border, 2nd ICS, so the nurse listened at, or charted, the wrong side of the sternum."
          },
          {
            "q": "A symptomatic client with mitral stenosis is scheduled for a commissurotomy and says, \"So they are taking out my valve and putting in a new one?\" What is the nurse's most accurate response?",
            "a": "No, a commissurotomy opens up the client's own stenosed valve; it is a repair, not a replacement.",
            "rationale": "The page explains that \"-otomy\" means opening: the provider opens up a stenosed valve. When surgery is needed, repairing the client's own valve is preferred over replacing it, which is why a repair option such as a commissurotomy is tried for a valve that will not open all the way."
          }
        ],
        "400": [
          {
            "q": "A client has aortic regurgitation. The nurse knows the aortic valve sits after the left ventricle, before systemic circulation. Into which chamber does blood leak back, and where should the nurse expect the backup to show up first: the lungs or the periphery?",
            "a": "Back into the left ventricle, so the backup shows up in the lungs.",
            "rationale": "Regurgitation is an incompetent valve that lets blood back into the previous chamber when it shouldn't; for the aortic valve, the chamber before it is the left ventricle. That is left-sided backup, and the page says backup from the left side shows up in the lungs, while right-sided backup goes to the periphery."
          },
          {
            "q": "A client with mitral valve disease, managed conservatively, refuses a newly prescribed heart failure medication, saying, \"That's a mistake. I have a valve problem, not heart failure.\" How should the nurse correct this belief?",
            "a": "Valve disease backs blood up and causes heart failure, so the medication is treating the heart failure that resulted from the valve problem.",
            "rationale": "The page says that regardless of the cause, valve problems back blood up and the client starts to look like left and right heart failure, and that conservative management includes heart failure medications to treat and control the heart failure that has resulted from the valve problem. The valve and the heart failure are one process, not two separate diagnoses."
          }
        ],
        "500": [
          {
            "q": "Two roommates had valve replacements on the same day. Client A received a porcine valve and Client B a mechanical valve. Client A asks, \"We both have artificial valves, so why does only my roommate need a blood thinner for life?\" What underlying difference explains this?",
            "a": "The body sees the mechanical valve's pieces as foreign, so clots might form; the biologic tissue valve does not carry that risk, so it needs no anticoagulation.",
            "rationale": "The page says a mechanical valve needs lifetime anticoagulation because the body sees the mechanical pieces as foreign and clots might form, which is its disadvantage, while a biologic (usually porcine) valve needs no anticoagulation. The tradeoff is durability: the mechanical valve lasts longer, the biologic valve less than 8 to 10 years."
          },
          {
            "q": "Client A has mitral stenosis and Client B has mitral regurgitation. Both report exertional dyspnea and fatigue and both have a murmur. Client B says, \"My doctor will balloon my valve open wider so the leaking stops.\" What mechanical difference between the two conditions makes this belief wrong?",
            "a": "Stenosis is a valve that won't open all the way, which balloon or commissurotomy opening treats; regurgitation is a valve that won't close all the way, so opening it wider does not stop the leak.",
            "rationale": "Both clients look alike because, regardless of the cause, blood backs up and produces a heart failure picture. The page's door analogy separates them: stenosis is the door that won't open (a narrowing), and the opening procedures (commissurotomy, balloon valvuloplasty) aim to open a valve that isn't as open as it should be. Regurgitation is the door that won't close (an incompetent valve leaking back into the previous chamber), so the problem is not a lack of opening."
          }
        ]
      }
    },
    {
      "id": "ms1-w1-respiratory",
      "name": "Respiratory",
      "group": "ms1",
      "badge": "Med Surg I",
      "clues": {
        "100": [
          {
            "q": "A client resting comfortably with pink nail beds, no dyspnea, and clear lungs has a finger probe reading of 84%. The nurse notes the client is wearing dark nail polish. What should the nurse do before acting on this reading?",
            "a": "Recheck the saturation on a finger without nail polish.",
            "rationale": "The page says pulse oximetry reads best on a finger without nail polish (or fungus). A low reading that doesn't match a comfortable client with clear lungs points to a measurement problem, so the nurse rechecks properly before treating it as hypoxemia."
          },
          {
            "q": "An adult with a two-day sore throat has a negative rapid strep test and asks the nurse for an antibiotic \"just to be safe.\" What does the nurse anticipate for treatment?",
            "a": "Symptomatic care for viral pharyngitis, with no antibiotics.",
            "rationale": "Most sore throats (9 out of 10) are viral, and a rapid strep test is used because viral and strep look alike. Viral pharyngitis gets soothing treatments, analgesics and antipyretics, not antibiotics; not everyone with a sore throat gets antibiotics because of drug resistance."
          }
        ],
        "200": [
          {
            "q": "A client diagnosed with obstructive sleep apnea by polysomnography was prescribed CPAP six months ago. He still reports morning headaches and daytime sleepiness, and his wife says his loud snoring hasn't changed. What should the nurse ask about first?",
            "a": "Whether he is actually using his CPAP every night.",
            "rationale": "The page names adherence as the big problem with CPAP (an estimated 20 to 40% don't use it) and says that if a CPAP patient isn't rested, ask whether they are actually using it. Unchanged snoring, headaches and sleepiness are the classic OSA signs persisting."
          },
          {
            "q": "A client with a cuffed Shiley trach is now off the ventilator and wants to try a speaking valve. The nurse notes the pilot balloon is firmly inflated. What must happen before the speaking valve is placed?",
            "a": "The cuff must be deflated.",
            "rationale": "An inflated pilot balloon means an inflated cuff. The cuff is inflated for ventilation and typically deflated off the vent, and the page states a speaking valve requires a deflated cuff."
          }
        ],
        "300": [
          {
            "q": "An 84-year-old nursing home resident is brought in for new-onset confusion. He has crackles and a fever, and his CBC shows a high WBC with increased neutrophils, including immature forms. How should the nurse interpret the lab finding?",
            "a": "Leukocytosis with a shift to the left, pointing to an acute bacterial infection.",
            "rationale": "High WBCs are leukocytosis (not leukopenia, which is decreased WBCs). More neutrophils including immature ones released early is a shift to the left, seen in acute bacterial infection. In the elderly, new confusion can be one of the first signs of any infection, so it fits pneumonia rather than a separate neuro problem."
          },
          {
            "q": "A client in a COPD exacerbation is on oxygen with a saturation of 90%, but is tiring, and the ABG shows a rising CO2. Bronchodilator nebulizers are already scheduled. What intervention should the nurse anticipate next to try to avoid intubation?",
            "a": "Non-invasive positive pressure ventilation (BiPAP).",
            "rationale": "The page lists BiPAP for exacerbation when hypercapnic (rising CO2). BiPAP's higher inhalation and lower exhalation pressures make it easier to push air out, which suits COPD's problem of getting air out, and it is often a last step to prevent intubation. The saturation is already within the 88 to 92% goal, so more oxygen is not the answer."
          }
        ],
        "400": [
          {
            "q": "A healthcare worker with no symptoms has a positive QuantiFERON-TB Gold. The follow-up chest X-ray is clear with no Ghon nodule. She asks if she must be in airborne isolation and whether she can spread TB to her family. What should the nurse tell her?",
            "a": "This is latent TB, which is not contagious, so airborne isolation is not needed.",
            "rationale": "A positive IGRA is only a screen and can't tell latent from active TB, so a chest X-ray follows; a clear X-ray with no Ghon nodule means latent TB. Latent TB has no clinical signs and is not contagious, while active TB (sputum AFB positive, symptomatic) is contagious and needs airborne precautions in a negative pressure room."
          },
          {
            "q": "A 60-year-old long-term smoker whose 'smoker's cough' has become persistent and productive has a mass on chest X-ray. His sputum cytology comes back negative, and he says, \"Good, so it's not cancer.\" How should the nurse respond?",
            "a": "A negative cytology does not rule out lung cancer; a biopsy is needed for the definitive diagnosis.",
            "rationale": "Cytology looks for cancer cells, but only 20 to 30 of 100 patients with lung cancer test positive, so a negative result is weak reassurance. The definitive diagnosis is a biopsy (fine needle aspirate, bronchoscopy, or VATS). A persistent productive cough masked by a smoker's chronic cough is the most common lung cancer symptom."
          }
        ],
        "500": [
          {
            "q": "Two clients with COPD both have dyspnea, prolonged expiration, and trouble getting air out. Client A coughs up sputum every single day. Client B has a barrel chest but no daily sputum. What underlying process explains each client's presentation?",
            "a": "Client A has chronic bronchitis (bronchial inflammation with excess mucus); Client B has emphysema (destroyed, overinflated alveoli impairing gas exchange).",
            "rationale": "Both are obstructive (getting air out is the problem), but the page separates them by site: chronic bronchitis is inflammation with excessive mucus in the bronchi, hence sputum every day; emphysema is alveolar damage (overinflated, stretched, destroyed) impairing gas exchange at the parenchyma, with barrel chest and dyspnea but not bronchitis's daily sputum."
          },
          {
            "q": "On day 2 after a total laryngectomy, a client receiving tube feedings writes: \"Since my throat was removed I'll be on tube feeds forever, but at least if my stoma clogs I can still breathe through my nose.\" Which part of his belief is wrong?",
            "a": "Both: he can eventually eat by mouth, but he can no longer breathe through his nose or mouth, only the stoma.",
            "rationale": "After a laryngectomy the esophagus is intact, so the client can eventually eat and drink; the tube feeding covers only the first 10 days to 2 weeks while swelling settles. But air no longer enters through the nose or mouth, only the permanent stoma, so a blocked stoma is a true airway emergency (a mucus plug can cause a code), which is why airway is number one post-op."
          }
        ]
      }
    },
    {
      "id": "ms1-w2-hematology",
      "name": "Hematology",
      "group": "ms1",
      "badge": "Med Surg I",
      "clues": {
        "100": [
          {
            "q": "A client reports months of fatigue. Labs show low RBCs, low WBCs, and low platelets, the RBCs are normocytic and normochromic, and there is no known cause. What anemia does the nurse anticipate, and what test will confirm it?",
            "a": "Aplastic anemia, confirmed by bone marrow biopsy.",
            "rationale": "The page describes aplastic anemia as pancytopenia (low RBCs, WBCs, and platelets) with normocytic, normochromic cells, usually idiopathic, and says a bone marrow biopsy is the test for low counts of all three lines without a known cause."
          },
          {
            "q": "A client with a PICC in the left antecubital area is due for vital signs, and the assistive personnel wraps the BP cuff around the left arm because the right arm has a peripheral IV. What should the nurse do?",
            "a": "Stop the assistant: no blood pressures (or blood draws) in the PICC arm.",
            "rationale": "The page says that with a PICC there are no blood draws or BPs in that arm. The peripheral IV in the other arm does not change the rule for the PICC arm."
          }
        ],
        "200": [
          {
            "q": "A client newly diagnosed with pernicious anemia has marked numbness and tingling in the hands and feet and an ataxic gait. He asks for pills because he hates needles. Which route does the page say is preferred for him, and for how long will he need treatment?",
            "a": "IM vitamin B12, and treatment is lifelong.",
            "rationale": "The page states IM B12 is preferred when there are severe neurologic problems (PO megadoses work only when some intrinsic factor is present), and pernicious anemia is treated for life."
          },
          {
            "q": "Forty-five minutes into a unit of PRBCs, a client develops itching and hives. Temperature, blood pressure, and breathing are unchanged from baseline. After stopping the transfusion and notifying the provider, what plan does the nurse anticipate?",
            "a": "Diphenhydramine (or a steroid), then usually restart the transfusion slowly.",
            "rationale": "The page lists itching, flushing, and urticaria with stable vitals as a mild allergic reaction (the most common type): stop, notify, give diphenhydramine or a steroid, and usually restart slowly. No respiratory or BP compromise rules out anaphylaxis."
          }
        ],
        "300": [
          {
            "q": "Ninety minutes into a PRBC transfusion, a client's temperature slowly climbs from 37.0 to 38.2 C. BP is stable, there is no back pain, and the urine is clear yellow. He had a fever with a transfusion last year. Which reaction is this, and what should be done before his next transfusion to prevent it?",
            "a": "Febrile non-hemolytic reaction; use leukocyte-reduced blood and give acetaminophen beforehand.",
            "rationale": "The page describes febrile non-hemolytic reactions as a gradual temperature rise with no back pain, no hematuria, and no hemodynamic compromise, unlike the immediate acute hemolytic picture. Prevention is leukocyte-reduced products and acetaminophen beforehand if they have reacted before."
          },
          {
            "q": "A provider has just placed a non-tunneled subclavian central line at the bedside. Before any confirmation is done, the client becomes short of breath, and the nurse is about to hang a vesicant chemotherapy through the new line. What should the nurse do?",
            "a": "Hold the infusion; suspect a pneumothorax and get the chest X-ray (placement and pneumothorax) before using the line.",
            "rationale": "The page says a chest X-ray follows non-tunneled CVC placement to confirm placement and rule out pneumothorax, and that the subclavian site carries pneumothorax risk. New dyspnea before confirmation means the line is not ready for a vesicant."
          }
        ],
        "400": [
          {
            "q": "An 80-year-old with heart failure is one hour into a PRBC unit running fast. She develops crackles at the bases, dyspnea, a headache, and distended neck veins, and she is afebrile. A new nurse says that for every transfusion reaction you stop the blood and treat. Which reaction is this, and how does its management differ?",
            "a": "TACO; it is the only reaction where the infusion can be slowed or stopped, with the provider called for furosemide and oxygen.",
            "rationale": "The page describes TACO in older heart-failure patients given blood too fast, with crackles at the bases, dyspnea, headache, and distended neck veins. It is the only reaction where you stop or slow the infusion; the provider may order furosemide, oxygen, maybe morphine, and a chest X-ray."
          },
          {
            "q": "A client with liver disease is actively oozing blood and has a normal platelet count. A nursing student suggests transfusing platelets because they help with bleeding. Which product does the client need instead, and why are platelets the wrong choice?",
            "a": "Fresh frozen plasma, because the problem is missing clotting factors and platelets are not clotting factors.",
            "rationale": "The page says FFP is for bleeding risk from lack of clotting factors (liver disease, hemophilia, von Willebrand's) and is rich in clotting factors, while platelets are for thrombocytopenia and are specifically not clotting factors. The normal platelet count also rules platelets out."
          }
        ],
        "500": [
          {
            "q": "Two clients each have a hematocrit of 55%. Client A has had vomiting and diarrhea for three days and has dry mucous membranes. Client B is well hydrated and has lived her whole life at high altitude. How do the mechanisms behind their high hematocrits differ?",
            "a": "Client A has relative polycythemia (a false high from lost plasma); Client B has secondary polycythemia (a true RBC increase compensating for hypoxia).",
            "rationale": "The page says dehydration lowers plasma and raises the percentage, a false high hematocrit and not a true increase in RBCs (relative polycythemia). Secondary polycythemia is a real increase in RBCs to compensate for tissue hypoxia, such as a lifetime at high altitude."
          },
          {
            "q": "Two clients both have a hemoglobin of 10. Client A has had heavy menstrual periods for a year and is barely symptomatic. Client B has a ruptured spleen, a rising heart rate, and is becoming unstable. Why are their pictures so different with the same hemoglobin?",
            "a": "Client A's chronic blood loss was slow enough to compensate for; Client B's acute loss left no time to compensate.",
            "rationale": "The page contrasts chronic blood loss (heavy periods, GI bleeding), which is insidious and lets someone walk around with a hemoglobin of 10 barely symptomatic, with acute loss (ruptured spleen, aneurysm, surgery), which allows no time to compensate and causes quick cardiac instability with a rising heart rate."
          }
        ]
      }
    },
    {
      "id": "ms1-w3-periop-fluids-electrolytes",
      "name": "Periop, Fluids & Electrolytes",
      "group": "ms1",
      "badge": "Med Surg I",
      "clues": {
        "100": [
          {
            "q": "During a pre-op phone interview, a client scheduled for a knee replacement says, \"I don't have any drug allergies,\" but mentions that kiwis and bananas make the mouth itch and that blowing up balloons once caused hives. The client also has asthma. What should the nurse suspect and flag before surgery?",
            "a": "A latex allergy.",
            "rationale": "The page lists reactions to kiwis, bananas, and balloons plus a history of allergies and asthma as latex allergy clues, and warns latex allergy can be anaphylactic; denying drug allergies does not rule it out, since the history covers allergies and intolerances including latex."
          },
          {
            "q": "A client returned from an inguinal hernia repair 7 hours ago and has not voided. The nurse has helped the client into a normal voiding position and run water in the sink, and the bladder scanner shows a full bladder. What is the nurse's next action?",
            "a": "Get an order to catheterize (usually an in-and-out catheter).",
            "rationale": "The page says to assess the urge to void, palpate or scan the bladder, and use a normal position and running water; when there is no void within 6 to 8 hours after surgery, the nurse gets an order to catheterize, usually in-and-out."
          }
        ],
        "200": [
          {
            "q": "A client's pre-op blood pressure was 120/80. Two hours after a bowel resection, it is 110/80, the pulse is 96, and the client is resting quietly. A new graduate says the BP is fine because it is well above 90 systolic. What finding should the nurse point out, and what can it indicate?",
            "a": "The pulse pressure has narrowed from 40 to 30, which can indicate hemodynamic compromise.",
            "rationale": "The page uses this exact pair (120/80 = 40, now 110/80 = 30) as a narrowing pulse pressure that can indicate hemodynamic compromise; the BP-less-than-90 rule of thumb is not the only cue, and the nurse should trend readings and compare to baseline."
          },
          {
            "q": "A client being treated for lung cancer, with no history of parathyroid disease, is brought in by family because he has become confused, very drowsy, and weak over the past week. His muscle and nerve excitability are reduced on exam. Which electrolyte imbalance best explains this, and what is the cancer-related mechanism?",
            "a": "Hypercalcemia from paraneoplastic secretion by the lung cancer.",
            "rationale": "The page says excess calcium is like a sedative (reduced muscle and nerve excitability, confusion, coma); hyperparathyroidism is the number one cause, but cancers, including paraneoplastic secretion from lung cancer, are also listed causes."
          }
        ],
        "300": [
          {
            "q": "A client is 20 hours out from colon surgery. The abdomen is soft, non-distended, and non-tender, but no bowel sounds are heard, and the client has not passed gas. A float nurse wants to call for an NG tube to treat a paralytic ileus. How should the nurse interpret the absent bowel sounds?",
            "a": "Not necessarily an ileus yet; keep monitoring for bowel sounds and passing gas.",
            "rationale": "The page says no bowel sounds at 24 to 48 hours is not necessarily an ileus because peristalsis may not have kicked in, and large-intestine motility can take 2 to 7 days after colon surgery; ileus signs are a distended, tender belly with absent or high-pitched bowel sounds, which this client lacks."
          },
          {
            "q": "A client in DKA had a potassium of 4.8 on admission. After several hours on an insulin infusion, the potassium is 3.2 and the client reports muscle weakness and cramps, though no diuretic has been given and there has been no vomiting. What explains the drop in potassium?",
            "a": "The insulin therapy shifted potassium into the cells.",
            "rationale": "The page lists shift into the cell (insulin therapy, DKA treatment) as a cause of hypokalemia, separate from losses like loop diuretics or GI losses that this client did not have; muscle weakness and cramps are listed hypokalemia manifestations, along with dysrhythmias."
          }
        ],
        "400": [
          {
            "q": "On post-op day 1 after open abdominal surgery, a client breathes shallowly, has crackles at the bases, and refuses to cough, saying, \"I'll start coughing once the pain is gone. I'll call you for a pain pill when I really need one.\" Which two misconceptions should the nurse correct?",
            "a": "Coughing (with a pillow splint) is mandatory now, and pain medication should be given around the clock, not only when asked.",
            "rationale": "The page says coughing with splinting is mandatory after abdominal or thoracic incisions to prevent atelectasis and pneumonia, and that post-op pain is continuous and predictable, so it is dosed around the clock so the client can cough and move, rather than waiting for the client to ask."
          },
          {
            "q": "A client with heart failure has a sodium of 131, a hematocrit lower than last week's, a 2 kg weight gain, ankle edema, and crackles. The client is alert and oriented. A nursing student suggests giving normal saline to raise the sodium. What should the nurse expect instead, and why?",
            "a": "A fluid restriction, because the low sodium is dilutional from fluid volume excess.",
            "rationale": "The page lists heart failure as a cause of dilutional hyponatremia and says fluid volume excess hemodilutes labs (falsely low sodium and hematocrit); mild hyponatremia is treated with fluid restriction, which concentrates the serum, and heart failure and hyponatremia are both among the usual reasons for a fluid restriction."
          }
        ],
        "500": [
          {
            "q": "Two post-op clients both have a heart rate of 112. Client A is grimacing, rates pain 9 out of 10, and has a stable BP with warm, pink skin. Client B received morphine 20 minutes ago, rates pain 2 out of 10, and has a BP that has drifted down over three readings with urine output of 20 mL/hour. What is the most likely cause of each client's tachycardia?",
            "a": "Client A's is from pain; Client B's is from fluid volume deficit.",
            "rationale": "The page says a heart rate over 100 must be assessed for its cause (pain, anxiety, or fluid volume deficit). Client B's pain is controlled, while a gradual BP decline and urine output below 30 mL/hour (falling cardiac output lowers renal perfusion) point to a deficit, where tachycardia compensates for low stroke volume until BP eventually drops."
          },
          {
            "q": "Client A has kidney failure, a high phosphorus level, and carpopedal spasm with a positive Chvostek's sign. Client B is malnourished from chronic alcohol abuse, has a low phosphorus level, and has weak, shallow respirations. What produces each client's neuromuscular findings?",
            "a": "Client A's come from the accompanying low calcium; Client B's come from the low phosphorus itself.",
            "rationale": "The page says hyperphosphatemia is usually asymptomatic by itself, with spasms, tetany, Chvostek's, and Trousseau's coming from the hypocalcemia that accompanies it (calcium and phosphorus are inversely related, and kidney failure also lowers calcium). Hypophosphatemia itself causes CNS depression and muscle weakness, including life-threatening respiratory muscle weakness."
          }
        ]
      }
    },
    {
      "id": "ms1-w4-renal-urinary",
      "name": "Renal & Urinary",
      "group": "ms1",
      "badge": "Med Surg I",
      "clues": {
        "100": [
          {
            "q": "A staff nurse with her third episode of cystitis this year says she drinks cranberry juice every day, so it is fine that she usually holds her urine for most of a 12-hour shift. Which behavior should the teaching target first?",
            "a": "Habitually delaying urination; she needs to empty her bladder regularly and completely.",
            "rationale": "The page lists habitually delaying urination (\"nurse's bladder\") as a UTI risk factor and teaches emptying the bladder regularly and completely. Cranberry has no definitive evidence of improving outcomes, so it does not offset holding urine for hours."
          },
          {
            "q": "A client doing peritoneal dialysis at home calls to report abdominal pain and that the fluid draining out this morning looks cloudy instead of clear. Which complication should the nurse suspect?",
            "a": "Peritonitis.",
            "rationale": "The page names peritonitis as the number one complication of PD and identifies cloudy dialysate as its sign; abdominal pain is also listed among PD complications."
          }
        ],
        "200": [
          {
            "q": "A client with a ureteral stone is writhing in waxing-and-waning flank pain, has vomited three times without relief, and has a heart rate of 124. The nurse recalls that post-op pain is usually weighed against other priorities. What is the priority action here, and why?",
            "a": "Give the ordered opioid now, because uncontrolled renal colic can cause hemodynamic compromise.",
            "rationale": "The page says renal colic is one of the strongest pain sensations known, its nausea and vomiting don't improve after vomiting, and it can cause hemodynamic compromise, so treating the pain may be the priority (unlike typical post-op pain). Opioids are first-line."
          },
          {
            "q": "A 74-year-old man with a known enlarged prostate has a palpable, distended bladder, very little urine output, and a rising creatinine. His blood pressure has been stable all week and he has had no contrast or new medications. Which category of AKI best fits?",
            "a": "Postrenal AKI (obstruction after the kidneys).",
            "rationale": "The page defines postrenal AKI as obstruction after the kidneys, using a swollen prostate backing up urine as its example. No hypotension or hypovolemia argues against prerenal, and no nephrotoxic exposure argues against an intrarenal cause."
          }
        ],
        "300": [
          {
            "q": "A client with a nephrostomy tube placed for a totally obstructed ureter reports new flank pain, and the dressing is wet with urine leaking around the site. An irrigation order is on file, and a new nurse prepares 60 mL of saline as for a bladder irrigation. What should the nurse suspect, and how should the irrigation be changed?",
            "a": "Suspect a blocked tube; irrigate with only a tiny amount of sterile saline using strict aseptic technique.",
            "rationale": "The page says pain or drainage around a nephrostomy site suggests a blockage. Irrigation requires an order, meticulous aseptic technique (high infection risk), and only a tiny amount of sterile saline, because the tube sits in the renal pelvis, not the bladder."
          },
          {
            "q": "During his first hemodialysis session, a client with stage 5 CKD becomes disoriented and agitated and complains of headache and nausea. His pre-dialysis potassium was normal and he was alert on arrival. Which complication best explains this, and what causes it?",
            "a": "Dialysis disequilibrium syndrome, caused by rapid fluid shifts.",
            "rationale": "The page lists disequilibrium syndrome as hemodialysis's unique complication, often in the first few sessions: disorientation, headache, agitation, nausea, vomiting, even seizures, from rapid fluid shifts. A normal pre-dialysis potassium and alertness on arrival make new uremic or electrolyte confusion less likely."
          }
        ],
        "400": [
          {
            "q": "A client with AKI and a potassium of 6.9 received IV calcium gluconate, then IV insulin with dextrose. An hour later the potassium is 5.4, and a student says the hyperkalemia is now resolved. How should the nurse correct this?",
            "a": "Those treatments are temporary and did not remove potassium; it still must be removed by a GI binder or dialysis.",
            "rationale": "Per the page, calcium gluconate only raises the excitation threshold to protect against dysrhythmias and doesn't lower potassium, and insulin with dextrose temporarily moves potassium into the cells. Only the GI binders and dialysis actually remove potassium from the body."
          },
          {
            "q": "Two clients need imaging of the renal pelvis for a suspected mass. Client A has a creatinine of 0.9 and no allergies. Client B has a creatinine of 2.3 and a history of anaphylaxis to iodine contrast. Which pyelogram fits each client, and what post-test teaching applies to Client A?",
            "a": "Client A: IVP, then force fluids afterward; Client B: retrograde pyelogram.",
            "rationale": "The page says the IV dye in an IVP is nephrotoxic, so fluids are forced after, and an elevated creatinine or contrast allergy calls for another test. The retrograde pyelogram is used for contrast allergy or elevated creatinine because the dye goes up through a cystoscope and doesn't go systemic."
          }
        ],
        "500": [
          {
            "q": "Two clients both have fluid volume excess, hyperkalemia, and a rising BUN. Client A had a prolonged hypotensive episode during surgery yesterday. Client B has 20 years of diabetes and hypertension, a GFR of 12, severe anemia, low calcium, and intense itching. Which client's kidney problem is potentially reversible, and what explains Client B's anemia and low calcium?",
            "a": "Client A's AKI is potentially reversible; Client B has stage 5 CKD, where lost erythropoietin and vitamin D activation cause the anemia and hypocalcemia.",
            "rationale": "The page states AKI, often following prolonged hypotension with the oliguric phase starting about a day later, is potentially reversible, while CKD is not. Client B's GFR under 15 is stage 5, the two biggest causes are hypertension and diabetes, and end-stage CKD loses erythropoietin (severe anemia) and vitamin D activation (hypocalcemia), along with itching."
          },
          {
            "q": "The nephrologist orders a hemodialysis dialysate with less potassium than the client's blood. The same morning, a scheduled dialyzable antibiotic is due right before the session. Which transport process explains both why the potassium falls and why the antibiotic should be held until after dialysis?",
            "a": "Diffusion: particles move from higher to lower concentration across the membrane, pulling potassium and the dialyzable drug out of the blood.",
            "rationale": "The page defines diffusion as particles moving from higher to lower concentration (osmosis moves water, not particles), which is why the dialysate is set lower in potassium than the blood. Drugs that cross the membrane are dialyzed out and become subtherapeutic, so dialyzable drugs are given after dialysis."
          }
        ]
      }
    },
    {
      "id": "ms1-w5-hiv-skin-wounds-burns",
      "name": "HIV, Skin, Wounds & Burns",
      "group": "ms1",
      "badge": "Med Surg I",
      "clues": {
        "100": [
          {
            "q": "A client with HIV has a CD4 count of 180. The client has never had an opportunistic infection and says, \"I don't have AIDS because I've never gotten one of those infections.\" What should the nurse recognize about this client's status?",
            "a": "The client meets the definition of AIDS because the CD4 count is below 200.",
            "rationale": "AIDS is defined as either an opportunistic infection developing OR the CD4 dropping below 200. Either criterion alone is enough, so a CD4 of 180 meets it even without an infection."
          },
          {
            "q": "A client with diabetes has a hot, tender, red area on the lower leg with diffuse borders, plus chills, malaise and fever. The client plans to put ice on it and keep walking on it. Which condition does this suggest, and which local measures does the nurse teach instead?",
            "a": "Cellulitis; moist heat, immobilize and elevate the leg.",
            "rationale": "Hot, tender, red skin with diffuse borders and systemic signs is cellulitis, an inflammation of subcutaneous tissue (diabetes is a risk factor). The page lists moist heat, immobilizing and elevating, with IV antibiotics if admitted; untreated it can lead to gangrene."
          }
        ],
        "200": [
          {
            "q": "A client with AIDS and a CD4 of 150 shares the home plan: keep taking ART, keep the house clean, ask sick friends to wait to visit, and take over cleaning the cat's litter box so the partner gets a break. Which part of the plan does the nurse need to correct?",
            "a": "The client should not clean the cat's litter box.",
            "rationale": "The client is immunosuppressed, and teaching includes avoiding cleaning pet litter boxes. Continuing ART, keeping the home clean and avoiding sick visitors are all correct parts of the teaching."
          },
          {
            "q": "A 72-year-old client has burning pain and a band of vesicles along one side of the trunk. The client's grandchild, who has never had chickenpox, plans to stay with the client this week. What condition does this suggest, and what is the nurse's concern about the visit?",
            "a": "Shingles (herpes zoster); it is contagious to the grandchild, who has never had the virus.",
            "rationale": "Vesicles with burning pain along a dermatome in an older adult fits shingles, reactivated varicella zoster, which becomes more common with age. Shingles is contagious to people who haven't had the virus, so the grandchild who never had chickenpox is at risk."
          }
        ],
        "300": [
          {
            "q": "Three weeks after unprotected sex with a partner who has HIV, a client calls with \"the worst flu I've ever had.\" The client says, \"I'm way too sick to be spreading anything right now, so I'll get tested once I feel better.\" What should the nurse recognize, and what should the nurse advise?",
            "a": "This may be acute HIV seroconversion, a highly infectious stage; test now with the fourth-generation test.",
            "rationale": "Seroconversion in early/acute infection looks like \"the worst flu ever,\" the client is highly infectious, and most people don't think to get tested. The fourth-generation antibody AND antigen test can turn positive within 2 to 3 weeks because the antigen appears before antibodies."
          },
          {
            "q": "A client on day 9 after major burns is on IV opioids around the clock, receives enteral feedings, and has Silvadene on the burn wounds. Today the client has a new fever, and the burn wounds have purulent, foul-smelling drainage. Which complication is the nurse most concerned about, and why is it the priority?",
            "a": "Burn wound infection progressing to sepsis, the leading cause of death in burns.",
            "rationale": "Topical antimicrobials (Silvadene) and systemic antibiotics are part of burn therapy because sepsis is the leading cause of death in burns. The pain control and feedings are expected parts of care; the new fever and purulent drainage signal infection."
          }
        ],
        "400": [
          {
            "q": "A client with eczema and severe pruritus says, \"I take the hottest bath I can stand because it calms the itch, then I dry off completely before I put on my lotion.\" Which two parts of this routine should the nurse correct?",
            "a": "Use tepid baths instead of hot, and apply lotion while the skin is still damp.",
            "rationale": "The page says baths should be tepid because too hot a bath adds to itching, and lotion should be applied while skin is still damp to seal in moisture. Pruritus care also includes a cool environment, hydration, antipruritic creams, antihistamines and avoiding scratching."
          },
          {
            "q": "A client has a deep pressure wound that is soaking through dressings with heavy exudate. The order is for a hydrogel dressing, chosen because \"it keeps the bed moist and helps debride.\" Which dressing on the page better fits this wound, and why is hydrogel a poor match?",
            "a": "An alginate dressing, because it absorbs exudate; hydrogel is not for heavily draining wounds.",
            "rationale": "Hydrogel is mostly water and promotes autolytic debridement in deep or necrotic wounds, but the page says it is not for heavily draining wounds. Alginate is non-adherent, conforms to the wound shape and absorbs exudate, which fits a wound with heavy drainage."
          }
        ],
        "500": [
          {
            "q": "Two clients have been on ART for 6 months. Client A has a CD4 of 540 but a viral load that has risen at each of the last two checks. Client B has a CD4 of 230 and an undetectable viral load. Which client's labs show the regimen is not controlling the virus, and what is the reasoning?",
            "a": "Client A; viral load is the best indicator of virus activity and drug response, while CD4 reflects immune health.",
            "rationale": "The CD4 count shows how healthy the immune system is and the risk for opportunistic infections. Viral load (HIV RNA) is the best indicator of how active the virus is and of response to drugs, and suppression to undetectable is the goal of therapy. Client A's normal CD4 is a red herring: the rising viral load means ART is not suppressing the virus (adherence and resistance need checking). Client B is meeting the therapy goal."
          },
          {
            "q": "Client A is 20 hours past major burns, with massive edema and low urine output despite aggressive LR. Client B is 80 hours past similar burns, with edema going down and urine output now large. Client B's family fears the kidneys are failing. What underlying difference explains these two pictures, and what does the nurse keep monitoring in Client B?",
            "a": "Client A is still in the emergent phase (fluid leaking out through permeable capillaries); Client B is entering the acute phase as fluid mobilizes and diuresis begins. Keep monitoring fluid and electrolyte labs.",
            "rationale": "The emergent phase lasts up to 72 hours. A huge increase in capillary permeability shifts fluid out of the vessels, causing hypovolemia and massive edema. The phase ends, and the acute phase begins, when extracellular fluid mobilizes and diuresis starts, so Client B's large urine output is expected, not renal failure. Fluids and electrolytes are still in flux in the acute phase, so labs are still monitored."
          }
        ]
      }
    },
    {
      "id": "ms1-w6-gastrointestinal",
      "name": "Gastrointestinal",
      "group": "ms1",
      "badge": "Med Surg I",
      "clues": {
        "100": [
          {
            "q": "A client with long-standing diabetes reports nausea, early fullness, and poor appetite after meals. A gastric emptying study (cooked egg with a trace of radioactive material, scans at 0, 1, 2 and 4 hours) confirms delayed emptying. Which generic drug from the lecture should the nurse anticipate?",
            "a": "Metoclopramide, a prokinetic that enhances gastric emptying.",
            "rationale": "The gastric emptying study diagnoses gastroparesis (delayed emptying), and the page lists metoclopramide as the prokinetic that enhances gastric emptying for gastroparesis, reflux after meals, and poor appetite."
          },
          {
            "q": "A client admitted for a bleeding ulcer had bright red hematemesis yesterday. This morning the client vomits a small amount of dark, malodorous, coffee-ground material, and vital signs match baseline. What does the change in emesis appearance suggest about the bleeding?",
            "a": "The blood is partly digested, meaning older bleeding or bleeding that has stopped.",
            "rationale": "The page contrasts bright red (frank) hematemesis, which means a recent or ongoing bleed, with malodorous coffee-ground emesis, which is partly digested blood from older bleeding or bleeding that has stopped."
          }
        ],
        "200": [
          {
            "q": "A client newly diagnosed with peptic ulcer disease takes ibuprofen for arthritis and daily aspirin that the cardiologist says must continue. What medication plan should the nurse anticipate for these two drugs?",
            "a": "Stop the ibuprofen for 4 to 6 weeks and give the aspirin with a PPI.",
            "rationale": "The page says to stop aspirin and NSAIDs for 4 to 6 weeks in PUD, and if aspirin must continue, to give it with a PPI; NSAIDs are the number one drug cause of ulcers."
          },
          {
            "q": "Two clients ask about bariatric surgery. Client A has a BMI of 37 with no obesity-related complications. Client B has a BMI of 36 and obstructive sleep apnea. Which client meets the criteria the lecture gives?",
            "a": "Client B.",
            "rationale": "The page's criteria are a BMI of 40 or higher, or 35 or higher with one or more severe obesity-related complications such as sleep apnea; Client A's higher BMI alone does not reach 40."
          }
        ],
        "300": [
          {
            "q": "A client admitted with melena keeps asking for water, is restless, and has cool, clammy skin. The sitting blood pressure of 118/76 is unchanged from baseline. How should the nurse interpret these findings, and what assessment should come next?",
            "a": "Signs of hypovolemia from ongoing bleeding; check orthostatic vital signs and report.",
            "rationale": "The page lists insatiable thirst, restlessness, cool clammy skin and a rising heart rate as hypovolemia signs to always investigate in an upper GI bleed, and tells the nurse to compare vital signs with baseline and check for orthostatic hypotension; a normal sitting BP does not rule out blood loss."
          },
          {
            "q": "A client with ulcerative colitis in a severe flare has inflammation that has spread into the deeper layers. The abdomen is becoming markedly distended, and imaging shows an enlarged colon that has stopped working. Which complication is developing, and what is the danger?",
            "a": "Toxic megacolon, which can rupture and perforate.",
            "rationale": "The page names toxic megacolon as UC's perforation complication: inflammation reaches the deep layers, the colon stops working, enlarges, and can rupture. UC is otherwise mucosal, so perforation from transmural disease is the Crohn's pattern."
          }
        ],
        "400": [
          {
            "q": "Two clients are having rectal cancer surgery. Client A is scheduled for a low anterior resection (LAR); Client B for an abdominoperineal resection (APR). Client A says, \"I'll have a colostomy bag for the rest of my life, just like the other patient.\" How should the nurse correct this?",
            "a": "Only the APR gives a permanent colostomy; the LAR uses a temporary ostomy and is later reconnected, preserving the sphincter.",
            "rationale": "The page says APR removes the tumor and part of the peritoneum and leaves a permanent descending colostomy, while LAR is done in two steps with a temporary ostomy and Hartmann's pouch, then reconnected, so the sphincter is preserved and defecation control is normal."
          },
          {
            "q": "A client with years of poorly controlled GERD has an EGD. Biopsy confirms that the esophageal cells have changed type. The client says, \"So it's just worse heartburn, and my PPI will take care of it.\" What condition does this represent, and what is the key risk the client is missing?",
            "a": "Barrett's esophagus, which carries a 30 to 40 fold increased risk of esophageal cancer.",
            "rationale": "The page describes Barrett's esophagus as long-term esophagitis that changes cells (metaplasia), following GERD or hiatal hernia, confirmed by biopsy, with a 30 to 40 fold increased risk of esophageal cancer. It is a cell change, not just more severe reflux symptoms."
          }
        ],
        "500": [
          {
            "q": "Client A has an end colostomy with the distal bowel sewn closed and left in place as a Hartmann's pouch, and reports mucus passing from the anus. Client B has a double-barrel stoma and reports mucus, not stool, from one of the two stomas. Are these findings expected, and what explains where the mucus comes out in each?",
            "a": "Both are expected: the distal bowel still makes mucus, which exits the anus in A and the distal mucous fistula in B.",
            "rationale": "The page says a Hartmann's pouch is the distal bowel sewn closed and left in, and that old stool and mucus may still pass from the anus. In a double-barrel stoma both ends come out separately: the proximal stoma passes stool and the distal one is a mucous fistula. In both clients the remaining distal bowel still makes mucus; only its exit route differs."
          },
          {
            "q": "Two clients with inflammatory bowel disease are both losing weight and are malnourished. Client A has Crohn's disease of the terminal ileum. Client B has ulcerative colitis. Why is malabsorption a cause for Client A but not usually for Client B, and what drives Client B's malnutrition instead?",
            "a": "Crohn's involves the small intestine where nutrients are absorbed, but UC is limited to the colon, which absorbs water; B's malnutrition comes from poor intake, high metabolic rate, steroids, or protein loss.",
            "rationale": "The comparison table on the page says Crohn's causes malabsorption because it involves the small intestine, while UC usually does not because it is colon-only and the colon absorbs water. The page lists the other causes of IBD malnutrition as poor intake, a high metabolic rate, steroids, and protein-losing enteropathy."
          }
        ]
      }
    },
    {
      "id": "ms1-w7-cancer-hepatobiliary",
      "name": "Cancer & Hepatobiliary",
      "group": "ms1",
      "badge": "Med Surg I",
      "clues": {
        "100": [
          {
            "q": "A client receiving external radiation to the chest says she plans to scrub the purple ink lines off with a washcloth tonight and then put on her usual body lotion because the skin feels dry. What should the nurse teach?",
            "a": "Wash gently by hand with mild soap and water, leave the skin markings on, and use no lotion unless the radiologist prescribes it.",
            "rationale": "The page's skin teaching for a radiated area: wash daily with mild soap and water using the hand, not a washcloth; don't wash off skin markings; pat dry; no powders, lotions or creams unless the radiologist prescribes them."
          },
          {
            "q": "An overweight, fair-skinned, middle-aged woman who takes oral contraceptives reports episodes of vague upper abdominal pain that radiates to her right shoulder, with belching and nausea, each time after a large fried-food dinner. What condition does this suggest, and what is its most common treatment?",
            "a": "Gallbladder disease (gallstones/cholecystitis), most commonly treated with laparoscopic cholecystectomy.",
            "rationale": "The page lists middle-aged female, fair skin, overweight, high-fat diet and oral contraceptives as risks, describes episodic upper abdominal pain radiating to the right shoulder triggered by high-fat or large meals, and names laparoscopic cholecystectomy as the most common treatment."
          }
        ],
        "200": [
          {
            "q": "A client receiving chemotherapy has a platelet count of 35,000. There is no bruising, petechiae or gum bleeding, and the client says, \"I'm not bleeding at all, so I don't need a transfusion or any of those precautions.\" Which part of the client's statement is accurate, and which is not?",
            "a": "A transfusion usually isn't needed until platelets fall below 20,000, but bleeding precautions are needed because serious bleeding may not show until below 50,000.",
            "rationale": "The page states normal platelets are 150,000 to 400,000, serious bleeding may not show until below 50,000, and transfusion is usually given below 20,000, so the absence of visible bleeding does not mean the client is safe from it."
          },
          {
            "q": "Two jaundiced clients with dark urine are admitted the same day: one got hepatitis A from contaminated water while traveling, and one has hepatitis C from shared needles. Which client is more likely to need long-term follow-up and drug therapy, and why?",
            "a": "The hepatitis C client, because hepatitis C tends to become chronic and is treated with drugs, while hepatitis A is never chronic and typically needs no drug therapy.",
            "rationale": "The page's hepatitis table says hepatitis A is mild, self-limiting, never chronic and typically has no drug therapy, while hepatitis C tends to linger, most cases become chronic, and drugs are given if chronic (after genotyping)."
          }
        ],
        "300": [
          {
            "q": "A client receiving chemotherapy has a hemoglobin of 10.4 and severe fatigue. The client asks for a blood transfusion and says the plan is to stay in bed all day until the energy comes back. Which treatment does this hemoglobin fit, and how should the nurse correct the activity plan?",
            "a": "Epoetin (hemoglobin under 11), not PRBCs, with energy conservation while staying active rather than bed rest.",
            "rationale": "The page says epoetin is given if hemoglobin is less than 11 and PRBCs are reserved for severe anemia; anemia care is to monitor H&H, use energy conservation but stay active, and eat an iron-rich diet."
          },
          {
            "q": "On day 2 of acute pancreatitis, a client whose pain is now controlled develops a new bluish discoloration around the umbilicus. The family assumes it is bruising from the client's abdominal injections. What does this finding most likely indicate?",
            "a": "Cullen's sign: pancreatic enzymes leaking into subcutaneous tissue, a sign of severe disease with a poor prognosis.",
            "rationale": "The page explains that Cullen's (around the umbilicus) and Turner's signs are bluish discoloration from enzyme leak into subcutaneous tissue and signal severe disease with a poor prognosis, so improved pain does not mean the client is improving."
          }
        ],
        "400": [
          {
            "q": "A client had surgery that removed part of a large abdominal tumor that could not be fully taken out, and chemotherapy and radiation are scheduled next. The client tells family, \"The surgery cured me; the chemo is just in case.\" What type of surgery was this, and how should the nurse correct the client's understanding?",
            "a": "Debulking surgery, which removes part of a tumor for comfort or to help chemo and radiation work; it is not curative.",
            "rationale": "The page defines debulking as removing part of a tumor for comfort or to help chemo and radiation, explicitly not curative, which is why chemo and radiation follow; the treatment goal steps down from cure to control to palliation."
          },
          {
            "q": "A client with chronic pancreatitis and greasy, foul, floating stools says he takes his pancrelipase about an hour after dinner, crushes the enteric-coated capsules, and stirs the powder into a protein shake. Which corrections should the nurse make?",
            "a": "Take it with the first bite of every meal or snack, do not crush enteric-coated forms, and do not mix it with protein foods.",
            "rationale": "The page's PERT teaching: take with the first bite of every meal or snack, swallow without chewing, don't crush enteric-coated forms, and powder goes in applesauce or juice, not protein foods; success is fewer, less fatty stools."
          }
        ],
        "500": [
          {
            "q": "Two clients with the same cancer are on the unit. Client A receives systemic chemotherapy and has scalp hair loss, mouth sores and low blood counts. Client B receives external radiation to the neck and has trouble swallowing and taste changes, but a full head of hair and normal counts. What underlying difference explains why their side effects differ?",
            "a": "Chemo is systemic and kills rapidly dividing cells everywhere (marrow, GI tract, hair), while radiation is local and only affects the area it targets.",
            "rationale": "The page states chemo is systemic and kills rapidly dividing cells (bone marrow, GI tract, hair), while radiation is local and precisely targeted, so its effects depend on where it is aimed (neck: swallowing and taste; bowel: diarrhea)."
          },
          {
            "q": "Two clients are jaundiced. Client A turned yellow after receiving the wrong blood type; Client B has a gallstone lodged in the common bile duct. Both have yellow sclera, but only one has dark, bilirubin-stained urine with clay-colored stools. Which client is it, and what explains the difference?",
            "a": "Client B: the obstruction backs up conjugated (direct) bilirubin, which is water soluble and spills into the urine, while hemolysis raises unconjugated bilirubin, which is not water soluble and does not appear in urine.",
            "rationale": "The page says conjugated bilirubin is water soluble, found in urine and elevated in obstructive jaundice (dark urine; bilirubin can't reach the gut, so stools are clay-colored), whereas unconjugated bilirubin is not water soluble, is not in urine, and rises with problems in or before the liver such as hemolysis (for which urine is checked for hematuria instead)."
          }
        ]
      }
    }
  ]
};
