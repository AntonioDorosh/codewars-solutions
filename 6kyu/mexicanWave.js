const mexicanWave = (str) => {
    let waveResult = [];

    for (let i = 0; i < str.length; i++) {
        const letter = str[i];

        if (letter === ' ') {
            continue;
        } else {
            waveResult.push(str.slice(0, i) + letter.toUpperCase() + str.slice(i + 1))
        }
    }

    return waveResult;
};

mexicanWave('hello')