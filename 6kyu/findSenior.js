const developerList= [
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

const findSenior = (arr) => {
  const oldestPerson = Math.max(...arr.map((dev) => dev.age));

  return arr.filter((dev) => dev.age === oldestPerson)
};


findSenior(developerList)