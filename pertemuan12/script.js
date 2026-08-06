
let list_produk = [
    {
        namaProduk:"Laptop ASUS ROG",
        merk:"ASUS",
        harga:20000000,
        gambar:""
    },
    {
        namaProduk:"Laptop Lenovo Legion",
        merk:"Lenovo",
        harga:17000000,
        gambar:""
    },
    {
        namaProduk:"Keyboard Logitech",
        merk:"Logitech",
        harga:300000,
        gambar:""
    }
];

// Menjalankan function pada saat halaman diload
initHalaman();
let produkTerpilih = null;
let riwayatProduk = [];

tampilRiwayat();

function formatHarga(angka) {
    return "Rp " + new Intl.NumberFormat('id-ID').format(angka);
}

function initHalaman() {
    const pilihanProduk = document.getElementById('pilihan_produk');
    list_produk.forEach(item => {
        const option = document.createElement('option');
        option.value = item.namaProduk;
        option.innerText = `${item.namaProduk} (${formatHarga(item.harga)})`;
        pilihanProduk.appendChild(option);
    });
}

function ubahPilihanProduk() {
    const select = document.getElementById('pilihan_produk');
    produkTerpilih = list_produk.find(item => item.namaProduk === select.value)

    hitungTotal();
}

function hitungTotal() {
    const qty = document.getElementById('jumlah').value ?? 0;
    const total = produkTerpilih.harga * qty;

    document.getElementById('total_pemesanan').innerText = formatHarga(total);
}

function pesanProduk() {
    let konfirmasi = confirm('Apakah kamu yakin ?');

    if(konfirmasi) {
        let pembeli = document.getElementById('nama_pembeli');
        let totalPemesanan = document.getElementById('total_pemesanan');
        const qty = document.getElementById('jumlah').value ?? 0;
        alert(`Pembeli ${pembeli.value} Berhasil Memesan Produk ${produkTerpilih.namaProduk} dengan harga ${totalPemesanan.innerText} sebanyak ${qty}  
        `);

        // Tambahkan ke riwayat produk
        let tambahKeRiwayat = {
            no: riwayatProduk.length + 1,
            namaProduk: produkTerpilih.namaProduk,
            merk:produkTerpilih.merk,
            jumlah: qty,
            total: totalPemesanan.innerText,
            pembeli: pembeli.value,
        }
        riwayatProduk.push(tambahKeRiwayat);
        tampilRiwayat();
    } else {
        alert('Batal pesan');
    }
}

function tampilRiwayat() {
    const tbody = document.getElementById('table-riwayat');

    if(riwayatProduk.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="4" class="text-center">Belum ada riwayat transaksi</td>
            </tr>
        `;
        return;
    }

    tbody.innerHTML = '';
    riwayatProduk.forEach(item => {
        const addItem = `
            <tr>
                <th scope="row">${item.no}</th>
                <td>${item.namaProduk}</td>
                <td>${item.total}</td>
                <td>${item.pembeli}</td>
            </tr>
        `;
        tbody.innerHTML += addItem;
    });
}
