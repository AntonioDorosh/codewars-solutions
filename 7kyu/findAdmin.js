const personList = [
    {
        firstName: 'Harry',
        lastName: 'K.',
        country: 'Brazil',
        continent: 'Americas',
        age: 22,
        language: 'JavaScript',
        githubAdmin: 'yes'
    },
    {
        firstName: 'Kseniya',
        lastName: 'T.',
        country: 'Belarus',
        continent: 'Europe',
        age: 49,
        language: 'Ruby',
        githubAdmin: 'no'
    },
    {
        firstName: 'Jing',
        lastName: 'X.',
        country: 'China',
        continent: 'Asia',
        age: 34,
        language: 'JavaScript',
        githubAdmin: 'yes'
    },
    {
        firstName: 'Piotr',
        lastName: 'B.',
        country: 'Poland',
        continent: 'Europe',
        age: 128,
        language: 'JavaScript',
        githubAdmin: 'no'
    }
];

const findAdmin = (arr, lang) => {
    return arr.filter(({githubAdmin, language}) => githubAdmin === 'yes' && language === lang)
};

findAdmin(personList, 'JavaScript')


// [
//   {
//     firstName: 'Harry',
//     lastName: 'K.',
//     country: 'Brazil',
//     continent: 'Americas',
//     age: 22,
//     language: 'JavaScript',
//     githubAdmin: 'yes'
//   },
//   {
//     firstName: 'Jing',
//     lastName: 'X.',
//     country: 'China',
//     continent: 'Asia',
//     age: 34,
//     language: 'JavaScript',
//     githubAdmin: 'yes'
//   }
// ]