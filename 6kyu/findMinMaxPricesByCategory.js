const items = [
	{name: 'Мышь игровая', category: 'Электроника', price: 50},
	{name: 'Роман', category: 'Книги', price: 20},
	{name: 'Клавиатура', category: 'Электроника', price: 80},
	{name: 'Детектив', category: 'Книги', price: 25},
	{name: 'Наушники', category: 'Электроника', price: 120}
];

const findMinMaxPricesByCategory = (items) => {
	return items.reduce((acc, currentValue) => {
		const {category, price} = currentValue;
		acc[category] = acc[category] || {maxPrice: null, minPrice: null}

		const currentMaxPrice = acc[category].maxPrice;
		const currentMinPrice = acc[category].minPrice;

		if (!currentMaxPrice || price > currentMaxPrice.price) {
			acc[category].maxPrice = currentValue;
		}

		if (!currentMinPrice || price < currentMinPrice.price) {
			acc[category].minPrice = currentValue
		}

		return acc
	}, {})
};

console.log(findMinMaxPricesByCategory(items))