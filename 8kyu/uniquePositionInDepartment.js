const employees = [
	{ name: 'Alice', department: 'HR', salary: 60000, position: 'Junior' },
	{ name: 'Bob', department: 'IT', salary: 70000, position: 'Middle' },
	{ name: 'Charlie', department: 'HR', salary: 65000, position: 'Junior' },
	{ name: 'Dave', department: 'Finance', salary: 80000, position: 'Senior' },
	{ name: 'Eve', department: 'IT', salary: 72000, position: 'Middle' },
	{ name: 'Frank', department: 'HR', salary: 90000, position: 'Senior' },
	{ name: 'Grace', department: 'IT', salary: 75000, position: 'Senior' },
	{ name: 'Hank', department: 'Marketing', salary: 68000, position: 'Middle' },
];

const uniquePositionInDepartment = (employees) => {
	const uniquePosition = new Set();

	employees.forEach((emp) => {
		const {position} = emp;

		if (!uniquePosition.has(position)) uniquePosition.add(position)
	})

	return Array.from(uniquePosition).sort()
};

console.log(uniquePositionInDepartment(employees))