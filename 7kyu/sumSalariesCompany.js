const company = {
	sales: [{
		name: 'John',
		salary: 1000
	}, {
		name: 'Alice',
		salary: 600
	}],

	development: {
		sites: [{
			name: 'Peter',
			salary: 2000
		}, {
			name: 'Alex',
			salary: 1800
		}],

		internals: [{
			name: 'Jack',
			salary: 1300
		}]
	}
};

const sumSalariesCompany = (department) => {
	if (Array.isArray(department)) {
		return department.reduce((acc, {salary}) => acc + salary, 0)
	} else {
		let sum = 0;

		for (const value of Object.values(department)) {
			sum += sumSalariesCompany(value)
		}

		return sum
	}
};

console.log(sumSalariesCompany(company))