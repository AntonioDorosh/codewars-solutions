const salesData = [
	{product: 'Laptop', price: 1200, quantity: 2},
	{product: 'Mouse', price: 25, quantity: 10},
	{product: 'Laptop', price: 1200, quantity: 1},
	{product: 'Keyboard', price: 75, quantity: 5}
];

const analyzeSales = (salesData) => {
	return salesData.reduce((acc, sale) => {
		const { product, price, quantity } = sale;
		const revenue = (typeof price === 'number' && typeof quantity === 'number')
			? price * quantity : 0;

		acc.totalRevenue += revenue;

		if (product) {
			acc.productSales[product] ??= 0;
			acc.productSales[product] += quantity
		}

		return acc
	}, {
		totalRevenue: 0,
		productSales: {}
	})
};
console.log(analyzeSales(salesData));
/*
Ожидаемый вывод:
{
  totalRevenue: 3775,
  productSales: {
    'Laptop': 3,
    'Mouse': 10,
    'Keyboard': 5
  }
}
*/