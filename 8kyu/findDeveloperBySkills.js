const developers = [
	{ id: 1, name: 'Alice', skills: ['JavaScript', 'React', 'Node.js'] },
	{ id: 2, name: 'Bob', skills: ['Python', 'Django', 'PostgreSQL'] },
	{ id: 3, name: 'Charlie', skills: ['JavaScript', 'Vue.js', 'Firebase'] },
	{ id: 4, name: 'David', skills: ['Java', 'Spring', 'SQL'] },
];

const findDeveloperBySkills = (developers, skillName) => {
	return developers.reduce((acc, developer) => {
	  const { skills } = developer;

		skills.forEach((skill) => {
			if (skill === skillName) acc.push(developer)
		});

		return acc
	}, []);
};
console.log(findDeveloperBySkills(developers, 'JavaScript'))