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


for(let product of products) {
    let discount = 0;
    switch(product) {
        case "Electronics":
            discount = 0.20;
            break;
        case "Apparel":
            discount = 0.15;
            break;
        case "Groceries":
            discount = 0.1;
            break;
        case "Household":
            discount = 0.1;
            break;
        default:
            discount = 0;
        
    }
};