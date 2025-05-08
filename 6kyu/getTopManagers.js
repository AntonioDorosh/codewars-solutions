const sales = [
	{ region: 'North', manager: 'Alice', revenue: 1000 },
	{ region: 'North', manager: 'Bob', revenue: 500 },
	{ region: 'South', manager: 'Alice', revenue: 700 },
];

const getTopManagers = (sales) => {
	const sumTotalRevenue = sales.reduce((acc, {manager, revenue}) => {
	  if (!acc[manager]) acc[manager] = 0

		acc[manager] += revenue

		return acc
	}, {});

	const filtered = Object.entries(sumTotalRevenue).filter(([_, value]) => value > 1000);

	return Object.fromEntries(filtered)
};

console.log(getTopManagers(sales))

//{
//   Alice: 1700
// }