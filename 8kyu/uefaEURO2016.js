const uefaEuro2016 = (teams, scores) => {
    const [teamA, teamB] = teams;
    const [scoreA, scoreB] = scores;
    let result = '';

    if (scoreA > scoreB) {
        result += `At the match ${teamA} - ${teamB}, ${teamA} won!`
    } else if (scoreA < scoreB) {
        result += `At the match ${teamA} - ${teamB}, ${teamB} won!`
    } else {
        result += `At the match ${teamA} - ${teamB}, teams played draw.`
    }

    return result;
};

console.log(uefaEuro2016(['Germany', 'Ukraine'], [2, 0]), 'At match Germany - Ukraine, Germany won')