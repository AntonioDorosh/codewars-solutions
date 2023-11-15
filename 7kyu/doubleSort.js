const doubleSort = (arr) => {
    const filteredByNums = arr.filter((n) => typeof n === 'number').sort((a, b) => a - b);
    const filteredByChars = arr.filter((str) => typeof str === 'string').sort((a, b) => a.localeCompare(b));
    
    return [...filteredByNums, ...filteredByChars]
};

console.log(doubleSort(doubleSort(["Banana", "Orange", "Apple", "Mango", 0, 2, 2]), [0, 2, 2, "Apple", "Banana", "Mango", "Orange"]))