function addToCart(quantity, productName = "Elma") {
    console.log("Sepete Eklendi : Ürün : " + productName + " Adet : " + quantity)
}

addToCart(11)

let sayHello = () => {
    console.log("Hello world!")
}
sayHello()

let sayHello2 = function () {
    console.log("Hello world 2!")
}

sayHello2()

function addToCart2(productName, quantity, unitPrice) {

}
addToCart2("Elma", 2, 3)

function addToCart3(product) {
    console.log("Ürün eklendi : Ürün: " + product.productName + " Miktarı: " + product.quantity + " Fiyatı: " + product.unitPrice);
}
let product1 = { productName: "Elma", unitPrice: 10, quantity: 5 }
addToCart3(product1)

function add(...numbers) { //rest
    let total = 0
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i]

    }
    console.log(total)
}


add(20, 30)
add(20, 30, 40)
add(20, 30, 50)

let [icAnadolu, marmara, karadeniz, [icAnadoluSehirleri]] = [
    { name: "İç Anadolu", population: "20M" },
    { name: "Marmara", population: "30M" },
    { name: "Karadeniz", population: "10M" },
    [
        ["Ankara", "Konya"],
        ["İstanbul", "Bursa"],
        ["Bartın", "Trabzon"],
    ]
]
console.log(icAnadolu)
console.log(marmara)
console.log(karadeniz)
console.log(icAnadoluSehirleri)

let newProductName, newUnitPrice, newQuantity
({ productName: newProductName, unitPrice: newUnitPrice, quantity: newQuantity } = { productName: "Elma", unitPrice: 10, quantity: 5 })
console.log(newProductName)