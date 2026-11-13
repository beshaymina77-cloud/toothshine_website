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
  {
    slug: "clear-aligners-who-are-they-for",
    date: "2026-11-13",
    service: "orthodontics",
    reviewedBy: null,
    title: { ar: "التقويم الشفاف: مناسب لمين؟ وإيه المطلوب منك؟", en: "Clear aligners: who are they for, and what do they ask of you?" },
    excerpt: {
      ar: "التقويم الشفاف قوالب شفافة بتتغير على مراحل وبتحرك الأسنان بهدوء. مناسب لحالات كتير، لكن نجاحه معتمد على التزامك بلبسه.",
      en: "Clear aligners are transparent trays changed in stages to move teeth gradually. They suit many cases, but success depends on wearing them as instructed.",
    },
    body: {
      ar: [
        ["p", "التقويم الشفاف (Clear Aligners) من أحدث طرق تقويم الأسنان. بدل السلك والبراكتس، بتلبس مجموعة قوالب شفافة، كل قالب بيحرك الأسنان خطوة صغيرة، وبتغيّره على مراحل حسب خطة الطبيب."],
        ["h2", "إزاي بيتخطط؟"],
        ["ul", ["كشف وأشعة لتقييم الأسنان والعظم واللثة.", "مسح رقمي للأسنان بالماسح الضوئي داخل الفم.", "تخطيط حركة الأسنان على الكمبيوتر، وبعدها تصنيع القوالب."]],
        ["h2", "مناسب لمين؟"],
        ["p", "مناسب لحالات كتير زي الزحام البسيط والمتوسط والفراغات وبعض مشاكل العضة. بعض الحالات المعقدة بيكون التقويم الثابت فيها أنسب، والطبيب بيحدد ده بعد الكشف."],
        ["h2", "إيه المطلوب منك؟"],
        ["ul", ["تلبس القوالب أغلب ساعات اليوم، غالبًا حوالي 20 إلى 22 ساعة، حسب تعليمات الطبيب.", "تشيلها بس وقت الأكل وتنظيف الأسنان.", "تنضف أسنانك قبل ما ترجّع القوالب.", "تلتزم بمواعيد المتابعة."]],
        ["p", "لو القوالب ماتلبستش المدة المطلوبة، الأسنان ممكن ماتتحركش زي ما هو مخطط، والعلاج ممكن ياخد وقت أطول."],
      ],
      en: [
        ["p", "Clear aligners are one of the newest ways to straighten teeth. Instead of wires and brackets, you wear a series of clear trays; each moves the teeth a small step, and you change them in stages according to the dentist's plan."],
        ["h2", "How is treatment planned?"],
        ["ul", ["Examination and X-rays to assess the teeth, bone and gums.", "A digital scan with the intraoral scanner.", "Planning tooth movement on the computer, then making the aligners."]],
        ["h2", "Who are they for?"],
        ["p", "They suit many cases, such as mild to moderate crowding, gaps and some bite problems. Some complex cases are better treated with fixed braces; the dentist decides after the examination."],
        ["h2", "What do they ask of you?"],
        ["ul", ["Wear the aligners for most of the day, usually about 20 to 22 hours, as instructed.", "Remove them only to eat and to clean your teeth.", "Clean your teeth before putting the aligners back.", "Keep your follow-up appointments."]],
        ["p", "If aligners are not worn as required, teeth may not move as planned and treatment may take longer."],
      ],
    },
  },
  {
    slug: "orthodontics-for-adults",
    date: "2026-11-13",
    service: "orthodontics",
    reviewedBy: null,
    title: { ar: "تقويم الأسنان للكبار: هل فات الأوان؟", en: "Orthodontics for adults: is it too late?" },
    excerpt: {
      ar: "التقويم مش للأطفال بس. الكبار يقدروا يعملوا تقويم طالما الأسنان واللثة والعظم بحالة مناسبة.",
      en: "Orthodontics is not only for children. Adults can have treatment as long as the teeth, gums and bone are in suitable health.",
    },
    body: {
      ar: [
        ["p", "ناس كتير فاكرة إن التقويم لازم يتعمل في سن صغير. الحقيقة إن الأسنان ممكن تتحرك في أي سن، طالما اللثة والعظم حواليها بصحة كويسة."],
        ["h2", "إيه الفرق عند الكبار؟"],
        ["ul", ["العلاج ممكن ياخد وقت أطول شوية من الأطفال والمراهقين.", "لازم اللثة تكون سليمة قبل البداية، ولو فيه التهاب بيتعالج الأول.", "أحيانًا التقويم بيكون جزء من خطة أكبر، زي تجهيز مكان لزرعة أو تركيبات."]],
        ["h2", "التقويم الشفاف والكبار"],
        ["p", "كتير من الكبار بيفضلوا التقويم الشفاف لأنه شبه مش باين وبيتشال وقت الأكل. ده مناسب لحالات كتير، والطبيب بيحدد الأنسب ليك بعد الكشف."],
        ["p", "أول خطوة: كشف وأشعة، علشان نعرف حالة الأسنان واللثة والعظم ونشرح لك الاختيارات المتاحة."],
      ],
      en: [
        ["p", "Many people think orthodontics must be done young. In fact teeth can move at any age, as long as the gums and bone around them are healthy."],
        ["h2", "What is different for adults?"],
        ["ul", ["Treatment may take a little longer than in children and teenagers.", "Gums must be healthy before starting; any inflammation is treated first.", "Orthodontics is sometimes part of a larger plan, such as creating space for an implant or restorations."]],
        ["h2", "Clear aligners and adults"],
        ["p", "Many adults prefer clear aligners because they are nearly invisible and removable for meals. They suit many cases, and the dentist recommends the best option after an examination."],
        ["p", "The first step is an examination and X-rays, to assess the teeth, gums and bone and explain the options."],
      ],
    },
  },
  {
    slug: "retainer-after-orthodontics",
    date: "2026-11-13",
    service: "orthodontics",
    reviewedBy: null,
    title: { ar: "المثبّت بعد التقويم: ليه مهم؟", en: "The retainer after orthodontics: why it matters" },
    excerpt: {
      ar: "بعد ما التقويم يخلص، الأسنان بيكون عندها ميل ترجع لمكانها القديم. المثبّت هو اللي بيحافظ على النتيجة.",
      en: "After orthodontics, teeth tend to drift back. The retainer is what keeps the result.",
    },
    body: {
      ar: [
        ["p", "نهاية التقويم مش نهاية العلاج. الأنسجة اللي حوالين الأسنان بتاخد وقت علشان تتأقلم على المكان الجديد، وفي الفترة دي الأسنان ممكن ترجع تتحرك."],
        ["h2", "أنواع المثبّت"],
        ["ul", ["مثبّت ثابت: سلك رفيع بيتلصق من ورا الأسنان.", "مثبّت متحرك: قالب شفاف أو جهاز بيتلبس حسب تعليمات الطبيب."]],
        ["h2", "هلبسه قد إيه؟"],
        ["p", "المدة وطريقة اللبس بيحددها الطبيب حسب حالتك. كتير من المرضى بيحتاجوا يلبسوا المثبّت لفترة طويلة، خصوصًا بالليل، علشان النتيجة تفضل ثابتة."],
        ["h2", "نصايح سريعة"],
        ["ul", ["ماتوقفش لبس المثبّت من غير ما تسأل الطبيب.", "نضفه بانتظام زي ما الطبيب شرح لك.", "لو اتكسر أو بقى مش مظبوط، احجز متابعة بسرعة."]],
      ],
      en: [
        ["p", "The end of braces or aligners is not the end of treatment. The tissues around the teeth need time to adapt to the new positions, and during that time teeth can move again."],
        ["h2", "Types of retainer"],
        ["ul", ["Fixed retainer: a thin wire bonded behind the teeth.", "Removable retainer: a clear tray or appliance worn as instructed."]],
        ["h2", "How long will I wear it?"],
        ["p", "The duration and wear pattern are set by the dentist for your case. Many patients need to wear a retainer long-term, often at night, to keep the result stable."],
        ["h2", "Quick tips"],
        ["ul", ["Do not stop wearing your retainer without asking the dentist.", "Clean it regularly as shown.", "If it breaks or stops fitting, book a check-up promptly."]],
      ],
    },
  },
];
