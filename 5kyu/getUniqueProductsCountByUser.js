const users = [
	{ id: 1, name: 'Alice' },
	{ id: 2, name: 'Bob' },
];

const orders = [
	{ userId: 1, products: [1, 2, 3] },
	{ userId: 2, products: [2, 2, 4] },
	{ userId: 1, products: [3, 4] },
];

const getUniqueProductsCountByUser = (users, orders) => {
	return users.reduce((result, {id, name}) => {
	  const unique = new Set();

		orders.forEach(({userId, products}) => {
			if (userId === id) {
				products.forEach((product) => unique.add(product))
			}
		});

		result.push({
			id,
			name,
			uniqueProductsCount: unique.size
		})

		return result
	}, []);
}

console.log(getUniqueProductsCountByUser(users, orders));
// TODO: Вернуть массив пользователей с полем `uniqueProductsCount`, показывающим кол-во уникальных товаров
// Ожидаемый формат:
// [
//   { id: 1, name: 'Alice', uniqueProductsCount: 4 },
//   { id: 2, name: 'Bob', uniqueProductsCount: 2 }
// ]
