// filter solution
// const filterLucky = (arr, num) => arr.filter((el) => el.toString().includes(num));

// reduce solution

const filterLucky = (arr, target) => {
    return arr.reduce((acc, currentValue) => {
        const strArr = currentValue.toString();

        if (strArr.includes(target)) {
            acc.push(currentValue)
        }

        return acc
    }, [])
};

// forEach sol

// const filterLucky = (arr, target) => {
//     const result = [];
//
//     arr.forEach((el) => {
//         if (el.toString().includes(target)) {
//             result.push(el)
//         }
//     })
//
//     return result
// };



console.log(filterLucky([71, 9907, 69], 7), [71, 9907])
console.log(filterLucky([1,2,3,4,5,6,7,68,69,70,15,17], 7), [7, 70, 17])