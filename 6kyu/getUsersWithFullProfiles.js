const userData = {
	'u1': {name: 'Alice', email: 'alice@example.com'},
	'u2': {name: 'Bob', email: 'bob@example.com'},
	'u3': {name: 'Charlie', email: 'charlie@example.com'},
	'u4': {name: 'David', email: null} // Неполные данные
};

const userProfiles = {
	'u1': {address: '123 Main St', phone: '555-1111'},
	'u2': {address: '456 Oak Ave', phone: '555-2222'},
	'u3': {address: '789 Pine Ln', phone: ''}, // Неполные данные
	'u5': {address: '101 Elm Blvd', phone: '555-3333'}
};

const getUsersWithFullProfiles = (userData, userProfiles) => {
	const isValidUserFields = (user, profile) =>
		!!user?.name && !!user.email && !!profile.address && !!profile.phone;

	return Object.entries(userData).reduce((acc, [userId, user]) => {
		const profile = userProfiles[userId];

		if (isValidUserFields(user, profile)) {
			acc.push({
				name: user.name,
				email: user.email,
				address: profile.address,
				phone: profile.phone
			})
		}

		return acc
	}, [])
};

console.log(getUsersWithFullProfiles(userData, userProfiles));
/*
Ожидаемый вывод (порядок элементов в массиве может быть другим):
[
  { name: 'Alice', email: 'alice@example.com', address: '123 Main St', phone: '555-1111' },
  { name: 'Bob', email: 'bob@example.com', address: '456 Oak Ave', phone: '555-2222' }
]
*/