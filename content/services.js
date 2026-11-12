/* =====================================================================
   SERVICES — محتوى صفحات الخدمات
   • featured: true  → shown as a main service on the homepage.
   • rank            → order of main services (1 = first tab).
   • slug            → the page address: /services/<slug>/
   • tech            → ids from content/technology.js used in this service.
   Clinical wording is intentionally general and measured. Every
   treatment decision follows an individual clinical assessment.
   ===================================================================== */

module.exports = [
  /* ------------------------------------------------------------------ */
  {
    slug: "orthodontics",
    featured: true,
    rank: 2,                 // order on the homepage (1 = first)
    icon: "aligner",
    title: { ar: "تقويم الأسنان", en: "Orthodontics" },
    kicker: { ar: "تقويم ثابت وتقويم شفاف", en: "Braces & clear aligners" },
    short: {
      ar: "تنظيم الأسنان وتحسين الإطباق بالتقويم الثابت أو التقويم الشفاف، والاختيار المناسب بيتحدد بعد التقييم.",
      en: "Straightening teeth and improving the bite with fixed braces or clear aligners, chosen after an orthodontic assessment.",
    },
    meta: {
      ar: "تقويم الأسنان والتقويم الشفاف في الإسكندرية – فرعي سبورتينج والعجمي. تقييم شامل لتحديد نوع التقويم المناسب لحالتك.",
      en: "Orthodontics and clear aligners in Alexandria – Sporting and Agami branches. A full assessment to decide which option suits you.",
    },
    intro: {
      ar: [
        "التقويم بيساعد على ترتيب الأسنان وتحسين طريقة تقابل الفك العلوي مع السفلي. ده بيفرق في الشكل، وكمان في سهولة تنظيف الأسنان وتوزيع الضغط عليها أثناء المضغ.",
        "في مركز أسنان شاين بنقدّم التقويم الثابت والتقويم الشفاف (Clear Aligners). التقويم الشفاف مناسب لحالات كتير لكن مش لكل الحالات، وعشان كده القرار بيكون بعد الكشف والأشعة ودراسة الحالة.",
      ],
      en: [
        "Orthodontic treatment aligns the teeth and improves how the upper and lower jaws meet. This affects appearance, and also how easy the teeth are to clean and how biting forces are shared.",
        "At Tooth Shine we offer fixed braces and clear aligners. Clear aligners suit many cases but not all of them, so the choice is made after an examination, X-rays and case analysis.",
      ],
    },
    reasons: {
      ar: ["أسنان مزدحمة أو متداخلة", "فراغات بين الأسنان", "بروز الأسنان الأمامية أو رجوعها لورا", "عدم انطباق الأسنان بشكل مريح عند العض", "الرغبة في ابتسامة أكثر انتظامًا قبل التركيبات التجميلية"],
      en: ["Crowded or overlapping teeth", "Gaps between teeth", "Protruding or retruded front teeth", "A bite that does not meet comfortably", "Wishing to align teeth before cosmetic restorations"],
    },
    assessment: {
      ar: ["كشف على الأسنان واللثة والفكين", "أشعة مناسبة للحالة", "تسجيل الأسنان بالماسح الرقمي أو بالطبعة", "شرح الخيارات المتاحة ومدة العلاج المتوقعة وطريقة المتابعة"],
      en: ["Examination of the teeth, gums and jaws", "X-rays suited to the case", "Recording the teeth with the intraoral scanner or an impression", "Explaining the available options, expected duration and follow-up"],
    },
    tech: ["scanner", "xray"],
    techniques: {"title": {"ar": "أنواع التقويم وخطوات العلاج", "en": "Types of treatment and how it works"}, "lead": {"ar": "الاختيار بين التقويم الثابت والشفاف بيتحدد بعد الكشف، حسب نوع الحالة ودرجتها وقدرتك على الالتزام.", "en": "Choosing between fixed braces and clear aligners is decided after examination, based on the type and complexity of the case and your ability to commit."}, "items": [{"icon": "aligner", "name": "Fixed braces", "title": {"ar": "التقويم الثابت", "en": "Fixed braces"}, "body": {"ar": "براكتس صغيرة بتتلصق على الأسنان وسلك بيحرّكها تدريجيًا. مناسب لمعظم الحالات، ومنها الحالات المعقدة، ومش محتاج المريض يشيله ويركّبه.", "en": "Small brackets bonded to the teeth with a wire that moves them gradually. Suits most cases, including complex ones, and does not rely on the patient removing it."}}, {"icon": "sparkle", "name": "Clear aligners", "title": {"ar": "التقويم الشفاف", "en": "Clear aligners"}, "body": {"ar": "مجموعة قوالب شفافة بتتغيّر كل فترة، وكل قالب بيحرّك الأسنان خطوة صغيرة. شكله شبه مش باين وبيتشال وقت الأكل والتنظيف.", "en": "A series of clear trays changed at intervals, each moving the teeth a small step. Nearly invisible and removed for eating and cleaning."}}, {"icon": "pen", "name": "Digital planning", "title": {"ar": "التخطيط الرقمي", "en": "Digital planning"}, "body": {"ar": "في التقويم الشفاف حركة الأسنان بتتخطط على الكمبيوتر قبل البداية، وبتشوف شكل تقريبي للنتيجة المتوقعة، وده توقع مش ضمان.", "en": "With clear aligners, tooth movement is planned on the computer before starting, showing an approximate expected result. This is a projection, not a guarantee."}}, {"icon": "shield", "name": "Retention", "title": {"ar": "التثبيت بعد التقويم", "en": "Retention"}, "body": {"ar": "بعد ما التقويم يخلص لازم مثبّت (ثابت أو متحرك) عشان الأسنان متحاولش ترجع مكانها، والالتزام بيه مهم جدًا.", "en": "After treatment a retainer (fixed or removable) is needed so the teeth do not drift back, and wearing it as advised is essential."}}]},
    compare: {"title": {"ar": "ثابت ولا شفاف؟", "en": "Fixed or clear?"}, "cols": [{"ar": "", "en": ""}, {"ar": "التقويم الثابت", "en": "Fixed braces"}, {"ar": "التقويم الشفاف", "en": "Clear aligners"}], "rows": [[{"ar": "الشكل", "en": "Appearance"}, {"ar": "باين (في أنواع بلون السنة)", "en": "Visible (tooth-coloured options exist)"}, {"ar": "شبه مش باين", "en": "Nearly invisible"}], [{"ar": "الحالات المناسبة", "en": "Suitable cases"}, {"ar": "معظم الحالات، ومنها المعقدة", "en": "Most cases, including complex ones"}, {"ar": "حالات كتير لكن مش كلها", "en": "Many cases, but not all"}], [{"ar": "الالتزام المطلوب", "en": "Commitment"}, {"ar": "ثابت في الفم، والالتزام بالمواعيد والتنظيف", "en": "Stays in place; attend reviews and keep it clean"}, {"ar": "لازم يتلبس حوالي 20–22 ساعة في اليوم", "en": "Must be worn about 20–22 hours a day"}], [{"ar": "الأكل والتنظيف", "en": "Eating & cleaning"}, {"ar": "تجنب الأكل الناشف واللزج، والتنظيف محتاج مجهود أكتر", "en": "Avoid hard and sticky food; cleaning takes more effort"}, {"ar": "بيتشال وقت الأكل والتفريش", "en": "Removed for eating and brushing"}]], "note": {"ar": "المدة والنتيجة بيختلفوا من حالة للتانية، والطبيب بيوضحهم بعد دراسة حالتك.", "en": "Duration and results vary between cases; the dentist explains them after studying yours."}},
    figures: [{"src": "assets/img/illustrations/clear-aligner.webp", "alt": {"ar": "قالب تقويم شفاف فوق نموذج للأسنان", "en": "A clear aligner tray above a dental model"}, "caption": {"ar": "التقويم الشفاف: قوالب شفافة بتتغيّر على مراحل لتحريك الأسنان تدريجيًا.", "en": "Clear aligners: transparent trays changed in stages to move teeth gradually."}}],
    faqs: [
      {
        q: { ar: "هل التقويم الشفاف ينفع لكل الحالات؟", en: "Are clear aligners suitable for everyone?" },
        a: {
          ar: "لا. التقويم الشفاف مناسب لعدد كبير من الحالات، لكن بعض الحالات بتحتاج تقويم ثابت أو علاج مختلف. الطبيب بيحدد ده بعد الكشف والأشعة.",
          en: "No. Clear aligners suit many cases, but some need fixed braces or a different approach. The dentist decides after the examination and X-rays.",
        },
      },
      {
        q: { ar: "هل في سن معين للتقويم؟", en: "Is there an age limit for orthodontics?" },
        a: {
          ar: "التقويم ممكن للأطفال والكبار طالما الأسنان واللثة بحالة صحية مناسبة. توقيت العلاج عند الأطفال بيتحدد حسب نمو الفك وظهور الأسنان.",
          en: "Orthodontic treatment is possible for children and adults as long as the teeth and gums are healthy. In children, timing depends on jaw growth and tooth eruption.",
        },
      },
      {
        q: { ar: "العلاج بياخد قد إيه؟", en: "How long does treatment take?" },
        a: {
          ar: "المدة بتختلف حسب الحالة والتزام المريض بالتعليمات والمتابعة. الطبيب بيوضح لك مدة تقريبية بعد دراسة حالتك.",
          en: "Duration varies with the case and with following instructions and appointments. The dentist gives an estimated timeline after studying your case.",
        },
      },
      { q: {"ar": "لو مالبستش التقويم الشفاف المدة المطلوبة يحصل إيه؟", "en": "What if I don't wear my aligners enough?"}, a: {"ar": "الأسنان مش هتتحرك زي المخطط، والعلاج ممكن يطوّل أو يحتاج قوالب جديدة. الالتزام بعدد الساعات هو أهم عامل لنجاح التقويم الشفاف.", "en": "The teeth will not move as planned, and treatment may take longer or need new trays. Wearing them for the advised hours is the single most important factor."} },
      { q: {"ar": "ليه لازم ألبس مثبّت بعد التقويم؟", "en": "Why do I need a retainer after treatment?"}, a: {"ar": "لأن الأسنان عندها ميل طبيعي إنها ترجع لمكانها القديم، خصوصًا في الشهور الأولى. الطبيب بيحدد نوع المثبّت ومدة لبسه.", "en": "Because teeth naturally tend to move back, especially in the first months. The dentist decides the type of retainer and how long to wear it."} },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "dental-implants",
    showImplantSystems: true,   // shows the "international implant systems" section (list in config/business.js)
    featured: true,
    rank: 1,                 // order on the homepage (1 = first)
    icon: "implant",
    title: { ar: "زراعة الأسنان", en: "Dental Implants" },
    kicker: { ar: "استشارة وتخطيط للزراعة", en: "Consultation & treatment planning" },
    short: {
      ar: "تعويض الأسنان المفقودة بزرعات تُثبَّت في عظم الفك، بعد تقييم العظم والصحة العامة ووضع خطة واضحة.",
      en: "Replacing missing teeth with implants placed in the jawbone, after assessing the bone and general health and agreeing a clear plan.",
    },
    meta: {
      ar: "زراعة الأسنان في الإسكندرية – سبورتينج والعجمي مع د. بشاي مينا، عضو ITI وESOI: زراعة بالدليل الجراحي، بدون فتح لثة، زراعة فورية وتحميل فوري في الحالات المناسبة.",
      en: "Dental implants in Alexandria – Sporting and Agami with Dr. Beshay Mina, ITI and ESOI member: guided, flapless and immediate implants, and immediate loading in suitable cases.",
    },
    intro: {
      ar: [
        "الزرعة هي جذر صناعي صغير (غالبًا من التيتانيوم) بتتثبّت في عظم الفك مكان جذر السنة المفقودة، وبعد ما تلتحم بالعظم بيتركّب عليها تاج أو جسر أو طقم ثابت.",
        "نجاح الزراعة بيعتمد على التخطيط قبل أي خطوة: كمية العظم وجودته، صحة اللثة، الصحة العامة، والعادات زي التدخين. عشان كده أول زيارة بتكون استشارة وتقييم، ونشرح لك الخيارات المناسبة لحالتك وخطواتها بوضوح.",
        "في الحالات المناسبة بنستخدم التخطيط الرقمي والدليل الجراحي (Surgical Guide) لتحديد مكان الزرعة بدقة قبل الجراحة، وبنتعامل مع أكثر من نظام زراعة عالمي يتم اختياره حسب الحالة وبعد مناقشته معاك.",
      ],
      en: [
        "An implant is a small post (usually titanium) placed in the jawbone in place of a missing tooth's root. Once it integrates with the bone, a crown, bridge or fixed prosthesis is attached to it.",
        "Implant success depends on planning before any step: bone volume and quality, gum health, general health and habits such as smoking. So the first visit is a consultation and assessment, where we explain the options that suit your case and each step clearly.",
        "In suitable cases we use digital planning and a surgical guide to position the implant precisely before surgery, and we work with several international implant systems, chosen for each case and discussed with you.",
      ],
    },
    reasons: {
      ar: ["فقدان سنة واحدة أو أكثر", "عدم الارتياح مع الطقم المتحرك", "الرغبة في بديل ثابت لا يعتمد على برد الأسنان المجاورة", "سنة غير قابلة للعلاج ومحتاجة تتخلع وتتعوّض"],
      en: ["One or more missing teeth", "Discomfort with a removable denture", "Wanting a fixed option that does not rely on preparing neighbouring teeth", "A tooth that cannot be saved and needs replacing"],
    },
    assessment: {
      ar: ["مراجعة التاريخ الطبي والأدوية", "فحص الفم واللثة والأسنان المجاورة", "أشعة مناسبة، وقد يُطلب تصوير مقطعي (CBCT) لتقييم العظم", "مناقشة البدائل: زرعة، جسر، أو طقم، ومميزات وقيود كل اختيار", "خطة علاج مكتوبة بالخطوات والتكلفة بعد التقييم"],
      en: ["Reviewing your medical history and medications", "Examining the mouth, gums and neighbouring teeth", "Suitable X-rays; a CBCT scan may be requested to assess the bone", "Discussing alternatives (implant, bridge or denture) and the pros and limits of each", "A written treatment plan with steps and cost after the assessment"],
    },
    techniques: {
      title: { ar: "تقنيات الزراعة في العيادة", en: "Implant techniques we offer" },
      lead: {
        ar: "مش كل تقنية تنفع لكل حالة. الطبيب بيختار المناسب لك بعد الفحص، وبيشرحلك السبب.",
        en: "Not every technique suits every case. The dentist chooses what fits yours after the examination and explains why.",
      },
      items: [
        {
          icon: "scanner",
          name: "Guided Implant Surgery",
          title: { ar: "الزراعة بالدليل الجراحي", en: "Guided implant surgery" },
          body: {
            ar: "مكان الزرعة وزاويتها وعمقها بيتخططوا على الكمبيوتر قبل الجراحة، وبعدين دليل جراحي مصمم لحالتك بينقل الخطة دي للفم بدقة.",
            en: "The implant position, angle and depth are planned on the computer before surgery, then a custom surgical guide transfers that plan to the mouth accurately.",
          },
        },
        {
          icon: "sparkle",
          name: "Flapless Surgery",
          title: { ar: "الزراعة بدون فتح لثة", en: "Flapless implant placement" },
          body: {
            ar: "الزرعة بتتحط من فتحة صغيرة في اللثة من غير شق ورفع لثة، وده ممكن يقلل التورم والألم بعدها. بتنفع لما يكون العظم واللثة مناسبين.",
            en: "The implant is placed through a small opening in the gum without cutting and lifting a flap, which can mean less swelling afterwards. Suitable when bone and gum allow.",
          },
        },
        {
          icon: "implant",
          name: "Immediate Implant",
          title: { ar: "الزراعة الفورية بعد الخلع", en: "Immediate implant placement" },
          body: {
            ar: "الزرعة بتتحط في نفس جلسة خلع السنة بدل ما نستنى شهور، بشرط إن المكان يكون خالي من التهاب نشط وفيه عظم كفاية لثبات الزرعة.",
            en: "The implant is placed in the same visit as the extraction instead of waiting months, provided the site has no active infection and enough bone to hold the implant firmly.",
          },
        },
        {
          icon: "clock",
          name: "Immediate Loading",
          title: { ar: "التحميل الفوري (سنة مؤقتة سريعة)", en: "Immediate loading" },
          body: {
            ar: "تركيب سنة مؤقتة على الزرعة خلال وقت قصير من الجراحة لما يكون ثبات الزرعة كافي. السنة النهائية بتتركب بعد التحام الزرعة بالعظم.",
            en: "A temporary tooth is fitted on the implant soon after surgery when the implant is stable enough. The final tooth is fitted after the implant has integrated with the bone.",
          },
        },
      ],
    },
    tech: ["xray", "scanner", "anesthesia"],
    figures: [{"src": "assets/img/illustrations/implant-parts.webp", "alt": {"ar": "رسم ثلاثي الأبعاد لأجزاء زراعة الأسنان: الزرعة في العظم والدعامة والتاج", "en": "3D illustration of dental implant parts: implant in the bone, abutment and crown"}, "caption": {"ar": "أجزاء الزرعة: الزرعة (الجذر الصناعي) جوه العظم، ثم الدعامة، ثم التاج.", "en": "Implant parts: the implant (artificial root) in the bone, the abutment, then the crown."}}, {"src": "assets/img/illustrations/guided-implant-planning.webp", "alt": {"ar": "دليل جراحي شفاف على نموذج فك مع تخطيط رقمي لأماكن الزرعات", "en": "Clear surgical guide on a jaw model with digital implant planning"}, "caption": {"ar": "الزراعة بالدليل الجراحي: أماكن الزرعات بتتخطط رقميًا، والدليل بينقل الخطة للفم.", "en": "Guided surgery: implant positions are planned digitally and the guide transfers the plan to the mouth."}}],
    faqs: [
      {
        q: { ar: "هل زراعة الأسنان مؤلمة؟", en: "Is implant placement painful?" },
        a: {
          ar: "الزراعة بتتم تحت تخدير موضعي. بعد الجراحة ممكن يكون في تورم أو ألم بسيط لأيام، والطبيب بيوصف لك اللي يساعدك وبيشرح التعليمات.",
          en: "Implants are placed under local anaesthesia. Some swelling or mild discomfort for a few days afterwards is common, and the dentist prescribes what helps and explains aftercare.",
        },
      },
      {
        q: { ar: "هل أي حد ينفع يعمل زراعة؟", en: "Can anyone have implants?" },
        a: {
          ar: "معظم البالغين ممكن يعملوا زراعة، لكن بعض الحالات الصحية أو الأدوية أو التدخين ممكن تأثر على النتيجة أو تحتاج تحضير خاص. ده بيتحدد في الاستشارة.",
          en: "Most adults can have implants, but some medical conditions, medications or smoking can affect the outcome or need extra preparation. This is assessed at the consultation.",
        },
      },
      {
        q: { ar: "التركيبة بتتركب إمتى بعد الزرعة؟", en: "When is the tooth fitted on the implant?" },
        a: {
          ar: "غالبًا بعد فترة التحام الزرعة بالعظم، وفي حالات مختارة ممكن تركيب مؤقت في وقت أقرب. الطبيب بيوضح التوقيت المناسب لحالتك.",
          en: "Usually after the implant has integrated with the bone; in selected cases a temporary tooth can be fitted earlier. The dentist explains the right timing for your case.",
        },
      },
      {
        q: { ar: "هل التدخين مانع لزراعة الأسنان؟", en: "Does smoking rule out implants?" },
        a: {
          ar: "التدخين مش مانع مطلق، لكنه عامل خطر معروف: بيزوّد احتمال فشل الزرعة والتهاب الأنسجة حواليها لأنه بيأثر على الالتئام. يُنصح بالتوقف عنه أو تقليله قدر الإمكان قبل الجراحة وبعدها، والطبيب بيشرح لك المخاطر الخاصة بحالتك.",
          en: "Smoking is not an absolute contraindication, but it is a well-known risk factor: it raises the chance of implant failure and inflammation around the implant by affecting healing. Stopping or reducing smoking before and after surgery is advised, and your dentist explains your specific risks.",
        },
      },
      {
        q: { ar: "هل مرض السكر مانع للزراعة؟", en: "Does diabetes rule out implants?" },
        a: {
          ar: "مريض السكر المنتظم غالبًا يقدر يعمل زراعة بعد التقييم. السكر غير المنتظم بيزوّد احتمال بطء الالتئام والعدوى، فالطبيب ممكن يطلب تحليل حديث لانتظام السكر أو ينسّق مع طبيب الباطنة قبل الجراحة.",
          en: "People with well-controlled diabetes can usually have implants after assessment. Poorly controlled diabetes increases the risk of slow healing and infection, so your dentist may request a recent test of diabetes control or coordinate with your physician before surgery.",
        },
      },
      {
        q: { ar: "باخد أدوية هشاشة عظام أو سيولة، ينفع أعمل زراعة؟", en: "I take osteoporosis medication or blood thinners. Can I have implants?" },
        a: {
          ar: "بلّغ الطبيب بكل الأدوية قبل الاستشارة. بعض أدوية هشاشة العظام (زي البيسفوسفونات والدينوسوماب) وأدوية السيولة محتاجة تقييم واحتياطات خاصة، وأحيانًا تنسيق مع الطبيب المعالج. ماتوقفش أي دواء من نفسك.",
          en: "Tell your dentist about all medications before the consultation. Some osteoporosis drugs (such as bisphosphonates and denosumab) and blood thinners need special assessment and precautions, sometimes with your physician. Never stop a medication on your own.",
        },
      },
      {
        q: { ar: "لو العظم ضعيف أو قليل، أقدر أعمل زراعة؟", en: "What if I don't have enough bone?" },
        a: {
          ar: "التصوير المقطعي (CBCT) بيوضح كمية العظم. في حالات كتير ممكن الزراعة تتم مع ترقيع عظم أو رفع جيب أنفي، أو باختيار زرعة بمقاس مناسب. الطبيب بيشرح لك الاختيار الأنسب وخطواته ومدته.",
          en: "A CBCT scan shows the available bone. In many cases implants are still possible with bone grafting, a sinus lift, or a suitably sized implant. Your dentist explains the best option, its steps and timeline.",
        },
      },
      {
        q: { ar: "هل في سن معين للزراعة؟", en: "Is there an age limit for implants?" },
        a: {
          ar: "الزراعة بتتعمل بعد اكتمال نمو الفك. ومفيش حد أقصى للسن في حد ذاته، الأهم هو الصحة العامة وحالة العظم واللثة.",
          en: "Implants are placed once jaw growth is complete. There is no upper age limit as such; general health and bone and gum condition matter more.",
        },
      },
      {
        q: { ar: "الزرعة بتعيش قد إيه؟ وإزاي أحافظ عليها؟", en: "How long do implants last, and how do I care for them?" },
        a: {
          ar: "الزرعات ممكن تخدم سنين طويلة، لكن ده مش مضمون لكل الحالات. أهم حاجة: التفريش، تنظيف ما بين الأسنان، الإقلاع عن التدخين، والمتابعة الدورية عشان نكتشف أي التهاب حوالين الزرعة بدري.",
          en: "Implants can serve for many years, though this cannot be guaranteed for every case. What matters most: brushing, cleaning between teeth, avoiding smoking, and regular reviews to catch any inflammation around the implant early.",
        },
      },
      {
        q: { ar: "ينفع أركب أسنان ثابتة على زرعات لو فاقد كل أسناني؟", en: "Can I have fixed teeth on implants if I have lost all my teeth?" },
        a: {
          ar: "في حالات كتير أيوه: إما تركيبة ثابتة على عدد من الزرعات، أو طقم متحرك بيثبت على زرعات (Overdenture). الاختيار بيعتمد على العظم والتوقعات، وبيتحدد بعد التقييم.",
          en: "Often yes: either a fixed prosthesis on several implants, or a removable denture that clips onto implants (overdenture). The choice depends on bone and expectations, and is decided after assessment.",
        },
      },
      {
        q: { ar: "ليه مفيش أسعار للزراعة على الموقع؟", en: "Why are there no implant prices on the website?" },
        a: {
          ar: "لأن التكلفة بتختلف حسب عدد الزرعات، ونظام الزراعة، والحاجة لترقيع عظم، ونوع التركيبة. بعد الاستشارة بنقدّم لك خطة مكتوبة بالتكلفة، وبنوضح الفرق بين الأنظمة المتاحة.",
          en: "Because cost depends on the number of implants, the implant system, any need for bone grafting, and the type of restoration. After the consultation we provide a written plan with costs and explain the differences between available systems.",
        },
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "cosmetic-restorative-dentistry",
    featured: true,
    rank: 3,                 // order on the homepage (1 = first)
    icon: "crown",
    title: { ar: "تركيبات وتجميل الأسنان", en: "Restorative & Cosmetic Dentistry" },
    kicker: { ar: "زيركون · إي ماكس · تجميل الابتسامة", en: "Zirconia · E.max · Smile design" },
    short: {
      ar: "تيجان وجسور وقشور من الزيركون والإي ماكس لإصلاح الأسنان المكسورة أو الضعيفة وتحسين شكل الابتسامة.",
      en: "Zirconia and E.max crowns, bridges and veneers to restore broken or weakened teeth and improve the smile.",
    },
    meta: {
      ar: "تركيبات زيركون وإي ماكس وتجميل الأسنان في الإسكندرية – سبورتينج والعجمي. تخطيط رقمي وشرح واضح للخيارات.",
      en: "Zirconia and E.max restorations and cosmetic dentistry in Alexandria – Sporting and Agami. Digital planning and clear explanation of options.",
    },
    intro: {
      ar: [
        "التركيبات بتعيد للسنة شكلها ووظيفتها لما تكون مكسورة أو ضعيفة أو متغيرة اللون، أو بتعوّض سنة مفقودة عن طريق جسر. والتجميل بيهتم بتناسق شكل الأسنان ولونها مع الوجه والابتسامة.",
        "من أهم الخامات اللي بنستخدمها: الزيركون (Zirconia) وهو خامة قوية مناسبة لحالات كتير خصوصًا الأسنان الخلفية والجسور، والإي ماكس (E.max) وهو سيراميك بيتميز بالشفافية الطبيعية وغالبًا بيُفضَّل في الأسنان الأمامية. اختيار الخامة بيعتمد على مكان السنة وحالتها والإطباق.",
      ],
      en: [
        "Restorations bring back the shape and function of a tooth that is broken, weakened or discoloured, or replace a missing tooth with a bridge. Cosmetic dentistry focuses on how the teeth's shape and colour harmonise with the face and smile.",
        "Key materials we use include Zirconia, a strong material suited to many cases, especially back teeth and bridges, and E.max, a glass-ceramic valued for its natural translucency and often preferred for front teeth. The material is chosen according to the tooth's position, condition and bite.",
      ],
    },
    reasons: {
      ar: ["سنة مكسورة أو فيها حشو كبير", "سنة بعد علاج العصب محتاجة حماية", "تغيّر لون لا يستجيب للتبييض", "عدم تناسق شكل أو مقاس الأسنان الأمامية", "تعويض سنة مفقودة بجسر ثابت"],
      en: ["A broken tooth or one with a large filling", "A root-treated tooth that needs protection", "Discolouration that does not respond to whitening", "Uneven shape or size of front teeth", "Replacing a missing tooth with a fixed bridge"],
    },
    assessment: {
      ar: ["فحص الأسنان واللثة والإطباق", "أشعة للتأكد من سلامة الجذور والعظم", "صور وتسجيل رقمي للأسنان بالماسح الضوئي", "مناقشة الشكل واللون المطلوبين والخامة المناسبة", "خطة واضحة بعدد الجلسات والتكلفة"],
      en: ["Examining the teeth, gums and bite", "X-rays to check the roots and bone", "Photos and a digital scan of the teeth", "Discussing the desired shape, shade and suitable material", "A clear plan with number of visits and cost"],
    },
    techniques: {
      title: { ar: "الزيركون والإي ماكس: إمتى نستخدم كل واحد؟", en: "Zirconia and E.max: when we use each" },
      lead: {
        ar: "الاتنين سيراميك من غير معدن. الاختيار بيعتمد على مكان السنة، والإطباق، ولون السنة اللي تحت، وشكل الابتسامة المطلوب.",
        en: "Both are metal-free ceramics. The choice depends on the tooth's position, the bite, the colour of the underlying tooth and the smile you want.",
      },
      items: [
        {
          icon: "crown",
          name: "Zirconia",
          title: { ar: "الزيركون", en: "Zirconia" },
          body: {
            ar: "خامة قوية جدًا ومقاومة للكسر. مناسبة غالبًا للأسنان الخلفية، والجسور، والتركيبات على الزرعات، والمرضى اللي عندهم ضغط قوي على الأسنان. الأنواع الحديثة بقت أفتح وأقرب للون الطبيعي.",
            en: "Very strong and fracture-resistant. Often suited to back teeth, bridges, implant crowns and patients with a heavy bite. Newer types are more translucent and closer to natural colour.",
          },
        },
        {
          icon: "veneer",
          name: "E.max (Lithium Disilicate)",
          title: { ar: "الإي ماكس", en: "E.max" },
          body: {
            ar: "سيراميك زجاجي شفافيته قريبة جدًا من السنة الطبيعية، وبيتلصق على السنة بمادة لاصقة، وده بيسمح أحيانًا بتحضير أقل. مناسب غالبًا للأسنان الأمامية والقشور والتيجان المفردة.",
            en: "A glass-ceramic whose translucency closely resembles natural enamel. It is bonded to the tooth, which sometimes allows more conservative preparation. Often suited to front teeth, veneers and single crowns.",
          },
        },
        {
          icon: "sparkle",
          name: "Shade matching",
          title: { ar: "اختيار اللون", en: "Shade matching" },
          body: {
            ar: "اللون بيتحدد بدليل ألوان وصور للأسنان في إضاءة مناسبة، وبيتنقل للمعمل بالتفاصيل عشان التركيبة تبان طبيعية جنب أسنانك.",
            en: "The shade is chosen with a shade guide and photos in suitable lighting, and passed to the lab in detail so the restoration blends with your natural teeth.",
          },
        },
        {
          icon: "doc",
          name: "Workflow",
          title: { ar: "خطوات التركيبة", en: "How it is made" },
          body: {
            ar: "فحص وأشعة ← تحضير السنة ← طبعة أو تسجيل رقمي ← تركيبة مؤقتة ← تجربة التركيبة النهائية ولصقها ← متابعة الإطباق.",
            en: "Examination and X-rays → tooth preparation → impression or digital record → temporary → try-in and cementation of the final restoration → bite check.",
          },
        },
      ],
    },
    compare: {
      title: { ar: "مقارنة سريعة", en: "Quick comparison" },
      cols: [{ ar: "", en: "" }, { ar: "الزيركون", en: "Zirconia" }, { ar: "الإي ماكس", en: "E.max" }],
      rows: [
        [{ ar: "القوة", en: "Strength" }, { ar: "أعلى", en: "Higher" }, { ar: "عالية", en: "High" }],
        [{ ar: "الشفافية والشكل الطبيعي", en: "Translucency & natural look" }, { ar: "جيدة (أفضل في الأنواع الحديثة)", en: "Good (better in newer types)" }, { ar: "ممتازة", en: "Excellent" }],
        [{ ar: "الاستخدام الأشهر", en: "Typical use" }, { ar: "أسنان خلفية، جسور، تركيبات على زرعات", en: "Back teeth, bridges, implant crowns" }, { ar: "أسنان أمامية، قشور، تيجان مفردة", en: "Front teeth, veneers, single crowns" }],
        [{ ar: "طريقة التثبيت", en: "Fixing method" }, { ar: "تثبيت بأسمنت، أو لصق في بعض الحالات", en: "Cemented, or bonded in some cases" }, { ar: "لصق على السنة", en: "Bonded to the tooth" }],
      ],
      note: { ar: "دي قاعدة عامة. الطبيب ممكن يختار غيرها حسب حالتك.", en: "This is a general guide; your dentist may choose differently for your case." },
    },
    tech: ["scanner", "xray", "anesthesia"],
    figures: [{"src": "assets/img/illustrations/porcelain-veneer.webp", "alt": {"ar": "قشرة سيراميك رقيقة قبل تركيبها على نموذج للأسنان الأمامية", "en": "A thin ceramic veneer before placement on a model of the front teeth"}, "caption": {"ar": "قشرة سيراميك (إي ماكس) رقيقة وشفافيتها قريبة من السنة الطبيعية.", "en": "A thin ceramic (E.max) veneer with translucency close to natural enamel."}}],
    faqs: [
      {
        q: { ar: "الفرق إيه بين الزيركون والإي ماكس؟", en: "What is the difference between Zirconia and E.max?" },
        a: {
          ar: "الاتنين خامات سيراميك من غير معدن. الزيركون أقوى ومناسب للأسنان الخلفية والجسور، والإي ماكس شكله أقرب لشفافية السنة الطبيعية ومناسب أكتر للأمامية. الطبيب بيرشح الأنسب لكل سنة.",
          en: "Both are metal-free ceramics. Zirconia is stronger and suits back teeth and bridges; E.max more closely mimics natural translucency and is often chosen for front teeth. The dentist recommends the best option for each tooth.",
        },
      },
      {
        q: { ar: "هل لازم أبرد السنة؟", en: "Does the tooth need to be prepared (shaved)?" },
        a: {
          ar: "معظم التركيبات بتحتاج تحضير للسنة بدرجات مختلفة. الطبيب بيشرح لك قد إيه هيتشال من السنة ولماذا، وبيحاول يحافظ على أكبر قدر من السنة الطبيعية.",
          en: "Most restorations need some tooth preparation, to varying degrees. The dentist explains how much and why, and aims to preserve as much natural tooth as possible.",
        },
      },
      {
        q: { ar: "التركيبة بتعيش قد إيه؟", en: "How long do restorations last?" },
        a: {
          ar: "التركيبات الجيدة ممكن تعيش سنين طويلة، لكن ده بيعتمد على نظافة الفم، والإطباق، وعادات زي الضغط على الأسنان، والمتابعة الدورية.",
          en: "Well-made restorations can last many years, depending on oral hygiene, the bite, habits such as clenching, and regular check-ups.",
        },
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "digital-dentistry",
    featured: true,
    rank: 4,                 // order on the homepage (1 = first)
    icon: "scanner",
    title: { ar: "طب الأسنان الرقمي", en: "Digital Dentistry" },
    kicker: { ar: "الماسح الضوئي داخل الفم", en: "Intraoral scanning" },
    short: {
      ar: "تسجيل الأسنان بالماسح الضوئي داخل الفم (Intraoral Scanner) لصورة ثلاثية الأبعاد تدعم تخطيط التركيبات وتنفيذها.",
      en: "Recording the teeth with an intraoral scanner to create a 3D model that supports planning and making restorations.",
    },
    meta: {
      ar: "طب الأسنان الرقمي في الإسكندرية: ماسح ضوئي داخل الفم وأشعة رقمية في مركز أسنان شاين – سبورتينج والعجمي.",
      en: "Digital dentistry in Alexandria: intraoral scanning and digital X-ray at Tooth Shine Dental Center – Sporting and Agami.",
    },
    intro: {
      ar: [
        "الماسح الضوئي داخل الفم (Intraoral Scanner) جهاز صغير بيلف حوالين الأسنان ويسجّلها كنموذج ثلاثي الأبعاد على الكمبيوتر. في حالات كتير بيغني عن الطبعة التقليدية بالمعجون.",
        "النموذج الرقمي بيتشاف على الشاشة مع المريض، وبيتبعت للمعمل لتصنيع التركيبات، وبيساعد في التخطيط ومتابعة التغييرات. الطبيب بيحدد إمتى التسجيل الرقمي هو الاختيار الأنسب لحالتك.",
      ],
      en: [
        "An intraoral scanner is a small wand that moves around the teeth and records them as a 3D model on the computer. In many cases it replaces conventional impression paste.",
        "The digital model can be reviewed on screen with the patient, sent to the lab to make restorations, and used for planning and monitoring changes. The dentist decides when digital recording is the most suitable option for you.",
      ],
    },
    reasons: {
      ar: ["تحضير لتيجان أو جسور أو قشور", "التخطيط لتركيبات على الزرعات", "تسجيل الأسنان قبل التقويم", "مريض بيتضايق من الطبعة التقليدية", "الرغبة في فهم الحالة بالشوف على الشاشة"],
      en: ["Preparing for crowns, bridges or veneers", "Planning restorations on implants", "Recording teeth before orthodontic treatment", "Patients who find conventional impressions uncomfortable", "Wanting to understand the case by seeing it on screen"],
    },
    assessment: {
      ar: ["كشف لتحديد هل التسجيل الرقمي مناسب للحالة", "مسح الأسنان في دقائق بدون معجون في أغلب الحالات", "مراجعة النموذج على الشاشة وشرح الخطة", "إرسال الملف للمعمل حسب خطة العلاج"],
      en: ["An examination to check if digital recording suits the case", "Scanning the teeth in minutes, usually without impression paste", "Reviewing the model on screen and explaining the plan", "Sending the file to the lab according to the treatment plan"],
    },
    tech: ["scanner", "xray"],
    faqs: [
      {
        q: { ar: "هل الماسح الضوئي فيه إشعاع؟", en: "Does the intraoral scanner use radiation?" },
        a: {
          ar: "لا. الماسح الضوئي بيستخدم الضوء والكاميرا لتسجيل سطح الأسنان، وده مختلف عن الأشعة.",
          en: "No. The scanner uses light and a camera to record the surface of the teeth; it is different from an X-ray.",
        },
      },
      {
        q: { ar: "هل كل التركيبات بتتعمل رقمي؟", en: "Are all restorations made digitally?" },
        a: {
          ar: "مش دايمًا. في حالات الطبعة التقليدية بتكون أنسب. الطبيب بيختار الطريقة اللي تخدم دقة الحالة.",
          en: "Not always. In some situations a conventional impression is more suitable. The dentist chooses the method that best serves the case.",
        },
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "root-canal-treatment",
    icon: "root",
    title: { ar: "علاج العصب", en: "Root Canal Treatment" },
    short: {
      ar: "علاج الالتهاب أو العدوى داخل السنة للحفاظ عليها بدل خلعها كلما كان ده ممكنًا.",
      en: "Treating inflammation or infection inside the tooth to keep it rather than extract it, whenever possible.",
    },
    meta: {
      ar: "علاج عصب الأسنان في الإسكندرية – سبورتينج والعجمي. تشخيص بالأشعة الرقمية وتخدير بقلم البنج الإلكتروني.",
      en: "Root canal treatment in Alexandria – Sporting and Agami. Diagnosis with digital X-ray and computer-controlled local anaesthesia.",
    },
    intro: {
      ar: [
        "لما التسوس أو الكسر يوصل لعصب السنة، العصب ممكن يلتهب أو يحصل فيه عدوى. علاج العصب بيشيل الجزء الملتهب من جوه السنة، وبينضف القنوات ويقفلها، عشان نحافظ على السنة الطبيعية.",
        "العلاج بيتم تحت تخدير موضعي، وكتير من السنان بعد علاج العصب بتحتاج تاج لحمايتها. الطبيب بيشرح لك ده بعد التشخيص.",
      ],
      en: [
        "When decay or a fracture reaches the tooth's nerve (pulp), it can become inflamed or infected. Root canal treatment removes the affected pulp, cleans and seals the canals, and preserves the natural tooth.",
        "Treatment is done under local anaesthesia, and many root-treated teeth need a crown afterwards for protection. The dentist explains this after diagnosis.",
      ],
    },
    reasons: {
      ar: ["ألم مستمر أو بيصحّي من النوم", "حساسية شديدة للسخن أو البارد بتستمر", "تورم في اللثة أو الوش", "تسوس عميق أو كسر وصل للعصب"],
      en: ["Persistent pain or pain that wakes you up", "Lingering sensitivity to hot or cold", "Swelling of the gum or face", "Deep decay or a fracture reaching the nerve"],
    },
    assessment: {
      ar: ["سؤال عن طبيعة الألم ومدته", "فحص السنة واللثة", "أشعة رقمية لتقييم الجذور", "شرح هل السنة قابلة للعلاج والبدائل المتاحة"],
      en: ["Asking about the nature and duration of the pain", "Examining the tooth and gum", "Digital X-ray to assess the roots", "Explaining whether the tooth can be saved and the alternatives"],
    },
    tech: ["xray", "anesthesia"],
    techniques: {"title": {"ar": "خطوات علاج العصب", "en": "Root canal treatment step by step"}, "steps": true, "items": [{"icon": "xray", "name": "Diagnosis", "title": {"ar": "التشخيص", "en": "Diagnosis"}, "body": {"ar": "فحص السنة وأشعة رقمية لتحديد سبب الألم، وهل السنة ممكن تتعالج.", "en": "Examining the tooth and taking a digital X-ray to find the cause and confirm the tooth can be saved."}}, {"icon": "root", "name": "Cleaning", "title": {"ar": "التخدير وتنضيف القنوات", "en": "Anaesthesia and cleaning"}, "body": {"ar": "بعد التخدير الموضعي بيتشال العصب الملتهب وبتتنضف القنوات وتتطهّر من جوه.", "en": "Under local anaesthesia the inflamed pulp is removed and the canals are cleaned and disinfected."}}, {"icon": "filling", "name": "Sealing", "title": {"ar": "حشو القنوات وقفلها", "en": "Filling and sealing"}, "body": {"ar": "القنوات بتتملي بمادة خاصة وبتتقفل كويس عشان نمنع رجوع البكتيريا.", "en": "The canals are filled with a dedicated material and sealed to keep bacteria out."}}, {"icon": "crown", "name": "Protection", "title": {"ar": "حماية السنة", "en": "Protecting the tooth"}, "body": {"ar": "حشو نهائي، وفي حالات كتير تاج لأن السنة بعد علاج العصب بتبقى أضعف.", "en": "A final filling and, in many cases, a crown, because a root-treated tooth is weaker."}}]},
    faqs: [
      {
        q: { ar: "هل علاج العصب مؤلم؟", en: "Is root canal treatment painful?" },
        a: {
          ar: "العلاج بيتم بعد التخدير، وهدفه إنه يخلّصك من الألم. بعده ممكن تحس بإحساس خفيف لأيام قليلة.",
          en: "Treatment is done under anaesthesia and aims to relieve pain. Mild tenderness for a few days afterwards is common.",
        },
      },
      {
        q: { ar: "علاج العصب بياخد كام جلسة؟", en: "How many visits does it take?" },
        a: {
          ar: "ممكن جلسة واحدة أو أكتر حسب حالة السنة ووجود عدوى وعدد القنوات.",
          en: "One or more visits, depending on the tooth, whether infection is present and the number of canals.",
        },
      },
      { q: {"ar": "ليه السنة بتحتاج تاج بعد علاج العصب؟", "en": "Why might a tooth need a crown after root canal treatment?"}, a: {"ar": "لأن السنة غالبًا بتكون فقدت جزء كبير بسبب التسوس أو الكسر، فبتبقى أكثر عرضة للكسر. الطبيب بيقرر حسب كمية السنة الباقية ومكانها.", "en": "Because the tooth has often lost a lot of structure to decay or fracture and is more likely to break. The dentist decides based on how much tooth remains and where it is."} },
      { q: {"ar": "إيه اللي ممكن أحس بيه بعد العلاج؟", "en": "What can I expect after treatment?"}, a: {"ar": "إحساس بسيط أو ألم خفيف عند الضغط لأيام قليلة شيء وارد. لو في ألم شديد أو تورم بيزيد، كلّم العيادة.", "en": "Mild tenderness when biting for a few days is common. If pain is severe or swelling increases, contact the clinic."} },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "pediatric-dentistry",
    icon: "child",
    title: { ar: "طب أسنان الأطفال", en: "Pediatric Dentistry" },
    short: {
      ar: "متابعة أسنان الأطفال وعلاجها والوقاية من التسوس، بأسلوب هادي يساعد الطفل يتعوّد على العيادة.",
      en: "Check-ups, treatment and decay prevention for children, in a calm approach that helps them feel at ease.",
    },
    meta: {
      ar: "طبيب أسنان أطفال في الإسكندرية – سبورتينج والعجمي. كشف ووقاية وعلاج أسنان الأطفال في جو هادئ.",
      en: "Children's dentistry in Alexandria – Sporting and Agami. Check-ups, prevention and treatment in a calm setting.",
    },
    intro: {
      ar: [
        "أسنان اللبن مهمة: بتساعد الطفل ياكل ويتكلم، وبتحافظ على مكان الأسنان الدائمة. الاهتمام بيها بدري بيقلل المشاكل والخوف بعدين.",
        "بنبدأ مع الطفل بالتعارف والشرح البسيط قبل أي خطوة، وبنشارك الأهل في الخطة ونصايح العناية في البيت.",
      ],
      en: [
        "Baby teeth matter: they help children eat and speak and hold space for permanent teeth. Early care reduces problems and fear later on.",
        "We start with introductions and simple explanations before any step, and involve parents in the plan and home-care advice.",
      ],
    },
    reasons: {
      ar: ["أول زيارة للطفل للمتابعة", "تسوس أو ألم في أسنان اللبن", "جلسات الفلورايد أو سد الشقوق للوقاية حسب الحاجة", "إيقاف التسوس المبكر بمادة SDF في الحالات المناسبة", "متابعة ظهور الأسنان الدائمة وترتيبها"],
      en: ["A child's first check-up", "Decay or pain in baby teeth", "Fluoride sessions or fissure sealants for prevention when appropriate", "Arresting early decay with SDF in suitable cases", "Monitoring eruption and alignment of permanent teeth"],
    },
    assessment: {
      ar: ["تعارف وتعويد الطفل على الكرسي والأدوات", "فحص الأسنان واللثة", "أشعة عند الحاجة فقط", "نصايح للأهل عن التنظيف والأكل"],
      en: ["Getting the child familiar with the chair and tools", "Examining teeth and gums", "X-rays only when needed", "Advice for parents on brushing and diet"],
    },
    tech: ["anesthesia", "xray"],
    techniques: {"title": {"ar": "زيارة الطفل خطوة بخطوة", "en": "Your child's visit step by step"}, "steps": true, "items": [{"icon": "child", "name": "Getting to know", "title": {"ar": "التعارف", "en": "Getting acquainted"}, "body": {"ar": "بنتعرف على الطفل ونشرحله الأدوات بكلام بسيط عشان يطمن.", "en": "We get to know the child and explain the instruments in simple words so they feel at ease."}}, {"icon": "exam", "name": "Examination", "title": {"ar": "الفحص", "en": "Examination"}, "body": {"ar": "فحص الأسنان واللثة ومتابعة نمو الأسنان والفكين، وأشعة لو محتاج.", "en": "Checking teeth and gums and monitoring tooth and jaw development, with X-rays if needed."}}, {"icon": "doc", "name": "Plan", "title": {"ar": "الخطة مع الأهل", "en": "Plan with parents"}, "body": {"ar": "شرح الحالة والعلاج المناسب للأهل، وترتيب الأولويات حسب احتياج الطفل.", "en": "Explaining findings and suitable treatment to parents, prioritised to the child's needs."}}, {"icon": "shield", "name": "Prevention", "title": {"ar": "الوقاية والمتابعة", "en": "Prevention and follow-up"}, "body": {"ar": "نصايح التفريش والأكل، وزيارات متابعة دورية لاكتشاف أي مشكلة بدري.", "en": "Brushing and diet advice, and regular check-ups to catch problems early."}}]},
    faqs: [
      {
        q: { ar: "أول زيارة للطفل تكون إمتى؟", en: "When should a child first visit the dentist?" },
        a: {
          ar: "يُنصح بزيارة مبكرة بعد ظهور أول سنة أو حوالي عمر السنة، وبعدها متابعة دورية حسب توصية الطبيب.",
          en: "An early visit is recommended after the first tooth appears or around the first birthday, then regular check-ups as advised.",
        },
      },
      {
        q: { ar: "إيه هو علاج SDF؟", en: "What is SDF treatment?" },
        a: {
          ar: "SDF (سيلفر دايامين فلورايد) سائل بيتدهن على التسوس عشان يساعد يوقف نشاطه، من غير حفر في أغلب الحالات، وده مفيد مع الأطفال الصغار أو القلقانين. من آثاره المعروفة إنه بيغمّق لون الجزء المسوّس بشكل دائم، وعشان كده الطبيب بيشرح للأهل مميزاته وحدوده قبل استخدامه.",
          en: "SDF (silver diamine fluoride) is a liquid painted on decay to help arrest it, usually without drilling, which helps with young or anxious children. A known effect is permanent dark staining of the decayed area, so the dentist explains its benefits and limits to parents before use.",
        },
      },
      {
        q: { ar: "ابني خايف جدًا، أعمل إيه؟", en: "My child is very anxious. What can I do?" },
        a: {
          ar: "قول له إنها زيارة للاطمئنان، وابعد عن كلام زي «مش هتوجع» أو التخويف. إحنا بنمشي مع الطفل خطوة بخطوة وبنشرح له قبل أي حاجة.",
          en: "Present it as a check-up visit and avoid phrases like 'it won't hurt' or using the dentist as a threat. We go step by step and explain everything first.",
        },
      },
      { q: {"ar": "هل لازم أعالج سنة اللبن لو كده كده هتقع؟", "en": "Do baby teeth need treating if they will fall out anyway?"}, a: {"ar": "غالبًا أيوه. تسوس سنة اللبن ممكن يسبب ألم وعدوى، ويأثر على الأكل والنوم، والخلع المبكر ممكن يأثر على مكان السنة الدائمة.", "en": "Usually yes. Decay in baby teeth can cause pain and infection and affect eating and sleep, and early loss can affect space for the permanent tooth."} },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "scaling-polishing",
    icon: "sparkle",
    title: { ar: "تنظيف الجير والتلميع", en: "Scaling & Polishing" },
    short: {
      ar: "إزالة الجير والتصبغات عن الأسنان للحفاظ على صحة اللثة، مع تلميع بالـ Prophy Jet في الحالات المناسبة.",
      en: "Removing tartar and stains to protect gum health, with Prophy Jet air-polishing where suitable.",
    },
    meta: {
      ar: "تنظيف الجير وتلميع الأسنان في الإسكندرية – سبورتينج والعجمي، مع جهاز Prophy Jet للحالات المناسبة.",
      en: "Teeth scaling and polishing in Alexandria – Sporting and Agami, with Prophy Jet air-polishing for suitable cases.",
    },
    intro: {
      ar: [
        "الجير طبقة متكلسة بتتكوّن على الأسنان ومابتتشالش بالفرشة. وجوده بيساعد على التهاب اللثة ونزيفها ورائحة الفم.",
        "التنظيف بيشيل الجير من فوق وتحت خط اللثة، وبعده التلميع. في الحالات المناسبة بنستخدم جهاز Prophy Jet اللي بيستخدم خليط من الماء والهواء وبودرة خاصة لإزالة التصبغات والطبقة الجرثومية.",
      ],
      en: [
        "Tartar is a hardened deposit on the teeth that brushing cannot remove. It contributes to gum inflammation, bleeding and bad breath.",
        "Scaling removes tartar above and below the gumline, followed by polishing. Where suitable, we use a Prophy Jet, which combines water, air and a special powder to remove stains and biofilm.",
      ],
    },
    reasons: {
      ar: ["نزيف اللثة أثناء التفريش", "جير ظاهر أو تصبغات من الشاي والقهوة والتدخين", "رائحة فم مستمرة", "تنظيف دوري للحفاظ على صحة اللثة"],
      en: ["Bleeding gums when brushing", "Visible tartar or stains from tea, coffee or smoking", "Persistent bad breath", "Routine cleaning to maintain gum health"],
    },
    assessment: {
      ar: ["فحص اللثة وقياس الجيوب عند الحاجة", "تحديد هل الحالة محتاجة تنظيف عادي أو علاج لثة أعمق", "اختيار طريقة التلميع المناسبة", "نصايح للتفريش والخيط وموعد المتابعة"],
      en: ["Examining the gums and measuring pockets if needed", "Deciding whether routine cleaning or deeper gum therapy is needed", "Choosing the suitable polishing method", "Brushing and flossing advice and a follow-up date"],
    },
    tech: ["prophyjet", "xray"],
    techniques: {"title": {"ar": "خطوات التنظيف", "en": "Cleaning step by step"}, "steps": true, "items": [{"icon": "exam", "name": "Gum check", "title": {"ar": "فحص اللثة", "en": "Gum check"}, "body": {"ar": "فحص اللثة وأماكن تراكم الجير، وأشعة لو محتاج.", "en": "Checking the gums and where tartar has built up, with X-rays if needed."}}, {"icon": "jet", "name": "Scaling", "title": {"ar": "إزالة الجير", "en": "Scaling"}, "body": {"ar": "إزالة الجير من فوق وتحت خط اللثة بأجهزة مخصصة.", "en": "Removing tartar above and below the gum line with dedicated instruments."}}, {"icon": "sparkle", "name": "Polishing", "title": {"ar": "التلميع وإزالة التصبغات", "en": "Polishing and stain removal"}, "body": {"ar": "تلميع الأسطح، وفي الحالات المناسبة Prophy Jet لإزالة التصبغات.", "en": "Polishing the surfaces and, when suitable, Prophy Jet to remove stains."}}, {"icon": "doc", "name": "Home care", "title": {"ar": "تعليمات العناية", "en": "Home-care advice"}, "body": {"ar": "طريقة تفريش وتنظيف ما بين الأسنان مناسبة لحالتك، وموعد المتابعة.", "en": "Brushing and between-teeth cleaning advice for your case, and when to come back."}}]},
    faqs: [
      {
        q: { ar: "هل التنظيف بيضعّف الأسنان؟", en: "Does scaling weaken the teeth?" },
        a: {
          ar: "لا. التنظيف بيشيل الجير من على سطح السنة. ممكن تحس بحساسية مؤقتة بعده خصوصًا لو كان في جير كتير.",
          en: "No. Scaling removes deposits from the tooth surface. Temporary sensitivity can occur, especially when there was a lot of tartar.",
        },
      },
      {
        q: { ar: "أعمل تنظيف كل قد إيه؟", en: "How often should I have a cleaning?" },
        a: {
          ar: "الفترة بتختلف من شخص للتاني حسب صحة اللثة. الطبيب بيحدد لك موعد المتابعة المناسب.",
          en: "It varies from person to person depending on gum health. The dentist recommends a suitable interval.",
        },
      },
      { q: {"ar": "هل طبيعي اللثة تنزف بعد التنظيف؟", "en": "Is it normal for gums to bleed after a cleaning?"}, a: {"ar": "نزيف بسيط في أول يوم أو اتنين وارد خصوصًا لو اللثة كانت ملتهبة، وغالبًا بيقل مع انتظام التفريش. لو استمر، راجع الطبيب.", "en": "Light bleeding for a day or two is common, especially if the gums were inflamed, and usually settles with regular brushing. If it continues, see the dentist."} },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "teeth-whitening",
    icon: "sun",
    title: { ar: "تبييض الأسنان", en: "Teeth Whitening" },
    short: {
      ar: "تفتيح لون الأسنان الطبيعية تحت إشراف الطبيب، بعد التأكد إن الأسنان واللثة مناسبين للتبييض.",
      en: "Lightening the shade of natural teeth under dental supervision, after confirming teeth and gums are suitable.",
    },
    meta: {
      ar: "تبييض الأسنان في الإسكندرية – سبورتينج والعجمي. تقييم قبل التبييض وتوقعات واقعية للنتيجة.",
      en: "Teeth whitening in Alexandria – Sporting and Agami. An assessment first and realistic expectations.",
    },
    intro: {
      ar: [
        "التبييض بيفتّح لون مينا الأسنان الطبيعية باستخدام مواد تبييض تحت إشراف الطبيب. النتيجة بتختلف من شخص للتاني حسب نوع التصبغ ولون الأسنان الأصلي.",
        "التبييض مابيغيّرش لون الحشوات أو التركيبات، وعشان كده بنعمل تقييم الأول ونتفق على توقعات واقعية.",
      ],
      en: [
        "Whitening lightens the natural enamel using bleaching agents under a dentist's supervision. Results vary depending on the type of staining and the original shade.",
        "Whitening does not change the colour of fillings or crowns, so we assess first and agree realistic expectations.",
      ],
    },
    reasons: {
      ar: ["أسنان لونها أغمق من المرغوب", "تصبغات من الشاي والقهوة والتدخين", "قبل مناسبة أو تجميل للابتسامة"],
      en: ["Teeth darker than desired", "Stains from tea, coffee or smoking", "Before an occasion or a smile makeover"],
    },
    assessment: {
      ar: ["فحص التسوس واللثة والحساسية", "تسجيل اللون الحالي", "تنظيف قبل التبييض عند الحاجة", "شرح الطريقة المناسبة واحتمال الحساسية المؤقتة"],
      en: ["Checking for decay, gum problems and sensitivity", "Recording the current shade", "Cleaning before whitening when needed", "Explaining the suitable method and possible temporary sensitivity"],
    },
    tech: ["prophyjet"],
    techniques: {"title": {"ar": "خطوات التبييض", "en": "Whitening step by step"}, "steps": true, "items": [{"icon": "exam", "name": "Assessment", "title": {"ar": "التقييم", "en": "Assessment"}, "body": {"ar": "فحص الأسنان واللثة وعلاج أي تسوس أو حساسية الأول، وتسجيل لون الأسنان قبل البدء.", "en": "Checking teeth and gums, treating any decay or sensitivity first, and recording the starting shade."}}, {"icon": "shield", "name": "Protection", "title": {"ar": "حماية اللثة", "en": "Protecting the gums"}, "body": {"ar": "عزل اللثة والأنسجة الرخوة قبل وضع مادة التبييض.", "en": "Isolating the gums and soft tissues before the whitening gel is applied."}}, {"icon": "sparkle", "name": "Whitening", "title": {"ar": "التبييض", "en": "Whitening"}, "body": {"ar": "وضع مادة التبييض تحت إشراف الطبيب حسب البروتوكول المناسب لحالتك.", "en": "Applying the whitening gel under the dentist's supervision using the protocol suited to your case."}}, {"icon": "doc", "name": "Aftercare", "title": {"ar": "التعليمات بعد التبييض", "en": "Aftercare"}, "body": {"ar": "تقليل المشروبات والأكل الملوّن والتدخين فترة بعد التبييض، والتعامل مع أي حساسية مؤقتة.", "en": "Limiting staining food, drinks and smoking for a while, and managing any temporary sensitivity."}}]},
    figures: [{"src": "assets/img/illustrations/teeth-whitening.webp", "alt": {"ar": "جلسة تبييض أسنان في العيادة مع حماية اللثة", "en": "An in-clinic whitening session with the gums protected"}, "caption": {"ar": "التبييض في العيادة بيتم تحت إشراف الطبيب مع حماية اللثة.", "en": "In-clinic whitening is done under the dentist's supervision with the gums protected."}}],
    faqs: [
      {
        q: { ar: "هل التبييض بيضر الأسنان؟", en: "Is whitening harmful?" },
        a: {
          ar: "التبييض تحت إشراف الطبيب وبالتركيزات المناسبة يُعتبر آمن لمعظم الناس. أشهر عرض جانبي حساسية مؤقتة.",
          en: "Supervised whitening with appropriate concentrations is considered safe for most people. Temporary sensitivity is the most common side effect.",
        },
      },
      {
        q: { ar: "النتيجة بتستمر قد إيه؟", en: "How long do results last?" },
        a: {
          ar: "بتختلف حسب العادات زي التدخين والمشروبات الملوّنة ونظافة الفم.",
          en: "It depends on habits such as smoking, coloured drinks and oral hygiene.",
        },
      },
      { q: {"ar": "هل التبييض بيعمل حساسية؟", "en": "Does whitening cause sensitivity?"}, a: {"ar": "ممكن يحصل حساسية مؤقتة عند بعض الناس، وغالبًا بتروح خلال أيام. الطبيب بيقيّم الحساسية قبل البدء وممكن ينصح بمعجون مخصص.", "en": "Some people get temporary sensitivity, which usually settles within days. The dentist assesses sensitivity beforehand and may recommend a desensitising toothpaste."} },
      { q: {"ar": "هل التبييض مناسب لكل الناس؟", "en": "Is whitening suitable for everyone?"}, a: {"ar": "لا. مثلًا الحامل والمرضع، أو اللي عنده تسوس أو التهاب لثة غير معالج، أو بعض أنواع التصبغات اللي مش بتستجيب للتبييض. ده بيتحدد في الفحص.", "en": "No. For example during pregnancy or breastfeeding, with untreated decay or gum inflammation, or with some types of staining that do not respond. This is decided at the examination."} },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "tooth-colored-fillings",
    icon: "filling",
    title: { ar: "الحشوات التجميلية", en: "Tooth-Colored Fillings" },
    short: {
      ar: "حشوات بلون السنة الطبيعي (كومبوزيت) لعلاج التسوس والكسور الصغيرة مع الحفاظ على شكل السنة.",
      en: "Composite fillings that match your tooth colour to treat decay and small fractures while preserving appearance.",
    },
    meta: {
      ar: "حشوات تجميلية بلون الأسنان في الإسكندرية – سبورتينج والعجمي. علاج التسوس مع الحفاظ على شكل السنة.",
      en: "Tooth-coloured fillings in Alexandria – Sporting and Agami. Treating decay while preserving natural appearance.",
    },
    intro: {
      ar: [
        "الحشو التجميلي (الكومبوزيت) مادة بلون السنة بتلتصق بسطحها. بنشيل التسوس، ونختار درجة اللون الأقرب للسنة، ونشكّل الحشو عشان يرجّع شكلها.",
        "لما التسوس يكون كبير جدًا، ممكن السنة تحتاج نوع ترميم أقوى. الطبيب بيوضح لك الأنسب.",
      ],
      en: [
        "A composite filling is a tooth-coloured material that bonds to the tooth. We remove the decay, select the closest shade and sculpt the filling to restore the tooth's form.",
        "When decay is very large, the tooth may need a stronger type of restoration. The dentist explains the best option.",
      ],
    },
    reasons: {
      ar: ["تسوس ظاهر أو في الأشعة", "كسر صغير في حافة السنة", "تغيير حشو قديم متآكل أو متغير اللون"],
      en: ["Decay seen clinically or on X-ray", "A small chipped edge", "Replacing an old worn or discoloured filling"],
    },
    assessment: {
      ar: ["فحص وأشعة لتحديد عمق التسوس", "اختيار درجة اللون", "شرح هل الحشو مناسب أو محتاج ترميم آخر"],
      en: ["Examination and X-ray to assess decay depth", "Shade selection", "Explaining whether a filling is suitable or another restoration is needed"],
    },
    tech: ["xray", "anesthesia"],
    faqs: [
      {
        q: { ar: "هل لازم بنج للحشو؟", en: "Do I need anaesthesia for a filling?" },
        a: {
          ar: "مش دايمًا، حسب عمق التسوس وإحساس المريض. لو محتاج بنج، بنستخدم قلم البنج الإلكتروني عند مناسبته.",
          en: "Not always; it depends on decay depth and your comfort. When needed, we can use computer-controlled anaesthesia where suitable.",
        },
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "composite-veneers",
    icon: "veneer",
    title: { ar: "قشور الكومبوزيت", en: "Composite Veneers" },
    short: {
      ar: "طبقة رقيقة من الكومبوزيت على سطح الأسنان الأمامية لتحسين الشكل أو اللون أو الفراغات البسيطة.",
      en: "A thin layer of composite on front teeth to improve shape, colour or small gaps.",
    },
    meta: {
      ar: "قشور كومبوزيت (Composite Veneers) في الإسكندرية – سبورتينج والعجمي. تحسين شكل الابتسامة بعد تقييم الحالة.",
      en: "Composite veneers in Alexandria – Sporting and Agami. Improving the smile after a careful assessment.",
    },
    intro: {
      ar: [
        "قشور الكومبوزيت بتتعمل مباشرة على الأسنان في العيادة: الطبيب بيبني طبقات من مادة بلون السنة ويشكّلها لتحسين الشكل واللون.",
        "غالبًا بتحتاج تحضير بسيط أو مفيش تحضير للسنة، وممكن تتصلّح أو تتلمّع مع الوقت. مقارنةً بالقشور السيراميك، الكومبوزيت ممكن يحتاج صيانة أكتر وقد يتأثر لونه مع الوقت.",
      ],
      en: [
        "Composite veneers are built directly on the teeth in the clinic: the dentist layers and sculpts tooth-coloured material to improve shape and colour.",
        "They usually need little or no tooth preparation and can be repaired or re-polished over time. Compared with ceramic veneers, composite may need more maintenance and can stain over time.",
      ],
    },
    reasons: {
      ar: ["فراغات بسيطة بين الأسنان الأمامية", "أطراف مكسورة أو غير متساوية", "عدم رضا عن شكل أو لون الأسنان الأمامية"],
      en: ["Small gaps between front teeth", "Chipped or uneven edges", "Dissatisfaction with front tooth shape or shade"],
    },
    assessment: {
      ar: ["فحص الأسنان واللثة والإطباق", "مناقشة الشكل المطلوب وحدوده", "مقارنة الكومبوزيت بالسيراميك لحالتك"],
      en: ["Examining teeth, gums and bite", "Discussing the desired look and its limits", "Comparing composite with ceramic options for your case"],
    },
    techniques: {
      title: { ar: "القشور بتتعمل إزاي؟", en: "How composite veneers are done" },
      lead: {
        ar: "الهدف إننا نحافظ على أكبر قدر من السنة الطبيعية. في حالات كتير مفيش برد أو برد بسيط جدًا، لكن مش كل الحالات كده، والطبيب بيوضح لك قبل البداية.",
        en: "The aim is to preserve as much natural tooth as possible. Many cases need no or very minimal preparation, but not all, and the dentist explains this before starting.",
      },
      items: [
        {
          icon: "exam",
          name: "Smile assessment",
          title: { ar: "تقييم وتصميم الابتسامة", en: "Smile assessment and design" },
          body: {
            ar: "فحص الأسنان واللثة والإطباق، وصور للابتسامة، ومناقشة الشكل واللون اللي يناسب وشّك، وإيه اللي ممكن وإيه حدوده.",
            en: "Examining teeth, gums and bite, photographing the smile, and agreeing a shape and shade that suit your face, including what is and isn't achievable.",
          },
        },
        {
          icon: "veneer",
          name: "Bonding",
          title: { ar: "اللصق (Bonding)", en: "Bonding" },
          body: {
            ar: "سطح السنة بيتجهز بمادة خاصة عشان الكومبوزيت يلتصق بيها كويس، وده اللي بيسمح إننا منبردش السنة أو نبرد أقل.",
            en: "The tooth surface is conditioned so the composite bonds firmly to it, which is what allows little or no preparation.",
          },
        },
        {
          icon: "pen",
          name: "Layering & sculpting",
          title: { ar: "بناء الطبقات والتشكيل", en: "Layering and sculpting" },
          body: {
            ar: "الكومبوزيت بيتبني طبقة طبقة بألوان مختلفة عشان يدّي عمق وشفافية قريبة من السنة الطبيعية، وبيتشكّل في نفس الجلسة.",
            en: "Composite is built up in layers of different shades to give depth and translucency close to a natural tooth, and shaped in the same visit.",
          },
        },
        {
          icon: "sparkle",
          name: "Polish & maintenance",
          title: { ar: "التلميع والمتابعة", en: "Polishing and maintenance" },
          body: {
            ar: "تلميع نهائي، ثم متابعة دورية. الكومبوزيت ممكن يحتاج تلميع أو تصليح بسيط مع الوقت، وده من مميزاته إنه سهل يتصلّح.",
            en: "A final polish, then regular reviews. Composite may need re-polishing or small repairs over time, and being easy to repair is one of its advantages.",
          },
        },
      ],
    },
    compare: {
      title: { ar: "كومبوزيت ولا سيراميك (إي ماكس)؟", en: "Composite or ceramic (E.max)?" },
      cols: [{ ar: "", en: "" }, { ar: "قشور الكومبوزيت", en: "Composite veneers" }, { ar: "قشور السيراميك (إي ماكس)", en: "Ceramic veneers (E.max)" }],
      rows: [
        [{ ar: "عدد الجلسات", en: "Visits" }, { ar: "غالبًا جلسة واحدة", en: "Often a single visit" }, { ar: "أكتر من جلسة (بتتعمل في المعمل)", en: "Several visits (made in the lab)" }],
        [{ ar: "تحضير السنة", en: "Tooth preparation" }, { ar: "غالبًا مفيش أو بسيط جدًا", en: "Often none or very minimal" }, { ar: "بسيط غالبًا، وأحيانًا مفيش حسب الحالة", en: "Usually minimal; sometimes none, depending on the case" }],
        [{ ar: "ثبات اللون", en: "Colour stability" }, { ar: "ممكن يتغيّر مع الوقت", en: "Can stain over time" }, { ar: "ثابت جدًا", en: "Very stable" }],
        [{ ar: "الصيانة", en: "Maintenance" }, { ar: "تلميع وتصليح سهل", en: "Easy to polish and repair" }, { ar: "صيانة أقل، والتصليح أصعب", en: "Less maintenance; harder to repair" }],
      ],
      note: { ar: "الاختيار بيتحدد بعد الفحص حسب حالة أسنانك وتوقعاتك.", en: "The choice is made after examination, based on your teeth and expectations." },
    },
    tech: [],
    faqs: [
      {
        q: { ar: "إيه الفرق بين قشور الكومبوزيت والإي ماكس؟", en: "Composite veneers or E.max veneers?" },
        a: {
          ar: "الكومبوزيت بيتعمل في جلسة في العيادة وتكلفته أقل غالبًا، لكنه أكثر عرضة للتصبغ ومحتاج صيانة. الإي ماكس بيتصنع في المعمل، أثبت لونًا وأطول عمرًا عادةً. الاختيار بيعتمد على الحالة والتوقعات.",
          en: "Composite is done chairside and usually costs less, but stains more easily and needs maintenance. E.max is lab-made, generally more colour-stable and longer lasting. The choice depends on your case and expectations.",
        },
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "tooth-extraction",
    icon: "extraction",
    title: { ar: "خلع الأسنان", en: "Tooth Extraction" },
    short: {
      ar: "خلع السنة لما يكون علاجها غير ممكن أو غير مناسب، مع شرح طرق تعويضها بعد كده.",
      en: "Removing a tooth when it cannot or should not be saved, with a discussion of replacement options.",
    },
    meta: {
      ar: "خلع الأسنان وضرس العقل في الإسكندرية – سبورتينج والعجمي، مع تقييم بالأشعة وشرح بدائل التعويض.",
      en: "Tooth and wisdom tooth extraction in Alexandria – Sporting and Agami, with X-ray assessment and replacement options.",
    },
    intro: {
      ar: [
        "هدفنا دايمًا الحفاظ على السنة الطبيعية، لكن أحيانًا الخلع بيكون الاختيار الأفضل: تسوس كبير جدًا، كسر في الجذر، مرض لثة متقدم، أو ضرس عقل بيسبب مشاكل.",
        "قبل الخلع بنراجع التاريخ الطبي والأشعة، وبنشرح لك إزاي تهتم بمكان الخلع، وإيه طرق تعويض السنة لو محتاجة تعويض.",
      ],
      en: [
        "We always aim to keep natural teeth, but sometimes extraction is the best option: very extensive decay, a root fracture, advanced gum disease, or a problematic wisdom tooth.",
        "Before extraction we review your medical history and X-rays, explain how to care for the area, and discuss replacement options if needed.",
      ],
    },
    reasons: {
      ar: ["سنة غير قابلة للعلاج", "ضرس عقل بيسبب ألم أو التهاب متكرر", "تحضير لتقويم حسب خطة الطبيب", "كسر في الجذر"],
      en: ["A tooth that cannot be restored", "A wisdom tooth causing pain or recurrent infection", "As part of an orthodontic plan", "A fractured root"],
    },
    assessment: {
      ar: ["مراجعة التاريخ الطبي والأدوية خصوصًا أدوية السيولة", "أشعة لتقييم الجذور والأعصاب القريبة", "شرح خطوات الخلع والتعليمات بعده", "مناقشة التعويض: زرعة أو جسر أو غيرهم"],
      en: ["Reviewing medical history and medications, especially blood thinners", "X-rays to assess roots and nearby structures", "Explaining the procedure and aftercare", "Discussing replacement: implant, bridge or other options"],
    },
    tech: ["xray", "anesthesia"],
    techniques: {"title": {"ar": "خطوات الخلع", "en": "Extraction step by step"}, "steps": true, "items": [{"icon": "xray", "name": "Assessment", "title": {"ar": "التقييم", "en": "Assessment"}, "body": {"ar": "مراجعة التاريخ الطبي والأدوية، وأشعة لتقييم الجذور والعظم.", "en": "Reviewing medical history and medications, with X-rays to assess the roots and bone."}}, {"icon": "ear", "name": "Anaesthesia", "title": {"ar": "التخدير", "en": "Anaesthesia"}, "body": {"ar": "تخدير موضعي، والتأكد إن المكان مخدّر كويس قبل البدء.", "en": "Local anaesthesia, making sure the area is fully numb before starting."}}, {"icon": "extraction", "name": "Extraction", "title": {"ar": "الخلع", "en": "Extraction"}, "body": {"ar": "خلع السنة بأقل ضرر ممكن للعظم والأنسجة حواليها.", "en": "Removing the tooth with as little trauma as possible to the surrounding bone and tissue."}}, {"icon": "doc", "name": "Aftercare", "title": {"ar": "التعليمات بعد الخلع", "en": "Aftercare"}, "body": {"ar": "تعليمات مكتوبة: الشاش، الأكل، النظافة، والأدوية، ومتى تتواصل مع العيادة.", "en": "Written instructions on gauze, eating, cleaning and medication, and when to contact the clinic."}}]},
    faqs: [
      {
        q: { ar: "هل لازم أعوّض السنة بعد الخلع؟", en: "Do I need to replace the tooth afterwards?" },
        a: {
          ar: "في حالات كتير يُنصح بالتعويض عشان المضغ وعشان الأسنان المجاورة ماتتحركش. ده بيختلف حسب مكان السنة، والطبيب بيشرح لك.",
          en: "Replacement is often advised for chewing and to prevent neighbouring teeth drifting. It depends on the tooth's position; the dentist will advise.",
        },
      },
      {
        q: { ar: "باخد أدوية سيولة، أعمل إيه؟", en: "I take blood thinners. What should I do?" },
        a: {
          ar: "بلّغ الطبيب قبل أي خلع، وماتوقفش أي دواء من نفسك. القرار بيكون بالتنسيق مع طبيبك المعالج عند الحاجة.",
          en: "Tell the dentist before any extraction and never stop a medication on your own. Any change is coordinated with your physician when needed.",
        },
      },
      { q: {"ar": "أعمل إيه بعد الخلع؟", "en": "What should I do after an extraction?"}, a: {"ar": "اضغط على الشاش المدة اللي الطبيب قالها، وتجنب المضمضة الجامدة والشفاط والتدخين أول يوم، وكُل أكل طري. لو النزيف مستمر أو الألم بيزيد بعد كام يوم، كلّم العيادة.", "en": "Bite on the gauze for the time advised, avoid vigorous rinsing, straws and smoking for the first day, and eat soft food. If bleeding continues or pain gets worse after a few days, contact the clinic."} },
      { q: {"ar": "ينفع أعمل زراعة فورية بعد الخلع؟", "en": "Can an implant be placed right after extraction?"}, a: {"ar": "في حالات مختارة أيوه، لو المكان خالي من التهاب نشط وفيه عظم كفاية. ده بيتحدد بالفحص والأشعة قبل الخلع.", "en": "In selected cases yes, if the site has no active infection and enough bone. This is decided with examination and X-rays before the extraction."} },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "dental-examination",
    icon: "exam",
    title: { ar: "الكشف والتقييم الشامل", en: "Dental Examination" },
    short: {
      ar: "أول خطوة لأي علاج: كشف شامل وأشعة عند الحاجة وشرح واضح للحالة والخيارات قبل أي قرار.",
      en: "The first step for any treatment: a full examination, X-rays when needed and a clear explanation before any decision.",
    },
    meta: {
      ar: "كشف أسنان شامل في الإسكندرية – سبورتينج والعجمي. تقييم وأشعة رقمية وخطة علاج واضحة بالتكلفة.",
      en: "Comprehensive dental examination in Alexandria – Sporting and Agami. Assessment, digital X-ray and a clear plan with costs.",
    },
    intro: {
      ar: [
        "الكشف الشامل هو الأساس اللي بتتبني عليه أي خطة علاج. بنسمع منك الأول: إيه اللي مضايقك، وإيه اللي نفسك تحققه.",
        "بعد الفحص والأشعة المناسبة بنشرح لك الحالة بلغة بسيطة، ونعرض الخيارات المتاحة، وبعدها بتتحدد خطة العلاج والتكلفة النهائية. القرار دايمًا بيكون قرارك بعد ما تفهم كل حاجة.",
      ],
      en: [
        "A comprehensive examination is the foundation of any treatment plan. We listen first: what is bothering you, and what you would like to achieve.",
        "After the examination and suitable X-rays, we explain your situation in plain language and present the available options. The treatment plan and final cost are then defined. The decision is always yours once you understand everything.",
      ],
    },
    reasons: {
      ar: ["أول زيارة للمركز", "ألم أو حساسية", "متابعة دورية", "رأي قبل علاج كبير زي الزراعة أو التركيبات"],
      en: ["A first visit to the center", "Pain or sensitivity", "A routine check-up", "An opinion before major treatment such as implants or crowns"],
    },
    assessment: {
      ar: ["التاريخ الطبي والشكوى", "فحص الأسنان واللثة والأنسجة", "أشعة رقمية عند الحاجة", "شرح الحالة وخيارات العلاج والأولويات", "خطة علاج وتكلفة واضحة"],
      en: ["Medical history and main concern", "Examining teeth, gums and soft tissues", "Digital X-ray when needed", "Explaining the findings, options and priorities", "A clear treatment plan and cost"],
    },
    tech: ["xray", "scanner"],
    faqs: [
      {
        q: { ar: "هل لازم أبدأ العلاج في نفس يوم الكشف؟", en: "Must I start treatment on the day of the examination?" },
        a: {
          ar: "لا. ممكن تاخد وقتك تفكر في الخطة. في الحالات الطارئة زي الألم الشديد، الطبيب ممكن يقترح إجراء يريّحك في نفس الزيارة.",
          en: "No. You can take time to consider the plan. For urgent problems such as severe pain, the dentist may suggest relief treatment at the same visit.",
        },
      },
    ],
  },
];
