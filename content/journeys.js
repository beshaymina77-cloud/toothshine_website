/* =====================================================================
   HOME — patient-concern opening + short journeys (v12 redesign)
   Educational only: never an automated diagnosis. Each journey ends with
   "the right option is decided after the examination".
   ===================================================================== */
module.exports = {
  brandLine: { ar: "مركز أسنان شاين · سبورتينج والعجمي، الإسكندرية", en: "Tooth Shine Dental Center · Sporting & Agami, Alexandria" },
  title: { ar: "إيه أكتر حاجة مضايقاك في أسنانك؟", en: "What bothers you most about your teeth?" },
  sub: {
    ar: "اكتشف اختيارات العلاج الممكنة، وشوف حالات حقيقية من Tooth Shine، واعرف إزاي بنخطط للعلاج المناسب لكل حالة.",
    en: "Explore the possible treatment options, see real cases from Tooth Shine, and learn how we plan the right treatment for each case.",
  },
  pick: { ar: "اختار اللي يشبه حالتك", en: "Pick what sounds like you" },
  direct: { ar: "عارف العلاج اللي محتاجه؟ احجز على طول", en: "Know what you need? Book directly" },
  journeyKicker: { ar: "خطوة بخطوة", en: "Step by step" },
  journeyTitle: { ar: "اختياراتك، ببساطة", en: "Your options, simply explained" },
  journeyNote: {
    ar: "ده شرح للتوعية، مش تشخيص. الاختيار المناسب لحالتك بيتحدد بعد الكشف.",
    en: "This is education, not a diagnosis. The right option for you is decided after an examination.",
  },
  optionsLabel: { ar: "الاختيارات الممكنة", en: "Possible options" },
  caseLabel: { ar: "حالة حقيقية من العيادة", en: "A real case from the clinic" },
  readMore: { ar: "اعرف أكتر", en: "Learn more" },
  items: [
    {
      id: "missing",
      icon: "implant",
      img: "assets/img/illustrations/implant-parts-600.webp",
      label: { ar: "عندي سن مفقود", en: "I have a missing tooth" },
      hint: { ar: "زراعة، كوبري، أو طقم", en: "Implant, bridge or denture" },
      service: "dental-implants",
      cta: { ar: "احجز تقييم زراعة", en: "Book an implant assessment" },
      explain: {
        ar: "السنة الناقصة مش مجرد شكل. مع الوقت الأسنان اللي جنبها ممكن تميل، والعظم مكانها ممكن يقل، والمضغ بيتعب الناحية التانية. فيه أكتر من طريقة لتعويضها، وكل طريقة ليها مميزات وحدود.",
        en: "A missing tooth is not only about looks. Over time the neighbouring teeth can tilt, the bone can shrink, and chewing shifts to the other side. There is more than one way to replace it, each with its own pros and limits.",
      },
      options: [
        { ar: "زرعة: بتعوّض السنة من جذرها من غير ما نلمس اللي جنبها", en: "Implant: replaces the tooth from the root without touching its neighbours", link: "dental-implants" },
        { ar: "كوبري ثابت: بيعتمد على السنتين اللي جنب الفراغ", en: "Fixed bridge: supported by the two teeth beside the gap", link: "cosmetic-restorative-dentistry" },
        { ar: "طقم أو طقم مثبت على زرعات: لو الأسنان الناقصة كتير", en: "Denture or implant-retained denture: when many teeth are missing", link: "dental-implants" },
      ],
      diagram: "implantVsBridge",
      caption: { ar: "نفس الفراغ مرتين: زرعة وكوبري.", en: "The same gap twice: implant and bridge." },
      caseIndex: 0,
    },
    {
      id: "smile",
      icon: "veneer",
      img: "assets/img/illustrations/porcelain-veneer-600.webp",
      label: { ar: "مش عاجبني شكل ابتسامتي", en: "I don't like how my smile looks" },
      hint: { ar: "تبييض، فينير، أو تركيبات", en: "Whitening, veneers or crowns" },
      service: "cosmetic-restorative-dentistry",
      cta: { ar: "احجز استشارة تجميل", en: "Book a smile consultation" },
      explain: {
        ar: "اللون، الشكل، المقاس، أو كسر قديم. كل مشكلة ليها حل مختلف، وأحيانًا أبسط حل هو الأنسب. بنبدأ بنسأل إيه اللي مضايقك بالظبط، وبنحافظ على أكبر قدر من السنة الطبيعية.",
        en: "Colour, shape, size or an old chip: each needs a different solution, and sometimes the simplest is best. We start by asking exactly what bothers you, and we keep as much natural tooth as possible.",
      },
      options: [
        { ar: "تبييض: لو المشكلة في اللون بس", en: "Whitening: when colour is the only concern", link: "teeth-whitening" },
        { ar: "فينير كومبوزيت: تعديل الشكل والمقاس مع أقل برد", en: "Composite veneers: reshaping with minimal tooth reduction", link: "composite-veneers" },
        { ar: "تركيبات زيركونيا أو إي ماكس: للأسنان المكسورة أو المتغيرة كتير", en: "Zirconia or E.max: for heavily broken or discoloured teeth", link: "cosmetic-restorative-dentistry" },
      ],
      fig: { src: "assets/img/illustrations/porcelain-veneer.webp", alt: { ar: "قشرة بورسلين رفيعة بجانب نموذج للأسنان الأمامية", en: "A thin porcelain veneer beside a model of the front teeth" } },
      caption: { ar: "قشرة رفيعة بتتلصق على وش السنة.", en: "A thin shell bonded to the front of the tooth." },
      caseService: "cosmetic-restorative-dentistry",
    },
    {
      id: "crooked",
      icon: "aligner",
      img: "assets/img/illustrations/clear-aligner-600.webp",
      label: { ar: "أسناني مش مترتبة", en: "My teeth are not straight" },
      hint: { ar: "تقويم ثابت أو شفاف", en: "Fixed braces or clear aligners" },
      service: "orthodontics",
      cta: { ar: "احجز كشف تقويم", en: "Book an orthodontic check" },
      explain: {
        ar: "الزحام أو الفراغات أو العضة الغلط مش بس شكل، ممكن تصعّب التنظيف وتأثر على المضغ. التقويم بيحرك الأسنان بهدوء على مراحل، والطريقة بتتحدد حسب الحالة والعمر.",
        en: "Crowding, gaps or a bad bite are not only about looks; they can make cleaning harder and affect chewing. Orthodontics moves teeth gently in stages, and the method depends on the case and age.",
      },
      options: [
        { ar: "تقويم ثابت: مناسب لأغلب الحالات وبيتابع كل شهر تقريبًا", en: "Fixed braces: suit most cases, with regular check-ups", link: "orthodontics" },
        { ar: "تقويم شفاف: قوالب شفافة بتتشال وقت الأكل", en: "Clear aligners: clear trays you remove to eat", link: "orthodontics" },
      ],
      fig: { src: "assets/img/illustrations/clear-aligner.webp", alt: { ar: "قالب تقويم شفاف", en: "A clear aligner tray" } },
      caption: { ar: "التقويم الشفاف: قوالب بتتغير على مراحل.", en: "Clear aligners: trays changed in stages." },
    },
    {
      id: "fear",
      icon: "shield",
      img: "",
      label: { ar: "بخاف من علاج الأسنان", en: "I'm afraid of dental treatment" },
      hint: { ar: "هنمشي معاك بهدوء", en: "We take it calmly with you" },
      service: "dental-examination",
      cta: { ar: "احجز كشف هادي", en: "Book a calm first visit" },
      explain: {
        ar: "الخوف من الدكتور أو من الحقنة إحساس طبيعي ومنتشر. قول لنا من الأول، وأول زيارة ممكن تكون كلام وكشف بس من غير أي علاج.",
        en: "Feeling anxious about the dentist or injections is common. Tell us early; your first visit can be just a talk and an examination, with no treatment.",
      },
      options: [
        { ar: "نشرح كل خطوة قبل ما نعملها", en: "We explain each step before doing it" },
        { ar: "إشارة متفق عليها توقفنا بيها في أي وقت", en: "An agreed signal to pause at any time" },
        { ar: "قلم البنج الإلكتروني في الحالات المناسبة، لحقنة أهدى", en: "Computer-controlled anaesthesia where suitable, for a gentler injection" },
        { ar: "تقسيم العلاج على جلسات أقصر لو ده أريح لك", en: "Shorter visits if that suits you better" },
      ],
    },
  ],
  casesKicker: { ar: "حالات حقيقية", en: "Real cases" },
  casesAllFilter: { ar: "الكل", en: "All" },
  digitalKicker: { ar: "التوضيح والتخطيط", en: "Explained visually" },
  digitalTitle: { ar: "شوف العلاج قبل ما تبدأه", en: "See the treatment before it starts" },
  digitalLead: {
    ar: "رسومات توضيحية بتشرح أجزاء الزرعة، والفرق بين الاختيارات، وإزاي بنخطط الزراعة على الكمبيوتر قبل الجراحة.",
    en: "Illustrations that explain implant parts, the difference between options, and how implants are planned on the computer before surgery.",
  },
  digitalCards: [
    { img: "assets/img/illustrations/implant-parts", title: { ar: "أجزاء الزرعة", en: "Implant parts" }, body: { ar: "الزرعة جوه العظم، والدعامة، والتاج.", en: "The implant in the bone, the abutment and the crown." }, link: "dental-implants", anchor: "#single-implant" },
    { diagram: "implantVsBridge", title: { ar: "الزرعة ولا الكوبري؟", en: "Implant or bridge?" }, body: { ar: "نفس الفراغ بطريقتين، والفرق في الأسنان اللي جنبه.", en: "The same gap two ways; the difference is the neighbouring teeth." }, link: "dental-implants", anchor: "#implant-vs-bridge" },
    { img: "assets/img/illustrations/guided-implant-planning", title: { ar: "الزراعة بالدليل الجراحي", en: "Guided implant surgery" }, body: { ar: "مكان الزرعة بيتخطط على الكمبيوتر، والدليل بينقله للفم بدقة.", en: "The implant position is planned on the computer and a guide transfers it precisely." }, link: "dental-implants", anchor: "#guided" },
    { img: "assets/img/illustrations/porcelain-veneer", title: { ar: "الفينير", en: "Veneers" }, body: { ar: "قشرة رفيعة بتعدل الشكل واللون.", en: "A thin shell that improves shape and colour." }, link: "composite-veneers", anchor: "" },
    { img: "assets/img/illustrations/clear-aligner", title: { ar: "التقويم الشفاف", en: "Clear aligners" }, body: { ar: "قوالب شفافة بتحرك الأسنان على مراحل.", en: "Clear trays that move teeth in stages." }, link: "orthodontics", anchor: "" },
  ],
  familyKicker: { ar: "لكل العيلة", en: "For the whole family" },
};
