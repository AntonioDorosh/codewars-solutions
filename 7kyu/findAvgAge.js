const list1 = [
    {
        firstName: 'Maria',
        lastName: 'Y.',
        country: 'Cyprus',
        continent: 'Europe',
        age: 30,
        language: 'Java'
    },
    {
        firstName: 'Victoria',
        lastName: 'T.',
        country: 'Puerto Rico',
        continent: 'Americas',
        age: 70,
        language: 'Python'
    },
];

const list2 = [
    {
        firstName: 'Noa',
        lastName: 'A.',
        country: 'Israel',
        continent: 'Asia',
        age: 20,
        language: 'Ruby'
    },
    {
        firstName: 'Andrei',
        lastName: 'E.',
        country: 'Romania',
        continent: 'Europe',
        age: 21,
        language: 'C'
    },
];

// const findAvgAge = (arr) => {
//     let result = 0;
//
//     for (let i = 0; i < arr.length; i++) {
//         result += arr[i].age
//     }
//
//     return Math.round(result / arr.length)
// };

const sumTotal = (arr) => arr.reduce((acc, {age}) => acc + age, 0) / arr.length;

const findAvgAge = (arr) => {
    const sum = sumTotal(arr);

    return Math.round(sum)
};

findAvgAge(list1); // 50
findAvgAge(list2); // 21

