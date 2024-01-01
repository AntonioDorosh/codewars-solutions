const stepThroughWith = (str) => {
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === str.charAt(i + 1)) {
            return true
        }
    }

    return false;
};

console.log(stepThroughWith("branch"), false, "You can take the tree or the wood, but not a branch")