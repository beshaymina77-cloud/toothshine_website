/* =====================================================================
   IMPLANT GUIDE — the six explained sections on the dental-implants page.
   Medical text approved by Dr. Beshay Mina on 2026-11-13.
   Blocks: p | ul | ol | table | fig (image) | diagram (src/diagrams.js) | cta
   **bold** is allowed inside text.
   ===================================================================== */
module.exports = {
  tocTitle: { ar: "في الصفحة دي", en: "On this page" },
  cta: { ar: "احجز تقييم زراعة", en: "Book an implant assessment" },
  reviewed: {
    ar: "راجع المحتوى الطبي: د. بشاي مينا، طبيب أسنان، مؤسس مركز توث شاين. تاريخ المراجعة: ١٣ نوفمبر ٢٠٢٦. المعلومات دي للتوعية وماتغنيش عن الكشف.",
    en: "Medical content reviewed by Dr. Beshay Mina, dentist and founder of Tooth Shine Dental Center. Review date: 13 November 2026. This information is for education and does not replace an examination.",
  },
  sections: [
    {
      id: "single-implant",
      title: { ar: "زراعة سنة واحدة", en: "Replacing a single tooth" },
      blocks: [
        { p: { ar: "الزرعة بتعوّض السنة الناقصة من جذرها لحد تاجها، من غير ما نلمس الأسنان اللي جنبها. وهي مكوّنة من ٣ أجزاء:", en: "An implant replaces a missing tooth from root to crown without touching the neighbouring teeth. It has three parts:" } },
        { table: {
          ar: { cols: ["الجزء", "هو إيه", "بيعمل إيه"], rows: [
            ["الزرعة (Implant)", "مسمار صغير من التيتانيوم", "بتتثبت جوه العظم مكان الجذر، والعظم بيلتحم حواليها مع الوقت"],
            ["الدعامة (Abutment)", "قطعة وصل صغيرة", "بتربط الزرعة بالتاج وبتظهر فوق اللثة"],
            ["التاج (Crown)", "السنة اللي بتبان", "بيتعمل بلون وشكل قريب من أسنانك، من الزركونيا أو البورسلين حسب الحالة"],
          ] },
          en: { cols: ["Part", "What it is", "What it does"], rows: [
            ["Implant", "A small titanium post", "Placed in the bone where the root was; the bone bonds to it over time"],
            ["Abutment", "A small connector", "Joins the implant to the crown and sits just above the gum"],
            ["Crown", "The visible tooth", "Made to match your teeth in shape and shade, in zirconia or porcelain depending on the case"],
          ] },
        } },
        { fig: { src: "assets/img/illustrations/implant-parts.webp", alt: { ar: "رسم ثلاثي الأبعاد لأجزاء زراعة الأسنان: الزرعة في العظم والدعامة والتاج", en: "3D illustration of dental implant parts: implant in the bone, abutment and crown" }, caption: { ar: "أجزاء الزرعة: الزرعة جوه العظم، ثم الدعامة، ثم التاج.", en: "Implant parts: the implant in the bone, the abutment, then the crown." } } },
        { h: { ar: "الخطوات بالترتيب", en: "The steps, in order" } },
        { ol: {
          ar: [
            "**كشف وتشخيص:** نشوف اللثة والأسنان اللي جنب المكان، ونراجع تاريخك الصحي والأدوية اللي بتاخدها.",
            "**أشعة CBCT ثلاثية الأبعاد:** بنطلبها من مركز أشعة متخصص، عشان نعرف كمية العظم ومكان الأعصاب والجيوب الأنفية.",
            "**خطة مكتوبة:** نشرحلك الاختيارات وعدد الزيارات المتوقع، ونرد على أسئلتك قبل أي خطوة.",
            "**تثبيت الزرعة:** تحت بنج موضعي.",
            "**فترة الالتحام:** العظم بيلتحم حوالين الزرعة، ومدتها بتختلف من حالة لحالة. في حالات مناسبة ممكن نركب سنة مؤقتة بسرعة (شوف الزراعة الفورية تحت).",
            "**التاج النهائي:** ناخد مقاس ونركب الدعامة والتاج.",
            "**المتابعة:** زيارات دورية وتنظيف منتظم، لأن الزرعة محتاجة عناية زي السنة الطبيعية بالظبط.",
          ],
          en: [
            "**Examination:** we check the gum and neighbouring teeth and review your medical history and medicines.",
            "**A 3D CBCT scan:** taken at a specialist radiology centre, to see the bone and the position of nerves and sinuses.",
            "**A written plan:** we explain the options and expected number of visits, and answer your questions before any step.",
            "**Placing the implant:** under local anaesthesia.",
            "**Healing:** the bone bonds around the implant; how long this takes varies. In suitable cases a temporary tooth can be fitted early (see immediate implants below).",
            "**The final crown:** an impression is taken and the abutment and crown are fitted.",
            "**Follow-up:** regular check-ups and daily cleaning, because an implant needs the same care as a natural tooth.",
          ],
        } },
        { p: { ar: "لو العظم مش كفاية، الخطة ممكن تحتاج مرحلة إضافية قبل الزراعة أو معاها، وده بيتحدد بعد الكشف والأشعة.", en: "If there is not enough bone, the plan may need an extra stage before or with the implant; this is decided after the examination and X-rays." } },
      ],
    },
    {
      id: "implant-vs-bridge",
      title: { ar: "الزرعة ولا الكوبري؟", en: "Implant or bridge?" },
      blocks: [
        { p: { ar: "الاتنين حلول ثابتة لسنة ناقصة. الفرق الأساسي إن الكوبري بيعتمد على الأسنان اللي جنب المكان، والزرعة بتعتمد على العظم. القرار النهائي بيتاخد بعد الكشف.", en: "Both are fixed ways to replace a missing tooth. The key difference is that a bridge relies on the neighbouring teeth, while an implant relies on the bone. The final decision is made after the examination." } },
        { diagram: "implantVsBridge", caption: { ar: "نفس الفراغ مرتين: مرة بزرعة واحدة، ومرة بكوبري على السنتين اللي جنبه.", en: "The same gap twice: once with a single implant, once with a bridge on the two neighbouring teeth." } },
        { table: {
          ar: { cols: ["وجه المقارنة", "الزرعة الواحدة", "الكوبري التقليدي"], rows: [
            ["بيتثبت في إيه", "في العظم مكان الجذر", "على السنتين اللي جنب الفراغ"],
            ["الأسنان اللي جنبها", "مابتتلمسش", "بتتبرد عشان تشيل الكوبري"],
            ["المدة لحد السنة النهائية", "أطول غالبًا، لأنها محتاجة فترة التحام", "أقصر غالبًا، في عدد زيارات قليل"],
            ["التنظيف", "زي السنة الطبيعية بالفرشاة والخيط", "محتاج خيط خاص أو فرشاة بين الأسنان تحت الكوبري"],
            ["المتابعة", "زيارات دورية للاطمئنان على اللثة والعظم حوالين الزرعة", "زيارات دورية للاطمئنان على الأسنان الشايلة"],
            ["اللي بيأثر على التكلفة", "نوع الزرعة، مادة التاج، ولو في مرحلة إضافية", "عدد الوحدات، مادة التركيبة، وحالة الأسنان الشايلة"],
            ["مناسبة أكتر لما", "الأسنان اللي جنبها سليمة، والعظم والصحة العامة يسمحوا", "الأسنان اللي جنبها محتاجة تيجان أصلًا، أو الزراعة مش مناسبة للحالة"],
          ] },
          en: { cols: ["", "Single implant", "Traditional bridge"], rows: [
            ["Held by", "The bone, in place of the root", "The two teeth either side of the gap"],
            ["Neighbouring teeth", "Left untouched", "Reshaped to carry the bridge"],
            ["Time to the final tooth", "Usually longer, because of healing time", "Usually shorter, in few visits"],
            ["Cleaning", "Like a natural tooth, with brush and floss", "Needs special floss or an interdental brush under the bridge"],
            ["Follow-up", "Regular checks of the gum and bone around the implant", "Regular checks of the supporting teeth"],
            ["What affects cost", "Implant type, crown material, and any extra stage", "Number of units, material, and condition of the supporting teeth"],
            ["Often better when", "Neighbouring teeth are healthy and bone and general health allow", "Neighbouring teeth already need crowns, or an implant does not suit the case"],
          ] },
        } },
        { p: { ar: "مفيش اختيار \"أفضل\" لكل الناس. بعد الكشف بنشرحلك الاتنين على حالتك أنت، والقرار ليك.", en: "Neither is \"best\" for everyone. After the examination we explain both for your case, and the choice is yours." } },
        { links: ["cosmetic-restorative-dentistry", "composite-veneers"] },
        { cta: true },
      ],
    },
    {
      id: "immediate",
      title: { ar: "الزراعة الفورية والتحميل الفوري", en: "Immediate implants and immediate loading" },
      blocks: [
        { p: { ar: "في سؤالين مختلفين الناس بتخلط بينهم: **الزرعة بتتحط امتى؟** و**السنة بتتركب عليها امتى؟** ممكن نزرع فورًا ونركب السنة بعدين، وممكن العكس.", en: "Two different questions are often mixed up: **when is the implant placed?** and **when is a tooth fitted on it?** An implant can be placed immediately with the tooth fitted later, or the other way round." } },
        { table: {
          ar: { cols: ["السؤال", "الاختيارات"], rows: [
            ["توقيت وضع الزرعة", "**فوري:** في نفس جلسة الخلع · **مبكر:** بعد ما اللثة تلم بأسابيع · **متأخر:** بعد ما العظم يلم بشهور"],
            ["توقيت تركيب السنة (التحميل)", "**فوري:** سنة مؤقتة خلال أيام من الزراعة · **تقليدي:** بعد فترة الالتحام"],
          ] },
          en: { cols: ["Question", "Options"], rows: [
            ["When the implant is placed", "**Immediate:** at the extraction visit · **Early:** after the gum heals, weeks later · **Delayed:** after the bone heals, months later"],
            ["When a tooth is fitted (loading)", "**Immediate:** a temporary tooth within days · **Conventional:** after healing"],
          ] },
        } },
        { diagram: "immediateSequence", caption: { ar: "التسلسل: سنة مش هتعيش، خلع، زرعة في نفس الجلسة، وسنة مؤقتة لو ثبات الزرعة كافي.", en: "The sequence: a tooth that cannot be saved, extraction, an implant at the same visit, and a temporary tooth if the implant is stable enough." } },
        { h: { ar: "إمتى تنفع الزراعة الفورية؟", en: "When does an immediate implant suit?" } },
        { p: { ar: "لما السنة تتشال من غير ما العظم اللي حواليها يتأثر، ويكون في عظم كفاية يثبّت الزرعة كويس من أول يوم، ومايبقاش في التهاب نشط مكان السنة.", en: "When the tooth can be removed without damaging the surrounding bone, there is enough bone to hold the implant firmly from day one, and there is no active infection at the site." } },
        { h: { ar: "إمتى الأفضل نستنى؟", en: "When is it better to wait?" } },
        { ul: {
          ar: ["لو في التهاب أو خراج نشط مكان السنة.", "لو جدار العظم حوالين السنة مكسور أو ضعيف.", "لو الزرعة ماثبتتش كفاية وقت الزراعة. ساعتها بنأجل تركيب السنة حتى لو الخطة كانت تحميل فوري، والقرار ده بيتاخد جوه الجلسة عشان مصلحتك."],
          en: ["If there is active infection or an abscess at the site.", "If the bone wall around the tooth is broken or thin.", "If the implant is not stable enough when placed. Then fitting the tooth is postponed even if immediate loading was planned; this decision is made during the visit, in your interest."],
        } },
        { p: { ar: "**ممكن يحصل إيه زيادة:** أحيانًا بنملا الفراغ الصغير حوالين الزرعة بمادة عظمية، أو نحط غطاء مؤقت مكان السنة بدل التاج.", en: "**What may be added:** sometimes the small space around the implant is filled with bone material, or a healing cap is used instead of a temporary tooth." } },
        { p: { ar: "**بعد السنة المؤقتة:** دي للشكل والكلام، مش للقطم الجامد. بناخد الأكل الطري في الناحية دي لحد ما الدكتور يقول غير كده، وبعد فترة الالتحام بنركب التاج النهائي.", en: "**After the temporary tooth:** it is for appearance and speech, not for biting hard. Keep to soft food on that side until your dentist says otherwise; the final crown is fitted after healing." } },
      ],
    },
    {
      id: "full-arch",
      title: { ar: "زراعة الفك الكامل (All-on-4 و All-on-6)", en: "Full-arch implants (All-on-4 and All-on-6)" },
      blocks: [
        { p: { ar: "لو الفك كله من غير أسنان، أو الأسنان الموجودة مش هتعيش، ممكن نركب أسنان كاملة على عدد محدود من الزرعات بدل زرعة لكل سنة.", en: "If a whole jaw has no teeth, or the remaining teeth cannot be saved, a full set of teeth can be fitted on a limited number of implants instead of one implant per tooth." } },
        { diagram: "fullArch", caption: { ar: "منظر من فوق للفك: All-on-4 على ٤ زرعات، و All-on-6 على ٦ زرعات.", en: "A top view of the jaw: All-on-4 on four implants, All-on-6 on six." } },
        { h: { ar: "ثابت ولا متحرك؟", en: "Fixed or removable?" } },
        { table: {
          ar: { cols: ["", "تركيبة ثابتة على زرعات", "طقم متحرك مثبت على زرعات"], rows: [
            ["مين بيشيلها", "الدكتور بس، في زيارات المتابعة", "المريض بيشيله وينظفه كل يوم"],
            ["الإحساس", "أقرب لأسنان طبيعية", "أثبت بكتير من الطقم العادي"],
            ["التنظيف", "بفرشاة وأدوات خاصة تحت التركيبة", "أسهل، لأنه بيتشال"],
            ["مناسب أكتر لما", "العظم والمسافات تسمح، والمريض يقدر يلتزم بالتنظيف", "النظافة اليومية صعبة، أو الوجه محتاج دعم أكبر للشفايف"],
          ] },
          en: { cols: ["", "Fixed bridge on implants", "Removable denture on implants"], rows: [
            ["Removed by", "The dentist only, at check-ups", "You, daily, for cleaning"],
            ["Feel", "Closer to natural teeth", "Much more stable than a regular denture"],
            ["Cleaning", "With a brush and special aids under the bridge", "Easier, because it comes out"],
            ["Often better when", "Bone and space allow and you can keep up the cleaning", "Daily cleaning is hard, or the lips need more support"],
          ] },
        } },
        { h: { ar: "كام زرعة؟", en: "How many implants?" } },
        { p: { ar: "في All-on-4 الفك بيشيل على ٤ زرعات، وفي All-on-6 على ٦. العدد بيتحدد حسب كمية العظم وجودته، وهل الفك علوي ولا سفلي، وقوة العضّ، ونوع التركيبة. الطقم المتحرك المثبت ممكن يحتاج عدد أقل. مفيش رقم واحد ينفع لكل الحالات.", en: "All-on-4 carries the jaw on four implants and All-on-6 on six. The number depends on the amount and quality of bone, whether it is the upper or lower jaw, bite force and the type of prosthesis. A removable denture on implants may need fewer. No single number suits every case." } },
        { h: { ar: "مؤقت وبعدين نهائي", en: "Temporary, then final" } },
        { ol: {
          ar: ["**التركيبة المؤقتة:** في حالات مناسبة بتتركب بعد الزراعة بفترة قصيرة، عشان ماتقعدش من غير أسنان. دي معمولة للشكل والكلام والأكل الطري.", "**فترة الالتحام:** العظم بيلتحم مع الزرعات، واللثة بتاخد شكلها النهائي.", "**التركيبة النهائية:** أقوى وأدق في الشكل، وبنختار مادتها معاك."],
          en: ["**Temporary bridge:** in suitable cases it is fitted shortly after surgery, so you are not left without teeth. It is for appearance, speech and soft food.", "**Healing:** the bone bonds to the implants and the gum settles.", "**Final bridge:** stronger and more refined; we choose the material with you."],
        } },
        { p: { ar: "**التنظيف والمتابعة:** تنظيف يومي تحت التركيبة بالأدوات اللي هنعلمهالك، وزيارات متابعة منتظمة للفحص والتنظيف العميق. التركيبة الثابتة ممكن تحتاج صيانة أو تغيير أجزاء مع السنين، زي أي تركيبة.", en: "**Cleaning and follow-up:** daily cleaning under the bridge with the aids we show you, and regular check-ups for examination and professional cleaning. A fixed bridge may need maintenance or part replacement over the years, like any restoration." } },
        { cta: true },
      ],
    },
    {
      id: "flapless",
      title: { ar: "الزراعة من غير شق للثة (Flapless)", en: "Flapless implants (no gum incision)" },
      blocks: [
        { p: { ar: "ناس كتير بتسميها \"زراعة بدون جراحة\"، لكن الأدق إنها **جراحة بسيطة من غير شق ولا فتح للثة**. بدل ما نفتح اللثة ونرجع نخيطها، بنعمل فتحة صغيرة دائرية بمقاس الزرعة بس.", en: "It is sometimes called \"surgery-free\", but more accurately it is **minor surgery without cutting or lifting the gum**. Instead of opening and stitching the gum, a small round opening the size of the implant is made." } },
        { diagram: "flapless", caption: { ar: "الطريقة المعتادة بفتح اللثة، والـ Flapless بفتحة صغيرة بمقاس الزرعة بس.", en: "Conventional placement with the gum opened, and flapless placement through a small opening only." } },
        { p: { ar: "**الفرق اللي ممكن تحسه:** غالبًا مفيش غرز، والجلسة أقصر، وكتير من المرضى بيحسوا براحة أكتر بعدها. لكن الإحساس بعد الزراعة بيختلف من شخص لشخص، وممكن يحصل ألم أو تورم بسيط زي أي زراعة.", en: "**What you may notice:** usually no stitches, a shorter visit, and many patients feel more comfortable afterwards. But recovery differs from person to person, and mild pain or swelling can happen as with any implant." } },
        { h: { ar: "مناسبة لما", en: "Suitable when" } },
        { ul: {
          ar: ["يكون عرض العظم وارتفاعه كفاية، وده بيظهر في الأشعة.", "يكون في لثة ثابتة كفاية حوالين مكان الزرعة.", "مايبقاش المكان محتاج مرحلة إضافية للعظم أو تعديل في اللثة."],
          en: ["The bone is wide and tall enough, as shown on the X-rays.", "There is enough firm gum around the site.", "The site does not need an extra bone stage or gum adjustment."],
        } },
        { p: { ar: "**مش مناسبة لما:** العظم رفيع أو محتاج مرحلة إضافية، أو اللثة الثابتة قليلة، أو الدكتور محتاج يشوف العظم بعينه عشان الزرعة تاخد أمان أكتر. ساعتها الطريقة المعتادة بفتح اللثة هي الأصح.", en: "**Not suitable when:** the bone is thin or needs an extra stage, there is little firm gum, or the dentist needs to see the bone directly for safety. Then conventional placement with the gum opened is the right choice." } },
        { p: { ar: "كتير من حالات Flapless بتتعمل بالدليل الجراحي، لأننا مش بنشوف العظم مباشرة، فالتخطيط الدقيق مهم.", en: "Many flapless cases use a surgical guide, because the bone is not seen directly, so precise planning matters." } },
      ],
    },
    {
      id: "guided",
      title: { ar: "الزراعة بالدليل الجراحي (Guided Implant Surgery)", en: "Guided implant surgery" },
      blocks: [
        { p: { ar: "بنخطط مكان الزرعة وزاويتها وعمقها على الكمبيوتر الأول، وبعدين بنعمل دليل مطبوع يتركب على الأسنان أو الفك ويوجّه الزراعة لنفس المكان اللي اتخطط.", en: "The implant position, angle and depth are planned on the computer first; then a printed guide fits on the teeth or jaw and directs the implant to exactly the planned position." } },
        { fig: { src: "assets/img/illustrations/guided-implant-planning.webp", alt: { ar: "دليل جراحي شفاف على نموذج فك مع تخطيط رقمي لأماكن الزرعات", en: "Clear surgical guide on a jaw model with digital implant planning" }, caption: { ar: "الدليل الجراحي: أماكن الزرعات بتتخطط رقميًا، والدليل بينقل الخطة للفم.", en: "The surgical guide: implant positions are planned digitally and the guide transfers the plan to the mouth." } } },
        { h: { ar: "رحلة التخطيط", en: "The planning journey" } },
        { ol: {
          ar: [
            "**الكشف:** نشوف المكان واللثة والعضة، ونحدد شكل السنة اللي هتتركب في الآخر.",
            "**أشعة CBCT ثلاثية الأبعاد:** من مركز أشعة متخصص، عشان نشوف العظم والأعصاب والجيوب.",
            "**مسح رقمي للأسنان:** بالماسح الضوئي داخل الفم، من غير معجون المقاس في أغلب الحالات.",
            "**التخطيط الرقمي على الكمبيوتر:** بندمج الأشعة مع المسح الرقمي، ونحط الزرعة في المكان الأنسب للعظم وللسنة النهائية مع بعض.",
            "**تصميم وطباعة الدليل:** قالب شفاف فيه فتحات معدنية بتحدد مكان وزاوية الزرعة.",
            "**يوم الزراعة:** بنثبت الدليل في بقك، ونزرع من خلاله، وفي حالات مناسبة من غير شق للثة.",
          ],
          en: [
            "**Examination:** we check the site, gum and bite, and plan the shape of the final tooth.",
            "**A 3D CBCT scan:** from a specialist radiology centre, to see the bone, nerves and sinuses.",
            "**Digital scan of your teeth:** with the intraoral scanner, usually without impression paste.",
            "**Digital planning:** the CBCT and the scan are merged, and the implant is placed where it suits both the bone and the final tooth.",
            "**Designing and printing the guide:** a clear template with metal sleeves that set the implant position and angle.",
            "**Surgery day:** the guide is seated in your mouth and the implant is placed through it, in suitable cases without a gum incision.",
          ],
        } },
        { p: { ar: "**الفايدة:** دقة أعلى في مكان الزرعة، وبُعد أكتر عن الأعصاب والجيوب، وسنة نهائية شكلها متظبط من الأول. الدليل مابيلغيش خبرة الدكتور، هو بينفذ خطته بدقة.", en: "**The benefit:** more precise implant position, more distance from nerves and sinuses, and a final tooth planned from the start. The guide does not replace the dentist's judgement; it carries out the plan precisely." } },
        { p: { ar: "**مش كل حالة محتاجاه:** في حالات بسيطة الزراعة العادية بتبقى مناسبة تمامًا، والدكتور بيقولك بعد الكشف.", en: "**Not every case needs it:** in straightforward cases conventional placement is entirely appropriate; your dentist will advise after the examination." } },
        { cta: true },
      ],
    },
  ],
};
