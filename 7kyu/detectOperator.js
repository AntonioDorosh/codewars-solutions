const operators = {
    39: 'Golden Telecom',
    50: 'MTS',
    63: 'Life:)',
    66: 'MTS',
    67: 'Kyivstar',
    68: 'Beeline',
    93: 'Life:)',
    95: 'MTS',
    96: 'Kyivstar',
    97: 'Kyivstar',
    98: 'Kyivstar',
    99: 'MTS'
};

const detectOperator = (num) => {
    const key = Object.keys(operators).find((pref) => String(num).slice(2,4).includes(pref) && operators[pref]);

    return operators[key] || 'no info'
};

console.log(detectOperator(80931551119), 'Life:)') // Life:)
console.log(detectOperator('80501551119'), 'MTS') // MTS