/* Simple schematic diagrams for the implant guide (inline SVG, brand colours).
   Educational drawings only — labelled "illustration" on the page. */
const C = { navy: "#0B1F57", blue: "#0154BA", baby: "#CFE4FB", bone: "#EFE3CF", boneLine: "#D9C6A5", gum: "#F3B9C1", gumLine: "#E59AA6", tooth: "#FFFFFF", toothLine: "#9FB3D1", metal: "#A7B1BF", metalDark: "#7C8796", ink: "#1C2740" };

const tx = (x, y, s, o = {}) => `<text x="${x}" y="${y}" text-anchor="${o.a || "middle"}" font-size="${o.size || 15}" font-weight="${o.w || 600}" fill="${o.fill || C.navy}" font-family="inherit">${s}</text>`;

function bone(x, w, y = 165, h = 115) { return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10" fill="${C.bone}" stroke="${C.boneLine}"/>`; }
function gum(x, w, y = 140, h = 34) { return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="14" fill="${C.gum}" stroke="${C.gumLine}"/>`; }
function root(x, w = 56) { return `<path d="M${x + 9},150 L${x + w - 9},150 L${x + w / 2 + 6},252 Q${x + w / 2},260 ${x + w / 2 - 6},252 Z" fill="${C.tooth}" stroke="${C.toothLine}" stroke-width="1.5"/>`; }
function crown(x, w = 56, o = {}) { return `<path d="M${x},152 L${x},98 Q${x},72 ${x + w / 2},72 Q${x + w},72 ${x + w},98 L${x + w},152 Z" fill="${o.fill || C.tooth}" stroke="${o.stroke || C.toothLine}" stroke-width="${o.sw || 1.5}"${o.dash ? ' stroke-dasharray="6 4"' : ""}/>`; }
function fixture(cx, top = 170, bottom = 255) {
  let threads = "";
  for (let y = top + 10; y < bottom - 6; y += 11) threads += `<line x1="${cx - 12}" y1="${y}" x2="${cx + 12}" y2="${y + 4}" stroke="${C.metalDark}" stroke-width="1.6"/>`;
  return `<path d="M${cx - 12},${top} L${cx + 12},${top} L${cx + 10},${bottom - 8} Q${cx},${bottom + 2} ${cx - 10},${bottom - 8} Z" fill="${C.metal}" stroke="${C.metalDark}" stroke-width="1.5"/>${threads}`;
}
function abutment(cx) { return `<rect x="${cx - 9}" y="140" width="18" height="32" rx="3" fill="#C9D0DA" stroke="${C.metalDark}" stroke-width="1.4"/>`; }
function arrow(x1, x2, y) { return `<line x1="${x1}" y1="${y}" x2="${x2 - 8}" y2="${y}" stroke="${C.blue}" stroke-width="2.5"/><path d="M${x2 - 10},${y - 6} L${x2},${y} L${x2 - 10},${y + 6} Z" fill="${C.blue}"/>`; }
function arrowL(x1, x2, y) { return `<line x1="${x1}" y1="${y}" x2="${x2 + 8}" y2="${y}" stroke="${C.blue}" stroke-width="2.5"/><path d="M${x2 + 10},${y - 6} L${x2},${y} L${x2 + 10},${y + 6} Z" fill="${C.blue}"/>`; }
function svg(vb, label, inner) { return `<svg class="dg" viewBox="${vb}" role="img" aria-label="${label}" xmlns="http://www.w3.org/2000/svg">${inner}</svg>`; }

/* 2 — implant vs bridge, same gap */
function implantVsBridge(l) {
  const L = l === "ar" ? { a: "زرعة واحدة", b: "كوبري تقليدي", na: "الأسنان اللي جنبها سليمة", nb: "الأسنان اللي جنبها بتتبرد", t: "نفس الفراغ بطريقتين" } : { a: "Single implant", b: "Bridge", na: "Neighbours untouched", nb: "Neighbours reshaped", t: "The same gap, two ways" };
  const rtl = l === "ar";
  const panel = (x0, isBridge) => {
    const xs = [x0, x0 + 60, x0 + 120];
    let s = bone(x0 - 14, 208) + root(xs[0]) + root(xs[2]);
    if (!isBridge) s += fixture(xs[1] + 28);
    s += gum(x0 - 14, 208);
    if (isBridge) {
      s += `<path d="M${xs[0] + 4},152 L${xs[0] + 4},104 Q${xs[0] + 4},80 ${xs[0] + 28},80 L${xs[2] + 28},80 Q${xs[2] + 52},80 ${xs[2] + 52},104 L${xs[2] + 52},152 L${xs[2]},152 L${xs[2]},158 L${xs[1] + 56},158 Q${xs[1] + 28},166 ${xs[1]},158 L${xs[0] + 56},158 L${xs[0] + 56},152 Z" fill="${C.tooth}" stroke="${C.blue}" stroke-width="2"/>`;
      s += `<line x1="${xs[1]}" y1="84" x2="${xs[1]}" y2="156" stroke="${C.toothLine}"/><line x1="${xs[2]}" y1="84" x2="${xs[2]}" y2="156" stroke="${C.toothLine}"/>`;
    } else {
      s += crown(xs[0]) + crown(xs[2]) + abutment(xs[1] + 28) + crown(xs[1], 56, { stroke: C.blue, sw: 2 });
    }
    s += tx(x0 + 88, 44, isBridge ? L.b : L.a, { size: 26, w: 700 }) + tx(x0 + 88, 306, isBridge ? L.nb : L.na, { size: 19, w: 600, fill: C.ink });
    return s;
  };
  return svg("0 0 600 320", L.t, panel(rtl ? 356 : 56, false) + `<line x1="300" y1="30" x2="300" y2="290" stroke="${C.baby}" stroke-width="2" stroke-dasharray="5 5"/>` + panel(rtl ? 56 : 356, true));
}

/* 3 — immediate implant sequence */
function immediateSequence(l) {
  const L = l === "ar" ? ["سنة تالفة", "خلع", "زرعة فورية", "سنة مؤقتة"] : ["Damaged tooth", "Extraction", "Implant placed", "Temporary tooth"];
  const rtl = l === "ar";
  const title = l === "ar" ? "مراحل الزراعة الفورية" : "Immediate implant steps";
  let s = "";
  [0, 1, 2, 3].forEach((i) => {
    const x = 18 + (rtl ? 3 - i : i) * 162, cx = x + 64;
    s += bone(x, 128) ;
    if (i === 0) s += root(cx - 28) + gum(x, 128) + crown(cx - 28) + `<path d="M${cx - 6},86 q10,14 0,30 q-8,10 4,22" fill="none" stroke="#8a5a3c" stroke-width="2.2"/>`;
    if (i === 1) s += `<path d="M${cx - 19},150 L${cx + 19},150 L${cx + 6},252 Q${cx},260 ${cx - 6},252 Z" fill="#E8D3B4" stroke="${C.boneLine}" stroke-width="1.5"/>` + gum(x, 54) + gum(x + 74, 54);
    if (i === 2) s += `<path d="M${cx - 19},150 L${cx + 19},150 L${cx + 6},252 Q${cx},260 ${cx - 6},252 Z" fill="#E8D3B4" stroke="${C.boneLine}" stroke-width="1.5"/>` + fixture(cx, 158, 250) + gum(x, 54) + gum(x + 74, 54);
    if (i === 3) s += `<path d="M${cx - 19},150 L${cx + 19},150 L${cx + 6},252 Q${cx},260 ${cx - 6},252 Z" fill="#E8D3B4" stroke="${C.boneLine}" stroke-width="1.5"/>` + fixture(cx, 158, 250) + gum(x, 128) + abutment(cx) + crown(cx - 28, 56, { stroke: C.blue, sw: 2, dash: true });
    s += `<circle cx="${cx}" cy="34" r="19" fill="${C.blue}"/>` + tx(cx, 41, rtl ? "١٢٣٤"[i] : String(i + 1), { fill: "#fff", size: 20, w: 700 });
    s += tx(cx, 306, L[i], { size: 21, w: 700, fill: C.ink });
    if (i < 3) s += rtl ? arrowL(x - 4, x - 28, 120) : arrow(x + 134, x + 158, 120);
  });
  return svg("0 0 650 322", title, s);
}

/* 4 — full arch, All-on-4 vs All-on-6 (top view of lower jaw) */
function fullArch(l) {
  const L = l === "ar" ? { t: "زراعة الفك الكامل", a: "٤ زرعات", b: "٦ زرعات", n: "العدد بيتحدد حسب العظم" } : { t: "Full-arch implants", a: "4 implants", b: "6 implants", n: "The number depends on the bone" };
  const rtl = l === "ar", A = rtl ? 450 : 150, B = rtl ? 150 : 450;
  const arch = (cx) => `<path d="M${cx - 110},250 C${cx - 120},120 ${cx - 70},70 ${cx},70 C${cx + 70},70 ${cx + 120},120 ${cx + 110},250" fill="none" stroke="${C.gum}" stroke-width="46" stroke-linecap="round"/><path d="M${cx - 110},250 C${cx - 120},120 ${cx - 70},70 ${cx},70 C${cx + 70},70 ${cx + 120},120 ${cx + 110},250" fill="none" stroke="${C.gumLine}" stroke-width="1.5" stroke-dasharray="3 5"/>`;
  const pt = (cx, tt) => { // cubic bezier point on the arch (left half mirrored)
    const P = (a, b, c, d, u) => (1 - u) ** 3 * a + 3 * (1 - u) ** 2 * u * b + 3 * (1 - u) * u * u * c + u ** 3 * d;
    const left = tt < 0.5, u = left ? tt * 2 : (tt - 0.5) * 2;
    return left ? [P(cx - 110, cx - 120, cx - 70, cx, u), P(250, 120, 70, 70, u)] : [P(cx, cx + 70, cx + 120, cx + 110, u), P(70, 70, 120, 250, u)];
  };
  const imp = (p, rot = 0) => `<g transform="translate(${p[0].toFixed(1)},${p[1].toFixed(1)}) rotate(${rot})"><rect x="-7" y="-13" width="14" height="26" rx="5" fill="${C.metal}" stroke="${C.metalDark}" stroke-width="1.5"/><circle r="3.5" fill="#fff"/></g>`;
  const p4 = (cx) => [imp(pt(cx, 0.2), 25), imp(pt(cx, 0.4)), imp(pt(cx, 0.6)), imp(pt(cx, 0.8), -25)].join("");
  const p6 = (cx) => [0.12, 0.27, 0.42, 0.58, 0.73, 0.88].map((u) => imp(pt(cx, u))).join("");
  const s = arch(A) + p4(A) + tx(A, 30, "All-on-4", { size: 26, w: 700 }) + tx(A, 170, L.a, { size: 21, w: 700, fill: C.ink }) + arch(B) + p6(B) + tx(B, 30, "All-on-6", { size: 26, w: 700 }) + tx(B, 170, L.b, { size: 21, w: 700, fill: C.ink }) + `<line x1="300" y1="50" x2="300" y2="270" stroke="${C.baby}" stroke-width="2" stroke-dasharray="5 5"/>` + tx(300, 306, L.n, { size: 19, w: 600, fill: C.ink });
  return svg("0 0 600 320", L.t, s);
}

/* 5 — conventional flap vs flapless */
function flapless(l) {
  const L = l === "ar" ? { t: "الفرق بين فتح اللثة والزراعة من غير شق", a: "فتح اللثة", b: "Flapless", na: "بعدها غرز في اللثة", nb: "فتحة صغيرة بس" } : { t: "Flap versus flapless placement", a: "Gum opened", b: "Flapless", na: "Stitches afterwards", nb: "Small opening only" };
  const rtl = l === "ar";
  const panel = (x0, isFlapless) => {
    const cx = x0 + 120;
    let s = bone(x0, 240, 165, 115) + fixture(cx, 168, 262);
    if (isFlapless) s += gum(x0, 104, 140, 34) + gum(cx + 16, 104, 140, 34) + `<ellipse cx="${cx}" cy="141" rx="17" ry="5" fill="none" stroke="${C.blue}" stroke-width="2"/>`;
    else s += `<path d="M${x0 + 4},150 L${cx - 30},150 L${cx - 52},92 L${x0 + 4},120 Z" fill="${C.gum}" stroke="${C.gumLine}"/><path d="M${x0 + 236},150 L${cx + 30},150 L${cx + 52},92 L${x0 + 236},120 Z" fill="${C.gum}" stroke="${C.gumLine}"/>` + `<path d="M${cx - 32},96 l-10,-12 M${cx + 32},96 l10,-12" stroke="${C.blue}" stroke-width="2.5" stroke-linecap="round"/>`;
    s += tx(cx, 44, isFlapless ? L.b : L.a, { size: 26, w: 700 }) + tx(cx, 306, isFlapless ? L.nb : L.na, { size: 19, w: 600, fill: C.ink });
    return s;
  };
  return svg("0 0 600 320", L.t, panel(rtl ? 330 : 30, false) + `<line x1="300" y1="30" x2="300" y2="290" stroke="${C.baby}" stroke-width="2" stroke-dasharray="5 5"/>` + panel(rtl ? 30 : 330, true));
}

module.exports = { implantVsBridge, immediateSequence, fullArch, flapless };
