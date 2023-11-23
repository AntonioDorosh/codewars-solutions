const arr = [
    {
        name: 'apple',
        price: 100
    },
    {
        name: 'orange',
        price: 200
    },
    {
        name: 'banana',
        price: 300
    },
    {
        name: 'kiwi',
        price: 400
    },
    {
        name: 'melon',
        price: 500
    },
    {
        name: 'mango',
        price: 600
    },
    {
        name: 'strawberry',
        price: 700
    },
    {
        name: 'grape',
        price: 800
    },
    {
        name: 'peach',
        price: 900
    },
    {
        name: 'pear',
        price: 1000
    }
];

const getDiscount = (arr, n) => {
    let result = [];

    arr.forEach((item) => {
        result.push({
            name: item.name,
            price: item.price - (item.price * (n / 100))
        })
    })

    return result
};

console.log(getDiscount(arr, 10));