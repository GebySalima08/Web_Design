// ===============================
// Tombol Lihat Detail
// ===============================
function lihatDetail(){

    alert(
        "Detail Pesanan\n\n" +
        "Layanan : Service AC\n" +
        "Status : Sedang Diproses\n" +
        "Tanggal : 12 Agustus 2026"
    );

}

// ===============================
// Tombol Pesan Lagi
// ===============================
function pesanLagi(){

    let jawab = confirm("Apakah Anda ingin memesan layanan ini lagi?");

    if(jawab){
        alert("Anda akan diarahkan ke halaman Booking.");
        window.location.href = "booking.html";
    }

}

// ===============================
// Tombol Booking Lagi
// ===============================
function bookingLagi(){

    alert("Silakan melakukan booking ulang.");

    window.location.href = "booking.html";

}
function booking(){

let nama=document.getElementById("nama").value;
let hp=document.getElementById("hp").value;
let alamat=document.getElementById("alamat").value;
let tanggal=document.getElementById("tanggal").value;
let jam=document.getElementById("jam").value;

if(nama=="" || hp=="" || alamat=="" || tanggal=="" || jam==""){

alert("Mohon lengkapi semua data.");

return;

}

alert("Booking berhasil!\n\nTerima kasih telah menggunakan GEZYRO.");

window.location.href="pesanan.html";

}