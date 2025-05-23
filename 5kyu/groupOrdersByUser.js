const users = [
	{id: 1, name: 'Алексей'},
	{id: 2, name: 'Елена'}
];

const orders = [
	{userId: 1, amount: 100},
	{userId: 2, amount: 250},
	{userId: 1, amount: 150}
];

const groupOrdersByUser = (users, orders) => {
	const hashMapUsers = new Map();

	users.forEach((user) => {
		hashMapUsers.set(user.id, user);
	});

	return orders.reduce((hashMapOrders, order) => {
		const {userId} = order;
		const userKey = hashMapUsers.get(userId);

		if (!hashMapOrders.has(userKey)) {
			hashMapOrders.set(userKey, []);
		}

		hashMapOrders.get(userKey).push(order);

		return hashMapOrders;
	}, new Map());
};

console.log(groupOrdersByUser(users, orders));

//Map(2) {
//   { id: 1, name: 'Алексей' } => [
//     { userId: 1, amount: 100 },
//     { userId: 1, amount: 150 }
//   ],
//   { id: 2, name: 'Елена' } => [
//     { userId: 2, amount: 250 }
//   ]
// }