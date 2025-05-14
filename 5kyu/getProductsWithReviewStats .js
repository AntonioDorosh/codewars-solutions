const products = [
	{ id: 1, name: 'iPhone' },
	{ id: 2, name: 'Galaxy' },
];

const reviews = [
	{ productId: 1, rating: 5 },
	{ productId: 1, rating: 3 },
	{ productId: 2, rating: 4 },
	{ productId: 1, rating: 4 },
];


const getProductsWithReviewStats = (products, reviews) => {
	const reviewsCount = reviews.reduce((totalReviews, {productId, rating}) => {
	  totalReviews[productId] ??= {totalRating: 0, count: 0};

		totalReviews[productId].totalRating += rating;
		totalReviews[productId].count += 1

		return totalReviews
	}, {});

	return products.map(({id, name}) => {
		const statsReview = reviewsCount[id] || {totalRating: 0, count: 0};
		const { totalRating, count } = statsReview;

		return {
			id,
			name,
			averageRating: count > 0 ? Math.round(totalRating / count) : 0,
			reviewsCount: count
		}
	})
};
console.log(getProductsWithReviewStats(products, reviews));

// TODO: Вернуть список продуктов с полем averageRating и количеством отзывов
// Ожидаемый формат:
// [
//   { id: 1, name: 'iPhone', averageRating: 4, reviewsCount: 3 },
//   { id: 2, name: 'Galaxy', averageRating: 4, reviewsCount: 1 }
// ]

