const repeatsNums = (arr) => {
    const findUnique = arr.filter((item, index, array) => array.indexOf(item) === array.lastIndexOf(item));

    return findUnique.reduce((acc, current) => acc + current, 0)
};

repeatsNums([4,5,7,5,4,8], 15)

// describe("Basic tests", function(){
//     Test.assertEquals(repeats([4,5,7,5,4,8]),15);
//     Test.assertEquals(repeats([9, 10, 19, 13, 19, 13]),19);
//     Test.assertEquals(repeats([16, 0, 11, 4, 8, 16, 0, 11]),12);
//     Test.assertEquals(repeats([5, 17, 18, 11, 13, 18, 11, 13]),22);
//     Test.assertEquals(repeats([5, 10, 19, 13, 10, 13]),24);
// });