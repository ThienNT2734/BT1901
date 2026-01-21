function Product(id, name, price, quantity, category, isAvailable) {
  this.id = id;
  this.name = name;
  this.price = price;
  this.quantity = quantity;
  this.category = category;
  this.isAvailable = isAvailable;
}

var products = [];

products.push(new Product(1, "Phone Case", 15, 10, "Accessories", true));
products.push(new Product(2, "Wireless Charger", 35, 0, "Accessories", false));
products.push(new Product(3, "Laptop", 1200, 5, "Electronics", true));
products.push(new Product(4, "Headphones", 80, 7, "Electronics", true));
products.push(new Product(5, "USB Cable", 10, 20, "Accessories", true));

// Câu 3
var namePriceList = [];
for (var i = 0; i < products.length; i++) {
  namePriceList.push({
    name: products[i].name,
    price: products[i].price
  });
}
console.log("Câu 3:", namePriceList);

// Câu 4
var conHang = [];
for (var i = 0; i < products.length; i++) {
  if (products[i].quantity > 0) {
    conHang.push(products[i]);
  }
}
console.log("Câu 4:", conHang);

// Câu 5
var coGiaLonHon30 = false;
for (var i = 0; i < products.length; i++) {
  if (products[i].price > 30) {
    coGiaLonHon30 = true;
  }
}
console.log("Câu 5:", coGiaLonHon30);

// Câu 6
var accessoriesDangBan = true;
for (var i = 0; i < products.length; i++) {
  if (products[i].category === "Accessories" && products[i].isAvailable === false) {
    accessoriesDangBan = false;
  }
}
console.log("Câu 6:", accessoriesDangBan);

// Câu 7
var tongGiaTriKho = 0;
for (var i = 0; i < products.length; i++) {
  tongGiaTriKho += products[i].price * products[i].quantity;
}
console.log("Câu 7:", tongGiaTriKho);

// Câu 8
for (var product of products) {
  console.log(product.name + " - " + product.category + " - " + product.isAvailable);
}

// Câu 9
for (var key in products[0]) {
  console.log(key + ":", products[0][key]);
}

// Câu 10
var dangBanVaConHang = [];
for (var i = 0; i < products.length; i++) {
  if (products[i].isAvailable && products[i].quantity > 0) {
    dangBanVaConHang.push(products[i].name);
  }
}
console.log("Câu 10:", dangBanVaConHang);
