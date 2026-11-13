/* =====================================================================
   TOOTH SHINE — CENTRAL BUSINESS DATA
   ملف بيانات المركز الأساسي
   ---------------------------------------------------------------------
   Edit this file to change contact details, branches, doctor info,
   social links, photos, testimonials and offers. Then run:
       node build.js
   and upload the new "dist" folder (or push to GitHub if connected).

   RULES
   • Text fields come in pairs: { ar: "...", en: "..." }.
   • Leave a value as "" (empty) when it is not confirmed yet.
     The website hides or disables anything that is empty, and shows a
     small "preview" notice until all contact data is filled.
   • Phone / WhatsApp numbers: international format, digits only,
     e.g. "201001234567" (20 = Egypt, without the leading 0).
   • Photos: put the file in  /assets/img/  and write its path,
     e.g. "assets/img/sporting-reception.jpg". Leave "" to keep the
     designed placeholder.
   ===================================================================== */

module.exports = {
  /* Final public address of the site, no trailing slash.
     Change it after the Cloudflare Pages project is created. */
  siteUrl: "https://toothshinecenter.com",

  brand: {
    name: { ar: "مركز أسنان شاين", en: "Tooth Shine Dental Center" },
    short: { ar: "شاين", en: "Tooth Shine" },
    tagline: { ar: "كل تخصصات الأسنان في مكان واحد", en: "Every dental specialty, under one roof" },
    city: { ar: "الإسكندرية", en: "Alexandria" },
    /* Logo file path, e.g. "assets/img/logo.svg". Empty = typographic logo. */
    logo: "",
    /* Icon part of the logo (used beside the typographic name).
       Current file was cut from the clinic's social-media cover; replace it
       with the original high-resolution logo file when available. */
    logoMark: "assets/img/logo-mark.png",
    /* Image used when the site is shared on WhatsApp/Facebook (1200x630). */
    shareImage: "assets/img/share-card.png",
  },

  /* ---------------- BRANCHES ----------------
     The first branch in the list is the main / priority branch. */
  branches: [
    {
      id: "sporting",
      name: { ar: "فرع سبورتينج", en: "Sporting Branch" },
      area: { ar: "سبورتينج", en: "Sporting" },
      priority: true,
      /* Source: clinic social-media designs (Nov 2026) — confirm before launch */
      address: {
        ar: "سبورتنج على البحر، طريق الجيش، عقار 75، أمام نفق الهانير",
        en: "75 El Geish Road (sea front), Sporting, Alexandria",
      },
      hours: { ar: "يوميًا من 2 ظهرًا حتى 10 مساءً", en: "Daily, 2:00 PM – 10:00 PM" },
      bookingNote: { ar: "المواعيد بالحجز المسبق", en: "Appointments by prior booking" },
      open: { opens: "14:00", closes: "22:00" }, // for Google structured data (daily)
      phone: "2035918187",                  // landline 03 5918187
      phoneDisplay: "03 5918187",
      whatsapp: "201033572443",             // 010 3357 2443
      whatsappDisplay: "010 3357 2443",
      phone2: "",                           // optional second phone
      phone2Display: "",
      mapsUrl: "https://maps.app.goo.gl/xze4yvREeTgRRHQTA", // Google Maps (Sporting)
      mapEmbedUrl: "",                      // optional: Google Maps "Embed a map" src URL
      photo: "",                            // e.g. "assets/img/sporting.jpg"
      geo: { lat: "", lng: "" },            // optional, for Google structured data
    },
    {
      id: "agami",
      name: { ar: "فرع العجمي", en: "Agami Branch" },
      area: { ar: "العجمي", en: "Agami" },
      priority: false,
      address: {
        ar: "الكيلو 21، أعلى فرع فودافون، بجوار مدخل شارع التأمين",
        en: "Km 21, above the Vodafone store, next to El Taameen Street entrance, Agami",
      },
      hours: { ar: "يوميًا من 12 ظهرًا حتى 11 مساءً", en: "Daily, 12:00 PM – 11:00 PM" },
      bookingNote: { ar: "المواعيد بالحجز المسبق", en: "Appointments by prior booking" },
      open: { opens: "12:00", closes: "23:00" }, // for Google structured data (daily)
      phone: "201286641616",                // 012 8664 1616
      phoneDisplay: "012 8664 1616",
      whatsapp: "201013594549",             // 010 1359 4549
      whatsappDisplay: "010 1359 4549",
      phone2: "",
      phone2Display: "",
      mapsUrl: "https://maps.app.goo.gl/2sJYsx1uV9o7Yhkb9",
      mapEmbedUrl: "",
      photo: "",
      geo: { lat: "", lng: "" },
    },
  ],

  /* ---------------- SOCIAL ---------------- */
  social: {
    facebook: "https://www.facebook.com/share/1Q1KT2sWB9/",
    instagram: "https://www.instagram.com/toothshine.dentalcenter",
    tiktok: "",
    youtube: "",
  },

  /* ---------------- DOCTORS / TEAM ----------------
     Add more people by copying one block. */
  team: [
    {
      id: "beshay-mina",
      name: { ar: "د. بشاي مينا", en: "Dr. Beshay Mina" },
      role: { ar: "مؤسس ومالك مركز أسنان شاين", en: "Founder & Owner, Tooth Shine Dental Center" },
      interests: {
        ar: ["تجميل الأسنان", "التركيبات الثابتة", "زراعة الأسنان"],
        en: ["Cosmetic dentistry", "Fixed prosthodontics", "Implant dentistry"],
      },
      memberships: [
        { abbr: "ITI", ar: "عضو الفريق الدولي لزراعة الأسنان", en: "Member of the International Team for Implantology" },
        { abbr: "ESOI", ar: "عضو الجمعية المصرية لزراعة الأسنان", en: "Member of the Egyptian Society of Oral Implantology" },
      ],
      /* Add confirmed academic titles here only, e.g. { ar: "...", en: "..." } */
      qualifications: [],
      photo: "assets/img/dr-beshay-mina.jpg", // official photo, 4:5 crop
      heroPhoto: "assets/img/dr-beshay-hero.jpg", // official photo (Nov 2026), cut-out of source-photos/dr-beshay-official-2-original.jpg (background removed)
    },
  ],

  /* ---------------- EQUIPMENT CONFIRMATION ----------------
     false = hidden from the whole site (pages, cards, text) until confirmed. */
  features: {
    scanner: true,           // intraoral scanner: confirmed by Dr. Beshay (13 Nov 2026)
  },

  /* ---------------- PHOTO SLOTS ----------------
     Empty = a designed placeholder panel is shown instead. */
  photos: {
    heroClinic: "assets/img/hero-implant.jpg",   // main image for the homepage opening
    heroAlt: { ar: "رسم توضيحي لزرعة أسنان داخل عظم الفك", en: "Illustration of a dental implant in the jawbone" },
    interior: [],            // list of clinic interior photos
    equipment: {             // photos of the actual devices
      scanner: "",
      anesthesia: "",
      xray: "",
      prophyjet: "",
    },
  },

  /* ---------------- IMPLANT SYSTEMS ----------------
     Shown on the dental-implants page. No prices on the website.
     Source: clinic social-media designs (Nov 2026). Edit freely. */
  implantSystems: [
    { name: "Straumann", origin: { ar: "سويسرا", en: "Switzerland" } },
    { name: "MegaGen", origin: { ar: "كوريا", en: "Korea" } },
    { name: "Osstem", origin: { ar: "كوريا", en: "Korea" } },
    { name: "Hiossen", origin: { ar: "أمريكا", en: "USA" } },
    { name: "Neobiotech", origin: { ar: "كوريا", en: "Korea" } },
    { name: "Fortis", origin: { ar: "ألمانيا", en: "Germany" } },
  ],

  /* ---------------- GOOGLE REVIEWS ----------------
     Use ONLY real reviews copied word-for-word from each branch's Google
     Business Profile. Do not edit their meaning. Show first name + initial.
     The section appears automatically when "items" is not empty.
     rating / count: copy from Google and update "asOf" when you change them. */
  googleReviews: {
    profiles: {                 // "Read all reviews on Google" link per branch
      sporting: "https://maps.app.goo.gl/xze4yvREeTgRRHQTA",
      agami: "https://maps.app.goo.gl/2sJYsx1uV9o7Yhkb9",
    },
    // Copied verbatim from the two Google Maps listings on 2026-11-12 (first name + initial only). Update periodically.
    summary: { rating: "", count: "", asOf: "2026-11" },
    branchSummary: { sporting: { rating: "4.8", count: "54" }, agami: { rating: "4.9", count: "61" } },
    writeReview: "",
    // 58 five-star reviews with text, copied verbatim from the two Google Maps listings on 2026-11-12 (first name + initial only).
    // services: [...] puts a review on that service page too. Star-only reviews and a child's review were left out.
    items: [
      {"name": "Nour G.", "stars": 5, "branch": "sporting", "services": [], "date": "منذ 9 أشهر", "text": "بجد دكتور بشاي من احسن دكاتره الاسنان واكتر مركز مريح والبنج الليزر حاجه تحفه ومش مؤلم خالص أنا اكتر حد مش بيستحمل وجع الاسنان بس مع دكتور بشاي بروح من غير خوف علشان بجد كل الاجهزه حديثه ومش بحس بأي الم ♥️♥️", "lang": "ar"},
      {"name": "Mirvat F.", "stars": 5, "branch": "agami", "services": [], "date": "منذ 9 أشهر", "text": "بصراحة، ما شاء الله، الدكتور .. بشاي شاطر جدًا ومتخصص شرح لي حالتي بكل وضوح واهتمام، وطرق العلاج كانت مناسبة جدًا *الدكتور*: متمكن وصبور، *الطاقم الطبي..السكرتارية متعاونين وبشوشين ومحترمين جدا يعملون باحترافية.. أنا كنت بخاف جدا من دكاترة الأسنان بس مركز أسنان شاين علاج نفسي في الأول وطبي ثانيا❤ أنصح بشدة بالتعامل مع الدكتور بيشاي وطاقمه. خدمة ممتازة واهتمام بالمرضى.", "lang": "ar"},
      {"name": "Hanan W.", "stars": 5, "branch": "sporting", "services": ["dental-implants"], "date": "منذ شهر", "text": "شكرا د بشاي علي الامبلانت مافيش اي الم سهلة جدا الزراعة ممتازة في كل شيء", "lang": "ar"},
      {"name": "Amel H.", "stars": 5, "branch": "sporting", "services": [], "date": "منذ شهرين", "text": "المركز ممتاز من حيث التعقيم و دكتور بشاى بصراحة نجح انه يخلينى اتخلص من فوبيا دكتور الأسنان و حقنه البنج ده غير ان ايده ماشاء الله خفيفة جدا و مريح جدا ف التعامل و الابتسامة مش بتفارق وشه سواء و هو بيتعامل مع المريض او مع الاستاف اللى معاه و ده بيدى راحة نفسيه رهيبه", "lang": "ar"},
      {"name": "Reem M.", "stars": 5, "branch": "agami", "services": ["composite-veneers", "cosmetic-restorative-dentistry"], "date": "منذ سنة", "text": "I did composite veneers with dr. Bashey and the results are amazing. Beautiful work - no pain, no bleeding, no shaving, and the results are as natural as can be. His hands are light and quick. Thank you doc for your excellent work!", "lang": "en"},
      {"name": "Ahmed K.", "stars": 5, "branch": "agami", "services": [], "date": "منذ سنة", "text": "عن تجربة دكتور شاطر جدا ما شاء الله وصبور ف شغله وبيعمله بضمير نادر اليومين دول حتي لو هيكلفه وقت ومجهود اهم حاجة بالنسباله يكون ضميره مرتاح للنتيجة.. أدواته حديثة.. مكانه ترتاح فيه نفسيا .. نقطة تانية مهمة هي المواعيد والتواصل مع الناس فوق الممتاز..", "lang": "ar"},
      {"name": "Engy H.", "stars": 5, "branch": "sporting", "services": [], "date": "منذ 10 أشهر", "text": "بجد التعامل تحفه تيم جميل جدا ف النظام و الدكتور بجد متعاون و بيسمع الشكوى و بيفهم بالتفصيل كل خطوه بيعملها مع المريض ❤️", "lang": "ar"},
      {"name": "Bassant Y.", "stars": 5, "branch": "sporting", "services": ["root-canal-treatment"], "date": "منذ 9 أشهر", "text": "حابه احكى تجربتى مع دكتور بشاي مينا انا كنت بخاف من دكاتره الاسنان و حقيقى قعدت فتره كبيره جدا وانا مش بروح لاى دكتور اسنان بسبب خوفى الكبير من البنج و خصوصا ان كنت هعمل حشو عصب بس لما رحت مركز اسنان شاين و اتعملت مع دكتور بشاي مينا قدر خوفى جدا و بسبب التقنيات العاليه اللى استخدمه انا محستش باى وجع و حقيقى خلصت اول جلسه محستش باى حاجه لا بحقنه البنج و نزلت من عنده وانا مش حاسه باى وجع و تانى جلسه كنت مش خايفه لان اطمنت فى الاول و حقيقى دكتور بشاي مينا شاطر جدا و ممتاز و قدر خوفى جدا غير ان المعامله كويسه اوى بحب اشكر دكتور بشاي على حسن معاملته و بالتوفيق إن شاءلله 🤍", "lang": "ar"},
      {"name": "Rody H.", "stars": 5, "branch": "agami", "services": [], "date": "منذ سنة", "text": "مكان متميز فعلا وراقي ودكتور بشاي محترم وشاطر وعرف يتعامل مع حالتي الصحيه اللي هي معقده شويه ودي اكتر حاجه كانت مخوفاني اخد اي خطوة لاسناني بس الحمد لله كانت تجربه ممتازة جدا وبدون اي الم والخوف من دخول عياده اسنان راح علي ايد دكتور بشاي", "lang": "ar"},
      {"name": "Abanoub N.", "stars": 5, "branch": "sporting", "services": [], "date": "منذ 10 أشهر", "text": "المركز ممتاز حقيقي المعاملة professional المواعيد flexible ووقت انتظار قليل الدكتور شاطر جداا وباله طويل العلاج من غير ألم", "lang": "ar"},
      {"name": "Sandy S.", "stars": 5, "branch": "agami", "services": [], "date": "منذ سنة", "text": "المركز ممتاز مواعيد مظبوطه المركز نضيف جدا اشطر دكتور بشاي بجد جهاز حقنة البنج بدون ألم عن تجربه أجمل حاجه المتابعه المستمره حتي بعد مخلصت", "lang": "ar"},
      {"name": "Mohammed H.", "stars": 5, "branch": "sporting", "services": ["cosmetic-restorative-dentistry"], "date": "منذ 10 أشهر", "text": "تحية وتقدير لمركز أسنان شاين من دكتور لتمريض لسكرتارية... كانت أول تجربة لعمل طقم اسنان كامل ... ربنا يبارك فيكم ويوفقكم.. وان شاء الله يكون مش اخر تعامل", "lang": "ar"},
      {"name": "Ibrahim M.", "stars": 5, "branch": "sporting", "services": ["tooth-extraction", "root-canal-treatment"], "date": "منذ 10 أشهر", "text": "دكتور شاطر جدا والبنج ليزر مش مؤلم والدكتور فاهم جدا جدا خلعت ضرس العقل بسهولة تامة وبدون اي الم وحشيت ضروس عصب", "lang": "ar"},
      {"name": "Hassan A.", "stars": 5, "branch": "sporting", "services": [], "date": "منذ 7 أشهر", "text": "دقة في المواعيد و المتابعة بعد العلاج و فوق ذلك مهارة الطبيب / و إخلاصه في العمل ، بالتوفيق دائماً .", "lang": "ar"},
      {"name": "Noga Z.", "stars": 5, "branch": "agami", "services": ["tooth-extraction"], "date": "منذ سنة", "text": "احب اشكر دكتور /بيشاي مينا ع مجهوده وتعبه معايا لاني كنت خايفه جدا م الخلع بجد بجد الخلع عندو بدون آلم حرفيا لانه بيستخدم الاجهزه الحديثه تسلم ايدك والله يادكتور ربنايباركلك", "lang": "ar"},
      {"name": "Catherine M.", "stars": 5, "branch": "sporting", "services": [], "date": "منذ 10 أشهر", "text": "From my personal experience Everything is excellent and the result is completely satisfactory for me. Tooth Shine is a 100% safe and suitable place. All support and appreciation", "lang": "en"},
      {"name": "Elly G.", "stars": 5, "branch": "sporting", "services": ["tooth-colored-fillings", "tooth-extraction"], "date": "منذ 10 أشهر", "text": "حابب احكي تجربتي مع دكتور بيشاي أنا كان عندي الم في الضروس روحت لدكتور في القاهره قالي عمليه و بنج كلي و قالي أن حالتك صعبه جدا تواصلت مع دكتور بيشاي و روحت ليه من القاهره للاسكندريه اول ما شاف حالتي قالي ولا عمليه ولا اي حاجه خالص انت زي الفل حتي الضرس مش هيتشال ولا نخسره أنا هحشيه و فعلا ده حصل في خلال نص ساعه او اقل بدون اي الم حتي حقنه البنج محستش بيها..حتي كان عندي ضرس العقل مدمر و مدمر اللثه و عاملي مشاكل دكتور بيشاي خلعه في اقل من نص دقيقه منغير ما احس حتي أنه اتخلع أنا اتفاجات أنه بيقولي تمام كده خلعنا ده..و بعد الخلع و الحشو رجعت القاهره بعد ما مشيت من عنده بساعه ولا كأني عامل اي حاجه ولا في اي مشكله حقيقي دكتور بشاي مش بس شاطر ده ممتاز و كفايه استقباله و كلامه و مش بيكبر المواضيع كل حاجه عنده فيها سلاسه شكرا ليك دكتور بيشاي اتمني ليك كل الخير و النجاح", "lang": "ar"},
      {"name": "Aminna M.", "stars": 5, "branch": "sporting", "services": [], "date": "منذ 4 أشهر", "text": "د. منة ربنا يبارك فيها من اشطر الدكاترة اللى عرفتهم والمكان مريح نفسيا واول مرة احب اروح اعمل اسنانى الحمدلله كل القائمين فى المكان معاملتهم طيبة جدا شكرا بجد على كل ما تقدموه", "lang": "ar"},
      {"name": "Ghazl A.", "stars": 5, "branch": "sporting", "services": ["tooth-extraction"], "date": "منذ 6 أشهر", "text": "الصراحة تجربه تحفه جدا انا من الناس اللي بخاف من الاسنان جدا بس فعلا من غير الم نهائي انا خلعت ضرسين محستش فعلا باي الم ربنا يباركلهم ياااارب وانصح اي حد بيه", "lang": "ar"},
      {"name": "Tasnim M.", "stars": 5, "branch": "sporting", "services": [], "date": "منذ 11 أشهر", "text": "مركز أسنان شاين من احسن المراكز ال بتستخدم تقنيه عاليه جدا فى الادوات والمعدات و الفريق الطبى كامل من اشطر واحسن الناس والتعقيم فوق الممتاز بالتوفيق 💖💖", "lang": "ar"},
      {"name": "Madonna A.", "stars": 5, "branch": "agami", "services": ["tooth-extraction"], "date": "منذ سنة", "text": "دكتور شاطر ومحترم حقيقي ، خلعت ضرس العقل والحمدلله محستش بأي وجع وقت العملية ، والسكرتارية كلموني بعد العملية يتطمنوا ان كل حاجة تمام 🙏🏻", "lang": "ar"},
      {"name": "Mai T.", "stars": 5, "branch": "sporting", "services": [], "date": "منذ 9 أشهر", "text": "الحمد لله تجربتي مع دكتور بشاي كويسة جدا وهو دكتور ممتاز وعنده ضمير جدا في شغلة وassistant زوق جداو مريحين جدا في التعامل بجد شكرا ليكم", "lang": "ar"},
      {"name": "Dodo R.", "stars": 5, "branch": "sporting", "services": [], "date": "منذ 9 أشهر", "text": "بجد اشطر دكتوره عملت معايا في الدنيا كلها بشكرك جدا ان حضرتك كنت مسهل لي الامور جدا ما تخيلتش ان الامور هتبقى بسيطه كده وشكرا جدا ☺️", "lang": "ar"},
      {"name": "Momen M.", "stars": 5, "branch": "agami", "services": [], "date": "منذ سنة", "text": "بصراحه المركز نضيف جدا ودكتور بشاى ممتاز ومعامله حلوة جدا واجهزة حديثه وفريق العمل كله السكرتيرة والمساعدة ذوق جدا في معاملتهم", "lang": "ar"},
      {"name": "Marina A.", "stars": 5, "branch": "sporting", "services": [], "date": "منذ 11 أشهر", "text": "من اشطر الدكاتره ف اسكندريه حقيقي كفايه المكان وتعقيمه ودايمآ بتتفوق ف المجال برشحك لأي حد محتاج دكتور اسنان شاطر وأمين 💙", "lang": "ar"},
      {"name": "Bosy S.", "stars": 5, "branch": "agami", "services": [], "date": "منذ سنة", "text": "بجد دكتور بشاى شاطر جداااا ربنا يباركله ومعامله جميله وجهاز البنج الحديث دا تحفه وحتى السكرتاريه والتمريض كويسين جدااا", "lang": "ar"},
      {"name": "Mariam A.", "stars": 5, "branch": "sporting", "services": [], "date": "منذ 10 أشهر", "text": "مركز شاين من افضل المراكز اللى بتستخدم تقنية عالية جدا فى الأجهزة والمعدات والتعقيم عنده اهم حاجة بالتوفيق جدااا", "lang": "ar"},
      {"name": "منى س.", "stars": 5, "branch": "sporting", "services": [], "date": "منذ 11 أشهر", "text": "مركز أسنان شاين هو من أفضل المراكز ودكتور بشاي ممتاز جدا والتقنية بتاعت المركز حلوة أوي", "lang": "ar"},
      {"name": "العبد ا.", "stars": 5, "branch": "sporting", "services": [], "date": "منذ 11 أشهر", "text": "Amazing dental clinic very clean professional staff and great care highly recommended 😄", "lang": "en"},
      {"name": "Aya M.", "stars": 5, "branch": "sporting", "services": [], "date": "منذ 11 أشهر", "text": "حقيقي من احسن المراكز والتعقيم عندهم علي اعلي مستوى وبيشتغلوا بضمير وعندهم احدث الاجهزة", "lang": "ar"},
      {"name": "Elly G.", "stars": 5, "branch": "agami", "services": [], "date": "منذ سنة", "text": "دكتور بشاي من اميز واشطر دكاتره الاسنان وعن تجربه حقيقي حد مريح جدا وشاطر جدا في شغله", "lang": "ar"},
      {"name": "Salmeen H.", "stars": 5, "branch": "agami", "services": [], "date": "منذ سنة", "text": "بجد الدكتور محترم وشاطر وذوق جدا والتعامل كويس جدا دايما ف تقدم ونجاح ان شاء الله ❤️", "lang": "ar"},
      {"name": "ابانوب ب.", "stars": 5, "branch": "sporting", "services": [], "date": "منذ 10 أشهر", "text": "دكتور بشاي من اشطر الدكاتره في اسكندريه ومن انظف الاماكن اللي ممكن تتابع معاها", "lang": "ar"},
      {"name": "Sandy S.", "stars": 5, "branch": "sporting", "services": [], "date": "منذ 10 أشهر", "text": "مركز متميز خدمه ممتازه والنظافة والتجهيزات علي اعلي مستوي دكتور شاطر جدا", "lang": "ar"},
      {"name": "Malak K.", "stars": 5, "branch": "agami", "services": [], "date": "منذ سنتين", "text": "د/بشاي مينا من اشطر الدكاترة و المركز قمة في النظافة و امانة في العمل", "lang": "ar"},
      {"name": "Aml B.", "stars": 5, "branch": "sporting", "services": [], "date": "منذ 11 أشهر", "text": "دكتور بشاى ممتاز ومن اشطر الدكاتره إلى تعاملت معاها وأيده خفيفه جدا", "lang": "ar"},
      {"name": "Mohamed S.", "stars": 5, "branch": "sporting", "services": [], "date": "منذ 11 أشهر", "text": "مركز اسنان شاين فرع سبورتنج والدكتور بشاي ممتاز جدا والفرع كويس اوي", "lang": "ar"},
      {"name": "جونير ب.", "stars": 5, "branch": "sporting", "services": [], "date": "منذ 11 أشهر", "text": "دكتور بشاي ممتاز جدا جدا بيستخدم تقنيات حديثه في التعامل مع الاسنان", "lang": "ar"},
      {"name": "Islam O.", "stars": 5, "branch": "sporting", "services": [], "date": "منذ 4 أشهر", "text": "محترمين وشاطرين جدا تعامل راقي من الريسبشن ودكتور مينا والتمريض", "lang": "ar"},
      {"name": "Nada H.", "stars": 5, "branch": "sporting", "services": [], "date": "منذ 10 أشهر", "text": "بجد المكان مريح جدا والدكتور شاطر اوى شكرا اوى على تعبتك معايا", "lang": "ar"},
      {"name": "M.kareem F.", "stars": 5, "branch": "sporting", "services": [], "date": "منذ 10 أشهر", "text": "بجد دكتور قمه في النظافه والأخلاق ومتقن جدا في عمله", "lang": "ar"},
      {"name": "Amira Z.", "stars": 5, "branch": "sporting", "services": [], "date": "منذ 11 أشهر", "text": "حقيقي اشطر دكتور ونضافه المكان وتعامل جميل جدا", "lang": "ar"},
      {"name": "Armia M.", "stars": 5, "branch": "agami", "services": [], "date": "منذ سنتين", "text": "تجربة علاجية جيدة عياده مجهزة باحدث الأجهزة", "lang": "ar"},
      {"name": "Hanyghonem55555 H.", "stars": 5, "branch": "sporting", "services": [], "date": "منذ 7 أشهر", "text": "دكتور ممتاز وشاطر جدا كانت تجربة ممتازة", "lang": "ar"},
      {"name": "Eslam F.", "stars": 5, "branch": "sporting", "services": [], "date": "منذ 9 أشهر", "text": "دكتور ممتاز جداا وكل الاحترام والتقدير", "lang": "ar"},
      {"name": "Haliem S.", "stars": 5, "branch": "sporting", "services": [], "date": "منذ 10 أشهر", "text": "الدكتور بشار شاطر جدا وذوق فى التعامل", "lang": "ar"},
      {"name": "Mina A.", "stars": 5, "branch": "agami", "services": [], "date": "منذ سنتين", "text": "مركز متميز ومحترم ودكتور شاطر جدا جدا", "lang": "ar"},
      {"name": "Mina H.", "stars": 5, "branch": "agami", "services": [], "date": "منذ سنتين", "text": "Highly informative staff, Thank you", "lang": "en"},
      {"name": "Mariam M.", "stars": 5, "branch": "agami", "services": [], "date": "منذ سنتين", "text": "Absolutely best place to choose🙏🏼✨", "lang": "en"},
      {"name": "Eman D.", "stars": 5, "branch": "sporting", "services": [], "date": "منذ 11 أشهر", "text": "عيادة ممتازة ودكتور بشاي شاطر جدا", "lang": "ar"},
      {"name": "Mohamed A.", "stars": 5, "branch": "agami", "services": [], "date": "منذ سنتين", "text": "مركز محترم ودكتور بيشاي شاطر جدا", "lang": "ar"},
      {"name": "Said M.", "stars": 5, "branch": "agami", "services": [], "date": "منذ سنتين", "text": "This doctor has a golden touch", "lang": "en"},
      {"name": "Anton M.", "stars": 5, "branch": "sporting", "services": [], "date": "منذ شهرين", "text": "خدمة متميزة جدأ شكراً د/بشاي", "lang": "ar"},
      {"name": "Abanoub G.", "stars": 5, "branch": "agami", "services": [], "date": "منذ سنتين", "text": "مركز محترم ودكتور شاطر جداا", "lang": "ar"},
      {"name": "Mohammed G.", "stars": 5, "branch": "sporting", "services": [], "date": "منذ 10 أشهر", "text": "من احسن دكاترة اسنان صراحه", "lang": "ar"},
      {"name": "Shady A.", "stars": 5, "branch": "sporting", "services": [], "date": "منذ 6 أشهر", "text": "Amazing dentist and staff", "lang": "en"},
      {"name": "Ahmed M.", "stars": 5, "branch": "agami", "services": [], "date": "منذ سنتين", "text": "افضل أجهزة وخامات ❤️❤️", "lang": "ar"},
      {"name": "Mariam F.", "stars": 5, "branch": "agami", "services": [], "date": "منذ سنتين", "text": "اشطر دكتور تطمئن معاه", "lang": "ar"}
    ],
  },

  /* ---------------- SUCCESS STORIES (clinical cases) ----------------
     Homepage order: Google reviews → success stories → patient stories.
     Only cases with written patient consent. Each case is ONE image
     (a before/after collage works best, square 1:1, e.g. 1080×1080).
     { image: "assets/img/cases/case-1.jpg",
       service: "dental-implants",               // links the card + booking button
       title: { ar: "تعويض ضرس مفقود بزرعة", en: "Replacing a missing molar with an implant" },
       story: { ar: "وصف مختصر وواقعي للحالة والعلاج", en: "..." } }   // optional */
  /* ---------------- TRACKING (ads + analytics) ----------------
     Leave empty until the clinic gives its own account IDs. Nothing loads while empty.
     ga4: "G-XXXXXXX" · googleAds: "AW-XXXXXXX" · googleAdsLead: "AW-XXXXXXX/abcDEF" (conversion label)
     metaPixel: "1234567890". Ads/Meta load only after the visitor accepts the cookie notice.
     No medical details are ever sent: only page type, branch, booking method and campaign (UTM). */
  tracking: { ga4: "", googleAds: "", googleAdsLead: "", metaPixel: "" },

  cases: [
    // Real clinic cases, cropped from the clinic's own posts (Nov 2026). Published with the patients' consent as confirmed by Dr. Beshay.
    { service: "dental-implants", title: { ar: "تعويض ضرس مفقود بزرعة", en: "Replacing a missing molar with an implant" },
      images: [{ src: "assets/img/cases/implant-molar-1.webp", label: { ar: "١. الزرعة", en: "1. Implant" } }, { src: "assets/img/cases/implant-molar-2.webp", label: { ar: "٢. الالتئام", en: "2. Healing" } }, { src: "assets/img/cases/implant-molar-3.webp", label: { ar: "٣. النهائي", en: "3. Final" } }] },
    { service: "dental-implants", title: { ar: "زرعتين لتعويض ضرسين", en: "Two implants replacing two molars" },
      images: [{ src: "assets/img/cases/implant-two-1.webp", label: { ar: "١. الزرعات", en: "1. Implants" } }, { src: "assets/img/cases/implant-two-2.webp", label: { ar: "٢. الالتئام", en: "2. Healing" } }, { src: "assets/img/cases/implant-two-3.webp", label: { ar: "٣. النهائي", en: "3. Final" } }] },
    { service: "cosmetic-restorative-dentistry", title: { ar: "تركيبات بورسلين للفك", en: "Porcelain restorations" },
      images: [{ src: "assets/img/cases/porcelain-full-before.webp", label: { ar: "قبل", en: "Before" } }, { src: "assets/img/cases/porcelain-full-after.webp", label: { ar: "بعد", en: "After" } }] },
    { service: "cosmetic-restorative-dentistry", title: { ar: "تركيبات زيركونيا", en: "Zirconia restorations" },
      images: [{ src: "assets/img/cases/zirconia-full-before.webp", label: { ar: "قبل", en: "Before" } }, { src: "assets/img/cases/zirconia-full-after.webp", label: { ar: "بعد", en: "After" } }] },
    { service: "cosmetic-restorative-dentistry", title: { ar: "تعويض سنة أمامية بالزيركونيا", en: "Replacing a front tooth with zirconia" },
      images: [{ src: "assets/img/cases/zirconia-front-before.webp", label: { ar: "قبل", en: "Before" } }, { src: "assets/img/cases/zirconia-front-after.webp", label: { ar: "بعد", en: "After" } }] },
    { service: "cosmetic-restorative-dentistry", title: { ar: "تأهيل الفم وتجميل الابتسامة", en: "Full-mouth rehabilitation and smile design" },
      images: [{ src: "assets/img/cases/rehab-1-before.webp", label: { ar: "قبل", en: "Before" } }, { src: "assets/img/cases/rehab-1-after.webp", label: { ar: "بعد", en: "After" } }] },
    { service: "cosmetic-restorative-dentistry", title: { ar: "تأهيل الفم وتجميل الابتسامة", en: "Full-mouth rehabilitation and smile design" },
      images: [{ src: "assets/img/cases/rehab-2-before.webp", label: { ar: "قبل", en: "Before" } }, { src: "assets/img/cases/rehab-2-after.webp", label: { ar: "بعد", en: "After" } }] },
    { service: "cosmetic-restorative-dentistry", title: { ar: "فينير إي ماكس للابتسامة", en: "E.max ceramic veneers" },
      images: [{ src: "assets/img/cases/smile-1-before.webp", label: { ar: "قبل", en: "Before" } }, { src: "assets/img/cases/smile-1-after.webp", label: { ar: "بعد", en: "After" } }] },
    { service: "composite-veneers", title: { ar: "فينير كومبوزيت", en: "Composite veneers" },
      images: [{ src: "assets/img/cases/composite-veneer-before.webp", label: { ar: "قبل", en: "Before" } }, { src: "assets/img/cases/composite-veneer-after.webp", label: { ar: "بعد", en: "After" } }] },
    { service: "teeth-whitening", title: { ar: "تبييض الأسنان في العيادة", en: "In-clinic whitening" },
      images: [{ src: "assets/img/cases/whitening-1-before.webp", label: { ar: "قبل", en: "Before" } }, { src: "assets/img/cases/whitening-1-after.webp", label: { ar: "بعد", en: "After" } }] },
    { service: "teeth-whitening", title: { ar: "تبييض الأسنان في العيادة", en: "In-clinic whitening" },
      images: [{ src: "assets/img/cases/whitening-2-before.webp", label: { ar: "قبل", en: "Before" } }, { src: "assets/img/cases/whitening-2-after.webp", label: { ar: "بعد", en: "After" } }] },
    { service: "teeth-whitening", title: { ar: "جلسة تبييض: حماية اللثة قبل التبييض", en: "Whitening visit: the gums are protected first" },
      images: [{ src: "assets/img/cases/whitening-3-before.webp", label: { ar: "قبل", en: "Before" } }, { src: "assets/img/cases/whitening-3-during.webp", label: { ar: "أثناء الجلسة", en: "During the visit" } }] },
    { service: "tooth-extraction", title: { ar: "خلع ضرس عقل مدفون جراحيًا", en: "Surgical removal of an impacted wisdom tooth" },
      images: [{ src: "assets/img/cases/wisdom-xray.webp", label: { ar: "الأشعة قبل الخلع", en: "X-ray before" } }, { src: "assets/img/cases/wisdom-tooth.webp", label: { ar: "الضرس بعد الخلع", en: "The tooth after removal" } }] },
    { service: "tooth-extraction", title: { ar: "خلع ضرس عقل مدفون", en: "Removing an impacted wisdom tooth" },
      images: [{ src: "assets/img/cases/wisdom-2-before.webp", label: { ar: "الأشعة قبل الخلع", en: "X-ray before" } }, { src: "assets/img/cases/wisdom-2-after.webp", label: { ar: "الضرس بعد خلعه، موضوع على الأشعة للتوضيح", en: "The removed tooth, shown over the X-ray" } }] },
    { service: "tooth-extraction", title: { ar: "خلع ضرس عقل مدفون", en: "Removing an impacted wisdom tooth" },
      images: [{ src: "assets/img/cases/wisdom-3-before.webp", label: { ar: "الأشعة قبل الخلع", en: "X-ray before" } }, { src: "assets/img/cases/wisdom-3-after.webp", label: { ar: "الضرس بعد خلعه، موضوع على الأشعة للتوضيح", en: "The removed tooth, shown over the X-ray" } }] },
  ],

  /* ---------------- PATIENT STORIES (videos) ----------------
     Only videos the patient agreed to publish.
     video: a YouTube id (e.g. "dQw4w9WgXcQ")  OR  an mp4 in assets/video/
     poster: cover image for mp4 videos (optional)
     { youtubeId: "", video: "assets/video/story-1.mp4", poster: "assets/img/stories/1.jpg",
       service: "orthodontics",
       title: { ar: "رحلة تقويم شفاف", en: "A clear-aligner journey" },
       quote: { ar: "جملة قصيرة قالها المريض كما هي", en: "..." },
       name:  { ar: "أ. سارة", en: "Sarah" },          // only with permission
       instagram: "https://www.instagram.com/reel/..." } */
  testimonials: [],

  /* ---------------- TRUST NUMBERS (optional) ----------------
     Shown under the homepage headline ONLY when filled.
     Use numbers you can prove (e.g. from records). Leave [] if unsure.
     { value: "10+", label: { ar: "سنوات خبرة", en: "Years of experience" } } */
  trustStats: [],

  /* ---------------- OFFERS ----------------
     Only approved offers with clear terms. Section hides when empty.
     { title: {ar:"",en:""}, details: {ar:"",en:""}, validUntil: "2026-12-31" } */
  offers: [],

  /* ---------------- PAYMENT ----------------
     Fill only confirmed information; empty = not mentioned on the site. */
  payment: {
    methods: { ar: "نقدًا أو بالفيزا", en: "Cash or Visa card" },
    installments: { ar: "إمكانية التقسيط من خلال valU", en: "Instalments available through valU" },
    consultationFee: { ar: "", en: "" },
  },
};
