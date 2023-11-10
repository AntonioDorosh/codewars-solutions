const list1 = [
    {
        firstName: 'Emma',
        lastName: 'Z.',
        country: 'Netherlands',
        continent: 'Europe',
        age: 29,
        language: 'Ruby'
    },
    {
        firstName: 'Piotr',
        lastName: 'B.',
        country: 'Poland',
        continent: 'Europe',
        age: 128,
        language: 'Javascript'
    },
    {
        firstName: 'Jayden',
        lastName: 'P.',
        country: 'Jamaica',
        continent: 'Americas',
        age: 42,
        language: 'JavaScript'
    }
];


const isRubyComing = (list) => {
    return list.some((person) => person.language === 'Ruby')
};

console.log(isRubyComing(list1))