const products = [
	{name: "Сэндвич", price: 5, category: "Еда/Стрит-фуд"},
	{name: "Сок", price: 2, category: "Напитки"},
	{name: "Пицца", price: 15, category: "Еда/Пицца"},
	{name: "Кола", price: 3, category: "Напитки"},
	{name: "Лапша", price: 10, category: "Еда/Стрит-фуд"}
];


const summarizeProducts = (products) => {
	return products.reduce((acc, product) => {
		const { price, category } = product;
		const splitCategory = category.split('/');
		const [mainCategory, subCategory] = splitCategory;
		const isValidPrice = typeof price === 'number';

		acc[mainCategory] ??= {
			count: 0,
			totalPrice: 0,
			children: {}
		}

		if (isValidPrice) acc[mainCategory].totalPrice += price;
		acc[mainCategory].count += 1

		if (subCategory) {
			acc[mainCategory].children[subCategory] ??= {
				count:0,
				totalPrice: 0
			}

			acc[mainCategory].children[subCategory].count += 1;

			if (isValidPrice) {
				acc[mainCategory].children[subCategory].totalPrice += price
			}
		}

		return acc
	}, {})
};
const result = summarizeProducts(products)
console.log(JSON.stringify(result, null, 2));

//{
//   "Еда": {
//     "count": 3,
//     "totalPrice": 30,
//     "children": {
//       "Стрит-фуд": {
//         "count": 2,
//         "totalPrice": 15
//       },
//       "Пицца": {
//         "count": 1,
//         "totalPrice": 15
//       }
//     }
//   },
//   "Напитки": {
//     "count": 2,
//     "totalPrice": 5
//   }
// }