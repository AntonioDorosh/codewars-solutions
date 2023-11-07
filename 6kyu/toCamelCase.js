const toCamelCase = (str) => {
    const words = str.split(/[-_]/);

    return words.map((char, index) => index === 0 ? char : char[0].toUpperCase() + char.slice(1)).join('')
};

toCamelCase('the_stealth_warrior') // output theStealthWarrior
