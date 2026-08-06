
# 📢 KISI-KISI RESMI QUIZ 1: PEMROGRAMAN WEB DASAR

**Tema Quiz:** Portal Kemahasiswaan / Kampus

**Sifat Ujian:** *Open Book & Open Google*.

Berikut adalah materi-materi krusial dari Pertemuan 1 s/d 3 yang **wajib** kalian kuasai untuk menyelesaikan proyek Quiz:

---

### 1. HTML Dasar & Struktur Data (Pertemuan 1)

Kalian harus bisa menyusun konten dasar sebuah halaman web tanpa bantuan CSS terlebih dahulu.

* **Hierarki Judul:** Memahami penggunaan tag `<h1>` sampai `<h6>` untuk struktur teks yang benar.
* **Media & Tautan:** Cara menampilkan gambar lokal/internet (`<img>`) dan membuat link aktif (`<a>`) yang membuka di tab baru (`target="_blank"`).
* **Daftar (Lists):** Bisa membedakan kapan harus menggunakan daftar berpoin (`<ul>`) dan daftar berurutan (`<ol>`).
* **Tabel Data:** Mampu membuat tabel informasi lengkap dengan kepala tabel (`<th>`), baris (`<tr>`), dan kolom (`<td>`), serta menggunakan atribut `border` dan `cellpadding`.

### 2. Semantic HTML & Form Input (Pertemuan 2)

Quiz ini akan menguji apakah kalian bisa membuat web yang "cerdas" dan interaktif secara pasif.

* **Layout Blok (Semantic):** Wajib membagi halaman web menggunakan tag `<header>`, `<nav>`, `<main>`, `<section>`, dan `<footer>`. Jangan gunakan `<div>` untuk semua hal!
* **Formulir Interaktif:** Mampu membuat wadah `<form>` yang rapi menggunakan bantuan kerangka `<table>` di dalamnya agar posisi input sejajar.
* **Variasi Tipe Input:** Wajib menguasai pembuatan input teks biasa (`type="text"`), pemilihan tanggal (`type="date"`), pilihan lingkaran (`type="radio"`), dan menu jatuh/dropdown (`<select>` & `<option>`).
* **Aksesibilitas:** Menghubungkan teks petunjuk dengan kotak input menggunakan `<label for="...">` dan `id="..."`.

### 3. CSS Dasar & Box Model (Pertemuan 3)

Kerangka yang sudah dibuat harus diberi "bumbu" visual agar menarik dilihat.

* **External CSS:** Menghubungkan file HTML dengan file `.css` terpisah menggunakan tag `<link>` di dalam elemen `<head>`.
* **Targeting (Selectors):** Tahu kapan harus menggunakan Tag Selector, Class Selector (`.`), dan ID Selector (`#`).
* **The Box Model Mastery:** Paham betul bedanya **Padding** (jarak ke dalam) dan **Margin** (jarak ke luar) untuk mengatur kerapian form dan tombol.
* **Trik Menengahkan Kotak:** Bisa membuat kotak konten utama berada persis di tengah layar laptop menggunakan kombinasi `max-width` dan `margin: auto`.
* **Interaksi Dinamis:** Bisa mengubah warna atau tampilan tombol saat kursor mouse menyentuhnya menggunakan efek `:hover`.

---

> ### 💡 Tips Sukses Menghadapi Quiz:
> 
> 
> 1. **Manajemen Waktu:** Jangan habiskan waktu 30 menit hanya untuk memilih warna CSS. Buat dulu seluruh struktur HTML-nya dari atas sampai bawah, setelah semua fitur muncul, baru hias menggunakan CSS.
> 2. **Sintaks Mandiri:** Karena AI dilarang, pastikan kalian tahu cara mencari dokumentasi tag di Google (misal lewat MDN Web Docs atau W3Schools) jika tiba-tiba lupa nama atributnya.
> 3. **Pahami Kodemu:** Dosen akan melakukan pemeriksaan acak. Jika kodemu berjalan lancar tapi kamu tidak bisa menjelaskan fungsi dari baris kode yang kamu tulis, akan ada pengurangan nilai secara signifikan.
>

---

## CONTOH KODE BELAJAR MANDIRI

Berikut adalah **Panduan Kode Belajar Mandiri** yang dirancang berdasarkan kisi-kisi Quiz. Di dalam kode ini, saya sudah menyertakan penjelasan lengkap menggunakan komentar (`<!-- HTML -->` dan `/* CSS */`), termasuk bedah materi **`float`** dan **`:hover`** agar mahasiswa bisa memahaminya secara instan meskipun belum Anda ajarkan di kelas.

---

## 📘 Panduan Tambahan: Mengenal `float` & `:hover`

Sebelum masuk ke kode, berikut konsep super simpel untuk dua materi baru ini:

> **1. Apa itu `float`?**
> Secara alami, elemen HTML akan menumpuk dari atas ke bawah. `float` digunakan untuk memaksa suatu elemen (biasanya gambar) bergeser ke kanan (`float: right`) atau ke kiri (`float: left`), sehingga teks di sekitarnya bisa mengalir rapi di sampingnya (seperti artikel koran).
> **2. Apa itu `:hover`?**
> Ini disebut *Pseudo-class*. Fungsinya adalah mengubah gaya CSS **hanya ketika kursor mouse berada di atas elemen tersebut**. Sangat sering dipakai pada tombol (`button`) atau link (`a`) agar website terasa hidup dan interaktif.

---

## 💻 Kode Contoh Belajar Mandiri (`latihan-quiz.html`)

Mahasiswa cukup membuat satu file bernama `latihan-quiz.html` dan menyalin kode di bawah ini untuk dipelajari:

```html
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Latihan Mandiri - Portal Kampus</title>

    <!-- KITA GUNAKAN INTERNAL CSS AGAR MUDAH DIPELAJARI DALAM 1 FILE -->
    <style>
        /* ========================================================
           1. CSS DASAR & BOX MODEL (Materi Pertemuan 3)
           ======================================================== */
        
        body {
            font-family: Arial, sans-serif;
            background-color: #f8fafc; /* Mengubah warna latar belakang seluruh halaman */
            margin: 0;
            padding: 20px;
        }

        header {
            background-color: #0284c7; /* Warna biru langit */
            color: white;              /* Warna teks h1 & p di dalam header */
            text-align: center;        /* Membuat semua teks ke tengah */
            padding: 20px;             /* PADDING: Memberi ruang napas di DALAM header */
        }

        nav {
            background-color: #1e293b; /* Warna hitam keabuan */
            padding: 10px;
            text-align: center;
        }

        nav a {
            color: white;
            text-decoration: none;    /* Menghilangkan garis bawah bawaan link */
            margin: 0 10px;           /* MARGIN: Memberi jarak antar link (kiri & kanan) */
        }

        /* TRIK MENENGAHKAN KOTAK UTAMA (BOX MODEL) */
        main {
            background-color: white;
            max-width: 650px;         /* Membatasi lebar kotak maksimal 650 pixel */
            margin: 25px auto;        /* 'auto' membuat kotak otomatis berada di TENGAH LAYAR */
            padding: 25px;            /* Memberi jarak antara isi konten dengan garis tepi kotak */
            border: 1px solid #cbd5e1;/* Garis tipis pembatas kotak */
        }

        section {
            margin-bottom: 30px;      /* Memberi jarak antar kelompok section ke bawah */
        }

        h2 {
            color: #0284c7;
            border-bottom: 2px solid #0284c7; /* Garis bawah dekorasi h2 */
            padding-bottom: 5px;
        }

        /* ========================================================
           2. MATERI BARU: FLOAT (Mengatur Posisi Gambar)
           ======================================================== */
        .foto-kampus {
            float: right;        /* MEMAKSA gambar bergeser ke KANAN halaman */
            margin-left: 15px;   /* Memberi jarak agar teks di sebelah kirinya tidak menempel */
            margin-bottom: 15px;
            border: 2px solid #cbd5e1;
        }

        /* ========================================================
           3. CSS UNTUK INPUT & TOMBOL
           ======================================================== */
        input[type="text"], input[type="date"], select {
            width: 100%;         /* Membuat kotak input memenuhi lebar kolom tabel */
            padding: 8px;        /* Membuat kotak input lebih tebal dan lega saat diketik */
            box-sizing: border-box; /* Memastikan padding tidak merusak lebar 100% */
        }

        button {
            background-color: #0284c7;
            color: white;
            padding: 10px 20px;
            border: none;        /* Menghilangkan garis tepi bawaan tombol bunder */
            cursor: pointer;     /* Mengubah ikon mouse menjadi tangan menunjuk saat di atas tombol */
            font-size: 14px;
            font-weight: bold;
        }

        /* MATERI BARU: HOVER (Efek Interaktif Tombol) */
        button:hover {
            background-color: #0369a1; /* Warna berubah jadi BIRU TUA saat kursor mouse menyentuh tombol */
        }
    </style>
</head>
<body>

    <!-- SEMANTIC: Bagian kepala website -->
    <header>
        <h1>Portal Latihan Kampus</h1>
        <p>Gunakan file ini sebagai referensi sintaks sebelum Quiz 1</p>
    </header>

    <!-- SEMANTIC: Bagian menu navigasi -->
    <nav>
        <a href="#">Home</a> | 
        <a href="https://github.com" target="_blank">Buka GitHub</a>
    </nav>

    <!-- SEMANTIC: Pembungkus konten utama (Otomatis di tengah karena CSS 'margin: auto') -->
    <main>

        <!-- SECTION 1: Elemen HTML Dasar & Contoh Float -->
        <section>
            <h2>1. HTML Dasar & Contoh Float</h2>
            
            <!-- Gambar ini akan melayang di kanan karena class 'foto-kampus' menggunakan float: right -->
            <img src="https://via.placeholder.com/120/0284c7/ffffff?text=LOGO" alt="Logo Latihan" class="foto-kampus">
            
            <p>
                Paragraf ini ditulis untuk menunjukkan efek dari penggunaan properti <b>CSS Float</b>. 
                Perhatikan bagaimana teks ini mengalir dan membungkus gambar di sebelah kanan dengan rapi, 
                mirip seperti tata letak koran atau majalah digital.
            </p>
            
            <p>Berikut adalah contoh daftar prestasi (Unordered List):</p>
            <ul>
                <li>Juara 1 Lomba Coding Nasional</li>
                <li>Akreditasi Kampus Unggul</li>
            </ul>
        </section>

        <!-- SECTION 2: Tabel Jadwal -->
        <section>
            <h2>2. Tabel Informasi Rutin</h2>
            <table border="1" cellpadding="8" cellspacing="0" style="width: 100%; text-align: left;">
                <thead>
                    <tr style="background-color: #f1f5f9;">
                        <th>Hari</th>
                        <th>Nama UKM</th>
                        <th>Jam</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Jumat</td>
                        <td>UKM Web Design</td>
                        <td>14:00 - 16:00</td>
                    </tr>
                    <tr>
                        <td>Sabtu</td>
                        <td>UKM Futsal</td>
                        <td>09:00 - 11:00</td>
                    </tr>
                </tbody>
            </table>
        </section>

        <!-- SECTION 3: Form Menggunakan Kerangka Table -->
        <section>
            <h2>3. Form dengan Layout Table</h2>
            <form action="#">
                <!-- border="0" digunakan agar tabel tidak terlihat garisnya, murni untuk merapikan posisi input -->
                <table border="0" cellpadding="6" style="width: 100%;">
                    <tr>
                        <!-- Atribut 'for' pada label harus SAMA dengan 'id' pada input -->
                        <td style="width: 30%;"><label for="nama_mhs">Nama Lengkap</label></td>
                        <td>:</td>
                        <td><input type="text" id="nama_mhs" name="nama_mhs" required placeholder="Ketik nama di sini..."></td>
                    </tr>
                    <tr>
                        <td><label for="tgl_gabung">Tanggal Gabung</label></td>
                        <td>:</td>
                        <td><input type="date" id="tgl_gabung" name="tgl_gabung" required></td>
                    </tr>
                    <tr>
                        <td><label for="pilihan_ukm">Pilih Organisasi</label></td>
                        <td>:</td>
                        <td>
                            <select id="pilihan_ukm" name="pilihan_ukm" required>
                                <option value="">-- Silakan Pilih --</option>
                                <option value="web">Web Design Club</option>
                                <option value="futsal">Futsal Club</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td><label>Pilihan Anggota</label></td>
                        <td>:</td>
                        <td>
                            <!-- name pada kedua radio harus SAMA ('status') agar hanya bisa dipilih salah satu -->
                            <input type="radio" id="aktif" name="status" value="aktif" checked>
                            <label for="aktif">Aktif</label>
                            
                            <input type="radio" id="alumni" name="status" value="alumni">
                            <label for="alumni">Alumni</label>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>
                            <br>
                            <!-- Arahkan mouse ke tombol ini di browser untuk melihat efek :hover -->
                            <button type="submit">Simpan Data Pendaftaran</button>
                        </td>
                    </tr>
                </table>
            </form>
        </section>

    </main>

    <!-- SEMANTIC: Bagian bawah kaki website -->
    <footer>
        <p style="text-align: center; color: #64748b; font-size: 12px;">
            &copy; 2026 Bahan Belajar Mandiri Mahasiswa - Dibuat untuk Kelas Web Dasar.
        </p>
    </footer>

</body>
</html>

```