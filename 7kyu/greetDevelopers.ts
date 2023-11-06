type Developer = {
    firstName: string;
    lastName: string;
    country: string;
    continent: string;
    age: number;
    language: string;
    greeting?: string;
}

const arrList: Developer[] = [
    {
        firstName: 'Sofia',
        lastName: 'I.',
        country: 'Argentina',
        continent: 'Americas',
        age: 35,
        language: 'Java'
    },
    {
        firstName: 'Lukas',
        lastName: 'X.',
        country: 'Croatia',
        continent: 'Europe',
        age: 35,
        language: 'Python'
    },
    {
        firstName: 'Madison',
        lastName: 'U.',
        country: 'United States',
        continent: 'Americas',
        age: 32,
        language: 'Ruby'
    }
];

const greetHandler = (name: string, lang: string) => `Hi ${name}, what do you like the most about ${lang}?`;

const greetDevelopers = (list: Developer[]) => {
    return list.map((dev) => ({
        ...dev,
        greeting: greetHandler(dev.firstName, dev.language)
    }))
};

greetDevelopers(arrList)