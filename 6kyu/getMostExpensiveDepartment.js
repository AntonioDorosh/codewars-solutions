const employees = [
	{name: 'Alice', department: 'HR', salary: 60000, position: 'Junior'},
	{name: 'Bob', department: 'IT', salary: 70000, position: 'Middle'},
	{name: 'Charlie', department: 'HR', salary: 65000, position: 'Junior'},
	{name: 'Dave', department: 'Finance', salary: 80000, position: 'Senior'},
	{name: 'Eve', department: 'IT', salary: 72000, position: 'Middle'},
	{name: 'Frank', department: 'HR', salary: 90000, position: 'Senior'},
	{name: 'Grace', department: 'IT', salary: 75000, position: 'Senior'},
	{name: 'Hank', department: 'Marketing', salary: 68000, position: 'Middle'},
	{name: 'Alice', department: 'Legal', salary: 62000, position: 'Junior'},
];

const salaryByDepartment = (emp) => {
	return emp.reduce((acc, {department, salary}) => {
		if (!department) return acc;

		if (!acc[department]) {
			acc[department] = 0
		}

		acc[department] += salary

		return acc
	}, {})
};

const getMostExpensiveDepartment = (emp) => {
	const groupedSalaryDepartment = salaryByDepartment(emp);
	const [department, totalSalary] = Object.entries(groupedSalaryDepartment).reduce((max, current) => current[1] > max[1] ? current : max, [null, 0])

	return {department, totalSalary}
};

console.log(getMostExpensiveDepartment(employees))
