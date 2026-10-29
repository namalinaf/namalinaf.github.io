# namalinaf.github.io

Situs profil statis untuk **Nur Amalina Fauzi**, diterbitkan dengan GitHub Pages.

**URL:** https://namalinaf.github.io

## Struktur

```
.
├── index.html          # halaman utama
├── 404.html            # halaman error
├── assets/
│   ├── styles.css      # seluruh gaya visual
│   ├── script.js       # tema terang/gelap + tahun footer
│   └── favicon.svg
└── .nojekyll           # mencegah pemrosesan Jekyll
```

Tanpa framework, tanpa build step, tanpa dependensi eksternal.

## Mengedit

- **Nama, bio, keahlian:** sunting teks langsung di `index.html`.
- **Email:** ganti semua `alamat@email.com` dengan email Anda.
- **Menambah proyek:** salin blok `<article class="card">` yang ada di komentar
  bagian `#proyek`, lalu isi judul, deskripsi, dan metadata.
- **Warna aksen:** ubah `--accent` dan `--accent-soft` di `assets/styles.css`.
- **Foto profil:** ganti `<div class="avatar">NAF</div>` dengan
  `<img class="avatar" src="assets/foto.jpg" alt="Foto Nur Amalina Fauzi">`,
  lalu tambahkan `object-fit: cover;` pada aturan `.avatar` di CSS.

## Pratinjau lokal

Buka `index.html` langsung di browser, atau jalankan server statis:

```sh
python -m http.server 8000
```

lalu buka http://localhost:8000

## Publikasi

GitHub Pages menyajikan branch `main`, folder root. Setiap push ke `main`
otomatis memperbarui situs dalam 1–2 menit.

```sh
git add .
git commit -m "Update situs"
git push
```

## Lisensi

Isi dan teks © Nur Amalina Fauzi.
