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
        firstName: 'Mark',
        lastName: 'G.',
        country: 'Scotland',
        continent: 'Europe',
        age: 22,
        language: 'JavaScript'
    },
    {
        firstName: 'Victoria',
        lastName: 'T.',
        country: 'Puerto Rico',
        continent: 'Americas',
        age: 30,
        language: 'Python'
    },
    {
        firstName: 'Emma',
        lastName: 'B.',
        country: 'Norway',
        continent: 'Europe',
        age: 19,
        language: 'Clojure'
    }
];

const getPythonDev = (arr: TDev[]) => {
    const pythonDevExist = arr.find(({language}) => language === 'Python');

    return pythonDevExist ? `${pythonDevExist.firstName}, ${pythonDevExist.country}` : 'There will be no Python developers'
};

console.log(getPythonDev(list1)) //  output  Victoria, Puerto Rico.