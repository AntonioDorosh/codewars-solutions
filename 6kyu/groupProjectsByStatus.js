const users = [
	{
		id: 1,
		name: 'Alice',
		age: 24,
		tags: ['frontend', 'react'],
		projects: [
			{title: 'Landing Page', hours: 34, status: 'active'},
			{title: 'Shop UI', hours: 50, status: 'completed'}
		],
		location: {country: 'USA', city: 'New York'}
	},
	{
		id: 2,
		name: 'Bob',
		age: 32,
		tags: ['backend', 'node'],
		projects: [
			{title: 'API Gateway', hours: 70, status: 'completed'}
		],
		location: {country: 'Germany', city: 'Berlin'}
	},
	{
		id: 3,
		name: 'Charlie',
		age: 28,
		tags: ['fullstack', 'vue'],
		projects: [
			{title: 'Admin Panel', hours: 90, status: 'completed'},
			{title: 'Blog Platform', hours: 40, status: 'active'}
		],
		location: {country: 'Germany', city: 'Hamburg'}
	},
	{
		id: 4,
		name: 'Diana',
		age: 38,
		tags: ['frontend', 'react', 'typescript'],
		projects: [],
		location: {country: 'USA', city: 'San Francisco'}
	},
	{
		id: 5,
		name: 'Eve',
		age: 22,
		tags: ['designer', 'figma'],
		projects: [
			{title: 'Brand Identity', hours: 20, status: 'active'}
		],
		location: {country: 'France', city: 'Paris'}
	},
	{
		id: 6,
		name: 'Frank',
		age: 35,
		tags: ['backend', 'devops'],
		projects: [
			{title: 'CI/CD Setup', hours: 45, status: 'active'},
			{title: 'Monitoring System', hours: 55, status: 'completed'}
		],
		location: {country: 'USA', city: 'Austin'}
	}
];

const groupProjectsByStatus = (users) => {
	return users.reduce((acc, user) => {
		const {name, projects} = user;

		projects.forEach(({title, hours, status}) => {
			acc[status] ??= [];

			acc[status].push({title, userName: name, hours})
		});

		return acc
	}, {});
};

console.log(groupProjectsByStatus(users))