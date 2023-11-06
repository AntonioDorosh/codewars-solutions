type TInfo = {
    firstName: string;
    lastName: string;
    country?: string;
    continent?: string;
    age?: number;
    language?: string;
}

const list1: TInfo[] = [
    {
        firstName: 'Emily',
        lastName: 'N.',
        country: 'Ireland',
        continent: 'Europe',
        age: 30,
        language: 'Ruby'
    },
    {
        firstName: 'Nor',
        lastName: 'E.',
        country: 'Malaysia',
        continent: 'Asia',
        age: 20,
        language: 'Clojure'
    }
];

const makeLogin = ({firstName, lastName, age}: TInfo): string => {
    const getYear = new Date().getFullYear();
    const birthYear = getYear - age;

    return `${firstName}${lastName}${birthYear}`.replace('.', '').toLowerCase();
};

const addUserName = (arr: TInfo[]) => {
    return arr.map((person) => {
        const {firstName, lastName, age} = person;

        return {
            ...person,
            username: makeLogin({firstName, lastName, age})
        }
    })
};

addUserName(list1)

