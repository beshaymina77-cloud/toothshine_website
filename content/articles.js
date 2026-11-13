/* =====================================================================
   ARTICLES — مقالات مركز أسنان شاين (المدونة)
   ---------------------------------------------------------------------
   To add an article: copy one block, change slug/date/text, run
   `node build.js`. Newest date appears first.
   • slug     → page address /articles/<slug>/ (English letters, dashes)
   • service  → related service slug (adds a link + contact button)
   • reviewedBy → fill ONLY after the dentist has reviewed the text,
                  e.g. { ar: "د. بشاي مينا", en: "Dr. Beshay Mina" }
   • body blocks: ["h2", text] · ["p", text] · ["ul", [items]]
   ===================================================================== */

module.exports = [
  {
    slug: "smoking-diabetes-dental-implants",
    date: "2026-11-11",
    service: "dental-implants",
    reviewedBy: null,
    title: {
      ar: "هل التدخين أو السكر بيمنعوا زراعة الأسنان؟",
      en: "Do smoking or diabetes rule out dental implants?",
    },
    excerpt: {
      ar: "التدخين والسكر من أكتر الأسئلة قبل الزراعة. الإجابة المختصرة: غالبًا مش موانع مطلقة، لكنهم عوامل خطر لازم تتقيّم وتتظبط قبل العلاج.",
      en: "Smoking and diabetes are among the most common questions before implants. Short answer: usually not absolute barriers, but risk factors that must be assessed and managed first.",
    },
    body: {
      ar: [
        ["p", "كتير من المرضى بيسألوا: «أنا مدخّن» أو «عندي سكر»، ينفع أعمل زراعة؟ الفرق المهم هنا بين «مانع» يعني الزراعة مش مناسبة، و«عامل خطر» يعني الزراعة ممكنة لكن احتمال المضاعفات أعلى، ومحتاجة تحضير ومتابعة أدق."],
        ["h2", "التدخين: عامل خطر مش مانع مطلق"],
        ["p", "الدراسات بتربط التدخين بزيادة احتمال فشل الزرعات والتهاب الأنسجة حوالين الزرعة، لأنه بيأثر على الدورة الدموية والتئام اللثة والعظم. ده مش معناه إن المدخّن ممنوع من الزراعة، لكن معناه إن:"],
        ["ul", ["الطبيب هيشرح لك المخاطر بوضوح قبل القرار.", "يُنصح بالتوقف عن التدخين أو تقليله قدر الإمكان قبل الجراحة وبعدها.", "المتابعة الدورية ونظافة الفم بيبقوا أهم من العادي."]],
        ["h2", "السكر: الأهم هو مدى انتظامه"],
        ["p", "مريض السكر المنتظم غالبًا يقدر يعمل زراعة بعد التقييم. أما السكر غير المنتظم فبيزوّد احتمال بطء الالتئام والعدوى وفشل الزرعة. عشان كده الطبيب ممكن يطلب تحليل حديث يوضح انتظام السكر، وأحيانًا بيتم التنسيق مع طبيب الباطنة قبل الجراحة."],
        ["h2", "حالات تانية لازم تبلّغ عنها الطبيب"],
        ["ul", ["أدوية هشاشة العظام (زي البيسفوسفونات أو الدينوسوماب).", "علاج إشعاعي سابق في منطقة الرأس والرقبة.", "أدوية السيولة وأمراض القلب.", "الحمل، لأن الجراحات الاختيارية غالبًا بتتأجل."]],
        ["p", "دي مش بالضرورة موانع، لكنها بتغيّر طريقة التخطيط والاحتياطات. ماتوقفش أي دواء من نفسك."],
        ["h2", "الخلاصة"],
        ["p", "القرار بيتاخد بعد استشارة وتقييم: تاريخك الطبي، الأشعة، حالة اللثة والعظم، وعاداتك. الهدف إنك تفهم فرص النجاح والمخاطر الخاصة بحالتك قبل ما تبدأ."],
      ],
      en: [
        ["p", "Many patients ask: “I smoke” or “I have diabetes” — can I still have implants? The key distinction is between a contraindication, meaning implants are not suitable, and a risk factor, meaning implants are possible but complications are more likely and closer preparation and follow-up are needed."],
        ["h2", "Smoking: a risk factor, not an absolute barrier"],
        ["p", "Research links smoking with a higher chance of implant failure and inflammation around implants, because it affects blood supply and healing of gum and bone. This does not automatically exclude smokers, but it means:"],
        ["ul", ["Your dentist will explain the risks clearly before you decide.", "Stopping or reducing smoking before and after surgery is strongly advised.", "Regular reviews and good oral hygiene matter even more."]],
        ["h2", "Diabetes: control is what matters"],
        ["p", "People with well-controlled diabetes can usually have implants after assessment. Poorly controlled diabetes increases the risk of slow healing, infection and implant failure. Your dentist may ask for a recent test showing your diabetes control, and sometimes coordinates with your physician before surgery."],
        ["h2", "Other conditions to mention"],
        ["ul", ["Osteoporosis medications (such as bisphosphonates or denosumab).", "Previous radiotherapy to the head and neck.", "Blood thinners and heart conditions.", "Pregnancy, as elective surgery is usually postponed."]],
        ["p", "These are not necessarily contraindications, but they change planning and precautions. Never stop a medication on your own."],
        ["h2", "In summary"],
        ["p", "The decision follows a consultation and assessment of your medical history, X-rays, gum and bone condition, and habits, so you understand the chances of success and the risks specific to you before you start."],
      ],
    },
  },

  {
    slug: "missing-tooth-what-happens",
    date: "2026-11-10",
    service: "dental-implants",
    reviewedBy: null,
    title: {
      ar: "إيه اللي بيحصل لما تسيب مكان سنة مخلوعة من غير تعويض؟",
      en: "What happens if a missing tooth is not replaced?",
    },
    excerpt: {
      ar: "فقدان سنة واحدة ممكن يبان بسيط، لكن مع الوقت ممكن يأثر على الأسنان المجاورة والعظم والمضغ. اعرف ليه التعويض في الوقت المناسب بيفرق.",
      en: "Losing one tooth can seem minor, but over time it may affect neighbouring teeth, bone and chewing. Here is why timely replacement matters.",
    },
    body: {
      ar: [
        ["p", "بعد خلع سنة، ناس كتير بتأجل التعويض لأن المكان مش ظاهر أو مش بيوجع. لكن الفراغ ده ممكن يعمل تغييرات تدريجية في الفم."],
        ["h2", "التغييرات اللي ممكن تحصل"],
        ["ul", ["ميلان الأسنان المجاورة ناحية الفراغ.", "نزول أو طلوع السنة المقابلة في الفك التاني.", "نقص تدريجي في عظم الفك مكان السنة لأنه مابقاش بيتحمّل ضغط مضغ.", "صعوبة في المضغ والضغط على الناحية التانية من الفم.", "في حالة فقد أسنان كتير، ممكن يتأثر شكل الوش ودعم الشفايف."]],
        ["p", "سرعة التغيير بتختلف من شخص للتاني، ومش كل الحالات بيحصل فيها كل ده."],
        ["h2", "اختيارات التعويض"],
        ["p", "الاختيارات الأساسية: الزرعة، أو الجسر (الكوبري) الثابت، أو الطقم المتحرك. الزرعة مابتعتمدش على برد الأسنان المجاورة وبتنقل ضغط المضغ للعظم، لكنها محتاجة عظم كفاية وتقييم صحي. الجسر أسرع غالبًا لكنه بيعتمد على تحضير الأسنان اللي جنب الفراغ. الطبيب بيشرح لك مميزات وقيود كل اختيار لحالتك."],
        ["h2", "إمتى أبدأ؟"],
        ["p", "أفضل وقت تتكلم فيه عن التعويض هو قبل الخلع أو بعده بفترة قصيرة، عشان الخطة تراعي العظم والأسنان المجاورة من البداية."],
      ],
      en: [
        ["p", "After an extraction, many people delay replacement because the gap is not visible or not painful. But the space can lead to gradual changes in the mouth."],
        ["h2", "Changes that may happen"],
        ["ul", ["Neighbouring teeth tilting into the gap.", "The opposing tooth drifting up or down.", "Gradual loss of jawbone where the tooth was, as it no longer receives chewing forces.", "Chewing difficulty and overloading the other side.", "With several missing teeth, changes in facial support and lip profile."]],
        ["p", "The pace of change varies, and not every case shows all of these."],
        ["h2", "Replacement options"],
        ["p", "The main options are an implant, a fixed bridge, or a removable denture. An implant does not rely on preparing neighbouring teeth and transfers chewing forces to the bone, but needs enough bone and a health assessment. A bridge is often quicker but depends on preparing the teeth beside the gap. Your dentist explains the pros and limits of each for your case."],
        ["h2", "When should I start?"],
        ["p", "The best time to discuss replacement is before the extraction or shortly after, so the plan considers bone and neighbouring teeth from the start."],
      ],
    },
  },

  {
    slug: "zirconia-vs-emax",
    date: "2026-11-09",
    service: "cosmetic-restorative-dentistry",
    reviewedBy: null,
    title: {
      ar: "زيركون ولا إي ماكس؟ إزاي بتتختار خامة التركيبة",
      en: "Zirconia or E.max? How the crown material is chosen",
    },
    excerpt: {
      ar: "الزيركون والإي ماكس من أشهر خامات التركيبات من غير معدن. الفرق بينهم في القوة والشفافية ومكان استخدامهم، والاختيار بيعتمد على كل سنة.",
      en: "Zirconia and E.max are two of the most popular metal-free materials. They differ in strength, translucency and ideal use, and the choice depends on each tooth.",
    },
    body: {
      ar: [
        ["p", "لما تحتاج تاج أو قشرة أو جسر، غالبًا هتسمع عن الزيركون والإي ماكس. الاتنين خامات سيراميك من غير معدن، ولكل واحدة مميزات."],
        ["h2", "الزيركون (Zirconia)"],
        ["ul", ["قوي جدًا ومقاوم للكسر.", "مناسب غالبًا للأسنان الخلفية والجسور.", "الأنواع الحديثة منه شكلها طبيعي أكتر من زمان."]],
        ["h2", "الإي ماكس (E.max)"],
        ["ul", ["سيراميك زجاجي بيتميز بالشفافية القريبة من السنة الطبيعية.", "غالبًا بيُفضّل في الأسنان الأمامية والقشور.", "قوي، لكنه أقل من الزيركون في الأحمال العالية."]],
        ["h2", "إيه اللي بيحدد الاختيار؟"],
        ["ul", ["مكان السنة: أمامية ولا خلفية.", "قوة الإطباق وعادات زي الضغط على الأسنان.", "لون السنة اللي تحت التركيبة والأسنان المجاورة.", "نوع التركيبة: تاج مفرد، قشرة، أو جسر."]],
        ["p", "التسجيل الرقمي بالماسح الضوئي بيساعد في نقل تفاصيل الأسنان للمعمل. وفي النهاية الطبيب بيرشح الخامة الأنسب لكل سنة بعد الفحص."],
      ],
      en: [
        ["p", "When you need a crown, veneer or bridge, you will likely hear about Zirconia and E.max. Both are metal-free ceramics, each with its strengths."],
        ["h2", "Zirconia"],
        ["ul", ["Very strong and fracture resistant.", "Often suited to back teeth and bridges.", "Modern versions look more natural than older ones."]],
        ["h2", "E.max"],
        ["ul", ["A glass-ceramic known for translucency close to natural enamel.", "Often preferred for front teeth and veneers.", "Strong, though less so than Zirconia under heavy loads."]],
        ["h2", "What decides the choice?"],
        ["ul", ["Tooth position: front or back.", "Bite forces and habits such as clenching.", "The colour of the underlying tooth and neighbouring teeth.", "Restoration type: single crown, veneer or bridge."]],
        ["p", "Digital scanning helps transfer precise detail to the lab. Ultimately, the dentist recommends the best material for each tooth after examination."],
      ],
    },
  },
];
