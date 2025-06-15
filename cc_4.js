const products = [
{
    name: "laptop", 
    category:"electronics",
    price: 1200,
    inventory: 10
}, 
{ 
    name: "sweater",
    category: "apparel",
    price: 30,
    inventory: 50
}, 
{
    name: "banana",
    category: "groceries",
    price: 3,
    inventory: 100
}, 
{ 
    name: "rug",
    category: "household",
    price: 750,
    inventory: 5
},
{ 
    name: "screwdriver",
    category: "hardware",
    price: 7,
    inventory: 25
}];

console.log("Initial Products and Inventory:");
products.forEach((product, index) => {
    console.log(`\nProduct ${index + 1}:`);
    for (const [key, value] of Object.entries(product)) {  
        console.log(`${key}: ${value}`);
    }
});

for(let product of products) {
    let discount = 0;
    switch(product.category) {
        case "electronics":
            discount = 0.20;
            break;
        case "apparel":
            discount = 0.15;
            break;
        case "groceries":
            discount = 0.1;
            break;
        case "household":
            discount = 0.1;
            break;
        default:
            discount = 0;
        
    }
    product.categoryDiscount = discount
};

console.log("\n-------------------------------------");
console.log("\nDiscounts by Category")
products.forEach(product => {
console.log(`${product.category}: ${(product.categoryDiscount)* 100}% discount`)
});


let customerType = "senior";
let discount2 = 0;
if (customerType === "senior") {
  discount2 = 0.07;
} else if (customerType === "student") {
  discount2 = 0.05;
} else {
  discount2 = 0;
};


console.log("\n-------------------------------------");
console.log("\nDiscounts by Customer Type:");
console.log("senior: 7% discount");
console.log("student: 5% discount");
console.log("regular: 0% discount");


for (let product of products){
    product.finalPrice = product.price * (1-product.categoryDiscount) * (1-discount2);
};


const customers = [{
    customerType: "senior", 
    customerCart: ["banana", "screwdriver"]
},
{
    customerType: "student",
    customerCart: ["laptop", "rug"]
}, 
{
    customerType: "regular",
    customerCart: ["sweater", "laptop"]
}];

console.log("\n-------------------------------------");
console.log("\nCustomer Carts:");
customers.forEach((customer, index) => {
    console.log(`\nCustomert ${index + 1}:`);
    for (const [key, value] of Object.entries(customer)) {  
        console.log(`${key}: ${value}`);
    }
});

console.log("\n-------------------------------------");
console.log("\nCustomer Checkout with Discounts Applied")

for(let i = 0; i < customers.length; i++) {
    let customer = customers[i];
    let customerType = customer.customerType;
    let cart = customer.customerCart;
    let discount2 = 0;
    if (customerType === "senior") {
        discount2 = 0.07;
    } else if (customerType === "student") {
        discount2 = 0.05;
    } else {
        discount2 = 0;
    };
    let totalCost = 0;
    for (let item of cart) {
        let product = products.find(product => product.name === item);
        if (product && product.inventory > 0) {
            let productFinalPrice = product.price * (1 - product.categoryDiscount) * (1 - discount2);
            totalCost += productFinalPrice;
            product.inventory --;

        };
    };
    console.log(`Customer ${i + 1}, (${customerType}): Total Cost = $${totalCost.toFixed(2)}`);
};


console.log("\n-------------------------------------");
console.log("\nLaptop Information After Discounts Applied")
let laptopDiscounted = products[0];
laptopDiscounted.discountedPrice = laptopDiscounted.price * (1 - laptopDiscounted.categoryDiscount);
for (let key in laptopDiscounted) {
    if (key !== "finalPrice") {
    console.log(`${key}: ${laptopDiscounted [key]}`);
}}

console.log("\n-------------------------------------");
console.log("\nFinal Inventory Check");
products.forEach((product, index) => {
    console.log(`\nProduct ${index + 1}:`);
    for (const [key, value] of Object.entries(product)) { 
        if (key !== "finalPrice" && key !== "categoryDiscount" && key !== "discountedPrice") {
        console.log(`${key}: ${value}`);
    }}
});
