const replaceDots =  (str) => {
    return str.replaceAll('.', '-');
};

console.log(replaceDots('one.two.three')); // 'one-two-three'