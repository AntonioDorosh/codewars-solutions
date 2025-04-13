const employees = [
	{name: "John", salary: 50000, department: "IT"},
	{name: "Jane", salary: 60000, department: "HR"},
	{name: "Bob", salary: 55000, department: "IT"},
	{name: "Sophie", salary: 75000, department: "HR"},
	{name: "Mike", salary: 65000, department: "IT"},
	{name: "Emily", salary: 80000, department: "HR"},
	{name: "David", salary: 70000, department: "IT"},
];

const countDepartment = (employees) => {
	return employees.reduce((acc, {department}) => {
		const count = acc[department] || 0;

		acc[department] = count + 1;

		return acc
	}, {})
}

const mostPopularDepartment = (employees) => {
	const result = countDepartment(employees);

	return Object.entries(result).reduce((acc, [department, value]) => {
		return value > acc.count ? {department, count: value} : acc
	}, {department: null, count: 0})
};

console.log(mostPopularDepartment(employees))