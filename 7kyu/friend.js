const friend = (friends) => {
    return friends.filter((person) => person.length === 4);
};

console.log(friend(['Ryan', 'Kieran', 'Mark'])) // ['Ryan', 'Mark']