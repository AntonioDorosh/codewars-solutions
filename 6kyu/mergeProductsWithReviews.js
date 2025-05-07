const products = [
	{ id: 1, name: 'iPhone' },
	{ id: 2, name: 'Galaxy' },
];

const reviews = [
	{ productId: 1, review: 'Great phone' },
	{ productId: 1, review: 'Too expensive' },
	{ productId: 2, review: 'Excellent' },
];

const mergeProductsWithReviews  = (products, reviews) => {
	return products.map((product) => {
		const { id } = product;
		const filteredByReviews = reviews.filter(({productId}) => productId === id).map(({review}) => review);

	  return {
			...product,
			review: filteredByReviews
		};
	});
};

console.log(mergeProductsWithReviews(products, reviews))