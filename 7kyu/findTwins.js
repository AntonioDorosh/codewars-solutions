const elimination = (arr) => {
    const duplicate = arr.filter((item, index, array) => array.indexOf(item) !== index);

    if (duplicate.length === 0) return null;

    return parseInt(duplicate.join(''));
};

console.log(elimination([2,5,34,1,22,1]), 1, 'twins are 1s')
console.log(elimination([2,5,34,1,22]), null, "There are no twins in the city")