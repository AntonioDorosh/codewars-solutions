const user = { firstName: "ИВАН", lastName: "петРОВ", age: 30, email: "ivan.petrov@example.com" };

const capitalizeUserFields = (obj) => {
	const entries = Object.entries(obj)
	const normalizeUserFields = entries.reduce((acc, [key, value]) => {
		if (typeof value === 'string') {
			acc[key] = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
		}

		return acc
	}, {})

	const getFullName = () => {
		return `${normalizeUserFields.firstName} ${normalizeUserFields.lastName}`
	}

	return {
		...normalizeUserFields,
		age: obj.age,
		email: obj.email,
		fullName: getFullName()
	}
};

console.log(capitalizeUserFields(user))