const hellKitchen = (str) => {
    const findA = /A/gi;
    const vowels = /[aeiou]/gi;
    const replacingWords = str.replace(findA, '@').replace(vowels, '*');

    return replacingWords.split(' ').map((letter) => letter.toUpperCase() + '!!!!').join(' ')
};

hellKitchen('What feck damn cake') // WH@T!!!! F*CK!!!! D@MN!!!! C@K*!!!!

