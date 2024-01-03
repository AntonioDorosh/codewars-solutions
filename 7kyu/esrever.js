const esrever = (str) => {
    return str.slice(0, -1).split('').reverse().join('') + str.slice(-1)
};

console.log(esrever('an Easy one?'), 'eno ysaE na?')