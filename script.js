// Mendapatkan elemen-elemen yang diperlukan
const angka1Input = document.getElementById('angka1');
const angka2Input = document.getElementById('angka2');
const tambahBtn = document.getElementById('tambah');
const kurangBtn = document.getElementById('kurang');
const kaliBtn = document.getElementById('kali');
const bagiBtn = document.getElementById('bagi');
const hasilDiv = document.getElementById('hasil');

// Fungsi untuk melakukan perhitungan
function hitung(operator) {
    const angka1 = parseFloat(angka1Input.value);
    const angka2 = parseFloat(angka2Input.value);
    
    // Validasi input
    if (isNaN(angka1) || isNaN(angka2)) {
        hasilDiv.textContent = "Masukkan angka yang valid";
        return;
    }
    
    let result;
    
    switch(operator) {
        case '+':
            result = angka1 + angka2;
            break;
        case '-':
            result = angka1 - angka2;
            break;
        case '*':
            result = angka1 * angka2;
            break;
        case '/':
            if (angka2 === 0) {
                hasilDiv.textContent = "Tidak bisa dibagi dengan 0";
                return;
            }
            result = angka1 / angka2;
            break;
        default:
            return;
    }
    
    hasilDiv.textContent = result;
}

// Menambahkan event listener untuk setiap tombol
tambahBtn.addEventListener('click', () => hitung('+'));
kurangBtn.addEventListener('click', () => hitung('-'));
kaliBtn.addEventListener('click', () => hitung('*'));
bagiBtn.addEventListener('click', () => hitung('/'));