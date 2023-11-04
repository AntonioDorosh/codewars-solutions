const stringReverse = (str) => {
    return str.split(' ').map((char) => char[0].toUpperCase() + char.slice(1)).join(' ').split('').reverse().join('')
};

stringReverse('hello word') // droW olleH
