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
    $$("[data-wa]", sheet).forEach(function (a) { a.setAttribute("data-service", serviceSlug || ""); });
    var sub = $("[data-sheet-sub]", sheet);
    if (sub) sub.textContent = TS.sheetSub;
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
