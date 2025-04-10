const employees = [
	{name: "John", salary: 50000, department: "IT"},
	{name: "Jane", salary: 60000, department: "HR"},
	{name: "Bob", salary: 55000, department: "IT"},
	{name: "Sophie", salary: 75000, department: "HR"},
	{name: "Mike", salary: 65000, department: "IT"},
	{name: "Emily", salary: 80000, department: "HR"},
	{name: "David", salary: 70000, department: "IT"},
];

const findWithHighestSalary = (employees) => {
	return employees.reduce((acc, emp) => {
		const {department, salary} = emp;

		if (!acc[department] || salary > acc[department].salary) {
			acc[department] = emp;
		}

		return acc
	}, {})
};

console.log(findWithHighestSalary(employees))