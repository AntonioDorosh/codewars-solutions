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
	{name: 'Audrey', department: 'HR', salary: 40000, position: 'Intern'}
];

const salaryLevels = [
	{key: 'intern', min: 0, max: 40001},
	{key: 'low', min: 40002, max: 64999},
	{key: 'medium', min: 65000, max: 80000},
	{key: 'high', min: 80001, max: Infinity}
]

const getSalaryLevel = (salary) => salaryLevels.find(({min, max}) => salary >= min && salary <= max)?.key;

const classifyBySalary = (employees) => {
	return employees.reduce((groupedBySalary, emp) => {
		const levelKey = getSalaryLevel(emp.salary);

		if (levelKey) {
			if (!groupedBySalary[levelKey]) groupedBySalary[levelKey] = [];

			groupedBySalary[levelKey].push(emp.name)
		}

		return groupedBySalary
	}, {})
};

console.log(classifyBySalary(employees))