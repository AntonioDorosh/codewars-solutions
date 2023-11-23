const sortme = (names) => names.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

console.log(sortme(["Hello", "there", "I'm", "fine"]), ["fine", "Hello", "I'm", "there"])
console.log(sortme(["C", "d", "a", "B"]), ["a", "B", "C", "d"])
console.log(sortme(['Have', 'say', 'Say', 'young']), ['Have', 'Say', 'say', 'young'])
