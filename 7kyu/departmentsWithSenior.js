const employees = [
	{ name: "Alice", department: "HR", salary: 60000, position: "Junior" },
	{ name: "Bob", department: "IT", salary: 60000, position: "Middle" },
	{ name: "Charlie", department: "HR", salary: 72000, position: "Junior" },
	{ name: "Dave", department: "Finance", salary: 80000, position: "Senior" },
	{ name: "Eve", department: "IT", salary: 72000, position: "Middle" },
	{ name: "Frank", department: "HR", salary: 90000, position: "Senior" },
	{ name: "Grace", department: "IT", salary: 80000, position: "Senior" },
];

const departmentsWithSenior = (employees, searchPosition) => {
	const obj = {};

	employees.forEach((employee) => {
		const {position, department} = employee;

		if (position === searchPosition) {
			obj[department] = true
		} else {
			obj[department] = obj[department] || false
		}
	})

	return obj
};

console.log(departmentsWithSenior(employees, 'Senior'))