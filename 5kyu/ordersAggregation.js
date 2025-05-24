const orders = [
	{
		orderId: 101,
		customerName: 'Anna',
		status: 'delivered',
		items: [{productName: 'Laptop', price: 1200}, {productName: 'Mouse', price: 25}]
	},
	{orderId: 102, customerName: 'Bob', status: 'pending', items: [{productName: 'Keyboard', price: 75}]},
	{orderId: 103, customerName: 'Anna', status: 'shipped', items: [{productName: 'Monitor', price: 300}]},
	{
		orderId: 104,
		customerName: 'Charlie',
		status: 'delivered',
		items: [{productName: 'Webcam', price: 50}, {productName: 'Headphones', price: 100}]
	},
];

const ordersAggregation = (orders) => {
	const initialState = {
		ordersInfo: [],
		customersSummary: {}
	};

	return orders.reduce((acc, order) => {
	  const { orderId, customerName, status, items } = order;
		const totalOrderAmount = items.reduce((sum, {price}) => sum + price, 0);

		acc.ordersInfo.push({
			orderId,
			totalOrderAmount
		})

		if (!acc.customersSummary[customerName]) acc.customersSummary[customerName] = {
			totalOrders: 0,
			totalSpent: 0,
			deliveredOrdersCount: 0
		}

		acc.customersSummary[customerName].totalOrders += 1;
		acc.customersSummary[customerName].totalSpent += totalOrderAmount;

		if (status === 'delivered') {
			acc.customersSummary[customerName].deliveredOrdersCount += 1
		}

		return acc
	}, initialState);
};

console.log(ordersAggregation(orders))
