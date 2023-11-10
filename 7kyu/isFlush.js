const isFlush = (cards) => {
    const cardArr = cards.map((item) => item.slice(-1));

    return cardArr.every((item) => item === cardArr[0])
};

console.log(isFlush([  "AS", "3S",  "9S", "KS", "4S" ]),  true )
console.log(( isFlush([ "10D", "4D",  "QD", "KD", "5D" ])), true)