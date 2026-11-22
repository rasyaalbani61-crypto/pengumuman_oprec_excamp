// =====================================================
//  DATA PENDAFTAR YANG LOLOS
//  Sumber: HASIL LOLOS WAWANCARA EXCAMP 2027.
//  Mau koreksi nama? Edit langsung di bawah ini.
//  Mau nambah orang? Tinggal tambah satu string lagi.
//  Tulis nama persis sama dengan yang mau ditampilkan.
// =====================================================
const DATA = [
  { nama: "Sie Acara",
    anggota: [
      "ianatul khoiriyah",
      "Danial Maulana Iqbal Kanzul Fikri",
      "Anggun cahaya putri Candra Dewi"
    ] },
  { nama: "Sie Humas",
    anggota: [
      "Zahwa Putri Pratiwi",
      "Dewi Wulan Sari",
      "Sarius Sakoti"
    ] },
  { nama: "Sie Sponsorship",
    anggota: [
      "Lybrada Teza",
      "Safira Tursina Mahardika",
      "Ahmad Gally Falentino Akbar",
      "Noval Maulana Brilian Syaputra",
      "Kharisa Pradita Putri"
    ] },
  { nama: "Sie Perlengkapan",
    anggota: [
      "Moh. Zacky Aditya",
      "Moh. Rico Anggara",
      "Muhammad Egy Kurniawan",
      "M. Fakhriy zahron Kurniawan",
      "Muhammad Izzudin Azril Fareza"
    ] },
  { nama: "Sie Konsumsi",
    anggota: [
      "Fathan Adyatama Hariyadi",
      "Nabilah Khoirun Nisa'",
      "Amanda Nayfa Charista",
      "Elistia Nur Qumairoh",
      "Rekcy Gautha Tigana Bara Kamandhi"
    ] },
  { nama: "Sie Kesekretariatan",
    anggota: [
      "Thaufiq Arya Denata",
      "Mubarokah Sya'diyah",
      "Vega Modok"
    ] },
  { nama: "Sie Korlap",
    anggota: [
      "Moh. Fatihuddin Fawwaz",
      "Akmal Isnu Yudha Baskara",
      "Safira Dwi Puspita",
      "Nadia Nur Ramadhan",
      "Ganda Sura Dwi Surya Putra"
    ] },
  { nama: "Sie PDD",
    anggota: [
      "Aghnia Violeta Setya Aulia",
      "Zahra Faradisa",
      "Zahra Wafiriyah",
      "Keysha Febrianti Sugiarto",
      "Suci Aeni Nur Fatihah",
      "Rahmalya Ainur Mazizah"
    ] }
];

// ===== Warna, kemiringan, dan tempo melayang tiap kotak =====
const WARNA = ["#ff6b6b", "#ffd23f", "#06d6a0", "#ff9f43", "#f78fb3", "#74b9ff", "#c8f169", "#fff1d0"];
const ROT   = [-2.5, 1.8, -1.4, 2.6, 1.6, -2.2, 2.2, -1.6];
const DUR   = [6, 7.2, 5.6, 6.8, 7.5, 5.9, 6.4, 7];

// ===== Ikon tiap sie (SVG) =====
const S = 'fill="#fff" stroke="#07203f" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"';
const IKON = [
  // Acara: mikrofon
  `<svg viewBox="0 0 64 64"><rect x="23" y="7" width="18" height="30" rx="9" ${S}/><path d="M15 30a17 17 0 0 0 34 0" fill="none" stroke="#07203f" stroke-width="3.5" stroke-linecap="round"/><path d="M32 47v10M21 57h22" fill="none" stroke="#07203f" stroke-width="3.5" stroke-linecap="round"/></svg>`,
  // Humas: pengeras suara
  `<svg viewBox="0 0 64 64"><path d="M9 25h13l22-13v40L22 39H9z" ${S}/><path d="M21 39l4 15h9l-4-15" ${S}/><path d="M51 24q7 8 0 16" fill="none" stroke="#07203f" stroke-width="3.5" stroke-linecap="round"/></svg>`,
  // Sponsorship: koin Rp
  `<svg viewBox="0 0 64 64"><circle cx="32" cy="32" r="22" ${S}/><circle cx="32" cy="32" r="15" fill="none" stroke="#07203f" stroke-width="2.5" stroke-dasharray="3 4"/><text x="32" y="39" text-anchor="middle" font-family="Lilita One, sans-serif" font-size="21" fill="#07203f" stroke="none">Rp</text></svg>`,
  // Perlengkapan: kotak perkakas
  `<svg viewBox="0 0 64 64"><path d="M23 24v-6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v6" fill="none" stroke="#07203f" stroke-width="3.5" stroke-linecap="round"/><rect x="7" y="24" width="50" height="30" rx="6" ${S}/><path d="M7 37h50" fill="none" stroke="#07203f" stroke-width="3.5"/><rect x="27" y="32" width="10" height="10" rx="2" fill="#07203f"/></svg>`,
  // Konsumsi: mangkuk dengan uap
  `<svg viewBox="0 0 64 64"><path d="M8 33h48a24 24 0 0 1-48 0z" ${S}/><path d="M22 24q-5-7 0-14M32 24q-5-7 0-14M42 24q-5-7 0-14" fill="none" stroke="#07203f" stroke-width="3.5" stroke-linecap="round"/></svg>`,
  // Kesekretariatan: dokumen
  `<svg viewBox="0 0 64 64"><path d="M15 7h26l11 11v39H15z" ${S}/><path d="M41 7v11h11" fill="none" stroke="#07203f" stroke-width="3.5" stroke-linejoin="round"/><path d="M23 31h22M23 39h22M23 47h13" fill="none" stroke="#07203f" stroke-width="3.5" stroke-linecap="round"/></svg>`,
  // Korlap: bendera
  `<svg viewBox="0 0 64 64"><path d="M15 59V7" fill="none" stroke="#07203f" stroke-width="3.5" stroke-linecap="round"/><path d="M15 10h34l-9 11 9 11H15z" ${S}/></svg>`,
  // PDD: kamera
  `<svg viewBox="0 0 64 64"><path d="M21 20l4-8h14l4 8" ${S}/><rect x="6" y="20" width="52" height="35" rx="7" ${S}/><circle cx="32" cy="37" r="10.5" ${S}/><circle cx="32" cy="37" r="4" fill="#07203f"/><circle cx="50" cy="28" r="2.5" fill="#07203f"/></svg>`
];

const $ = (s) => document.querySelector(s);

// ===== HURUF JUDUL BERGELOMBANG =====
document.querySelectorAll("[data-huruf]").forEach((el) => {
  const teks = el.textContent;
  el.textContent = "";
  [...teks].forEach((c, i) => {
    const s = document.createElement("span");
    s.className = "huruf";
    s.style.setProperty("--i", i);
    s.textContent = c === " " ? "\u00A0" : c;
    el.appendChild(s);
  });
});

// ===== EFEK: GELEMBUNG & KOIN =====
function semburGelembung(x, y, n = 6, sebar = 40) {
  for (let i = 0; i < n; i++) {
    const g = document.createElement("span");
    g.className = "gel-klik";
    const u = 6 + Math.random() * 18;
    g.style.cssText = `width:${u}px;height:${u}px;left:${x}px;top:${y}px`;
    document.body.appendChild(g);
    const dx = (Math.random() - 0.5) * sebar * 2;
    const dy = -(80 + Math.random() * 180);
    g.animate(
      [
        { transform: "translate(-50%,-50%) scale(.4)", opacity: 0.95 },
        { transform: `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px)) scale(1)`, opacity: 0 }
      ],
      { duration: 900 + Math.random() * 900, easing: "cubic-bezier(.2,.7,.3,1)" }
    ).onfinish = () => g.remove();
  }
}

function semburKoin(x, y) {
  for (let i = 0; i < 18; i++) {
    const k = document.createElement("span");
    k.className = "koin";
    k.style.left = x + "px";
    k.style.top = y + "px";
    document.body.appendChild(k);
    const dx = (Math.random() - 0.5) * 380;
    const naik = 120 + Math.random() * 170;
    const jatuh = 170 + Math.random() * 130;
    const putar = (Math.random() > 0.5 ? 1 : -1) * (360 + Math.random() * 360);
    k.animate(
      [
        { transform: "translate(-50%,-50%) rotate(0deg)", opacity: 1 },
        { transform: `translate(calc(-50% + ${dx * 0.55}px), calc(-50% - ${naik}px)) rotate(${putar * 0.5}deg)`, opacity: 1, offset: 0.4 },
        { transform: `translate(calc(-50% + ${dx}px), calc(-50% + ${jatuh}px)) rotate(${putar}deg)`, opacity: 0 }
      ],
      { duration: 1000 + Math.random() * 700, easing: "ease-in-out" }
    ).onfinish = () => k.remove();
  }
}

document.addEventListener("click", (e) => semburGelembung(e.clientX, e.clientY, 4, 30));

// ===== INTRO =====
const intro = $("#intro");
$("#mulai").addEventListener("click", (e) => {
  const r = e.currentTarget.getBoundingClientRect();
  semburGelembung(r.left + r.width / 2, r.top, 40, 120);
  intro.classList.add("selam");
  setTimeout(() => {
    document.body.classList.remove("kunci");
    document.body.classList.add("mulai");
  }, 900);
  setTimeout(() => intro.classList.add("hilang"), 2000);
});

// ===== BUAT 8 KOTAK =====
const grid = $("#grid");
DATA.forEach((sie, i) => {
  const slot = document.createElement("div");
  slot.className = "slot";
  slot.style.setProperty("--d", (i % 4) * 0.12 + "s");

  const b = document.createElement("button");
  b.type = "button";
  b.className = "kotak";
  b.style.setProperty("--warna", WARNA[i % WARNA.length]);
  b.style.setProperty("--rot", ROT[i % ROT.length] + "deg");
  b.style.setProperty("--dur", DUR[i % DUR.length] + "s");
  b.style.setProperty("--dl", -(i * 0.9) + "s");

  b.innerHTML = `<i class="tali"></i><span class="nomor">${i + 1}</span><span class="ikon">${IKON[i] || ""}</span>`;
  const nama = document.createElement("span");
  nama.className = "nama";
  nama.textContent = sie.nama;
  const info = document.createElement("span");
  info.className = "info";
  info.textContent = sie.anggota.length + " orang lolos";
  b.append(nama, info);

  b.addEventListener("click", (e) => bukaModal(i, null, e.clientX, e.clientY));
  slot.appendChild(b);
  grid.appendChild(slot);
});

// Kotak muncul saat discroll ke area-nya
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) {
        en.target.classList.add("tampil");
        io.unobserve(en.target);
      }
    });
  }, { threshold: 0.15 });
  document.querySelectorAll(".slot").forEach((s) => io.observe(s));
} else {
  document.querySelectorAll(".slot").forEach((s) => s.classList.add("tampil"));
}

// ===== POPUP PETA =====
const modal = $("#modal");
const petaNomor = $("#petaNomor");
const petaJudul = $("#petaJudul");
const petaJumlah = $("#petaJumlah");
const petaDaftar = $("#petaDaftar");
const tombolTutup = $("#tutup");
let fokusSebelum = null;

function bukaModal(idx, sorot, x, y) {
  const sie = DATA[idx];
  petaNomor.textContent = idx + 1;
  petaJudul.textContent = sie.nama;
  petaJumlah.textContent = sie.anggota.length
    ? sie.anggota.length + " orang dinyatakan lolos"
    : "Belum ada data";
  petaDaftar.innerHTML = "";

  if (!sie.anggota.length) {
    const p = document.createElement("p");
    p.className = "kosong-teks";
    p.textContent = "Belum ada nama di sie ini.";
    petaDaftar.replaceWith(p);
  }

  sie.anggota.forEach((n, i) => {
    const li = document.createElement("li");
    li.textContent = n;
    li.style.animationDelay = 0.45 + Math.min(i, 20) * 0.05 + "s";
    if (sorot && n === sorot) li.classList.add("sorot");
    petaDaftar.appendChild(li);
  });

  fokusSebelum = document.activeElement;
  modal.classList.add("buka");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("kunci");
  tombolTutup.focus();
  semburKoin(x ?? innerWidth / 2, y ?? innerHeight / 2);

  const target = petaDaftar.querySelector(".sorot");
  if (target) setTimeout(() => target.scrollIntoView({ block: "center", behavior: "smooth" }), 800);
}

function tutupModal() {
  modal.classList.remove("buka");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("kunci");
  if (fokusSebelum) fokusSebelum.focus();
}

tombolTutup.addEventListener("click", tutupModal);
modal.addEventListener("click", (e) => { if (e.target === modal) tutupModal(); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape" && modal.classList.contains("buka")) tutupModal(); });

// ===== CARI NAMA =====
const semua = DATA.flatMap((s, si) => s.anggota.map((n) => ({ nama: n, sie: si })));
const inputCari = $("#cari");
const hasil = $("#hasil");

inputCari.addEventListener("input", () => {
  const q = inputCari.value.trim().toLowerCase();
  hasil.innerHTML = "";
  if (q.length < 2) { hasil.classList.remove("buka"); return; }

  const cocok = semua.filter((x) => x.nama.toLowerCase().includes(q)).slice(0, 6);
  if (!cocok.length) {
    const li = document.createElement("li");
    li.className = "kosong";
    li.textContent = "Belum ketemu. Cek lagi ejaan namamu ya!";
    hasil.appendChild(li);
  } else {
    cocok.forEach((x) => {
      const li = document.createElement("li");
      const btn = document.createElement("button");
      btn.type = "button";
      const n = document.createElement("span");
      n.textContent = x.nama;
      const s = document.createElement("span");
      s.className = "h-sie";
      s.textContent = DATA[x.sie].nama;
      btn.append(n, s);
      btn.addEventListener("click", (e) => {
        hasil.classList.remove("buka");
        bukaModal(x.sie, x.nama, e.clientX, e.clientY);
      });
      li.appendChild(btn);
      hasil.appendChild(li);
    });
  }
  hasil.classList.add("buka");
});
document.addEventListener("click", (e) => {
  if (!e.target.closest(".cari")) hasil.classList.remove("buka");
});

// ===== GELEMBUNG & PLANKTON LATAR =====
const wrap = $("#gelembungWrap");
for (let i = 0; i < 28; i++) {
  const g = document.createElement("span");
  g.className = "gelembung";
  const u = 6 + Math.random() * 22;
  g.style.width = g.style.height = u + "px";
  g.style.left = Math.random() * 100 + "%";
  g.style.animationDuration = 8 + Math.random() * 14 + "s";
  g.style.animationDelay = -Math.random() * 20 + "s";
  wrap.appendChild(g);
}
const partikel = $("#partikel");
for (let i = 0; i < 45; i++) {
  const p = document.createElement("span");
  p.className = "plankton";
  const u = 2 + Math.random() * 3;
  p.style.width = p.style.height = u + "px";
  p.style.left = Math.random() * 100 + "%";
  p.style.top = Math.random() * 100 + "%";
  p.style.setProperty("--dx", (Math.random() - 0.5) * 160 + "px");
  p.style.setProperty("--dy", (Math.random() - 0.5) * 160 + "px");
  p.style.animationDuration = 8 + Math.random() * 10 + "s";
  p.style.animationDelay = -Math.random() * 12 + "s";
  partikel.appendChild(p);
}

// ===== KEDALAMAN: laut makin gelap saat discroll =====
const gelap = $("#gelap");
const sinar = $("#sinar");
const kaustik = $("#kaustik");
const tanda = $("#tanda");
const kedalaman = $("#kedalaman");
let menunggu = false;

function perbarui() {
  menunggu = false;
  const maks = document.documentElement.scrollHeight - innerHeight;
  const p = maks > 0 ? Math.min(1, Math.max(0, scrollY / maks)) : 0;
  gelap.style.opacity = (0.02 + p * 0.72).toFixed(3);
  sinar.style.opacity = Math.max(0, 1 - p * 1.4).toFixed(3);
  kaustik.style.opacity = Math.max(0, 0.85 - p * 1.3).toFixed(3);
  tanda.style.top = p * 100 + "%";
  kedalaman.textContent = Math.round(p * 300) + " m";
}
addEventListener("scroll", () => {
  if (!menunggu) { menunggu = true; requestAnimationFrame(perbarui); }
}, { passive: true });
addEventListener("resize", perbarui);
perbarui();

// ===== PARALLAX MOUSE =====
if (matchMedia("(hover: hover)").matches) {
  const belakang = $("#belakang");
  const depan = $("#depan");
  let tx = 0, ty = 0, cx = 0, cy = 0;
  addEventListener("mousemove", (e) => {
    tx = e.clientX / innerWidth - 0.5;
    ty = e.clientY / innerHeight - 0.5;
  });
  (function loop() {
    cx += (tx - cx) * 0.06;
    cy += (ty - cy) * 0.06;
    belakang.style.transform = `translate(${-cx * 18}px, ${-cy * 12}px)`;
    depan.style.transform = `translate(${cx * 46}px, ${cy * 30}px)`;
    requestAnimationFrame(loop);
  })();
}

// ===== NAIK KE PERMUKAAN =====
$("#naik").addEventListener("click", () => scrollTo({ top: 0, behavior: "smooth" }));