const products = [
	{id: 1, name: 'iPhone', category: 'Electronics'},
	{id: 2, name: 'Galaxy', category: 'Electronics'},
	{id: 3, name: 'Clean Code', category: 'Books'},
	{id: 4, name: 'MacBook', category: 'Electronics'},
];

const reviews = [
	{productId: 1, rating: 5},
	{productId: 1, rating: 3},
	{productId: 2, rating: 4},
	{productId: 3, rating: 5},
	{productId: 3, rating: 5},
	{productId: 4, rating: 4},
	{productId: 4, rating: 5},
];

const groupProductsByCategoryWithRatings = (products, reviews) => {
	const groupedByCategory = products.reduce((acc, product) => {
	  const { category } = product;

		if (!acc[category]) acc[category] = [];

		acc[category].push(product)

		return acc
	}, {});

	const reviewStats = reviews.reduce((acc, {productId, rating}) => {
	  if (!acc[productId]) acc[productId] = {totalRating: 0, count: 0};

		acc[productId].totalRating += rating;
		acc[productId].count += 1;

		return acc
	}, {});

	return Object.entries(groupedByCategory).reduce((acc, [category, products]) => {
		acc[category] = products.map((product) => {
			const { id } = product;
			const { totalRating, count } = reviewStats[id] || {totalRating: 0, count: 0};

			return {
				...product,
				averageRating: count > 0 ? totalRating / count : 0,
				reviewsCount: count
			}
		})
		
		return acc
	}, {})
};

console.log(groupProductsByCategoryWithRatings(products, reviews))