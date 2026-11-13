/* Tooth Shine — small progressive enhancements (site works without JS) */
(function () {
  "use strict";
  var TS = window.TS || {};
  var doc = document;
  var $ = function (s, c) { return (c || doc).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || doc).querySelectorAll(s)); };

  function store(k, v) { try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) { return null; } }

  /* ---------- header shadow + mobile bar hide on footer ---------- */
  var header = $("[data-header]");
  var mbar = $("[data-mbar]");
  var footer = $(".site-footer");
  function onScroll() {
    if (header) header.classList.toggle("is-scrolled", window.scrollY > 8);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  if (mbar && footer && "IntersectionObserver" in window) {
    new IntersectionObserver(function (e) { mbar.classList.toggle("is-hidden", e[0].isIntersecting); }).observe(footer);
  }

  /* ---------- mobile menu ---------- */
  var menuBtn = $("[data-menu]");
  var nav = $("#site-nav");
  function closeMenu() { if (!menuBtn) return; menuBtn.setAttribute("aria-expanded", "false"); nav.classList.remove("is-open"); }
  if (menuBtn && nav) {
    menuBtn.addEventListener("click", function () {
      var open = menuBtn.getAttribute("aria-expanded") === "true";
      menuBtn.setAttribute("aria-expanded", String(!open));
      nav.classList.toggle("is-open", !open);
    });
    $$("a", nav).forEach(function (a) { a.addEventListener("click", closeMenu); });
    doc.addEventListener("keydown", function (e) { if (e.key === "Escape") closeMenu(); });
  }

  /* ---------- language switch: keep section (#hash) + remember choice ---------- */
  $$("[data-lang-switch]").forEach(function (a) {
    a.addEventListener("click", function () {
      store("ts-lang", a.getAttribute("data-lang-switch"));
      if (location.hash) a.href = a.href.split("#")[0] + location.hash;
    });
  });
  store("ts-lang", TS.lang);

  /* ---------- WhatsApp message with time-based greeting ---------- */
  function greeting() {
    var h = new Date().getHours();
    return h >= 4 && h < 12 ? TS.greetings.morning : TS.greetings.evening;
  }
  function waLink(branchId, serviceSlug) {
    var b = TS.branches && TS.branches[branchId];
    if (!b || !b.wa) return "";
    var svc = (serviceSlug && TS.services[serviceSlug]) || TS.general;
    var msg = TS.template.replace("{greeting}", greeting()).replace("{service}", svc).replace("{branch}", b.name);
    return "https://wa.me/" + b.wa + "?text=" + encodeURIComponent(msg);
  }

  /* ---------- toast ---------- */
  var toastEl = $("[data-toast]");
  var toastTimer;
  function toast(msg) {
    if (!toastEl) return;
    toastEl.textContent = msg;
    toastEl.classList.add("is-on");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toastEl.classList.remove("is-on"); }, 3200);
  }

  /* ---------- contact sheet ---------- */
  var sheet = $("#contact-sheet");
  var lastTrigger = null;
  function openSheet(serviceSlug, trigger) {
    if (!sheet || typeof sheet.showModal !== "function") return false;
    lastTrigger = trigger;
    var mode = (trigger && trigger.getAttribute("data-mode")) || "";
    if (mode) sheet.setAttribute("data-mode", mode); else sheet.removeAttribute("data-mode");
    $$("[data-wa]", sheet).forEach(function (a) { a.setAttribute("data-service", serviceSlug || ""); });
    var sub = $("[data-sheet-sub]", sheet);
    if (sub) sub.textContent = mode === "wa" ? TS.sheetSubWa : mode === "call" ? TS.sheetSubCall : TS.sheetSub;
    sheet.showModal();
    return true;
  }
  if (sheet) {
    $("[data-sheet-close]", sheet).addEventListener("click", function () { sheet.close(); });
    sheet.addEventListener("click", function (e) { if (e.target === sheet) sheet.close(); });
    sheet.addEventListener("close", function () { if (lastTrigger) lastTrigger.focus(); });
  }

  doc.addEventListener("click", function (e) {
    var el = e.target.closest ? e.target.closest("a, button") : null;
    if (!el) return;

    if (el.hasAttribute("data-pending")) {
      e.preventDefault();
      toast(TS.pendingToast);
      return;
    }
    if (el.hasAttribute("data-sheet")) {
      if (openSheet(el.getAttribute("data-service"), el)) e.preventDefault();
      return;
    }
    if (el.hasAttribute("data-wa")) {
      var href = waLink(el.getAttribute("data-branch"), el.getAttribute("data-service"));
      if (href) el.href = href;
      store("ts-branch", el.getAttribute("data-branch"));
    }
  });

  /* ---------- main services tabs (keyboard accessible) ---------- */
  $$("[data-tabs]").forEach(function (root) {
    var tabs = $$('[role="tab"]', root);
    function select(tab, focus) {
      tabs.forEach(function (t) {
        var on = t === tab;
        t.setAttribute("aria-selected", String(on));
        t.tabIndex = on ? 0 : -1;
        var panel = doc.getElementById(t.getAttribute("aria-controls"));
        if (panel) panel.hidden = !on;
      });
      if (focus) tab.focus();
    }
    tabs.forEach(function (t, i) {
      t.addEventListener("click", function () { select(t); });
      t.addEventListener("keydown", function (e) {
        var rtl = doc.documentElement.dir === "rtl";
        var next = { ArrowDown: 1, ArrowUp: -1, ArrowRight: rtl ? -1 : 1, ArrowLeft: rtl ? 1 : -1 }[e.key];
        if (e.key === "Home") next = -i;
        if (e.key === "End") next = tabs.length - 1 - i;
        if (next === undefined) return;
        e.preventDefault();
        select(tabs[(i + next + tabs.length) % tabs.length], true);
      });
    });
    if (tabs.length) select(tabs[0]);
  });

  /* ---------- carousels ---------- */
  $$("[data-carousel]").forEach(function (c) {
    var track = $(".car-track", c);
    function go(dir) {
      var rtl = doc.documentElement.dir === "rtl";
      var amount = track.clientWidth * 0.9 * dir * (rtl ? -1 : 1);
      track.scrollBy({ left: amount, behavior: "smooth" });
    }
    var prev = $("[data-car-prev]", c), next = $("[data-car-next]", c);
    if (prev) prev.addEventListener("click", function () { go(-1); });
    if (next) next.addEventListener("click", function () { go(1); });
    var nav = $(".car-nav", c);
    function toggleNav() { if (nav) nav.hidden = track.scrollWidth <= track.clientWidth + 4; }
    toggleNav(); window.addEventListener("resize", toggleNav);
  });

  /* ---------- reveal on scroll ---------- */
  var reveals = $$(".reveal");
  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); } });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    reveals.forEach(function (r) { io.observe(r); });
  } else {
    reveals.forEach(function (r) { r.classList.add("is-in"); });
  }
})();

/* review "read more" */
document.querySelectorAll('.rv blockquote').forEach(function (q) {
  if (q.scrollHeight <= q.clientHeight + 4) return;
  var b = document.createElement('button');
  b.type = 'button'; b.className = 'rv-more';
  var ar = document.documentElement.lang === 'ar';
  b.textContent = ar ? 'اقرأ التقييم كامل' : 'Read full review';
  b.addEventListener('click', function () { q.classList.add('is-open'); b.remove(); });
  q.addEventListener('click', function () { q.classList.add('is-open'); b.remove(); });
  q.after(b);
});

/* ---------- booking form -> WhatsApp ---------- */
(function () {
  var f = document.querySelector("[data-book]");
  if (!f) return;
  var tpl = "";
  try { tpl = JSON.parse(f.querySelector("[data-book-msg]").textContent); } catch (e) {}
  f.addEventListener("submit", function (e) {
    e.preventDefault();
    var name = f.name.value.trim();
    var phone = f.phone.value.trim();
    var digits = phone.replace(/[^\d٠-٩]/g, "");
    var okName = name.length >= 2, okPhone = digits.length >= 8;
    f.name.closest(".book-in").classList.toggle("is-bad", !okName);
    f.phone.closest(".book-in").classList.toggle("is-bad", !okPhone);
    if (!okName) { f.name.focus(); return; }
    if (!okPhone) { f.phone.focus(); return; }
    var svc = f.querySelector("input[name=service]:checked");
    var br = f.querySelector("input[name=branch]:checked");
    if (!br) return;
    var text = tpl.replace("{name}", name).replace("{phone}", phone)
      .replace("{service}", svc ? svc.value : "").replace("{branch}", br.getAttribute("data-name"));
    if (window.dataLayer) window.dataLayer.push({ event: "booking_whatsapp", service: svc && svc.value, branch: br.getAttribute("data-name") });
    if (typeof window.fbq === "function") window.fbq("track", "Lead");
    window.location.href = "https://wa.me/" + br.value + "?text=" + encodeURIComponent(text);
  });
})();

/* ---------- floating book button + smooth jump to booking card ---------- */
(function () {
  var fab = document.querySelector("[data-fab]");
  var book = document.getElementById("book");
  var bookVisible = false;
  if (book && "IntersectionObserver" in window) {
    new IntersectionObserver(function (e) { bookVisible = e[0].isIntersecting; update(); }).observe(book);
  }
  function update() { if (fab) fab.classList.toggle("is-on", window.scrollY > 500 && !bookVisible); }
  window.addEventListener("scroll", update, { passive: true });
  update();
  if (book) {
    document.querySelectorAll('a[href$="#book"]').forEach(function (a) {
      a.addEventListener("click", function (e) {
        e.preventDefault();
        book.scrollIntoView({ behavior: "smooth", block: "start" });
        var n = book.querySelector("input[name=name]");
        setTimeout(function () { if (n) n.focus({ preventScroll: true }); }, 600);
      });
    });
  }
})();

/* ---------- v12: concern cards → journey tabs, case filters, measurement ---------- */
(function () {
  var dl = function (o) { window.dataLayer = window.dataLayer || []; window.dataLayer.push(o); };
  var jr = document.querySelector("[data-jr]");
  function openJourney(id, scroll) {
    var tab = document.getElementById("jt-" + id);
    if (!tab) return false;
    tab.click();
    if (scroll) {
      var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      document.getElementById("journey").scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
    }
    return true;
  }
  document.querySelectorAll("[data-journey]").forEach(function (a) {
    a.addEventListener("click", function (e) {
      if (openJourney(a.getAttribute("data-journey"), true)) { e.preventDefault(); dl({ event: "concern_select", concern: a.getAttribute("data-journey") }); }
    });
  });
  if (jr && /^#j-/.test(location.hash)) openJourney(location.hash.slice(3), false);

  /* case filters */
  var cases = document.querySelectorAll("[data-case]");
  document.querySelectorAll("[data-cf]").forEach(function (b, _, all) {
    b.addEventListener("click", function () {
      var v = b.getAttribute("data-cf");
      Array.prototype.forEach.call(all, function (x) { var on = x === b; x.classList.toggle("is-on", on); x.setAttribute("aria-pressed", String(on)); });
      Array.prototype.forEach.call(cases, function (c) { c.hidden = !!v && c.getAttribute("data-case") !== v; });
      var track = document.querySelector(".car--cases .car-track"); if (track) track.scrollLeft = 0;
      window.dispatchEvent(new Event("resize"));
      dl({ event: "case_filter", category: v || "all" });
    });
  });

  /* measurement (pushes to dataLayer; read by Google tag / Pixel once installed) */
  document.addEventListener("click", function (e) {
    var el = e.target.closest ? e.target.closest("a, button") : null;
    if (!el) return;
    if (el.hasAttribute("data-track")) dl({ event: "journey_step", concern: el.getAttribute("data-label") });
    if (el.closest(".jr-cta") || el.closest(".g-cta") || el.closest(".g-toc")) dl({ event: "journey_cta", service: el.getAttribute("data-service") || "" });
    if (el.hasAttribute("data-wa")) dl({ event: "whatsapp_click", branch: el.getAttribute("data-branch") || "", service: el.getAttribute("data-service") || "" });
    if (el.getAttribute("href") && el.getAttribute("href").indexOf("tel:") === 0) dl({ event: "call_click", branch: el.getAttribute("data-branch") || "" });
    if (el.closest(".case-card") || el.closest(".car--cases")) dl({ event: "case_engage" });
  }, true);
  document.querySelectorAll("input[name=branch]").forEach(function (r) { r.addEventListener("change", function () { dl({ event: "branch_select", branch: r.getAttribute("data-name") }); }); });
})();

/* =====================================================================
   v15 — measurement (consent-gated, no health data) + 3D experiences
   ===================================================================== */
(function () {
  "use strict";
  var TS = window.TS || {};
  var CFG = TS.tracking || {};
  var AR = TS.lang === "ar";
  var pageType = document.body.getAttribute("data-page-type") || (document.body.className.match(/page-(\w+)/) || [])[1] || "page";
  var lp = document.body.getAttribute("data-lp") || "";
  function ss(k, v) { try { if (v === undefined) return sessionStorage.getItem(k); sessionStorage.setItem(k, v); } catch (e) { return null; } }
  function ls(k, v) { try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) { return null; } }

  /* UTM / click-id attribution: first touch of the session, kept in sessionStorage */
  var q = new URLSearchParams(location.search), utm = {};
  ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"].forEach(function (k) { if (q.get(k)) utm[k] = q.get(k).slice(0, 80); });
  if (q.get("gclid")) utm.click_id = "gclid"; else if (q.get("fbclid")) utm.click_id = "fbclid";
  if (Object.keys(utm).length && !ss("ts-utm")) ss("ts-utm", JSON.stringify(utm));
  try { utm = JSON.parse(ss("ts-utm") || "{}"); } catch (e) { utm = {}; }

  /* track(): always to dataLayer; to gtag if loaded. Only page/branch/method/campaign. */
  function track(name, params) {
    var p = { page_type: pageType, landing_page: lp || undefined };
    for (var k in params) p[k] = params[k];
    for (var u in utm) p[u] = utm[u];
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(Object.assign({ event: name }, p));
    if (typeof window.gtag === "function") window.gtag("event", name, p);
  }
  window.tsTrack = track;
  var hasAny = !!(CFG.ga4 || CFG.ads || CFG.meta);
  var consent = ls("ts-consent");
  function loadMeta() {
    if (!CFG.meta || window.fbq) return;
    /* standard Meta base code */
    !function (f, b, e, v, n, t, s) { if (f.fbq) return; n = f.fbq = function () { n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments); }; if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = "2.0"; n.queue = []; t = b.createElement(e); t.async = !0; t.src = v; s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s); }(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
    window.fbq("init", CFG.meta); window.fbq("track", "PageView");
  }
  if (hasAny && consent === "yes") loadMeta();
  if (hasAny && !consent) {
    var bar = document.createElement("div");
    bar.className = "consent";
    bar.setAttribute("role", "region");
    bar.setAttribute("aria-label", AR ? "ملفات تعريف الارتباط" : "Cookies");
    bar.innerHTML = '<p>' + (AR ? "بنستخدم ملفات تعريف ارتباط لقياس الإعلانات وتحسين الموقع. مش بنجمع أي بيانات طبية." : "We use cookies to measure ads and improve the site. We never collect medical details.") + '</p><div><button type="button" class="btn btn-primary btn-sm" data-consent="yes">' + (AR ? "موافق" : "Accept") + '</button><button type="button" class="btn btn-line btn-sm" data-consent="no">' + (AR ? "لا شكرًا" : "No thanks") + "</button></div>";
    document.body.appendChild(bar);
    bar.addEventListener("click", function (e) {
      var b = e.target.closest("[data-consent]"); if (!b) return;
      var yes = b.getAttribute("data-consent") === "yes";
      ls("ts-consent", yes ? "yes" : "no");
      if (yes && typeof window.gtag === "function") window.gtag("consent", "update", { ad_storage: "granted", ad_user_data: "granted", ad_personalization: "granted", analytics_storage: "granted" });
      if (yes) loadMeta();
      bar.remove();
    });
  }
  if (lp) track("lp_view", {});

  /* booking clicks = the conversion */
  document.addEventListener("click", function (e) {
    var el = e.target.closest ? e.target.closest("[data-act], [data-lp-book], [data-sheet]") : null;
    if (!el) return;
    var act = el.getAttribute("data-act");
    var place = el.closest("[data-mbar]") ? "sticky_bar" : el.closest(".lp-hero, .hero") ? "hero" : el.closest("#contact-sheet") ? "branch_sheet" : el.closest(".lp-book, #book, .branches-sec") ? "booking_section" : "inline";
    if (act === "wa" || act === "call") {
      var br = el.getAttribute("data-branch") || "";
      track("booking_click", { method: act === "wa" ? "whatsapp" : "phone", branch: br, placement: place });
      track("branch_select", { branch: br });
      if (ls("ts-consent") === "yes") {
        if (CFG.ads && CFG.adsLead && typeof window.gtag === "function") window.gtag("event", "conversion", { send_to: CFG.adsLead });
        if (window.fbq) window.fbq("track", "Contact");
      }
    } else if (act === "map") track("directions_click", { branch: el.getAttribute("data-branch") || "", placement: place });
    else if (el.hasAttribute("data-lp-book")) track("cta_click", { placement: place });
    else if (el.hasAttribute("data-sheet")) track("cta_click", { placement: place, opens: "branch_sheet" });
  }, true);
  /* case engagement: a case card seen for 1s+ */
  if ("IntersectionObserver" in window) {
    var seen = {};
    var cio = new IntersectionObserver(function (en) {
      en.forEach(function (x) {
        var id = x.target.getAttribute("data-case-view") || x.target.getAttribute("data-case") || "case";
        if (x.isIntersecting && !seen[id]) { x.target._t = setTimeout(function () { seen[id] = 1; track("case_view", { case_id: id }); }, 1000); }
        else clearTimeout(x.target._t);
      });
    }, { threshold: 0.6 });
    document.querySelectorAll(".case-card").forEach(function (c) { cio.observe(c); });
    document.addEventListener("toggle", function (e) { if (e.target.classList && e.target.classList.contains("case-story") && e.target.open) track("case_story_open", {}); }, true);
  }

  /* ---------- 3D experiences: lazy, one live scene at a time ---------- */
  var V = (document.querySelector('script[src*="main.js"]') || {}).src || "";
  var ver = (V.split("?v=")[1] || "1");
  var live = null; // { root, ctl }
  var lib = null;
  function getLib() { return lib || (lib = import("/assets/js/ts3d.js?v=" + ver)); }
  function setPoster(root, key) { var img = root.querySelector("[data-x3d-poster]"); if (img && key) img.src = "/assets/img/3d/" + key + ".webp"; }
  function stopLive() {
    if (!live) return;
    try { live.ctl.dispose(); } catch (e) {}
    live.root.classList.remove("is-live");
    var t = live.root.querySelector("[data-x3d-tools]"); if (t) t.hidden = true;
    var h = live.root.querySelector("[data-x3d-hint]"); if (h) h.hidden = true;
    live = null;
  }
  function applyState(root, ctl) {
    // replay the currently selected options on a fresh scene
    root.querySelectorAll('[data-x3d-panel="' + root.getAttribute("data-scene") + '"] [aria-pressed="true"][data-x3d-set]').forEach(function (b) {
      var kv = b.getAttribute("data-x3d-set").split(":");
      if (kv[0] !== "assemble") ctl.set(kv[0], kv[1]);
    });
  }
  function start(root, then) {
    if (live && live.root === root && live.scene === root.getAttribute("data-scene")) { if (then) then(live.ctl); return; }
    stopLive();
    root.classList.add("is-loading");
    getLib().then(function (m) {
      root.classList.remove("is-loading");
      if (!m.supported()) { var n = root.querySelector("[data-x3d-nogl]"); if (n) n.hidden = false; return; }
      var scene = root.getAttribute("data-scene");
      var ctl = m.mount(root.querySelector("[data-x3d-canvas]"), { scene: scene, onEvent: function (a) { if (a === "rotate" && !root._rot) { root._rot = 1; track("x3d_interact", { scene: scene, action: "rotate" }); } } });
      live = { root: root, ctl: ctl, scene: scene };
      root.classList.add("is-live");
      var t = root.querySelector("[data-x3d-tools]"); if (t) t.hidden = false;
      var h = root.querySelector("[data-x3d-hint]"); if (h) h.hidden = false;
      if (scene !== "implant") applyState(root, ctl);
      track("x3d_start", { scene: scene });
      if (then) then(ctl);
    }).catch(function () { root.classList.remove("is-loading"); var n = root.querySelector("[data-x3d-nogl]"); if (n) n.hidden = false; });
  }
  function showInfo(panel, key) {
    if (!panel || !key) return;
    panel.querySelectorAll("[data-x3d-info]").forEach(function (x) { x.hidden = x.getAttribute("data-x3d-info") !== key; });
  }
  document.querySelectorAll("[data-x3d]").forEach(function (root) {
    root.addEventListener("click", function (e) {
      var b = e.target.closest("button"); if (!b || !root.contains(b)) return;
      var scene = root.getAttribute("data-scene");
      var panel = root.querySelector('[data-x3d-panel="' + scene + '"]');
      if (b.hasAttribute("data-x3d-start")) { start(root); return; }
      if (b.hasAttribute("data-x3d-tab")) {
        var s = b.getAttribute("data-x3d-tab");
        if (s === scene) return;
        root.querySelectorAll("[data-x3d-tab]").forEach(function (x) { x.setAttribute("aria-selected", String(x === b)); });
        root.querySelectorAll('[role="tabpanel"]').forEach(function (p) { p.hidden = p.id !== "x3p-" + s; });
        var wasLive = live && live.root === root;
        stopLive();
        root.setAttribute("data-scene", s);
        var on = root.querySelector('[data-x3d-panel="' + s + '"] [aria-pressed="true"][data-poster]');
        setPoster(root, on ? on.getAttribute("data-poster") : null);
        track("x3d_tab", { scene: s });
        if (wasLive) start(root);
        return;
      }
      if (b.hasAttribute("data-x3d-rot")) { if (live && live.root === root) live.ctl.rotateBy(parseFloat(b.getAttribute("data-x3d-rot"))); return; }
      if (b.hasAttribute("data-gs")) {
        var cur = panel.querySelector('[data-x3d-group="stage"][aria-pressed="true"]');
        var all = Array.prototype.slice.call(panel.querySelectorAll('[data-x3d-group="stage"]'));
        var i = Math.max(0, Math.min(all.length - 1, all.indexOf(cur) + parseInt(b.getAttribute("data-gs"), 10)));
        all[i].click(); return;
      }
      if (!b.hasAttribute("data-x3d-set")) return;
      var set = b.getAttribute("data-x3d-set");
      var group = b.getAttribute("data-x3d-group");
      if (group) panel.querySelectorAll('[data-x3d-group="' + group + '"]').forEach(function (x) { var on = x === b; x.classList.toggle("is-on", on); x.setAttribute("aria-pressed", String(on)); });
      var tog = b.getAttribute("data-x3d-toggle");
      if (tog) {
        var pressed = b.getAttribute("aria-pressed") === "true";
        b.setAttribute("aria-pressed", String(!pressed));
        if (pressed) set = tog;
      }
      showInfo(panel, b.getAttribute("data-x3d-show"));
      if (set.indexOf("reset") !== 0) setPoster(root, b.getAttribute("data-poster"));
      var kv = set.split(":");
      track("x3d_interact", { scene: scene, action: kv[0] + "_" + kv[1] });
      if (live && live.root === root) live.ctl.set(kv[0], kv[1]);
    });
  });
  /* concern journeys can open a matching 3D scene */
  document.addEventListener("click", function (e) {
    var a = e.target.closest ? e.target.closest("[data-open-x3d]") : null; if (!a) return;
    var root = document.querySelector("#experience [data-x3d]"); if (!root) return;
    var tab = root.querySelector('[data-x3d-tab="' + a.getAttribute("data-open-x3d") + '"]');
    if (tab) tab.click();
  });
})();
