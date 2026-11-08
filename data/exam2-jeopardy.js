/* ============================================================
   exam2-jeopardy.js -- the question bank for the Exam 2 Jeopardy game
   (3 players). Read by assets/jeopardy-exam2.js; the engine has no
   content of its own, so this file can be edited or expanded later
   (for example with a new category) without touching any game code.

   Covers Week 2 (4 categories, group "week2") and Week 3
   (6 categories, group "week3"), built only from this site's Week 2
   and Week 3 pages. Each game draws 3 Week 2 + 3 Week 3 categories
   at random.

   Shape: 10 clues per category = 2 per value (100/200/300/400/500),
   difficulty rising with value; declared in "shape" for verify.js.
   Each clue: { q, a, rationale }. Category names use a literal "&"
   (the engine escapes at render time). To add a category, copy one
   block, give it a new id, a group ("week2" or "week3") and a badge.
   ============================================================ */
window.JEOPARDY_EXAM2 = {
  "shape": [
    2,
    2,
    2,
    2,
    2
  ],
  "categories": [
    {
      "id": "w2-eye-dx-cataracts",
      "name": "Eye Dx & Cataracts",
      "group": "week2",
      "badge": "Week 2",
      "clues": {
        "100": [
          {
            "q": "A client reads the Snellen chart from 20 feet and is told her vision in one eye is 20/50. She says, \"50 is bigger than 20, so that must be better than normal.\" How should the nurse explain the result?",
            "a": "It means she sees at 20 feet what a healthy eye sees at 50 feet, so it is worse than the 20/20 goal.",
            "rationale": "On the Snellen chart the patient stands 20 feet away; 20/50 means the patient sees at 20 feet what a healthy eye can see at 50 feet. 20/20 is the goal."
          },
          {
            "q": "A 74-year-old with cataracts says the headlights of oncoming cars \"blind\" him at night, but he wants to keep driving. Which test would best show how much his vision is affected by this problem?",
            "a": "A glare test.",
            "rationale": "The glare test quantifies vision loss from light scatter and is used for patients with cataracts to answer the question: can they drive at night? Cataract opacities scatter light, causing glare."
          }
        ],
        "200": [
          {
            "q": "Before cataract surgery, a client who just received mydriatic drops squints and says the room lights hurt her eyes. What is happening, and what should the nurse do?",
            "a": "Expected photophobia from the dilating drop; dim the room lights.",
            "rationale": "Mydriatic drops dilate the pupil so the provider can get into the eye, and photophobia is common afterward, so the nurse dims the lights. (The \"D\" trick: myDriatic drops Dilate.)"
          },
          {
            "q": "A 47-year-old whose mother has glaucoma has an intraocular pressure of 25 mmHg on tonometry. Which test is the next logical step, and what will it answer?",
            "a": "Gonioscopy, to tell whether the glaucoma is open-angle or closed-angle.",
            "rationale": "Normal IOP is 10 to 21 mmHg, so 25 is high. Gonioscopy, a scope with prisms that looks at the anterior eye, is done when high IOP is found to tell open-angle from closed-angle glaucoma; it is the gold standard for diagnosing angle closure."
          }
        ],
        "300": [
          {
            "q": "The day after cataract surgery, the nurse sees a client bend at the waist to lift a full laundry basket. What is the priority teaching, and why?",
            "a": "Stop bending at the waist and lifting, because both raise intraocular pressure after eye surgery.",
            "rationale": "After cataract surgery the patient avoids anything that raises IOP: bending at the waist, stooping, bearing down, lifting and coughing."
          },
          {
            "q": "A client is scheduled for cataract surgery at 11:00. During the pre-op check at 09:00 she says she had toast and coffee at 06:30. What should the nurse do?",
            "a": "Report it to the surgical team, since she has not been NPO for the required 6 to 8 hours.",
            "rationale": "Cataract surgery is outpatient without general anesthesia, but the client is still NPO for 6 to 8 hours beforehand. Eating at 06:30 for an 11:00 case is only about 4.5 hours, so the team must know before proceeding."
          }
        ],
        "400": [
          {
            "q": "A client has two eye drops: a prescribed drop with possible systemic effects and an over-the-counter drop like Visine. The client asks whether he must press on the inner corner of the eye for both. What should the nurse teach?",
            "a": "Punctal occlusion is needed for the drop with possible systemic effects, not for every drop like Visine.",
            "rationale": "Punctal occlusion is used when an eye drop has possible systemic effects; it isn't needed for every drop, such as an over-the-counter drop like Visine."
          },
          {
            "q": "A client with diabetes has a cataract and says, \"My vision is fine with brighter lights, so I'll put off surgery.\" Her ophthalmologist says he can no longer see her retina. Why might surgery still be recommended now?",
            "a": "The cataract is blocking the view of the retina she needs examined for diabetic retinopathy.",
            "rationale": "Before surgery, clients watch and adapt (new glasses, extra light, daytime driving). Surgery is chosen when those stop working, when the lens raises the IOP, or when the cataract blocks the view of the retina in someone who needs regular diabetic retinopathy exams."
          }
        ],
        "500": [
          {
            "q": "Pre-op orders for a cataract client include mydriatic, cycloplegic, anti-inflammatory and topical antibiotic drops. The history shows closed-angle glaucoma. Which drop must the nurse question, and why do the others still make sense?",
            "a": "Question the mydriatic (dilating it raises IOP in closed-angle glaucoma); the cycloplegic keeps accommodation from happening during the procedure, and the anti-inflammatory and antibiotic drops are routine.",
            "rationale": "A history of closed-angle glaucoma means no dilating drops: mydriatics are never given in closed-angle glaucoma because they raise IOP further. Cycloplegics paralyze the eye so accommodation doesn't happen during surgery; anti-inflammatory and prophylactic antibiotic drops may be ordered before and after."
          },
          {
            "q": "At her 1-week check after cataract surgery, a client's intraocular pressure is 28 mmHg. She mentions a bad cough from a cold and that she has been bending over to weed her garden. How should the nurse interpret this?",
            "a": "The IOP is above normal, and coughing and bending both raise IOP, which she was taught to avoid; report it and reinforce the restrictions.",
            "rationale": "Normal IOP is 10 to 21 mmHg. Follow-ups after cataract surgery check IOP, acuity and corneal clarity. After surgery the patient avoids anything that raises IOP: bending at the waist, stooping, bearing down, lifting and coughing."
          }
        ]
      }
    },
    {
      "id": "w2-retina-amd-glaucoma",
      "name": "Retina, AMD & Glaucoma",
      "group": "week2",
      "badge": "Week 2",
      "clues": {
        "100": [
          {
            "q": "A client calls the clinic: \"All of a sudden I see floaters and flashing lights, and now it's like a curtain is coming down over part of my vision. It doesn't hurt.\" How should the nurse respond?",
            "a": "Treat it as urgent: these are cues of retinal detachment, and time is of the essence.",
            "rationale": "Retinal detachment cues are sudden floaters or flashing lights, then a curtain over the field of vision. It is painless, and it is urgent."
          },
          {
            "q": "A client with type 2 diabetes and hypertension asks what she can do to protect her eyes from retinopathy. What should the nurse teach?",
            "a": "Control both the blood sugar and the blood pressure.",
            "rationale": "Diabetes and hypertension are the two most common causes of retinopathy, and it is prevented by controlling blood sugar and blood pressure."
          }
        ],
        "200": [
          {
            "q": "Two clients describe their vision. Client A: \"Everything is constantly fuzzy, like Vaseline on my eye.\" Client B: \"I have splotchy, hazy patches.\" Which description fits retinopathy, and which fits cataracts?",
            "a": "Client B fits retinopathy (splotchy haziness); client A fits cataracts (constant fuzziness).",
            "rationale": "Retinopathy causes splotchy haziness, while cataracts cause consistently fuzzy vision (\"like there's Vaseline on my eyeball\")."
          },
          {
            "q": "After a scleral buckle, a client asks to lower the head of the bed flat so he can sleep better. How should the nurse respond?",
            "a": "Keep the head of the bed elevated at all times, because it keeps IOP down after the repair.",
            "rationale": "After a scleral buckle the head of the bed is elevated at all times (keeps IOP down), with no bending at the waist, no straining, and no vigorous exercise for 3 to 4 weeks."
          }
        ],
        "300": [
          {
            "q": "After a pneumatic retinopexy, the nurse helps a client into a head-down position, turned to one side. The client asks what the position does. What is the explanation?",
            "a": "Gravity presses the injected gas bubble against the detached part of the retina.",
            "rationale": "In pneumatic retinopexy a gas bubble is injected into the vitreous and the patient is positioned (often head down and to one side) so gravity presses the bubble on the detached area."
          },
          {
            "q": "A client with dry age-related macular degeneration says, \"My sister has glaucoma, so I must be losing my vision the same way.\" How should the nurse explain the difference?",
            "a": "AMD takes the central vision while the periphery stays intact; glaucoma takes the peripheral vision, often unnoticed.",
            "rationale": "AMD causes loss of central vision with the periphery intact, which patients notice. Glaucoma takes the peripheral vision and is often unnoticed, insidious and painless."
          }
        ],
        "400": [
          {
            "q": "A client's open-angle glaucoma is no longer controlled with eye drops. He asks whether he'll need \"holes in my iris\" like his neighbor had. What is the likely next step, and why is the neighbor's procedure different?",
            "a": "Argon laser trabeculoplasty to open the drainage; holes in the iris (iridotomy) are for closed-angle glaucoma.",
            "rationale": "Open-angle glaucoma is a clogged kitchen sink (aqueous can't drain through the trabecular meshwork); first-line is drops, then argon laser trabeculoplasty (the plumber). Closed-angle glaucoma is structural: once IOP is stable, a laser peripheral iridotomy (holes in the iris) or iridectomy lets aqueous drain."
          },
          {
            "q": "Three clients ask how often they need a comprehensive eye exam: a 32-year-old African American, a 52-year-old, and a 67-year-old. What does the nurse tell each one?",
            "a": "The 32-year-old: periodic exams from 20 to 39; the 52-year-old: every 3 to 5 years; the 67-year-old: every 1 to 2 years.",
            "rationale": "American Academy of Ophthalmology: age 40 to 60 every 3 to 5 years; older than 60 every 1 to 2 years; African Americans have periodic exams from 20 to 39 because of higher incidence and more aggressive forms."
          }
        ],
        "500": [
          {
            "q": "In the ED, a client with acute angle-closure glaucoma is vomiting. A new nurse turns off the room lights first and plans to hold the antiemetic \"until the drops work.\" What two corrections are needed?",
            "a": "Give the miotic drops before darkening the room, and treat the nausea and vomiting now, since they raise IOP.",
            "rationale": "Acute angle closure is an ocular emergency. Miotics are given before darkening the room because darkness dilates the pupil, the opposite of what you want. Pain, nausea and vomiting raise IOP, so they are treated aggressively, along with a calm, quiet, private room and a patched affected eye."
          },
          {
            "q": "A client has had dry AMD for 8 years. This month her central vision suddenly worsened much faster than before. How should the nurse interpret the change, and why does it matter?",
            "a": "It suggests conversion to wet AMD (abnormal blood vessels growing near the macula), the more severe, rapid form that causes most AMD blindness.",
            "rationale": "Dry AMD is painless and insidious over many years, with macular cells atrophying, and it may become wet. Wet AMD involves abnormal blood vessels in or around the macula, has a more rapid onset, is more severe, and accounts for 90% of AMD blindness; most people with wet AMD had dry first."
          }
        ]
      }
    },
    {
      "id": "w2-prostate",
      "name": "Prostate, BPH & Cancer",
      "group": "week2",
      "badge": "Week 2",
      "clues": {
        "100": [
          {
            "q": "A client with BPH has a cold and plans to buy an over-the-counter decongestant and antihistamine. What should the nurse teach?",
            "a": "Avoid both, because they tighten the prostate muscles so urine can't easily leave the bladder.",
            "rationale": "Patients with BPH avoid decongestants and antihistamines because they tighten the prostate muscles, making it harder for urine to leave the bladder."
          },
          {
            "q": "A 71-year-old reports getting up 5 times a night to urinate, a weak stream, and dribbling at the end. Which of these are obstructive symptoms of BPH, and which is irritative?",
            "a": "The weak stream and dribbling are obstructive; the nocturia is irritative.",
            "rationale": "Irritative symptoms include nocturia (often the first symptom), frequency, urgency and dysuria. Obstructive symptoms come from the bladder straining against a narrow urethra: decreased stream caliber and force, difficulty starting, intermittency and dribbling. Together they are LUTS."
          }
        ],
        "200": [
          {
            "q": "A client on continuous bladder irrigation after a TURP walked in the hall earlier, and the nurse raised the rate. Now he is back in bed, and the urine is light pink with only a few small clots. What should the nurse do with the rate?",
            "a": "Slow the irrigation rate down.",
            "rationale": "The nurse regulates CBI by urine color: the goal is continuous flow, light pink, few clots. More clots or darker urine (for example after the first walk) means increase the rate; once it is light pink back in bed, slow it down."
          },
          {
            "q": "A 64-year-old with known BPH has a mildly elevated PSA and says, \"So now I have cancer too.\" How should the nurse respond?",
            "a": "PSA is specific to the prostate, not to cancer; BPH can raise it, and a TRUS helps tell the two apart.",
            "rationale": "PSA is made solely by prostate cells, so it is highly specific to the prostate but not to prostate cancer: BPH or an inflamed prostate also change it. A TRUS helps tell BPH from cancer when both the DRE and PSA are abnormal; TRUS with biopsy is the only definitive diagnosis."
          }
        ],
        "300": [
          {
            "q": "Over a shift, a post-TURP client's drainage bag holds 1,800 mL, and 1,200 mL of irrigation was infused. What is his true urine output?",
            "a": "600 mL.",
            "rationale": "True urine output = total drained minus irrigation infused: 1,800 minus 1,200 is 600 mL (the lecture's example: 400 mL in the bag with 200 mL of irrigation = 200 mL of urine)."
          },
          {
            "q": "An 80-year-old with BPH has not urinated for 10 hours, has lower abdominal fullness and is very uncomfortable. How should the nurse prioritize this?",
            "a": "As an emergency: the prostate may be large enough that he cannot urinate.",
            "rationale": "The prostate encircles the urethra; as it enlarges inward it narrows the urethra and can cause urinary retention. If it gets large enough that the patient cannot urinate, it is an emergency."
          }
        ],
        "400": [
          {
            "q": "Three men ask about PSA screening: a 78-year-old at average risk, a 46-year-old whose father had prostate cancer at 60, and a 51-year-old at average risk. Who should have a screening discussion now?",
            "a": "The 46-year-old (higher risk, starts at 45) and the 51-year-old (average risk, starts at 50); screening isn't recommended for the 78-year-old.",
            "rationale": "American Cancer Society: average-risk men begin at 50; higher-risk men (a first-degree relative with prostate cancer before 65, and African Americans) discuss at 45; screening isn't recommended over 75 because the harms outweigh the benefits."
          },
          {
            "q": "A post-TURP client also has heart failure. A student wants to slow his CBI \"so we don't overload him with fluid.\" How should the nurse respond?",
            "a": "CBI only irrigates the bladder and never enters the intravascular space, so the rate is set by urine color, not fluid status.",
            "rationale": "CBI irrigates the bladder to keep the urethra patent; it never enters the intravascular space, so there is no risk of fluid volume excess from changing the rate. The nurse regulates it by urine color (goal light pink, few clots)."
          }
        ],
        "500": [
          {
            "q": "A 50-year-old at average risk says, \"I'll just get the PSA. It's a simple blood test that finds cancer.\" What must the nurse make sure happens first, and which facts support a careful decision?",
            "a": "An informed decision about the risks and benefits: only about 1 in 3 men with a positive PSA has cancer, overdiagnosis is common, and biopsy and treatment carry risks, though early detection of aggressive cancer saves lives.",
            "rationale": "The nursing implication of the PSA controversy is to make sure the patient is informed of the risks and benefits. Harms: only 1 in 3 men with a positive PSA has prostate cancer, overdiagnosis of cancer that never becomes clinically relevant, and the risks of biopsy, surgery and radiation. Benefits: a small survival benefit and early detection of aggressive cancer."
          },
          {
            "q": "Six weeks after a radical prostatectomy, a client is still dribbling urine and has no erections. He wonders whether to try radiation instead because \"surgery failed.\" What teaching addresses his concern?",
            "a": "These are expected adverse outcomes: continence usually returns gradually over a couple of months (not always) and erections over a couple of years.",
            "rationale": "Adverse outcomes of radical prostatectomy are erectile dysfunction (gradually returns over a couple of years) and urinary incontinence (gradually returns over a couple of months, but not always). The nurse teaches that dribbling can happen. Radiation is used alone or with surgery, not as a fix for these effects."
          }
        ]
      }
    },
    {
      "id": "w2-stds",
      "name": "STDs",
      "group": "week2",
      "badge": "Week 2",
      "clues": {
        "100": [
          {
            "q": "A client with an IUD says she doesn't need condoms with a new partner because she \"can't get pregnant anyway.\" What should the nurse teach?",
            "a": "IUDs and hormonal birth control don't prevent STIs; the male condom is the best protection besides abstinence.",
            "rationale": "Hormonal birth control and IUDs do not prevent STIs. The male condom is the best protection besides abstinence."
          },
          {
            "q": "A client treated for chlamydia today asks when he can have sex again. What should the nurse tell him?",
            "a": "Abstain for 7 days after treatment and until his partners have been treated.",
            "rationale": "After treatment the patient abstains for 7 days and until all partners have been tested and treated (expedited partner therapy). Contacts from the prior 60 days are notified, and he is rescreened at 3 months."
          }
        ],
        "200": [
          {
            "q": "A 24-year-old man has painful urination and a purulent urethral discharge that started a few days after unprotected sex. Which STI do these cues suggest, and what treatment does the nurse anticipate?",
            "a": "Gonorrhea, treated with a one-time high-dose IM ceftriaxone injection.",
            "rationale": "Men with gonorrhea are usually symptomatic within a few days, with dysuria and purulent urethral discharge. Treatment is one-time high-dose IM ceftriaxone, often started before results."
          },
          {
            "q": "A woman has a yellow-green, foul-smelling vaginal discharge, pain with intercourse, and a red, inflamed cervix on exam. Which STI fits, and which drugs treat it?",
            "a": "Trichomoniasis, treated with metronidazole (7 days) or tinidazole (single dose).",
            "rationale": "Trichomoniasis in women causes a yellow-green, foul-smelling discharge, pain with intercourse and a strawberry cervix (red, inflamed). It is a protozoan parasite treated with metronidazole twice a day for 7 days or a single oral dose of tinidazole."
          }
        ],
        "300": [
          {
            "q": "A client with genital herpes has no sores right now and asks, \"So I can't pass it to my partner today, right?\" How should the nurse respond?",
            "a": "She can, because asymptomatic viral shedding also spreads herpes.",
            "rationale": "Herpes is most contagious with symptoms and active lesions, but asymptomatic viral shedding also transmits it, and most infections are spread by someone unaware they're infected."
          },
          {
            "q": "A client had her genital warts removed and asks if she still needs the HPV vaccine. What should the nurse teach?",
            "a": "Yes: removing warts doesn't clear the virus or stop its spread, and the vaccine is now recommended for everyone.",
            "rationale": "Removing warts is not thought to decrease the spread of HPV, and the virus can persist without warts. The HPV vaccine covers 90% of genital warts and 70 to 90% of cervical cancer strains and is now recommended for everyone."
          }
        ],
        "400": [
          {
            "q": "A client has a chancre and is diagnosed with primary syphilis. Which diagnostic follow-up, treatment and partner notification does the nurse expect?",
            "a": "A VDRL followed by a confirmatory test, HIV testing, penicillin G, and notification of partners from the past 90 days.",
            "rationale": "Syphilis is diagnosed with a blood screening test (typically the VDRL) and then a confirmatory test; patients are tested for HIV. Penicillin G treats all stages, partners from the past 90 days are notified, and follow-up is every 6 months to 2 years."
          },
          {
            "q": "A clinic's positive results today include gonorrhea, genital herpes, trichomoniasis, chlamydia, syphilis and genital warts. Which must be reported to the health department?",
            "a": "Gonorrhea, chlamydia and syphilis.",
            "rationale": "The three reportable STIs in the US are gonorrhea, chlamydia and syphilis, the three bacterial ones. The lab or provider must notify the health department; herpes, HPV and trichomoniasis are not on that list."
          }
        ],
        "500": [
          {
            "q": "A 29-year-old woman has chronic pelvic pain, had an ectopic pregnancy last year, and can't conceive. She remembers a partner who later said he had chlamydia, but she never had symptoms. Which complication links her history, and why are women more affected?",
            "a": "PID from untreated chlamydia damaged her fallopian tubes; chlamydia (like gonorrhea in women) is usually asymptomatic, so it goes untreated.",
            "rationale": "Chlamydia usually has no symptoms, so it keeps spreading. Its complication is infertility, usually in women, from PID, which damages the fallopian tubes and causes ectopic pregnancy risk, chronic pelvic pain and infertility. Women with gonorrhea are also usually asymptomatic and get more complications, including PID."
          },
          {
            "q": "A client has a new rash, and he had a genital ulcer (a chancre) about 6 weeks ago that healed. He is diagnosed with syphilis. Which stage is this, is he infectious, and why does treating it now matter?",
            "a": "The secondary stage, which is highly infectious; untreated it can progress to late syphilis with irreversible neurologic and cardiovascular damage.",
            "rationale": "Secondary syphilis occurs 2 to 8 weeks after primary: the bacteria disseminate and cause a rash, and it is highly infectious, like the primary stage. Late syphilis (1 to 20 years later) causes irreversible damage: neurosyphilis, cardiovascular syphilis and gummatous syphilis. Penicillin G treats all stages."
          }
        ]
      }
    },
    {
      "id": "w3-ekg-sinus",
      "name": "EKG Basics & Sinus Rhythms",
      "group": "week3",
      "badge": "Week 3",
      "clues": {
        "100": [
          {
            "q": "A client's 6-second telemetry strip shows 8 evenly spaced QRS complexes, each with an identical P wave before it. What is the heart rate, and what rhythm does this fit?",
            "a": "A rate of 80, which fits normal sinus rhythm.",
            "rationale": "Every test strip is 6 seconds, so count the QRSs and multiply by 10: 8 QRSs is a rate of 80. A P before every QRS, everything looking the same, a regular R to R and a rate of 60 to 100 is normal sinus rhythm."
          },
          {
            "q": "While checking a client's telemetry, the nurse finds the white electrode stuck below the left clavicle, and the tracing looks odd. What should the nurse do?",
            "a": "Move the white electrode to just below the right clavicle: white on the right.",
            "rationale": "Electrode placement: white on the right, right below the right clavicle; smoke (black) over fire (red); snow (white) over grass (green). Students can put electrodes on and replace ones that come off. A strange-looking strip can also come from the lead selection or artifact, so the nurse always checks the patient and the connections."
          }
        ],
        "200": [
          {
            "q": "The nurse counts 4 small boxes from the start of the P wave to the start of the QRS. How should this PR interval be interpreted?",
            "a": "0.16 seconds, which is within the normal range of 0.12 to 0.20.",
            "rationale": "Each tiny box is 0.04 seconds, so 4 boxes is 0.16 seconds. The PR interval should be 0.12 to 0.20 seconds; longer than 0.20 implies a conduction delay between the atria and the ventricles."
          },
          {
            "q": "A 28-year-old distance runner on telemetry after minor surgery has a heart rate of 52. His BP is 124/78, and he says he feels great. What should the nurse do?",
            "a": "Keep monitoring; asymptomatic bradycardia with OK vital signs isn't treated.",
            "rationale": "Sinus bradycardia can be normal in someone who is well conditioned, relaxed or sleeping. The nurse checks on the patient and takes a full set of vital signs; asymptomatic with OK vitals means monitor, don't treat. Atropine is for symptomatic bradycardia."
          }
        ],
        "300": [
          {
            "q": "A client on post-op day 2 has sinus tachycardia at 124, a temperature of 39 C (102.2 F), and a hemoglobin well below normal. A student suggests a beta blocker. What is the better approach?",
            "a": "Treat the causes first (fever and anemia), since sinus tachycardia is usually compensating for something else.",
            "rationale": "Sinus tachycardia is treated by treating its cause: fever (antipyretic), anemia (not enough \"buses,\" so the heart speeds up to circulate them), pain, low volume and so on. Beta blockers reduce HR and oxygen demand, but the cause is treated first."
          },
          {
            "q": "A client in a new dysrhythmia has an apical pulse of 88, while a second nurse counts a radial pulse of 70 at the same time. What does this finding mean?",
            "a": "A pulse deficit: not every beat is perfusing the periphery, which is not an expected finding.",
            "rationale": "A pulse deficit is found when two nurses take the apical and radial pulse at the same time and get different counts. It means not every beat is perfusing the periphery; it is one of the key features of a sustained tachy- or bradydysrhythmia."
          }
        ],
        "400": [
          {
            "q": "A post-op client strains hard during a bowel movement, then calls out that she feels faint. Her heart rate has dropped from 74 to 46. What most likely caused the change, and what does the nurse do next?",
            "a": "Vagal stimulation from the Valsalva maneuver; check her, take a full set of vital signs, and treat with atropine if she stays symptomatic.",
            "rationale": "Vagal (parasympathetic) stimulation, including the Valsalva maneuver (bearing down), causes sinus bradycardia. The nurse goes to the patient and takes a full set of vitals; symptomatic bradycardia (lightheaded, \"I feel like I'm going to pass out,\" low BP) is treated with atropine 1 mg IV every 3 to 5 minutes, 3 mg max."
          },
          {
            "q": "A client taking digoxin has a heart rate of 46, and the strip shows peaked T waves. Which two causes of sinus bradycardia should the nurse be thinking about?",
            "a": "Hyperkalemia (it slows depolarization and can peak the T waves) and digoxin toxicity.",
            "rationale": "Causes of sinus bradycardia include hyperkalemia, which slows depolarization, and digoxin toxicity, a narrow-therapeutic-index drug that can be life-threatening. A peaked T wave can happen with potassium imbalances."
          }
        ],
        "500": [
          {
            "q": "A client has been in a sustained tachycardia of 145 for hours. He is now restless, with crackles in the lung bases, JVD, cool clammy skin, and a urine output of 15 mL in the last hour. How should the nurse interpret these cues together?",
            "a": "Falling cardiac output from the sustained fast rate: poor perfusion to the brain and kidneys, with crackles pointing to left-sided failure and JVD to right-sided failure.",
            "rationale": "Sustained tachydysrhythmias shorten diastole and reduce ventricular filling, so stroke volume, cardiac output and BP fall. The key features: restlessness (poor brain perfusion), crackles (left-sided heart failure), JVD (right-sided heart failure), cool clammy skin, and decreased urine output (kidneys not perfused)."
          },
          {
            "q": "Two clients are in sinus tachycardia at 112. Client A has a temperature of 38.9 C (102 F) and pain of 8 out of 10. Client B's BP is 84/50 after losing a lot of blood volume. What is the best initial treatment for each, and why?",
            "a": "Client A: an antipyretic and an analgesic. Client B: fluid replacement, since his heart rate is compensating for the low volume (cardiac output = heart rate x stroke volume).",
            "rationale": "Sinus tachycardia is not one size fits all: treat the cause. Fever gets an antipyretic, pain an analgesic, and low fluid volume is replaced with fluid. Because cardiac output = HR x stroke volume, a low stroke volume raises the HR as compensation. Beta blockers come after treating the cause."
          }
        ]
      }
    },
    {
      "id": "w3-atrial",
      "name": "Atrial Dysrhythmias & PSVT",
      "group": "week3",
      "badge": "Week 3",
      "clues": {
        "100": [
          {
            "q": "A client's strip shows no P waves, tiny irregular waves, and R to R intervals with no pattern at all. Which rhythm is this, and what is its biggest danger?",
            "a": "Atrial fibrillation; the biggest danger is clots that can embolize and cause a stroke.",
            "rationale": "A-fib: the atria quiver, there are no P waves, and the R to R is irregularly irregular. Because the atria don't contract, blood pools and clots form; a clot that breaks loose from the left atrium can cause a stroke."
          },
          {
            "q": "A client on telemetry suddenly goes into PSVT at 200. He is alert, with a BP of 118/72. What is the nurse's first intervention?",
            "a": "Coach a vagal maneuver: bear down for 10 to 15 seconds, then breathe.",
            "rationale": "For PSVT the most effective first step is a vagal maneuver: bear down like having a bowel movement for 10 to 15 seconds, hard enough to distend the neck veins, then resume breathing (or intentional coughing). Adenosine comes next if it doesn't work."
          }
        ],
        "200": [
          {
            "q": "A client recovering from surgery has new PACs that are becoming more frequent through the shift. Why does the nurse act now, and what should she do?",
            "a": "New or increasing PACs can be a precursor to A-fib; check the electrolytes (magnesium, calcium, potassium) and notify the provider.",
            "rationale": "PACs are usually benign, but new-onset or increasing PACs in a hospital patient can be pathologic and a precursor to A-fib, so time can be of the essence. The nurse checks the electrolytes, especially magnesium, calcium and potassium, and lets the provider know."
          },
          {
            "q": "A strip shows a regular R to R with sawtooth waves between the QRS complexes and an atrial rate of about 250. The client asks if he needs a blood thinner \"since it's regular.\" How should the nurse respond?",
            "a": "This is atrial flutter, and it still carries a risk of emboli even though the rhythm is mostly regular.",
            "rationale": "Atrial flutter has sawtooth flutter (F) waves from a single ectopic focus, an atrial rate around 250, and a more often regular R to R. Both A-fib and A-flutter carry a risk of emboli."
          }
        ],
        "300": [
          {
            "q": "A stable client in new A-fib with a rate of 162 has orders for an IV diltiazem bolus followed by a drip. The client asks why both. What is the explanation?",
            "a": "The bolus raises the drug level immediately to slow the ventricular rate; the drip takes over as the bolus wears off.",
            "rationale": "In stable but symptomatic A-fib the priority is controlling the ventricular rate, usually with an IV calcium channel blocker (or beta blocker, digoxin or amiodarone) given as a bolus and then a drip: a drip alone would take too long."
          },
          {
            "q": "Adenosine is ordered for a client in PSVT. How should the nurse give it, and what should the client be told first?",
            "a": "Push it very fast, flush with saline immediately, and warn the client he may feel a brief pause.",
            "rationale": "Adenosine has an incredibly short half-life, so it is pushed very fast with an immediate saline flush (often through a stopcock). Onset is 10 to 40 seconds and duration 1 to 2 minutes; the strip may show a brief pause (asystole), so the client is warned."
          }
        ],
        "400": [
          {
            "q": "A client has been in A-fib for 10 days and is scheduled for an elective cardioversion. What must happen first, and why?",
            "a": "Anticoagulation for 4 to 6 weeks and a TEE to rule out atrial clots, because restoring the atrial kick can throw a clot to the brain.",
            "rationale": "With A-fib longer than 48 hours, anticoagulation is recommended for 4 to 6 weeks before cardioversion, and a TEE confirms there are no clots in the atria; otherwise a successful cardioversion restores a strong atrial kick that can send a clot to the brain."
          },
          {
            "q": "A client with long-term A-fib is ordered one of the newer anticoagulants. The morning creatinine is elevated. What should the nurse do, and why?",
            "a": "Hold it and contact the provider, because these drugs are contraindicated with impaired renal function.",
            "rationale": "The newer anticoagulants don't all need routine lab testing, but they cost more and are contraindicated with impaired renal function, so the creatinine is checked before giving them. Which anticoagulant to use is the provider's decision."
          }
        ],
        "500": [
          {
            "q": "A client in atrial flutter with a rapid rate becomes hypotensive and confused. The provider plans synchronized cardioversion. What must the nurse confirm before the shock, and what happens if the client becomes pulseless during the procedure?",
            "a": "Sync on (it needs the R wave), sedation if time allows, a low starting energy (50 to 100 joules), and everyone clear of the bed. If pulseless, turn the sync off and defibrillate.",
            "rationale": "Synchronized cardioversion is the choice for hemodynamically unstable supraventricular tachydysrhythmias and needs an R wave. The sync switch is turned on so the shock lands on the R wave; the patient is sedated in a non-emergency, it starts at 50 to 100 joules, and all personnel stand clear. If the patient becomes pulseless the QRS is lost, so the sync is turned off and the patient is defibrillated."
          },
          {
            "q": "A new graduate prepares atropine for a client in PSVT at 210 who has not tried any vagal maneuvers. What is wrong with this plan, and what is the correct order of treatment?",
            "a": "Atropine speeds the heart rate; the correct order is vagal maneuvers first, then adenosine (which slows the rate), then synchronized cardioversion if the client becomes unstable.",
            "rationale": "Two A drugs with opposite jobs: adenosine slows the heart rate (PSVT), and atropine speeds it up (symptomatic bradycardia). PSVT treatment: vagal maneuvers (bearing down, coughing) first, then adenosine, then synchronized cardioversion if the client becomes hemodynamically unstable."
          }
        ]
      }
    },
    {
      "id": "w3-ventricular",
      "name": "Ventricular Dysrhythmias",
      "group": "week3",
      "badge": "Week 3",
      "clues": {
        "100": [
          {
            "q": "A client's chart shows years of occasional PVCs that look the same as today's, at the same frequency, and he feels fine. Is this an emergency, and what should the nurse do?",
            "a": "No; isolated, unchanged chronic PVCs can be benign, so keep monitoring for any increase.",
            "rationale": "An isolated PVC can be benign, and some patients always have a few. The concern is PVCs that are new-onset or increasing in frequency, which the nurse watches closely and reports."
          },
          {
            "q": "The nurse finds a client unresponsive and pulseless. The monitor shows chaotic, irregular waveforms with no QRS complexes. What is this rhythm, and what is the nurse's response?",
            "a": "Ventricular fibrillation: call a code, start CPR, and defibrillate.",
            "rationale": "In V-fib the ventricles quiver: irregular waveforms with no QRSs and zero cardiac output. It is cardiac arrest, treated with CPR, ACLS and defibrillation. \"You can't live with V-fib.\""
          }
        ],
        "200": [
          {
            "q": "The monitor shows a PVC after every normal beat, with a monitor rate of 84. The radial pulse is 42. Why is there such a difference?",
            "a": "This is bigeminy, and PVCs typically don't perfuse, so only every other beat reaches the wrist.",
            "rationale": "Bigeminy is a PVC every other beat. PVCs are early, wide and distorted and typically do not perfuse, so only every other beat is perfusing. It is also a pattern that can precede V-tach."
          },
          {
            "q": "Two clients have new PVCs. Client A's PVCs all look alike. Client B's PVCs have different shapes, some pointing up and some down. Which strip raises more concern, and why?",
            "a": "Client B, since multifocal PVCs come from more than one irritable focus.",
            "rationale": "Unifocal PVCs come from the same irritable focus and look alike. Multifocal PVCs come from more than one focus (one goes up, another goes down) and make the instructor \"raise my eyebrows even further.\""
          }
        ],
        "300": [
          {
            "q": "A client goes into V-tach at 180 but is awake, has a pulse, and has a BP of 98/62. What does the nurse anticipate?",
            "a": "An antidysrhythmic (such as amiodarone) and checking and replacing electrolytes right away.",
            "rationale": "In V-tach the key question is whether the patient has a pulse. With a pulse, the client is perfusing: treatment includes an antidysrhythmic (beta blocker, calcium channel blocker or amiodarone) and checking and immediately replacing electrolytes. Pulseless V-tach is defibrillated."
          },
          {
            "q": "A client in V-tach suddenly loses consciousness, and no pulse can be felt. A nurse reaches for the sync button to cardiovert. What should be done instead?",
            "a": "Treat it as pulseless V-tach: call a code, start CPR, and defibrillate with the sync off.",
            "rationale": "Pulseless V-tach and V-fib are defibrillated, not cardioverted. Defibrillation is an emergency for a patient with no cardiac output, done with the sync button off so it fires when pushed, starting at 200 joules."
          }
        ],
        "400": [
          {
            "q": "During a code for V-fib, the defibrillator won't discharge when the shock button is pushed. Which setting is the likely problem?",
            "a": "The sync is on, so the machine is waiting for a QRS that V-fib doesn't have.",
            "rationale": "With the sync on, the machine senses QRSs and synchronizes the shock to them. V-fib has no QRSs, so a synced machine never fires. For defibrillation the sync is off, and it fires whenever the button is pushed."
          },
          {
            "q": "A client with new, frequent PVCs has a low magnesium, a temperature of 38.7 C (101.7 F), and admits to drinking several energy drinks today. Which approach fits the lecture?",
            "a": "Find and fix the causes: replace the electrolyte, treat the fever, stop the stimulants, and report the new PVCs.",
            "rationale": "Causes of PVCs include stimulants, electrolyte imbalances, hypoxia, fever, exercise, emotional stress and cardiovascular disease, and treatment is finding and fixing the cause. Drugs such as beta blockers, lidocaine or amiodarone may be used for a tendency toward PVCs. New or increasing PVCs are reported."
          }
        ],
        "500": [
          {
            "q": "Two clients need a shock. Client A is in atrial flutter and has become unstable. Client B is in ventricular fibrillation. Compare the sync setting, the patient's state and the starting energy for each.",
            "a": "Client A: sync on, usually awake and sedated if time allows, 50 to 200 joules. Client B: sync off, unconscious, starting at 200 joules (up to 360).",
            "rationale": "Synchronized cardioversion is more elective, needs an R wave, uses the sync button on, and runs 50 to 200 joules in a usually awake (sedated if time) patient. Defibrillation is an emergency for pulseless V-tach and V-fib, with the sync off, starting at 200 joules and going up to 360, in an unconscious patient."
          },
          {
            "q": "Over a shift, a client's occasional PVCs become bigeminy, then runs of three in a row, and now a sustained run at 190 with no P waves. He still has a pulse. Why is this progression dangerous, and what does the nurse do?",
            "a": "He has progressed to V-tach: the ventricles beat too fast to fill, so cardiac output falls sharply, and untreated it can slip into V-fib. Report immediately and prepare for ACLS treatment.",
            "rationale": "PVCs increasing in frequency are reported because they can convert to V-tach, a crisis. Three PVCs in a row is, in theory, V-tach (150 to 200, no P waves, no measurable PR). The ventricles can't fill, cardiac output drops seriously, and V-tach can slip into V-fib, which has zero cardiac output."
          }
        ]
      }
    },
    {
      "id": "w3-heart-failure",
      "name": "Heart Failure",
      "group": "week3",
      "badge": "Week 3",
      "clues": {
        "100": [
          {
            "q": "A client with chronic heart failure gained 1.5 kg since yesterday's weigh-in on the same scale, at the same time, in similar clothes. Why does the nurse take this seriously?",
            "a": "Daily weight is the most consistent measure of fluid volume status, so a gain means he is retaining fluid.",
            "rationale": "Daily weights are done at the same time of day, on the same scale, in about the same clothing because weight is the most consistent measure of fluid volume status."
          },
          {
            "q": "A client with heart failure has crackles in both lung bases and sleeps sitting up in a recliner because he can't breathe lying flat. Which side of heart failure do these cues point to?",
            "a": "Left-sided failure.",
            "rationale": "Left-sided failure backs blood up into the left atrium and pulmonary veins, so the cues are pulmonary: crackles, rhonchi, dyspnea, orthopnea (tripod position), PND and blood-tinged sputum."
          }
        ],
        "200": [
          {
            "q": "A client with heart failure has JVD, a tender enlarged liver, ascites, and ankle edema, but clear lungs. Which side of heart failure fits these cues, and why?",
            "a": "Right-sided failure: blood backs up into the venous circulation everywhere but the lungs.",
            "rationale": "Right-sided failure backs blood into the right atrium and venous circulation: JVD (the first place it goes), hepatomegaly, ascites, peripheral edema and, in men, scrotal edema. The lungs are spared."
          },
          {
            "q": "A short-of-breath client in the ED has a BNP of 1,250. The provider is deciding between a lung cause and heart failure. How does the nurse interpret this value?",
            "a": "It points strongly to heart failure: BNP distinguishes HF from other dyspnea, and a four-digit value is very significant.",
            "rationale": "BNP and pro-BNP are the classic heart failure labs: normal levels mean it isn't heart failure, and they are quantitative (higher = worse failure). Normally below 100; most dyspneic HF patients are above 400, and four digits is very significant."
          }
        ],
        "300": [
          {
            "q": "Before the morning digoxin dose, the nurse counts a client's apical pulse for a full minute and gets 56. What should the nurse do?",
            "a": "Hold the digoxin and notify the provider, since the rate is below 60.",
            "rationale": "Before every digoxin dose, the nurse takes an apical rate for a full minute and holds the dose if it is below 60. Digoxin is a negative chronotrope: it slows the heart rate."
          },
          {
            "q": "A client is admitted in acute decompensated heart failure, gasping for air. Which position helps most, and how does it help?",
            "a": "High Fowler's with the feet horizontal or dangling, which decreases venous return and preload and eases the heart's workload.",
            "rationale": "In ADHF the patient is placed in high Fowler's with the feet horizontal or dangling off the bed, which decreases venous return and preload and so the heart's workload. What brings these patients in is that they can't breathe."
          }
        ],
        "400": [
          {
            "q": "A client on digoxin and furosemide reports seeing halos around lights and has had nausea for two days. His potassium is low. How do these findings connect, and what does the nurse anticipate?",
            "a": "Digitoxicity, made worse by the hypokalemia from a potassium-losing diuretic; hold the digoxin and anticipate Digibind if ordered.",
            "rationale": "Digitalis plus hypokalemia equals digitoxicity; potassium is monitored closely, especially with a potassium-losing diuretic. Signs include serious dysrhythmias and bradycardia, halos around lights, and nausea and vomiting. The antidote is Digibind."
          },
          {
            "q": "A client with heart failure is started on spironolactone along with his furosemide. Which two lab values should the nurse watch most closely, and why?",
            "a": "Potassium (spironolactone retains it) and kidney function (it can worsen renal failure).",
            "rationale": "Spironolactone is a potassium-sparing diuretic used in HF to suppress sodium and water retention and offload the left ventricle. It retains potassium and can worsen renal failure; loop and thiazide diuretics such as furosemide are potassium-losing."
          }
        ],
        "500": [
          {
            "q": "Two clients have heart failure. Client A's echo shows an ejection fraction of 30% with a weak, poorly contracting left ventricle. Client B's ejection fraction is normal, but the muscle is stiff and doesn't relax. Classify each, and explain the difference.",
            "a": "Client A has HFrEF, a systolic (contraction) problem; client B has HFpEF, a diastolic (filling) problem.",
            "rationale": "HFrEF (reduced EF) is a defect in systolic function: the LV doesn't contract effectively. HFpEF (preserved EF) is a defect in diastolic function: the muscle contracts but is stiff and doesn't relax, so filling suffers; the EF is normal or near normal. Normal EF is 55 to 70%; 40% or lower signals HF."
          },
          {
            "q": "A client with long-standing left-sided heart failure now has JVD and ankle edema. A student calls it cor pulmonale. Another client has severe COPD with pulmonary hypertension and an enlarged right heart. Which client has cor pulmonale, and why?",
            "a": "The COPD client: cor pulmonale is right heart enlargement from pulmonary hypertension; right failure caused by left failure is not cor pulmonale.",
            "rationale": "Left failure eventually causes right failure (it's a closed circuit), so the first client has both. Cor pulmonale is enlargement of the right heart from pulmonary hypertension, such as in COPD; right-sided failure resulting from left-sided failure is not cor pulmonale."
          }
        ]
      }
    },
    {
      "id": "w3-pad-aaa-raynauds",
      "name": "PAD, AAA & Raynaud's",
      "group": "week3",
      "badge": "Week 3",
      "clues": {
        "100": [
          {
            "q": "A client says his calves cramp after walking two blocks and the pain goes away a few minutes after he stops. Which disorder does this suggest, and what exercise teaching fits?",
            "a": "Intermittent claudication from PAD; walk to the point of pain, stop and rest, then resume.",
            "rationale": "Intermittent claudication (legs hurt with walking, pain stops with rest) is the classic PAD symptom. Walking to the point of pain, resting, then resuming builds collateral circulation."
          },
          {
            "q": "A 24-year-old's fingers turn white, then blue, when she holds an iced drink, followed by throbbing and tingling as they warm. What teaching fits?",
            "a": "Raynaud's: wear layers and gloves, avoid extreme temperatures and triggers, and immerse the hands in warm water during spasms.",
            "rationale": "Raynaud's is a vasospastic disorder of the small arteries, usually of the fingers, with white, blue, sometimes red color changes; triggers are cold, emotional stress, tobacco and caffeine. Management: layered clothing, gloves, avoiding extreme temperatures, and warm water to ease spasms."
          }
        ],
        "200": [
          {
            "q": "Doppler systolic pressures: right arm 150, left arm 136, right ankle 141, left ankle 90. Calculate each ABI and identify the concerning leg.",
            "a": "Right ABI 0.94 (141 / 150); left ABI 0.60 (90 / 150). The left leg is concerning.",
            "rationale": "Each ankle pressure is divided by the higher of the two arm pressures (here 150). Normal ABI is 0.9 to 1.3; below 0.9 points to occlusive arterial disease, and the lower the number, the more severe."
          },
          {
            "q": "A client's legs turn pale when raised and dark red when he dangles them off the bed. Pedal pulses are absent. A student wants to elevate his legs on pillows. How should the nurse respond?",
            "a": "Don't elevate them: these are PAD findings (pallor on elevation, dependent rubor), and elevation reduces arterial flow to the feet.",
            "rationale": "In arterial disease the legs are pale when elevated above the heart and show dependent rubor (dark purple, ruby red) when dangling; pulses are weak or absent. Elevating the legs promotes venous return and helps venous disease, not arterial disease."
          }
        ],
        "300": [
          {
            "q": "A routine exam finds a 3.5 cm abdominal aortic aneurysm in a client with no symptoms. He asks if he needs surgery right away. What is the likely plan?",
            "a": "Watchful waiting: reduce risk factors, keep the BP down, and monitor the size every year.",
            "rationale": "Small AAAs (under 4 cm) are managed with watchful waiting: decrease risk factors, keep the BP down, and monitor the size annually. Larger ones get surgery, ideally elective, because mortality after rupture is very high."
          },
          {
            "q": "On the first day after a fem-pop bypass, a client's pedal pulse, present this morning, is now absent, and he says the pain is much worse. He is resting with pillows under his knees. What should the nurse do?",
            "a": "Notify the provider right away about the lost pulse and increased pain, and remove the knee pillows, since the knee-flexed position impedes arterial flow.",
            "rationale": "After a peripheral arterial procedure, the nurse trends a meticulous peripheral vascular assessment and notifies the provider of a dramatic increase in pain, a loss of pulse, extreme pallor or any change. The knee-flexed position is avoided because it impedes arterial flow."
          }
        ],
        "400": [
          {
            "q": "A client returns to the ICU after an endovascular AAA repair through the right femoral artery. Which assessments are the priority?",
            "a": "BP adequate but not too high, perfusion in the right foot, hourly urine output, the groin site (leg straight, flat), and signs of MI, infection and ileus.",
            "rationale": "After aneurysm repair, graft patency depends on a BP that is adequate but not too high (too high can blow the graft). The nurse checks perfusion distal to the accessed artery (right femoral means the right foot), renal perfusion with hourly urine output, and watches for MI, infection and paralytic ileus. Endovascular repair returns with a groin dressing: flat, leg straight, like a cardiac cath."
          },
          {
            "q": "A client with PAD has thick, brittle toenails and wants to trim them himself. He also asks about Pletal, which his provider mentioned. What should the nurse teach?",
            "a": "Don't cut the nails himself (podiatry does it); Pletal is specific for intermittent claudication, inhibiting platelet aggregation and increasing vasodilation.",
            "rationale": "PAD causes thick, brittle toenails, which go to podiatry and are never cut by the patient; meticulous foot care matters because injuries may go unnoticed. Pletal is specific for intermittent claudication: it inhibits platelet aggregation and increases vasodilation."
          }
        ],
        "500": [
          {
            "q": "Two clients have leg ulcers. Client A: an ulcer near the toes with little exudate, cool hairless legs, thin shiny skin and absent pulses. Client B: a painful ulcer above the medial malleolus, worse when dependent, with edema and brownish leathery skin. Classify each, and give one key positioning difference.",
            "a": "Client A is arterial (PAD): don't elevate the legs. Client B is venous (CVI): elevate the legs above the heart.",
            "rationale": "Arterial: weak or absent pulses, no hair, thin shiny skin, cool toes, ulcers around the toes with little exudate, pale on elevation. Venous: pulses present, edema, brownish leathery skin (lipodermatosclerosis), eczema, and painful ulcers above the medial malleolus that are worse when dependent. Elevating above the heart helps venous return; in arterial disease it makes the legs pale."
          },
          {
            "q": "A client with severe Raynaud's has a normal BP. She refuses the slow-release calcium channel blocker her provider ordered: \"I don't have high blood pressure.\" She also smokes and drinks a lot of coffee. What should the nurse explain?",
            "a": "The calcium channel blocker is first-line here to relieve the vessel spasms, not to treat BP, and tobacco and caffeine are triggers to avoid.",
            "rationale": "For severe Raynaud's, a slow-release calcium channel blocker is the first-line therapy, used for the vessel spasms rather than to lower BP. Triggers include cold, emotional stress, tobacco and caffeine, so avoiding them is part of management."
          }
        ]
      }
    },
    {
      "id": "w3-cvi-vte",
      "name": "CVI & VTE",
      "group": "week3",
      "badge": "Week 3",
      "clues": {
        "100": [
          {
            "q": "A bedbound client's left calf is suddenly larger than the right, warm, reddened and tender, and his temperature is 37.9 C (100.2 F). What should the nurse suspect?",
            "a": "A VTE (venous thromboembolism).",
            "rationale": "Unilateral leg edema (one leg larger than the other) is concerning for a VTE; it can be tender, warm and reddened, with a low-grade temp from inflammation. Bilateral edema is unlikely to be a clot."
          },
          {
            "q": "A client with chronic venous insufficiency has swollen, heavy legs at the end of the day. Which simple measure helps venous return the most?",
            "a": "Elevating the legs above the level of the heart.",
            "rationale": "Veins are a low-pressure system with valves; in CVI blood pools, causing edema. Elevating the legs above the heart promotes venous return and decreases swelling, along with avoiding long periods of sitting or standing and daily walking."
          }
        ],
        "200": [
          {
            "q": "A client with venous insufficiency has been using SCDs. An ultrasound today confirms a new DVT. What should happen with the SCDs, and why?",
            "a": "Hold them and clarify with the provider, because they can move the clot.",
            "rationale": "SCDs (intermittent compression devices) are used for venous insufficiency but are not recommended once an actual VTE is present, because they can move the clot."
          },
          {
            "q": "A client has a painful ulcer above the medial malleolus that hurts more when his leg hangs down. Brownish, leathery skin and edema surround it. Which type of ulcer is this, and how common is it compared with the other type?",
            "a": "A venous ulcer, which is more common than an arterial ulcer.",
            "rationale": "Venous ulcers typically form above the medial malleolus, can be quite painful and are worse when dependent. They are more common than arterial ulcers. Surrounding lipodermatosclerosis (brownish, leathery skin) and pitting edema fit CVI."
          }
        ],
        "300": [
          {
            "q": "A client is dehydrated, on bed rest, and receiving a caustic IV medication through a peripheral line. Which three VTE risk categories does he have?",
            "a": "Hypercoagulability (dehydration), venous stasis (bed rest), and endothelial damage (the caustic IV drug).",
            "rationale": "VTE risk factors fall into three groups: venous stasis (bed rest, older age, HF, a fractured limb, long trips), endothelial damage (caustic or hypertonic IV fluids or drugs, fractures, trauma) and hypercoagulability (dehydration, oral contraceptives, pregnancy, cancer, tobacco)."
          },
          {
            "q": "A client with a large venous leg ulcer plans to \"eat light, mostly salads\" to lose weight while it heals. What should the nurse teach?",
            "a": "A high-calorie, high-protein diet, which the skin needs to heal.",
            "rationale": "Collaborative care for CVI includes a high-calorie, high-protein diet for skin healing, along with leg elevation, a daily walking program, proper foot and leg care, and compression therapy."
          }
        ],
        "400": [
          {
            "q": "A client newly diagnosed with a DVT says, \"My grandmother had to stay flat in bed for weeks with a clot, so I'll do the same.\" What should the nurse teach?",
            "a": "Early, aggressive mobilization is encouraged now; in bed, flex and extend the feet, knees and hips every 2 to 4 hours while awake.",
            "rationale": "Patients with clots used to be kept in bed, but early and aggressive mobilization is now encouraged; if not mobilizing, turn every 2 hours. Flexing and extending the feet, hips and knees every 2 to 4 hours while awake mimics the skeletal muscle pump."
          },
          {
            "q": "A client with his third VTE this year is anticoagulated and asks about the vena cava filter his provider mentioned. What should the nurse explain about both treatments?",
            "a": "Anticoagulation is very important but raises his bleeding risk; the filter is a small cage in the inferior vena cava that catches clots he may still throw.",
            "rationale": "Anticoagulation is very important in VTE care, but it puts the patient at risk for bleeding. For recurrent VTEs, a vena cava (Greenfield) filter can be placed in the inferior vena cava: a little cage that catches clots the patient throws. It's less common now and provider preference."
          }
        ],
        "500": [
          {
            "q": "A 34-year-old smoker on oral contraceptives fractured her pelvis in a car accident and is now on bed rest, receiving a hypertonic IV fluid. Map her risk factors to the three VTE categories, and name the most serious complication the nurse is trying to prevent.",
            "a": "Venous stasis (bed rest), endothelial damage (pelvic fracture, hypertonic IV fluid), hypercoagulability (smoking, oral contraceptives); the most serious complication is a pulmonary embolism.",
            "rationale": "Venous stasis: bed rest. Endothelial damage: fractures of the pelvis, hip or leg, and caustic or hypertonic IV fluids. Hypercoagulability: oral contraceptives and tobacco use. The most serious complication of a thrombus is a pulmonary embolism, so prevention targets the modifiable risk factors."
          },
          {
            "q": "Two clients have leg edema. Client A has bilateral pitting edema, varicose veins and itchy, eczema-like skin. Client B has sudden swelling in one thigh with a sense of fullness and a low-grade fever. Which client is at risk for the most serious complication, and how does care differ for compression?",
            "a": "Client B (likely a VTE, which can become a pulmonary embolism): no SCDs. Client A (CVI) benefits from compression therapy and elevation.",
            "rationale": "Bilateral edema with varicose veins and eczema with itching fits chronic venous insufficiency, managed with elevation, walking and compression therapy (including SCDs). Unilateral swelling, fullness or heaviness and a low-grade temp suggest a VTE, whose most serious complication is a PE; SCDs are not recommended once a VTE is present because they can move the clot."
          }
        ]
      }
    }
  ]
};
