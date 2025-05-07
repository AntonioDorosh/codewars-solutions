const products = [
	{id: 1, category: 'Books', quantity: 3},
	{id: 2, category: 'Electronics', quantity: 5},
	{id: 3, category: 'Books', quantity: 2},
];


const groupAndCount = (products) => {
	return products.reduce((acc, {category, quantity}) => {
	  acc[category] = (acc[category] || 0) + quantity

		return acc
	}, {});
};
console.log(groupAndCount(products))

// TODO: return object with categories and count qnt in total
// { Books: 5, Electronics: 5 }