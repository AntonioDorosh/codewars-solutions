const sales = [
	{ region: 'North', manager: 'Alice', category: 'Electronics', revenue: 1200 },
	{ region: 'North', manager: 'Alice', category: 'Books', revenue: 800 },
	{ region: 'South', manager: 'Bob', category: 'Electronics', revenue: 1500 },
	{ region: 'South', manager: 'Bob', category: 'Books', revenue: 200 },
	{ region: 'South', manager: 'Alice', category: 'Books', revenue: 500 },
];

const groupSalesByManagerAndCategory = (sales) => {
	return sales.reduce((acc, currentValue) => {
	  const { manager, category, revenue } = currentValue;
		
		if (!acc[manager]) acc[manager] = {};
		
		if (!acc[manager][category]) acc[manager][category] = 0
		
		acc[manager][category] += revenue;
		
		return acc
	}, {});
};

console.log(groupSalesByManagerAndCategory(sales))

// result should be:
// {
//   Alice: { Electronics: 1200, Books: 1300 },
//   Bob: { Electronics: 1500, Books: 200 }
// }
