const user = { firstName: "ИВАН", lastName: "петРОВ", age: 30, email: "ivan.petrov@example.com" };

const capitalizeUserFields = (userData) => {
	const { firstName, lastName, email, age } = userData;

	const formattedFirstName = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
	const formattedLastName = lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();

	const formattedEmail = email.toLowerCase();

	const fullName = `${formattedFirstName} ${formattedLastName}`

	return {
		firstName: formattedFirstName,
		lastName: formattedLastName,
		age,
		email: formattedEmail,
		fullName
	}
};

console.log(capitalizeUserFields(user))