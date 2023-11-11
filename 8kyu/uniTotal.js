const uniTotal = (str) => {
    const strArr = str.split('');

    return strArr.map((item) => parseInt(item.charCodeAt(item.replace('')))).reduce((acc, num) => acc + num, 0)
};
console.log(uniTotal('aaa'));
console.log(uniTotal("Mary Had A Little Lamb", 1873));
console.log(uniTotal('JVT]Who0p2q.{DB'));