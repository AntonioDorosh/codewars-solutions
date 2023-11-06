// const firstReverseTry = (arr: number[]) => {
//     const firstEl = arr[0];
//     const lastEl = arr[arr.length - 1];
//
//     if (arr.length === 0) return [];
//     if (arr.length === 1) return arr;
//
//     arr[0] = lastEl;
//     arr[arr.length - 1] = firstEl;
//
//     return arr;
// };

const firstReverseTry = (arr: number[]) => {
    return arr.length > 1 ? arr.slice(-1).concat(arr.slice(1, -1)).concat(arr.slice(0, 1)) : arr;
};

firstReverseTry([23, 54, 12, 3, 4, 56, 23, 12, 5, 324]);