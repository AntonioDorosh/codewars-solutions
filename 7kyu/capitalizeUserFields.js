const user = { firstName: "ИВАН", lastName: "петРОВ", age: 30, email: "ivan.petrov@example.com" };

const capitalizeUserFields = (obj) => {
	const result = {};

	for (const key in obj) {
		if (typeof obj[key] === 'string') {
			result[key] = obj[key].charAt(0).toUpperCase() + obj[key].slice(1).toLowerCase()
		}
	}

	return {
		...result,
		age: obj.age,
		email: obj.email
	}
};

console.log(capitalizeUserFields(user))