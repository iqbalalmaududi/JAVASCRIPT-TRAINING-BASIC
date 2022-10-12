/*
function makanan(snack){
    jenis_makanan = "kacang adalah " +  snack
    console.log(jenis_makanan)
}

makanan("garuda")
*/

// function operasi hitung
function pembagian(satu, dua){
    return satu/dua
}
let bagi = pembagian(2, 2)

function perkalian(satu, dua){
    return satu * dua
}
let kali = perkalian(21, 25)

function pengurangan(satu, dua){
    return satu - dua
}
let kurang = pengurangan(100, 79)

function penjumlahan(satu, dua){
    return satu + dua
}
let jumlah = penjumlahan(29, 89)

let hasil1 = ("pembagian: " + bagi)
let hasil2 = ("perkalian: " + kali)
let hasil3 = ("pengurangan: " + kurang)
let hasil4 = ("penjumlahan: " + jumlah)
let hasil_final = [hasil1 , hasil2 , hasil3 , hasil4]
console.log(hasil_final);


//arrow function (untuk mempersingkat fungsi)

/*perkalian=(satu, dua)=>{return satu*dua}
multiply = perkalian(2, 2);
console.log(multiply);
*/

 