type TArray = {
    firstName: string | null;
    lastName: string;
    country: string;
    continent: string;
    age: number;
    language?: string | null;
    question?: string
}

const list1 = [
    {
        firstName: null,
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
        language: null
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

const askForMissingDetails = (arr: TArray[]) => {
    return arr.filter((obj) => {
        const [missingProperty] = Object.keys(obj).filter((prop) => obj[prop] === null);

        if (missingProperty) {
            obj.question = `Hi, could you please provide your ${missingProperty}`

            return obj
        }
    })
};

console.log(askForMissingDetails(list1));