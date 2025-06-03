const initialProduct = {
	id: "prod_001",
	name: "Laptop",
	price: 1200,
	description: "Powerful laptop",
	category: "Electronics",
};

const updates = {
	price: 1250,
	weight: 1.5,
	description: null,
	category: undefined,
};

const updateProductDetails = (initialProduct, updatesProduct) => {
	const updatedProduct = {...initialProduct};

	for (const key in updatesProduct) {
		if (updatesProduct[key] === null || updatesProduct[key] === undefined) {
			delete updatedProduct[key]
		} else {
			updatedProduct[key] = updatesProduct[key]
		}
	}

	return updatedProduct
};

console.log(updateProductDetails(initialProduct, updates))