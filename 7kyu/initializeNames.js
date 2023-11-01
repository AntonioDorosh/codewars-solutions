const firstSolution = (name) => {
   const arr = name.split(' ');

    for (let i = 1; i < arr.length - 1; i++) {
        arr[i] = arr[i].charAt(0) + '.'
    }

    return arr.join(' ')
};

console.log(firstSolution('Los Mary Lane'))

const initializeNames = (name) => {
    const arr = name.split(' ');
    let fullName = name;

    if (arr.length > 2) {
        let [firstName, lastName, middleName] = [arr.at(0), arr.at(-1), arr.slice(1, -1)];
        let middleChange = middleName.map((val) => `${val.charAt(0)}.`).join(' ');
        fullName = `${firstName} ${middleChange} ${lastName}`
    }

    return fullName
};

console.log(initializeNames('Los Mary Lane'))