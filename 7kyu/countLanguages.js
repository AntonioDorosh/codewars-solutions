const list1 = [
    {
        firstName: 'Noah',
        lastName: 'M.',
        country: 'Switzerland',
        continent: 'Europe',
        age: 19,
        language: 'C'
    },
    {
        firstName: 'Anna',
        lastName: 'R.',
        country: 'Liechtenstein',
        continent: 'Europe',
        age: 52,
        language: 'JavaScript'
    },
    {
        firstName: 'Ramon',
        lastName: 'R.',
        country: 'Paraguay',
        continent: 'Americas',
        age: 29,
        language: 'Ruby'
    },
    {
        firstName: 'George',
        lastName: 'B.',
        country: 'England',
        continent: 'Europe',
        age: 81,
        language: 'C'
    },
];

// const countLanguages = (arr) => {
//     let result = {};
//
//     for (let i = 0; i < arr.length; i++) {
//         if (result[arr[i].language] === undefined) {
//             result[arr[i].language] = 1;
//         } else {
//             result[arr[i].language]++;
//         }
//     }
//     return result;
// };

const countLanguages = (list) => {
    return list.reduce((obj, {language}) => {
        if (obj[language] === undefined) {
            obj[language] = 1;
        } else {
            obj[language]++;
        }
        return obj;
    }, {})
};

console.log(countLanguages(list1), { "C": 2, "Java": 1, "Ruby": 1 })