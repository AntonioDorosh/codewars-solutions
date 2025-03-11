const products = [
	{ id: 1, name: "Laptop", category: "Electronics" },
	{ id: 2, name: "Phone", category: "Electronics" },
	{ id: 3, name: "Shirt", category: "Clothing" },
	{ id: 4, name: "Jeans", category: "Clothing" },
];

const filteredByCategory = (arr) => {
	const productMap = new Map();

	for (const element of arr) {
		if (!productMap.has(element)) {
			productMap.set(element.category, [])
		}

		productMap.get(element.category).push(element)
	}

	return productMap
};

console.log(filteredByCategory(products))