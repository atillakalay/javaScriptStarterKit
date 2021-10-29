console.log("Merhaba Kodlama.io")

let dolarYesterday = 9.30
let dolarToday = 9.20

if (dolarYesterday > dolarToday) {
    console.log("Dolar Düşmüştür!");
}
else {
    console.log("Dolar Artmıştır!");
}

let konutKredileri = ["Konut Kredisi", "Emlak Konut Kredisi", "Kamu Konut Kredisi"]
console.log("<ul>")
for (let i = 0; i < konutKredileri.length; i++) {
    console.log("<li>" + konutKredileri[i] + "</li>")
}
console.log("</ul>")