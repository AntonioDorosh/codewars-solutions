const employees = [
	{name: 'Alice', department: 'HR', salary: 60000, position: 'Junior'},
	{name: 'Bob', department: 'IT', salary: 70000, position: 'Middle'},
	{name: 'Charlie', department: 'HR', salary: 65000, position: 'Junior'},
	{name: 'Dave', department: 'Finance', salary: 80000, position: 'Senior'},
	{name: 'Eve', department: 'IT', salary: 72000, position: 'Middle'},
	{name: 'Frank', department: 'HR', salary: 90000, position: 'Senior'},
	{name: 'Grace', department: 'IT', salary: 75000, position: 'Senior'},
	{name: 'Audrey', department: null, salary: 90000, position: 'Tech-Lead'}
];

const groupByDepartment = (emp) => {
	return emp.reduce((acc, employee) => {
		const {department} = employee;

		if (!department) return acc;

		if (!acc[department]) acc[department] = [];

		acc[department].push(employee);

		return acc
	}, {})
};

const getBestPaidPerPositionInDepartments = (emp) => {
	const grouped = groupByDepartment(emp);

	return Object.entries(grouped).reduce((acc, [department, emp]) => {
		const topByPosition = emp.reduce((posAcc, emp) => {
			const {position, salary} = emp;

			if (!posAcc[position] || salary > posAcc[position].salary) {
				posAcc[position] = {name: emp.name, salary}
			}
			;

			return posAcc
		}, {})

		acc[department] = topByPosition;

		return acc
	}, {})
};

console.log(getBestPaidPerPositionInDepartments(employees))