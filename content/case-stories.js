/* =====================================================================
   CASE STORIES: short step-by-step summary under each real case.
   Keyed by the case's first image file name (without folder/extension).
   Only facts confirmed by Dr. Beshay or visible in the photos.
   ===================================================================== */
const S = (ar, en) => ({ ar, en });
module.exports = {
  label: S("قصة الحالة خطوة بخطوة", "The case, step by step"),
  "implant-molar-1": {
    concern: S("ضرس مفقود، والمريض عايز يعوضه بشكل ثابت.", "A missing molar the patient wanted to replace with a fixed tooth."),
    steps: [
      S("كشف وأشعة، وتخطيط مكان الزرعة حسب التركيبة النهائية.", "Examination, imaging and planning the implant position around the final crown."),
      S("تركيب الزرعة في العظم تحت بنج موضعي.", "Placing the implant in the bone under local anaesthesia."),
      S("فترة التئام لحد ما الزرعة تثبت في العظم، وفوقها غطاء التئام بيشكّل اللثة.", "A healing period while the implant integrates, with a healing cap shaping the gum."),
      S("تركيب التاج النهائي على الزرعة.", "Fitting the final crown on the implant."),
    ],
    result: S("ضرس ثابت من غير ما نبرد الأسنان اللي جنبه.", "A fixed tooth without preparing the neighbouring teeth."),
  },
  "implant-two-1": {
    concern: S("ضرسين مفقودين جنب بعض.", "Two missing neighbouring molars."),
    steps: [
      S("كشف وأشعة، وتخطيط مكان الزرعتين حسب التركيبات النهائية.", "Examination, imaging and planning both implant positions around the final crowns."),
      S("تركيب زرعتين في العظم تحت بنج موضعي.", "Placing two implants under local anaesthesia."),
      S("فترة التئام وثبات الزرعتين، مع أغطية التئام فوق اللثة.", "A healing period for both implants, with healing caps above the gum."),
      S("تركيب التركيبات النهائية على الزرعتين.", "Fitting the final crowns on the implants."),
    ],
    result: S("رجوع المضغ في الناحية دي بتركيبات ثابتة.", "Chewing restored on that side with fixed crowns."),
  },
  "porcelain-full-before": {
    concern: S("أسنان أمامية متكسرة ومتغيرة اللون.", "Broken and discoloured front teeth."),
    steps: [
      S("كشف وتقييم الأسنان واللثة، وتخطيط التركيبات.", "Examining the teeth and gums and planning the restorations."),
      S("تجهيز الأسنان وأخذ المقاس.", "Preparing the teeth and recording the impression."),
      S("تركيب تركيبات البورسلين النهائية وضبط العضة.", "Fitting the final porcelain restorations and adjusting the bite."),
    ],
    result: S("ابتسامة كاملة بلون موحد.", "A complete smile with an even shade."),
  },
  "zirconia-full-before": {
    concern: S("أسنان متآكلة ومتغيرة اللون في الابتسامة.", "Worn, discoloured teeth across the smile."),
    steps: [
      S("كشف وتقييم الأسنان واللثة، وتخطيط شكل الابتسامة.", "Examining the teeth and gums and planning the smile."),
      S("تجهيز الأسنان وأخذ المقاس.", "Preparing the teeth and recording the impression."),
      S("تركيب تركيبات الزيركونيا النهائية وضبط العضة.", "Fitting the final zirconia restorations and adjusting the bite."),
    ],
    result: S("أسنان أقوى وشكل ولون منتظم.", "Stronger teeth with a regular shape and colour."),
  },
  "zirconia-front-before": {
    concern: S("سنة أمامية مكسورة باينة في الابتسامة.", "A broken front tooth visible when smiling."),
    steps: [
      S("كشف وأشعة لتقييم السنة.", "Examination and X-ray to assess the tooth."),
      S("تجهيز السنة وأخذ المقاس، واختيار درجة لون مطابقة للأسنان اللي جنبها.", "Preparing the tooth, recording the impression and matching the shade to the neighbours."),
      S("تركيب تلبيسة الزيركونيا النهائية.", "Fitting the final zirconia crown."),
    ],
    result: S("سنة أمامية بشكل ولون قريبين من الطبيعي.", "A front tooth with a natural-looking shape and shade."),
  },
  "rehab-1-before": {
    concern: S("أسنان كتير متكسرة ومتغيرة اللون، ومحتاجة علاج شامل.", "Many broken, discoloured teeth needing comprehensive treatment."),
    steps: [
      S("كشف شامل وأشعة، وخطة علاج على مراحل.", "A full examination, X-rays and a staged treatment plan."),
      S("علاج الأسنان المحتاجة قبل التركيبات حسب الخطة.", "Treating the teeth that needed it before the restorations, as planned."),
      S("تركيب التركيبات النهائية وضبط العضة.", "Fitting the final restorations and adjusting the bite."),
    ],
    result: S("تأهيل الابتسامة والمضغ.", "A restored smile and bite."),
  },
  "rehab-2-before": {
    concern: S("تآكل وتغير لون في أغلب الأسنان.", "Wear and discolouration on most teeth."),
    steps: [
      S("كشف شامل وأشعة، وخطة علاج على مراحل.", "A full examination, X-rays and a staged treatment plan."),
      S("علاج الأسنان المحتاجة قبل التركيبات حسب الخطة.", "Treating the teeth that needed it before the restorations, as planned."),
      S("تركيب التركيبات النهائية وضبط العضة.", "Fitting the final restorations and adjusting the bite."),
    ],
    result: S("ابتسامة بلون وشكل منتظمين.", "A smile with a regular colour and shape."),
  },
  "smile-1-before": {
    concern: S("المريض مش راضي عن لون وشكل أسنانه الأمامية.", "The patient was unhappy with the colour and shape of the front teeth."),
    steps: [
      S("كشف وتصوير الابتسامة، وتخطيط الشكل المطلوب.", "Examination, smile photos and planning the desired shape."),
      S("تجهيز الأسنان للفينير.", "Preparing the teeth for veneers."),
      S("تسجيل المقاس رقميًا بالماسح الضوئي داخل الفم.", "Recording the impression digitally with the intraoral scanner."),
      S("تصنيع فينير إي ماكس وتثبيته على الأسنان.", "Making the E.max veneers and bonding them to the teeth."),
    ],
    result: S("ابتسامة أفتح وأشكال أسنان منتظمة.", "A brighter smile with regular tooth shapes."),
  },
  "composite-veneer-before": {
    concern: S("تغير لون وبقع واضحة على الأسنان الأمامية.", "Visible discolouration and stains on the front teeth."),
    steps: [
      S("كشف وتقييم الأسنان، وتحديد درجة اللون المناسبة.", "Examining the teeth and choosing the right shade."),
      S("بناء فينير الكومبوزيت على وش الأسنان وتشكيله.", "Building the composite veneers on the front of the teeth and shaping them."),
      S("تلميع نهائي وضبط الشكل.", "Final polishing and refining the shape."),
    ],
    result: S("لون وشكل أحسن مع الحفاظ على السنة الطبيعية.", "Better colour and shape while keeping natural tooth."),
  },
  "whitening-1-before": {
    concern: S("لون الأسنان أغمق من اللي المريض عايزه.", "Teeth darker than the patient wanted."),
    steps: [
      S("كشف للتأكد إن الأسنان واللثة مناسبين للتبييض.", "Checking that the teeth and gums are suitable for whitening."),
      S("حماية اللثة قبل وضع مادة التبييض.", "Protecting the gums before applying the whitening gel."),
      S("جلسة تبييض في العيادة.", "An in-clinic whitening session."),
    ],
    result: S("أسنان أفتح بدرجات واضحة.", "Noticeably lighter teeth."),
  },
  "whitening-2-before": {
    concern: S("لون الأسنان أغمق من اللي المريض عايزه.", "Teeth darker than the patient wanted."),
    steps: [
      S("كشف للتأكد إن الأسنان واللثة مناسبين للتبييض.", "Checking that the teeth and gums are suitable for whitening."),
      S("حماية اللثة قبل وضع مادة التبييض.", "Protecting the gums before applying the whitening gel."),
      S("جلسة تبييض في العيادة.", "An in-clinic whitening session."),
    ],
    result: S("أسنان أفتح بدرجات واضحة.", "Noticeably lighter teeth."),
  },
  "whitening-3-before": {
    concern: S("المريض عايز أسنان أفتح.", "The patient wanted lighter teeth."),
    steps: [
      S("كشف للتأكد إن الأسنان واللثة مناسبين للتبييض.", "Checking that the teeth and gums are suitable for whitening."),
      S("عزل وحماية اللثة (اللون الأزرق في الصورة).", "Isolating and protecting the gums (the blue layer in the photo)."),
      S("وضع مادة التبييض وتنشيطها أثناء الجلسة.", "Applying and activating the whitening gel during the session."),
    ],
    result: S("الصورة دي بتوضح الجلسة نفسها، مش النتيجة النهائية.", "This photo shows the session itself, not the final result."),
  },
  "wisdom-xray": {
    concern: S("ضرس عقل مدفون باين في الأشعة.", "An impacted wisdom tooth seen on the X-ray."),
    steps: [
      S("أشعة لتحديد وضع الضرس وعلاقته بالأسنان والعصب.", "X-ray to assess the tooth's position and its relation to the nerve."),
      S("خلع جراحي تحت بنج موضعي.", "Surgical removal under local anaesthesia."),
      S("تعليمات العناية بعد الخلع ومتابعة.", "Aftercare instructions and follow-up."),
    ],
    result: S("الضرس اتشال كامل.", "The tooth was removed completely."),
  },
  "wisdom-2-before": {
    concern: S("ضرس عقل مدفون باين في الأشعة.", "An impacted wisdom tooth seen on the X-ray."),
    steps: [
      S("أشعة لتحديد وضع الضرس وعلاقته بالأسنان والعصب.", "X-ray to assess the tooth's position and its relation to the nerve."),
      S("خلع تحت بنج موضعي.", "Removal under local anaesthesia."),
      S("بعد الخلع حطينا الضرس فوق مكانه على الأشعة للتوضيح.", "After removal, the tooth was placed over its position on the X-ray to illustrate."),
    ],
    result: S("الضرس اتشال كامل.", "The tooth was removed completely."),
  },
  "wisdom-3-before": {
    concern: S("ضرس عقل مدفون باين في الأشعة.", "An impacted wisdom tooth seen on the X-ray."),
    steps: [
      S("أشعة لتحديد وضع الضرس وعلاقته بالأسنان والعصب.", "X-ray to assess the tooth's position and its relation to the nerve."),
      S("خلع تحت بنج موضعي.", "Removal under local anaesthesia."),
      S("بعد الخلع حطينا الضرس فوق مكانه على الأشعة للتوضيح.", "After removal, the tooth was placed over its position on the X-ray to illustrate."),
    ],
    result: S("الضرس اتشال كامل.", "The tooth was removed completely."),
  },
};
