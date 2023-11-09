type TDev = {
    firstName: string;
    lastName: string;
    country: string;
    continent: string;
    age: number;
    language: string;
}

const list1: TDev[] = [
    {
        firstName: 'Noah',
        lastName: 'M.',
        country: 'Switzerland',
        continent: 'Europe',
        age: 19,
        language: 'JavaScript'
    },
    {
        firstName: 'Maia',
        lastName: 'S.',
        country: 'Tahiti',
        continent: 'Oceania',
        age: 28,
        language: 'JavaScript'
    },
    {
        firstName: 'Shufen',
        lastName: 'L.',
        country: 'Taiwan',
        continent: 'Asia',
        age: 35,
        language: 'HTML'
    },
    {
        firstName: 'Sumayah',
        lastName: 'M.',
        country: 'Tajikistan',
        continent: 'Asia',
        age: 30,
        language: 'CSS'
    }
];

// // solution with filter method
// const countDevelopers = (arr: TDev[]) => {
//     return arr.filter(({language, continent}) => continent === 'Europe' && language === 'JavaScript').length
// };


// with reduce method solution
const countDevelopers = (arr: TDev[]) => {
    return arr.reduce((acc: number, {language, continent}) => {
        if (continent === 'Europe' && language === 'JavaScript') {
            return acc + 1
        }
        return acc
    }, 0)
};
console.log(countDevelopers(list1)) // return 1