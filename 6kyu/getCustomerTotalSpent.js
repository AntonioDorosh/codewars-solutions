const salesTransactions = [
	{transactionId: 't1', productId: 'prodA', quantity: 2, price: 100, date: '2025-05-01', customerId: 'cust1'},
	{transactionId: 't2', productId: 'prodB', quantity: 1, price: 250, date: '2025-05-01', customerId: 'cust2'},
	{transactionId: 't3', productId: 'prodA', quantity: 1, price: 100, date: '2025-05-02', customerId: 'cust1'},
	{transactionId: 't4', productId: 'prodC', quantity: 3, price: 50, date: '2025-05-02', customerId: 'cust3'},
	{transactionId: 't5', productId: 'prodB', quantity: 2, price: 250, date: '2025-05-03', customerId: 'cust2'},
];


const getCustomerTotalSpent = (salesTransactions, keyword) => {
	const hashMapSales = new Map();

	salesTransactions.forEach((item) => {
		if (!hashMapSales.has(item.productId)) hashMapSales.set(item.productId, []);

		hashMapSales.get(item.productId).push(item)
	});

	return hashMapSales.get(keyword).reduce((acc, value) => {
		acc.totalQuantitySold += value.quantity;
		acc.totalRevenue += value.price

		return acc
	}, {totalQuantitySold: 0, totalRevenue: 0});
};

console.log(getCustomerTotalSpent(salesTransactions, 'prodA'))