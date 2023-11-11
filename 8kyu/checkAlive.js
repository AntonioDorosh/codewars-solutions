const checkAlive = (hp) => {
    return hp > 0;
};

console.log(checkAlive(5)) // true
console.log(checkAlive(0)) // false