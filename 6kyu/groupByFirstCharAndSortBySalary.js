const employees = [
	{name: "John", salary: 50000, department: "IT"},
	{name: "Jane", salary: 60000, department: "HR"},
	{name: "Bob", salary: 55000, department: "IT"},
	{name: 'Bryan', salary: 48000, department: 'IT'},
	{name: "Sophie", salary: 75000, department: "HR"},
	{name: "Mike", salary: 65000, department: "IT"},
	{name: "Emily", salary: 80000, department: "HR"},
	{name: "David", salary: 70000, department: "IT"},
];

const groupByKey = (employees) => {
	return employees.reduce((acc, emp) => {
		const {name} = emp;
		const firstCharOfName = name[0];

		if (!acc[firstCharOfName]) acc[firstCharOfName] = [];

		acc[firstCharOfName].push(emp)

		return acc
	}, {})
};

const groupByFirstCharAndSortBySalary = (employees) => {
	const result = groupByKey(employees);
	const entries = Object.entries(result)

	entries.forEach(([_, value]) => {
		value.sort((a, b) => b.salary - a.salary)
	})

	return Object.fromEntries(entries)
};

console.log(groupByFirstCharAndSortBySalary(employees))