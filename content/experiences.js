/* =====================================================================
   3D + motion educational experiences (texts shown OUTSIDE the 3D scene)
   Schematic teaching models — not a patient's anatomy, not a promise.
   All clinical wording here needs Dr. Beshay's approval before going live.
   ===================================================================== */
module.exports = {
  ui: {
    start: { ar: "شغّل النموذج ثلاثي الأبعاد", en: "Start the 3D model" },
    loading: { ar: "بيحمّل النموذج…", en: "Loading the model…" },
    hint: { ar: "اسحب بصباعك عشان تلف النموذج، وصباعين للتكبير", en: "Drag to rotate, pinch or scroll to zoom" },
    rotL: { ar: "لف لليمين", en: "Rotate left" },
    rotR: { ar: "لف للشمال", en: "Rotate right" },
    reset: { ar: "رجّع الوضع", en: "Reset view" },
    noGL: { ar: "جهازك مش بيدعم العرض ثلاثي الأبعاد، فبنعرض لك صورة ثابتة من نفس النموذج.", en: "Your device can't show 3D here, so you're seeing a still image of the same model." },
    posterTag: { ar: "نموذج تعليمي ثلاثي الأبعاد، وليس حالة مريض", en: "Educational 3D model, not a patient case" },
    tabsLabel: { ar: "اختار التجربة", en: "Choose an experience" },
    disclaimer: {
      ar: "نموذج تعليمي مبسّط. شكل العظم واللثة والأسنان بيختلف من شخص للتاني، والخطة المناسبة بتتحدد بعد الكشف والأشعة.",
      en: "A simplified teaching model. Bone, gums and teeth differ from person to person; the right plan is decided after an examination and X-rays.",
    },
  },

  /* ---------- A. implant explorer ---------- */
  implant: {
    tab: { ar: "الزرعة من جوه", en: "Inside an implant" },
    kicker: { ar: "تجربة ثلاثية الأبعاد", en: "3D experience" },
    title: { ar: "اتفرج على الزرعة من كل الزوايا", en: "Explore a dental implant from every angle" },
    lead: {
      ar: "لف النموذج، وافصل الأجزاء، وقارن بين الزرعة والكوبري التقليدي.",
      en: "Rotate the model, separate the parts, and compare an implant with a conventional bridge.",
    },
    controls: [
      { set: "assemble:1", label: { ar: "شوف التركيب خطوة بخطوة", en: "Watch it assemble" }, info: "assemble" },
      { set: "explode:on", label: { ar: "افصل الأجزاء", en: "Separate the parts" }, info: "parts", toggle: "explode:off" },
      { set: "tissue:ghost", label: { ar: "خلّي العظم واللثة شفافين", en: "See through bone and gum" }, info: "tissue", toggle: "tissue:on" },
    ],
    modes: [
      { set: "mode:implant", label: { ar: "زرعة", en: "Implant" }, info: "implant" },
      { set: "mode:bridge", label: { ar: "كوبري تقليدي", en: "Conventional bridge" }, info: "bridge" },
    ],
    info: {
      implant: {
        title: { ar: "الزرعة: بتعوّض السنة من الجذر", en: "Implant: replaces the tooth from the root" },
        body: {
          ar: "الزرعة بتتثبت في عظم الفك مكان الجذر، وعليها دعامة وتاج. مش بنلمس الأسنان اللي جنبها، بس محتاجة عظم كافي وحالة صحية مناسبة، وفترة علاج أطول من الكوبري غالبًا.",
          en: "The implant sits in the jawbone where the root was, with an abutment and a crown on top. The neighbouring teeth are left untouched, but it needs enough bone, suitable general health and usually a longer treatment time than a bridge.",
        },
      },
      bridge: {
        title: { ar: "الكوبري: بيعتمد على السنتين اللي جنب الفراغ", en: "Bridge: supported by the teeth beside the gap" },
        body: {
          ar: "عشان نركب كوبري لازم نبرد السنتين اللي جنب الفراغ (اللون الأصفر في النموذج) ونلبسهم تيجان متصلة بالسنة الناقصة. أسرع غالبًا ومش محتاج جراحة، بس بيشيل جزء من سنتين سليمين.",
          en: "A bridge needs the two neighbouring teeth to be reduced (yellow in the model) and covered with crowns joined to the missing tooth. It is usually quicker and needs no surgery, but it removes part of two healthy teeth.",
        },
      },
      parts: {
        title: { ar: "التلات أجزاء", en: "The three parts" },
        body: {
          ar: "الزرعة (Fixture): من التيتانيوم وبتتثبت في العظم. الدعامة (Abutment): الوصلة اللي بتعدي من اللثة. التاج (Crown): السنة اللي بتبان، وشكلها ولونها بيتصمموا عشان يناسبوا أسنانك.",
          en: "Fixture: the titanium part placed in the bone. Abutment: the connector that passes through the gum. Crown: the visible tooth, shaped and shaded to match your teeth.",
        },
      },
      assemble: {
        title: { ar: "الترتيب الطبيعي للعلاج", en: "The usual order of treatment" },
        body: {
          ar: "بنركب الزرعة الأول، وبعد ما العظم يلتحم بيها (فترة بتختلف من حالة لحالة) بنركب الدعامة والتاج. في حالات مختارة ممكن تاج مؤقت بدري، حسب ثبات الزرعة.",
          en: "The implant goes in first; once the bone has bonded to it (the time varies between cases) the abutment and crown follow. In selected cases a temporary tooth can be fitted early, depending on implant stability.",
        },
      },
      tissue: {
        title: { ar: "العظم واللثة", en: "Bone and gum" },
        body: {
          ar: "كمية العظم وسمك اللثة بيختلفوا من شخص للتاني، وده من أهم أسباب إن كل خطة زراعة مختلفة. الأشعة المقطعية (CBCT) بتوضح ده قبل أي قرار.",
          en: "Bone volume and gum thickness differ between people, which is a main reason every implant plan is different. A CBCT scan shows this before any decision.",
        },
      },
    },
  },

  /* ---------- B. guided surgery sequence ---------- */
  guided: {
    tab: { ar: "الزراعة بالدليل الجراحي", en: "Guided implant surgery" },
    kicker: { ar: "التخطيط الرقمي", en: "Digital planning" },
    title: { ar: "من الأشعة للتاج: إزاي بنخطط الزرعة بالدليل الجراحي", en: "From scan to crown: how a guided implant is planned" },
    lead: {
      ar: "ست خطوات، كل خطوة بتبني على اللي قبلها. اضغط على أي خطوة عشان تشوفها.",
      en: "Six steps, each building on the last. Tap a step to see it.",
    },
    stepLabel: { ar: "الخطوة", en: "Step" },
    prev: { ar: "السابق", en: "Previous" },
    next: { ar: "التالي", en: "Next" },
    stages: [
      { short: { ar: "أشعة CBCT", en: "CBCT scan" }, title: { ar: "أشعة مقطعية ثلاثية الأبعاد (CBCT)", en: "3D CBCT scan" }, body: { ar: "بتوضح ارتفاع وعرض العظم ومكان العصب والجيوب الأنفية. بنعملها في مركز أشعة متخصص قبل التخطيط.", en: "Shows bone height and width and the position of the nerve and sinus. It is taken at a specialist radiology centre before planning." } },
      { short: { ar: "مسح رقمي", en: "Intraoral scan" }, title: { ar: "مسح رقمي للأسنان بالماسح الضوئي", en: "Digital scan with the intraoral scanner" }, body: { ar: "الماسح الضوئي داخل الفم بيسجّل شكل الأسنان واللثة رقميًا، من غير معجون المقاس في أغلب الحالات.", en: "The intraoral scanner records the teeth and gums digitally, usually without impression paste." } },
      { short: { ar: "تخطيط", en: "Planning" }, title: { ar: "تخطيط يبدأ من شكل السنة النهائية", en: "Planning that starts from the final tooth" }, body: { ar: "بندمج الأشعة مع المسح، ونحدد مكان التاج النهائي الأول، وبعدين نختار مكان الزرعة وزاويتها وطولها اللي يخدموه في حدود العظم المتاح (Prosthetically driven planning).", en: "The CBCT and scan are merged; the final crown position is set first, then the implant position, angle and length that support it within the available bone (prosthetically driven planning)." } },
      { short: { ar: "الدليل", en: "Guide" }, title: { ar: "دليل جراحي على مقاس أسنانك", en: "A surgical guide made for your mouth" }, body: { ar: "بيتصمم ويتصنع دليل بيتركب على الأسنان، وفيه جلبة معدنية بتوجّه الحفر والزرعة حسب الخطة.", en: "A guide that fits over the teeth is designed and made, with a metal sleeve that directs drilling and placement according to the plan." } },
      { short: { ar: "تركيب الزرعة", en: "Placement" }, title: { ar: "تركيب الزرعة من خلال الدليل", en: "Placing the implant through the guide" }, body: { ar: "الدليل وسيلة لنقل الخطة للفم. الجراح بيفضل متابع ومقيّم أثناء الجراحة، وممكن يعدّل لو الموقف استدعى ده.", en: "The guide transfers the plan to the mouth. The surgeon keeps assessing throughout and can adapt if the situation calls for it." } },
      { short: { ar: "التركيبة", en: "Restoration" }, title: { ar: "الدعامة والتاج", en: "Abutment and crown" }, body: { ar: "بعد فترة الالتئام المناسبة، أو بدري في حالات مختارة، بتتركب الدعامة والتاج اللي اتخطط له من الأول.", en: "After the appropriate healing time, or early in selected cases, the abutment and the crown planned at the start are fitted." } },
    ],
    note: {
      ar: "الجراحة بالدليل أسلوب تخطيط ونقل للخطة، مش ضمان لدقة مطلقة أو لنجاح العلاج. ومش كل حالة محتاجة دليل جراحي؛ ده بيتحدد بعد الكشف والأشعة.",
      en: "Guided surgery is a planning and transfer technique, not a guarantee of absolute precision or of success. Not every case needs a guide; this is decided after examination and imaging.",
    },
    terms: {
      title: { ar: "أربع مصطلحات بتتلخبط في بعض", en: "Four terms that often get mixed up" },
      lead: { ar: "كل واحدة فيهم معناها مختلف، وممكن تتجمع أو لا حسب الحالة.", en: "Each means something different, and they may or may not be combined depending on the case." },
      items: [
        { icon: "implant", name: "Guided surgery", title: { ar: "الزراعة بالدليل الجراحي", en: "Guided surgery" }, body: { ar: "تخطيط رقمي للزرعة قبل الجراحة، ودليل بينقل الخطة للفم.", en: "Digital planning before surgery, with a guide that transfers the plan to the mouth." }, when: { ar: "مفيدة لما المكان محتاج دقة في التخطيط أو العظم محدود.", en: "Useful when precise planning matters or bone is limited." } },
        { icon: "sparkle", name: "Flapless", title: { ar: "الزراعة من غير فتح لثة", en: "Flapless placement" }, body: { ar: "تركيب الزرعة من فتحة صغيرة في اللثة بدل ما نفتح اللثة ونرفعها.", en: "Placing the implant through a small opening in the gum instead of lifting a gum flap." }, when: { ar: "بس لما العظم واللثة كافيين، ومش مناسبة لو محتاجين نشوف العظم أو نزوده.", en: "Only when bone and gum are sufficient; not suitable if the bone must be seen or built up." } },
        { icon: "clock", name: "Immediate implant", title: { ar: "الزراعة الفورية بعد الخلع", en: "Immediate implant" }, body: { ar: "تركيب الزرعة في نفس جلسة خلع السنة.", en: "Placing the implant at the same visit as the extraction." }, when: { ar: "لما حالة العظم والأنسجة حوالين السنة تسمح بكده.", en: "When the bone and tissues around the tooth allow it." } },
        { icon: "check", name: "Immediate loading", title: { ar: "التحميل الفوري", en: "Immediate loading" }, body: { ar: "تركيب سنة (غالبًا مؤقتة) على الزرعة خلال أيام قليلة من تركيبها.", en: "Fitting a tooth (usually temporary) on the implant within a few days of placement." }, when: { ar: "بس لو الزرعة ثابتة كفاية من أول يوم، وده بيتقاس أثناء الجراحة.", en: "Only if the implant is stable enough from day one, which is measured during surgery." } },
      ],
    },
  },

  /* ---------- C. veneers cross-section ---------- */
  veneer: {
    tab: { ar: "الفينير والتيجان", en: "Veneers and crowns" },
    kicker: { ar: "تجميل الأسنان", en: "Aesthetic dentistry" },
    title: { ar: "قطاع في السنة: الفرق بين الفينير والتاج", en: "A slice through the tooth: veneer versus crown" },
    lead: {
      ar: "اختار نوع التركيبة وشوف المادة التجميلية (باللون الأزرق) وقد إيه بنشيل من السنة الطبيعية.",
      en: "Choose a restoration to see the material (in blue) and how much natural tooth is removed.",
    },
    layers: [
      { set: "layer:natural", label: { ar: "السنة الطبيعية", en: "Natural tooth" }, title: { ar: "السنة الطبيعية", en: "The natural tooth" }, body: { ar: "المينا هي الطبقة الخارجية اللامعة، تحتها العاج (الأصفر)، وفي النص العصب. أغلب الفينير بيشتغل في حدود المينا.", en: "Enamel is the glossy outer layer, dentine (yellow) lies beneath, and the nerve sits in the centre. Most veneers work within the enamel." }, prep: { ar: "—", en: "—" } },
      { set: "layer:composite", label: { ar: "فينير كومبوزيت", en: "Composite veneer" }, title: { ar: "فينير كومبوزيت", en: "Composite veneer" }, body: { ar: "مادة بلون السنة بتتضاف على وش السنة طبقات وبتتشكل في العيادة. في حالات كتير بيحتاج برد بسيط جدًا أو مافيش برد، وسهل يتصلح، بس ممكن لونه يتغير مع الوقت ويحتاج تلميع أو تجديد.", en: "Tooth-coloured material added in layers to the front of the tooth and shaped in the clinic. Often little or no reduction is needed and it is easy to repair, but it can stain over time and need polishing or renewal." }, prep: { ar: "برد بسيط جدًا أو من غير برد (حسب الحالة)", en: "Minimal or no reduction (case dependent)" } },
      { set: "layer:ceramic", label: { ar: "فينير سيراميك (إي ماكس)", en: "Ceramic veneer (E.max)" }, title: { ar: "فينير سيراميك (إي ماكس)", en: "Ceramic veneer (E.max)" }, body: { ar: "قشرة خزف رفيعة بتتصنع في المعمل وبتتلصق على وش السنة. غالبًا بتحتاج برد خفيف في حدود المينا، وفي حالات مختارة ممكن من غير برد. لونها ثابت ولمعتها طبيعية.", en: "A thin porcelain shell made in the lab and bonded to the front of the tooth. It usually needs light reduction within the enamel; selected cases need none. Its colour is stable with a natural lustre." }, prep: { ar: "برد خفيف في المينا، غالبًا أقل من مليمتر (حسب الحالة)", en: "Light enamel reduction, usually under 1 mm (case dependent)" } },
      { set: "layer:crown", label: { ar: "تاج (كراون)", en: "Full crown" }, title: { ar: "تاج يغطي السنة كلها", en: "A crown covering the whole tooth" }, body: { ar: "التاج بيغطي السنة من كل الجهات، فبيحتاج برد أكبر بكتير من الفينير. بنلجأ له لما السنة مكسورة أو متآكلة كتير أو محتاجة حماية كاملة.", en: "A crown covers the tooth on every side, so it needs much more reduction than a veneer. It is used when a tooth is broken, heavily worn or needs full protection." }, prep: { ar: "برد من كل الجهات، غالبًا أكتر من مليمتر (حسب المادة)", en: "Reduction on all sides, usually over 1 mm (material dependent)" } },
    ],
    prepLabel: { ar: "كمية البرد", en: "Tooth reduction" },
    note: {
      ar: "الأرقام تقريبية للتوضيح. مش كل فينير بدون برد، وكمية البرد بتتحدد لكل سنة حسب شكلها ولونها ومكانها.",
      en: "Figures are approximate. Not every veneer is no-prep; the reduction is decided tooth by tooth according to shape, colour and position.",
    },
    materials: {
      title: { ar: "إي ماكس ولا زيركونيا؟", en: "E.max or zirconia?" },
      cols: [{ ar: "", en: "" }, { ar: "إي ماكس (ليثيوم دايسيليكات)", en: "E.max (lithium disilicate)" }, { ar: "زيركونيا", en: "Zirconia" }],
      rows: [
        [{ ar: "الشكل", en: "Appearance" }, { ar: "شفافية ولمعة قريبة جدًا من السنة الطبيعية", en: "Translucency and lustre very close to natural teeth" }, { ar: "الأنواع الحديثة شكلها كويس، بس غالبًا أقل شفافية", en: "Modern types look good but are usually less translucent" }],
        [{ ar: "القوة", en: "Strength" }, { ar: "قوية ومناسبة للأسنان الأمامية", en: "Strong, well suited to front teeth" }, { ar: "قوية جدًا، مناسبة للضروس والكباري", en: "Very strong, suits back teeth and bridges" }],
        [{ ar: "الاستخدام الشائع", en: "Typical use" }, { ar: "فينير وتيجان أمامية", en: "Veneers and front crowns" }, { ar: "تيجان خلفية، كباري، وتركيبات على الزرعات", en: "Back crowns, bridges and implant restorations" }],
      ],
      note: { ar: "الاختيار بيتحدد حسب مكان السنة والعضة والشكل المطلوب.", en: "The choice depends on the tooth position, the bite and the look you want." },
    },
  },

  /* ---------- D. computer-controlled local anaesthesia ---------- */
  cclad: {
    kicker: { ar: "قلم البنج الإلكتروني", en: "Computer-controlled anaesthesia" },
    title: { ar: "إزاي الجهاز بيتحكم في دخول البنج؟", en: "How does the device control the injection?" },
    lead: {
      ar: "الفرق مش في نوع البنج، الفرق في طريقة دخوله: الجهاز بيدخّل البنج ببطء وبمعدل ثابت بدل ما يعتمد على ضغط الإيد بس.",
      en: "The difference is not the anaesthetic itself but how it is delivered: the device releases it slowly and at a steady rate instead of relying on hand pressure alone.",
    },
    laneHand: { ar: "حقنة عادية", en: "Standard syringe" },
    laneHandSub: { ar: "السرعة والضغط بيعتمدوا على الإيد", en: "Speed and pressure depend on the hand" },
    laneDevice: { ar: "قلم البنج الإلكتروني", en: "Computer-controlled device" },
    laneDeviceSub: { ar: "تدفق بطيء ومنتظم بيتحكم فيه الجهاز", en: "Slow, regulated flow controlled by the device" },
    axis: { ar: "الوقت", en: "Time" },
    steps: [
      { ar: "جل مخدر موضعي على اللثة في الحالات المناسبة", en: "Topical numbing gel where suitable" },
      { ar: "بداية بطيئة جدًا عشان الأنسجة تتعود", en: "A very slow start so the tissue adjusts" },
      { ar: "تدفق ثابت بيظبطه الجهاز طول الحقنة", en: "A steady flow regulated by the device throughout" },
      { ar: "بنستنى مفعول البنج قبل ما نبدأ العلاج", en: "We wait for the anaesthetic to work before starting" },
    ],
    note: {
      ar: "ده مش ليزر ومش بيلغي الحقنة. ممكن يقلل الإحساس بالحقنة عند كتير من المرضى، لكن الإحساس بيختلف من شخص للتاني.",
      en: "This is not a laser and it does not replace the injection. It may make the injection feel gentler for many patients, but everyone's experience differs.",
    },
    devicePending: { ar: "رسم توضيحي للجهاز. صورة الجهاز الحقيقي في العيادة هتتحط هنا.", en: "Illustration of the device. A photo of the clinic's actual device will go here." },
  },
};
