const printNumbers = (initialValue) => {
    let index = initialValue;

    while (index >= 1) {
        console.log(index)
        index--;
    }

    console.log('finished')
};

printNumbers(5)