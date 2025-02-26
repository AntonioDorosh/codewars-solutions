// const isIsograms = (str) => {
//     let result = str.toLowerCase();
//
//     for (let i = 0; i < str.length; i++) {
//         const el = str[i];
//
//         if (result.slice(i + 1).includes(el)) {
//             return false
//         }
//     }
//
//     return true;
// };

const isIsograms = (str) => {
    const set = new Set();

    for (const strElement of str) {
        const toLowerChars = strElement.toLowerCase();

        if (set.has(toLowerChars)) {
            return false;
        }

        set.add(toLowerChars)

        console.log(set)
    }

    return true;
};

console.log(isIsograms("Dermatoglyphics"), true)
console.log(isIsograms('aba'), false)