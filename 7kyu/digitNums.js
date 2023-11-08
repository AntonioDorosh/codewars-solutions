const digitNums = (num) => +num.toString().split('').map((item) => item * item).join('');

digitNums(3212)// 9414 output