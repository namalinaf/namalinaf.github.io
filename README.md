# namalinaf.github.io

Situs statis minimal, diterbitkan dengan GitHub Pages.

**URL:** https://namalinaf.github.io

## Struktur

```
.
├── index.html          # halaman utama
├── 404.html            # halaman error
├── assets/
│   ├── styles.css      # seluruh gaya visual
│   ├── script.js       # tahun footer
│   └── favicon.svg
└── .nojekyll           # mencegah pemrosesan Jekyll
```

Tanpa framework, tanpa build step, tanpa dependensi eksternal, tanpa cookie
maupun analitik.

## Mengedit

- **Inisial:** ubah `<h1>L.</h1>` dan `<span class="mark">L.</span>`.
- **Tagline:** sunting `.tagline` di `index.html`.
- **Catatan:** sunting paragraf di dalam `<section class="note">`.
- **Kontak:** ganti tautan di bagian `.contact`.
- **Nuansa warna:** ubah variabel di `assets/styles.css`.

## Pratinjau lokal

```sh
uv run python -m http.server 8000
```

lalu buka http://localhost:8000

## Publikasi

GitHub Pages menyajikan branch `main`, folder root. Push ke `main` otomatis
memperbarui situs dalam 1–2 menit.

```sh
git add .
git commit -m "Update"
git push
```
