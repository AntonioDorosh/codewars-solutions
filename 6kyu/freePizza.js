const minOrders = 5;
const minPrice = 20;
const customers = {
    'John Doe': [22, 30, 11, 17, 15, 52, 27, 12], // Only has three orders above 20$, so no pizza
    'Jane Doe': [5, 17, 30, 33, 40, 22, 26, 10, 11, 45] // Has six orders above 20$, which means FREE PIZZA!
};

const freePizza = (customers, minPrice, minOrders) => {
    const keys = Object.keys(customers);
    const filteredPerson = person => customers[person].filter((item) => item >= minPrice).length >= minOrders;
    
    return keys.filter(filteredPerson)

};

console.log(freePizza(customers, minPrice, minOrders))