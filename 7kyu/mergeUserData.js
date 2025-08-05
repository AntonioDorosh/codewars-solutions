const users = [
	{id: 1, name: 'Alice'},
	{id: 2, name: 'Bob'},
	{id: 3, name: 'Charlie'}
];

const addresses = [
	{userId: 1, city: 'New York'},
	{userId: 2, city: 'London'},
	{userId: 4, city: 'Tokyo'} // Этого пользователя нет в users
];

const mergeUserData = (users, addresses) => {
	const addressMap = new Map();

	addresses.forEach((address) => {
		addressMap.set(address.userId, address)
	});

	return users.reduce((acc, user) => {
	  const address = addressMap.get(user.id);

		if (address) {
			acc.push({...user, city: address.city})
		}

		return acc
	}, []);
};

console.log(mergeUserData(users, addresses));
/*
Ожидаемый вывод:
[
  { id: 1, name: 'Alice', city: 'New York' },
  { id: 2, name: 'Bob', city: 'London' }
]
*/