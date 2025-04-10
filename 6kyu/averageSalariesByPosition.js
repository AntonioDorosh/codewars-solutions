const employees = [
	{ name: "Alice", department: "HR", salary: 60000, position: "Junior" },
	{ name: "Bob", department: "IT", salary: 60000, position: "Middle" },
	{ name: "Charlie", department: "HR", salary: 72000, position: "Junior" },
	{ name: "Dave", department: "Finance", salary: 80000, position: "Senior" },
	{ name: "Eve", department: "IT", salary: 72000, position: "Middle" },
	{ name: "Frank", department: "HR", salary: 90000, position: "Senior" },
	{ name: "Grace", department: "IT", salary: 80000, position: "Senior" },
];

const groupedByPosition = (employees) => {
	return employees.reduce((acc, employee) => {
		const {position, salary} = employee;

		if (!position) return acc;

		if (!acc[position]) acc[position] = [];

		acc[position].push(salary)

		return acc
	}, {})
};

const averageSalariesByPosition = (employees) => {
	const grouped = groupedByPosition(employees);

	return Object.entries(grouped).reduce((acc, [key, value]) => {
		const sum = value.reduce((acc, salary) => acc + salary, 0);
		const average = sum / value.length;

		acc[key] = Math.round(average);

		return acc
	}, {})
};

console.log(averageSalariesByPosition(employees))