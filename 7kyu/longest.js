const longest = (str1, str2) => {
    const a1 = [...str1, ...str2].sort();

    const filtered = a1.filter((el, index, array) => {
        return el !== array[index - 1]
    });

    return filtered.join('')
};

console.log(longest("aretheyhere", "yestheyarehere") === "aehrsty")