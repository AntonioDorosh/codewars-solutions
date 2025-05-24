const transactions = [
	{ id: 1, category: 'food', amount: 50, date: '2024-03-10' },
	{ id: 2, category: 'transport', amount: 20, date: '2024-03-10' },
	{ id: 3, category: 'food', amount: 30, date: '2024-03-11' },
	{ id: 4, category: 'utilities', amount: 100, date: '2024-03-11' },
	{ id: 5, category: 'food', amount: 25, date: '2024-03-12' },
	{ id: 6, category: 'transport', amount: 15, date: '2024-03-12' },
];

// without reduce

// const transactionsAggregation = (transactions) => {
// 	const transactionsByCategory = {};
// 	const totalTransactions = transactions.length;
// 	let totalAmount = 0;
//
// 	transactions.forEach((transaction) => {
// 		const { category, amount } = transaction;
// 		totalAmount += amount;
//
// 		if (!transactionsByCategory[category]) transactionsByCategory[category] = {totalAmount: 0, count: 0};
//
// 		transactionsByCategory[category].totalAmount += amount;
// 		transactionsByCategory[category].count += 1
// 	});
//
// 	return {
// 		totalTransactions,
// 		totalAmount,
// 		transactionsByCategory
// 	}
// };

// with reduce

const transactionsAggregation = (transactions) => {
	return transactions.reduce((acc, transaction) => {
		const { category, amount } = transaction;

	  acc.totalTransactions += 1;
		acc.totalAmount += amount;

		if (!acc.transactionsByCategory[category]) {
			acc.transactionsByCategory[category] = {totalAmount: 0, count: 0}
		}

		acc.transactionsByCategory[category].totalAmount += amount;
		acc.transactionsByCategory[category].count += 1

		return acc
	}, {
		totalTransactions: 0,
		totalAmount: 0,
		transactionsByCategory: {}
	});
};

console.log(transactionsAggregation(transactions))