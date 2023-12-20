const calculateTotal = (subtotal, tax, tip) => {
    const total = subtotal + (subtotal * (tax / 100)) + (subtotal * (tip / 100));
    return Math.round(total * 100) / 100
};

console.log(calculateTotal(5, 5, 10), 5.75)
console.log(calculateTotal(0.00, 6, 18), 0.00)