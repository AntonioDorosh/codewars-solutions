const users = [
	{ name: 'Alice', interests: ['tech', 'music'] },
	{ name: 'Bob', interests: ['music', 'sports'] },
];

const getUniqueInterests = (users) => {
	// ...
	let result;
	const uniqueInterests = new Set();

	users.forEach((user) => {
		const { interests } = user;

		interests.forEach((interest) => {
			if (!uniqueInterests.has(interest)) uniqueInterests.add(interest)
		});

		result = uniqueInterests
	});

	return Array.from(uniqueInterests)
};

console.log(getUniqueInterests(users));