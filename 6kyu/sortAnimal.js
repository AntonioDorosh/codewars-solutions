const animalsArr = [
    { name: "Cat", numberOfLegs: 4 },
    { name: "Snake", numberOfLegs: 0 },
    { name: "Dog", numberOfLegs: 4 },
    { name: "Pig", numberOfLegs: 4 },
    { name: "Human", numberOfLegs: 2 },
    { name: "Bird", numberOfLegs: 2 }
];

const sortAnimal = (animals) => {
    return animals ? animals.sort((a, b) => a.numberOfLegs - b.numberOfLegs || a.name.localeCompare(b.name)) : null
};

sortAnimal(animalsArr)