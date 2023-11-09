type TDeveloper = {
    firstName: string;
    lastName: string;
    country: string;
    continent: string;
    age: number;
    language: string;
}

const developerList: TDeveloper[] = [
    {
        firstName: 'Gabriel',
        lastName: 'X.',
        country: 'Monaco',
        continent: 'Europe',
        age: 49,
        language: 'PHP'
    },
    {
        firstName: 'Odval',
        lastName: 'F.',
        country: 'Mongolia',
        continent: 'Asia',
        age: 38,
        language: 'Python'
    },
    {
        firstName: 'Emilija',
        lastName: 'S.',
        country: 'Lithuania',
        continent: 'Europe',
        age: 19,
        language: 'Python'
    },
    {
        firstName: 'Sou',
        lastName: 'B.',
        country: 'Japan',
        continent: 'Asia',
        age: 49,
        language: 'PHP'
    },
];

const findOldest = (arr: TDeveloper[]) => {
    return Math.max(...arr.map(({age}) => age))
};

const findSenior = (arr: TDeveloper[]) => {
    const oldest = findOldest(arr);

    return arr.filter(({age}) => age === oldest)
};


findSenior(developerList)