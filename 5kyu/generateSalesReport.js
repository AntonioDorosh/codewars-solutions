const products = [
	{id: 'p1', name: 'Laptop Pro', category: 'Electronics', price: 1200, stock: 10},
	{id: 'p2', name: 'Mechanical Keyboard', category: 'Electronics', price: 150, stock: 25},
	{id: 'p3', name: 'Ergonomic Mouse', category: 'Accessories', price: 50, stock: 50},
	{id: 'p4', name: 'Webcam 1080p', category: 'Electronics', price: 80, stock: 15},
	{id: 'p5', name: 'USB Hub', category: 'Accessories', price: 20, stock: 100},
	{id: 'p6', name: 'Monitor 27 inch', category: 'Electronics', price: 300, stock: 8}
];

const sales = [
	{productId: 'p1', quantity: 3, date: '2025-06-15'},
	{productId: 'p2', quantity: 10, date: '2025-06-16'},
	{productId: 'p3', quantity: 20, date: '2025-06-16'},
	{productId: 'p1', quantity: 2, date: '2025-06-17'},
	{productId: 'p5', quantity: 50, date: '2025-06-17'},
	{productId: 'p4', quantity: 5, date: '2025-06-18'},
	{productId: 'p2', quantity: 5, date: '2025-06-18'}
];


const generateSalesReport = (products, sales, minQuantitySold) => {
	const productSalesSummary = sales.reduce((acc, sale) => {
		const {productId, quantity} = sale;

		acc[productId] = (acc[productId] || 0) + quantity;

		return acc
	}, {})

	return products.map((product) => {
		const {id, name, category, price} = product;
		const totalSold = productSalesSummary[id] || 0;

		if (totalSold >= minQuantitySold) {
			const totalRevenue = totalSold * price;

			return `${name} (${category}): Продано ${totalSold} шт., доход $${totalRevenue.toFixed(2)}`
		}
	}).filter(Boolean)
};

console.log(generateSalesReport(products, sales, 10))