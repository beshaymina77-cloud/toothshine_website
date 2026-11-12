#!/usr/bin/env node
/* =====================================================================
   Tooth Shine — static site builder (no dependencies)
   Usage:  node build.js          → writes the website into ./dist
   ===================================================================== */
const fs = require("fs");
const path = require("path");

const ROOT = __dirname;
const OUT = path.join(ROOT, "dist");
const biz = require("./config/business.js");
const site = require("./content/site.js");
const services = require("./content/services.js");
const tech = require("./content/technology.js");
const articles = require("./content/articles.js").slice().sort((a, b) => (a.date < b.date ? 1 : -1));
const icons = require("./src/icons.js");

const LANGS = ["ar", "en"];
const VERSION = Date.now().toString(36);

/* ---------- helpers ---------- */
const t = (o, l) => (o == null ? "" : typeof o === "string" ? o : o[l] ?? o.ar ?? "");
const esc = (s) => String(s ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const nl2br = (s) => esc(s).replace(/\n/g, "<br>");
const icon = (name, cls = "") => `<svg class="ic ${cls}" aria-hidden="true"><use href="#i-${name}"/></svg>`;
const prefix = (l) => (l === "ar" ? "" : "/en");
const P = {
  home: (l) => `${prefix(l)}/`,
  services: (l) => `${prefix(l)}/services/`,
  service: (l, s) => `${prefix(l)}/services/${s}/`,
  branches: (l) => `${prefix(l)}/branches/`,
  articles: (l) => `${prefix(l)}/articles/`,
  article: (l, s) => `${prefix(l)}/articles/${s}/`,
};
const abs = (p) => biz.siteUrl.replace(/\/$/, "") + p;
const featured = services.filter((s) => s.featured).sort((a, b) => (a.rank || 99) - (b.rank || 99));
const others = services.filter((s) => !s.featured);
const isReady = (b) => !!(b.whatsapp || b.phone);
const anyPending = biz.branches.some((b) => !b.whatsapp || !b.phone || !b.mapsUrl || !t(b.address, "ar") || !t(b.hours, "ar"));

function waText(l, serviceName, branch, greeting) {
  return t(site.whatsappTemplate, l)
    .replace("{greeting}", greeting || t(site.greetings.evening, l))
    .replace("{service}", serviceName)
    .replace("{branch}", t(branch.name, l));
}
function svcName(l, s) {
  if (!s) return t(site.ui.generalInquiry, l);
  const n = t(s.title, l);
  return l === "en" ? n.toLowerCase() : n;
}
function waHref(l, branch, s) {
  if (!branch.whatsapp) return "";
  return `https://wa.me/${branch.whatsapp}?text=${encodeURIComponent(waText(l, svcName(l, s), branch))}`;
}

/* ---------- contact buttons ---------- */
function btnWA(l, b, s, cls = "") {
  const href = waHref(l, b, s);
  const pend = href ? "" : ` data-pending aria-disabled="true"`;
  return `<a class="btn btn-wa ${cls}" href="${href || "#"}" target="_blank" rel="noopener" data-wa data-branch="${b.id}" data-service="${s ? s.slug : ""}"${pend}>${icon("whatsapp")}<span>${t(site.ui.whatsapp, l)}</span></a>`;
}
function btnCall(l, b, cls = "") {
  const pend = b.phone ? "" : ` data-pending aria-disabled="true"`;
  return `<a class="btn btn-line ${cls}" href="${b.phone ? "tel:+" + b.phone : "#"}"${pend}>${icon("phone")}<span>${t(site.ui.call, l)}</span></a>`;
}
function btnMap(l, b, cls = "") {
  const pend = b.mapsUrl ? "" : ` data-pending aria-disabled="true"`;
  return `<a class="btn btn-ghost ${cls}" href="${b.mapsUrl || "#"}" target="_blank" rel="noopener"${pend}>${icon("pin")}<span>${t(site.ui.directions, l)}</span></a>`;
}
function btnSheet(l, label, s, cls = "btn-primary") {
  return `<a class="btn ${cls}" href="${P.branches(l)}" data-sheet data-service="${s ? s.slug : ""}">${icon("whatsapp")}<span>${label}</span></a>`;
}

/* ---------- photo slot ---------- */
function photo(src, alt, cls, fallbackIcon, label) {
  if (src) {
    return `<figure class="photo ${cls}"><img src="/${src.replace(/^\//, "")}" alt="${esc(alt)}" loading="lazy" decoding="async"></figure>`;
  }
  return `<figure class="photo photo--empty ${cls}" aria-hidden="true">${icon(fallbackIcon || "sparkle", "photo-ic")}${label ? `<span class="photo-label">${esc(label)}</span>` : ""}</figure>`;
}

/* ---------- wordmark ---------- */
function wordmark(l, light = false) {
  if (biz.brand.logo) {
    return `<img class="logo-img" src="/${biz.brand.logo}" alt="${esc(t(biz.brand.name, l))}" width="160" height="48">`;
  }
  const main = l === "ar" ? "شاين" : "Tooth Shine";
  const sub = l === "ar" ? "مركز أسنان · د. بشاي مينا" : "Dental Center · Dr. Beshay Mina";
  return `<span class="wm ${light ? "wm--light" : ""}" aria-hidden="true"><span class="wm-mark">${biz.brand.logoMark ? `<img src="/${biz.brand.logoMark}" alt="" width="40" height="41">` : icon("sparkle")}</span><span class="wm-text"><span class="wm-sub">${sub}</span><span class="wm-main">${main}</span></span></span><span class="sr">${esc(t(biz.brand.name, l))}</span>`;
}

/* ---------- head ---------- */
function head(l, { title, desc, pathAr, pathEn, jsonld = [] }) {
  const canonical = abs(l === "ar" ? pathAr : pathEn);
  const img = abs("/" + biz.brand.shareImage);
  return `<!doctype html>
<html lang="${l}" dir="${l === "ar" ? "rtl" : "ltr"}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<link rel="canonical" href="${canonical}">
<link rel="alternate" hreflang="ar" href="${abs(pathAr)}">
<link rel="alternate" hreflang="en" href="${abs(pathEn)}">
<link rel="alternate" hreflang="x-default" href="${abs(pathAr)}">
<meta name="theme-color" content="#0B2545">
<meta property="og:type" content="website">
<meta property="og:site_name" content="${esc(t(biz.brand.name, l))}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:url" content="${canonical}">
<meta property="og:image" content="${img}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:locale" content="${l === "ar" ? "ar_EG" : "en_US"}">
<meta property="og:locale:alternate" content="${l === "ar" ? "en_US" : "ar_EG"}">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="/assets/img/favicon-48.png" type="image/png" sizes="48x48">
<link rel="apple-touch-icon" href="/assets/img/apple-touch-icon.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Alexandria:wght@400;500;600;700&family=IBM+Plex+Sans+Arabic:wght@400;500;600&family=Great+Vibes&display=swap">
<link rel="stylesheet" href="/assets/css/style.css?v=${VERSION}">
${jsonld.map((j) => `<script type="application/ld+json">${JSON.stringify(j)}</script>`).join("\n")}
<script>document.documentElement.classList.add('js')</script>
</head>`;
}

function sprite() {
  return `<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>${Object.entries(icons)
    .map(([k, v]) => `<symbol id="i-${k}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${v}</symbol>`)
    .join("")}</defs></svg>`;
}

/* ---------- header / footer / sheet ---------- */
function header(l, current, altHref) {
  const n = site.ui.nav;
  const items = [
    ["services", P.services(l)],
    ["technology", P.home(l) + "#technology"],
    ["doctor", P.home(l) + "#doctor"],
    ["articles", P.articles(l)],
    ["branches", P.branches(l)],
    ["faq", P.home(l) + "#faq"],
  ];
  return `${anyPending ? `<div class="preview-bar" role="note"><span class="dot"></span>${esc(t(site.ui.previewBanner, l))}</div>` : ""}
<a class="skip" href="#main">${t(site.ui.skip, l)}</a>
<header class="site-header" data-header>
  <div class="wrap header-in">
    <a class="brand" href="${P.home(l)}">${wordmark(l)}</a>
    <nav class="nav" id="site-nav" aria-label="${l === "ar" ? "القائمة الرئيسية" : "Main"}">
      <ul>${items.map(([k, h]) => `<li><a href="${h}"${current === k || (current === "article" && k === "articles") ? ' aria-current="page"' : ""}>${k === "articles" ? t(site.ui.articlesNav, l) : t(n[k], l)}</a></li>`).join("")}</ul>
      <div class="nav-mobile-cta">${btnSheet(l, t(site.ui.chooseBranch, l), null)}</div>
    </nav>
    <div class="header-actions">
      <a class="lang" href="${altHref}" hreflang="${l === "ar" ? "en" : "ar"}" lang="${l === "ar" ? "en" : "ar"}" data-lang-switch="${l === "ar" ? "en" : "ar"}" aria-label="${t(site.ui.langLabel, l)}">${icon("globe")}<span>${t(site.ui.langName, l)}</span></a>
      <a class="btn btn-primary btn-sm header-book" href="${P.branches(l)}" data-sheet data-service="">${t(site.ui.book, l)}</a>
      <button class="menu-btn" type="button" aria-expanded="false" aria-controls="site-nav" data-menu><span class="sr">${t(site.ui.menu, l)}</span>${icon("menu", "i-open")}${icon("close", "i-close")}</button>
    </div>
  </div>
</header>`;
}

function socialLinks(l) {
  const s = biz.social;
  const list = [
    ["facebook", s.facebook, "Facebook"],
    ["instagram", s.instagram, "Instagram"],
    ["tiktok", s.tiktok, "TikTok"],
    ["youtube", s.youtube, "YouTube"],
  ].filter((x) => x[1]);
  if (!list.length) return "";
  return `<div class="f-col"><h3>${t(site.ui.follow, l)}</h3><div class="social">${list
    .map(([k, h, n]) => `<a href="${h}" target="_blank" rel="noopener" aria-label="${n}">${icon(k)}</a>`)
    .join("")}</div></div>`;
}

function footer(l) {
  const n = site.ui.nav;
  return `<footer class="site-footer">
  <div class="wrap footer-grid">
    <div class="f-brand">
      <a class="brand" href="${P.home(l)}">${wordmark(l, true)}</a>
      <p>${esc(t(biz.brand.tagline, l))}.<br>${esc(t(site.ui.footerNote, l))}</p>
    </div>
    <div class="f-col"><h3>${t(n.services, l)}</h3><ul>
      ${featured.map((s) => `<li><a href="${P.service(l, s.slug)}">${esc(t(s.title, l))}</a></li>`).join("")}
      <li><a href="${P.services(l)}">${t(site.ui.allServices, l)}</a></li></ul></div>
    <div class="f-col"><h3>${t(site.ui.branches, l)}</h3><ul>
      ${biz.branches
        .map(
          (b) => `<li class="f-branch"><a href="${P.branches(l)}#${b.id}"><strong>${esc(t(b.name, l))}</strong></a>
        ${b.phone ? `<a href="tel:+${b.phone}">${icon("phone")} <span dir="ltr">${esc(b.phoneDisplay || "+" + b.phone)}</span></a>` : ""}
        ${b.whatsapp ? `<a href="https://wa.me/${b.whatsapp}" target="_blank" rel="noopener">${icon("whatsapp")} <span dir="ltr">${esc(b.whatsappDisplay || "+" + b.whatsapp)}</span></a>` : ""}</li>`
        )
        .join("")}</ul></div>
    <div class="f-col"><h3>${t(site.ui.contact, l)}</h3><ul>
      <li><a href="${P.branches(l)}">${t(n.branches, l)}</a></li>
      <li><a href="${P.home(l)}#faq">${t(n.faq, l)}</a></li>
      <li><a href="${P.articles(l)}">${t(site.ui.articlesNav, l)}</a></li>
      <li><a href="${P.home(l)}#doctor">${t(n.doctor, l)}</a></li></ul></div>
    ${socialLinks(l)}
  </div>
  <div class="wrap footer-bottom"><span>© ${new Date().getFullYear()} ${esc(t(biz.brand.name, l))}. ${t(site.ui.rights, l)}.</span><span>${esc(t(biz.brand.city, l))}</span></div>
</footer>`;
}

function sheet(l) {
  return `<dialog class="sheet" id="contact-sheet" aria-labelledby="sheet-title">
  <div class="sheet-in">
    <div class="sheet-head">
      <div><h2 id="sheet-title">${t(site.ui.sheetTitle, l)}</h2><p class="sheet-sub" data-sheet-sub>${t(site.ui.sheetSub, l)}</p></div>
      <button class="icon-btn" type="button" data-sheet-close aria-label="${t(site.ui.close, l)}">${icon("close")}</button>
    </div>
    <ul class="sheet-list">
      ${biz.branches
        .map(
          (b) => `<li class="sheet-branch${b.priority ? " is-priority" : ""}">
        <div class="sb-name"><strong>${esc(t(b.name, l))}</strong>${b.priority ? `<span class="badge">${t(site.ui.mainBranch, l)}</span>` : ""}
        ${t(b.address, l) ? `<span class="sb-addr">${esc(t(b.address, l))}</span>` : ""}</div>
        <div class="sb-actions">${btnWA(l, b, null)}${btnCall(l, b)}${btnMap(l, b)}</div></li>`
        )
        .join("")}
    </ul>
  </div>
</dialog>
<div class="toast" role="status" aria-live="polite" data-toast></div>`;
}

function mobileBar(l, s) {
  return `<div class="mbar" data-mbar>
  <a class="mbar-btn mbar-wa" href="${P.branches(l)}" data-sheet data-service="${s ? s.slug : ""}">${icon("whatsapp")}<span>${t(site.ui.whatsapp, l)}</span></a>
  <a class="mbar-btn" href="${P.branches(l)}" data-sheet data-service="${s ? s.slug : ""}">${icon("phone")}<span>${t(site.ui.call, l)}</span></a>
  <a class="mbar-btn" href="${P.branches(l)}">${icon("pin")}<span>${t(site.ui.branches, l)}</span></a>
</div>`;
}

function clientData(l) {
  const data = {
    lang: l,
    template: t(site.whatsappTemplate, l),
    greetings: { morning: t(site.greetings.morning, l), evening: t(site.greetings.evening, l) },
    general: t(site.ui.generalInquiry, l),
    pendingToast: t(site.ui.pendingToast, l),
    sheetSub: t(site.ui.sheetSub, l),
    services: Object.fromEntries(services.map((s) => [s.slug, svcName(l, s)])),
    branches: Object.fromEntries(biz.branches.map((b) => [b.id, { name: t(b.name, l), wa: b.whatsapp }])),
  };
  return `<script>window.TS=${JSON.stringify(data)}</script>`;
}

function layout(l, opts, body, s) {
  return `${head(l, opts)}
<body class="page-${opts.page}">
${sprite()}
${header(l, opts.page, l === "ar" ? opts.pathEn : opts.pathAr)}
<main id="main">
${body}
</main>
${footer(l)}
${mobileBar(l, s)}
${sheet(l)}
${clientData(l)}
<script src="/assets/js/main.js?v=${VERSION}" defer></script>
</body>
</html>`;
}

/* ---------- shared sections ---------- */
function sectionHead(kicker, title, lead, cls = "") {
  return `<div class="s-head ${cls}">${kicker ? `<p class="kicker">${esc(kicker)}</p>` : ""}<h2>${nl2br(title)}</h2>${lead ? `<p class="lead">${esc(lead)}</p>` : ""}</div>`;
}

function branchCard(l, b, s, headingTag = "h3") {
  const row = (ic, label, val, ltr) =>
    `<div class="b-row">${icon(ic)}<div><span class="b-label">${label}</span>${
      val ? `<span class="b-val"${ltr ? ' dir="ltr"' : ""}>${esc(val)}</span>` : `<span class="b-val muted">${t(site.ui.pending, l)}</span>`
    }</div></div>`;
  const map =
    b.mapEmbedUrl
      ? `<div class="b-map"><iframe src="${b.mapEmbedUrl}" title="${esc(t(b.name, l))}" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe></div>`
      : "";
  return `<article class="branch${b.priority ? " branch--main" : ""}" id="${b.id}">
    ${b.photo ? photo(b.photo, t(b.name, l), "b-photo") : ""}
    <div class="b-top"><${headingTag} class="b-name">${esc(t(b.name, l))}</${headingTag}>${b.priority ? `<span class="badge">${t(site.ui.mainBranch, l)}</span>` : ""}</div>
    <p class="b-area">${esc(t(b.area, l))} · ${esc(t(biz.brand.city, l))}</p>
    <div class="b-rows">
      ${row("pin", t(site.ui.address, l), t(b.address, l))}
      ${row("clock", t(site.ui.hours, l), t(b.hours, l))}
      ${row("phone", t(site.ui.phone, l), [b.phoneDisplay || (b.phone ? "+" + b.phone : ""), b.phone2Display].filter(Boolean).join("  ·  "), true)}
      ${row("whatsapp", t(site.ui.whatsappNumber, l), b.whatsappDisplay || (b.whatsapp ? "+" + b.whatsapp : ""), true)}
    </div>
    ${t(b.bookingNote, l) ? `<p class="b-note">${icon("clock")}<span>${esc(t(b.bookingNote, l))}</span></p>` : ""}
    ${map}
    <div class="b-actions">${btnWA(l, b, s)}${btnCall(l, b)}${btnMap(l, b)}</div>
  </article>`;
}

function branchesBlock(l, s) {
  return `<div class="branches-grid">${biz.branches.map((b) => branchCard(l, b, s)).join("")}</div>`;
}

function faqList(l, list, idp = "q") {
  return `<div class="faq">${list
    .map(
      (f, i) => `<details class="faq-item"${i === 0 ? " open" : ""}><summary><span>${esc(t(f.q, l))}</span><span class="faq-ic">${icon("plus")}</span></summary><div class="faq-a"><p>${esc(t(f.a, l))}</p></div></details>`
    )
    .join("")}</div>`;
}

function techCard(l, x, i) {
  return `<article class="tech-card reveal" style="--d:${i * 70}ms">
    ${photo(biz.photos.equipment[x.id], t(x.title, l), "tech-photo", x.icon)}
    <div class="tech-body"><p class="tech-sub" dir="ltr">${esc(t(x.sub, "en") === t(x.title, "en") ? "" : l === "ar" ? t(x.sub, "ar") : t(x.sub, "en"))}</p><h3>${esc(t(x.title, l))}</h3><p>${esc(t(x.body, l))}</p></div>
  </article>`;
}

function ctaBand(l, s) {
  const H = site.home;
  const title = s ? t(site.ui.serviceCtaTitle, l).replace("{service}", t(s.title, l)) : t(H.ctaTitle, l);
  const body = s ? t(site.ui.serviceCtaSub, l) : t(H.ctaBody, l);
  return `<section class="cta-band"><div class="wrap cta-in reveal">
    <div><h2>${esc(title)}</h2><p>${esc(body)}</p></div>
    <div class="cta-actions">${btnSheet(l, t(site.ui.chooseBranch, l), s, "btn-light")}<a class="btn btn-outline-light" href="${P.branches(l)}">${icon("pin")}<span>${t(site.ui.nav.branches, l)}</span></a></div>
  </div></section>`;
}

/* ---------- structured data ---------- */
function orgLD(l) {
  const dept = biz.branches.map((b) => {
    const o = {
      "@type": "Dentist",
      "@id": abs(`/#${b.id}`),
      name: `${t(biz.brand.name, l)} – ${t(b.name, l)}`,
      url: abs(P.branches(l) + "#" + b.id),
      address: {
        "@type": "PostalAddress",
        ...(t(b.address, l) ? { streetAddress: t(b.address, l) } : {}),
        addressLocality: l === "ar" ? `${t(b.area, l)}، الإسكندرية` : `${t(b.area, l)}, Alexandria`,
        addressRegion: l === "ar" ? "الإسكندرية" : "Alexandria",
        addressCountry: "EG",
      },
    };
    if (b.phone) o.telephone = "+" + b.phone;
    if (b.mapsUrl) o.hasMap = b.mapsUrl;
    if (b.open && b.open.opens) o.openingHoursSpecification = [{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], opens: b.open.opens, closes: b.open.closes }];
    if (b.geo && b.geo.lat) o.geo = { "@type": "GeoCoordinates", latitude: b.geo.lat, longitude: b.geo.lng };
    return o;
  });
  const sameAs = Object.values(biz.social).filter(Boolean);
  return {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "@id": abs("/#org"),
    name: t(biz.brand.name, l),
    alternateName: t(biz.brand.name, l === "ar" ? "en" : "ar"),
    slogan: t(biz.brand.tagline, l),
    url: abs(P.home(l)),
    image: abs("/" + biz.brand.shareImage),
    areaServed: l === "ar" ? "الإسكندرية" : "Alexandria",
    address: { "@type": "PostalAddress", addressLocality: l === "ar" ? "الإسكندرية" : "Alexandria", addressCountry: "EG" },
    department: dept,
    ...(sameAs.length ? { sameAs } : {}),
    founder: {
      "@type": "Person",
      "@id": abs("/#beshay-mina"),
      name: t(biz.team[0].name, l),
      alternateName: t(biz.team[0].name, l === "ar" ? "en" : "ar"),
      jobTitle: t(biz.team[0].role, l),
      image: abs("/" + (biz.team[0].heroPhoto || biz.team[0].photo)),
      url: abs(P.home(l) + "#doctor"),
      knowsAbout: biz.team[0].interests[l],
      memberOf: biz.team[0].memberships.map((m) => ({ "@type": "Organization", name: t(m, "en").replace(/^Member of (the )?/, ""), alternateName: m.abbr })),
    },
  };
}
const crumbLD = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map(([name, url], i) => ({ "@type": "ListItem", position: i + 1, name, item: abs(url) })),
});
const faqLD = (l, list) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: list.map((f) => ({ "@type": "Question", name: t(f.q, l), acceptedAnswer: { "@type": "Answer", text: t(f.a, l) } })),
});

function fmtDate(l, d) {
  try {
    return new Intl.DateTimeFormat(l === "ar" ? "ar-EG" : "en-GB", { day: "numeric", month: "long", year: "numeric" }).format(new Date(d + "T12:00:00Z"));
  } catch (e) { return d; }
}
function articleCard(l, a, i = 0) {
  const svc = services.find((x) => x.slug === a.service);
  return `<article class="art-card reveal" style="--d:${i * 70}ms">
    <a class="art-link" href="${P.article(l, a.slug)}">
      <span class="art-meta">${svc ? `<span class="badge">${esc(t(svc.title, l))}</span>` : ""}<time datetime="${a.date}">${fmtDate(l, a.date)}</time></span>
      <h3>${esc(t(a.title, l))}</h3>
      <p>${esc(t(a.excerpt, l))}</p>
      <span class="feat-more">${t(site.ui.readMore, l)}${icon("arrow", "flip")}</span>
    </a>
  </article>`;
}
function implantSystemsSection(l) {
  const list = biz.implantSystems || [];
  if (!list.length) return "";
  const U = site.ui;
  return `<section class="systems reveal" id="implant-systems">
    <p class="kicker">${esc(t(U.systemsKicker, l))}</p>
    <h2>${esc(t(U.systemsTitle, l))}</h2>
    <p>${esc(t(U.systemsLead, l))}</p>
    <ul class="sys-list">${list
      .map((x) => `<li><strong dir="ltr">${esc(x.name)}</strong>${t(x.origin, l) ? `<span>${esc(t(x.origin, l))}</span>` : ""}</li>`)
      .join("")}</ul>
    <div class="sys-choose"><h3>${esc(t(U.systemsChoose, l))}</h3><ul class="ticks">${U.systemsPoints[l]
      .map((r) => `<li>${icon("check")}<span>${esc(r)}</span></li>`)
      .join("")}</ul></div>
    <p class="sys-note">${icon("doc")}<span>${esc(t(U.systemsNote, l))}</span></p>
  </section>`;
}

/* =====================================================================
   PAGES
   ===================================================================== */
const reviewTotal = () => { const bs = (biz.googleReviews || {}).branchSummary || {}; return String(Object.values(bs).reduce((n, x) => n + (+x.count || 0), 0) || ""); };
function reviewCard(l, r) {
  const br = biz.branches.find((b) => b.id === r.branch);
  const sv = services.find((x) => x.slug === ((r.services || [])[0] || r.service));
  return `<figure class="rv"><div class="rv-top"><span class="stars" aria-label="${r.stars || 5}/5">${"★".repeat(r.stars || 5)}</span><span class="rv-g">${icon("check")}${t(site.home.reviewsBadge, l)}</span></div>
    <blockquote lang="${r.lang || "ar"}" dir="${(r.lang || "ar") === "ar" ? "rtl" : "ltr"}">${esc(r.text)}</blockquote>
    <figcaption><span class="rv-av" aria-hidden="true">${esc(String(r.name || "?").trim().charAt(0))}</span><span><strong dir="auto">${esc(r.name)}</strong><small>${[sv ? t(sv.title, l) : "", br ? t(br.name, l) : "", r.date && l === "ar" ? r.date : ""].filter(Boolean).map(esc).join(" · ")}</small></span></figcaption></figure>`;
}
function serviceReviews(l, s) {
  const GR = biz.googleReviews || { items: [] };
  if (!GR.items || !GR.items.length) return "";
  const own = GR.items.filter((r) => (r.services || []).includes(s.slug));
  const fill = GR.items.filter((r) => !own.includes(r)).slice(0, Math.max(0, 4 - own.length));
  const bs = GR.branchSummary || {};
  const H = site.home;
  return `<section class="svc-reviews reveal" id="reviews"><h2>${icon("star")}${esc(t(own.length ? H.svcReviewsTitle : H.reviewsKicker, l))}</h2>
    <div class="svc-rv-sum">${biz.branches.filter((b) => bs[b.id]).map((b) => `<a href="${GR.profiles[b.id]}" target="_blank" rel="noopener"><strong>${esc(bs[b.id].rating)}</strong><span class="stars">★★★★★</span><small>${esc(t(b.name, l))} · ${esc(t(H.reviewsBased, l).replace("{count}", bs[b.id].count))}</small></a>`).join("")}</div>
    <div class="svc-rv-grid">${own.concat(fill).map((r) => reviewCard(l, r)).join("")}</div>
  </section>`;
}
function homePage(l) {
  const H = site.home;
  const doc = biz.team[0];
  const heroVisual = biz.photos.heroClinic
    ? `<figure class="photo hero-photo"><img src="/${biz.photos.heroClinic}" alt="${esc(t(biz.photos.heroAlt, l))}" width="825" height="553" fetchpriority="high"></figure>`
    : `<div class="hero-art" aria-hidden="true"><span class="hero-glyph">${l === "ar" ? "شاين" : "Shine"}</span>${icon("sparkle", "hero-spark")}<span class="hero-ring"></span></div>`;

  const svcOf = (slug) => services.find((x) => x.slug === slug);
  const carousel = (cards, cls) => `<div class="carousel ${cls}" data-carousel><div class="car-track" tabindex="0">${cards}</div>
      <div class="car-nav"><button class="icon-btn" type="button" data-car-prev aria-label="${t(H.prev, l)}">${icon("arrow", "flip car-prev")}</button><button class="icon-btn" type="button" data-car-next aria-label="${t(H.next, l)}">${icon("arrow", "flip")}</button></div></div>`;
  const testimonials = biz.testimonials.length
    ? `<section class="section stories" id="stories"><div class="wrap">${sectionHead(t(H.storiesKicker, l), t(H.storiesTitle, l), t(H.storiesNote, l))}
      ${carousel(
        biz.testimonials
          .map((v) => {
            const sv = svcOf(v.service);
            const media = v.youtubeId
              ? `<iframe src="https://www.youtube-nocookie.com/embed/${v.youtubeId}" title="${esc(t(v.title, l))}" loading="lazy" allowfullscreen></iframe>`
              : `<video controls preload="none" playsinline${v.poster ? ` poster="/${v.poster}"` : ""}><source src="/${v.video}" type="video/mp4"></video>`;
            return `<article class="story">
          <div class="story-media">${media}</div>
          <div class="story-body">${sv ? `<span class="badge">${esc(t(sv.title, l))}</span>` : ""}
            <h3>${esc(t(v.title, l))}</h3>
            ${v.quote ? `<blockquote>«${esc(t(v.quote, l))}»</blockquote>` : ""}
            ${v.name ? `<p class="story-name">${esc(t(v.name, l))}</p>` : ""}
            <div class="story-actions">${btnSheet(l, t(H.bookLikeThis, l), sv, "btn-primary btn-sm")}${v.instagram ? `<a class="btn btn-line btn-sm" href="${v.instagram}" target="_blank" rel="noopener">${icon("instagram")}<span>${t(H.watchInstagram, l)}</span></a>` : ""}</div>
          </div></article>`;
          })
          .join(""),
        "car--stories"
      )}
    </div></section>`
    : "";
  const GR = biz.googleReviews || { items: [], profiles: {}, summary: {} };
  const stars = (n) => `<span class="stars" aria-label="${n}/5">${"★".repeat(n)}<span class="stars-off">${"★".repeat(5 - n)}</span></span>`;
  const gLink = biz.branches.map((b) => GR.profiles && GR.profiles[b.id]).find(Boolean);
  const reviews = GR.items && GR.items.length
    ? `<section class="section reviews" id="reviews"><div class="wrap rv-layout">
      <aside class="rv-panel reveal">
        <p class="kicker">${esc(t(H.reviewsKicker, l))}</p>
        <h2>${esc(t(H.reviewsTitle, l).replace("{total}", reviewTotal()))}</h2>
        ${GR.branchSummary ? `<div class="rv-branches">${biz.branches.filter((b) => GR.branchSummary[b.id]).map((b) => `<a class="rv-score rv-score--br" href="${GR.profiles[b.id] || "#"}" target="_blank" rel="noopener"><strong>${esc(GR.branchSummary[b.id].rating)}</strong><div>${stars(Math.round(+GR.branchSummary[b.id].rating))}<span>${esc(t(b.name, l))} · ${esc(t(H.reviewsBased, l).replace("{count}", GR.branchSummary[b.id].count))}</span></div></a>`).join("")}</div>` : ""}
        ${GR.summary && GR.summary.rating ? `<div class="rv-score"><strong>${esc(GR.summary.rating)}</strong><div>${stars(Math.round(+GR.summary.rating))}<span>${esc(t(H.reviewsBased, l).replace("{count}", GR.summary.count))}</span></div></div>` : ""}
        <p class="rv-note">${esc(t(H.reviewsNote, l))}</p>
        <div class="rv-links">${biz.branches
          .filter((b) => GR.profiles && GR.profiles[b.id])
          .map((b) => `<a class="btn btn-light btn-sm" href="${GR.profiles[b.id]}" target="_blank" rel="noopener">${esc(t(H.reviewsAll, l).replace("{branch}", t(b.name, l)))}</a>`)
          .join("")}${GR.writeReview ? `<a class="btn btn-outline-light btn-sm" href="${GR.writeReview}" target="_blank" rel="noopener">${t(H.reviewsWrite, l)}</a>` : ""}</div>
      </aside>
      ${carousel(
        GR.items
          .map((r) => {
            const br = biz.branches.find((b) => b.id === r.branch);
            const sv = svcOf((r.services || [])[0] || r.service);
            return `<figure class="rv"><div class="rv-top">${stars(r.stars || 5)}<span class="rv-g">${icon("check")}${t(H.reviewsBadge, l)}</span></div>
            <blockquote lang="${r.lang || "ar"}" dir="${(r.lang || "ar") === "ar" ? "rtl" : "ltr"}">${esc(r.text)}</blockquote>
            <figcaption><span class="rv-av" aria-hidden="true">${esc(String(r.name || "?").trim().charAt(0))}</span><span><strong dir="auto">${esc(r.name)}</strong><small>${[sv ? t(sv.title, l) : "", br ? t(br.name, l) : ""].filter(Boolean).map(esc).join(" · ")}</small></span></figcaption></figure>`;
          })
          .join(""),
        "car--reviews"
      )}
    </div></section>`
    : "";
  const cases = biz.cases.length
    ? `<section class="section cases" id="cases"><div class="wrap">
      <div class="s-head s-head--row">${sectionHead(t(H.casesKicker, l), t(H.casesTitle, l), t(H.casesNote, l))}${btnSheet(l, t(H.casesAll, l), null, "btn-line")}</div>
      ${carousel(
        biz.cases
          .map((c) => {
            const sv = svcOf(c.service);
            const img = c.image
              ? `<img src="/${c.image}" alt="${esc(t(c.title, l))}" loading="lazy">`
              : `<div class="case-pair"><div><img src="/${c.before}" alt="" loading="lazy"><span>${l === "ar" ? "قبل" : "Before"}</span></div><div><img src="/${c.after}" alt="" loading="lazy"><span>${l === "ar" ? "بعد" : "After"}</span></div></div>`;
            return `<figure class="case-card"><div class="case-img">${img}</div><figcaption>${sv ? `<a class="badge" href="${P.service(l, sv.slug)}">${esc(t(sv.title, l))}</a>` : ""}<h3>${esc(t(c.title || c.caption, l))}</h3>${c.story ? `<p>${esc(t(c.story, l))}</p>` : ""}</figcaption></figure>`;
          })
          .join(""),
        "car--cases"
      )}
    </div></section>`
    : "";
  const midCta = biz.cases.length || biz.testimonials.length || (GR.items && GR.items.length)
    ? `<section class="mid-cta"><div class="wrap mid-cta-in reveal"><div><h2>${esc(t(H.midCtaTitle, l))}</h2><p>${esc(t(H.midCtaBody, l))}</p></div>${btnSheet(l, t(H.diagnosisCta, l), null, "btn-primary btn-lg")}</div></section>`
    : "";
  const offers = biz.offers.length
    ? `<section class="section offers"><div class="wrap">${sectionHead(t(H.offersKicker, l), "", "")}<div class="offer-grid">${biz.offers
        .map((o) => `<article class="offer"><h3>${esc(t(o.title, l))}</h3><p>${esc(t(o.details, l))}</p>${o.validUntil ? `<p class="muted">${l === "ar" ? "ساري حتى" : "Valid until"} ${esc(o.validUntil)}</p>` : ""}</article>`)
        .join("")}</div></div></section>`
    : "";

  const body = `
<section class="hero hero--dr">
  <div class="hero-glow" aria-hidden="true"></div>
  <div class="wrap hero-grid">
    <div class="hero-copy">
      <p class="eyebrow reveal">${icon("pin")}<span>${esc(t(H.eyebrow, l))}</span></p>
      <p class="hero-pre reveal" style="--d:40ms">${esc(t(biz.brand.name, l))}</p>
      <h1 class="hero-title reveal" style="--d:60ms">${esc(t(H.h1, l)).replace(/\n/g, "<br>")}</h1>
      <p class="hero-lead reveal" style="--d:100ms">${esc(t(H.lead, l))}</p>
      <a class="hero-founder reveal" style="--d:140ms" href="#doctor"><span class="hf-label">${esc(t(H.heroFounder, l))}</span><strong>${esc(t(doc.name, l))}</strong><span class="hf-members" dir="ltr">${doc.memberships.map((m) => esc(m.abbr)).join(" · ")}</span></a>
      <div class="hero-actions reveal" style="--d:200ms">
        <a class="btn btn-light btn-lg" href="#book">${icon("whatsapp")}<span>${esc(t(H.book.title, l))}</span></a>
        <a class="btn btn-outline-light btn-lg" href="${P.services(l)}">${t(site.ui.exploreServices, l)}${icon("arrow", "flip")}</a>
      </div>
    </div>
    <div class="hero-visual hero-visual--dr reveal" style="--d:120ms">
      <figure class="hero-portrait"><img src="/${doc.heroPhoto || doc.photo}" alt="${esc(t(doc.name, l))}" width="900" height="1165" fetchpriority="high"></figure>
      <div class="hero-plate">
        <p class="hp-name">${esc(t(doc.name, l))}</p>
        <p class="hp-role">${esc(t(doc.role, l))}</p>
        <ul class="hp-members">${doc.memberships.map((m) => `<li title="${esc(t(m, l))}"><b>${esc(m.abbr)}</b><span>${l === "ar" ? "عضو" : "Member"}</span></li>`).join("")}</ul>
      </div>
    </div>
  </div>
  <div class="wrap">
    ${(biz.trustStats || []).length ? `<ul class="stats reveal">${biz.trustStats.map((x) => `<li><strong dir="ltr">${esc(x.value)}</strong><span>${esc(t(x.label, l))}</span></li>`).join("")}</ul>` : ""}
    <ul class="trust trust--dark reveal" style="--d:260ms">${H.trustStrip.map((x) => `<li>${icon(x.icon)}<span>${esc(t(x, l))}</span></li>`).join("")}</ul>
  </div>
</section>

<section class="book-sec" id="book"><div class="wrap">
  <form class="book-card reveal" data-book novalidate>
    <div class="book-head"><p class="kicker">${esc(t(H.book.kicker, l))}</p><h2>${esc(t(H.book.title, l))}</h2><p>${esc(t(H.book.lead, l))}</p></div>
    <fieldset class="book-field"><legend>${esc(t(H.book.service, l))}</legend><div class="chips-pick">${H.book.options.map((o, i) => `<label><input type="radio" name="service" value="${esc(t(o, l))}"${i === 0 ? " checked" : ""}><span>${esc(t(o, l))}</span></label>`).join("")}</div></fieldset>
    <fieldset class="book-field"><legend>${esc(t(H.book.branch, l))}</legend><div class="chips-pick">${biz.branches.filter((x) => x.whatsapp).map((x, i) => `<label><input type="radio" name="branch" value="${esc(x.whatsapp)}" data-name="${esc(t(x.name, l))}"${i === 0 ? " checked" : ""}><span>${esc(t(x.name, l))}</span></label>`).join("")}</div></fieldset>
    <div class="book-inputs">
      <label class="book-in"><span>${esc(t(H.book.name, l))}</span><input type="text" name="name" autocomplete="name" required maxlength="60"><em class="book-err">${esc(t(H.book.errName, l))}</em></label>
      <label class="book-in"><span>${esc(t(H.book.phone, l))}</span><input type="tel" name="phone" autocomplete="tel" inputmode="tel" dir="ltr" placeholder="01x xxxx xxxx" required maxlength="20"><em class="book-err">${esc(t(H.book.errPhone, l))}</em></label>
    </div>
    <button class="btn btn-primary btn-lg book-submit" type="submit">${icon("whatsapp")}<span>${esc(t(H.book.submit, l))}</span></button>
    <p class="book-privacy">${icon("shield")}<span>${esc(t(H.book.privacy, l))}</span></p>
    <script type="application/json" data-book-msg>${JSON.stringify(t(H.book.msg, l)).replace(/</g, "\\u003c")}</script>
  </form>
</div></section>

<section class="section services-sec" id="services">
  <div class="wrap">
    ${sectionHead(t(H.servicesKicker, l), t(H.servicesTitle, l), t(H.servicesLead, l), "s-head--split")}
    <div class="svc-tabs reveal" data-tabs>
      <div class="tabs-list" role="tablist" aria-label="${esc(t(H.servicesKicker, l))}">
        ${featured
          .map(
            (s, i) => `<button class="tab" type="button" role="tab" id="tab-${s.slug}" aria-controls="panel-${s.slug}" aria-selected="${i === 0}"${i ? ' tabindex="-1"' : ""}>
          <span class="tab-n">${i + 1}</span><span class="tab-t"><strong>${esc(t(s.title, l))}</strong><small>${esc(t(s.kicker, l))}</small></span>${icon(s.icon, "tab-ic")}</button>`
          )
          .join("")}
      </div>
      ${featured
        .map(
          (s, i) => `<div class="tab-panel" role="tabpanel" id="panel-${s.slug}" aria-labelledby="tab-${s.slug}" tabindex="0">
        <div class="tp-main">
          <p class="tp-kicker"><span class="tp-n">${i + 1}</span>${esc(t(s.kicker, l))}</p>
          <h3>${esc(t(s.title, l))}</h3>
          <p class="tp-lead">${esc(t(s.intro, l)[0])}</p>
          <div class="tp-actions"><a class="btn btn-primary" href="${P.service(l, s.slug)}">${t(site.ui.learnMore, l)}${icon("arrow", "flip")}</a>${btnSheet(l, t(site.ui.chooseBranch, l), s, "btn-line")}</div>
        </div>
        <div class="tp-side">
          ${s.slug === "dental-implants" && biz.photos.heroClinic ? `<figure class="tp-img"><img src="/${biz.photos.heroClinic}" alt="${esc(t(biz.photos.heroAlt, l))}" loading="lazy" width="825" height="553"></figure>` : ""}
          <p class="tp-label">${t(site.ui.whyTitle, l)}</p>
          <ul class="ticks">${s.reasons[l].slice(0, 4).map((r) => `<li>${icon("check")}<span>${esc(r)}</span></li>`).join("")}</ul>
        </div>
      </div>`
        )
        .join("")}
    </div>
    <h3 class="sub-title">${esc(t(H.moreServicesTitle, l))}</h3>
    <ul class="mini-grid">
      ${others
        .map(
          (s, i) => `<li class="reveal" style="--d:${(i % 4) * 50}ms"><a class="mini" href="${P.service(l, s.slug)}"><span class="mini-ic">${icon(s.icon)}</span><span class="mini-t"><strong>${esc(t(s.title, l))}</strong><span>${esc(t(s.short, l))}</span></span>${icon("arrow", "flip mini-arrow")}</a></li>`
        )
        .join("")}
    </ul>
  </div>
</section>

<section class="section doctor" id="doctor">
  <div class="wrap doctor-grid">
    <div class="doc-portrait reveal">
      ${doc.photo ? photo(doc.photo, t(doc.name, l), "arch") : `<div class="arch arch--empty" aria-hidden="true"><span class="mono">${l === "ar" ? "ب.م" : "BM"}</span></div>`}
    </div>
    <div class="doc-copy reveal" style="--d:80ms">
      <p class="kicker">${esc(t(H.doctorKicker, l))}</p>
      <h2>${esc(t(doc.name, l))}</h2>
      <p class="doc-role">${esc(t(doc.role, l))}</p>
      <blockquote class="doc-vision"><p class="hd-kicker">${esc(t(H.visionLabel, l))}</p><p>${esc(t(H.drVision, l))}</p><p class="hd-sign" dir="ltr" aria-hidden="true">Dr. Beshay Mina</p></blockquote>
      ${doc.qualifications.length ? `<ul class="quals">${doc.qualifications.map((q) => `<li>${esc(t(q, l))}</li>`).join("")}</ul>` : ""}
      <p class="mini-label">${t(H.interestsLabel, l)}</p>
      <ul class="chips">${doc.interests[l].map((x) => `<li>${esc(x)}</li>`).join("")}</ul>
      <p class="mini-label">${t(H.membershipsLabel, l)}</p>
      <ul class="members">${doc.memberships
        .map((m) => `<li><span class="m-abbr" dir="ltr">${m.abbr}</span><span>${esc(t(m, l))}</span></li>`)
        .join("")}</ul>
    </div>
  </div>
  ${biz.team.length > 1
    ? `<div class="wrap team-grid">${biz.team
        .slice(1)
        .map((p) => `<article class="team-card">${photo(p.photo, t(p.name, l), "team-photo", "sparkle")}<h3>${esc(t(p.name, l))}</h3><p>${esc(t(p.role, l))}</p></article>`)
        .join("")}</div>`
    : ""}
</section>

<section class="section journey" id="diagnosis">
  <div class="wrap">
    <div class="dx-grid">
      <div class="dx-copy reveal">
        <p class="kicker">${esc(t(H.journeyKicker, l))}</p>
        <h2>${esc(t(H.journeyTitle, l))}</h2>
        <p class="lead">${esc(t(H.journeyLead, l))}</p>
        <div class="dx-cta">${btnSheet(l, t(H.diagnosisCta, l), svcOf("dental-examination"), "btn-primary btn-lg")}<p>${icon("shield")}<span>${esc(t(H.diagnosisNote, l))}</span></p></div>
      </div>
      <ul class="dx-why">${H.whyDiagnosis
        .map((w, i) => `<li class="reveal" style="--d:${i * 70}ms"><span class="dx-ic">${icon(["exam", "list", "ear", "doc"][i])}</span><div><h3>${esc(t(w.t, l))}</h3><p>${esc(t(w.d, l))}</p></div></li>`)
        .join("")}</ul>
    </div>
    <h3 class="sub-title">${esc(t(H.stepsTitle, l))}</h3>
    <ol class="steps">${H.journey
      .map((j, i) => `<li class="step reveal" style="--d:${i * 80}ms"><span class="step-n">${i + 1}</span><h3>${esc(t(j.t, l))}</h3><p>${esc(t(j.d, l))}</p></li>`)
      .join("")}</ol>
  </div>
</section>

${reviews}
${cases}
${testimonials}
${midCta}


<section class="section tech" id="technology">
  <div class="wrap">
    ${sectionHead(t(H.techKicker, l), t(H.techTitle, l), t(H.techLead, l))}
    <div class="tech-grid">${tech.map((x, i) => techCard(l, x, i)).join("")}</div>
  </div>
</section>

<section class="section comfort">
  <div class="wrap comfort-grid">
    <div class="comfort-copy reveal">
      <p class="kicker">${esc(t(H.comfortKicker, l))}</p>
      <h2>${esc(t(H.comfortTitle, l))}</h2>
      <p>${esc(t(H.comfortBody, l))}</p>
    </div>
    <ul class="comfort-points">${H.comfortPoints
      .map((p, i) => `<li class="reveal" style="--d:${i * 80}ms">${icon(["ear", "shield", "pen"][i])}<span>${esc(t(p, l))}</span></li>`)
      .join("")}</ul>
  </div>
</section>

${offers}

<section class="section branches-sec" id="branches">
  <div class="wrap">
    ${sectionHead(t(H.branchesKicker, l), t(H.branchesTitle, l), "")}
    ${branchesBlock(l, null)}
  </div>
</section>

${articles.length ? `<section class="section articles-sec" id="articles">
  <div class="wrap">
    <div class="s-head s-head--row">${sectionHead(t(site.ui.articlesKicker, l), t(site.ui.articlesTitle, l), t(site.ui.articlesLead, l))}<a class="btn btn-line" href="${P.articles(l)}">${t(site.ui.allArticles, l)}${icon("arrow", "flip")}</a></div>
    <div class="art-grid">${articles.slice(0, 3).map((a, i) => articleCard(l, a, i)).join("")}</div>
  </div>
</section>` : ""}

<section class="section faq-sec" id="faq">
  <div class="wrap faq-grid">
    ${sectionHead(t(H.faqKicker, l), t(H.faqTitle, l), "")}
    ${faqList(l, site.faqs)}
  </div>
</section>

${ctaBand(l, null)}`;

  return layout(
    l,
    { page: "home", title: t(H.title, l), desc: t(H.meta, l), pathAr: P.home("ar"), pathEn: P.home("en"), jsonld: [orgLD(l), faqLD(l, site.faqs)] },
    body,
    null
  );
}

function pageHero(l, crumbs, h1, lead, extra = "") {
  return `<section class="page-hero"><div class="wrap">
    <nav class="crumbs" aria-label="breadcrumb"><ol>${crumbs
      .map(([n, h], i) => (i < crumbs.length - 1 ? `<li><a href="${h}">${esc(n)}</a></li>` : `<li aria-current="page">${esc(n)}</li>`))
      .join("")}</ol></nav>
    <h1>${esc(h1)}</h1>${lead ? `<p class="lead">${esc(lead)}</p>` : ""}${extra}
  </div></section>`;
}

function servicesPage(l) {
  const S = site.servicesPage;
  const crumbs = [[t(site.ui.breadcrumbHome, l), P.home(l)], [t(S.h1, l), P.services(l)]];
  const body = `${pageHero(l, crumbs, t(S.h1, l), t(S.lead, l))}
<section class="section"><div class="wrap">
  <div class="feat-grid">${featured
    .map(
      (s, i) => `<a class="feat reveal feat--${i + 1}" href="${P.service(l, s.slug)}"><span class="feat-num">${i + 1}</span><span class="feat-ic">${icon(s.icon)}</span><span class="feat-kicker">${esc(t(s.kicker, l))}</span><h2 class="h3">${esc(t(s.title, l))}</h2><p>${esc(t(s.short, l))}</p><span class="feat-more">${t(site.ui.learnMore, l)}${icon("arrow", "flip")}</span></a>`
    )
    .join("")}</div>
  <h2 class="sub-title">${esc(t(site.home.moreServicesTitle, l))}</h2>
  <ul class="mini-grid">${others
    .map(
      (s) => `<li class="reveal"><a class="mini" href="${P.service(l, s.slug)}"><span class="mini-ic">${icon(s.icon)}</span><span class="mini-t"><strong>${esc(t(s.title, l))}</strong><span>${esc(t(s.short, l))}</span></span>${icon("arrow", "flip mini-arrow")}</a></li>`
    )
    .join("")}</ul>
</div></section>
${ctaBand(l, null)}`;
  return layout(
    l,
    { page: "services", title: t(S.title, l), desc: t(S.meta, l), pathAr: P.services("ar"), pathEn: P.services("en"), jsonld: [crumbLD(crumbs)] },
    body,
    null
  );
}

function servicePage(l, s) {
  const crumbs = [
    [t(site.ui.breadcrumbHome, l), P.home(l)],
    [t(site.ui.nav.services, l), P.services(l)],
    [t(s.title, l), P.service(l, s.slug)],
  ];
  const techItems = s.tech.map((id) => tech.find((x) => x.id === id)).filter(Boolean);
  const related = (s.featured ? featured.filter((x) => x.slug !== s.slug) : [...featured.slice(0, 2), ...others.filter((x) => x.slug !== s.slug).slice(0, 1)]).slice(0, 3);
  const extra = `<div class="hero-actions">${btnSheet(l, t(site.ui.chooseBranch, l), s)}<a class="btn btn-line" href="#faq">${t(site.ui.faqTitle, l)}</a></div>`;
  const body = `${pageHero(l, crumbs, t(s.title, l), t(s.short, l), extra)}
<section class="section svc"><div class="wrap svc-grid">
  <article class="svc-main">
    <div class="svc-intro reveal">${t(s.intro, l).map((p) => `<p>${esc(p)}</p>`).join("")}</div>
    <div class="svc-two">
      <section class="svc-block reveal"><h2>${icon("list")}${t(site.ui.whyTitle, l)}</h2><ul class="ticks">${s.reasons[l].map((r) => `<li>${icon("check")}<span>${esc(r)}</span></li>`).join("")}</ul></section>
      <section class="svc-block reveal"><h2>${icon("doc")}${t(site.ui.assessTitle, l)}</h2><ol class="nums">${s.assessment[l].map((r) => `<li><span>${esc(r)}</span></li>`).join("")}</ol></section>
    </div>
    ${s.techniques ? `<section class="svc-tq reveal" id="techniques"><h2>${esc(t(s.techniques.title, l))}</h2>${s.techniques.lead ? `<p class="svc-tq-lead">${esc(t(s.techniques.lead, l))}</p>` : ""}<div class="tq-grid">${s.techniques.items.map((x, i) => `<article class="tq-card${s.techniques.steps ? " tq-step" : ""}"><span class="mini-ic">${icon(x.icon)}</span>${s.techniques.steps ? `<span class="tq-num">${i + 1}</span>` : ""}<h3>${esc(t(x.title, l))}</h3>${l === "ar" ? `<p class="tq-en" dir="ltr">${esc(x.name)}</p>` : ""}<p>${esc(t(x.body, l))}</p></article>`).join("")}</div></section>` : ""}
    ${(s.figures || []).length ? `<section class="svc-figs reveal"><div class="figs">${s.figures.map((f) => `<figure class="fig"><img src="/${esc(f.src)}" alt="${esc(t(f.alt, l))}" loading="lazy" decoding="async"><figcaption>${esc(t(f.caption, l))}<span class="fig-tag">${l === "ar" ? "صورة توضيحية، وليست حالة مريض" : "Illustration, not a patient case"}</span></figcaption></figure>`).join("")}</div></section>` : ""}
    ${s.compare ? `<section class="svc-cmp reveal"><h2>${esc(t(s.compare.title, l))}</h2><div class="cmp-wrap"><table class="cmp"><thead><tr>${s.compare.cols.map((c) => `<th scope="col">${esc(t(c, l))}</th>`).join("")}</tr></thead><tbody>${s.compare.rows.map((r) => `<tr>${r.map((c, i) => (i ? `<td>${esc(t(c, l))}</td>` : `<th scope="row">${esc(t(c, l))}</th>`)).join("")}</tr>`).join("")}</tbody></table></div>${s.compare.note ? `<p class="cmp-note">${esc(t(s.compare.note, l))}</p>` : ""}</section>` : ""}
    ${techItems.length ? `<section class="svc-tech reveal"><h2>${t(site.ui.techTitle, l)}</h2><div class="svc-tech-list">${techItems.map((x) => `<a class="svc-tech-item" href="${P.home(l)}#technology"><span class="mini-ic">${icon(x.icon)}</span><span><strong>${esc(t(x.title, l))}</strong><span>${esc(t(x.body, l))}</span></span></a>`).join("")}</div></section>` : ""}
    ${s.showImplantSystems ? implantSystemsSection(l) : ""}
    ${serviceReviews(l, s)}
    <section class="svc-faq" id="faq"><h2>${t(site.ui.faqTitle, l)}</h2>${faqList(l, s.faqs)}</section>
    ${articles.filter((a) => a.service === s.slug).length ? `<section class="svc-articles"><h2>${t(site.ui.articlesKicker, l)}</h2><div class="art-grid art-grid--2">${articles.filter((a) => a.service === s.slug).slice(0, 2).map((a, i) => articleCard(l, a, i)).join("")}</div></section>` : ""}
    <p class="disclaimer">${esc(t(site.ui.disclaimer, l))}</p>
  </article>
  <aside class="svc-aside" aria-label="${t(site.ui.branches, l)}">
    <div class="aside-card">
      <p class="kicker">${t(site.ui.contactVia, l)}</p>
      <h2 class="h4">${esc(t(site.ui.serviceCtaTitle, l).replace("{service}", t(s.title, l)))}</h2>
      ${biz.branches
        .map(
          (b) => `<div class="aside-branch${b.priority ? " is-priority" : ""}"><div class="ab-name"><strong>${esc(t(b.name, l))}</strong>${b.priority ? `<span class="badge">${t(site.ui.mainBranch, l)}</span>` : ""}</div><div class="ab-actions">${btnWA(l, b, s, "btn-sm")}${btnCall(l, b, "btn-sm")}</div></div>`
        )
        .join("")}
      <a class="aside-link" href="${P.branches(l)}">${icon("pin")}${t(site.ui.nav.branches, l)}</a>
    </div>
  </aside>
</div></section>
<section class="section related"><div class="wrap">
  <h2 class="sub-title">${t(site.ui.relatedTitle, l)}</h2>
  <ul class="mini-grid">${related
    .map((x) => `<li><a class="mini" href="${P.service(l, x.slug)}"><span class="mini-ic">${icon(x.icon)}</span><span class="mini-t"><strong>${esc(t(x.title, l))}</strong><span>${esc(t(x.short, l))}</span></span>${icon("arrow", "flip mini-arrow")}</a></li>`)
    .join("")}</ul>
</div></section>
${ctaBand(l, s)}`;
  const title = `${t(s.title, l)} ${l === "ar" ? "في الإسكندرية" : "in Alexandria"} | ${t(biz.brand.name, l)}`;
  return layout(
    l,
    { page: "service", title, desc: t(s.meta, l), pathAr: P.service("ar", s.slug), pathEn: P.service("en", s.slug), jsonld: [crumbLD(crumbs), faqLD(l, s.faqs)] },
    body,
    s
  );
}

function branchesPage(l) {
  const B = site.branchesPage;
  const crumbs = [[t(site.ui.breadcrumbHome, l), P.home(l)], [t(B.h1, l), P.branches(l)]];
  const body = `${pageHero(l, crumbs, t(B.h1, l), t(B.lead, l))}
<section class="section"><div class="wrap">
  <div class="branches-grid branches-grid--page">${biz.branches.map((b) => branchCard(l, b, null, "h2")).join("")}</div>
  <div class="how reveal"><h2>${t(B.howTitle, l)}</h2><ol class="how-steps">${B.how.map((x, i) => `<li><span class="step-n">${i + 1}</span><span>${esc(t(x, l))}</span></li>`).join("")}</ol></div>
</div></section>
<section class="section faq-sec"><div class="wrap faq-grid">
  ${sectionHead(t(site.home.faqKicker, l), t(site.home.faqTitle, l), "")}
  ${faqList(l, site.faqs.slice(0, 3).concat(site.faqs.slice(5)))}
</div></section>`;
  return layout(
    l,
    { page: "branches", title: t(B.title, l), desc: t(B.meta, l), pathAr: P.branches("ar"), pathEn: P.branches("en"), jsonld: [orgLD(l), crumbLD(crumbs)] },
    body,
    null
  );
}

function articlesPage(l) {
  const A = site.articlesPage;
  const crumbs = [[t(site.ui.breadcrumbHome, l), P.home(l)], [t(site.ui.articlesNav, l), P.articles(l)]];
  const body = `${pageHero(l, crumbs, t(A.h1, l), t(site.ui.articlesLead, l))}
<section class="section"><div class="wrap"><div class="art-grid">${articles.map((a, i) => articleCard(l, a, i % 3)).join("")}</div></div></section>
${ctaBand(l, null)}`;
  return layout(l, { page: "articles", title: t(A.title, l), desc: t(A.meta, l), pathAr: P.articles("ar"), pathEn: P.articles("en"), jsonld: [crumbLD(crumbs)] }, body, null);
}

function articlePage(l, a) {
  const svc = services.find((x) => x.slug === a.service);
  const crumbs = [[t(site.ui.breadcrumbHome, l), P.home(l)], [t(site.ui.articlesNav, l), P.articles(l)], [t(a.title, l), P.article(l, a.slug)]];
  const blocks = a.body[l]
    .map(([type, v]) => (type === "h2" ? `<h2>${esc(v)}</h2>` : type === "ul" ? `<ul class="ticks">${v.map((x) => `<li>${icon("check")}<span>${esc(x)}</span></li>`).join("")}</ul>` : `<p>${esc(v)}</p>`))
    .join("\n");
  const meta = `<p class="art-head-meta"><time datetime="${a.date}">${t(site.ui.publishedOn, l)} ${fmtDate(l, a.date)}</time>${a.reviewedBy ? ` · ${t(site.ui.reviewedBy, l)} ${esc(t(a.reviewedBy, l))}` : ""}</p>`;
  const others = articles.filter((x) => x.slug !== a.slug).slice(0, 2);
  const body = `${pageHero(l, crumbs, t(a.title, l), t(a.excerpt, l), meta)}
<section class="section svc"><div class="wrap svc-grid">
  <article class="prose">${blocks}
    <p class="disclaimer">${esc(t(site.ui.disclaimer, l))}</p>
  </article>
  <aside class="svc-aside">
    <div class="aside-card">
      ${svc ? `<p class="kicker">${t(site.ui.relatedService, l)}</p><h2 class="h4"><a href="${P.service(l, svc.slug)}">${esc(t(svc.title, l))}</a></h2>` : ""}
      ${biz.branches
        .map((b) => `<div class="aside-branch${b.priority ? " is-priority" : ""}"><div class="ab-name"><strong>${esc(t(b.name, l))}</strong>${b.priority ? `<span class="badge">${t(site.ui.mainBranch, l)}</span>` : ""}</div><div class="ab-actions">${btnWA(l, b, svc, "btn-sm")}${btnCall(l, b, "btn-sm")}</div></div>`)
        .join("")}
    </div>
  </aside>
</div></section>
${others.length ? `<section class="section related"><div class="wrap"><h2 class="sub-title">${t(site.ui.articlesKicker, l)}</h2><div class="art-grid art-grid--2">${others.map((x, i) => articleCard(l, x, i)).join("")}</div></div></section>` : ""}
${ctaBand(l, svc)}`;
  const ld = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: t(a.title, l),
    description: t(a.excerpt, l),
    inLanguage: l,
    datePublished: a.date,
    dateModified: a.updated || a.date,
    mainEntityOfPage: abs(P.article(l, a.slug)),
    image: abs("/" + biz.brand.shareImage),
    author: a.reviewedBy ? { "@type": "Person", name: t(a.reviewedBy, l) } : { "@type": "Organization", name: t(biz.brand.name, l) },
    publisher: { "@type": "Organization", name: t(biz.brand.name, l), logo: { "@type": "ImageObject", url: abs("/assets/img/apple-touch-icon.png") } },
  };
  return layout(l, { page: "article", title: `${t(a.title, l)} | ${t(biz.brand.name, l)}`, desc: t(a.excerpt, l), pathAr: P.article("ar", a.slug), pathEn: P.article("en", a.slug), jsonld: [crumbLD(crumbs), ld] }, body, svc);
}

function notFound() {
  const l = "ar";
  const body = `<section class="page-hero nf"><div class="wrap">
    <h1>${t(site.ui.notFoundTitle, "ar")}</h1><p class="lead">${t(site.ui.notFoundBody, "ar")}</p>
    <p class="lead" lang="en" dir="ltr">${t(site.ui.notFoundTitle, "en")} — ${t(site.ui.notFoundBody, "en")}</p>
    <div class="hero-actions"><a class="btn btn-primary" href="/">${t(site.ui.nav.home, "ar")}</a><a class="btn btn-line" href="/en/" lang="en">${t(site.ui.nav.home, "en")}</a></div>
  </div></section>`;
  return layout(l, { page: "notfound", title: `404 | ${t(biz.brand.name, l)}`, desc: t(site.home.meta, l), pathAr: "/", pathEn: "/en/" }, body, null).replace(
    "<head>",
    '<head>\n<meta name="robots" content="noindex">'
  );
}

/* =====================================================================
   WRITE
   ===================================================================== */
function write(p, html) {
  const file = path.join(OUT, p.endsWith("/") ? p + "index.html" : p);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, html);
}
function copyDir(src, dst) {
  if (!fs.existsSync(src)) return;
  fs.mkdirSync(dst, { recursive: true });
  for (const f of fs.readdirSync(src)) {
    const s = path.join(src, f), d = path.join(dst, f);
    fs.statSync(s).isDirectory() ? copyDir(s, d) : fs.copyFileSync(s, d);
  }
}

fs.rmSync(OUT, { recursive: true, force: true });
copyDir(path.join(ROOT, "public"), OUT);

const urls = [];
for (const l of LANGS) {
  write(P.home(l), homePage(l));
  write(P.services(l), servicesPage(l));
  write(P.branches(l), branchesPage(l));
  write(P.articles(l), articlesPage(l));
  for (const a of articles) write(P.article(l, a.slug), articlePage(l, a));
  for (const s of services) write(P.service(l, s.slug), servicePage(l, s));
}
write("404.html", notFound());

urls.push(["home"], ["services"], ["branches"], ["articles"], ...services.map((s) => ["service", s.slug]), ...articles.map((a) => ["article", a.slug]));
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls
  .flatMap(([k, slug]) =>
    LANGS.map((l) => {
      const pa = P[k]("ar", slug), pe = P[k]("en", slug);
      return `  <url><loc>${abs(l === "ar" ? pa : pe)}</loc><xhtml:link rel="alternate" hreflang="ar" href="${abs(pa)}"/><xhtml:link rel="alternate" hreflang="en" href="${abs(pe)}"/><xhtml:link rel="alternate" hreflang="x-default" href="${abs(pa)}"/></url>`;
    })
  )
  .join("\n")}
</urlset>`;
write("sitemap.xml", sitemap);
write("robots.txt", `User-agent: *\nAllow: /\n\nSitemap: ${abs("/sitemap.xml")}\n`);

const count = LANGS.length * (4 + services.length + articles.length) + 1;
console.log(`Built ${count} pages into dist/  (site URL: ${biz.siteUrl})`);
if (anyPending) console.log("Note: some branch contact details are still empty — preview notice is shown.");
