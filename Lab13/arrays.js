let products = [
  { name: "Laptop", price: 850, category: "Electronics" },
  { name: "Notebook", price: 5, category: "School Supplies" },
  { name: "Headphones", price: 45, category: "Electronics" },
  { name: "Backpack", price: 35, category: "School Supplies" },
  { name: "Monitor", price: 220, category: "Electronics" },
];

//Task 1 -----------------------
console.log('Task 1:')
console.log(products[0].name);
console.log(products[4].price);

// Task 2 ----------------------
console.log('Task 2:')
for(const product of products) {
  console.log(product.name);
}

// Task 3 ----------------------
console.log('Task 3:')
function name_and_price(product) {
  return (`${product.name}: $${product.price}`);
}
products.forEach((product) => {
  console.log(name_and_price(product))
});

// Task 4 ----------------------
console.log('Task 4:')
console.log(name_and_price(products.find(product => product.name == 'Backpack')));

// Task 5 ----------------------
console.log('Task 5:')
let electronics = products.filter(product => product.category == "Electronics");
console.log (electronics);

