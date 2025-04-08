const employees = [
	{name: "John", salary: 50000, department: "IT"},
	{name: "Jane", salary: 60000, department: "HR"},
	{name: "Bob", salary: 55000, department: "IT"},
	{name: "Sophie", salary: 75000, department: "HR"},
	{name: "Mike", salary: 65000, department: "IT"},
	{name: "Emily", salary: 80000, department: "HR"},
	{name: "David", salary: 70000, department: "IT"},
];

const groupEmployeesByDepartment = (employees) => {
	return employees.reduce((acc, employee) => {
		const department = employee.department;

		if (!department) return acc;

		if (!acc[department]) {
			acc[department] = [];
		}

		acc[department].push(employee)

		return acc
	}, {})
};

const getDepartmentsWithHighAverageSalary = (employees, threshold = 65000) => {
	const grouped = groupEmployeesByDepartment(employees);

	const averages = Object.entries(grouped).map(([department, employees]) => {
		const totalSalary = employees.reduce((acc, emp) => typeof emp.salary === 'number' ? acc + emp.salary : acc, 0);

		const average = totalSalary / employees.length;

		const roundedAvg = Math.round(average);

		return {department, average: roundedAvg}
	})

	return averages.filter(({average}) => average > threshold)
}

console.log(getDepartmentsWithHighAverageSalary(employees))