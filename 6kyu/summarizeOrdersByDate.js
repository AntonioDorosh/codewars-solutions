const orders = [
	{ date: '2024-01-01', amount: 100 },
	{ date: '2024-01-01', amount: 200 },
	{ date: '2024-01-02', amount: 50 },
];

const summarizeOrdersByDate  = (orders) => {
	return orders.reduce((acc, order) => {
	  const { date, amount } = order;
		const createDate = new Date(date).toISOString().slice(0, 10);
		
		if (!acc[createDate]) {
			acc[createDate] = {
				totalAmount: 0,
				orderCount: 0
			}
		}
		
		acc[createDate].totalAmount += amount;
		acc[createDate].orderCount += 1
		
		return acc
	}, {});
};

console.log(summarizeOrdersByDate(orders))

// TODO: Вернуть массив объектов с полями: date, totalAmount, orderCount
// [
//   { date: '2024-01-01', totalAmount: 300, orderCount: 2 },
//   { date: '2024-01-02', totalAmount: 50, orderCount: 1 }
// ]