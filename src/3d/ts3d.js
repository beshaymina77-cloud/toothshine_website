/* =====================================================================
   Tooth Shine — educational 3D scenes (Three.js, procedural geometry)
   Source file. Bundled to public/assets/js/ts3d.js with:
     npx esbuild src/3d/ts3d.js --bundle --format=esm --minify --outfile=public/assets/js/ts3d.js
   Scenes are schematic teaching models (millimetre units), not patient anatomy.
   Only one scene is alive at a time; it renders on demand and pauses off-screen.
   ===================================================================== */
import {
  WebGLRenderer, Scene, PerspectiveCamera, Group, Mesh, BufferGeometry, Float32BufferAttribute,
  MeshStandardMaterial, MeshPhysicalMaterial, MeshBasicMaterial, LatheGeometry, ExtrudeGeometry, Shape,
  Vector2, Vector3, SphereGeometry, CylinderGeometry, TorusGeometry, PlaneGeometry, CanvasTexture, RepeatWrapping,
  PMREMGenerator, ACESFilmicToneMapping, SRGBColorSpace, DoubleSide, Color, Box3, AmbientLight, DirectionalLight,
  EdgesGeometry, LineSegments, LineBasicMaterial, WireframeGeometry, SplineCurve,
} from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";

const REDUCED = typeof matchMedia === "function" && matchMedia("(prefers-reduced-motion: reduce)").matches;
const clamp = (x, a, b) => Math.max(a, Math.min(b, x));
const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
const lerp = (a, b, t) => a + (b - a) * t;

/* ---------------- materials ---------------- */
function mats() {
  return {
    titanium: new MeshStandardMaterial({ color: 0xb9c0c9, metalness: 1, roughness: 0.32 }),
    titaniumDark: new MeshStandardMaterial({ color: 0x8f98a4, metalness: 1, roughness: 0.4 }),
    enamel: new MeshPhysicalMaterial({ color: 0xf6f1e6, roughness: 0.28, clearcoat: 0.7, clearcoatRoughness: 0.25, sheen: 0.3, sheenColor: new Color(0xffffff) }),
    ceramic: new MeshPhysicalMaterial({ color: 0xf8f5ee, roughness: 0.18, clearcoat: 1, clearcoatRoughness: 0.12 }),
    root: new MeshStandardMaterial({ color: 0xe9d9b4, roughness: 0.6 }),
    dentin: new MeshStandardMaterial({ color: 0xdcb26a, roughness: 0.55 }),
    pulp: new MeshStandardMaterial({ color: 0xc94d5e, roughness: 0.6 }),
    gum: new MeshPhysicalMaterial({ color: 0xd9707f, roughness: 0.45, clearcoat: 0.4, clearcoatRoughness: 0.4, transparent: true, opacity: 1 }),
    cortical: new MeshStandardMaterial({ color: 0xf1ead8, roughness: 0.7, transparent: true, opacity: 1 }),
    cancellous: new MeshStandardMaterial({ color: 0xf3e6c8, roughness: 0.9, transparent: true, opacity: 1, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2 }),
    restoration: new MeshPhysicalMaterial({ color: 0x6fa8ee, roughness: 0.2, clearcoat: 1, transparent: true, opacity: 0.96 }),
    removed: new MeshBasicMaterial({ color: 0xd94a4a, transparent: true, opacity: 0.28, depthWrite: false }),
    ghost: new MeshBasicMaterial({ color: 0x2f74cf, transparent: true, opacity: 0.32, depthWrite: false }),
    guide: new MeshPhysicalMaterial({ color: 0xdff0ff, roughness: 0.15, transparent: true, opacity: 0.55, depthWrite: false, side: DoubleSide }),
    xray: new MeshBasicMaterial({ color: 0x9fb6d6, transparent: true, opacity: 0.35, depthWrite: false }),
    scanLine: new MeshBasicMaterial({ color: 0x38a3ff, transparent: true, opacity: 0.5, depthWrite: false, side: DoubleSide }),
  };
}
function trabecularTexture() {
  const c = document.createElement("canvas");
  c.width = c.height = 256;
  const g = c.getContext("2d");
  g.fillStyle = "#f1e2bf";
  g.fillRect(0, 0, 256, 256);
  let s = 7;
  const rnd = () => ((s = (s * 16807) % 2147483647) / 2147483647);
  for (let i = 0; i < 420; i++) {
    g.fillStyle = `rgba(${170 + rnd() * 40 | 0},${130 + rnd() * 30 | 0},${80 + rnd() * 30 | 0},${0.25 + rnd() * 0.35})`;
    g.beginPath();
    g.ellipse(rnd() * 256, rnd() * 256, 2 + rnd() * 7, 2 + rnd() * 5, rnd() * 3, 0, Math.PI * 2);
    g.fill();
  }
  const t = new CanvasTexture(c);
  t.wrapS = t.wrapT = RepeatWrapping;
  t.repeat.set(2, 2);
  t.colorSpace = SRGBColorSpace;
  return t;
}

/* ---------------- geometry helpers ---------------- */
function gridMesh(nu, nv, fn) {
  // fn(u, v) -> [x,y,z]; u in [0,1] wraps around, v in [0,1]
  const pos = [], idx = [];
  for (let j = 0; j <= nv; j++) for (let i = 0; i <= nu; i++) pos.push(...fn(i / nu, j / nv));
  for (let j = 0; j < nv; j++) for (let i = 0; i < nu; i++) {
    const a = j * (nu + 1) + i, b = a + 1, c = a + nu + 1, d = c + 1;
    idx.push(a, b, c, b, d, c);
  }
  const g = new BufferGeometry();
  g.setAttribute("position", new Float32BufferAttribute(pos, 3));
  g.setIndex(idx);
  g.computeVertexNormals();
  return g;
}

/* Threaded tapered implant body. Platform at y=0, apex at y=-len. */
function implantFixture(m, len = 10, rPlat = 2.25) {
  const pitch = 0.8, depth = 0.38, collar = 0.7;
  const core = (y) => {
    const d = -y; // 0..len
    let r = rPlat - 0.25 - 0.45 * clamp((d - collar) / (len - collar), 0, 1);
    const apexZone = len - d;
    if (apexZone < 1.4) r *= Math.sqrt(clamp(apexZone / 1.4, 0, 1)) * 0.55 + 0.45 * (apexZone / 1.4);
    return Math.max(r, 0.001);
  };
  const g = gridMesh(96, 300, (u, v) => {
    const th = u * Math.PI * 2;
    const y = -v * len;
    const d = -y;
    let r;
    if (d < collar) r = rPlat - 0.08 * (d / collar);
    else {
      const ph = ((d - collar) / pitch + u) % 1;
      const prof = ph < 0.35 ? ph / 0.35 : ph < 0.5 ? 1 : Math.max(0, 1 - (ph - 0.5) / 0.4); // buttress-like
      const fade = clamp((d - collar) / 0.6, 0, 1) * clamp((len - d) / 1.2, 0, 1);
      r = core(y) + depth * prof * fade;
    }
    return [Math.cos(th) * r, y, Math.sin(th) * r];
  });
  const body = new Mesh(g, m.titanium);
  const cap = new Mesh(new CylinderGeometry(rPlat, rPlat, 0.02, 48), m.titaniumDark);
  const grp = new Group();
  grp.add(body, cap);
  return grp;
}
function abutment(m) {
  const pts = [[0, -1.2], [1.6, -1.2], [1.6, 0], [2.0, 0.3], [2.35, 1.3], [2.35, 2.5], [1.95, 2.55], [1.6, 6.6], [1.2, 6.9], [0, 6.95]].map(([r, y]) => new Vector2(r, y));
  return new Mesh(new LatheGeometry(pts, 64), m.titanium);
}
/* A schematic tooth crown (molar/premolar) built from a deformed sphere. */
function crownGeo(w, d, h, cusps = 4, prepared = false) {
  const g = new SphereGeometry(1, 72, 56);
  const p = g.attributes.position;
  const cuspPts = cusps === 4 ? [[0.42, 0.42], [-0.42, 0.42], [0.42, -0.42], [-0.42, -0.42]] : [[0, 0.45], [0, -0.45]];
  for (let i = 0; i < p.count; i++) {
    let x = p.getX(i), y = p.getY(i), z = p.getZ(i);
    const sx = Math.sign(x) * Math.pow(Math.abs(x), 0.72), sz = Math.sign(z) * Math.pow(Math.abs(z), 0.72);
    let yy;
    if (y < 0) {
      const t = -y; // 0 equator .. 1 bottom
      const shrink = prepared ? 1 - 0.1 * t : 1 - 0.22 * t * t;
      x = sx * shrink; z = sz * shrink;
      yy = -t * 0.58;
    } else {
      x = sx * (prepared ? 1 - 0.3 * y : 1 - 0.08 * y); z = sz * (prepared ? 1 - 0.3 * y : 1 - 0.08 * y);
      yy = Math.pow(y, 0.55) * (prepared ? 0.3 : 0.32);
      if (!prepared && y > 0.25) {
        let bump = 0;
        for (const [cx, cz] of cuspPts) bump += Math.exp(-((x - cx) ** 2 + (z - cz) ** 2) / 0.09);
        const fossa = Math.exp(-(x * x + z * z) / 0.06) * 0.12 + Math.exp(-(x * x) / 0.01) * 0.05 + Math.exp(-(z * z) / 0.01) * 0.05;
        yy += (bump * 0.11 - fossa) * (y - 0.25) / 0.75 * 1.4;
      }
    }
    p.setXYZ(i, x * w / 2, (yy + 0.58) * h / 0.9, z * d / 2);
  }
  g.computeVertexNormals();
  return g; // base (cervical) at y≈0, top at y≈h
}
function rootGeo(r, len, splay = 0) {
  const pts = [];
  for (let i = 0; i <= 24; i++) {
    const t = i / 24;
    pts.push(new Vector2(Math.max(0.05, r * (1 - Math.pow(t, 1.6) * 0.92)), -t * len));
  }
  const g = new LatheGeometry(pts.reverse(), 40);
  if (splay) g.rotateZ(splay);
  return g;
}
function naturalTooth(m, w, h, rootLen, twoRoots) {
  const grp = new Group();
  const crown = new Mesh(crownGeo(w, w * 0.95, h, twoRoots ? 4 : 2), m.enamel);
  crown.position.y = 0.6;
  grp.add(crown);
  if (twoRoots) {
    const r1 = new Mesh(rootGeo(w * 0.2, rootLen, 0.12), m.root); r1.position.set(-w * 0.2, 1, 0);
    const r2 = new Mesh(rootGeo(w * 0.2, rootLen, -0.12), m.root); r2.position.set(w * 0.2, 1, 0);
    grp.add(r1, r2);
  } else {
    const r = new Mesh(rootGeo(w * 0.3, rootLen), m.root); r.position.y = 1; grp.add(r);
  }
  grp.userData.crown = crown;
  return grp;
}

/* Sectioned alveolar ridge: lingual half of the ridge, cut face at z=0, facing the viewer. */
function ridge(m, L = 40) {
  const tex = trabecularTexture();
  m.cancellous.map = tex; m.cancellous.needsUpdate = true;
  // half profile in (s = lingual depth >= 0, y)
  const half = (inset, top, bottom, halfW) => {
    const s = new Shape();
    s.moveTo(0, bottom + inset);
    s.lineTo(halfW - 1.5 - inset, bottom + inset);
    s.bezierCurveTo(halfW + 0.6 - inset, bottom + 3, halfW + 0.8 - inset, top - 6, halfW - 0.5 - inset, top - 2.2 - inset * 0.3);
    s.bezierCurveTo(halfW - 1.4 - inset, top - inset * 0.6, 2.2, top - inset, 0, top - inset);
    s.lineTo(0, bottom + inset);
    return s;
  };
  const build = (shape, mat, off) => {
    const g = new ExtrudeGeometry(shape, { depth: L, bevelEnabled: false, curveSegments: 24 });
    // shape x (depth into lingual) -> world -z ; extrusion -> world x
    g.rotateY(Math.PI / 2); // x->-z, z->x
    g.translate(-L / 2, 0, -off);
    return new Mesh(g, mat);
  };
  const grp = new Group();
  const cort = build(half(0, 0, -17, 6), m.cortical, 0);
  const canc = build(half(1.6, 0, -17, 6), m.cancellous, -0.03);
  const gumShape = new Shape();
  gumShape.moveTo(0, -0.3); gumShape.lineTo(2.2, -0.3);
  gumShape.bezierCurveTo(4.6, -0.6, 5.4, -1.5, 5.6, -4.2);
  gumShape.lineTo(6.6, -4.4);
  gumShape.bezierCurveTo(6.5, -1, 5.2, 2.2, 2.4, 2.6);
  gumShape.lineTo(0, 2.7); gumShape.lineTo(0, -0.3);
  const gum = build(gumShape, m.gum, -0.06);
  grp.add(cort, canc, gum);
  grp.userData = { cort, canc, gum };
  return grp;
}

/* ---------------- shared stage ---------------- */
function createStage(container, opts) {
  const renderer = new WebGLRenderer({ antialias: true, alpha: true, powerPreference: "low-power" });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, opts.maxDpr || 1.75));
  renderer.outputColorSpace = SRGBColorSpace;
  renderer.toneMapping = ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  renderer.domElement.setAttribute("aria-hidden", "true");
  container.appendChild(renderer.domElement);
  const scene = new Scene();
  const pmrem = new PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  scene.add(new AmbientLight(0xffffff, 0.25));
  const key = new DirectionalLight(0xffffff, 1.1); key.position.set(20, 40, 30); scene.add(key);
  const camera = new PerspectiveCamera(32, 1, 0.5, 600);
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = !REDUCED;
  controls.dampingFactor = 0.09;
  controls.enablePan = false;
  controls.rotateSpeed = 0.7;
  controls.zoomSpeed = 0.6;

  let w = 0, h = 0, raf = 0, visible = true, dirty = true, anims = [], autoRotate = false, idleT = 0;
  function resize() {
    const r = container.getBoundingClientRect();
    if (!r.width || !r.height) return;
    w = r.width; h = r.height;
    renderer.setSize(w, h, false);
    renderer.domElement.style.width = "100%"; renderer.domElement.style.height = "100%";
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    dirty = true; kick();
  }
  const ro = new ResizeObserver(resize); ro.observe(container);
  const io = new IntersectionObserver((e) => { visible = e[0].isIntersecting; if (visible) kick(); }, { threshold: 0.01 });
  io.observe(container);
  controls.addEventListener("change", () => { dirty = true; kick(); });
  controls.addEventListener("start", () => { autoRotate = false; opts.onEvent && opts.onEvent("rotate"); });

  let last = performance.now();
  function frame(now) {
    raf = 0;
    const dt = Math.min(0.05, (now - last) / 1000); last = now;
    let active = false;
    if (anims.length) {
      const cur = anims; anims = [];
      const keep = cur.filter((a) => {
        a.t = REDUCED ? 1 : Math.min(1, a.t + dt / a.dur);
        a.fn(ease(a.t));
        if (a.t >= 1) { a.done && a.done(); return false; }
        return true;
      });
      anims = keep.concat(anims);
      active = true; dirty = true;
    }
    if (autoRotate && !REDUCED) {
      idleT += dt;
      controls.autoRotate = true; controls.autoRotateSpeed = 0.9;
      active = true;
    } else controls.autoRotate = false;
    if (controls.update()) dirty = true;
    if (controls.enableDamping) active = active || dirty;
    if (dirty) { renderer.render(scene, camera); dirty = false; }
    if ((active || anims.length) && visible) kick();
  }
  function kick() { if (!raf && visible) { last = performance.now(); raf = requestAnimationFrame(frame); } }
  function animate(dur, fn, done) { anims.push({ t: 0, dur, fn, done }); kick(); }
  function frameObject(obj, dist = 1.0, target, fixedSize) {
    const box = new Box3().setFromObject(obj);
    const c = target || box.getCenter(new Vector3());
    const size = fixedSize || box.getSize(new Vector3()).length();
    controls.target.copy(c);
    const dir = new Vector3(0.55, 0.32, 1).normalize();
    camera.position.copy(c).addScaledVector(dir, size * dist * (camera.aspect < 1.1 ? 1.8 : 1));
    controls.minDistance = size * 0.45; controls.maxDistance = size * 2.4;
    dirty = true; kick();
  }
  function dispose() {
    cancelAnimationFrame(raf); ro.disconnect(); io.disconnect(); controls.dispose();
    scene.traverse((o) => { if (o.geometry) o.geometry.dispose(); });
    pmrem.dispose(); renderer.dispose();
    renderer.domElement.remove();
  }
  return {
    renderer, scene, camera, controls, animate, frameObject, dispose,
    invalidate() { dirty = true; kick(); },
    setAutoRotate(v) { autoRotate = v; kick(); },
    resize,
  };
}
const fade = (mat, to, S, dur = 0.5) => { const from = mat.opacity; mat.transparent = true; S.animate(dur, (t) => { mat.opacity = lerp(from, to, t); }); };
const show = (obj, v) => { obj.visible = v; };

/* =====================================================================
   SCENE 1 — implant explorer + guided-surgery sequence (same model)
   ===================================================================== */
function implantScene(container, opts) {
  const S = createStage(container, opts);
  const m = mats();
  const root = new Group();
  S.scene.add(root);
  const bone = ridge(m, 38);
  root.add(bone);
  // neighbours: premolar (mesial) and second molar (distal)
  const pre = naturalTooth(m, 7.2, 7.6, 13, false); pre.position.set(-9.6, 1.4, 0);
  const mol = naturalTooth(m, 10.2, 7.2, 12, true); mol.position.set(10.6, 1.4, 0);
  root.add(pre, mol);
  // prepared stumps for bridge mode
  const stump = (w, h) => { const s = new Mesh(crownGeo(w * 0.72, w * 0.68, h * 0.72, 2, true), m.dentin); s.position.y = 0.6; return s; };
  const preStump = stump(7.2, 7.6); pre.add(preStump);
  const molStump = stump(10.2, 7.2); mol.add(molStump);
  preStump.visible = molStump.visible = false;
  // implant assembly
  const fixture = implantFixture(m, 10, 2.4);
  const abut = abutment(m); abut.scale.setScalar(0.95);
  const crown = new Mesh(crownGeo(10.4, 10, 7.4, 4), m.ceramic);
  const implant = new Group();
  implant.add(fixture, abut, crown);
  implant.position.set(0.4, 0, 0);
  root.add(implant);
  const REST = { fix: 0, abut: 0.15, crown: 2.0 };
  fixture.position.y = REST.fix; abut.position.y = REST.abut; crown.position.y = REST.crown;
  // bridge: three joined crowns over the stumps + pontic
  const bridge = new Group();
  [[-9.6, 7.4, 7.6, 2], [0.4, 10.2, 7.0, 4], [10.6, 10.2, 7.2, 4]].forEach(([x, w, hh, c], i) => {
    const b = new Mesh(crownGeo(w + 0.3, w * 0.97, hh, c), m.ceramic);
    b.position.set(x, i === 1 ? 2.4 : 2.0, 0);
    bridge.add(b);
  });
  const conn = new Mesh(new CylinderGeometry(1.6, 1.6, 21, 20), m.ceramic); conn.rotation.z = Math.PI / 2; conn.position.set(0.5, 6.1, 0); bridge.add(conn);
  bridge.visible = false;
  root.add(bridge);

  // guided-surgery extras
  const ghostCrown = new Mesh(crown.geometry, m.ghost); ghostCrown.position.set(0.4, REST.crown, 0);
  const ghostImpl = new Mesh(new CylinderGeometry(2.4, 1.6, 10, 32), m.ghost); ghostImpl.position.set(0.4, -5, 0);
  const axis = new Mesh(new CylinderGeometry(0.08, 0.08, 34, 8), new MeshBasicMaterial({ color: 0x0154ba }));
  axis.position.set(0.4, 0, 0);
  const guide = new Group();
  const gShape = new Shape();
  gShape.moveTo(-16.5, 0); gShape.lineTo(16.5, 0); gShape.lineTo(16.5, 4); gShape.lineTo(-16.5, 4); gShape.lineTo(-16.5, 0);
  const gGeo = new ExtrudeGeometry(gShape, { depth: 13, bevelEnabled: true, bevelSize: 1.2, bevelThickness: 1.2, bevelSegments: 4 });
  gGeo.translate(0, 0, -6.5);
  const gBody = new Mesh(gGeo, m.guide); gBody.position.y = 8.6;
  const sleeve = new Mesh(new CylinderGeometry(2.9, 2.9, 5.6, 40, 1, true), m.titanium); sleeve.position.set(0.4, 10.6, 0);
  const sleeveRim = new Mesh(new TorusGeometry(2.9, 0.35, 12, 40), m.titanium); sleeveRim.rotation.x = Math.PI / 2; sleeveRim.position.set(0.4, 13.4, 0);
  guide.add(gBody, sleeve, sleeveRim);
  const scanPlane = new Mesh(new PlaneGeometry(44, 30), m.scanLine); scanPlane.rotation.y = Math.PI / 2;
  const scanWire = new LineSegments(new WireframeGeometry(crownGeo(10.2, 9.9, 7.2, 4)), new LineBasicMaterial({ color: 0x38a3ff, transparent: true, opacity: 0.6 }));
  const wireGroup = new Group();
  [pre, mol].forEach((t) => {
    const wf = new LineSegments(new EdgesGeometry(t.userData.crown.geometry, 18), new LineBasicMaterial({ color: 0x38a3ff, transparent: true, opacity: 0.85 }));
    wf.position.copy(t.position).add(t.userData.crown.position);
    wireGroup.add(wf);
  });
  scanWire.visible = false;
  const gumWire = new LineSegments(new EdgesGeometry(bone.userData.gum.geometry, 10), new LineBasicMaterial({ color: 0x38a3ff, transparent: true, opacity: 0.6 }));
  wireGroup.add(gumWire);
  [ghostCrown, ghostImpl, axis, guide, scanPlane, wireGroup].forEach((o) => { o.visible = false; root.add(o); });
  root.add(scanWire);

  S.frameObject(root, 1, new Vector3(2.5, 0, 0), 40);
  const state = { mode: "implant", tissue: "on", exploded: false };

  function setTissue(v) {
    state.tissue = v;
    const o = v === "on" ? 1 : v === "ghost" ? 0.22 : 0;
    [m.gum, m.cortical, m.cancellous].forEach((mm) => { mm.depthWrite = o > 0.9; fade(mm, o, S, 0.45); });
    bone.visible = true;
    if (o === 0) S.animate(0.5, () => {}, () => { bone.visible = state.tissue !== "off" ? true : false; S.invalidate(); });
  }
  function explode(on) {
    state.exploded = on;
    const from = { a: abut.position.y, c: crown.position.y, f: fixture.position.y };
    const to = on ? { f: 0, a: 5.5, c: 11 } : { f: REST.fix, a: REST.abut, c: REST.crown };
    S.animate(0.9, (t) => { fixture.position.y = lerp(from.f, to.f, t); abut.position.y = lerp(from.a, to.a, t); crown.position.y = lerp(from.c, to.c, t); });
  }
  function assemble() {
    // educational assembly: parts come in one after another, from above
    fixture.position.y = 14; abut.position.y = 22; crown.position.y = 30;
    fixture.visible = abut.visible = crown.visible = true;
    S.animate(0.9, (t) => { fixture.position.y = lerp(14, REST.fix, t); }, () =>
      S.animate(0.7, (t) => { abut.position.y = lerp(22, REST.abut, t); }, () =>
        S.animate(0.8, (t) => { crown.position.y = lerp(30, REST.crown, t); })));
    state.exploded = false;
  }
  function setMode(mode) {
    state.mode = mode;
    const isB = mode === "bridge";
    implant.visible = !isB;
    bridge.visible = isB;
    // bridge needs the neighbours reduced: show prepared stumps under the bridge
    pre.userData.crown.visible = mol.userData.crown.visible = !isB;
    preStump.visible = molStump.visible = isB;
    if (isB) { bridge.position.y = 9; S.animate(0.8, (t) => { bridge.position.y = lerp(9, 0, t); }); }
    S.invalidate();
  }
  function resetGuided() {
    [ghostCrown, ghostImpl, axis, guide, scanPlane, wireGroup, scanWire].forEach((o) => (o.visible = false));
    pre.visible = mol.visible = true;
    [m.gum, m.cortical, m.cancellous].forEach((mm) => { mm.opacity = 1; mm.depthWrite = true; });
    bone.visible = true;
    m.enamel.opacity = 1; m.root.opacity = 1;
    implant.visible = true; bridge.visible = false;
    pre.userData.crown.visible = mol.userData.crown.visible = true; preStump.visible = molStump.visible = false;
    fixture.visible = abut.visible = crown.visible = true;
    fixture.position.y = REST.fix; abut.position.y = REST.abut; crown.position.y = REST.crown;
  }
  /* guided stages: 0 CBCT · 1 scan · 2 planning · 3 guide · 4 placement · 5 restoration */
  function stage(n) {
    resetGuided();
    state.stage = n;
    if (n === 0) {
      // CBCT: bone and roots in X-ray tones, scanning plane sweeps
      implant.visible = false;
      [m.gum].forEach((mm) => { mm.opacity = 0; });
      bone.userData.gum.visible = false;
      m.cortical.opacity = 0.55; m.cancellous.opacity = 0.45;
      scanPlane.visible = true;
      S.animate(2.4, (t) => { scanPlane.position.x = lerp(-20, 20, t); }, () => { if (REDUCED) scanPlane.position.x = 2; else scanPlane.visible = false; S.invalidate(); });
    } else {
      bone.userData.gum.visible = true;
    }
    if (n === 1) {
      // intraoral scan: surface only (teeth crowns + gum), wireframe sweep
      implant.visible = false;
      m.cortical.opacity = 0.12; m.cancellous.opacity = 0.08; m.cortical.depthWrite = m.cancellous.depthWrite = false;
      wireGroup.visible = true;
      scanPlane.visible = true;
      S.animate(2.2, (t) => { scanPlane.position.x = lerp(-20, 20, t); }, () => { if (REDUCED) scanPlane.position.x = 6; else scanPlane.visible = false; S.invalidate(); });
    }
    if (n === 2) {
      // prosthetically driven planning: crown position first, then the implant axis under it
      implant.visible = false;
      m.gum.opacity = 0.35; m.gum.depthWrite = false;
      m.cortical.opacity = 0.5; m.cancellous.opacity = 0.5;
      ghostCrown.visible = true; ghostCrown.position.y = 12;
      S.animate(0.8, (t) => { ghostCrown.position.y = lerp(12, REST.crown, t); }, () => {
        axis.visible = true; ghostImpl.visible = true; ghostImpl.scale.set(1, 0.01, 1);
        S.animate(0.9, (t) => { ghostImpl.scale.y = Math.max(0.01, t); ghostImpl.position.y = -5 * t; });
      });
    }
    if (n === 3) {
      implant.visible = false;
      guide.visible = true; ghostImpl.visible = true; ghostImpl.position.y = -5;
      guide.position.y = 14;
      S.animate(0.9, (t) => { guide.position.y = lerp(14, 0, t); });
    }
    if (n === 4) {
      guide.visible = true; abut.visible = false; crown.visible = false;
      m.gum.opacity = 0.5; m.gum.depthWrite = false;
      fixture.position.y = 16;
      S.animate(1.6, (t) => { fixture.position.y = lerp(16, REST.fix, t); });
    }
    if (n === 5) {
      guide.visible = true;
      fixture.position.y = REST.fix; abut.position.y = 10; crown.position.y = 20;
      S.animate(0.6, (t) => { guide.position.y = lerp(0, 18, t); m.guide.opacity = lerp(0.55, 0, t); }, () => {
        guide.visible = false; m.guide.opacity = 0.55; guide.position.y = 0;
        S.animate(0.7, (t) => { abut.position.y = lerp(10, REST.abut, t); }, () =>
          S.animate(0.8, (t) => { crown.position.y = lerp(20, REST.crown, t); }));
      });
    }
    S.invalidate();
  }
  if (opts.scene === "guided") stage(0);
  else if (!REDUCED) assemble();
  return {
    set(k, v) {
      if (k === "mode") setMode(v);
      if (k === "tissue") setTissue(v);
      if (k === "explode") explode(v === "on" || v === true);
      if (k === "assemble") assemble();
      if (k === "stage") stage(+v);
      if (k === "rotate") { S.controls.rotateLeft ? S.controls.rotateLeft(+v) : null; S.invalidate(); }
      if (k === "reset") S.frameObject(root, 1, new Vector3(2.5, 0, 0), 40);
    },
    rotateBy(a) { rotateCamera(S, a); },
    dispose: S.dispose,
    stage: S,
  };
}
function rotateCamera(S, a) {
  const c = S.controls.target, p = S.camera.position.clone().sub(c);
  const from = Math.atan2(p.x, p.z), r = Math.hypot(p.x, p.z);
  S.animate(0.5, (t) => {
    const ang = from + a * t;
    S.camera.position.set(c.x + Math.sin(ang) * r, S.camera.position.y, c.z + Math.cos(ang) * r);
    S.camera.lookAt(c);
  });
}

/* =====================================================================
   SCENE 2 — veneer / crown cross-section of an upper central incisor
   (labio-lingual section, extruded into a thin slab you can rotate)
   ===================================================================== */
function splinePts(ctrl, n) {
  const c = new SplineCurve(ctrl.map(([x, y]) => new Vector2(x, y)));
  return c.getSpacedPoints(n);
}
/* Upper central incisor, labio-lingual section (mm). Schematic, not a patient. */
const LAB = [[0.35, 10.5], [1.0, 9.9], [1.7, 8.4], [2.3, 6.4], [2.75, 4.0], [3.0, 1.9], [3.05, 0.0], [2.9, -2], [2.6, -5], [2.0, -8.5], [1.2, -11.5], [0.25, -13]];
const LIN = [[-0.35, 10.5], [-0.8, 9.8], [-1.0, 8.0], [-1.15, 6.0], [-1.55, 4.0], [-2.4, 2.5], [-3.05, 1.0], [-3.15, 0.0], [-3.0, -2], [-2.6, -5], [-2.0, -8.5], [-1.2, -11.5], [-0.25, -13]];
function offsetCurve(pts, thick) {
  // positive thick moves toward the tooth's inside (x→0); negative moves outward
  return pts.map((p, i) => {
    const a = pts[Math.max(0, i - 1)], b = pts[Math.min(pts.length - 1, i + 1)];
    let nx = -(b.y - a.y), ny = b.x - a.x; const len = Math.hypot(nx, ny) || 1; nx /= len; ny /= len;
    if (nx * p.x > 0) { nx = -nx; ny = -ny; }
    const d = thick(p, i);
    return new Vector2(p.x + nx * d, p.y + ny * d);
  });
}
function band(outer, inner) {
  // closed area between two open polylines that run in the same direction
  const s = new Shape();
  s.moveTo(outer[0].x, outer[0].y);
  for (let i = 1; i < outer.length; i++) s.lineTo(outer[i].x, outer[i].y);
  for (let i = inner.length - 1; i >= 0; i--) s.lineTo(inner[i].x, inner[i].y);
  s.closePath();
  return s;
}
function veneerScene(container, opts) {
  const S = createStage(container, opts);
  const m = mats();
  const root = new Group();
  S.scene.add(root);
  const DEPTH = 6;
  const ex = (shape, mat, z = 0) => { const g = new ExtrudeGeometry(shape, { depth: DEPTH, bevelEnabled: false, curveSegments: 4 }); g.translate(0, 0, -DEPTH / 2 + z); return new Mesh(g, mat); };
  const N = 90;
  const lab = splinePts(LAB, N), lin = splinePts(LIN, N);
  const crownOf = (arr, y0) => arr.filter((p) => p.y >= y0);
  // outline running lingual-cervical → incisal → labial-cervical (above y0)
  const around = (L, G, y0) => crownOf(G, y0).slice().reverse().concat(crownOf(L, y0));
  // enamel: ~0.3 mm at the CEJ rising to ~1 mm mid-crown, thicker toward the incisal edge (schematic)
  const enT = (p) => (p.y <= 0 ? 0 : Math.min(1.05, 0.15 + p.y * 0.28));
  const dLab = offsetCurve(lab, enT), dLin = offsetCurve(lin, (p) => enT(p) * 0.8);
  const DTOP = 8.7;
  const capY = (arr) => arr.map((p) => new Vector2(p.x, Math.min(p.y, DTOP)));
  const toothOutline = band(lab.slice().reverse(), lin.slice().reverse()); // full outline
  const dentinShape = band(capY(dLab).reverse(), capY(dLin).reverse());
  const enamelMesh = ex(toothOutline, m.enamel, 0);
  const dentin = ex(dentinShape, m.dentin, 0.03);
  const mid = lab.map((p, i) => ({ y: p.y, c: (p.x + lin[i].x) / 2, h: (p.x - lin[i].x) / 2 }));
  const pl = [], pg = [];
  mid.forEach((q) => { if (q.y < 6.6 && q.y > -12.2) { const k = 0.2 * Math.min(1, (6.6 - q.y) / 2.2) + 0.02; pl.push(new Vector2(q.c + q.h * k, q.y)); pg.push(new Vector2(q.c - q.h * k, q.y)); } });
  const pulp = ex(band(pl, pg), m.pulp, 0.06);
  // context: gingiva and alveolar bone, following the tooth outline
  const seg = (arr, y1, y2) => arr.filter((p) => p.y <= y1 && p.y >= y2);
  const gumL = ex(band(offsetCurve(seg(lab, 1.4, -3.4), (p) => -(0.2 + 1.3 * Math.min(1, (1.4 - p.y) / 1.5))), offsetCurve(seg(lab, 1.4, -3.4), () => -0.01)), m.gum, 0.01);
  const gumG = ex(band(offsetCurve(seg(lin, 1.2, -3.4), (p) => -(0.2 + 1.6 * Math.min(1, (1.2 - p.y) / 1.5))), offsetCurve(seg(lin, 1.2, -3.4), () => -0.01)), m.gum, 0.01);
  const boneL = ex(band(offsetCurve(seg(lab, -2.0, -13), () => -0.9), offsetCurve(seg(lab, -2.0, -13), () => -0.02)), m.cortical, 0.01);
  const boneG = ex(band(offsetCurve(seg(lin, -2.0, -13), () => -2.2), offsetCurve(seg(lin, -2.0, -13), () => -0.02)), m.cortical, 0.01);
  root.add(enamelMesh, dentin, pulp, gumL, gumG, boneL, boneG);

  const resto = new Group(); root.add(resto);
  function clear() { while (resto.children.length) resto.children.pop().geometry.dispose(); }
  m.restoration.depthWrite = true;
  function build(opt) {
    clear();
    enamelMesh.visible = true;
    if (opt === "composite") {
      // additive composite on the labial face: usually little or no reduction (case dependent)
      const base = crownOf(lab, 0.5);
      const out = offsetCurve(base, (p) => -(0.25 + 0.45 * Math.min(1, (p.y - 0.5) / 3)));
      resto.add(ex(band(out, base), m.restoration, 0.09));
    }
    if (opt === "ceramic") {
      // conservative labial reduction (mostly within enamel) + thin ceramic shell restoring the contour
      const base = crownOf(lab, 0.5);
      const prep = offsetCurve(base, (p) => 0.2 + 0.3 * Math.min(1, (p.y - 0.5) / 3));
      const out = offsetCurve(base, () => -0.05);
      const keep = band(prep.slice().reverse().concat(lin.filter((p) => p.y < 0.5).length ? [] : []), []);
      void keep;
      // enamel remaining = outline with the labial face replaced by the prepared surface
      enamelMesh.visible = false;
      const outline = prep.slice().reverse().concat(lab.filter((p) => p.y < 0.5));
      resto.add(ex(band(outline, lin.slice()), m.enamel, 0.0));
      resto.add(ex(band(out, prep), m.restoration, 0.09));
    }
    if (opt === "crown") {
      // full coverage: reduction all around + incisally, crown restores the full contour
      const y0 = 0.4;
      const red = (p) => 1.15 + (p.y > 7.6 ? (p.y - 7.6) * 0.55 : 0);
      const core = around(offsetCurve(lab, red), offsetCurve(lin, red), y0).map((p) => new Vector2(p.x, Math.min(p.y, 8.4)));
      const outer = around(offsetCurve(lab, () => -0.04), offsetCurve(lin, () => -0.04), y0);
      enamelMesh.visible = false;
      resto.add(ex(band(outer, core), m.restoration, 0.09));
      // prepared tooth (dentin core) + root below
      const rootOutline = band(lab.filter((p) => p.y < y0 + 0.05).slice().reverse(), lin.filter((p) => p.y < y0 + 0.05).slice().reverse());
      resto.add(ex(rootOutline, m.root, 0.0));
    }
    S.animate(0.6, (t) => { resto.scale.set(1, 1, Math.max(0.05, t)); });
    S.invalidate();
  }
  const target = new Vector3(0.3, 0.2, 0);
  function home() {
    S.controls.target.copy(target);
    const dir = new Vector3(0.42, 0.16, 1).normalize();
    S.camera.position.copy(target).addScaledVector(dir, S.camera.aspect < 1.1 ? 56 : 33);
    S.controls.minDistance = 18; S.controls.maxDistance = 90;
    S.invalidate();
  }
  home();
  return {
    set(k, v) {
      if (k === "layer") build(v);
      if (k === "reset") home();
    },
    rotateBy(a) { rotateCamera(S, a); },
    dispose: S.dispose,
    stage: S,
  };
}

export function supported() {
  try {
    const c = document.createElement("canvas");
    return !!(window.WebGLRenderingContext && (c.getContext("webgl2") || c.getContext("webgl")));
  } catch (e) { return false; }
}
export function mount(container, opts = {}) {
  if (opts.scene === "veneer") return veneerScene(container, opts);
  return implantScene(container, opts);
}
