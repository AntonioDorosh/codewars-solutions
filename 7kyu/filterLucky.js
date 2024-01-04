const filterLucky = (arr, num) => arr.filter((el) => el.toString().includes(num));


console.log(filterLucky([71, 9907, 69], 7), [71, 9907])
console.log(filterLucky([1,2,3,4,5,6,7,68,69,70,15,17], 7), [7, 70, 17])