const evenChars = (string) => {
    return string.length > 100 | string.length < 2 ? 'invalid string' : [...string].filter((_, index) => 1  === index  % 2)
};

console.log(evenChars('abcdefghikjlm')) // --> ["b", "d", "f", "h", "j", "l"]