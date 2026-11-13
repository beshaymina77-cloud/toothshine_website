/* =====================================================================
   Advertising landing pages (Meta / Google Ads)
   One goal per page: a qualified appointment inquiry by WhatsApp or phone.
   Pages are noindex (ads only) so they never compete with the service pages,
   which keep the full SEO content. Clinical texts need Dr. Beshay's approval.
   ===================================================================== */
module.exports = {
  common: {
    bookTitle: { ar: "احجز في الفرع الأقرب ليك", en: "Book at the branch nearest to you" },
    bookLead: { ar: "اختار الفرع، وهتتفتح لك محادثة واتساب فيها رسالة جاهزة. المواعيد بالحجز المسبق.", en: "Pick a branch and WhatsApp opens with a ready message. Visits are by appointment." },
    waBranch: { ar: "واتساب {branch}", en: "WhatsApp {branch}" },
    callBranch: { ar: "اتصل بـ{branch}", en: "Call {branch}" },
    privacy: { ar: "مش بنطلب أي بيانات طبية هنا. هتتكلم مع الفرع مباشرة على واتساب.", en: "We don't ask for any medical details here. You talk to the branch directly on WhatsApp." },
    reviewsTitle: { ar: "تقييمات حقيقية على Google", en: "Real Google reviews" },
    reviewsGeneral: { ar: "تقييمات عامة عن المركز", en: "General reviews of the centre" },
    reviewsAll: { ar: "اقرا كل التقييمات على Google", en: "Read all reviews on Google" },
    casesTitle: { ar: "حالات حقيقية من العيادة", en: "Real cases from the clinic" },
    casesNote: { ar: "منشورة بموافقة أصحابها. النتيجة بتختلف من حالة لحالة.", en: "Published with the patients' consent. Results vary between cases." },
    faqTitle: { ar: "أسئلة سريعة", en: "Quick questions" },
    fullGuide: { ar: "عايز تقرا التفاصيل كلها؟", en: "Want all the details?" },
    stickyWa: { ar: "احجز على واتساب", en: "Book on WhatsApp" },
    call: { ar: "اتصال", en: "Call" },
    from: { ar: "(من صفحة {page} على الموقع)", en: "(from the {page} page on the website)" },
    disclaimer: { ar: "المعلومات دي للتوعية ومش بديل عن الكشف. الاختيار المناسب لحالتك بيتحدد بعد الكشف.", en: "This information is for education and does not replace an examination. The right option for you is decided after an examination." },
  },

  pages: [
    /* ============ A. IMPLANTS ============ */
    {
      slug: "dental-implants",
      service: "dental-implants",
      ref: { ar: "زراعة الأسنان", en: "dental implants" },
      waService: { ar: "تقييم لزراعة الأسنان", en: "a dental implant assessment" },
      title: { ar: "زراعة الأسنان في الإسكندرية بتخطيط رقمي | Tooth Shine", en: "Dental Implants in Alexandria with Digital Planning | Tooth Shine" },
      meta: { ar: "زراعة الأسنان في مركز أسنان شاين: أشعة CBCT ومسح رقمي وتخطيط يبدأ من شكل السنة النهائية. فرعين في سبورتنج والعجمي. احجز تقييمك على واتساب.", en: "Dental implants at Tooth Shine: CBCT, digital scanning and planning that starts from the final tooth. Sporting and Agami branches. Book your assessment on WhatsApp." },
      h1: { ar: "زراعة الأسنان في Tooth Shine", en: "Dental implants at Tooth Shine" },
      h1sub: { ar: "تخطيط رقمي واهتمام بكل تفاصيل ابتسامتك", en: "Digital planning and care for every detail of your smile" },
      lead: {
        ar: "بنبدأ من شكل السنة النهائية، وبنخطط مكان الزرعة على الأشعة المقطعية والمسح الرقمي قبل أي جراحة. خطة مكتوبة لحالتك، وتركيبة طبيعية، ومتابعة على المدى الطويل.",
        en: "We start from the final tooth and plan the implant on a CBCT scan and digital model before any surgery. A written plan for your case, a natural-looking crown and long-term follow-up.",
      },
      cta: { ar: "احجز تقييم زراعة", en: "Book an implant assessment" },
      chips: [
        { icon: "xray", ar: "أشعة CBCT ومسح رقمي", en: "CBCT and digital scan" },
        { icon: "implant", ar: "6 أنظمة زراعة عالمية", en: "6 international implant systems" },
        { icon: "star", ar: "{rating}", en: "{rating}" },
      ],
      heroPoster: "implant",
      sections: ["explorer", "compare", "why", "guided", "terms", "cases", "reviews", "faq", "book"],
      compare: {
        title: { ar: "زرعة ولا كوبري؟", en: "Implant or bridge?" },
        lead: { ar: "الاتنين حلول معروفة، والأنسب بيتحدد بعد الكشف.", en: "Both are established options; the better one for you is decided after an examination." },
        cols: [{ ar: "", en: "" }, { ar: "زرعة", en: "Implant" }, { ar: "كوبري ثابت", en: "Fixed bridge" }],
        rows: [
          [{ ar: "الأسنان اللي جنب الفراغ", en: "Neighbouring teeth" }, { ar: "مش بنلمسها", en: "Left untouched" }, { ar: "بتتبرد وتتلبس تيجان", en: "Reduced and crowned" }],
          [{ ar: "العظم مكان السنة", en: "Bone at the gap" }, { ar: "الزرعة بتحمّل على العظم", en: "The implant loads the bone" }, { ar: "مافيش حاجة مكان الجذر", en: "Nothing replaces the root" }],
          [{ ar: "محتاج جراحة؟", en: "Surgery needed?" }, { ar: "أيوه، جراحة صغيرة بالبنج الموضعي", en: "Yes, minor surgery under local anaesthetic" }, { ar: "لا", en: "No" }],
          [{ ar: "مدة العلاج", en: "Treatment time" }, { ar: "أطول غالبًا (فترة التئام)", en: "Usually longer (healing time)" }, { ar: "أقصر غالبًا", en: "Usually shorter" }],
          [{ ar: "التنظيف", en: "Cleaning" }, { ar: "زي السنة الطبيعية تقريبًا", en: "Much like a natural tooth" }, { ar: "محتاج تنظيف تحت الكوبري", en: "Needs cleaning under the bridge" }],
        ],
      },
      faqs: [
        { q: { ar: "الزراعة بتوجع؟", en: "Does an implant hurt?" }, a: { ar: "الزراعة بتتعمل بالبنج الموضعي، فأثناءها المفروض ماتحسش بألم. بعدها ممكن يبقى فيه إحساس أو ورم بسيط لأيام، وبنديك تعليمات ومسكن مناسب.", en: "It is done under local anaesthetic, so you should not feel pain during it. Some soreness or swelling for a few days afterwards is common, and we give you instructions and suitable pain relief." } },
        { q: { ar: "أي حد ينفع يعمل زراعة؟", en: "Can anyone have an implant?" }, a: { ar: "أغلب الناس ينفع، بس بنقيّم العظم والصحة العامة الأول. التدخين والسكر مش متظبط بيزودوا المخاطر ومحتاجين تقييم دقيق.", en: "Most people can, but bone and general health are assessed first. Smoking and poorly controlled diabetes raise the risks and need careful assessment." } },
        { q: { ar: "كل الحالات بتتعمل بالدليل الجراحي؟", en: "Is every case done with a surgical guide?" }, a: { ar: "لا. كل حالة بتتخطط على الأشعة، والدليل الجراحي بنستخدمه لما يكون مفيد للحالة.", en: "No. Every case is planned on imaging, and a surgical guide is used when it benefits the case." } },
        { q: { ar: "ينفع أركّب سنة في نفس اليوم؟", en: "Can I get a tooth the same day?" }, a: { ar: "في حالات مختارة، لو الزرعة ثابتة كفاية، ممكن سنة مؤقتة خلال أيام قليلة. ده بيتحدد أثناء الجراحة، مش قبلها.", en: "In selected cases, if the implant is stable enough, a temporary tooth can be fitted within a few days. This is decided during surgery, not before." } },
        { q: { ar: "الزرعة بتعيش قد إيه؟", en: "How long does an implant last?" }, a: { ar: "الزرعات ممكن تعيش سنين طويلة مع تنظيف كويس ومتابعة منتظمة. التدخين وأمراض اللثة وإهمال التنظيف بيقللوا عمرها.", en: "Implants can last many years with good cleaning and regular check-ups. Smoking, gum disease and poor cleaning shorten their life." } },
      ],
      guideLink: "dental-implants",
    },

    /* ============ B. VENEERS & AESTHETICS ============ */
    {
      slug: "veneers",
      service: "cosmetic-restorative-dentistry",
      ref: { ar: "تجميل الأسنان والفينير", en: "veneers and aesthetic dentistry" },
      waService: { ar: "استشارة تجميل الأسنان والفينير", en: "a veneers and smile consultation" },
      title: { ar: "فينير وتجميل الأسنان في الإسكندرية | Tooth Shine", en: "Veneers and Aesthetic Dentistry in Alexandria | Tooth Shine" },
      meta: { ar: "فينير كومبوزيت وفينير إي ماكس وتركيبات زيركونيا في مركز أسنان شاين. حالات حقيقية، وتصميم شكل ولون يناسب وشك. سبورتنج والعجمي.", en: "Composite veneers, E.max veneers and zirconia restorations at Tooth Shine. Real cases and a shape and shade designed for your face. Sporting and Agami." },
      h1: { ar: "ابتسامتك تستحق تصميم يناسبك", en: "Your smile deserves a design that suits you" },
      h1sub: { ar: "تجميل الأسنان في Tooth Shine", en: "Aesthetic dentistry at Tooth Shine" },
      lead: {
        ar: "فينير كومبوزيت، فينير إي ماكس، أو تركيبات زيركونيا. بنختار الحل حسب سنانك ووشك، وبنحافظ على أكبر قدر من السنة الطبيعية لما يكون ده مناسب.",
        en: "Composite veneers, E.max veneers or zirconia restorations. We choose according to your teeth and face, and keep as much natural tooth as possible when that is appropriate.",
      },
      cta: { ar: "احجز استشارة تجميل", en: "Book a smile consultation" },
      chips: [
        { icon: "scanner", ar: "مسح رقمي للأسنان", en: "Digital scan" },
        { icon: "veneer", ar: "كومبوزيت · إي ماكس · زيركونيا", en: "Composite · E.max · Zirconia" },
        { icon: "star", ar: "{rating}", en: "{rating}" },
      ],
      heroCase: "smile-1-before",
      sections: ["cases", "veneer3d", "options", "materials", "process", "reviews", "faq", "book"],
      caseServices: ["cosmetic-restorative-dentistry", "composite-veneers", "teeth-whitening"],
      options: {
        title: { ar: "كومبوزيت، سيراميك، ولا تاج؟", en: "Composite, ceramic or a crown?" },
        cols: [{ ar: "", en: "" }, { ar: "فينير كومبوزيت", en: "Composite veneer" }, { ar: "فينير سيراميك (إي ماكس)", en: "Ceramic veneer (E.max)" }, { ar: "تاج كامل", en: "Full crown" }],
        rows: [
          [{ ar: "البرد", en: "Reduction" }, { ar: "قليل جدًا أو مافيش", en: "Minimal or none" }, { ar: "خفيف في المينا غالبًا", en: "Usually light, in enamel" }, { ar: "من كل الجهات", en: "On every side" }],
          [{ ar: "بيتعمل فين", en: "Made" }, { ar: "في العيادة، في نفس الجلسة غالبًا", en: "In the clinic, often in one visit" }, { ar: "في المعمل، على أكتر من زيارة", en: "In the lab, over several visits" }, { ar: "في المعمل، على أكتر من زيارة", en: "In the lab, over several visits" }],
          [{ ar: "ثبات اللون", en: "Colour stability" }, { ar: "ممكن يتغير مع الوقت", en: "Can stain over time" }, { ar: "ثابت جدًا", en: "Very stable" }, { ar: "ثابت جدًا", en: "Very stable" }],
          [{ ar: "مناسب لـ", en: "Suits" }, { ar: "تعديلات بسيطة في الشكل والفراغات", en: "Small changes in shape and gaps" }, { ar: "تغيير اللون والشكل لأسنان سليمة", en: "Changing colour and shape of sound teeth" }, { ar: "أسنان مكسورة أو متآكلة أو متعالجة عصب", en: "Broken, worn or root-treated teeth" }],
        ],
      },
      process: {
        title: { ar: "خطوات تجميل الابتسامة", en: "How a smile makeover works" },
        steps: [
          { ar: "استشارة: نسمع إيه اللي مضايقك ونكشف على الأسنان واللثة", en: "Consultation: what bothers you, and a check of teeth and gums" },
          { ar: "مسح رقمي وصور، وتخطيط الشكل واللون المناسبين لوشك", en: "Digital scan and photos, planning a shape and shade that suit your face" },
          { ar: "علاج أي مشكلة الأول (تسوس أو لثة) قبل التجميل", en: "Any decay or gum problem is treated first" },
          { ar: "تحضير بسيط لو محتاج، وتجربة قبل اللصق النهائي", en: "Minimal preparation if needed, and a try-in before final bonding" },
          { ar: "اللصق النهائي، وتعليمات العناية والمتابعة", en: "Final bonding, care instructions and follow-up" },
        ],
      },
      faqs: [
        { q: { ar: "الفينير بيبرد السنة؟", en: "Do veneers shave the teeth?" }, a: { ar: "حسب النوع والحالة. الكومبوزيت غالبًا برد بسيط جدًا أو مافيش، والسيراميك غالبًا برد خفيف في المينا، وفي حالات مختارة من غير برد. التاج هو اللي محتاج برد أكبر.", en: "It depends on the type and the case. Composite usually needs minimal or no reduction; ceramic usually needs light enamel reduction, and selected cases none. Crowns need much more." } },
        { q: { ar: "الفينير شكله طبيعي؟", en: "Do veneers look natural?" }, a: { ar: "بنختار الشكل واللون مع بعض حسب وشك ولون أسنانك، وبنعمل تجربة قبل اللصق النهائي عشان تشوف النتيجة.", en: "We choose shape and shade together to suit your face and teeth, with a try-in before final bonding so you can see the result." } },
        { q: { ar: "الفينير بيعيش قد إيه؟", en: "How long do veneers last?" }, a: { ar: "بيختلف حسب المادة والعناية والعادات زي الضغط على الأسنان. السيراميك عمره أطول غالبًا من الكومبوزيت، والكومبوزيت أسهل في الإصلاح.", en: "It depends on the material, care and habits such as grinding. Ceramic usually lasts longer than composite; composite is easier to repair." } },
        { q: { ar: "ينفع أبيّض بدل الفينير؟", en: "Could whitening be enough?" }, a: { ar: "لو المشكلة في اللون بس، التبييض ممكن يكون كفاية وأبسط. بنقولك ده بصراحة في الكشف.", en: "If colour is the only concern, whitening may be enough and simpler. We will tell you honestly at the consultation." } },
      ],
      guideLink: "cosmetic-restorative-dentistry",
    },

    /* ============ C. DENTAL ANXIETY & ELECTRONIC ANAESTHESIA ============ */
    {
      slug: "dental-anxiety",
      service: "dental-examination",
      ref: { ar: "الخوف من علاج الأسنان", en: "dental anxiety" },
      waService: { ar: "كشف هادي (عندي خوف من علاج الأسنان)", en: "a calm first visit (I'm nervous about dental treatment)" },
      title: { ar: "خايف من علاج الأسنان؟ قلم البنج الإلكتروني | Tooth Shine", en: "Nervous About the Dentist? Computer-Controlled Anaesthesia | Tooth Shine" },
      meta: { ar: "في مركز أسنان شاين راحتك جزء من خطة العلاج: أول زيارة كلام وكشف، إشارة متفق عليها للتوقف، وقلم البنج الإلكتروني في الحالات المناسبة. سبورتنج والعجمي.", en: "At Tooth Shine your comfort is part of the plan: a first visit that is just a talk and a check, an agreed stop signal, and computer-controlled anaesthesia where suitable." },
      h1: { ar: "خايف من علاج الأسنان؟", en: "Nervous about dental treatment?" },
      h1sub: { ar: "في Tooth Shine راحتك جزء من خطة العلاج", en: "At Tooth Shine your comfort is part of the plan" },
      lead: {
        ar: "الخوف من الدكتور أو من الحقنة إحساس طبيعي ومنتشر جدًا. بنمشي معاك بالراحة: أول زيارة ممكن تكون كلام وكشف بس، وبنشرح كل خطوة قبل ما نعملها، وإنت اللي بتقول نكمّل ولا نستنى.",
        en: "Feeling nervous about the dentist or injections is very common. We go at your pace: the first visit can be just a talk and a check, we explain each step before doing it, and you decide when we continue or pause.",
      },
      cta: { ar: "احجز كشف هادي", en: "Book a calm first visit" },
      chips: [
        { icon: "pen", ar: "قلم البنج الإلكتروني", en: "Computer-controlled anaesthesia" },
        { icon: "ear", ar: "إشارة توقف متفق عليها", en: "An agreed stop signal" },
        { icon: "star", ar: "{rating}", en: "{rating}" },
      ],
      heroDevice: true,
      sections: ["cclad", "firstVisit", "approaches", "reviews", "faq", "book"],
      firstVisit: {
        title: { ar: "أول زيارة: من غير مفاجآت", en: "Your first visit: no surprises" },
        steps: [
          { ar: "بنسمع منك الأول: إيه اللي مخوّفك، وإيه اللي حصل معاك قبل كده", en: "We listen first: what worries you and what happened before" },
          { ar: "كشف هادي، وأشعة لو محتاجين، من غير أي علاج إلا لو إنت عايز", en: "A gentle check and X-rays if needed, with no treatment unless you want it" },
          { ar: "نشرح لك اللي شايفينه والاختيارات المتاحة ببساطة", en: "We explain what we see and your options simply" },
          { ar: "نتفق مع بعض على خطة وعلى إشارة توقف (زي رفع الإيد)", en: "We agree a plan together, and a stop signal such as raising your hand" },
        ],
      },
      signal: {
        title: { ar: "إشارة التوقف", en: "The stop signal" },
        body: { ar: "قبل ما نبدأ بنتفق على إشارة، غالبًا رفع الإيد الشمال. أول ما ترفعها بنقف ونسمعك. ده بيخليك متحكم في الجلسة.", en: "Before we start we agree a signal, usually raising your left hand. As soon as you raise it we stop and listen, so you stay in control." },
      },
      approaches: {
        title: { ar: "إزاي بنساعدك تكون مرتاح", en: "How we help you feel at ease" },
        items: [
          { icon: "ear", title: { ar: "بنشرح قبل ما نعمل", en: "Explain before we act" }, body: { ar: "كل خطوة بتعرفها قبلها: هتحس بإيه وهتاخد قد إيه.", en: "You know each step beforehand: what you'll feel and how long it takes." } },
          { icon: "pen", title: { ar: "قلم البنج الإلكتروني", en: "Computer-controlled anaesthesia" }, body: { ar: "في الحالات المناسبة، لحقنة أهدى بتدفق بطيء ومنتظم.", en: "Where suitable, for a gentler injection with a slow, steady flow." } },
          { icon: "clock", title: { ar: "جلسات أقصر", en: "Shorter visits" }, body: { ar: "ممكن نقسم العلاج على جلسات أقصر لو ده أريح لك.", en: "Treatment can be split into shorter visits if that suits you." } },
          { icon: "check", title: { ar: "نبدأ بالأبسط", en: "Start simple" }, body: { ar: "غالبًا بنبدأ بخطوة سهلة عشان تتعود على المكان والفريق.", en: "We often start with an easy step so you get used to the place and the team." } },
        ],
      },
      faqs: [
        { q: { ar: "هل العلاج هيبقى من غير أي ألم؟", en: "Will treatment be completely painless?" }, a: { ar: "مش هنوعدك بده لأن كل واحد إحساسه مختلف. اللي بنوعدك بيه إننا هنعمل كل اللي نقدر عليه عشان تكون مرتاح، وهنقف أول ما تطلب.", en: "We won't promise that, because everyone feels things differently. We do promise to do everything we can to keep you comfortable, and to stop as soon as you ask." } },
        { q: { ar: "قلم البنج الإلكتروني ده ليزر؟", en: "Is the device a laser?" }, a: { ar: "لا، مش ليزر. هو جهاز بيتحكم في سرعة وضغط دخول البنج أثناء الحقنة. لسه فيه حقنة، بس بتدفق بطيء ومنتظم.", en: "No, it is not a laser. It controls the speed and pressure of the anaesthetic during the injection. There is still an injection, but with a slow, steady flow." } },
        { q: { ar: "ينفع أول زيارة تبقى كلام بس؟", en: "Can my first visit be just a talk?" }, a: { ar: "أيوه. قول لنا وإنت بتحجز إنك عايز تبدأ بكشف وكلام بس، ومش هنعمل أي علاج إلا لو وافقت.", en: "Yes. Tell us when booking that you'd like to start with a check and a talk, and no treatment will happen unless you agree." } },
        { q: { ar: "بتتعاملوا مع الأطفال الخايفين؟", en: "Do you see anxious children?" }, a: { ar: "أيوه، وبنتعامل معاهم بهدوء وبنفس المبدأ: شرح بسيط وخطوات صغيرة.", en: "Yes, calmly and on the same principle: simple explanations and small steps." } },
      ],
      reviewNames: ["Mirvat F.", "Amel H.", "Bassant Y.", "Rody H.", "Bosy S.", "Engy H."],
      guideLink: "dental-examination",
    },
  ],
};
