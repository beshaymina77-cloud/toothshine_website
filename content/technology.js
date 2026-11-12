/* =====================================================================
   TECHNOLOGY — الأجهزة الموجودة فعليًا في المركز
   Keep claims proportionate: describe purpose, not guaranteed results.
   Photo paths are set in config/business.js → photos.equipment
   ===================================================================== */

module.exports = [
  {
    id: "scanner",
    icon: "scanner",
    title: { ar: "الماسح الضوئي داخل الفم", en: "Intraoral Scanner" },
    sub: { ar: "Intraoral Scanner", en: "Digital impressions" },
    body: {
      ar: "بيسجّل الأسنان كنموذج ثلاثي الأبعاد بدل الطبعة التقليدية في حالات كتير. بتشوف أسنانك على الشاشة، والملف بيتبعت للمعمل لتصنيع التركيبات.",
      en: "Records the teeth as a 3D model, replacing conventional impressions in many cases. You can see your teeth on screen, and the file is sent to the lab to make restorations.",
    },
  },
  {
    id: "anesthesia",
    icon: "pen",
    title: { ar: "قلم البنج الإلكتروني", en: "Computer-Controlled Local Anaesthesia" },
    sub: { ar: "Computer-Controlled Local Anesthesia", en: "Electronic anaesthesia pen" },
    body: {
      ar: "جهاز بيتحكم في سرعة وضغط دخول البنج بشكل ثابت وهادي. ده ممكن يخلّي الإحساس بالحقنة أخف عند كتير من المرضى، خصوصًا اللي عندهم قلق من البنج.",
      en: "Delivers local anaesthetic at a steady, controlled rate and pressure. This can make the injection feel gentler for many patients, especially those anxious about injections.",
    },
  },
  {
    id: "xray",
    icon: "xray",
    title: { ar: "الأشعة الرقمية", en: "Digital X-ray" },
    sub: { ar: "Digital X-ray", en: "Instant imaging" },
    body: {
      ar: "صورة الأشعة بتظهر على الشاشة خلال ثواني، وممكن تكبيرها لشرح الحالة لك بوضوح. والأشعة الرقمية بتحتاج عادةً جرعة إشعاع أقل من الأفلام التقليدية.",
      en: "Images appear on screen within seconds and can be enlarged to explain your case clearly. Digital X-rays usually need a lower radiation dose than conventional film.",
    },
  },
  {
    id: "prophyjet",
    icon: "jet",
    title: { ar: "جهاز البروفي جت", en: "Prophy Jet" },
    sub: { ar: "Air polishing", en: "Air polishing" },
    body: {
      ar: "بيستخدم خليط من الماء والهواء وبودرة خاصة لإزالة التصبغات والطبقة الجرثومية من على سطح الأسنان، ويُستخدم في الحالات اللي يناسبها.",
      en: "Uses a mix of water, air and a special powder to remove stains and biofilm from tooth surfaces, in cases where it is suitable.",
    },
  },
];
