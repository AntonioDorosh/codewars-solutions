const initializeNames = (name) => {
   const arr = name.split(' ');

    for (let i = 1; i < arr.length - 1; i++) {
        arr[i] = arr[i].charAt(0) + '.'
    }

    return arr.join(' ')
};

console.log(initializeNames('Los Mary Lane'))