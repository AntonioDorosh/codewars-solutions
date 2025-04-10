const employees = [
	{ name: "Alice", department: "HR", salary: 60000, position: "Junior" },
	{ name: "Bob", department: "IT", salary: 70000, position: "Middle" },
	{ name: "Charlie", department: "HR", salary: 65000, position: "Junior" },
	{ name: "Dave", department: "Finance", salary: 80000, position: "Senior" },
	{ name: "Eve", department: "IT", salary: 72000, position: "Middle" },
	{ name: "Frank", department: "HR", salary: 90000, position: "Senior" },
	{ name: "Grace", department: "IT", salary: 75000, position: "Senior" },
	{ name: "Heidi", department: "Finance", salary: 50000, position: "Junior" },
	{ name: "Ivan", department: "Finance", salary: 85000, position: "Senior" },
	{ name: "Judy", department: "Marketing", salary: 62000, position: "Junior" },
	{ name: "Kevin", department: "Marketing", salary: 78000, position: "Middle" },
	{ name: "Leo", department: "IT", salary: 70000, position: "Middle" },
	{ name: "Mallory", department: "HR", salary: 65000, position: "Middle" },
	{ name: "Nina", department: "Marketing", salary: 89000, position: "Senior" },
	{ name: "Oscar", department: "IT", salary: 81000, position: "Senior" },
	{ name: "Peggy", department: "Finance", salary: 67000, position: "Middle" },
	{ name: "Quinn", department: "HR", salary: 61000, position: "Junior" },
	{ name: "Ruth", department: "Marketing", salary: 71000, position: "Middle" },
];

const groupedByDepartment = (employees) => {
	return employees.reduce((acc, {position, department}) => {
		if (!department) return acc;

		if (!acc[department]) acc[department] = [];

		acc[department].push(position)

		return acc
	}, {})
};

const uniquePositionByDepartment = (employees) => {
	const grouped = groupedByDepartment(employees);

	return Object.entries(grouped).reduce((acc, [key, value]) => {
		const uniquePosition = [...new Set(value)];

		uniquePosition.forEach((position) => {
			acc.push(`${key} - ${position}`)
		})

		return acc
	}, [])
};

console.log(uniquePositionByDepartment(employees))