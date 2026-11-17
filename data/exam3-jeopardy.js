/* ============================================================
   exam3-jeopardy.js -- the question bank for the Exam 3 Jeopardy game
   (3 players). Read by assets/jeopardy-exam3.js; the engine has no
   content of its own, so this file can be edited or expanded later
   (for example with a new category) without touching any game code.

   Covers Week 4 (5 categories, group "week4") and Week 5
   (6 categories, group "week5"), built only from this site's Week 4
   and Week 5 pages. Each game draws 3 Week 4 + 3 Week 5 categories
   at random.

   Shape: 10 clues per category = 2 per value (100/200/300/400/500),
   difficulty rising with value; declared in "shape" for verify.js.
   Each clue: { q, a, rationale }. Category names use a literal "&"
   (the engine escapes at render time). To add a category, copy one
   block, give it a new id, a group ("week4" or "week5") and a badge.
   ============================================================ */
window.JEOPARDY_EXAM3 = {
  "shape": [
    2,
    2,
    2,
    2,
    2
  ],
  "categories": [
    {
      "id": "w4-adh",
      "name": "SIADH & Diabetes Insipidus",
      "group": "week4",
      "badge": "Week 4",
      "clues": {
        "100": [
          {
            "q": "A client with a newly found lung tumor has a serum sodium of 124 and is gaining weight daily. The provider suspects the tumor is secreting ADH. Which fluid order should the nurse expect for mild symptoms?",
            "a": "A fluid restriction, for example about 1 L a day.",
            "rationale": "This is SIADH: too much ADH causes water retention and dilutional hyponatremia. Mild symptoms and mild hyponatremia are treated with fluid restriction (about 1 L a day), which re-concentrates the serum."
          },
          {
            "q": "After a car accident with a closed head injury, a client's urine output jumps to several liters, the urine is clear \"like water,\" and he keeps asking for water. Which ADH problem does this suggest?",
            "a": "Neurogenic (central) diabetes insipidus: not enough ADH.",
            "rationale": "Head trauma can damage the pituitary, causing neurogenic DI. Without ADH the kidneys can't reabsorb water: polyuria of 5 to 20 L a day of very dilute urine, and thirst from the high osmolality."
          }
        ],
        "200": [
          {
            "q": "A client on long-term lithium has polyuria and a urine specific gravity well below 1.010. The pituitary scan is normal. What type of DI is most likely, and why?",
            "a": "Nephrogenic DI: the pituitary is OK, but the kidneys don't respond to ADH; lithium is the most common cause.",
            "rationale": "Nephrogenic DI comes from the kidneys not responding to ADH, most commonly because of lithium. Its onset is less abrupt and its symptoms less severe than neurogenic DI. Normal urine specific gravity is 1.010 to 1.030."
          },
          {
            "q": "A client with SIADH has a sodium of 126. Which two nursing measures best track whether the fluid restriction is working?",
            "a": "Daily weights and intake and output (with mental status checks).",
            "rationale": "SIADH causes fluid volume excess. Nursing care: watch for cues of fluid overload, monitor mental status, restrict fluids, daily weights and I&O."
          }
        ],
        "300": [
          {
            "q": "A client with diabetes insipidus has a serum sodium of 151. A student says, \"He's peeing so much, he must be losing potassium too, like with Lasix.\" How should the nurse respond?",
            "a": "ADH moves pure water, not potassium; DI causes hypernatremia from pure water loss, not hypokalemia.",
            "rationale": "The lecture stresses that ADH regulates pure water only. Losing water from too little ADH doesn't make the patient hypokalemic; it's not like diuresing with Lasix. The sodium rises because pure water is lost."
          },
          {
            "q": "A client with SIADH is becoming confused and lethargic. The latest sodium is 112. Which priority problem and which treatment should the nurse anticipate?",
            "a": "Risk for injury from severe hyponatremia; hypertonic saline (usually 3%) given slowly, with a stricter fluid restriction (such as 500 mL a day).",
            "rationale": "Below about 110 to 115, severe symptoms appear (dulled sensorium, confusion, lethargy). Severe hyponatremia is treated with hypertonic saline given slowly, plus a stronger fluid restriction such as 500 mL a day; confused patients need safety measures."
          }
        ],
        "400": [
          {
            "q": "A client with neurogenic DI is on desmopressin. Over the shift, urine output rises from 200 to 450 mL/hour and the specific gravity falls from 1.008 to 1.002. What should the nurse do, and why?",
            "a": "Notify the provider: rising urine volume with falling specific gravity means the DI is worsening and the desmopressin dose may need to go up.",
            "rationale": "The lecture's rule: notify the provider of an increase in urine volume with a decrease in specific gravity, because the disease is getting worse and the drug dose may need to be increased."
          },
          {
            "q": "Compare two clients: Client A's serum osmolality is 305 with very dilute urine; Client B's is 262 with weight gain. Match each to SIADH or DI and say what is happening to their cells.",
            "a": "Client A: DI, the cells shrink. Client B: SIADH, fluid shifts into the cells and they swell.",
            "rationale": "Normal serum osmolality is about 270 to 290. DI concentrates the serum (300 or higher is elevated) and cells shrink; SIADH dilutes the serum (low osmolality, dilutional hyponatremia) and fluid shifts into the cells so they swell."
          }
        ],
        "500": [
          {
            "q": "A client with severe SIADH (sodium 110) is started on 3% saline. An hour later the nurse finds the infusion running at twice the ordered rate. What is the danger, and what is the priority action?",
            "a": "Too-fast hypertonic saline causes rapid fluid shifts in the brain that can be fatal; slow it to the ordered rate, assess neuro status and notify the provider.",
            "rationale": "Hypertonic saline (3%, or 5% which is even more hypertonic) must be given slowly: too fast causes rapid fluid shifts in the brain that can be fatal. IV fluids in SIADH are monitored very closely so they aren't over-administered."
          },
          {
            "q": "Two days after a closed head injury, a client's DI symptoms improve and urine output is returning to normal. The family asks if he'll need desmopressin for life. What should the nurse explain about this type of DI?",
            "a": "Neurogenic DI from head trauma usually starts abruptly and is self-limiting; the symptoms are treated (hormone therapy, fluids) while it lasts.",
            "rationale": "Neurogenic (central) DI after head trauma has an abrupt onset and is usually self-limiting, but the symptoms must be treated while it lasts. Hormone therapy (desmopressin) and fluid management are the cornerstones of treatment."
          }
        ]
      }
    },
    {
      "id": "w4-adrenal",
      "name": "Cushing's, Addison's & Pheo",
      "group": "week4",
      "badge": "Week 4",
      "clues": {
        "100": [
          {
            "q": "A client who has taken oral prednisone for COPD for years has a round face, a fat pad between the shoulders, thin arms and legs, and bruises easily. What is the most likely cause of these findings?",
            "a": "Cushing's syndrome from long-term oral systemic steroids.",
            "rationale": "Cushing's disease (usually a tumor) is very rare; most of the time it's Cushing's syndrome, caused by long-term oral systemic steroids: moon face, buffalo hump, truncal obesity, thin extremities, easy bruising."
          },
          {
            "q": "A thin, tired client has bronze darkening of the palm creases and gums, low blood pressure and says she craves salty foods. Which adrenal problem fits?",
            "a": "Addison's disease (adrenal insufficiency).",
            "rationale": "Addison's is not enough cortisol and aldosterone: low sodium, low BP, salt cravings, weakness and fatigue, plus bronze hyperpigmentation (palmar creases, nail beds, gums) from unsuppressed ACTH."
          }
        ],
        "200": [
          {
            "q": "A client with an adrenal tumor has blood pressure that won't come down on three medications, plus pounding palpitations, headaches and drenching sweats. Which test should the nurse expect, and what is the treatment?",
            "a": "Serum catecholamines (possibly a 24-hour urine) for a pheochromocytoma; treatment is removing the tumor.",
            "rationale": "A pheochromocytoma is an adrenal medulla tumor secreting too much epinephrine and norepinephrine: intractable hypertension and the triad of palpitations, headache and sweating. Diagnosis is serum catecholamines; treatment is removing the tumor."
          },
          {
            "q": "A client with Cushing's syndrome asks what to change in her diet. Which changes should the nurse teach?",
            "a": "Increase protein and potassium; decrease calories and sodium.",
            "rationale": "Excess cortisol and aldosterone cause hyperglycemia, sodium and fluid retention, protein breakdown and hypokalemia, so the diet raises protein and potassium and lowers calories and sodium."
          }
        ],
        "300": [
          {
            "q": "A client with Addison's disease is taking hydrocortisone. He asks why he takes two-thirds of the dose in the morning and one-third in the late afternoon. What is the best explanation?",
            "a": "It matches the body's diurnal rhythm, which makes more cortisol in the morning.",
            "rationale": "Hydrocortisone replaces cortisol: two-thirds in the morning and one-third in the late afternoon to mimic the normal diurnal rhythm. Fludrocortisone (taken in the morning) replaces the missing aldosterone."
          },
          {
            "q": "Compare the potassium of a client with Cushing's syndrome to one with Addison's disease, and name the hormone responsible.",
            "a": "Cushing's: low potassium (hypokalemia); Addison's: high potassium (hyperkalemia). Aldosterone drives it.",
            "rationale": "Aldosterone moves potassium: when aldosterone rises, sodium rises and potassium falls (Cushing's); when it is low, sodium falls and potassium rises (Addison's). ADH has no effect on potassium."
          }
        ],
        "400": [
          {
            "q": "A client with Addison's disease has the flu with a fever and is studying for finals. She asks whether to change her hydrocortisone. What should the nurse teach?",
            "a": "Follow the 3 x 3 rule: take 3 times the dose for 3 days when stressed, depending on severity; never stop it abruptly.",
            "rationale": "Stress raises the need for cortisol. The 3 x 3 rule: when stressed (sick, a big exam, a marathon), take 3 times the dose for 3 days, depending on the stress. Replacement is lifelong and is never stopped abruptly."
          },
          {
            "q": "A client with Cushing's syndrome from long-term steroids for RA has a small skin tear on her forearm, a glucose of 210 and a potassium of 3.2. Which two priority problems do these cues point to?",
            "a": "Risk for infection (immunosuppression, thin skin that tears, poor healing) and unstable blood glucose with hypokalemia.",
            "rationale": "Cushing's suppresses the immune and inflammatory response (poor healing, infection risk), thins the skin, raises glucose and lowers potassium (high aldosterone). Priority problems include risk for infection, skin integrity, unstable glucose and potential hypokalemia."
          }
        ],
        "500": [
          {
            "q": "A client with Addison's disease ran out of hydrocortisone and then was in a car accident. She is now confused, BP 74/40, HR 128, glucose 52. What is happening, and what treatment should the nurse anticipate?",
            "a": "Addisonian crisis: IV cortisol replacement with saline and dextrose, close vital sign trending and a calm, stress-free environment.",
            "rationale": "A big stressor without the cortisol supplement can cause an Addisonian crisis, an abrupt adrenal insufficiency that can be fatal. Treatment is IV cortisol, saline and dextrose; these patients can be extremely hemodynamically unstable, so trend vitals closely and keep the environment calm."
          },
          {
            "q": "A client has been on high-dose prednisone for RA for a year and wants to stop it today because of her Cushingoid appearance. What should the nurse tell her?",
            "a": "Do not stop abruptly; the provider will gradually decrease the drug, reduce the dose or try every-other-day dosing under supervision.",
            "rationale": "Cushing's syndrome is managed by gradually decreasing the drug, reducing the dose, or every-other-day dosing, all provider supervised. Steroid replacement and steroid therapy are never stopped abruptly."
          }
        ]
      }
    },
    {
      "id": "w4-thyroid",
      "name": "Thyroid Disorders",
      "group": "week4",
      "badge": "Week 4",
      "clues": {
        "100": [
          {
            "q": "A client has weight loss despite a huge appetite, diarrhea, a heart rate of 118, warm moist skin and red palms. Her TSH is low. Which disorder does this suggest?",
            "a": "Hyperthyroidism (most often Graves' disease).",
            "rationale": "Hyperthyroidism revs everything up: voracious appetite with weight loss, diarrhea, tachycardia, warm moist skin and palmar erythema. TSH is low because the pituitary is trying to shut the thyroid off. Graves' disease causes it three-fourths of the time."
          },
          {
            "q": "A client is tired, depressed, constipated, cold all the time and gaining weight. Her TSH is high and thyroid antibodies are present. What is the most likely diagnosis and treatment?",
            "a": "Hypothyroidism from Hashimoto's thyroiditis, treated with levothyroxine.",
            "rationale": "Hypothyroidism slows everything: fatigue, depression, constipation, weight gain, cold intolerance. Low T3 and T4 with a high TSH; antibodies mean autoimmune (Hashimoto's). Treatment is levothyroxine with level monitoring."
          }
        ],
        "200": [
          {
            "q": "A client just started methimazole for Graves' disease and is upset that her palpitations haven't improved after 3 days. What should the nurse explain?",
            "a": "Methimazole works slowly (1 to 2 weeks to kick in, 4 to 8 weeks for good results); a beta blocker treats the symptoms meanwhile.",
            "rationale": "Methimazole decreases thyroid activity slowly. Oral beta blockers treat the symptoms in the meantime, until the other therapies take effect."
          },
          {
            "q": "Four hours after a thyroidectomy, the front of a client's dressing is dry. What else must the nurse check, and why?",
            "a": "Look behind the neck: blood follows gravity, so a clean front dressing doesn't rule out bleeding.",
            "rationale": "The thyroid is very vascular and the surgery is close to the airway, so watch for hemorrhage and tracheal compression. Always check behind the neck, because blood pools by gravity."
          }
        ],
        "300": [
          {
            "q": "A client received radioactive iodine (I-131) for Graves' disease and is going home to her family. Which teaching is correct for the next few days?",
            "a": "Minimize direct contact for 2 to 3 days, double flush the toilet and keep things separate; expect lifelong thyroid replacement later.",
            "rationale": "I-131 is an unsealed radiation source, so excretions are radioactive for a few days: minimize contact for 2 to 3 days, double flush, keep things separate. It deliberately ablates the thyroid over 6 to 18 weeks, so lifelong replacement follows."
          },
          {
            "q": "A client scheduled for a thyroidectomy is started on Lugol's solution (SSKI). She asks why she needs iodine if her thyroid is already overactive. What is the purpose?",
            "a": "It decreases the gland's vascularity and the risk of bleeding after surgery.",
            "rationale": "Iodine therapy (SSKI, Lugol's solution) is used to prepare for a thyroidectomy: it decreases the vascularity of the gland and the risk of postoperative bleeding."
          }
        ],
        "400": [
          {
            "q": "The day after a thyroidectomy, a client reports tingling around her mouth and seems anxious; her hand spasms when the BP cuff inflates. What is the likely cause?",
            "a": "Hypocalcemia from parathyroids removed or damaged during surgery (Trousseau's sign).",
            "rationale": "The parathyroids are buried in the thyroid and regulate calcium. If removed, the patient becomes hypocalcemic: tingling, twitching, apprehension, Trousseau's carpopedal spasm with a BP cuff and Chvostek's cheek twitch."
          },
          {
            "q": "A day after thyroidectomy, a client's voice is hoarse. Her daughter is alarmed. Her airway is clear, the dressing and the back of the neck are dry, and her calcium is normal. How should the nurse respond?",
            "a": "Hoarseness is expected for 3 to 4 days; keep her semi-Fowler's and avoid neck flexion or tension on the suture line.",
            "rationale": "Hoarseness for 3 to 4 days is expected after thyroidectomy. Positioning is semi-Fowler's, avoiding flexion or tension on the suture lines, while continuing to watch for hemorrhage and tracheal compression."
          }
        ],
        "500": [
          {
            "q": "A client with untreated hyperthyroidism is in surgery when her temperature, heart rate and agitation all spike sharply as the surgeon manipulates her thyroid. What is happening?",
            "a": "Thyroid storm (acute thyrotoxicosis): a stressor in someone with pre-existing hyperthyroidism makes every hyperthyroid symptom severe.",
            "rationale": "Thyroid storm is hyperthyroidism to the extreme. It results from stressors in someone with pre-existing hyperthyroidism, such as manipulation of the gland during a thyroidectomy; all the hyperthyroid symptoms become prominent and severe. Death is rare when it's treated early."
          },
          {
            "q": "An older client with long-standing untreated hypothyroidism is brought in hard to arouse, with puffy non-pitting swelling around the eyes and legs. What is the priority concern, and what treatment should the nurse anticipate?",
            "a": "Myxedema coma, a medical emergency: IV thyroid medication and steroids.",
            "rationale": "Myxedema coma is severe hypothyroidism and a medical emergency, with mental status changes that can progress to coma. It is treated with IV thyroid medication and steroids. Myxedema is the hard, non-pitting swelling of hypothyroidism."
          }
        ]
      }
    },
    {
      "id": "w4-dm-dx-insulin",
      "name": "DM Diagnosis & Insulin",
      "group": "week4",
      "badge": "Week 4",
      "clues": {
        "100": [
          {
            "q": "A client's A1C is 6.8%. He asks what that number means for him. What does an A1C show, and what does this value suggest?",
            "a": "The average glucose over the past 3 months (about 120 days); 6.5% or greater suggests diabetes.",
            "rationale": "Hemoglobin A1C is the average glucose over about 120 days. Normal is 4 to 6%; 6.5% or greater is possibly diabetes; the target for routine care is 7%."
          },
          {
            "q": "A 19-year-old arrives very ill with a very high glucose and weight loss; islet cell autoantibodies are positive. What type of diabetes is this, and what will treatment require?",
            "a": "Type 1 diabetes; he must have insulin replacement.",
            "rationale": "Type 1 is autoimmune destruction of the beta cells (no endogenous insulin), often with an abrupt onset and a very high glucose; islet cell autoantibody testing helps diagnose it. Type 1 must have insulin replacement."
          }
        ],
        "200": [
          {
            "q": "A client's first fasting glucose is 138. He asks, \"So I have diabetes now?\" What is the best response?",
            "a": "Not from one lab: a fasting glucose over 126 is repeated within the next week.",
            "rationale": "Diabetes isn't diagnosed from a single lab. A fasting glucose over 126 is repeated within the next week; an A1C over 6.5 gets lifestyle changes and a recheck within 3 months."
          },
          {
            "q": "A client with type 2 diabetes who takes oral medications at home is admitted with pneumonia and is surprised to be getting insulin. What should the nurse explain?",
            "a": "Oral meds are often stopped in the hospital while acutely ill because sugar is hard to control; insulin replaces them, and he goes back to oral meds at home.",
            "rationale": "In the hospital, oral diabetes medications are often stopped and replaced with insulin while acutely ill. The nurse explains this and that they'll return to oral meds at home."
          }
        ],
        "300": [
          {
            "q": "At 0730 a nurse prepares a client's scheduled rapid-acting insulin. Breakfast trays arrive at 0800. What must the nurse know before giving it?",
            "a": "The current blood glucose, plus the diet order and intake; rapid-acting insulin starts working in 5 to 10 minutes.",
            "rationale": "Never give insulin without knowing the current blood glucose (\"always, always, always\"). Check the diet order and oral intake, and know when the insulin acts: rapid-acting onset is 5 to 10 minutes, so food must be available."
          },
          {
            "q": "A client on a basal-bolus regimen asks why she takes glargine at bedtime and a different insulin before each meal. What is the rationale?",
            "a": "It mimics the body: a once-daily basal (long-acting) insulin plus rapid or short-acting boluses for the insulin spike with each meal.",
            "rationale": "The body spikes insulin with each meal. A basal-bolus regimen copies this with a long-acting basal insulin once a day (usually glargine at bedtime) and rapid or short-acting boluses before meals. Long-acting insulin never peaks."
          }
        ],
        "400": [
          {
            "q": "A client with an insulin pump is admitted with a foot infection, and glucose readings have been climbing for hours without him noticing. What does the nurse expect to happen to the pump, and what risk do the climbing sugars suggest?",
            "a": "In acute care the pump is deactivated and switched to a sliding scale; a malfunctioning pump can go unnoticed and lead to DKA.",
            "rationale": "In the hospital, insulin pumps are deactivated and replaced with a sliding scale for tighter control. Pump sites are checked for infection, and a malfunctioning pump can go unnoticed while sugars climb, causing DKA."
          },
          {
            "q": "A client is NPO for a procedure and has scheduled insulin ordered. Another client ate breakfast, received her rapid-acting insulin, then vomited. What should the nurse do for each?",
            "a": "NPO client: follow hospital policy (for example 50% of the scheduled dose, or hold boluses). Vomiting client: be ready to treat hypoglycemia and monitor her glucose.",
            "rationale": "NPO with scheduled insulin follows hospital policy (such as 50% of the dose or holding boluses). A patient who ate, got insulin, then vomited is at risk for hypoglycemia, so be ready to treat it."
          }
        ],
        "500": [
          {
            "q": "A newly diagnosed client with type 1 diabetes is going home on insulin. Which teaching approach best shows that he can manage safely, and what timing must he understand?",
            "a": "Watch him self-administer; he must know when it was given, when it will act, and when to expect a hypoglycemic reaction.",
            "rationale": "Teaching matters most with insulin. For newly diagnosed patients, watch them self-administer, and teach that timing is crucial: when it was given, when it will act (peak, duration, type) and when to expect a hypoglycemic reaction."
          },
          {
            "q": "A client with long-standing type 1 diabetes says at 1500, \"My sugar's about to drop.\" A fingerstick 20 minutes ago read 88. What is the best nursing action?",
            "a": "Take her seriously: recheck the glucose (within about 15 minutes) and be ready to treat hypoglycemia.",
            "rationale": "Long-time diabetics often know their bodies: if they say their sugar is about to drop, listen and recheck in 15 minutes. Symptoms can occur even above 70, especially in those who usually run high."
          }
        ]
      }
    },
    {
      "id": "w4-dm-hypo-sick",
      "name": "Hypoglycemia, Sick Days & Complications",
      "group": "week4",
      "badge": "Week 4",
      "clues": {
        "100": [
          {
            "q": "An alert client with diabetes is shaky, sweaty and irritable, and a fingerstick reads 58. She can swallow. Which is the best first treatment?",
            "a": "15 g of simple carbohydrate, such as 4 to 6 oz of orange juice or regular soda, 3 glucose tabs or 1 tablespoon of honey, then recheck in 15 minutes.",
            "rationale": "The rule of 15: confirm a glucose below 70, give 15 g of simple carbohydrate if awake and able to swallow, and recheck in 15 minutes. No candy bars: fat delays absorption."
          },
          {
            "q": "A client with diabetes asks why her feet need special attention when nothing hurts. What is the main reason?",
            "a": "Neuropathy causes loss of protective sensation, so a cut or a too-tight shoe can go unnoticed and turn into an ulcer.",
            "rationale": "Neuropathy affects about 60 to 70% and is the major contributor to amputation. Loss of protective sensation means injuries on the bottoms of the feet go unnoticed; ulcers can become neuro-ischemic and may not heal."
          }
        ],
        "200": [
          {
            "q": "A client is found unresponsive in bed. After the nurse confirms the airway, what is the next assessment?",
            "a": "Check the blood sugar.",
            "rationale": "With an unresponsive patient, after the airway, check the blood sugar: untreated hypoglycemia can cause seizures and death."
          },
          {
            "q": "A client with diabetes plans to go for a run. His glucose is 265. What should the nurse advise?",
            "a": "Don't exercise above 250 (or below 80); exercise is best after a meal.",
            "rationale": "Exercise is important but can lower blood sugar. Don't exercise below 80 or above 250; it's best after a meal, with a carbohydrate snack first if it's been over an hour since eating or before high-intensity exercise."
          }
        ],
        "300": [
          {
            "q": "A client with type 2 diabetes has a stomach virus at home and plans to skip his oral diabetes pills because he isn't eating much. What should the nurse teach?",
            "a": "Keep taking the medications, check sugar more often (every 2 to 4 hours), prevent dehydration, meet carbohydrate needs with food or liquids, and let the provider know he's sick.",
            "rationale": "Illness releases hormones that raise blood sugar, and sick patients are more prone to DKA or HHS. Sick-day teaching: tell the provider, check sugar more often, keep taking medications (oral meds work long-term), prevent dehydration, meet carbohydrate needs and rest."
          },
          {
            "q": "A client with diabetes who usually runs in the 200s reports shakiness and sweating with a glucose of 84. Another nurse says, \"84 is normal, she's fine.\" How should the nurse respond?",
            "a": "Patients can have hypoglycemia symptoms above 70, especially if they usually run high; treat the symptoms seriously and recheck.",
            "rationale": "Hypoglycemia is defined as below 70, but patients can have symptoms above 70, especially if they usually run high."
          }
        ],
        "400": [
          {
            "q": "A home-care client with type 1 diabetes and the flu calls. Which findings mean she should call her provider now? Choose from: urine positive for ketones, glucose 238, a fever not improving with Tylenol, sick for 3 days, mild thirst.",
            "a": "Urine positive for ketones, a fever not getting better with Tylenol, and illness lasting longer than 2 days.",
            "rationale": "Call the provider if: urine positive for ketones, blood sugar greater than 250, a fever not getting better with Tylenol, confusion or rapid breathing, ongoing vomiting or diarrhea, can't tolerate liquids, or illness lasting longer than 2 days. A glucose of 238 is below the 250 threshold."
          },
          {
            "q": "After 15 g of juice, a client's glucose rose from 54 to 66 at the 15-minute recheck. What should the nurse do next?",
            "a": "Repeat 15 g of simple carbohydrate and recheck in 15 minutes; once stable, give a regular meal.",
            "rationale": "The rule of 15: if still below 70 at the 15-minute recheck, repeat; once stable, eat a regular meal. 15 g should raise the sugar about 50 in 15 minutes."
          }
        ],
        "500": [
          {
            "q": "A hospitalized client after surgery has a glucose of 262 on a scheduled check and feels fine. A student wants to call the provider right away because \"over 250 means call.\" How should the nurse guide the student?",
            "a": "The over-250 call rule is home sick-day teaching; in the hospital, stress and surgery raise sugars, so the nurse follows the orders (such as the sliding scale) and looks at the whole picture.",
            "rationale": "The lecture warns that the sick-day call list is patient teaching for home; a hospitalized patient over 250 on a test question doesn't automatically mean \"call the provider.\" Stress and surgery push sugars higher than at home."
          },
          {
            "q": "A client with diabetes is lethargic, sweaty and barely responsive, with a glucose of 41. He cannot safely swallow. What should the nurse give?",
            "a": "IM glucagon or IV dextrose (25 to 50 mL); nothing by mouth.",
            "rationale": "The rule of 15 applies only if the patient is awake and able to swallow. Unresponsive or nearly passed out: IM glucagon or IV dextrose (25 to 50 mL). At home, a glucose gel under the tongue."
          }
        ]
      }
    },
    {
      "id": "w5-fractures-casts-traction",
      "name": "Fractures, Casts & Traction",
      "group": "week5",
      "badge": "Week 5",
      "clues": {
        "100": [
          {
            "q": "A client is scheduled for an MRI of a torn knee ligament. He has a metal plate from an old ankle surgery and is nervous about small spaces. Which finding is the priority to report before the scan?",
            "a": "The metal plate: metal in the body is a contraindication to MRI.",
            "rationale": "MRI uses magnetic waves and shows soft tissue and ligaments. No metal: metal in the body is a contraindication. Claustrophobia may be helped with a benzodiazepine, and loud ticking noises are expected."
          },
          {
            "q": "A client with a fractured jaw is going home with it wired shut. What must he have with him, and why?",
            "a": "Pliers (wire cutters), in case he vomits: airway trumps a healing mandible.",
            "rationale": "If a patient with a wired jaw vomits, they could aspirate, so they are often sent home with pliers just in case. Airway comes first."
          }
        ],
        "200": [
          {
            "q": "A client's plaster of Paris cast was just applied and is still wet. Which nursing actions are correct while it sets?",
            "a": "Handle it with the palms (no finger imprints), leave it uncovered so it can ventilate, and reposition every 1 to 2 hours.",
            "rationale": "Plaster is handled with wet palms so no finger imprints form while it sets, isn't covered until set (ventilation), and the patient is repositioned every 1 to 2 hours. The edges are petaled so they don't dig into the skin."
          },
          {
            "q": "A client in Buck's traction keeps sliding to the foot of the bed. Why does this happen with Buck's traction?",
            "a": "Buck's is running traction: a straight pull in one direction with no counter traction.",
            "rationale": "Buck's traction is the simplest form, a straight pull on the affected extremity: running traction, so the patient constantly slides down. Russell's traction pulls both ways (counter traction)."
          }
        ],
        "300": [
          {
            "q": "The nurse finds a client's traction weights resting on the floor after the bed was lowered. What is the problem, and what is the action?",
            "a": "Traction must be constant: the weights must hang free and the line of pull must not be interrupted. Restore the free-hanging weights.",
            "rationale": "Caring for a patient in traction: maintain constant traction with no interruption in the weights, keep the weights hanging free off the floor, and never let anything interrupt the line of pull."
          },
          {
            "q": "A client with skeletal traction pins has clear, thin drainage at one pin site and thick yellow drainage at another. How should the nurse interpret each, and how is pin care done?",
            "a": "Clear serous drainage is OK; purulent drainage likely means infection. Pin care is typically half-strength peroxide with a sterile swab, with no ointments.",
            "rationale": "Skeletal pins break the skin, so infection (even osteomyelitis) is the concern. Serous drainage is OK; purulent likely means infection. Pin care uses half-strength peroxide with a sterile swab; no ointments (they attract bacteria)."
          }
        ],
        "400": [
          {
            "q": "A client with a fractured femur will have an ORIF tomorrow. The provider wants to reduce his muscle spasms and immobilize the leg overnight. Which skin traction fits best, and how much weight can skin traction hold?",
            "a": "Buck's traction, a temporary measure before surgery; skin traction holds only 5 to 10 lb.",
            "rationale": "Buck's traction is temporary: for muscle spasms or immobilizing before surgery (buying time for swelling to go down before an ORIF). Skin traction is limited to 5 to 10 lb because the skin doesn't tolerate more."
          },
          {
            "q": "A client's arm cast was applied 3 hours ago. He now says the pain is getting worse even though he took his pain medicine, and his fingers feel tingly. What is the nurse's priority?",
            "a": "Recognize early neurovascular compromise (pain unrelieved by medication is the first sign) and notify the provider immediately.",
            "rationale": "The 5 P's: pain, pallor, pulselessness, paresthesia, paralysis. Pain increasing despite medication is the first sign. Swelling can rise inside a hard cast that won't expand, so checks are hourly for 24 hours and rising pain unrelieved by medication is reported immediately."
          }
        ],
        "500": [
          {
            "q": "An ED client has an open lower leg fracture after a motorcycle crash and is also confused. In what order should the nurse address: splinting the leg, airway/breathing/circulation, and a head injury check?",
            "a": "Airway, breathing and circulation first, then assess for a head injury, then splint the fracture in alignment, immobilize, elevate and apply a cold pack.",
            "rationale": "Emergency care for a fracture: ABCs and assess for a head injury, then splint as quickly as possible in normal body alignment, immobilize, elevate if possible and apply cold to reduce swelling."
          },
          {
            "q": "A client with severe osteoporosis fractured several ribs while coughing with pneumonia. A student calls it a stress fracture. How should the nurse classify it, and why?",
            "a": "A pathologic fracture: it happened when it normally wouldn't because of an underlying pathology (osteoporosis).",
            "rationale": "A pathologic fracture happens when it normally wouldn't because of an underlying pathology, such as bone cancer or osteoporosis; the lecture's example is ribs fractured by coughing. A stress fracture comes from repetitive stress, like a runner's foot."
          }
        ]
      }
    },
    {
      "id": "w5-fracture-complications-amputation",
      "name": "Fracture Complications & Amputations",
      "group": "week5",
      "badge": "Week 5",
      "clues": {
        "100": [
          {
            "q": "After an AKA, a client's dressing looks dry, but her heart rate has climbed from 84 to 118. What should the nurse check?",
            "a": "Slide a gloved hand under the residual limb: blood pools underneath by gravity where you can't see it.",
            "rationale": "Hemorrhage is the first concern after amputation. A rising heart rate compensates for lost stroke volume (CO = HR x SV), and blood pools under the limb where it can't be seen."
          },
          {
            "q": "Weeks after a BKA, a client says, \"My foot that isn't there is burning. Am I going crazy?\" How should the nurse respond?",
            "a": "Phantom limb pain is very real; it is treated with neuropathic analgesics and mirror therapy and usually fades within about a year.",
            "rationale": "Not everyone has phantom limb pain, but when they do it is very real. It is treated with neuropathic analgesics and mirror therapy and is usually self-limiting, lasting about a year."
          }
        ],
        "200": [
          {
            "q": "A client is learning to care for her residual limb after a BKA. When should the compression bandage be on, and how is it wrapped?",
            "a": "At all times except PT and bathing, in a figure-eight wrap.",
            "rationale": "The compression bandage shapes the limb for a prosthesis and promotes shrinkage: on at all times except PT and bathing, wrapped in a figure-eight so it doesn't restrict blood flow, reapplied as needed."
          },
          {
            "q": "A client is 1 day post-ORIF of the tibia with predictable, ongoing pain. How should pain medication be scheduled?",
            "a": "Around-the-clock dosing, with a proactive plan discussed at the start of the shift.",
            "rationale": "Fracture pain after an internal fixation is ongoing and predictable, so around-the-clock dosing is used. Be proactive: many patients don't ask. Non-drug measures supplement, not replace, medication."
          }
        ],
        "300": [
          {
            "q": "A client with an AKA likes to rest her residual limb up on a pillow for comfort. What complication is the nurse trying to prevent, and which positioning helps?",
            "a": "A hip flexion contracture; lying prone 30 minutes 4 times a day forces hip extension.",
            "rationale": "After an AKA, the residual limb tends to float up and flex the hip; a contracture keeps the patient from standing. Prone positioning 30 minutes 4 times a day helps. Elevating the limb on a pillow flexes the hip, and some providers don't allow it."
          },
          {
            "q": "A client 24 hours after an ORIF of a long bone has new confusion and apprehension. Lung sounds are clear and SpO2 is 95%. Why should the nurse still worry about a fat embolism?",
            "a": "Neurologic changes often precede the pulmonary signs of fat embolism by 6 to 12 hours.",
            "rationale": "Long bone fractures put patients at risk for fat embolism. Neurologic features (LOC changes, confusion, apprehension) often precede pulmonary features by 6 to 12 hours. Prompt surgical stabilization reduces it."
          }
        ],
        "400": [
          {
            "q": "Two hours after a casted tibia fracture, a client has severe leg pain that hasn't improved after two doses of IV opioid; the cast is not too tight on the outside. What emergency does the nurse suspect, and what procedure relieves it?",
            "a": "Compartment syndrome; a fasciotomy.",
            "rationale": "In compartment syndrome, swelling inside a compartment can't escape because the fascia won't budge, causing vascular compromise very quickly. The classic cue is severe pain not fixed with opioids. A fasciotomy opens the fascia to relieve it."
          },
          {
            "q": "A client with a femur fracture develops a respiratory rate of 30, HR 120, anxiety, SpO2 dropping to 88%, and tiny red-purple spots across the chest. What is likely happening, and what is the treatment focus?",
            "a": "Fat embolism syndrome; treatment is mainly supportive (oxygen, fluids).",
            "rationale": "Fat embolism red flags: rising respiratory rate, cyanosis, anxiety, tachycardia, falling O2 sat, chest pain, a petechial rash (chest, eyes) and fluffy shadows on the chest x-ray. Treatment is mainly supportive: oxygen and fluids."
          }
        ],
        "500": [
          {
            "q": "A client with years of uncontrolled diabetes and peripheral neuropathy has an infected foot ulcer, and the surgeon plans an amputation but leaves the wound bed open. Why is it left open, and what psychosocial need is likely given the circumstances?",
            "a": "An open (guillotine) amputation lets the infected area become aseptic before the edges are closed; as an elective amputation, the client may need support with anticipatory grieving.",
            "rationale": "Arterial insufficiency, uncontrolled diabetes and neuropathy are common reasons for amputation. An open (guillotine) amputation leaves the wound bed open until the infected area is aseptic. Elective (planned) amputations allow anticipatory grieving; traumatic ones don't."
          },
          {
            "q": "Prioritize these post-ORIF clients: (A) itching under a cast; (B) pain unrelieved by opioids with tense swelling; (C) serous pin drainage; (D) wants to use a coat hanger to scratch. Who is seen first, and what is taught to D?",
            "a": "Client B first (possible compartment syndrome, an emergency). Teach D that nothing goes inside the cast.",
            "rationale": "Compartment syndrome is an emergency: severe pain not fixed with opioids. Serous pin drainage is OK, and itching is expected while healing, but nothing goes inside a cast (no coat hangers) because of skin breakdown and infection risk."
          }
        ]
      }
    },
    {
      "id": "w5-joint-spine",
      "name": "Joint & Spine Surgery",
      "group": "week5",
      "badge": "Week 5",
      "clues": {
        "100": [
          {
            "q": "A client is 1 day after a total knee replacement and doesn't want to bend his knee. Which device may the provider order to keep the joint moving?",
            "a": "A continuous passive motion (CPM) machine.",
            "rationale": "After a knee replacement, restoring strength, muscle tone and range of motion is the priority. A patient who can't or won't do their own ROM may go on a CPM machine, which moves the leg continuously at a set range and speed."
          },
          {
            "q": "A client who had a myelogram an hour ago wants to sit up to watch TV. What should the nurse tell him?",
            "a": "Lie flat for the ordered period to prevent a spinal headache, and drink plenty of fluids.",
            "rationale": "After a myelogram, the patient lies flat for a period of time to prevent a spinal headache and is encouraged to drink fluids to clear the contrast. An intractable spinal headache can be treated with a blood patch."
          }
        ],
        "200": [
          {
            "q": "A client had a posterior-approach total hip replacement. Which movements must she avoid?",
            "a": "Extreme internal rotation (big toes turned in), adduction (crossing legs or ankles) and flexion past 90°.",
            "rationale": "With a posterior approach, the muscle is cut, so dislocation is possible until the joint is firm: avoid extreme internal rotation, adduction and flexion past 90°. An elevated toilet seat and an abduction pillow help."
          },
          {
            "q": "After a laminectomy, a client needs to turn to his side. How should the nursing team turn him?",
            "a": "Log roll with three people; the person at the head holds it stable and calls the count.",
            "rationale": "After back surgery the patient initially lies flat, and turning is by log roll to keep alignment without twisting: three people, with the person at the head holding the head stable and calling the count."
          }
        ],
        "300": [
          {
            "q": "A client had an anterior-approach hip replacement. His roommate had a posterior approach and has an abduction pillow and a raised toilet seat. The client asks if he needs the same restrictions. What should the nurse explain?",
            "a": "No: with the anterior approach the muscle stays intact, and the only restriction is hyperextension (drawing the leg back, as in a lunge).",
            "rationale": "The anterior approach leaves the muscle intact for a more stable hip; the only restriction is hyperextension. The posterior-approach restrictions and equipment don't apply, which is why the nurse must know which approach the patient had."
          },
          {
            "q": "A client's ORIF for a hip fracture is complete, and he's surprised that he has no hip range-of-motion limits like his friend with a hip replacement. What limitation does he have?",
            "a": "Limited weight bearing for about 6 to 12 weeks.",
            "rationale": "A hip fracture fixed with an ORIF (not a replacement) doesn't carry the replacement's range-of-motion restrictions; the only limitation is limited weight bearing for 6 to 12 weeks."
          }
        ],
        "400": [
          {
            "q": "Day 2 after a total hip replacement, a client reports new calf pain and swelling in the operative leg. Which complication does the nurse suspect first, and why is it so likely?",
            "a": "Venous thromboembolism (DVT, which can lead to PE), the number one post-op complication of joint replacement, from manipulation of the bone.",
            "rationale": "The number one post-op complication of a joint replacement is VTE (DVT/PE), from manipulation of the bone. Peripheral neurovascular checks distal to the joint are also always done."
          },
          {
            "q": "After a spinal fusion with an iliac crest bone graft, a client has a new headache and clear, light-yellow fluid on the back dressing. What does the nurse suspect, and which other site needs monitoring?",
            "a": "A CSF leak; also monitor the iliac crest donor site (plus neurovascular checks).",
            "rationale": "After back surgery, a CSF leak shows as a headache with clear, light-yellow drainage. Nursing care includes peripheral neurovascular checks and monitoring a donor site such as the iliac crest."
          }
        ],
        "500": [
          {
            "q": "A client with a herniated lumbar disc and sciatic pain asks why the provider wants to try other treatments before surgery. Which conservative measures may be tried first?",
            "a": "A brace or corset; heat, ice and massage; possibly traction; a TENS unit; NSAIDs, short-term narcotics and muscle relaxants; and back and core strengthening.",
            "rationale": "Conservative measures come first: brace or corset, local heat and ice, massage, possibly traction, a TENS unit, NSAIDs, short-term narcotics, muscle relaxants and core exercises. Surgery (laminectomy, microsurgical discectomy, spinal fusion) follows if these fail."
          },
          {
            "q": "A client going home after a microsurgical discectomy asks how to get into the car and how long she can sit at her desk. What teaching is correct?",
            "a": "Avoid twisting (move the body as a unit getting in and out of the car), and avoid sitting or standing for long periods until healed.",
            "rationale": "After back surgery: no sitting or standing for long periods until healed and avoid twisting, including teaching how to get in and out of the car. A microsurgical discectomy removes part of the disc to decompress the nerve root."
          }
        ]
      }
    },
    {
      "id": "w5-osteomyelitis-osteoporosis",
      "name": "Osteomyelitis, Osteoporosis & Bone Tests",
      "group": "week5",
      "badge": "Week 5",
      "clues": {
        "100": [
          {
            "q": "A client is taking alendronate for osteoporosis. Which instructions prevent its key complication?",
            "a": "Take it with water on an empty stomach and stay upright for 30 minutes afterward to prevent esophagitis.",
            "rationale": "Alendronate is taken with water on an empty stomach, and the patient stays upright for 30 minutes to prevent esophagitis."
          },
          {
            "q": "A 67-year-old woman with no fractures asks whether she needs a bone density (DEXA) scan. What should the nurse tell her?",
            "a": "Yes: all women over 65 should have one.",
            "rationale": "Bone density scans are recommended for all women over 65, women under 65 with risk factors in addition to menopause, anyone on long-term steroids, to measure the response to osteoporosis drugs, and men with risk factors. It's noninvasive and painless."
          }
        ],
        "200": [
          {
            "q": "A client with diabetes and a chronic foot wound has constant bone pain in the foot that gets worse with walking and doesn't improve with rest, plus fever and night sweats. What does the nurse suspect?",
            "a": "Acute osteomyelitis (a bone infection).",
            "rationale": "Acute osteomyelitis: local constant bone pain that worsens with activity and isn't relieved by rest, swelling, warmth and restricted movement, plus systemic fever, chills and night sweats. Diabetes and chronic wounds are risk factors."
          },
          {
            "q": "A client is scheduled for a bone scan. He's worried about the radioactive injection. What should the nurse teach?",
            "a": "The radioisotope is not harmful; it's given about 2 hours before an hour-long scan of lying still, and he should drink plenty of fluids afterward.",
            "rationale": "For a bone scan, a radioisotope is given about 2 hours before; the procedure takes about an hour of lying still. Teach that it's not harmful, and force fluids afterward."
          }
        ],
        "300": [
          {
            "q": "A client's foot x-ray is normal 4 days after symptoms of a bone infection began, and he asks if that means he doesn't have osteomyelitis. What should the nurse explain?",
            "a": "X-rays don't change until about 10 days after the infection starts; other tests (biopsy, cultures, WBC, ESR, bone scan, MRI) help diagnose it.",
            "rationale": "In osteomyelitis, x-rays don't show changes until about 10 days in. Diagnosis uses bone and tissue biopsy, wound and blood cultures, an elevated WBC and ESR, a bone scan with increased uptake, and MRI."
          },
          {
            "q": "A client is choosing a calcium supplement for osteoporosis prevention. Which teaching is correct?",
            "a": "Calcium carbonate or citrate, preferably chewable, taken with food, along with vitamin D.",
            "rationale": "Calcium supplements (carbonate or citrate) are recommended chewable and taken with food; mega doses are hard to absorb. Vitamin D is always recommended with calcium."
          }
        ],
        "400": [
          {
            "q": "A 70-year-old woman has lost 2 inches of height, has a rounded upper back, and has had a vertebral fracture with no major injury. She smokes and has taken steroids for 6 months. How should the nurse connect these cues?",
            "a": "Osteoporosis: compression fractures cause kyphosis and height loss; smoking and steroids for 3 months or more are risk factors.",
            "rationale": "Osteoporosis is a silent disease affecting the wrist, hip and vertebrae. Porous vertebrae collapse (compression fractures), causing kyphosis and height loss. Risks include steroids for 3 months or more, smoking, excess alcohol, low calcium, low weight and lack of load-bearing exercise."
          },
          {
            "q": "A client with chronic osteomyelitis is going home with a central line. His wife asks why he can't just take pills. What is the reason for the treatment plan?",
            "a": "Blood doesn't reach bone well, so the infection is hard to treat; it needs vigorous IV antibiotics, often by central line, plus possible debridement or antibiotic beads.",
            "rationale": "Circulating blood doesn't reach bone well, so osteomyelitis is hard to treat. Treatment includes vigorous IV antibiotics (likely through a central line, often at home), wound debridement, antibiotic beads near the bone and pain control."
          }
        ],
        "500": [
          {
            "q": "A client's bone scan shows decreased uptake in the femoral head, while another client's shows increased uptake in the tibia with fever and a high ESR. What does each finding suggest?",
            "a": "Decreased uptake: avascular necrosis (bone died from lack of blood flow). Increased uptake with fever and high ESR: osteomyelitis.",
            "rationale": "On a bone scan, increased uptake is seen with osteomyelitis, osteoporosis, bone malignancies and certain fractures; decreased uptake is seen with avascular necrosis. ESR is elevated with chronic inflammation such as osteomyelitis."
          },
          {
            "q": "Lab results: Client A, a healing fracture, has a high alkaline phosphatase. Client B, with renal disease, has a low calcium. A student expects Client B's phosphorus to be low too. What should the nurse explain?",
            "a": "Phosphorus is inversely related to calcium, so B's phosphorus would be expected to rise. A high alkaline phosphatase (from osteoblasts) fits a healing fracture.",
            "rationale": "Alkaline phosphatase is made by osteoblasts and is elevated with a healing fracture, bone cancer and osteoporosis. Calcium is low with renal disease and hypoparathyroidism, and phosphorus is inversely related to calcium."
          }
        ]
      }
    },
    {
      "id": "w5-oa-ra",
      "name": "OA & RA",
      "group": "week5",
      "badge": "Week 5",
      "clues": {
        "100": [
          {
            "q": "A 64-year-old's knee pain worsens through the day with use, improves with rest, and her morning stiffness eases within a few minutes of moving. Her ESR is normal. Which disorder fits?",
            "a": "Osteoarthritis.",
            "rationale": "OA pain worsens with use and is initially relieved by rest; morning stiffness resolves quickly (under 30 minutes); it's local with no systemic signs, and the ESR is normal unless there's synovial inflammation."
          },
          {
            "q": "A 35-year-old has had fatigue, weight loss and poor appetite for months, now with symmetric swelling of the knuckles and wrists and morning stiffness lasting hours. Which disorder fits?",
            "a": "Rheumatoid arthritis.",
            "rationale": "RA is autoimmune, symmetrical and systemic: early fatigue, anorexia and weight loss, then joint pain with prolonged morning stiffness, in the PIP and MCP joints, wrists and feet."
          }
        ],
        "200": [
          {
            "q": "A client with mild to moderate OA knee pain and no inflammation asks which over-the-counter pain reliever to try first, and how much is safe. What should the nurse say?",
            "a": "Acetaminophen first, limited to 3 g a day (it's hepatotoxic).",
            "rationale": "Acetaminophen is the drug of choice for mild to moderate OA pain without synovitis. 3 g daily is the limit; 4 g only if limited duration and medically supervised, monitoring liver function."
          },
          {
            "q": "A client with RA has dry, gritty eyes, a dry mouth and burns easily in the sun. Which extra-articular problem do these cues suggest?",
            "a": "Sjögren's syndrome.",
            "rationale": "Sjögren's syndrome occurs in about 1 in 10 with RA: diminished tears and saliva (dry gritty eyes, dry mouth) and marked photosensitivity. It's also seen with lupus."
          }
        ],
        "300": [
          {
            "q": "A client with newly diagnosed RA asks why the provider is rushing to start methotrexate when ibuprofen helps her pain. What should the nurse explain?",
            "a": "DMARDs like methotrexate reduce and prevent joint damage, and they work best started early; NSAIDs relieve pain but don't reduce long-term damage.",
            "rationale": "Time is of the essence in RA: DMARDs reduce inflammation and prevent joint damage, and methotrexate improves symptoms in 4 to 6 weeks but is much less effective if delayed. NSAIDs give more immediate relief but don't reduce long-term damage."
          },
          {
            "q": "A client with OA has had 4 steroid knee injections this year and wants another. What should the nurse explain?",
            "a": "Injections are limited to 3 or 4 a year because frequent injections damage the joint (and carry infection risk).",
            "rationale": "Steroid joint injections give temporary, unpredictable relief, carry infection risk and can cause a brief flare; frequent injections damage the joint, so no more than 3 or 4 a year. Systemic steroids aren't given for OA."
          }
        ],
        "400": [
          {
            "q": "A client with OA has been on ibuprofen for months for knee pain. Which adverse effects should the nurse monitor, and what drug might the provider switch to for GI problems?",
            "a": "Kidney function, bleeding and GI ulcers; a COX-2 inhibitor such as celecoxib.",
            "rationale": "NSAIDs are nephrotoxic, increase bleeding times and cause ulcers. Celecoxib, a COX-2 inhibitor, inhibits only COX-2 and is used for patients with GI side effects (COX-1 inhibition causes much of the side effects)."
          },
          {
            "q": "A client with an RA flare asks how to use heat and cold at home and how much she should rest. What teaching fits RA care?",
            "a": "Alternate heat and cold, 20 minutes or less; rest inflamed joints but keep up fitness, with 8 to 10 hours of sleep plus a nap and regular low-impact exercise like swimming.",
            "rationale": "RA care balances rest of inflamed joints with physical fitness: 8 to 10 hours of sleep plus a nap, regular exercise (swimming, cycling, walking), splints, and heat and cold, most effective alternating and limited to 20 minutes or less."
          }
        ],
        "500": [
          {
            "q": "Two clients have hand deformities. Client A has hard bony nodes at the finger tips (DIP joints) and a squared-off thumb base. Client B has fingers deviating toward the little-finger side with swan-neck changes. Match each, and name a lab that would help confirm B.",
            "a": "A: osteoarthritis (Heberden's nodes). B: rheumatoid arthritis (ulnar deviation, swan neck); ACPA (anti-CCP), which is more specific than RF.",
            "rationale": "OA: Heberden's and Bouchard's nodes, DIP joints and squaring of the thumb; no biomarkers. RA: ulnar deviation, subluxation, swan neck, boutonnière, Z-thumb; RF is positive in 80% but not specific, while ACPA is more specific and may be positive very early."
          },
          {
            "q": "A client with RA started methotrexate 2 weeks ago and takes ibuprofen around the clock. She asks how long she'll be on each, and her provider also prescribed a short prednisone course. What should the nurse explain?",
            "a": "Methotrexate is the ongoing disease-modifying drug; the NSAID is a bridge that is stopped once the DMARD works (about 4 to 6 weeks); the steroid is used short term at the lowest dose for the shortest time.",
            "rationale": "NSAIDs must be taken continuously for several weeks for the anti-inflammatory effect and are discontinued once the DMARDs are working; methotrexate improves symptoms in 4 to 6 weeks. Steroids are used short term, early, at the least possible dose for the shortest time."
          }
        ]
      }
    },
    {
      "id": "w5-gout-sle",
      "name": "Gout & SLE",
      "group": "week5",
      "badge": "Week 5",
      "clues": {
        "100": [
          {
            "q": "A client wakes at 0400 with a red, hot, swollen great toe so painful that the bedsheet touching it hurts. Which disorder fits, and what comfort measure helps?",
            "a": "An acute gout flare; keep the sheets off the toes with a small tent (bed cradle), no socks.",
            "rationale": "Gouty arthritis flares are intensely painful, usually in the great toe in the early morning; even bedsheets hurt. Nursing care includes a tent to keep sheets off the toes, pain control and immobilizing the joint."
          },
          {
            "q": "A 28-year-old woman has a rash across her cheeks and nose after sun exposure, joint aches, painless mouth sores and exhausting fatigue, though she \"looks fine.\" Which disorder fits?",
            "a": "Systemic lupus erythematosus (SLE).",
            "rationale": "SLE is the \"look good, feel bad\" disease: autoimmune and multisystem, mostly in women aged 20 to 40, with photosensitivity, a butterfly rash in about half, polyarthralgia, painless oral and nasal ulcers and debilitating fatigue."
          }
        ],
        "200": [
          {
            "q": "A client with acute gout asks which medicine will work fastest on this attack. What should the nurse expect?",
            "a": "Colchicine, which usually gives dramatic relief within a day (NSAIDs are also used).",
            "rationale": "Colchicine is used for acute gout attacks and usually gives dramatic relief within a day; NSAIDs such as ibuprofen are also used. Allopurinol is for preventing recurrent flares."
          },
          {
            "q": "A client with SLE asks why she should take her temperature every day at home. What is the purpose?",
            "a": "An unexplained fever can signal an impending lupus exacerbation.",
            "rationale": "Unexplained fever is a feature of SLE; daily temperatures help catch an impending exacerbation. Infections also cause flares, and low WBCs raise the infection risk."
          }
        ],
        "300": [
          {
            "q": "A client with recurrent gout flares is starting allopurinol and wants to stop it after a week because he had another flare. What should the nurse explain?",
            "a": "Allopurinol is prophylactic and takes 2 to 6 weeks to decrease flares; it isn't for the acute attack.",
            "rationale": "Allopurinol prevents recurrent flares and takes 2 to 6 weeks to work. Acute attacks are treated with colchicine or NSAIDs."
          },
          {
            "q": "A client with lupus has rising BUN and creatinine, a falling urine output and new swelling around her eyes. Which complication does the nurse suspect?",
            "a": "Lupus nephritis.",
            "rationale": "About 4 in 10 with SLE develop kidney complications within 5 years. Monitor BUN, creatinine and urine output; watch for leg and periorbital edema. The urinalysis may show proteinuria, hematuria and casts."
          }
        ],
        "400": [
          {
            "q": "A client with gout asks whether a strict low-purine diet will cure it. He is overweight, drinks beer nightly and eats a lot of red meat. Which teaching is best?",
            "a": "A strict low-purine diet lowers urate only 15 to 20%. Weight loss, cutting beer and spirits, getting protein from low-fat dairy and plants instead of red meat, and medication matter more.",
            "rationale": "Weight loss decreases gout. Teach protein from low-fat dairy and plant sources (not red meat and fish), avoiding sugary drinks, organ meats, beer and distilled spirits. A strict low-purine diet lowers urate only 15 to 20%, so most patients still need medication."
          },
          {
            "q": "A client with SLE has a platelet count and WBC count that are both low, plus anemia. Which two safety risks should the nurse prioritize, and what teaching follows?",
            "a": "Bleeding (low platelets) and infection (low WBC); teach infection avoidance (infections cause flares) and bleeding precautions, and space out activities for fatigue.",
            "rationale": "Pancytopenia in SLE (anemia, low platelets, low WBC) brings risk for fatigue, bleeding and infection. Teaching includes avoiding infections, which cause flares, and spacing out activities with extra rest."
          }
        ],
        "500": [
          {
            "q": "A client with lupus on prednisone becomes confused, can't concentrate and then has a seizure. Which complication should the nurse suspect, and why is neuro monitoring important?",
            "a": "Lupus cerebritis; monitor neuro status because lupus can cause brain fog, confusion and seizures, and steroids can also cause mental changes.",
            "rationale": "Lupus cerebritis causes brain fog, difficulty concentrating, confusion, depression, headache and seizures. Monitoring neuro status matters because steroids can also cause mental changes."
          },
          {
            "q": "A client with SLE is doing well on hydroxychloroquine and low-dose prednisone and plans a beach vacation, an end to her pills (\"I feel cured\") and a pregnancy next year. What teaching does she need?",
            "a": "Avoid sunlight (a trigger); never stop the drugs abruptly, since lupus doesn't go away; and get pregnancy counseling before becoming pregnant.",
            "rationale": "SLE teaching: avoid triggers such as sunlight, don't stop the drugs abruptly, avoid infections, understand that lupus doesn't go away, and get pregnancy counseling beforehand. Hydroxychloroquine is the cornerstone; prednisone is kept under 7.5 mg a day and tapered."
          }
        ]
      }
    }
  ]
};
