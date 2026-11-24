/* =====================================================================
   EXTRA PAGES (Nov 24 2026 brief): doctor page, videos, case gallery,
   "dental implants in Egypt" page for expats and Gulf patients.
   Only facts confirmed by Dr. Beshay. Empty values = placeholder:
   shown as a dashed note on the STAGING preview only, hidden on the live site.
   ===================================================================== */
const S = (ar, en) => ({ ar, en });

module.exports = {
  /* ---------------- DOCTOR PAGE ---------------- */
  doctor: {
    title: S("د. بشاي مينا – زراعة وتجميل الأسنان في الإسكندرية | Tooth Shine", "Dr. Beshay Mina – Implant & Cosmetic Dentist in Alexandria | Tooth Shine"),
    meta: S(
      "د. بشاي مينا، مؤسس مركز أسنان شاين في الإسكندرية، عضو الفريق الدولي لزراعة الأسنان ITI والجمعية المصرية لزراعة الأسنان. زراعة الأسنان بالتخطيط الرقمي وتجميل الأسنان في فرعي سبورتنج والعجمي.",
      "Dr. Beshay Mina, founder of Tooth Shine Dental Center in Alexandria, member of the ITI and the Egyptian Society of Oral Implantology. Digitally planned dental implants and cosmetic dentistry at our Sporting and Agami branches."
    ),
    kicker: S("الطبيب المسؤول عن العلاج", "The dentist behind your treatment"),
    bioTitle: S("نبذة عن د. بشاي", "About Dr. Beshay"),
    bio: [
      S(
        "د. بشاي مينا هو مؤسس ومالك مركز أسنان شاين في الإسكندرية، والمركز ليه فرعين في سبورتنج والعجمي. اهتمامه الأساسي زراعة الأسنان والتركيبات الثابتة وتجميل الأسنان.",
        "Dr. Beshay Mina is the founder and owner of Tooth Shine Dental Center in Alexandria, with branches in Sporting and Agami. His main interests are implant dentistry, fixed prosthodontics and cosmetic dentistry."
      ),
      S(
        "د. بشاي عضو في الفريق الدولي لزراعة الأسنان (ITI) وعضو في الجمعية المصرية لزراعة الأسنان. في الزراعة بيبدأ بالتخطيط الرقمي: أشعة مقطعية وماسح ضوئي داخل الفم، وبيحدد شكل السنة النهائية الأول، وبعدين مكان الزرعة. وفي الحالات المناسبة بيستخدم الدليل الجراحي والزراعة بدون شق والزراعة الفورية.",
        "Dr. Beshay is a member of the International Team for Implantology (ITI) and the Egyptian Society of Oral Implantology. His implant work starts with digital planning (a CBCT scan and an intraoral scanner), designing the final tooth first and then the implant position. In suitable cases he uses surgical guides, flapless placement and immediate implants."
      ),
      S(
        "في تجميل الأسنان بيشتغل على فينير الإي ماكس والكومبوزيت والتركيبات والتبييض، وهدفه ابتسامة شكلها طبيعي مع الحفاظ على أكبر قدر من السنة.",
        "In cosmetic dentistry he works with E.max and composite veneers, crowns and whitening, aiming for a natural-looking smile while keeping as much natural tooth as possible."
      ),
    ],
    /* fill these when Dr. Beshay confirms them (left empty = not shown on the live site) */
    education: S("", ""),        // e.g. university and graduation year
    experienceYears: "",         // e.g. "12"
    placeholders: [
      S("التعليم والجامعة وسنة التخرج", "Education, university and graduation year"),
      S("عدد سنين الخبرة", "Years of experience"),
      S("الشهادات والدبلومات (لو موجودة)", "Certificates and diplomas (if any)"),
      S("مؤتمرات أو كورسات بيدرّس فيها (لو موجودة)", "Courses or conferences he teaches at (if any)"),
    ],
    systemsTitle: S("أنظمة الزراعة اللي بيشتغل بيها", "Implant systems he works with"),
    casesTitle: S("حالات حقيقية من المركز", "Real cases from our centre"),
    casesAll: S("كل الحالات", "All cases"),
    articlesTitle: S("مقالات راجعها د. بشاي", "Articles reviewed by Dr. Beshay"),
  },

  /* ---------------- PRICE RANGES (cost-guide articles) ----------------
     Filled ONLY by Dr. Beshay, e.g. S("من 15,000 لـ 25,000 جنيه للزرعة الواحدة", "EGP 15,000–25,000 per implant").
     Empty = staging placeholder; do NOT publish the cost articles live while empty. */
  prices: {
    implant: S("", ""),
    veneers: S("", ""),
    aligners: S("", ""),
    whitening: S("", ""),
  },
  priceUi: {
    label: S("نطاق السعر التقريبي في مركز أسنان شاين", "Approximate price range at Tooth Shine"),
    note: S("السعر النهائي بيتحدد بعد الكشف والأشعة، وبيتكتب لك قبل ما تبدأ.", "The final price is confirmed after examination and imaging, and given to you in writing before you start."),
    missing: S("مكان السعر: د. بشاي هيحدده", "Price placeholder: to be set by Dr. Beshay"),
  },

  /* ---------------- MEDICAL REVIEW LINE ---------------- */
  reviewed: {
    label: S("مراجعة طبية:", "Medically reviewed by"),
  },

  /* ---------------- VIDEOS ----------------
     youtubeId: paste the YouTube id when the video is uploaded (e.g. "dQw4w9WgXcQ").
     uploadDate: YYYY-MM-DD, required by Google for VideoObject.
     Until then the block shows only on staging as a placeholder.
     Videos with patients: only with the patient's consent. */
  videos: [
    {
      key: "guided",
      youtubeId: "", uploadDate: "",
      services: ["dental-implants"], articles: ["guided-implant-surgery-digital-surgical-guide", "dental-implants-without-surgery-flapless"],
      title: S("الزراعة بالدليل الجراحي خطوة بخطوة", "Guided implant surgery, step by step"),
      desc: S("فيديو من المركز بيوضح الزراعة بالدليل الجراحي الرقمي من التخطيط لحد تركيب الزرعة.", "A video from our centre showing digitally guided implant placement, from planning to placement."),
    },
    {
      key: "first-visit",
      youtubeId: "", uploadDate: "",
      services: ["dental-examination"], articles: [],
      title: S("أول زيارة في مركز أسنان شاين", "Your first visit at Tooth Shine"),
      desc: S("إيه اللي بيحصل في أول كشف: الفحص والأشعة وخطة العلاج.", "What happens at your first examination: check-up, imaging and the treatment plan."),
    },
    {
      key: "veneers",
      youtubeId: "", uploadDate: "",
      services: ["cosmetic-restorative-dentistry", "composite-veneers"], articles: ["yellow-teeth-whitening-or-veneers"],
      title: S("الفينير: من التخطيط للابتسامة النهائية", "Veneers: from planning to the final smile"),
      desc: S("فيديو بيشرح خطوات الفينير في المركز.", "A video explaining the veneer steps at our centre."),
    },
  ],
  videoUi: {
    title: S("شوف بنفسك", "See it for yourself"),
    soon: S("مكان الفيديو: هيتضاف أول ما الدكتور يرفعه", "Video placeholder: added once the doctor uploads it"),
  },

  /* ---------------- CASE GALLERY PAGE ---------------- */
  cases: {
    title: S("حالات حقيقية قبل وبعد | مركز أسنان شاين – الإسكندرية", "Real before & after cases | Tooth Shine Dental Center Alexandria"),
    meta: S("حالات حقيقية من مركز أسنان شاين في الإسكندرية: زراعة الأسنان والتركيبات والفينير والتبييض والحشو التجميلي. كل الحالات منشورة بموافقة أصحابها.", "Real cases from Tooth Shine Dental Center in Alexandria: implants, crowns, veneers, whitening and tooth-coloured fillings. All shared with the patients' consent."),
    h1: S("معرض الحالات", "Case gallery"),
    lead: S("حالات حقيقية من فرعي سبورتنج والعجمي، منشورة بموافقة أصحابها. اختار نوع العلاج علشان تشوف حالات شبه حالتك.", "Real cases from our Sporting and Agami branches, shared with the patients' consent. Pick a treatment to see cases like yours."),
    all: S("الكل", "All"),
  },

  /* ---------------- DENTAL IMPLANTS IN EGYPT (expats / Gulf) ---------------- */
  expat: {
    title: S("زراعة الأسنان في مصر للمصريين في الخارج والخليج | Tooth Shine الإسكندرية", "Dental Implants in Egypt for Expats & Gulf Patients | Tooth Shine Alexandria"),
    meta: S(
      "عايش برة مصر وعايز تعمل زراعة أسنان في إجازتك؟ ابعت الأشعة على واتساب، ونخطط لعلاجك في مركز أسنان شاين بالإسكندرية مع د. بشاي مينا.",
      "Living abroad and planning dental implants in Egypt? Send your X-rays on WhatsApp for a remote first opinion and plan treatment around your visit to Tooth Shine Dental Center in Alexandria with Dr. Beshay Mina."
    ),
    h1: S("زراعة الأسنان في مصر للمصريين في الخارج والخليج", "Dental implants in Egypt for expats and Gulf patients"),
    lead: S(
      "ابعت الأشعة وصور أسنانك على واتساب، وناخد رأي مبدئي عن بعد، وبعدين نخطط معاك مواعيد العلاج على حسب إجازتك في الإسكندرية.",
      "Send your X-rays and photos on WhatsApp for a first opinion from a distance, then we plan your appointments around your visit to Alexandria."
    ),
    waCta: S("استشارة عن بعد على واتساب", "Remote consultation on WhatsApp"),
    waMsg: S("أهلًا، أنا عايش برة مصر وعايز استشارة عن بعد بخصوص زراعة الأسنان. هبعت الأشعة والصور.", "Hello, I live outside Egypt and would like a remote consultation about dental implants. I will send my X-rays and photos."),
    sections: [
      {
        h: S("إزاي بتمشي الاستشارة عن بعد؟", "How does the remote consultation work?"),
        list: [
          S("ابعت على واتساب أشعة بانوراما أو مقطعية (CBCT) حديثة لو عندك، وصور لأسنانك من قدام ومن الجنب.", "Send a recent panoramic or CBCT scan if you have one, plus photos of your teeth from the front and sides, on WhatsApp."),
          S("قول لنا عن حالتك الصحية والأدوية اللي بتاخدها، وإمتى ناوي تنزل مصر وقد إيه.", "Tell us about your general health, medications, and when and for how long you plan to visit Egypt."),
          S("د. بشاي بيدي رأي مبدئي والاختيارات المتاحة. الخطة النهائية والتكلفة النهائية بيتحددوا بعد الكشف في العيادة.", "Dr. Beshay gives a first opinion and the possible options. The final plan and final quote are confirmed after the clinical examination."),
        ],
      },
      {
        h: S("الزراعة بتاخد كام زيارة؟", "How many visits do implants need?"),
        p: S(
          "غالبًا الزراعة على مرحلتين: زيارة لتركيب الزرعة، وزيارة بعد فترة الالتئام (عادة من حوالي شهرين لعدة شهور) للتركيبة النهائية. في حالات مختارة ممكن الزرعة الفورية أو التحميل الفوري يقللوا عدد الزيارات، وده بيتحدد بعد الكشف والأشعة. بنرتب المواعيد على حسب أيام إجازتك قدر الإمكان.",
          "Implants usually take two stages: one visit to place the implant, and another after healing (typically around two to several months) for the final crown. In selected cases an immediate implant or immediate loading can reduce visits; this is decided after examination and imaging. We plan appointments around your holiday as far as possible."
        ),
      },
      {
        h: S("ليه مركز أسنان شاين؟", "Why Tooth Shine?"),
        list: [
          S("د. بشاي مينا عضو الفريق الدولي لزراعة الأسنان ITI والجمعية المصرية لزراعة الأسنان.", "Dr. Beshay Mina is a member of the ITI and the Egyptian Society of Oral Implantology."),
          S("تخطيط رقمي بالأشعة المقطعية والماسح الضوئي داخل الفم، ودليل جراحي في الحالات المناسبة.", "Digital planning with CBCT and an intraoral scanner, and a surgical guide in suitable cases."),
          S("أنظمة زراعة معروفة، والطبيب بيختار المناسب لحالتك.", "Well-known implant systems; the dentist chooses the right one for your case."),
          S("فرعين في الإسكندرية: سبورتنج في وسط البلد على البحر، والعجمي على طريق إسكندرية مطروح.", "Two branches in Alexandria: Sporting in the city centre on the sea front, and Agami on the Alexandria–Matrouh road."),
          S("تقييمات حقيقية على Google لكل فرع.", "Real Google reviews for each branch."),
        ],
      },
      {
        h: S("التكلفة", "Cost"),
        p: S(
          "التكلفة بتختلف حسب عدد الزرعات ونوعها، والحاجة لترقيع عظم، ونوع التركيبة. بنديك رأي مبدئي بعد ما نشوف الأشعة، والسعر النهائي بيتحدد بعد الكشف. اقرا دليل تكلفة زراعة الأسنان علشان تعرف إيه اللي بيأثر على السعر.",
          "Cost depends on the number and type of implants, whether bone grafting is needed, and the type of crown. We give a first estimate after seeing your X-rays; the final quote is confirmed after the examination. Read our implant cost guide to see what affects the price."
        ),
        link: "dental-implant-cost-egypt",
      },
    ],
    faqs: [
      { q: S("ينفع أعمل الزراعة في زيارة واحدة؟", "Can I have implants done in one visit?"), a: S("في حالات مختارة ممكن الزرعة الفورية مع سنة مؤقتة في نفس اليوم، لكن التركيبة النهائية غالبًا بتحتاج زيارة تانية بعد الالتئام. الطبيب بيحدد ده بعد الكشف والأشعة.", "In selected cases an immediate implant with a temporary tooth on the same day is possible, but the final crown usually needs a second visit after healing. The dentist decides after examination and imaging.") },
      { q: S("الاستشارة عن بعد بتغني عن الكشف؟", "Does the remote consultation replace an examination?"), a: S("لأ. الاستشارة عن بعد بتديك فكرة مبدئية بس، والخطة النهائية بتتحدد بعد الكشف في العيادة.", "No. The remote consultation gives you a first idea only; the final plan is set after the clinical examination.") },
      { q: S("لو حصلت مشكلة بعد ما أرجع؟", "What if I have a problem after I fly back?"), a: S("بنفضل متابعين معاك على واتساب، وبنحدد مواعيد المتابعة في زياراتك الجاية لمصر. لو حصل أي طارئ بنوجهك للخطوة المناسبة.", "We stay in touch on WhatsApp and schedule follow-ups on your next visits to Egypt. If anything urgent happens, we guide you on the right next step.") },
    ],
  },
};
