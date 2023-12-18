const remove = (str, n) => {
    return str.split('').map((item) => {
        if (n > 0 && item === '!') {
            n--;
            return ''
        }
        return item
    }).join('')
};

console.log(remove('Hi!', 1), 'Hi')
