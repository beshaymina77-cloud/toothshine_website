# موقع مركز أسنان شاين — Tooth Shine Dental Center website

موقع ثابت (Static) بالعربي والإنجليزي، سريع وخفيف، ومش محتاج سيرفر ولا قاعدة بيانات.
A fast bilingual static website (Arabic default at `/`, English at `/en/`).

---

## 1) فين أعدّل إيه؟ | Where to edit

| عايز تغيّر | الملف |
|---|---|
| أرقام التليفون والواتساب، العناوين، مواعيد العمل، لينكات الخريطة، السوشيال، اللوجو، الصور، فيديوهات المرضى، الحالات، العروض، طرق الدفع، بيانات الأطباء | `config/business.js` |
| نصوص الخدمات (المقدمة، الأسباب، التقييم، الأسئلة) | `content/services.js` |
| الأجهزة والتقنيات | `content/technology.js` |
| نصوص الصفحة الرئيسية، الأزرار، الأسئلة الشائعة، رسالة الواتساب الجاهزة | `content/site.js` |
| المقالات (المدونة) — إضافة مقال جديد | `content/articles.js` |
| تقييمات Google وقصص النجاح وأنظمة الزراعة | `config/business.js` (`googleReviews` · `cases` · `implantSystems`) |
| ترتيب الخدمات الرئيسية (التابات) | `rank` في `content/services.js` |
| التصميم والألوان | `public/assets/css/style.css` (الألوان في أول الملف) |

كل نص مكتوب مرتين: `ar` للعربي و `en` للإنجليزي.
أي خانة فاضية `""` الموقع بيخفيها أو بيعرض «يُضاف قريبًا» بدل ما يعرض معلومة غلط.

### أرقام التليفون
اكتبها بالصيغة الدولية أرقام بس: `201033572443` (20 كود مصر، من غير الصفر الأول).
والشكل اللي بيظهر للزائر في `phoneDisplay` / `whatsappDisplay`.

### لينك Google Maps لكل فرع
افتح الفرع على Google Maps ← Share ← Copy link، وحطه في `mapsUrl`.
(اختياري) خريطة مدمجة: Share ← Embed a map ← انسخ قيمة `src` بس وحطها في `mapEmbedUrl`.

## 2) إضافة صور | Adding photos

1. حط الصورة في `public/assets/img/` باسم إنجليزي بسيط من غير مسافات، مثال: `sporting-reception.jpg`.
2. اكتب المسار في `config/business.js`، مثال: `photo: "assets/img/sporting-reception.jpg"`.
3. المقاسات المقترحة (JPG أو WebP، أقل من 300KB لكل صورة):
   - صورة الطبيب: طولية 4:5 (مثال 1000×1250).
   - صور الأجهزة: 16:10 (مثال 1200×750).
   - صورة الفرع / العيادة: 16:9 أو 4:5.
   - صورة الصفحة الرئيسية `photos.heroClinic`: 4:5.
4. فيديوهات المرضى: ارفعها على YouTube (Unlisted أو Public) وحط الـ ID في `testimonials`.
   القسم بيظهر لوحده أول ما تضيف فيديو. انشر بس اللي المريض وافق عليه كتابةً.

## 3) بناء الموقع | Build

يحتاج Node.js 18 أو أحدث، من غير أي مكتبات:

```bash
node build.js
```

الناتج بيتحط في فولدر `dist/` — ده الفولدر اللي بيترفع على الاستضافة.

## 4) النشر على Cloudflare Pages (مجاني) | Deploy

الموقع مربوط بـ GitHub (`beshaymina77-cloud/toothshine_website`، فرع `main`) ومنشور على Cloudflare:
**https://toothshine-dental.beshaymina77.workers.dev**

- أي تعديل يترفع على `main` بيتبني وينزل على الموقع لوحده خلال دقيقة أو اتنين.
- إعدادات البناء على Cloudflare: Build command `node build.js` — Output `dist`.
- مش محتاج ترفع zip تاني.
- لو غيّرت اللينك أو ضفت دومين خاص: عدّل `siteUrl` في `config/business.js` عشان الـ sitemap والـ canonical يبقوا صح.

## 5) ربط الموقع بـ Google Business Profile

لكل فرع:
1. افتح https://business.google.com واختار الفرع.
2. **Edit profile** ← **Contact** ← **Website**.
3. حط لينك صفحة الفروع للفرع ده:
   - سبورتينج: `https://toothshine-dental.beshaymina77.workers.dev/branches/#sporting`
   - العجمي: `https://toothshine-dental.beshaymina77.workers.dev/branches/#agami`
   (أو الصفحة الرئيسية `https://toothshine-dental.beshaymina77.workers.dev/` لو تفضّل.)
4. Save. التعديل ممكن ياخد وقت عشان يظهر بعد مراجعة Google.

وبعدها: أضف الموقع في Google Search Console وابعت `https://toothshine-dental.beshaymina77.workers.dev/sitemap.xml`.

## Structure

```
config/business.js      central business data (branches, phones, team, media, offers)
content/*.js            bilingual copy
src/icons.js            inline SVG icon set
public/                 static files copied as-is (css, js, images, _headers)
build.js                generator → dist/
```

Pages: `/`, `/services/`, `/services/<slug>/` ×12, `/branches/`, and the same under `/en/`, plus `404.html`, `sitemap.xml`, `robots.txt`.
Each page has its own title/description, canonical, `hreflang` alternates, Open Graph tags and JSON-LD (Dentist + branches, BreadcrumbList, FAQPage).
WhatsApp buttons pre-fill a message with the chosen service and branch; the greeting follows the visitor's local time.

## 6) المقالات وتقييمات Google

- **مقال جديد:** انسخ بلوك من `content/articles.js`، غيّر `slug` و`date` والنص بالعربي والإنجليزي، واعمل build. المقال بيظهر لوحده في الرئيسية وصفحة المقالات والـ sitemap.
  اكتب `reviewedBy` بس بعد ما الطبيب يراجع المقال.
- **تقييمات Google:** انسخ نص التقييم كما هو من صفحة الفرع على Google (اسم أول + أول حرف من اسم العيلة) وحطه في `googleReviews.items`. القسم بيظهر أول ما يبقى فيه تقييم واحد. الرقم الإجمالي (مثلًا 4.9 من 120 تقييم) اكتبه في `summary` من Google نفسه وحدّثه كل فترة.
- **قصص النجاح (قبل وبعد):** بموافقة كتابية من المريض فقط، في `cases`.

### الترتيب في الصفحة الرئيسية (بأسلوب A+)
الهيرو (تعريف د. بشاي + صورته `team[0].heroPhoto`) ← الخدمات ← **زيارة التشخيص** ← **تقييمات Google** ← **قصص نجاح** ← **قصص المرضى** ← «جاهز تاخد أول خطوة؟» ← الطبيب ← التقنيات ← الفروع ← المقالات ← الأسئلة.
الأقسام الثلاثة (تقييمات / قصص نجاح / قصص المرضى) مخفية لحد ما تضيف محتوى حقيقي في `config/business.js`:

- `googleReviews.profiles.sporting` / `.agami`: لينك صفحة الفرع على Google. `writeReview`: لينك «اكتب تقييم».
- `googleReviews.summary`: `{ rating: 4.9, count: 120, asOf: "2026-11" }` — من Google نفسه.
- `googleReviews.items`: `{ name, stars, branch: "sporting", service: "dental-implants", date, text: {ar}, lang: "ar" }`.
- `cases` (قصص نجاح): `{ image: "assets/img/case-1.jpg", service: "dental-implants", title: {ar,en}, story: {ar,en} }` — صورة مربعة 1:1 (قبل/بعد في صورة واحدة)، بموافقة كتابية.
- `testimonials` (قصص المرضى): `{ youtubeId: "..." أو video: "assets/video/x.mp4", poster, service, title:{}, quote:{}, name, instagram: "لينك البوست" }` — فيديو طولي 4:5.
- `trustStats` (اختياري): `{ value: "10+", label: {ar:"سنوات خبرة", en:"Years of experience"} }` — أرقام حقيقية تقدر تثبتها بس.
