type TPerson = {
    firstName: string;
    lastName: string;
    country: string;
    age: number;
    continent: string;
    language: string;
    githubAdmin: string;
}

const personList: TPerson[] = [
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

const findAdmin = (arr: TPerson[], correct: string , lang: string) => arr.filter(({githubAdmin, language}) => githubAdmin === correct && language === lang)

findAdmin(personList, 'yes', 'JavaScript')


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