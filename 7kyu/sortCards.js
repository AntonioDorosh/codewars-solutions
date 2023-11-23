const sortCards = (array) => {
    const cardPriorities = 'A23456789TJQK';

    return array.sort((a, b) => {
        return cardPriorities.indexOf(a) - cardPriorities.indexOf(b)
    })
};

console.log(sortCards([3,9,"A",5,"T",8,2,4,"Q",7,"J",6,"K"]), ["A",2,3,4,5,6,7,8,9,"T","J","Q","K"])
console.log(sortCards(["J","J",2,"T",9,6]), [2,6,9,"T","J","J"])