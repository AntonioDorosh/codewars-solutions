const winnerList = [
    {
        season: '1999-00',
        team: 'Real-Madrid',
        country: 'Spain'
    },
    {
        season: '2000-01',
        team: 'Bayern-Munich',
        country: 'Germany'
    },
    {
        season: '2001-02',
        team: 'Real-Madrid',
        country: 'Spain'
    },
    {
        season: '2002-03',
        team: 'Milan',
        country: 'Italy'
    }
];


// reduce sol
// const countWins = (arr, country) => {
//     return arr.reduce((acc, obj) => {
//         if (obj.country === country) {
//             acc++
//         }
//         return acc
//     }, 0)
// };


//filter sol
const countWins = (arr, country) => arr.filter((obj) => obj.country === country).length;

console.log(countWins(winnerList, 'Spain'))