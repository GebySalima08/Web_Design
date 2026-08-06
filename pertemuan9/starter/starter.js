// 1. Tes apakah file JS sudah terhubung dengan benar
console.log("File script.js berhasil dimuat!");

// 2. Membuat fungsi yang akan dipanggil oleh tombol 'Mulai Kuliah'
function mulaiBelajar() {
    // Menyimpan teks baru ke dalam variabel
    let teksBaru = "Status: Sedang Belajar JavaScript 🚀";
    
    // Mengambil elemen HTML berdasarkan ID-nya, lalu mengubah isinya (innerHTML)
    document.getElementById("status-kuliah").innerHTML = teksBaru;
    
    // Mengubah warna teks melalui manipulasi class Bootstrap dasar
    document.getElementById("status-kuliah").className = "text-success mb-4 fw-bold";
}

// 3. Membuat fungsi untuk tombol 'Selesai'
function selesaiBelajar() {
    alert("Sesi kuliah hari ini telah selesai!");
    document.getElementById("status-kuliah").innerHTML = "Status: Kelas Selesai";
    document.getElementById("status-kuliah").className = "text-danger mb-4";
}

let mhs = [
    {
        nama: 'M Fadel',
        nim: '12345',
        jurusan: 'IK',
    },
    {
        nama: 'Andi',
        nim: '12346',
        jurusan: 'IK',
    },
    {
        nama: 'Budi',
        nim: '12347',
        jurusan: 'IK',
    },
    {
        nama: 'Caca',
        nim: '12348',
        jurusan: 'OM',
    },
    {
        nama: 'Dede',
        nim: '12349',
        jurusan: 'OM',
    },
    {
        nama: 'Eka',
        nim: '12350',
        jurusan: 'DBC',
    },
    {
        nama: 'Fahmi',
        nim: '12351',
        jurusan: 'DBC',
    }
];

tampilkanData();

function filter() {
    let jurusan = document.getElementById("filter-jurusan").value;
    let search  = document.getElementById("search").value;
    tampilkanData(search,jurusan);
}

function tampilkanData(search = '', jurusan = "all") {
    let data = mhs;
    
    if (jurusan !== "all") {
        data = data.filter(function(item) {
            return item.jurusan === jurusan;
        });
    }

    if(search !== '') {
        data = data.filter(function(item) {
            return item.nama.toLowerCase().includes(search.toLowerCase());
        });

    }
    
    // Mengambil elemen tbody berdasarkan ID-nya
    let tabelMhs = document.getElementById("tabel-mhs");

    // Hapus konten tabel yang lama
    tabelMhs.innerHTML = "";

    // Loop melalui array mhs
    data.forEach(function(m, i) {
        let no = i + 1;
        let nama = m.nama;
        let nim = m.nim;
        let jurusan = m.jurusan;

        tabelMhs.innerHTML += `
            <tr>
                <td>${no}</td>
                <td>${nama}</td>
                <td>${nim}</td>
                <td>${jurusan}</td>
            </tr>
        `;
    });
}

function changeTheme() {
    if(document.documentElement.getAttribute("data-bs-theme") === "light") {
        document.documentElement.setAttribute("data-bs-theme", "dark");
        document.getElementById("btn-change-theme").innerHTML = "Light Mode";
        document.getElementById("btn-change-theme").className = "btn btn-outline-light";
    } else {
        document.documentElement.setAttribute("data-bs-theme", "light");
        document.getElementById("btn-change-theme").innerHTML = "Dark Mode";
        document.getElementById("btn-change-theme").className = "btn  btn-dark";
    }
}