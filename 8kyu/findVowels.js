const findVowels = (str) => {
    let count = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    for (const char of str.toLowerCase()) {
        if (vowels.includes(char)) {
            count++
        }
    }
    return count;
};

console.log(findVowels('Hello, man'))