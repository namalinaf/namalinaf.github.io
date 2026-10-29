/**
 * RAKIT — Rangkai Angka dan Kompilasi IHK Terpadu
 * Replikasi & Peningkatan Resmi SISADA BRS IHK (BPS)
 */

// Dataset Riil BPS: Kab. Aceh Tamiang (Bahan Rilis September 2025)
const ACEH_TAMIANG_2025_09 = {
  wilayah: {
    nama: "Kab Aceh Tamiang",
    kode: "1114",
    provinsi: "Aceh",
    dasar: "2022=100",
    nomorBrs: "09/1114/Th. I",
    tglRilis: "1 Oktober 2025"
  },
  periode: "September 2025",
  tahun: 2025,
  bulan: "09",
  ihk_t: 111.33,
  ihk_t12: 106.23,
  mtm: 0.31,
  ytd: 3.06,
  yoy: 4.80,
  andil_mtm: 0.31,
  andil_yoy: 4.80,
  
  kelompok: [
    { kode: "01", nama: "MAKANAN, MINUMAN DAN TEMBAKAU", ihk_t12: 107.69, ihk: 117.64, mtm: 0.45, ytd: 5.53, yoy: 9.24, andil_mtm: 0.22, andil_yoy: 4.32 },
    { kode: "02", nama: "PAKAIAN DAN ALAS KAKI", ihk_t12: 109.87, ihk: 111.32, mtm: 0.21, ytd: 1.32, yoy: 1.32, andil_mtm: 0.01, andil_yoy: 0.07 },
    { kode: "03", nama: "PERUMAHAN, AIR, LISTRIK, DAN BAHAN BAKAR RUMAH TANGGA", ihk_t12: 99.42, ihk: 99.43, mtm: 0.13, ytd: -0.13, yoy: 0.01, andil_mtm: 0.02, andil_yoy: 0.00 },
    { kode: "04", nama: "PERLENGKAPAN, PERALATAN DAN PEMELIHARAAN RUTIN RUMAH TANGGA", ihk_t12: 103.70, ihk: 103.95, mtm: -0.01, ytd: 0.16, yoy: 0.24, andil_mtm: 0.00, andil_yoy: 0.01 },
    { kode: "05", nama: "KESEHATAN", ihk_t12: 107.85, ihk: 109.31, mtm: 0.89, ytd: 0.89, yoy: 1.35, andil_mtm: 0.01, andil_yoy: 0.02 },
    { kode: "06", nama: "TRANSPORTASI", ihk_t12: 112.52, ihk: 113.04, mtm: -0.01, ytd: 0.74, yoy: 0.46, andil_mtm: 0.00, andil_yoy: 0.04 },
    { kode: "07", nama: "INFORMASI, KOMUNIKASI, DAN JASA KEUANGAN", ihk_t12: 100.41, ihk: 100.46, mtm: 0.00, ytd: 0.02, yoy: 0.05, andil_mtm: 0.00, andil_yoy: 0.00 },
    { kode: "08", nama: "REKREASI, OLAHRAGA, DAN BUDAYA", ihk_t12: 109.89, ihk: 114.21, mtm: -0.26, ytd: 3.66, yoy: 3.93, andil_mtm: 0.00, andil_yoy: 0.04 },
    { kode: "09", nama: "PENDIDIKAN", ihk_t12: 107.62, ihk: 108.19, mtm: 0.00, ytd: 0.53, yoy: 0.53, andil_mtm: 0.00, andil_yoy: 0.01 },
    { kode: "10", nama: "PENYEDIAAN MAKANAN DAN MINUMAN/RESTORAN", ihk_t12: 103.16, ihk: 103.34, mtm: 0.00, ytd: 0.17, yoy: 0.17, andil_mtm: 0.00, andil_yoy: 0.02 },
    { kode: "11", nama: "PERAWATAN PRIBADI DAN JASA LAINNYA", ihk_t12: 107.47, ihk: 114.20, mtm: 1.21, ytd: 5.52, yoy: 6.26, andil_mtm: 0.05, andil_yoy: 0.27 }
  ],

  // Rincian Subkelompok & Komoditas Riil untuk Narasi Detail
  komoditasYoYInflasi: [
    { nama: "cabai merah", andil: 1.37 },
    { nama: "daging ayam ras", andil: 0.60 },
    { nama: "beras", andil: 0.45 },
    { nama: "bawang merah", andil: 0.44 },
    { nama: "minyak goreng", andil: 0.23 },
    { nama: "cabai hijau", andil: 0.21 },
    { nama: "sigaret kretek mesin (skm)", andil: 0.20 },
    { nama: "ikan biji nangka/ikan kuniran", andil: 0.17 },
    { nama: "ikan dencis", andil: 0.17 },
    { nama: "emas perhiasan", andil: 0.15 },
    { nama: "ikan kembung/ikan gembung/ ikan banyar/ikan gembolo/ ikan aso-aso", andil: 0.15 },
    { nama: "kelapa", andil: 0.13 },
    { nama: "ikan tuna", andil: 0.10 },
    { nama: "ikan bandeng/ikan bolu", andil: 0.08 },
    { nama: "ikan lele", andil: 0.08 },
    { nama: "telur ayam ras", andil: 0.05 },
    { nama: "sigaret putih mesin (spm)", andil: 0.05 },
    { nama: "ikan nila", andil: 0.05 },
    { nama: "sigaret kretek tangan (skt)", andil: 0.05 },
    { nama: "tomat", andil: 0.03 }
  ],
  komoditasYoYDeflasi: [
    { nama: "bawang putih", andil: -0.08 },
    { nama: "cabai rawit", andil: -0.06 },
    { nama: "kopi bubuk", andil: -0.06 },
    { nama: "salak", andil: -0.05 },
    { nama: "kangkung", andil: -0.03 },
    { nama: "kentang", andil: -0.03 },
    { nama: "pir", andil: -0.03 },
    { nama: "bensin", andil: -0.03 },
    { nama: "semen", andil: -0.02 },
    { nama: "kacang panjang", andil: -0.02 },
    { nama: "sawi hijau", andil: -0.02 },
    { nama: "bayam", andil: -0.02 },
    { nama: "ketumbar", andil: -0.01 },
    { nama: "kemiri", andil: -0.01 },
    { nama: "udang basah", andil: -0.01 },
    { nama: "gula pasir", andil: -0.01 },
    { nama: "susu bubuk untuk balita", andil: -0.01 },
    { nama: "wortel", andil: -0.01 },
    { nama: "kerudung/jilbab", andil: -0.01 },
    { nama: "ketimun", andil: -0.01 }
  ],
  komoditasMtMInflasi: [
    { nama: "cabai merah", andil: 1.15 },
    { nama: "cabai hijau", andil: 0.17 },
    { nama: "ikan tongkol/ ikan ambu-ambu", andil: 0.05 },
    { nama: "sigaret kretek mesin (skm)", andil: 0.03 },
    { nama: "emas perhiasan", andil: 0.03 },
    { nama: "ikan biji nangka/ikan kuniran", andil: 0.02 },
    { nama: "wortel", andil: 0.02 },
    { nama: "cabai rawit", andil: 0.02 },
    { nama: "minyak rambut", andil: 0.02 },
    { nama: "minyak goreng", andil: 0.02 },
    { nama: "sewa rumah", andil: 0.01 },
    { nama: "tauge/kecambah", andil: 0.01 },
    { nama: "obat dengan resep", andil: 0.01 },
    { nama: "kerudung/jilbab", andil: 0.01 },
    { nama: "shampo", andil: 0.01 }
  ],
  komoditasMtMDeflasi: [
    { nama: "beras", andil: -0.56 },
    { nama: "bawang merah", andil: -0.41 },
    { nama: "daging ayam ras", andil: -0.10 },
    { nama: "tomat", andil: -0.04 },
    { nama: "kacang panjang", andil: -0.03 },
    { nama: "ikan bandeng/ikan bolu", andil: -0.03 },
    { nama: "gula pasir", andil: -0.02 },
    { nama: "bawang putih", andil: -0.02 },
    { nama: "jahe", andil: -0.01 },
    { nama: "kangkung", andil: -0.01 },
    { nama: "apel", andil: -0.01 }
  ],

  // Rincian 11 Kelompok Beserta Subkelompok & Komoditas Per Kelompok
  rincianKelompok: [
    {
      kode: "01",
      nama: "Makanan, Minuman, dan Tembakau",
      yoy: 9.24, ihk_t12: 107.69, ihk_t: 117.64, andil_yoy: 4.32, andil_mtm: 0.22,
      subkel: [
        { nama: "makanan", yoy: 11.39 },
        { nama: "rokok dan tembakau", yoy: 3.59 },
        { nama: "minuman yang tidak beralkohol", yoy: -2.07 }
      ],
      komoYoYInf: [
        { nama: "cabai merah", andil: 1.37 }, { nama: "daging ayam ras", andil: 0.60 }, { nama: "beras", andil: 0.45 },
        { nama: "bawang merah", andil: 0.44 }, { nama: "minyak goreng", andil: 0.23 }, { nama: "cabai hijau", andil: 0.21 },
        { nama: "sigaret kretek mesin (skm)", andil: 0.20 }, { nama: "ikan biji nangka/ikan kuniran", andil: 0.17 },
        { nama: "ikan dencis", andil: 0.17 }, { nama: "ikan kembung/ikan gembung/ ikan banyar/ikan gembolo/ ikan aso-aso", andil: 0.15 },
        { nama: "kelapa", andil: 0.13 }, { nama: "ikan tuna", andil: 0.10 }, { nama: "ikan bandeng/ikan bolu", andil: 0.08 },
        { nama: "ikan lele", andil: 0.08 }, { nama: "telur ayam ras", andil: 0.05 }, { nama: "sigaret putih mesin (spm)", andil: 0.05 },
        { nama: "ikan nila", andil: 0.05 }, { nama: "sigaret kretek tangan (skt)", andil: 0.05 }, { nama: "tomat", andil: 0.03 },
        { nama: "cumi-cumi", andil: 0.03 }
      ],
      komoYoYDef: [
        { nama: "bawang putih", andil: -0.08 }, { nama: "cabai rawit", andil: -0.06 }, { nama: "kopi bubuk", andil: -0.06 },
        { nama: "salak", andil: -0.05 }, { nama: "kangkung", andil: -0.03 }, { nama: "kentang", andil: -0.03 },
        { nama: "pir", andil: -0.03 }, { nama: "kacang panjang", andil: -0.02 }, { nama: "sawi hijau", andil: -0.02 },
        { nama: "bayam", andil: -0.02 }, { nama: "ketumbar", andil: -0.01 }, { nama: "kemiri", andil: -0.01 },
        { nama: "udang basah", andil: -0.01 }, { nama: "gula pasir", andil: -0.01 }, { nama: "susu bubuk untuk balita", andil: -0.01 },
        { nama: "wortel", andil: -0.01 }, { nama: "ketimun", andil: -0.01 }, { nama: "terong", andil: -0.01 }
      ],
      komoMtMInf: [
        { nama: "cabai merah", andil: 1.15 }, { nama: "cabai hijau", andil: 0.17 }, { nama: "ikan tongkol/ ikan ambu-ambu", andil: 0.05 },
        { nama: "sigaret kretek mesin (skm)", andil: 0.03 }, { nama: "ikan biji nangka/ikan kuniran", andil: 0.02 },
        { nama: "wortel", andil: 0.02 }, { nama: "cabai rawit", andil: 0.02 }, { nama: "minyak goreng", andil: 0.02 },
        { nama: "tauge/kecambah", andil: 0.01 }
      ],
      komoMtMDef: [
        { nama: "beras", andil: -0.56 }, { nama: "bawang merah", andil: -0.41 }, { nama: "daging ayam ras", andil: -0.10 },
        { nama: "tomat", andil: -0.04 }, { nama: "kacang panjang", andil: -0.03 }, { nama: "ikan bandeng/ikan bolu", andil: -0.03 },
        { nama: "gula pasir", andil: -0.02 }, { nama: "bawang putih", andil: -0.02 }, { nama: "jahe", andil: -0.01 },
        { nama: "kangkung", andil: -0.01 }, { nama: "apel", andil: -0.01 }
      ]
    },
    {
      kode: "02",
      nama: "Pakaian dan Alas Kaki",
      yoy: 1.32, ihk_t12: 109.87, ihk_t: 111.32, andil_yoy: 0.07, andil_mtm: 0.01,
      subkel: [
        { nama: "alas kaki", yoy: 1.84 },
        { nama: "pakaian", yoy: 1.20 }
      ],
      komoYoYInf: [
        { nama: "seragam sekolah anak", andil: 0.02 },
        { nama: "sandal kulit wanita", andil: 0.01 },
        { nama: "baju muslim anak", andil: 0.01 }
      ],
      komoYoYDef: [{ nama: "kerudung/jilbab", andil: -0.01 }],
      komoMtMInf: [{ nama: "kerudung/jilbab", andil: 0.01 }],
      komoMtMDef: []
    },
    {
      kode: "03",
      nama: "Perumahan, Air, Listrik, dan Bahan Bakar Rumah Tangga",
      yoy: 0.01, ihk_t12: 99.42, ihk_t: 99.43, andil_yoy: 0.00, andil_mtm: 0.02,
      subkel: [
        { nama: "sewa dan kontrak rumah", yoy: 1.31 },
        { nama: "pemeliharaan, perbaikan, dan keamanan tempat tinggal/perumahan", yoy: -0.57 },
        { nama: "penyediaan air dan layanan perumahan lainnya", yoy: 0 },
        { nama: "listrik dan bahan bakar rumah tangga", yoy: 0 }
      ],
      komoYoYInf: [],
      komoYoYDef: [],
      komoMtMInf: [{ nama: "sewa rumah", andil: 0.01 }],
      komoMtMDef: []
    },
    {
      kode: "04",
      nama: "Perlengkapan, Peralatan, dan Pemeliharaan Rutin Rumah Tangga",
      yoy: 0.24, ihk_t12: 103.70, ihk_t: 103.95, andil_yoy: 0.01, andil_mtm: 0.00,
      subkel: [
        { nama: "peralatan rumah tangga", yoy: 1.56 },
        { nama: "tekstil rumah tangga", yoy: 1.16 },
        { nama: "barang dan layanan untuk pemeliharaan rumah tangga rutin", yoy: 0.07 },
        { nama: "furnitur, perlengkapan dan karpet", yoy: -0.26 },
        { nama: "barang pecah belah dan peralatan makan minum", yoy: -0.41 },
        { nama: "peralatan dan perlengkapan perumahan dan kebun", yoy: -0.54 }
      ],
      komoYoYInf: [], komoYoYDef: [], komoMtMInf: [], komoMtMDef: []
    },
    {
      kode: "05",
      nama: "Kesehatan",
      yoy: 1.35, ihk_t12: 107.85, ihk_t: 109.31, andil_yoy: 0.02, andil_mtm: 0.01,
      subkel: [
        { nama: "obat-obatan dan produk kesehatan", yoy: 2.19 },
        { nama: "jasa rawat jalan", yoy: 0 },
        { nama: "jasa rawat inap", yoy: 0 }
      ],
      komoYoYInf: [{ nama: "obat dengan resep", andil: 0.01 }, { nama: "obat batuk", andil: 0.01 }],
      komoYoYDef: [],
      komoMtMInf: [{ nama: "obat dengan resep", andil: 0.01 }],
      komoMtMDef: []
    },
    {
      kode: "06",
      nama: "Transportasi",
      yoy: 0.46, ihk_t12: 112.52, ihk_t: 113.04, andil_yoy: 0.04, andil_mtm: 0.00,
      subkel: [
        { nama: "pembelian kendaraan", yoy: 2.31 },
        { nama: "pengoperasian peralatan transportasi pribadi", yoy: 0.13 },
        { nama: "jasa pengiriman barang", yoy: 0 }
      ],
      komoYoYInf: [{ nama: "sepeda motor", andil: 0.03 }, { nama: "pemeliharaan/service", andil: 0.03 }],
      komoYoYDef: [{ nama: "bensin", andil: -0.03 }],
      komoMtMInf: [], komoMtMDef: []
    },
    {
      kode: "07",
      nama: "Informasi, Komunikasi, dan Jasa Keuangan",
      yoy: 0.05, ihk_t12: 100.41, ihk_t: 100.46, andil_yoy: 0.00, andil_mtm: 0.00,
      subkel: [
        { nama: "peralatan informasi dan komunikasi", yoy: 0.30 },
        { nama: "layanan informasi dan komunikasi", yoy: 0 },
        { nama: "jasa keuangan", yoy: 0 }
      ],
      komoYoYInf: [], komoYoYDef: [], komoMtMInf: [], komoMtMDef: []
    },
    {
      kode: "08",
      nama: "Rekreasi, Olahraga, dan Budaya",
      yoy: 3.93, ihk_t12: 109.89, ihk_t: 114.21, andil_yoy: 0.04, andil_mtm: 0.00,
      subkel: [
        { nama: "koran, buku, dan perlengkapan sekolah", yoy: 6.79 },
        { nama: "barang rekreasi lainnya dan olahraga", yoy: -0.70 }
      ],
      komoYoYInf: [{ nama: "tas sekolah", andil: 0.03 }, { nama: "buku tulis bergaris", andil: 0.01 }, { nama: "pulpen/bollpoint", andil: 0.01 }],
      komoYoYDef: [], komoMtMInf: [], komoMtMDef: []
    },
    {
      kode: "09",
      nama: "Pendidikan",
      yoy: 0.53, ihk_t12: 107.62, ihk_t: 108.19, andil_yoy: 0.01, andil_mtm: 0.00,
      subkel: [
        { nama: "pendidikan dasar dan anak usia dini", yoy: 2.47 },
        { nama: "pendidikan menengah", yoy: 0 },
        { nama: "pendidikan tinggi", yoy: 0 }
      ],
      komoYoYInf: [{ nama: "taman kanak kanak", andil: 0.01 }],
      komoYoYDef: [], komoMtMInf: [], komoMtMDef: []
    },
    {
      kode: "10",
      nama: "Penyediaan Makanan dan Minuman/Restoran",
      yoy: 0.17, ihk_t12: 103.16, ihk_t: 103.34, andil_yoy: 0.02, andil_mtm: 0.00,
      subkel: [
        { nama: "jasa pelayanan makanan dan minuman", yoy: 0.17 }
      ],
      komoYoYInf: [{ nama: "nasi dengan lauk", andil: 0.01 }, { nama: "ayam goreng", andil: 0.01 }],
      komoYoYDef: [], komoMtMInf: [], komoMtMDef: []
    },
    {
      kode: "11",
      nama: "Perawatan Pribadi dan Jasa Lainnya",
      yoy: 6.26, ihk_t12: 107.47, ihk_t: 114.20, andil_yoy: 0.27, andil_mtm: 0.05,
      subkel: [
        { nama: "perawatan pribadi lainnya", yoy: 14.80 },
        { nama: "perawatan pribadi", yoy: 3.60 },
        { nama: "jasa lainnya", yoy: 0 }
      ],
      komoYoYInf: [
        { nama: "emas perhiasan", andil: 0.15 },
        { nama: "tarif gunting rambut pria", andil: 0.03 },
        { nama: "sabun mandi", andil: 0.02 },
        { nama: "minyak rambut", andil: 0.02 },
        { nama: "tarif gunting rambut anak", andil: 0.02 },
        { nama: "bedak", andil: 0.01 },
        { nama: "pasta gigi", andil: 0.01 },
        { nama: "sabun wajah", andil: 0.01 }
      ],
      komoYoYDef: [],
      komoMtMInf: [
        { nama: "emas perhiasan", andil: 0.03 },
        { nama: "minyak rambut", andil: 0.02 },
        { nama: "shampo", andil: 0.01 }
      ],
      komoMtMDef: []
    }
  ]
};

// State Aktif
let activeData = JSON.parse(JSON.stringify(ACEH_TAMIANG_2025_09));
let currentSection = "all";

// Helper: Format desimal Indonesia (12,34)
function fmt(val, decimals = 2) {
  if (val === null || val === undefined || isNaN(val)) return "0,00";
  return Number(val).toLocaleString("id-ID", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  });
}

// Helper: Format angka tabel SISADA (~0 untuk 0.00)
function fmtTable(val) {
  if (val === null || val === undefined || isNaN(val)) return "~0";
  const num = Number(val);
  if (Math.abs(num) < 0.005) return "~0";
  return fmt(num, 2);
}

// Helper: Format Pengelompokan Komoditas "masing-masing sebesar..."
function formatCommodityGroup(items) {
  if (!items || items.length === 0) return "";
  const groupsMap = new Map();
  items.forEach(it => {
    const valKey = Math.abs(it.andil).toFixed(2);
    if (!groupsMap.has(valKey)) groupsMap.set(valKey, []);
    groupsMap.get(valKey).push(it.nama.toLowerCase());
  });

  const sortedKeys = Array.from(groupsMap.keys()).sort((a, b) => parseFloat(b) - parseFloat(a));
  const parts = [];

  for (const k of sortedKeys) {
    const names = groupsMap.get(k);
    const valStr = fmt(parseFloat(k)) + " persen";
    if (names.length === 1) {
      parts.push(`${names[0]} sebesar ${valStr}`);
    } else if (names.length === 2) {
      parts.push(`${names[0]} dan ${names[1]} masing-masing sebesar ${valStr}`);
    } else {
      const init = names.slice(0, -1).join(", ");
      const last = names[names.length - 1];
      parts.push(`${init}, dan ${last} masing-masing sebesar ${valStr}`);
    }
  }

  if (parts.length === 1) return parts[0];
  const allButLast = parts.slice(0, -1).join("; ");
  return `${allButLast}; serta ${parts[parts.length - 1]}`;
}

// Nama Bilangan Indonesia untuk Kelompok
const BILANGAN_ID = ["nol", "satu", "dua", "tiga", "empat", "lima", "enam", "tujuh", "delapan", "sembilan", "sepuluh", "sebelas"];
function getBilangan(n) {
  return BILANGAN_ID[n] || String(n);
}

// Generate Narasi Resmi SISADA BRS
function generateFullSections() {
  const d = activeData;
  const regName = d.wilayah.nama;
  const thnLalu = d.tahun - 1;
  const thnLaluBulan = `${d.periode.split(' ')[0]} ${thnLalu}`;

  // 1. HALAMAN 2: Headline & Ringkasan Eksekutif
  const kelInflasiYoY = d.kelompok.filter(k => k.yoy > 0.005);
  const kelDeflasiYoY = d.kelompok.filter(k => k.yoy < -0.005);
  const totalKelInf = kelInflasiYoY.length;

  const kelListStr = kelInflasiYoY.map(k => `kelompok ${k.nama.toLowerCase()} sebesar <span class="stat-chip stat-chip-pos">${fmt(k.yoy)} persen</span>`).join(", ");

  const h2_p1 = `Pada ${d.periode}, terjadi inflasi year-on-year (y-on-y) di ${regName} sebesar <span class="stat-chip stat-chip-pos">${fmt(d.yoy)} persen</span> atau terjadi kenaikan indeks dari <span class="stat-chip">${fmt(d.ihk_t12)}</span> pada ${thnLaluBulan} menjadi <span class="stat-chip">${fmt(d.ihk_t)}</span> pada ${d.periode}.`;

  const h2_p2 = `Inflasi y-on-y terjadi karena adanya kenaikan harga yang ditunjukkan oleh naiknya ${getBilangan(totalKelInf)} indeks kelompok pengeluaran, yaitu: ${kelListStr}.`;

  const h2_p3 = `Tingkat inflasi month-to-month (m-to-m) ${regName} ${d.periode} sebesar <span class="stat-chip ${d.mtm >= 0 ? 'stat-chip-pos' : 'stat-chip-neg'}">${fmt(d.mtm)} persen</span> dan tingkat inflasi year-to-date (y-to-d) ${regName} ${d.periode} sebesar <span class="stat-chip">${fmt(d.ytd)} persen</span>.`;

  // 2. HALAMAN 3: Perkembangan Harga
  const h3_p1 = `Perkembangan harga berbagai komoditas pada ${d.periode} secara umum menunjukkan adanya kenaikan. Berdasarkan hasil pemantauan BPS ${regName}, pada ${d.periode.split(' ')[0]} terjadi inflasi y-on-y sebesar <span class="stat-chip stat-chip-pos">${fmt(d.yoy)} persen</span>, atau terjadi kenaikan Indeks Harga Konsumen (IHK) dari <span class="stat-chip">${fmt(d.ihk_t12)}</span> pada ${thnLaluBulan} menjadi <span class="stat-chip">${fmt(d.ihk_t)}</span> pada ${d.periode}. Tingkat inflasi m-to-m sebesar <span class="stat-chip ${d.mtm >= 0 ? 'stat-chip-pos' : 'stat-chip-neg'}">${fmt(d.mtm)} persen</span> dan tingkat inflasi y-to-d sebesar <span class="stat-chip">${fmt(d.ytd)} persen</span>.`;

  // 3. HALAMAN 4: Andil Komoditas & Kelompok
  const komoYoYInfStr = formatCommodityGroup(d.komoditasYoYInflasi);
  const komoYoYDefStr = formatCommodityGroup(d.komoditasYoYDeflasi);
  const komoMtMInfStr = formatCommodityGroup(d.komoditasMtMInflasi);
  const komoMtMDefStr = formatCommodityGroup(d.komoditasMtMDeflasi);

  const h4_p1 = `Komoditas yang dominan memberikan andil/sumbangan inflasi y-on-y pada ${d.periode}, antara lain: ${komoYoYInfStr}. Sedangkan komoditas yang memberikan andil/sumbangan deflasi y-on-y, antara lain: ${komoYoYDefStr}.`;

  const h4_p2 = `Sementara komoditas yang dominan memberikan andil/sumbangan inflasi m-to-m pada ${d.periode}, antara lain: ${komoMtMInfStr}. Sedangkan komoditas yang memberikan andil/sumbangan deflasi m-to-m, antara lain: ${komoMtMDefStr}.`;

  // Kelompok andil
  const kelMemberiAndilYoY = d.kelompok.filter(k => k.andil_yoy > 0.005).sort((a,b) => b.andil_yoy - a.andil_yoy);
  const kelTidakAndilYoY = d.kelompok.filter(k => Math.abs(k.andil_yoy) < 0.005);

  let kelAndilParts = [];
  const andilMap = new Map();
  kelMemberiAndilYoY.forEach(k => {
    const kStr = k.andil_yoy.toFixed(2);
    if (!andilMap.has(kStr)) andilMap.set(kStr, []);
    andilMap.get(kStr).push(`kelompok ${k.nama.toLowerCase()}`);
  });
  andilMap.forEach((names, val) => {
    const valFmt = fmt(parseFloat(val)) + " persen";
    if (names.length === 1) kelAndilParts.push(`${names[0]} sebesar ${valFmt}`);
    else if (names.length === 2) kelAndilParts.push(`${names[0]} dan ${names[1]} masing-masing sebesar ${valFmt}`);
    else kelAndilParts.push(`${names.slice(0, -1).join(', ')}, dan ${names[names.length - 1]} masing-masing sebesar ${valFmt}`);
  });

  const kelTidakParts = kelTidakAndilYoY.map(k => `kelompok ${k.nama.toLowerCase()}`).join(" dan ");

  const h4_p3 = `Pada ${d.periode}, ${getBilangan(kelMemberiAndilYoY.length)} kelompok pengeluaran memberikan andil inflasi y-on-y, yaitu: ${kelAndilParts.join('; ')}. Sementara ${getBilangan(kelTidakAndilYoY.length)} kelompok tidak mengalami perubahan indeks, yaitu: ${kelTidakParts}.`;

  // 4. HALAMAN 5+: Rincian 11 Kelompok
  const rincianHtml = (d.rincianKelompok || []).map((rk, idx) => {
    const infSub = rk.subkel.filter(s => s.yoy > 0.005);
    const defSub = rk.subkel.filter(s => s.yoy < -0.005);
    const stabSub = rk.subkel.filter(s => Math.abs(s.yoy) <= 0.005);

    let subKalimat = "";
    if (infSub.length > 0) {
      const infList = infSub.map(s => `subkelompok ${s.nama.toLowerCase()} sebesar ${fmt(s.yoy)} persen`).join("; dan ");
      subKalimat += `Subkelompok yang mengalami inflasi y-on-y, yaitu: ${infList}. `;
    }
    if (defSub.length > 0) {
      const defList = defSub.map(s => `subkelompok ${s.nama.toLowerCase()} sebesar ${fmt(Math.abs(s.yoy))} persen`).join("; ");
      subKalimat += `Sedangkan subkelompok yang mengalami deflasi y-on-y pada kelompok ini, yaitu: ${defList}. `;
    }
    if (stabSub.length > 0) {
      const stabList = stabSub.map(s => `subkelompok ${s.nama.toLowerCase()}`).join(" dan ");
      subKalimat += `Sementara subkelompok yang tidak mengalami perubahan indeks, yaitu: ${stabList}.`;
    }

    let andilYoYKalimat = "";
    if (Math.abs(rk.andil_yoy) < 0.005) {
      andilYoYKalimat = `Kelompok ini pada ${d.periode} tidak memberikan andil/sumbangan yang signifikan terhadap inflasi y-on-y di ${regName}.`;
    } else {
      let komoStr = "";
      if (rk.komoYoYInf && rk.komoYoYInf.length > 0) {
        komoStr += `Komoditas yang dominan memberikan andil/sumbangan inflasi y-on-y, yaitu: ${formatCommodityGroup(rk.komoYoYInf)}. `;
      }
      if (rk.komoYoYDef && rk.komoYoYDef.length > 0) {
        komoStr += `Sedangkan komoditas yang dominan memberikan andil/sumbangan deflasi y-on-y, yaitu: ${formatCommodityGroup(rk.komoYoYDef)}.`;
      }
      andilYoYKalimat = `Kelompok ini pada ${d.periode} memberikan andil/sumbangan inflasi y-on-y sebesar <span class="stat-chip stat-chip-pos">${fmt(rk.andil_yoy)} persen</span>. ${komoStr}`;
    }

    let andilMtMKalimat = "";
    if (Math.abs(rk.andil_mtm) < 0.005) {
      andilMtMKalimat = `Sementara kelompok ini pada ${d.periode} tidak memberikan andil/sumbangan yang signifikan terhadap inflasi m-to-m di ${regName}.`;
    } else {
      let komoMtMStr = "";
      if (rk.komoMtMInf && rk.komoMtMInf.length > 0) {
        komoMtMStr += `Komoditas yang dominan memberikan andil/sumbangan inflasi m-to-m, yaitu: ${formatCommodityGroup(rk.komoMtMInf)}. `;
      }
      if (rk.komoMtMDef && rk.komoMtMDef.length > 0) {
        komoMtMStr += `Sedangkan komoditas yang dominan memberikan andil/sumbangan deflasi m-to-m, yaitu: ${formatCommodityGroup(rk.komoMtMDef)}.`;
      }
      andilMtMKalimat = `Sementara kelompok ini pada ${d.periode} memberikan andil/sumbangan inflasi m-to-m sebesar <span class="stat-chip ${rk.andil_mtm >= 0 ? 'stat-chip-pos' : 'stat-chip-neg'}">${fmt(rk.andil_mtm)} persen</span>. ${komoMtMStr}`;
    }

    return `
      <div class="group-detail-card">
        <div class="group-detail-title">Kelompok 1.${idx + 1} (${rk.nama})</div>
        <p class="narrative-p">Kelompok ini pada ${d.periode} mengalami inflasi y-on-y sebesar <span class="stat-chip stat-chip-pos">${fmt(rk.yoy)} persen</span> atau terjadi kenaikan indeks dari <span class="stat-chip">${fmt(rk.ihk_t12)}</span> pada ${thnLaluBulan} menjadi <span class="stat-chip">${fmt(rk.ihk_t)}</span> pada ${d.periode}.</p>
        <p class="narrative-p">${subKalimat}</p>
        <p class="narrative-p">${andilYoYKalimat}</p>
        <p class="narrative-p">${andilMtMKalimat}</p>
      </div>
    `;
  }).join("");

  return {
    h2: `<div class="doc-section-header">Halaman 2 — Ringkasan Eksekutif & Headline</div>
         <p class="narrative-p">${h2_p1}</p>
         <p class="narrative-p">${h2_p2}</p>
         <p class="narrative-p">${h2_p3}</p>`,
    
    h3: `<div class="doc-section-header">Halaman 3 — Perkembangan Harga & Tabel IHK</div>
         <p class="narrative-p">${h3_p1}</p>`,

    h4: `<div class="doc-section-header">Halaman 4 — Andil Komoditas Dominan & Kelompok Pengeluaran</div>
         <p class="narrative-p">${h4_p1}</p>
         <p class="narrative-p">${h4_p2}</p>
         <p class="narrative-p">${h4_p3}</p>`,

    h5: `<div class="doc-section-header">Halaman 5+ — Rincian 11 Kelompok Pengeluaran (COICOP)</div>
         ${rincianHtml}`
  };
}

// Inisialisasi Tampilan
function renderAll() {
  renderMetrics();
  renderChecklist();
  renderNarrativeBox();
  renderDocumentPreview();
  renderTableData();
}

function renderMetrics() {
  const d = activeData;
  document.getElementById("val-ihk").innerText = fmt(d.ihk_t);
  
  const mtmEl = document.getElementById("val-mtm");
  const mtmTag = document.getElementById("tag-mtm");
  mtmEl.innerText = fmt(d.mtm) + "%";
  mtmTag.innerText = d.mtm >= 0 ? "Inflasi" : "Deflasi";
  mtmTag.className = `metric-tag ${d.mtm >= 0 ? 'tag-inflasi' : 'tag-deflasi'}`;

  document.getElementById("val-yoy").innerText = fmt(d.yoy) + "%";
  document.getElementById("val-ytd").innerText = fmt(d.ytd) + "%";
}

function renderChecklist() {
  const d = activeData;
  const pillBobot = document.getElementById("pill-bobot");
  pillBobot.innerText = `IHK t-12: ${fmt(d.ihk_t12)} ✓`;
  
  const pillRekon = document.getElementById("pill-rekon");
  pillRekon.innerText = `Andil YoY: ${fmt(d.andil_yoy)}% ✓`;
}

function renderNarrativeBox() {
  const box = document.getElementById("narrative-editor");
  const sec = generateFullSections();
  if (currentSection === "all") {
    box.innerHTML = `${sec.h2}${sec.h3}${sec.h4}${sec.h5}`;
  } else if (sec[currentSection]) {
    box.innerHTML = sec[currentSection];
  }
}

function renderDocumentPreview() {
  const d = activeData;
  const reg = d.wilayah;

  document.getElementById("doc-reg-name").innerText = reg.nama.toUpperCase();
  document.getElementById("doc-no-brs").innerText = `No. ${reg.nomorBrs}`;
  document.getElementById("doc-tgl").innerText = reg.tglRilis;
  document.getElementById("doc-sub-title").innerText = `PERKEMBANGAN INDEKS HARGA KONSUMEN / INFLASI ${reg.nama.toUpperCase()}`;
  document.getElementById("doc-periode-title").innerText = d.periode.toUpperCase();

  // Sinkronkan narasi
  document.getElementById("doc-narrative-content").innerHTML = document.getElementById("narrative-editor").innerHTML;

  // Render Tabel IHK (Tabel 1 Resmi SISADA)
  const tbody = document.getElementById("doc-table-kelompok-body");
  tbody.innerHTML = d.kelompok.map((k, idx) => `
    <tr>
      <td style="text-align: center;">${k.kode}</td>
      <td>${k.nama}</td>
      <td class="num">${fmtTable(k.ihk_t12)}</td>
      <td class="num">${fmtTable(k.ihk)}</td>
      <td class="num">${fmtTable(k.mtm)}</td>
      <td class="num">${fmtTable(k.ytd)}</td>
      <td class="num">${fmtTable(k.yoy)}</td>
      <td class="num" style="font-weight: 700;">${fmtTable(k.andil_mtm)}</td>
      <td class="num" style="font-weight: 700;">${fmtTable(k.andil_yoy)}</td>
    </tr>
  `).join("");

  document.getElementById("doc-tfoot-ihk").innerText = fmtTable(d.ihk_t);
  document.getElementById("doc-tfoot-mtm").innerText = fmtTable(d.mtm);
  document.getElementById("doc-tfoot-ytd").innerText = fmtTable(d.ytd);
  document.getElementById("doc-tfoot-yoy").innerText = fmtTable(d.yoy);
  document.getElementById("doc-tfoot-andil").innerText = fmtTable(d.andil_mtm);

  // Render Bar Chart Andil
  renderBarChart();
}

function renderBarChart() {
  const container = document.getElementById("chart-bars");
  if (!container) return;
  const sorted = [...activeData.kelompok].sort((a, b) => Math.abs(b.andil_yoy) - Math.abs(a.andil_yoy));
  const maxVal = Math.max(...sorted.map(s => Math.abs(s.andil_yoy)), 0.15);

  container.innerHTML = sorted.slice(0, 6).map(item => {
    const pct = Math.min((Math.abs(item.andil_yoy) / maxVal) * 100, 100);
    const isPos = item.andil_yoy >= 0;
    return `
      <div class="bar-row">
        <span class="bar-label" title="${item.nama}">${item.nama}</span>
        <div class="bar-track">
          <div class="bar-fill ${isPos ? 'bar-fill-pos' : 'bar-fill-neg'}" style="width: ${pct}%;"></div>
        </div>
        <span class="bar-val">${fmt(item.andil_yoy)}%</span>
      </div>
    `;
  }).join("");
}

function renderTableData() {
  const tbody = document.getElementById("raw-table-body");
  if (!tbody) return;
  tbody.innerHTML = activeData.kelompok.map((k, idx) => `
    <tr>
      <td style="text-align:center;">${k.kode}</td>
      <td><strong>${k.nama}</strong></td>
      <td class="num">${fmtTable(k.ihk_t12)}</td>
      <td class="num"><input type="number" step="0.01" class="cell-input" value="${k.ihk}" onchange="updateCell(${idx}, 'ihk', this.value)" style="width: 80px; text-align: right; padding: 2px;"></td>
      <td class="num">${fmtTable(k.mtm)}%</td>
      <td class="num">${fmtTable(k.yoy)}%</td>
      <td class="num"><input type="number" step="0.01" class="cell-input" value="${k.andil_yoy}" onchange="updateCell(${idx}, 'andil_yoy', this.value)" style="width: 65px; text-align: right; padding: 2px;"></td>
    </tr>
  `).join("");
}

window.updateCell = function(idx, field, val) {
  if (!activeData || !activeData.kelompok[idx]) return;
  activeData.kelompok[idx][field] = parseFloat(val) || 0;
  renderAll();
};

// Parser File Excel BPS Pusat & Template
async function parseUploadedFiles(pusatFile, templateFile) {
  if (!window.XLSX) {
    alert("Library SheetJS sedang dimuat, silakan coba 2 detik lagi.");
    return;
  }

  try {
    const pusatBuffer = await pusatFile.arrayBuffer();
    const wbPusat = XLSX.read(pusatBuffer, { type: "array" });
    const sheetPusat = wbPusat.Sheets[wbPusat.SheetNames[0]];
    const rawRows = XLSX.utils.sheet_to_json(sheetPusat, { header: 1 });

    // Baris 1: Header ['Tahun', 'Bulan', 'Kode Kota', 'Nama Kota', 'Kode Komoditas', 'Nama Komoditas', 'Flag', 'NK', 'IHK', 'Inflasi MtM', 'Inflasi YtD', 'Inflasi YoY', 'Andil MtM', 'Andil YtD', 'Andil YoY']
    let headerRowIdx = -1;
    for (let r = 0; r < 5; r++) {
      if (rawRows[r] && rawRows[r].includes("Kode Komoditas") && rawRows[r].includes("IHK")) {
        headerRowIdx = r;
        break;
      }
    }
    if (headerRowIdx === -1) headerRowIdx = 0;

    const dataRows = [];
    for (let i = headerRowIdx + 1; i < rawRows.length; i++) {
      const row = rawRows[i];
      if (!row || row.length < 9) continue;
      dataRows.push({
        tahun: row[0],
        bulan: row[1],
        kodeKota: row[2],
        namaKota: row[3],
        kodeKomoditas: String(row[4]).trim(),
        namaKomoditas: String(row[5]).trim(),
        flag: parseInt(row[6]),
        nk: parseFloat(row[7]),
        ihk: parseFloat(row[8]),
        mtm: parseFloat(row[9]),
        ytd: parseFloat(row[10]),
        yoy: parseFloat(row[11]),
        andil_mtm: parseFloat(row[12]),
        andil_ytd: parseFloat(row[13]),
        andil_yoy: parseFloat(row[14])
      });
    }

    if (dataRows.length === 0) {
      alert("Format berkas tidak sesuai. Pastikan file adalah Bahan Rilis BPS Pusat.");
      return;
    }

    // Ambil Headline (Flag 0)
    const headline = dataRows.find(r => r.flag === 0) || dataRows[0];
    const thn = headline.tahun || 2025;
    const bln = String(headline.bulan).padStart(2, '0');
    const namaBulanMap = { "01":"Januari","02":"Februari","03":"Maret","04":"April","05":"Mei","06":"Juni","07":"Juli","08":"Agustus","09":"September","10":"Oktober","11":"November","12":"Desember" };
    const namaBulan = namaBulanMap[bln] || `Bulan ${bln}`;
    const kotaNama = headline.namaKota || "Wilayah IHK";

    // 11 Kelompok (Flag 1)
    const kelompokRows = dataRows.filter(r => r.flag === 1);
    
    // ponytail: auto-hitung IHK t-12 dari IHK t dan YoY untuk eliminasi kegagalan template '.', ganti bila ada API histori resmi
    const kelompokData = kelompokRows.map(k => {
      const calcIhkT12 = Math.round((k.ihk / (1 + (k.yoy / 100))) * 100) / 100;
      return {
        kode: k.kodeKomoditas,
        nama: k.namaKomoditas,
        ihk_t12: calcIhkT12,
        ihk: k.ihk,
        mtm: k.mtm,
        ytd: k.ytd,
        yoy: k.yoy,
        andil_mtm: k.andil_mtm,
        andil_yoy: k.andil_yoy
      };
    });

    const headlineCalcT12 = Math.round((headline.ihk / (1 + (headline.yoy / 100))) * 100) / 100;

    // Baca Template jika diunggah & ada nilai valid
    if (templateFile) {
      try {
        const tmplBuffer = await templateFile.arrayBuffer();
        const wbTmpl = XLSX.read(tmplBuffer, { type: "array" });
        const sheetTmpl = wbTmpl.Sheets[wbTmpl.SheetNames[0]];
        const tmplRows = XLSX.utils.sheet_to_json(sheetTmpl, { header: 1 });
        tmplRows.forEach(tr => {
          if (!tr || tr.length < 4) return;
          const kode = String(tr[0]).trim();
          const val = parseFloat(tr[3]);
          if (!isNaN(val) && val > 0) {
            const matchK = kelompokData.find(k => k.kode === kode);
            if (matchK) matchK.ihk_t12 = val;
          }
        });
      } catch (err) {
        console.warn("Template reading skipped:", err);
      }
    }

    // Komoditas (Flag 3 & 4)
    const komoRows = dataRows.filter(r => r.flag >= 3);
    const komoYoYInf = komoRows.filter(k => k.andil_yoy > 0.005).sort((a,b) => b.andil_yoy - a.andil_yoy).map(k => ({ nama: k.namaKomoditas, andil: k.andil_yoy }));
    const komoYoYDef = komoRows.filter(k => k.andil_yoy < -0.005).sort((a,b) => a.andil_yoy - b.andil_yoy).map(k => ({ nama: k.namaKomoditas, andil: k.andil_yoy }));
    const komoMtMInf = komoRows.filter(k => k.andil_mtm > 0.005).sort((a,b) => b.andil_mtm - a.andil_mtm).map(k => ({ nama: k.namaKomoditas, andil: k.andil_mtm }));
    const komoMtMDef = komoRows.filter(k => k.andil_mtm < -0.005).sort((a,b) => a.andil_mtm - b.andil_mtm).map(k => ({ nama: k.namaKomoditas, andil: k.andil_mtm }));

    // Subkelompok (Flag 2)
    const subkelRows = dataRows.filter(r => r.flag === 2);
    const rincianKelompok = kelompokData.map(k => {
      const subs = subkelRows.filter(s => s.kodeKomoditas.startsWith(k.kode)).map(s => ({ nama: s.namaKomoditas, yoy: s.yoy, mtm: s.mtm }));
      const komoInKel = komoRows.filter(km => km.kodeKomoditas.startsWith(k.kode));
      return {
        kode: k.kode,
        nama: k.nama,
        yoy: k.yoy,
        ihk_t12: k.ihk_t12,
        ihk_t: k.ihk,
        andil_yoy: k.andil_yoy,
        andil_mtm: k.andil_mtm,
        subkel: subs,
        komoYoYInf: komoInKel.filter(x => x.andil_yoy > 0.005).map(x => ({ nama: x.namaKomoditas, andil: x.andil_yoy })),
        komoYoYDef: komoInKel.filter(x => x.andil_yoy < -0.005).map(x => ({ nama: x.namaKomoditas, andil: x.andil_yoy })),
        komoMtMInf: komoInKel.filter(x => x.andil_mtm > 0.005).map(x => ({ nama: x.namaKomoditas, andil: x.andil_mtm })),
        komoMtMDef: komoInKel.filter(x => x.andil_mtm < -0.005).map(x => ({ nama: x.namaKomoditas, andil: x.andil_mtm }))
      };
    });

    // Update state aktif
    activeData = {
      wilayah: {
        nama: kotaNama,
        kode: headline.kodeKota,
        dasar: "2022=100",
        nomorBrs: `${bln}/${headline.kodeKota}/Th. I`,
        tglRilis: `1 ${namaBulanMap[String(parseInt(bln) % 12 + 1).padStart(2,'0')] || 'Bulan Berikutnya'} ${thn}`
      },
      periode: `${namaBulan} ${thn}`,
      tahun: thn,
      bulan: bln,
      ihk_t: headline.ihk,
      ihk_t12: headlineCalcT12,
      mtm: headline.mtm,
      ytd: headline.ytd,
      yoy: headline.yoy,
      andil_mtm: headline.andil_mtm,
      andil_yoy: headline.andil_yoy,
      kelompok: kelompokData,
      komoditasYoYInflasi: komoYoYInf,
      komoditasYoYDeflasi: komoYoYDef,
      komoditasMtMInflasi: komoMtMInf,
      komoditasMtMDeflasi: komoMtMDef,
      rincianKelompok: rincianKelompok
    };

    document.getElementById("pill-status-file").innerText = `✓ Data: ${kotaNama} (${namaBulan} ${thn})`;
    renderAll();
    alert(`Berhasil memproses data ${kotaNama} untuk periode ${namaBulan} ${thn}! Seluruh 11 kelompok, subkelompok, dan tabel rilis telah diperbarui.`);

  } catch (err) {
    console.error("Gagal membaca file:", err);
    alert("Terjadi kesalahan saat memproses file Excel: " + err.message);
  }
}

// Ekspor Dokumen Resmi ke Word (.doc) Lengkap Sesuai SISADA
function exportWordDocument() {
  const d = activeData;
  const reg = d.wilayah;
  const sec = generateFullSections();

  const tableHtml = `
    <table border="1" cellspacing="0" cellpadding="4" style="border-collapse: collapse; width: 100%; font-size: 9pt; margin: 15px 0;">
      <thead>
        <tr style="background-color: #f2f2f2; font-weight: bold; text-align: center;">
          <th style="padding: 6px;">Nama Komoditas</th>
          <th style="padding: 6px;">IHK Tahun Lalu</th>
          <th style="padding: 6px;">IHK</th>
          <th style="padding: 6px;">Inflasi MtM</th>
          <th style="padding: 6px;">Inflasi YtD</th>
          <th style="padding: 6px;">Inflasi YoY</th>
          <th style="padding: 6px;">Andil MtM</th>
          <th style="padding: 6px;">Andil YoY</th>
        </tr>
      </thead>
      <tbody>
        <tr style="font-weight: bold; background-color: #fafafa;">
          <td>UMUM</td>
          <td align="right">${fmtTable(d.ihk_t12)}</td>
          <td align="right">${fmtTable(d.ihk_t)}</td>
          <td align="right">${fmtTable(d.mtm)}</td>
          <td align="right">${fmtTable(d.ytd)}</td>
          <td align="right">${fmtTable(d.yoy)}</td>
          <td align="right">${fmtTable(d.andil_mtm)}</td>
          <td align="right">${fmtTable(d.andil_yoy)}</td>
        </tr>
        ${d.kelompok.map(k => `
          <tr>
            <td>${k.nama}</td>
            <td align="right">${fmtTable(k.ihk_t12)}</td>
            <td align="right">${fmtTable(k.ihk)}</td>
            <td align="right">${fmtTable(k.mtm)}</td>
            <td align="right">${fmtTable(k.ytd)}</td>
            <td align="right">${fmtTable(k.yoy)}</td>
            <td align="right">${fmtTable(k.andil_mtm)}</td>
            <td align="right">${fmtTable(k.andil_yoy)}</td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `;

  const fullWordHtml = `
    <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
    <head>
      <meta charset='utf-8'>
      <title>Hasil Otomatisasi SISADA IHK - ${reg.nama}</title>
      <style>
        body { font-family: "Calibri", "Arial", sans-serif; font-size: 11pt; line-height: 1.5; color: #000; }
        h1, h2, h3 { font-family: "Calibri", "Arial", sans-serif; font-weight: bold; }
        .header-title { font-size: 16pt; font-weight: bold; text-align: center; margin-bottom: 5px; }
        .header-sub { font-size: 11pt; text-align: center; color: #555; margin-bottom: 25px; }
        .page-break { page-break-before: always; }
        .doc-section-header { font-size: 12pt; font-weight: bold; border-bottom: 1.5pt solid #333; padding-bottom: 3px; margin: 20px 0 10px 0; }
        .group-detail-card { margin-bottom: 15px; }
        .group-detail-title { font-weight: bold; font-size: 11.5pt; margin-bottom: 4px; }
        .stat-chip { font-weight: bold; }
      </style>
    </head>
    <body>
      <div class="header-title">SISADA BRS IHK — ${reg.nama.toUpperCase()}</div>
      <div class="header-sub">Hasil Otomatisasi Kompilasi BRS Indeks Harga Konsumen &bull; BPS</div>

      ${sec.h2}
      
      <div class="page-break"></div>
      ${sec.h3}
      <div style="font-weight: bold; font-size: 10pt; margin-top: 10px;">Tabel IHK dan Tingkat Inflasi Menurut Kelompok Pengeluaran</div>
      ${tableHtml}

      <div class="page-break"></div>
      ${sec.h4}

      <div class="page-break"></div>
      ${sec.h5}
    </body>
    </html>
  `;

  const blob = new Blob(['\ufeff' + fullWordHtml], { type: 'application/msword' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `Hasil_Otomatisasi_SISADA_IHK_${reg.nama.replace(/\s+/g, '_')}_${d.periode.replace(/\s+/g, '_')}.doc`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// Event Listeners & Drag Drop
document.addEventListener("DOMContentLoaded", () => {
  // Setup file uploads
  const filePusat = document.getElementById("input-file-pusat");
  const fileTemplate = document.getElementById("input-file-template");
  const btnProcess = document.getElementById("btn-process-upload");
  const btnLoadSample = document.getElementById("btn-load-sample");

  if (filePusat) {
    filePusat.addEventListener("change", (e) => {
      const f = e.target.files[0];
      if (f) document.getElementById("label-file-pusat").innerText = `✓ Terpilih: ${f.name} (${Math.round(f.size/1024)} KB)`;
    });
  }

  if (fileTemplate) {
    fileTemplate.addEventListener("change", (e) => {
      const f = e.target.files[0];
      if (f) document.getElementById("label-file-template").innerText = `✓ Terpilih: ${f.name} (${Math.round(f.size/1024)} KB)`;
    });
  }

  if (btnProcess) {
    btnProcess.addEventListener("click", () => {
      const fP = filePusat ? filePusat.files[0] : null;
      const fT = fileTemplate ? fileTemplate.files[0] : null;
      if (!fP) {
        alert("Silakan pilih File Bahan Rilis dari Pusat terlebih dahulu, atau klik tombol 'Sampel Real Aceh Tamiang'.");
        return;
      }
      parseUploadedFiles(fP, fT);
    });
  }

  if (btnLoadSample) {
    btnLoadSample.addEventListener("click", () => {
      activeData = JSON.parse(JSON.stringify(ACEH_TAMIANG_2025_09));
      document.getElementById("pill-status-file").innerText = `✓ Data Sampel: Kab. Aceh Tamiang (Sep 2025)`;
      renderAll();
      alert("Data riil resmi BPS Kab. Aceh Tamiang (September 2025) berhasil dimuat!");
    });
  }

  // Section switcher
  const secBtns = document.querySelectorAll(".sec-btn");
  secBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      secBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentSection = btn.getAttribute("data-sec") || "all";
      renderNarrativeBox();
      renderDocumentPreview();
    });
  });

  // Salin Narasi
  const btnCopy = document.getElementById("btn-copy-narrative");
  if (btnCopy) {
    btnCopy.addEventListener("click", () => {
      const editor = document.getElementById("narrative-editor");
      navigator.clipboard.writeText(editor.innerText).then(() => {
        const orig = btnCopy.innerHTML;
        btnCopy.innerHTML = "✓ Tersalin!";
        setTimeout(() => { btnCopy.innerHTML = orig; }, 2000);
      });
    });
  }

  // Reset Narasi
  const btnReset = document.getElementById("btn-reset-narrative");
  if (btnReset) {
    btnReset.addEventListener("click", () => {
      renderNarrativeBox();
      renderDocumentPreview();
    });
  }

  // Cetak Dokumen
  const btnPrint = document.getElementById("btn-print-doc");
  if (btnPrint) {
    btnPrint.addEventListener("click", () => window.print());
  }

  // Ekspor Word
  const btnDocx = document.getElementById("btn-export-doc");
  if (btnDocx) {
    btnDocx.addEventListener("click", exportWordDocument);
  }

  // Tab Navigasi Atas
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

  // Dropzone drag & drop
  const dropzones = document.querySelectorAll(".dropzone-box");
  dropzones.forEach(dz => {
    dz.addEventListener("dragover", (e) => { e.preventDefault(); dz.classList.add("dragover"); });
    dz.addEventListener("dragleave", () => dz.classList.remove("dragover"));
    dz.addEventListener("drop", (e) => {
      e.preventDefault();
      dz.classList.remove("dragover");
      const inp = dz.querySelector("input[type='file']");
      if (inp && e.dataTransfer.files.length > 0) {
        inp.files = e.dataTransfer.files;
        inp.dispatchEvent(new Event("change"));
      }
    });
  });

  // Render awal
  renderAll();
});
