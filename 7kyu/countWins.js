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

const countWins = (arr, country) => {
    return arr.reduce((acc, obj) => {
        if (obj.country === country) {
            acc++
        }
        return acc
    }, 0)
};

console.log(countWins(winnerList, 'Spain'))