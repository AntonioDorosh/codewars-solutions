const stepThroughWith = (str) => {
    let last = str[0]

    for (let i = 0; i < str.length; i++) {
        const element = str[i];

        if (last === element) return true;

        last = element
    }

    return false
};

console.log(stepThroughWith("branch"), false, "You can take the tree or the wood, but not a branch")