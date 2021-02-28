// utk diulang ulang permainannya.
var req = true;
while ( req ) {

    // Menangkap pilihan player
    var player = prompt('Pilihlah antara: semut, gajah, orang');

    // Menangkap pilihan komputer
    // Memanggil bilangan acak atau random
    var comp = Math.random();

    if (comp < 0.30) {
        comp = 'gajah';
    } else if (comp >= 0.30 && comp < 0.60) {
        comp = 'orang';
    } else{
        comp = 'semut';
    }

    // Menentukan peraturan / rules
    var hasil = '';
    if (player == comp) {
        hasil = 'Seri!';
    } else if (player == 'gajah') {
        if (comp == 'orang') {
            hasil = 'Menang!';
        } else {
            hasil = 'Kalah!';
        }
    } else if (player == 'orang') {
        /* if (comp == 'gajah') {
            hasil = 'Kalah';
        } else {
            hasil = 'Menang'
        } */
        // Ternary atau versi pendek
        hasil = (comp == 'gajah') ? 'Kalah' : 'Menang';
    } else if (player == 'semut') {
        hasil = (comp == 'orang') ? 'Kalah' : 'Menang';
    } else {
        hasil = 'Memasukkan pilihan yang salah!';
    }

    // Tampilkan hasilnya
    alert('Kamu memilih : ' + player + ' dan computer memilih : ' + comp + '\nMaka hasilnya : Kamu ' + hasil);

    req = confirm('Mau lagi??');
}

alert('Terima Kasih sudah bermain!' + '\nJangan lupa di like jika kalian suka dengan game ini.')