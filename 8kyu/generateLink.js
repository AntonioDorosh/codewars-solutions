const URL = 'http://www.codewars.com/users/';

const generateLink = (user) => {
    return URL + encodeURIComponent(user)
};

console.log(generateLink('matt c'))