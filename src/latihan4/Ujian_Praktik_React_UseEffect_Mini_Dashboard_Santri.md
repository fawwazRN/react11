# 🧑‍💻 Ujian Praktik React — Mini Dashboard Santri

## 🎯 Tujuan

Buat sebuah aplikasi React sederhana bernama **Dashboard Santri**.

Aplikasi harus memiliki:

1. Informasi nama santri.
2. Penghitung angka.
3. Pesan ketika Component pertama kali dijalankan.
4. Informasi ketika angka berubah.
5. Judul browser yang mengikuti perubahan angka.
6. Setiap proses menggunakan `useEffect` sesuai kebutuhan.

> **Catatan:** Tentukan sendiri cara menggunakan `useEffect` yang tepat untuk setiap kebutuhan berdasarkan apa yang sudah dipelajari.

---

## 1. Tampilan Awal

Ketika aplikasi dibuka, tampilkan:

```text
========================
     DASHBOARD SANTRI
========================

Nama Santri : [ Ahmad ]

Halo, Ahmad

Angka : 0

[ Tambah ]

Status:
Belum ada perubahan angka.
```

---

## 2. Fitur Nama Santri

Buat sebuah input untuk memasukkan nama santri.

Contoh:

```text
Nama Santri : [ Ahmad ]
```

Gunakan **Controlled Component** dan `useState`.

Ketika nama diketik, nama tersebut langsung ditampilkan pada halaman.

Contoh:

```text
Nama Santri : [ Ahmad ]

Halo, Ahmad
```

Jika nama diganti menjadi `Ali`, tampilan berubah menjadi:

```text
Nama Santri : [ Ali ]

Halo, Ali
```

---

## 3. Fitur Penghitung Angka

Buat sebuah angka dengan nilai awal:

```text
0
```

Kemudian buat tombol:

```text
[ Tambah ]
```

Setiap tombol diklik, angka bertambah `1`.

Contoh:

```text
Angka : 0

klik
↓
Angka : 1

klik
↓
Angka : 2

klik
↓
Angka : 3
```

Gunakan `useState`.

---

## 4. Pesan Ketika Aplikasi Pertama Kali Dibuka

Ketika Component pertama kali dijalankan, tampilkan pesan berikut di **Console**:

```text
Dashboard Santri berhasil dijalankan
```

Pesan tersebut tidak perlu ditampilkan pada halaman.

---

## 5. Pantau Perubahan Angka

Setiap kali nilai angka berubah, tampilkan pesan di Console.

Contoh:

Jika angka menjadi `1`:

```text
Angka sekarang: 1
```

Jika angka menjadi `2`:

```text
Angka sekarang: 2
```

Jika angka menjadi `3`:

```text
Angka sekarang: 3
```

---

## 6. Tampilkan Status Perubahan

Pada halaman, tampilkan:

```text
Status:
Belum ada perubahan angka.
```

Jika tombol **Tambah** diklik sehingga angka berubah menjadi `1`, ubah menjadi:

```text
Status:
Angka sudah berubah.
```

Jika angka berubah lagi menjadi `2`, status tetap:

```text
Status:
Angka sudah berubah.
```

Gunakan `useState` untuk mengatur status tersebut.

---

## 7. Judul Browser

Judul tab browser harus mengikuti angka.

Jika:

```text
Angka : 0
```

maka judul browser:

```text
Angka: 0
```

Jika angka menjadi `5`:

```text
Angka: 5
```

Jika angka menjadi `10`:

```text
Angka: 10
```

Gunakan `document.title` untuk mengubah/update nya.

---

# 📌 Ketentuan Pengerjaan

Gunakan materi yang sudah dipelajari:

- Component
- JSX
- `useState`
- `useEffect`
- Controlled Component
- Event Handling
- `onClick`
- `onChange`
- Conditional Rendering jika diperlukan

### Jangan menggunakan:

- API
- React Router
- Library tambahan

---

<!-- # 🎯 Checklist Sebelum Mengumpulkan

Pastikan semua fitur berikut berjalan:

- [ v ] Nama santri dapat diketik.
- [ v ] Nama langsung tampil pada halaman.
- [ v ] Angka dimulai dari `0`.
- [ v ] Tombol **Tambah** menambah angka `1`.
- [ v ] Console menampilkan pesan ketika Component pertama kali dijalankan.
- [ v ] Console menampilkan angka ketika nilai angka berubah.
- [ v ] Status berubah setelah angka berubah.
- [ v ] Judul browser mengikuti nilai angka.
- [ v ] `useEffect` digunakan sesuai kebutuhan.
- [ v ] Tidak menggunakan API.
- [ v ] Tidak menggunakan React Router.

---

# 🧠 Pertanyaan Refleksi

Jawab pertanyaan berikut setelah program selesai:

1. Mengapa kita membutuhkan `useEffect` pada tugas ini? agar effect bisa dijalankan ketika si [angka] berubah
2. Mengapa pesan `"Dashboard Santri berhasil dijalankan"` tidak perlu dijalankan setiap kali angka berubah? karena itu hanya pesan singkat (untuk memberi tahu bahwa memang berhasil dijalankan)
3. Mengapa proses yang berhubungan dengan perubahan angka perlu memperhatikan nilai `angka`? agar tidak rusak codenya
4. Apa perbedaan pekerjaan yang dilakukan ketika Component pertama kali muncul dengan pekerjaan ketika `angka` berubah? kalau component pertama kali muncul -> hanya muncul 1x di awal, tetapi kalau memperhatikan `angka` -> setiap [angka] berubah effect akan berjalan
5. Mengapa `useState` digunakan untuk menyimpan `angka`? agar [angka] bisa diolah oleh useeffect
6. Mengapa input nama menggunakan Controlled Component? agar setiap perubahan sekecil apapun, perubahan dapat diketahui
7. Apa yang terjadi jika dependency pada `useEffect` tidak ditentukan dengan tepat? error

---

# 📤 Pengumpulan

Sebelum mengumpulkan, pastikan aplikasi dapat dijalankan tanpa error.

Kumpulkan:

1. Source code project React.
2. Screenshot tampilan aplikasi.
3. Screenshot Console yang menunjukkan hasil `useEffect`.
4. Jawaban pertanyaan refleksi.

**Nama:** fawwaz romzi nagib

**Kelas:** 11A

**Tanggal:** 8/25/2026 -->
