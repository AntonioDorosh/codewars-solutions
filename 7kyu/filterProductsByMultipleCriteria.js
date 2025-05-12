const products = [
	{ id: 1, category: 'electronics', color: 'black', brand: 'Samsung' },
	{ id: 2, category: 'books', color: 'white', brand: 'Penguin' },
	{ id: 3, category: 'electronics', color: 'white', brand: 'Apple' },
	{ id: 4, category: 'clothing', color: 'black', brand: 'Nike' },
	{ id: 5, category: 'electronics', color: 'black', brand: 'Apple' },
];

const filters = {
	categories: ['electronics'],
	colors: ['black', 'white'],
	brands: ['Apple'],
};


const filterProductsByMultipleCriteria = (products, filters) => {
	return products.reduce((acc, product) => {
	  const { category, color, brand } = product;
		
		if (filters.categories.includes(category) && filters.colors.includes(color) && filters.brands.includes(brand)) acc.push(product)
		
		return acc
	}, []);
};
console.log(filterProductsByMultipleCriteria(products, filters))

//[
//   { id: 3, category: 'electronics', color: 'white', brand: 'Apple' },
//   { id: 5, category: 'electronics', color: 'black', brand: 'Apple' }
// ]
