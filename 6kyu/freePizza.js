const minOrders = 5;
const minPrice = 20;
const customers = {
    'John Doe': [22, 30, 11, 17, 15, 52, 27, 12], // Only has three orders above 20$, so no pizza
    'Jane Doe': [5, 17, 30, 33, 40, 22, 26, 10, 11, 45] // Has six orders above 20$, which means FREE PIZZA!
};

const freePizza = (customers, minPrice, minOrders) => {
    const filteredPerson = person => customers[person].filter((o) => o >= minPrice).length >= minOrders;

    return Object.keys(customers).filter(filteredPerson)
};

console.log(freePizza(customers, minPrice, minOrders))