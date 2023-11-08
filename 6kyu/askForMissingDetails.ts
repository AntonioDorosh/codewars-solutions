type TArray = {
    firstName: string | null;
    lastName: string;
    country: string;
    continent: string;
    age: number;
    language: string | null;
    question?: string;
}

const list1: TArray[] = [
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
    return arr.reduce((acc: TArray[], obj: TArray) => {
        const missingProperty = Object.entries(obj).find(([_, value]) => value === null);

        if (missingProperty) {
            return [
                ...acc,
                {
                    ...obj,
                    question: `Hi, could you please provide your ${missingProperty[0]}.`
                }
            ]
        }
        return acc
    }, [])
};

console.log(askForMissingDetails(list1));