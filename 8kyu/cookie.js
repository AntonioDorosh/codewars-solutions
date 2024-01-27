const cookie = (x) => {
    const type = typeof x;
    let who = (type) === 'string' ? 'Zach' : type === 'number' ? 'Monica' : 'the dog';

    return `Who ate the last cookie? It was ${who}`
};

console.log(cookie("Ryan"), "Who ate the last cookie? It was Zach!");
console.log(cookie(2.3), "Who ate the last cookie? It was Monica!")
console.log(cookie(true), "Who ate the last cookie? It was the dog!")