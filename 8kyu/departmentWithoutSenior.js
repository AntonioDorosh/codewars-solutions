const employees = [
	{name: 'Alice', department: 'HR', salary: 60000, position: 'Junior'},
	{name: 'Bob', department: 'IT', salary: 70000, position: 'Middle'},
	{name: 'Charlie', department: 'HR', salary: 65000, position: 'Junior'},
	{name: 'Dave', department: 'Finance', salary: 80000, position: 'Senior'},
	{name: 'Eve', department: 'IT', salary: 72000, position: 'Middle'},
	{name: 'Frank', department: 'HR', salary: 90000, position: 'Senior'},
	{name: 'Grace', department: 'IT', salary: 75000, position: 'Senior'},
	{name: 'Hank', department: 'Marketing', salary: 68000, position: 'Middle'},
];

const departmentWithoutSenior = (emp, searchPos) => {
	const obj = {};

	emp.forEach((emp) => {
		const {department, position} = emp;

		if (!department || position === searchPos) return;

		if (!obj[department]) obj[department] = [];

		obj[department].push(emp)
	})

	return obj
};

console.log(departmentWithoutSenior(employees, 'Senior'))

