const calculateTotal = (subtotal, tax, tip) => {
    return Math.round(subtotal * (100 + tax + tip)) / 100
};

console.log(calculateTotal(5, 5, 10), 5.75)
console.log(calculateTotal(0.00, 6, 18), 0.00)