const SubStringTest = (str1, str2) => {
    const arr = [];
    const arr2 = [];

    for (let i = 0; i < str1.length - 1; i++) {

        arr.push(str1.toLowerCase().slice(i, i + 2))
    }

    for (let i = 0; i < str2.length - 1; i++) {
        arr2.push(str2.toLowerCase().slice(i, i + 2))
    }
    return arr.filter((v) => arr2.includes(v)).length > 0
};

console.log(SubStringTest('Something', 'Home'));
console.log(SubStringTest('Something', 'Fun'));