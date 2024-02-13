
const arr1 = [1,2,3];
const arr2 = ['a', 'b', 'c'];

const arrayMash = (arr1, arr2) => {
    let result = [];

    // for (let i = 0; i < arr1.length; i++) {
    //     result.push(arr1[i], arr2[i])
    // }

    arr1.forEach((item, index) => {
        result.push(item, arr2[index])
    })

    return result
};


console.log(arrayMash(arr1, arr2)) // [1, 'a', 2, 'b', 3, 'c']