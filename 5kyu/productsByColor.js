const initialProducts = [
	{id: 101, name: 'T-Shirt', color: 'red', size: 'M', price: 25},
	{id: 102, name: 'Jeans', color: 'blue', size: 'L', price: 60},
	{id: 103, name: 'T-Shirt', color: 'blue', size: 'S', price: 20},
];

const productsByColor = (products) => {
	const hashMapProducts = new Map();
	const newProduct = {
		id: 104,
		name: 'Socks',
		color: 'green',
		size: 'M',
		price: 10
	};

	products.forEach((product) => {
		const { color } = product;

		if (!hashMapProducts.has(color)) {
			hashMapProducts.set(color, [])
		}

		hashMapProducts.get(color).push(product)
	});

	if (!hashMapProducts.has(newProduct.color)) {
		hashMapProducts.set(newProduct.color, [])
	}

	hashMapProducts.get(newProduct.color).push(newProduct, [...hashMapProducts.get(newProduct.color)], newProduct);

	return hashMapProducts
};

console.log(productsByColor(initialProducts))
