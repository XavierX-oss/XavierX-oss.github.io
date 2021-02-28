// utk diulang ulang permainannya.
var req = true;
while ( req ) {

    // Menangkap pilihan player
    var player = prompt('Pilihlah antara: gunting, batu, kertas');

    // Menangkap pilihan komputer
    // Memanggil bilangan acak atau random
    var comp = Math.random();

    if (comp < 0.30) {
        comp = 'batu';
    } else if (comp >= 0.30 && comp < 0.60) {
        comp = 'kertas';
    } else{
        comp = 'gunting';
    }

    // Menentukan peraturan / rules
    var hasil = '';
    if (player == comp) {
        hasil = 'Seri!';
    } else if (player == 'batu') {
        if (comp == 'kertas') {
            hasil = 'Menang!';
        } else {
            hasil = 'Kalah!';
        }
    } else if (player == 'kertas') {
        // Ternary atau versi pendek
        hasil = (comp == 'batu') ? 'Kalah' : 'Menang';
    } else if (player == 'gunting') {
        hasil = (comp == 'kertas') ? 'Kalah' : 'Menang';
    } else {
        hasil = 'Memasukkan pilihan yang salah!';
    }

    // Tampilkan hasilnya
    alert('Kamu memilih : ' + player + ' dan computer memilih : ' + comp + '\nMaka hasilnya : Kamu ' + hasil);

    req = confirm('Mau lagi??');
}

alert('Terima Kasih sudah bermain!' + '\nJangan lupa di like jika kalian suka dengan game ini.')