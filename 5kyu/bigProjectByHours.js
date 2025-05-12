const users = [
	{
		id: 1,
		name: 'Alice',
		age: 24,
		tags: ['frontend', 'react'],
		projects: [
			{ title: 'Landing Page', hours: 34 },
			{ title: 'Shop UI', hours: 50 }
		],
		location: { country: 'USA', city: 'New York' }
	},
	{
		id: 2,
		name: 'Bob',
		age: 32,
		tags: ['backend', 'node'],
		projects: [
			{ title: 'API Gateway', hours: 70 }
		],
		location: { country: 'Germany', city: 'Berlin' }
	},
	{
		id: 3,
		name: 'Charlie',
		age: 28,
		tags: ['fullstack', 'vue'],
		projects: [
			{ title: 'Admin Panel', hours: 90 },
			{ title: 'Blog Platform', hours: 40 }
		],
		location: { country: 'Germany', city: 'Hamburg' }
	},
	{
		id: 4,
		name: 'Diana',
		age: 38,
		tags: ['frontend', 'react', 'typescript'],
		projects: [],
		location: { country: 'USA', city: 'San Francisco' }
	},
	{
		id: 5,
		name: 'Eve',
		age: 22,
		tags: ['designer', 'figma'],
		projects: [
			{ title: 'Brand Identity', hours: 20 }
		],
		location: { country: 'France', city: 'Paris' }
	},
	{
		id: 6,
		name: 'Frank',
		age: 35,
		tags: ['backend', 'devops'],
		projects: [
			{ title: 'CI/CD Setup', hours: 45 },
			{ title: 'Monitoring System', hours: 55 }
		],
		location: { country: 'USA', city: 'Austin' }
	}
];


const bigProjectByHours = (users) => {
	const obj = {};

	for (const user of users) {
		const { name, location, projects } = user;
		const { country, city } = location;

		const hasBigProject = projects.some(({hours}) => hours > 60);

		if (hasBigProject) {
			if (!obj[country]) obj[country] = {};
			if (!obj[country][city]) obj[country][city] = [];

			obj[country][city].push(name)
		}
	}

	return obj
};

console.log(bigProjectByHours(users))