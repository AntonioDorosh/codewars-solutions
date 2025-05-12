const users = [
	{
		id: 1,
		name: 'Alice',
		age: 24,
		tags: ['frontend', 'react'],
		projects: [
			{title: 'Landing Page', hours: 34},
			{title: 'Shop UI', hours: 50}
		],
		location: {country: 'USA', city: 'New York'}
	},
	{
		id: 2,
		name: 'Bob',
		age: 32,
		tags: ['backend', 'node'],
		projects: [
			{title: 'API Gateway', hours: 70}
		],
		location: {country: 'Germany', city: 'Berlin'}
	},
	{
		id: 3,
		name: 'Charlie',
		age: 28,
		tags: ['fullstack', 'vue'],
		projects: [
			{title: 'Admin Panel', hours: 90},
			{title: 'Blog Platform', hours: 40}
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
			{title: 'Brand Identity', hours: 20}
		],
		location: {country: 'France', city: 'Paris'}
	},
	{
		id: 6,
		name: 'Frank',
		age: 35,
		tags: ['backend', 'devops'],
		projects: [
			{title: 'CI/CD Setup', hours: 45},
			{title: 'Monitoring System', hours: 55}
		],
		location: {country: 'USA', city: 'Austin'}
	}
];

const getTopUsersByProjectHours = (users) => {
	const usersWithHours = users.map((user) => {
		const {projects, name} = user;
		const totalHours = projects.reduce((sum, {hours}) => sum + hours, 0);

		return {
			name,
			totalHours
		}
	})

	return usersWithHours.sort((a, b) => b.totalHours - a.totalHours).slice(0, 3)
};

console.log(getTopUsersByProjectHours(users))