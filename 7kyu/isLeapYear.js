function isLeapYear(year) {
    // TODO
    return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
}

console.log(isLeapYear(2020), true)
console.log(isLeapYear(2015), false)