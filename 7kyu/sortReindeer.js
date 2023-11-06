const input = [
    "Dasher Tonoyan", "Dancer Moore", "Prancer Chua", "Vixen Hall",
    "Comet Karavani", "Cupid Foroutan", "Donder Jonker", "Blitzen Claus"
];


const sortReindeer = (names) => {

    return [...names].map((item) => item.split(' ')).sort((a, b) => a[1].localeCompare(b[1])).map((item) => item.join(' '))
};

sortReindeer(input)

// output

// [
//   'Prancer Chua',
//   'Blitzen Claus',
//   'Cupid Foroutan',
//   'Vixen Hall',
//   'Donder Jonker',
//   'Comet Karavani',
//   'Dancer Moore',
//   'Dasher Tonoyan'
// ]
