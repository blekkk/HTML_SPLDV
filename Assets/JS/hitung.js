function labapenjualan() {
    luas1 = parseInt(document.getElementById("lt1").value);
    luas2 = parseInt(document.getElementById("lt2").value);
    lutama = parseInt(document.getElementById("tanahmaks").value);
    haru1 = parseInt(document.getElementById("harga1").value);
    haru2 = parseInt(document.getElementById("harga2").value);
    modalawal = parseInt(document.getElementById("modal").value);
    untungpersen1 = parseInt(document.getElementById("persen1").value);
    untungpersen2 = parseInt(document.getElementById("persen2").value);
    komisimarket1 = parseInt(document.getElementById("komisi1").value);
    komisimarket2 = parseInt(document.getElementById("komisi2").value);

    var keuntungan1 = parseInt(haru1 * untungpersen1 / 100);
    var keuntungan2 = parseInt(haru2 * untungpersen2 / 100);
    var price1 = parseInt(keuntungan1 + haru1 + komisimarket1);
    var price2 = parseInt(keuntungan2 + haru2 + komisimarket1);

    var y = parseInt((((lutama * haru1) - (luas1 * modalawal)) / ((luas2 * haru1) - (luas1 * haru2))));
    var x = parseInt(((lutama - (luas2 * y)) / luas1));

    var Profit = parseInt((keuntungan1 * x) + (keuntungan2 * y));

    document.getElementById("untung").value = Profit.toFixed(0);
    document.getElementById("bykrumah1").value = x.toFixed(0);
    document.getElementById("bykrumah2").value = y.toFixed(0);
    document.getElementById("total1").value = price1;
    document.getElementById("total2").value = price2;
    document.getElementById("untung1").value = keuntungan1;
    document.getElementById("untung2").value = keuntungan2;

    localStorage.setItem("lt1", luas1);
    localStorage.setItem("lt2", luas2);
    localStorage.setItem("tanahmaks", lutama);
    localStorage.setItem("harga1", haru1);
    localStorage.setItem("harga2", haru2);
    localStorage.setItem("modal", modalawal);
    localStorage.setItem("persen1", untungpersen1);
    localStorage.setItem("persen2", untungpersen2);
    localStorage.setItem("komisi1", komisimarket1);
    localStorage.setItem("komisi2", komisimarket2);
    localStorage.setItem("untung1", keuntungan1);
    localStorage.setItem("untung2", keuntungan2);
    localStorage.setItem("price1", price1);
    localStorage.setItem("price2", price2);
    localStorage.setItem("bnykrumah1", x);
    localStorage.setItem("bnykrumah2", y);
    localStorage.setItem("untung", Profit);
}

function marketing() {

    terjual1 = document.getElementById("terjual-tipe-1").value;
    terjual2 = document.getElementById("terjual-tipe-2").value;
    x = localStorage.getItem("komisi1");
    y = localStorage.getItem("komisi2");

    var totaluntung = (x * terjual1) + (y * terjual2);

    document.getElementById("total-untung").value = totaluntung;

    localStorage.setItem("untungtotal", totaluntung);
    localStorage.setItem("terjual-tipe-1", terjual1);
    localStorage.setItem("terjual-tipe-2", terjual2);
}

function update1() {
    document.getElementById("hargarumahkonsumen1").innerHTML = localStorage.getItem("harga1");
    document.getElementById("luasrumahkonsumen1").innerHTML = localStorage.getItem("lt1");
}

function update2() {
    document.getElementById("hargarumahkonsumen2").innerHTML = localStorage.getItem("harga2");
    document.getElementById("luasrumahkonsumen2").innerHTML = localStorage.getItem("lt2");
}