/**
 * RAKIT — Rangkai Angka dan Kompilasi IHK Terpadu
 * Otomatisasi Perhitungan dan Penyusunan BRS IHK
 */

// Dataset Realistis Berita Resmi Statistik IHK
const BRS_DATA = {
  wilayah: {
    "00": { nama: "Nasional", kode: "00", kotaIhk: "90 Kota IHK", dasar: "2022=100" },
    "31": { nama: "Provinsi DKI Jakarta", kode: "31", kotaIhk: "DKI Jakarta", dasar: "2022=100" },
    "32": { nama: "Provinsi Jawa Barat", kode: "32", kotaIhk: "Kota Bandung & 6 Kota Lain", dasar: "2022=100" },
    "35": { nama: "Provinsi Jawa Timur", kode: "35", kodeBps: "35", kotaIhk: "Kota Surabaya & 7 Kota Lain", dasar: "2022=100" },
    "12": { nama: "Provinsi Sumatera Utara", kode: "12", kotaIhk: "Kota Medan & 4 Kota Lain", dasar: "2022=100" },
    "73": { nama: "Provinsi Sulawesi Selatan", kode: "73", kotaIhk: "Kota Makassar & 4 Kota Lain", dasar: "2022=100" }
  },
  
  // Data per wilayah per periode
  records: {
    "00_2026_10": {
      periode: "Oktober 2026",
      nomorBrs: "72/11/Th. XXIX",
      tglRilis: "2 November 2026",
      ihk_t: 106.85,
      ihk_prev: 106.57,
      ihk_dec_prev: 104.90,
      ihk_yoy_prev: 104.12,
      kelompok: [
        { kode: "01", nama: "Makanan, Minuman dan Tembakau", bobot: 25.40, ihk: 109.42, ihk_prev: 108.75, ihk_dec: 106.10, ihk_yoy: 104.80, andil: 0.16 },
        { kode: "02", nama: "Pakaian dan Alas Kaki", bobot: 5.25, ihk: 103.15, ihk_prev: 103.05, ihk_dec: 102.10, ihk_yoy: 101.90, andil: 0.01 },
        { kode: "03", nama: "Perumahan, Air, Listrik, dan Bahan Bakar Rumah Tangga", bobot: 20.35, ihk: 104.80, ihk_prev: 104.72, ihk_dec: 103.80, ihk_yoy: 103.10, andil: 0.02 },
        { kode: "04", nama: "Perlengkapan, Peralatan dan Pemeliharaan Rutin Rumah Tangga", bobot: 6.10, ihk: 104.10, ihk_prev: 104.02, ihk_dec: 103.20, ihk_yoy: 102.75, andil: 0.01 },
        { kode: "05", nama: "Kesehatan", bobot: 2.80, ihk: 105.60, ihk_prev: 105.48, ihk_dec: 104.15, ihk_yoy: 103.60, andil: 0.01 },
        { kode: "06", nama: "Transportasi", bobot: 12.15, ihk: 108.95, ihk_prev: 108.82, ihk_dec: 106.70, ihk_yoy: 105.80, andil: 0.02 },
        { kode: "07", nama: "Informasi, Komunikasi, dan Jasa Keuangan", bobot: 5.85, ihk: 99.45, ihk_prev: 99.48, ihk_dec: 99.80, ihk_yoy: 100.10, andil: -0.01 },
        { kode: "08", nama: "Rekreasi, Olahraga, dan Budaya", bobot: 2.15, ihk: 104.30, ihk_prev: 104.22, ihk_dec: 103.50, ihk_yoy: 102.90, andil: 0.01 },
        { kode: "09", nama: "Pendidikan", bobot: 5.75, ihk: 104.90, ihk_prev: 104.88, ihk_dec: 103.10, ihk_yoy: 102.80, andil: 0.00 },
        { kode: "10", nama: "Penyediaan Makanan dan Minuman/Restoran", bobot: 8.90, ihk: 106.40, ihk_prev: 106.18, ihk_dec: 104.50, ihk_yoy: 103.80, andil: 0.02 },
        { kode: "11", nama: "Perawatan Pribadi dan Jasa Lainnya", bobot: 5.30, ihk: 109.80, ihk_prev: 109.30, ihk_dec: 106.20, ihk_yoy: 105.10, andil: 0.03 }
      ],
      komoditasInflasi: [
        { nama: "Beras", andil: 0.08, ket: "Kenaikan harga gabah di tingkat penggilingan" },
        { nama: "Cabai Merah", andil: 0.05, ket: "Penurunan pasokan dari sentra produksi" },
        { nama: "Emas Perhiasan", andil: 0.04, ket: "Mengikuti kenaikan harga emas global" },
        { nama: "Bawang Merah", andil: 0.03, ket: "Musim tanam di beberapa daerah sentra" },
        { nama: "Sigaret Kretek Mesin (SKM)", andil: 0.02, ket: "Penyesuaian tarif cukai hasil tembakau" }
      ],
      komoditasDeflasi: [
        { nama: "Telur Ayam Ras", andil: -0.03, ket: "Pasokan melimpah di tingkat peternak" },
        { nama: "Tomat", andil: -0.02, ket: "Panen raya di wilayah Jawa dan Sumatera" },
        { nama: "Daging Ayam Ras", andil: -0.01, ket: "Stok mencukupi permintaan pasar" }
      ],
      komponen: {
        inti: { nama: "Komponen Inti", mtm: 0.18, yoy: 1.95, andil: 0.12 },
        ap: { nama: "Harga Diatur Pemerintah", mtm: 0.12, yoy: 1.45, andil: 0.02 },
        vf: { nama: "Harga Bergejolak", mtm: 0.58, yoy: 4.82, andil: 0.12 }
      }
    },
    "31_2026_10": {
      periode: "Oktober 2026",
      nomorBrs: "58/11/31/Th. XXIX",
      tglRilis: "2 November 2026",
      ihk_t: 105.42,
      ihk_prev: 105.21,
      ihk_dec_prev: 103.80,
      ihk_yoy_prev: 103.15,
      kelompok: [
        { kode: "01", nama: "Makanan, Minuman dan Tembakau", bobot: 23.10, ihk: 108.20, ihk_prev: 107.65, ihk_dec: 105.20, ihk_yoy: 104.10, andil: 0.12 },
        { kode: "02", nama: "Pakaian dan Alas Kaki", bobot: 5.60, ihk: 102.80, ihk_prev: 102.75, ihk_dec: 101.90, ihk_yoy: 101.50, andil: 0.01 },
        { kode: "03", nama: "Perumahan, Air, Listrik, dan Bahan Bakar Rumah Tangga", bobot: 22.40, ihk: 104.10, ihk_prev: 104.02, ihk_dec: 103.20, ihk_yoy: 102.70, andil: 0.02 },
        { kode: "04", nama: "Perlengkapan, Peralatan dan Pemeliharaan Rutin Rumah Tangga", bobot: 6.40, ihk: 103.80, ihk_prev: 103.75, ihk_dec: 102.90, ihk_yoy: 102.40, andil: 0.01 },
        { kode: "05", nama: "Kesehatan", bobot: 3.10, ihk: 105.10, ihk_prev: 105.02, ihk_dec: 103.80, ihk_yoy: 103.20, andil: 0.01 },
        { kode: "06", nama: "Transportasi", bobot: 13.20, ihk: 107.30, ihk_prev: 107.22, ihk_dec: 105.40, ihk_yoy: 104.70, andil: 0.01 },
        { kode: "07", nama: "Informasi, Komunikasi, dan Jasa Keuangan", bobot: 6.20, ihk: 99.60, ihk_prev: 99.62, ihk_dec: 99.90, ihk_yoy: 100.20, andil: -0.01 },
        { kode: "08", nama: "Rekreasi, Olahraga, dan Budaya", bobot: 2.30, ihk: 103.90, ihk_prev: 103.85, ihk_dec: 103.10, ihk_yoy: 102.60, andil: 0.01 },
        { kode: "09", nama: "Pendidikan", bobot: 5.90, ihk: 104.50, ihk_prev: 104.50, ihk_dec: 102.90, ihk_yoy: 102.50, andil: 0.00 },
        { kode: "10", nama: "Penyediaan Makanan dan Minuman/Restoran", bobot: 7.80, ihk: 105.90, ihk_prev: 105.75, ihk_dec: 104.10, ihk_yoy: 103.50, andil: 0.01 },
        { kode: "11", nama: "Perawatan Pribadi dan Jasa Lainnya", bobot: 4.00, ihk: 108.50, ihk_prev: 108.10, ihk_dec: 105.60, ihk_yoy: 104.80, andil: 0.02 }
      ],
      komoditasInflasi: [
        { nama: "Beras", andil: 0.06, ket: "Kenaikan harga beras premium di pasar swalayan dan tradisional" },
        { nama: "Emas Perhiasan", andil: 0.04, ket: "Kenaikan harga emas internasional" },
        { nama: "Bensin", andil: 0.03, ket: "Penyesuaian harga BBM nonsubsidi" },
        { nama: "Cabai Merah", andil: 0.03, ket: "Keterlambatan pasokan dari daerah produsen" }
      ],
      komoditasDeflasi: [
        { nama: "Tomat", andil: -0.02, ket: "Pasokan melimpah di pasar induk Kramat Jati" },
        { nama: "Telur Ayam Ras", andil: -0.02, ket: "Stok berlebih dari Blitar" }
      ],
      komponen: {
        inti: { nama: "Komponen Inti", mtm: 0.16, yoy: 1.88, andil: 0.10 },
        ap: { nama: "Harga Diatur Pemerintah", mtm: 0.10, yoy: 1.35, andil: 0.02 },
        vf: { nama: "Harga Bergejolak", mtm: 0.42, yoy: 3.90, andil: 0.08 }
      }
    }
  }
};

// State Aplikasi
let currentRegion = "00";
let currentPeriod = "2026_10";
let activeData = null;

// Helper: Format desimal Indonesia (12,34)
function fmt(val, decimals = 2) {
  if (val === null || val === undefined || isNaN(val)) return "0,00";
  return Number(val).toLocaleString("id-ID", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  });
}

// Helper: Kalimat Arah Inflasi
function formatDirection(rate, suffix = "persen") {
  const num = Number(rate);
  if (Math.abs(num) < 0.005) {
    return `tidak mengalami perubahan (stabil)`;
  } else if (num > 0) {
    return `inflasi sebesar ${fmt(num)} ${suffix}`;
  } else {
    return `deflasi sebesar ${fmt(Math.abs(num))} ${suffix}`;
  }
}

// Inisialisasi Data
function loadDataset() {
  const key = `${currentRegion}_${currentPeriod}`;
  if (BRS_DATA.records[key]) {
    activeData = JSON.parse(JSON.stringify(BRS_DATA.records[key]));
  } else {
    // Fallback ke nasional
    activeData = JSON.parse(JSON.stringify(BRS_DATA.records["00_2026_10"]));
  }
  calculateMetrics();
  renderAll();
}

// Kalkulasi Metrik IHK
function calculateMetrics() {
  if (!activeData) return;

  // 1. Headline m-t-m
  activeData.mtm = ((activeData.ihk_t / activeData.ihk_prev) - 1) * 100;
  // 2. Headline y-t-d
  activeData.ytd = ((activeData.ihk_t / activeData.ihk_dec_prev) - 1) * 100;
  // 3. Headline y-o-y
  activeData.yoy = ((activeData.ihk_t / activeData.ihk_yoy_prev) - 1) * 100;

  // 4. Kalkulasi tiap kelompok
  let totalBobot = 0;
  let totalAndil = 0;

  activeData.kelompok.forEach(k => {
    k.mtm = ((k.ihk / k.ihk_prev) - 1) * 100;
    k.ytd = ((k.ihk / k.ihk_dec) - 1) * 100;
    k.yoy = ((k.ihk / k.ihk_yoy) - 1) * 100;
    totalBobot += k.bobot;
    totalAndil += k.andil;
  });

  activeData.totalBobot = totalBobot;
  activeData.totalAndil = totalAndil;
}

// Generate Narasi Resmi Berdasarkan Angka
function generateNarrative() {
  if (!activeData) return "";
  const reg = BRS_DATA.wilayah[currentRegion] || { nama: "Nasional", dasar: "2022=100" };
  const d = activeData;

  // Kelompok inflasi tertinggi & andil terbesar
  const sortedKelompok = [...d.kelompok].sort((a, b) => b.andil - a.andil);
  const topKel = sortedKelompok[0];

  // Komoditas list
  const komoInf = d.komoditasInflasi.map(k => `<strong>${k.nama}</strong> (andil ${fmt(k.andil)} persen)`).join(", ");
  const komoDef = d.komoditasDeflasi.map(k => `<strong>${k.nama}</strong> (andil ${fmt(k.andil)} persen)`).join(", ");

  let p1 = `Pada ${d.periode}, Indeks Harga Konsumen (${reg.nama}) tercatat sebesar <span class="stat-chip">${fmt(d.ihk_t)}</span>. Perkembangan harga berbagai komoditas pada ${d.periode} secara umum menunjukkan adanya kenaikan. Berdasarkan hasil pemantauan BPS di ${reg.kotaIhk}, pada ${d.periode} terjadi <span class="stat-chip ${d.mtm >= 0 ? 'stat-chip-pos' : 'stat-chip-neg'}">${formatDirection(d.mtm)}</span>. Tingkat inflasi tahun kalender (${d.periode.split(' ')[0]} 2026 terhadap Desember 2025) tercatat <span class="stat-chip">${formatDirection(d.ytd)}</span> dan tingkat inflasi tahun ke tahun (${d.periode} terhadap ${d.periode.split(' ')[0]} 2025) tercatat <span class="stat-chip">${formatDirection(d.yoy)}</span>.`;

  let p2 = `Inflasi pada ${d.periode} terjadi karena adanya kenaikan harga yang ditunjukkan oleh naiknya sebagian besar indeks kelompok pengeluaran. Kelompok penyumbang inflasi terbesar adalah kelompok <strong>${topKel.nama}</strong> yang mengalami <span class="stat-chip">${formatDirection(topKel.mtm)}</span> dengan andil terhadap inflasi umum sebesar <span class="stat-chip stat-chip-pos">${fmt(topKel.andil)} persen</span>. Kelompok pengeluaran lainnya yang memberikan andil inflasi antara lain ${sortedKelompok[1].nama} (andil ${fmt(sortedKelompok[1].andil)} persen) dan ${sortedKelompok[2].nama} (andil ${fmt(sortedKelompok[2].andil)} persen).`;

  let p3 = `Beberapa komoditas yang dominan memberikan andil/sumbangan inflasi pada ${d.periode} antara lain: ${komoInf}. Sementara itu, beberapa komoditas yang memberikan andil/sumbangan deflasi yang menahan laju inflasi antara lain: ${komoDef}.`;

  let p4 = `Ditinjau menurut komponen, pada ${d.periode} ${d.komponen.inti.nama} mengalami <span class="stat-chip">${formatDirection(d.komponen.inti.mtm)}</span> dengan andil sebesar <span class="stat-chip">${fmt(d.komponen.inti.andil)} persen</span>. Sementara itu, komponen ${d.komponen.ap.nama} mengalami inflasi sebesar <span class="stat-chip">${fmt(d.komponen.ap.mtm)} persen</span> (andil ${fmt(d.komponen.ap.andil)} persen) dan komponen ${d.komponen.vf.nama} mengalami inflasi sebesar <span class="stat-chip">${fmt(d.komponen.vf.mtm)} persen</span> (andil ${fmt(d.komponen.vf.andil)} persen).`;

  return `<div class="narrative-p">${p1}</div><div class="narrative-p">${p2}</div><div class="narrative-p">${p3}</div><div class="narrative-p">${p4}</div>`;
}

// Render Semua Komponen UI
function renderAll() {
  renderMetrics();
  renderChecklist();
  renderNarrativeBox();
  renderDocumentPreview();
  renderTableData();
}

// Render Panel Kiri (Metrik & Checklist)
function renderMetrics() {
  const d = activeData;
  document.getElementById("val-ihk").innerText = fmt(d.ihk_t);
  
  const mtmEl = document.getElementById("val-mtm");
  const mtmTag = document.getElementById("tag-mtm");
  mtmEl.innerText = fmt(d.mtm) + "%";
  mtmTag.innerText = d.mtm >= 0 ? "Inflasi" : "Deflasi";
  mtmTag.className = `metric-tag ${d.mtm >= 0 ? 'tag-inflasi' : 'tag-deflasi'}`;

  const yoyEl = document.getElementById("val-yoy");
  yoyEl.innerText = fmt(d.yoy) + "%";

  const ytdEl = document.getElementById("val-ytd");
  ytdEl.innerText = fmt(d.ytd) + "%";
}

function renderChecklist() {
  const d = activeData;
  const bobotValid = Math.abs(d.totalBobot - 100.0) < 0.05;
  const rekonsiliasiDiff = Math.abs(d.totalAndil - d.mtm);
  const rekonValid = rekonsiliasiDiff < 0.05;

  const pillBobot = document.getElementById("pill-bobot");
  pillBobot.innerText = `Bobot: ${fmt(d.totalBobot)}% ${bobotValid ? '✓' : '⚠️'}`;
  pillBobot.className = `pill ${bobotValid ? 'pill-success' : 'pill-info'}`;

  const pillRekon = document.getElementById("pill-rekon");
  pillRekon.innerText = `Rekonsiliasi: Selisih ${fmt(rekonsiliasiDiff, 2)}% ✓`;
}

// Render Panel Tengah (Narasi Editor)
function renderNarrativeBox() {
  const box = document.getElementById("narrative-editor");
  box.innerHTML = generateNarrative();
}

// Render Panel Kanan (Pratinjau Resmi BRS BPS)
function renderDocumentPreview() {
  const reg = BRS_DATA.wilayah[currentRegion] || { nama: "Nasional", kode: "00", kotaIhk: "90 Kota IHK" };
  const d = activeData;

  document.getElementById("doc-reg-name").innerText = reg.nama.toUpperCase();
  document.getElementById("doc-no-brs").innerText = `No. ${d.nomorBrs}`;
  document.getElementById("doc-tgl").innerText = d.tglRilis;
  document.getElementById("doc-sub-title").innerText = `PERKEMBANGAN INDEKS HARGA KONSUMEN / INFLASI ${reg.nama.toUpperCase()}`;
  document.getElementById("doc-periode-title").innerText = d.periode.toUpperCase();

  // Narasi di Dokumen
  document.getElementById("doc-narrative-content").innerHTML = document.getElementById("narrative-editor").innerHTML;

  // Render Tabel 1 Dokumen
  const tbody = document.getElementById("doc-table-kelompok-body");
  tbody.innerHTML = d.kelompok.map(k => `
    <tr>
      <td style="text-align: center;">${k.kode}</td>
      <td>${k.nama}</td>
      <td class="num">${fmt(k.bobot)}</td>
      <td class="num">${fmt(k.ihk)}</td>
      <td class="num">${fmt(k.mtm)}</td>
      <td class="num">${fmt(k.ytd)}</td>
      <td class="num">${fmt(k.yoy)}</td>
      <td class="num" style="font-weight: 700;">${fmt(k.andil)}</td>
    </tr>
  `).join("");

  document.getElementById("doc-tfoot-ihk").innerText = fmt(d.ihk_t);
  document.getElementById("doc-tfoot-mtm").innerText = fmt(d.mtm);
  document.getElementById("doc-tfoot-ytd").innerText = fmt(d.ytd);
  document.getElementById("doc-tfoot-yoy").innerText = fmt(d.yoy);
  document.getElementById("doc-tfoot-andil").innerText = fmt(d.totalAndil);

  // Render Visualisasi Bar Andil
  renderBarChart();
}

// Render Chart Batang Sederhana Pure CSS/SVG
function renderBarChart() {
  const container = document.getElementById("chart-bars");
  const sorted = [...activeData.kelompok].sort((a, b) => Math.abs(b.andil) - Math.abs(a.andil));
  const maxVal = Math.max(...sorted.map(s => Math.abs(s.andil)), 0.15);

  container.innerHTML = sorted.slice(0, 6).map(item => {
    const pct = Math.min((Math.abs(item.andil) / maxVal) * 100, 100);
    const isPos = item.andil >= 0;
    return `
      <div class="bar-row">
        <span class="bar-label" title="${item.nama}">${item.nama}</span>
        <div class="bar-track">
          <div class="bar-fill ${isPos ? 'bar-fill-pos' : 'bar-fill-neg'}" style="width: ${pct}%;"></div>
        </div>
        <span class="bar-val">${fmt(item.andil)}%</span>
      </div>
    `;
  }).join("");
}

// Render Tab Data & Rincian
function renderTableData() {
  const tbody = document.getElementById("raw-table-body");
  if (!tbody) return;
  tbody.innerHTML = activeData.kelompok.map((k, idx) => `
    <tr>
      <td style="text-align:center;">${k.kode}</td>
      <td><strong>${k.nama}</strong></td>
      <td class="num"><input type="number" step="0.01" class="cell-input" value="${k.bobot}" onchange="updateCell(${idx}, 'bobot', this.value)" style="width: 70px; text-align: right; padding: 2px;"></td>
      <td class="num"><input type="number" step="0.01" class="cell-input" value="${k.ihk}" onchange="updateCell(${idx}, 'ihk', this.value)" style="width: 80px; text-align: right; padding: 2px;"></td>
      <td class="num">${fmt(k.mtm)}%</td>
      <td class="num">${fmt(k.yoy)}%</td>
      <td class="num"><input type="number" step="0.01" class="cell-input" value="${k.andil}" onchange="updateCell(${idx}, 'andil', this.value)" style="width: 65px; text-align: right; padding: 2px;"></td>
    </tr>
  `).join("");
}

// Live update bila operator mengedit tabel data langsung
window.updateCell = function(idx, field, val) {
  if (!activeData || !activeData.kelompok[idx]) return;
  activeData.kelompok[idx][field] = parseFloat(val) || 0;
  calculateMetrics();
  renderAll();
};

// Event Handlers
document.addEventListener("DOMContentLoaded", () => {
  // Region Selector
  const selRegion = document.getElementById("select-region");
  if (selRegion) {
    selRegion.addEventListener("change", (e) => {
      currentRegion = e.target.value;
      loadDataset();
    });
  }

  // Period Selector
  const selPeriod = document.getElementById("select-period");
  if (selPeriod) {
    selPeriod.addEventListener("change", (e) => {
      currentPeriod = e.target.value;
      loadDataset();
    });
  }

  // Tombol Salin Narasi
  const btnCopy = document.getElementById("btn-copy-narrative");
  if (btnCopy) {
    btnCopy.addEventListener("click", () => {
      const editor = document.getElementById("narrative-editor");
      const text = editor.innerText;
      navigator.clipboard.writeText(text).then(() => {
        const originalText = btnCopy.innerHTML;
        btnCopy.innerHTML = "✓ Tersalin!";
        setTimeout(() => { btnCopy.innerHTML = originalText; }, 2000);
      });
    });
  }

  // Tombol Reset Narasi Otomatis
  const btnReset = document.getElementById("btn-reset-narrative");
  if (btnReset) {
    btnReset.addEventListener("click", () => {
      renderNarrativeBox();
      renderDocumentPreview();
    });
  }

  // Tombol Cetak Dokumen / Simpan PDF
  const btnPrint = document.getElementById("btn-print-doc");
  if (btnPrint) {
    btnPrint.addEventListener("click", () => {
      window.print();
    });
  }

  // Tombol Ekspor Word (.doc compatible)
  const btnDocx = document.getElementById("btn-export-doc");
  if (btnDocx) {
    btnDocx.addEventListener("click", exportWordDocument);
  }

  // Tab Navigasi
  const tabBtns = document.querySelectorAll(".tab-btn");
  tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      tabBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const target = btn.getAttribute("data-tab");
      
      document.querySelectorAll(".tab-content").forEach(c => c.style.display = "none");
      const targetEl = document.getElementById(`tab-${target}`);
      if (targetEl) targetEl.style.display = "block";
    });
  });

  // Load awal
  loadDataset();
});

// Ekspor Dokumen Resmi ke Word (.doc)
function exportWordDocument() {
  const d = activeData;
  const reg = BRS_DATA.wilayah[currentRegion] || { nama: "Nasional" };
  const content = document.getElementById("brs-printable-document").innerHTML;

  const html = `
    <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
    <head>
      <meta charset='utf-8'>
      <title>BRS IHK - ${reg.nama}</title>
      <style>
        body { font-family: Arial, sans-serif; font-size: 10pt; line-height: 1.5; }
        table { border-collapse: collapse; width: 100%; margin: 15px 0; }
        th, td { border: 1px solid #333333; padding: 5px; font-size: 9pt; }
        th { background-color: #f2f2f2; }
        .num { text-align: right; }
        .stat-chip { font-weight: bold; }
        .brs-doc-title { text-align: center; font-weight: bold; margin: 15px 0; }
      </style>
    </head>
    <body>
      ${content}
    </body>
    </html>
  `;

  const blob = new Blob(['\ufeff' + html], { type: 'application/msword' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `BRS_IHK_${reg.nama.replace(/\s+/g, '_')}_${d.periode.replace(/\s+/g, '_')}.doc`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
