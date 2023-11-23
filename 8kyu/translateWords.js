const dictionary = {
    'hello': 'привет',
    'world': 'мир',
    'learning': 'учу',
    'javascript': 'Javascript'
};

const translateWords = (word) => {
    const translate = dictionary[word.toLowerCase()];

    if (translate) {
        return `Перевод для слова ${word} - ${translate}`
    } else {
        return `Перевод для слова ${word} - не найден`
    }
};

console.log(translateWords('hello'))
console.log(translateWords('learning'))