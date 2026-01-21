// ================= CÂU 1 =================
// khai báo Constructor function Product
function Product(id, name, price, quantity, category, isAvailable) {
  this.id = id;
  this.name = name;
  this.price = price;
  this.quantity = quantity;
  this.category = category;
  this.isAvailable = isAvailable;
}

// ================ CÂU 2 =================
// khởi tạo mảng products (ít nhất 5 sản phẩm, ≥ 2 danh mục)
const products = [
  new Product(1, "Phone Case", 15, 10, "Accessories", true),
  new Product(2, "Wireless Charger", 35, 0, "Accessories", false),
  new Product(3, "Laptop", 1200, 5, "Electronics", true),
  new Product(4, "Headphones", 80, 7, "Electronics", true),
  new Product(5, "USB Cable", 10, 20, "Accessories", true)
];

// ================= CÂU 3 =================
// tạo mảng mới chỉ chứa name và price
const nameAndPrice = products.map(p => ({
  name: p.name,
  price: p.price
}));
console.log("Câu 3:", nameAndPrice);

// ================= CÂU 4 ================
// lọc sản phẩm còn hàng 
const inStockProducts = products.filter(p => p.quantity > 0);
console.log("Câu 4:", inStockProducts);

// ================= CÂU 5 =================
// kiểm tra xem có ít nhất 1 sản phẩm giá > 30
const hasPriceOver30 = products.some(p => p.price > 30);
console.log("Câu 5:", hasPriceOver30);

// ================= CÂU 6 ===============
// kiểm tra xem tất cả Accessories có đang bán không
const accessoriesAvailable = products
  .filter(p => p.category === "Accessories")
  .every(p => p.isAvailable === true);

console.log("Câu 6:", accessoriesAvailable);

// =============== CÂU 7 =================
// tính tổng giá trị kho hàng
const totalInventoryValue = products.reduce(
  (total, p) => total + p.price * p.quantity,
  0
);
console.log("Câu 7:", totalInventoryValue);

// ================= CÂU 8 =================
// dùng for of duyệt mảng in ra Tên, Danh mục, Trạng thái
console.log("Câu 8:");
for (const product of products) {
  console.log(
    `${product.name} - ${product.category} - ${product.isAvailable ? "Đang bán" : "Ngừng bán"}`
  );
}

// =============== CÂU 9 =================
// dùng for in in tên thuộc tính và giá trị
console.log("Câu 9:");
for (const key in products[0]) {
  console.log(key + ":", products[0][key]);
}

// ================= CÂU 10 ===============
// in danh sách tên sản phẩm đang bán và còn hàng
const sellingAndInStock = products
  .filter(p => p.isAvailable && p.quantity > 0)
  .map(p => p.name);

console.log("Câu 10:", sellingAndInStock);
