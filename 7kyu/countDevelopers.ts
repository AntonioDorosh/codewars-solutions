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

const countDevelopers = (arr: TDev[]) => {
    return arr.filter((dev) => dev.continent === 'Europe' && dev.language === 'JavaScript').length
};

console.log(countDevelopers(list1)) // return 1