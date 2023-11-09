const list1 = [
    {
        firstName: 'Noah',
        lastName: 'M.',
        country: 'Switzerland',
        continent: 'Europe',
        age: 19,
        language: 'C',
        meal: 'vegetarian'
    },
    {
        firstName: 'Anna',
        lastName: 'R.',
        country: 'Liechtenstein',
        continent: 'Europe',
        age: 52,
        language: 'JavaScript',
        meal: 'standard'
    },
    {
        firstName: 'Ramona',
        lastName: 'R.',
        country: 'Paraguay',
        continent: 'Americas',
        age: 29,
        language: 'Ruby',
        meal: 'vegan'
    },
    {
        firstName: 'George',
        lastName: 'B.',
        country: 'England',
        continent: 'Europe',
        age: 81,
        language: 'C',
        meal: 'vegetarian'
    },
];

const orderFood = (arr) => {
    return arr.reduce((acc, {meal}) => {
        if (acc[meal]) {
            acc[meal] += 1
        } else {
            acc[meal ] = 1
        }
        return acc;
    }, [])
};

console.log(orderFood(list1)) // output [ vegetarian: 2, standard: 1, vegan: 1 ]

