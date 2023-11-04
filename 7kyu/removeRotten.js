const removeRotten = (fruitArr) => {
    return fruitArr ? fruitArr.map((fruit) => fruit.replace('rotten', '').toLowerCase()) : [];
};

removeRotten(["apple", "rottenBanana", "rottenKiwi", "melone", "orange"])