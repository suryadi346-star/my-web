# 🌐 Landing Page — Tokoh Inspiratif

Landing page statis yang menampilkan tokoh-tokoh inspiratif dunia. Dibangun dengan HTML, CSS, dan JavaScript murni. Di-deploy otomatis ke GitHub Pages via GitHub Actions.

## 🚀 Live Demo

> Setelah deploy: `https://suryadi346-star.github.io/[nama-repo]/`

## 📁 Struktur Proyek

```
landing-page/
├── index.html                  # Halaman utama
├── img/                        # Semua gambar (masukkan manual)
│   ├── 22e.jpeg                # Background hero
│   ├── william_arthur_ward.jpeg
│   ├── Wright-bersaudara.jpeg
│   ├── nicola-tesla.jpeg
│   ├── Jack-Canfield.jpeg
│   ├── AbbasIbnuFirnas.jpeg
│   ├── al-khawarizmi.jpeg
│   ├── albert-einstein.jpeg
│   ├── BJ-Habibie.jpeg
│   ├── ibnu-al-haitsam.jpeg
│   └── Thomas-Alva-Edison.jpeg
├── dist/
│   ├── CSS/
│   │   └── style.css           # Stylesheet utama
│   └── js/
│       └── script.js           # JavaScript utama
└── .github/
    └── workflows/
        └── static.yml          # Auto-deploy ke GitHub Pages
```

## 🛠️ Fitur

- Responsive design (mobile, tablet, desktop)
- Animasi scroll dengan AOS (Animate On Scroll)
- Hamburger menu untuk mobile
- Smooth scroll navigation
- Form contact dengan validasi
- Scroll-to-top button
- Deploy otomatis ke GitHub Pages

## 📦 Cara Upload ke GitHub

```bash
# 1. Clone atau init repo baru
git init
git remote add origin https://github.com/suryadi346-star/[nama-repo].git

# 2. Tambahkan semua file
git add .
git commit -m "feat: initial landing page"
git push -u origin main
```

> ⚠️ **Penting**: Masukkan folder `img/` berisi semua gambar sebelum push.

## ⚙️ Aktifkan GitHub Pages

1. Buka repo di GitHub
2. Settings → Pages
3. Source: **GitHub Actions**
4. Tunggu workflow selesai (~1-2 menit)

## 🔧 Teknologi

- HTML5 & CSS3
- JavaScript (Vanilla)
- [AOS](https://michalsnik.github.io/aos/) — Animate On Scroll
- [Animate.css](https://animate.style/) — CSS Animations
- [RemixIcon](https://remixicon.com/) — Icons
- [Google Fonts](https://fonts.google.com/) — Playfair Display & Playwrite DE Grund
- GitHub Actions — CI/CD

---

&copy; belajar coding
