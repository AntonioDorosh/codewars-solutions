// function insertDash(num) {
//     return num.toString().replace(/[13579](?=[13579])/g, '$&-')
// }

const insertDash = (num) => {
    return num.toString().split('').map((v, index, array) => index !== 0 && array[index] % 2 !== 0 && array[index - 1] % 2 !== 0 ? `-${v}` : v).join('')
};

insertDash(454793)