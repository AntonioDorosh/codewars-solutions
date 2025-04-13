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

const highestPersonSalariesFromDepartment = (employees) => {
	return Object.entries(employees.reduce((acc, emp) => {
		const {department, salary} = emp;
		const highestSalary = !acc[department] || salary > acc[department].salary ? emp : acc[department]

		return {
			...acc,
			[department]: highestSalary
		}
	}, {})).map(([department, {name, salary}]) => ({
		department,
		name,
		salary
	}))
};

console.log(highestPersonSalariesFromDepartment(employees))