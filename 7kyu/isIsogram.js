const isIsogram = (str) => {
    let result = str.toLowerCase();

    for (let i = 0; i < str.length; i++) {
        const el = str[i];

        if (result.slice(i + 1).includes(el)) {
            return false
        }
    }

    return true;
};


console.log(isIsogram("Dermatoglyphics"), true)
console.log(isIsogram('aba'), false)