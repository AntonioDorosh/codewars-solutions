const userDataStrings = [
	"101:Alice Smith:alice@example.com:Admin",
	"102:Bob Johnson:bob@example.com:User",
	"103:Charlie Brown:charlie@example.com:Admin",
	"104:David Lee:david@example.com:Guest",
];

const parseUserData = (data) => {
	return data.reduce((acc, currentValue) => {
	  const [ id, name, email, role ] = currentValue.split(':');

		acc.push({
			id: parseInt(id, 10),
			name,
			email,
			role
		})

		return acc
	}, []);
};

console.log(parseUserData(userDataStrings))