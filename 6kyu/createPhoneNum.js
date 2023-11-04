const createPhoneNum = (numbers) => {
    let formatNum = '(xxx) xxx-xxxx';

    for (let i = 0; i < numbers.length; i++) {
        formatNum = formatNum.replace('x', numbers[i])
    }

    return formatNum
};

createPhoneNum([1,2,3,4,5,6,7,8,9,0])