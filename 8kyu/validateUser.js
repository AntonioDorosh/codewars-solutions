const validateUser = (username) => {
    return username.length >= 4 && username.length <= 16 && (username.match(/[a-z]|_|\d/g).length === username.length)
};

console.log(validateUser('asdssa'), true)
console.log(validateUser('a'), false)