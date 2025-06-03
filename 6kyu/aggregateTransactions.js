const transactions = [
	{ id: 1, userId: "u1", category: "Food", amount: 50 },
	{ id: 2, userId: "u2", category: "Transport", amount: 25 },
	{ id: 3, userId: "u1", category: "Food", amount: 30 },
	{ id: 4, userId: "u3", category: "Entertainment", amount: 70 },
	{ id: 5, userId: "u2", category: "Transport", amount: 15 },
];

const aggregateTransactions = (transactions, groupByField) => {
	return transactions.reduce((acc, currentValue) => {
	  acc[currentValue[groupByField]] ??= {totalAmount: 0, count: 0, transactions: []};
		acc[currentValue[groupByField]].totalAmount += currentValue.amount;
		acc[currentValue[groupByField]].count += 1;

		acc[currentValue[groupByField]].transactions.push(currentValue);

		return acc
	}, {});
};

console.log(JSON.stringify(aggregateTransactions(transactions, 'category'), null, 2));

//{
//   "Food": {
//     totalAmount: 80,
//     count: 2,
//     transactions: [
//       { id: 1, userId: "u1", category: "Food", amount: 50 },
//       { id: 3, userId: "u1", category: "Food", amount: 30 }
//     ]
//   },
//   "Transport": {
//     totalAmount: 40,
//     count: 2,
//     transactions: [
//       { id: 2, userId: "u2", category: "Transport", amount: 25 },
//       { id: 5, userId: "u2", category: "Transport", amount: 15 }
//     ]
//   },
//   "Entertainment": {
//     totalAmount: 70,
//     count: 1,
//     transactions: [
//       { id: 4, userId: "u3", category: "Entertainment", amount: 70 }
//     ]
//   }
// }