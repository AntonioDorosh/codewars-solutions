const companyTeams = {
	'Frontend': {
		'dev1': {name: 'Alice', skills: ['JavaScript', 'React', 'HTML']},
		'dev2': {name: 'Bob', skills: ['JavaScript', 'CSS']}
	},
	'Backend': {
		'dev3': {name: 'Charlie', skills: ['Python', 'Django']},
		'dev4': {name: 'David', skills: ['java', 'Spring']}
	},
	'Mobile': {
		'dev5': {name: 'Eve', skills: ['Kotlin', 'Swift']}
	}
};

const wantedSkills = ['javascript', 'Python', 'Go'];

function analyzeTeamSkills(companyTeams, wantedSkills) {
	const normalizedWantedSkills = wantedSkills.map((skill) => skill.toLowerCase());
	const hasMatchingSkills = (skills) => skills.some((skill) => normalizedWantedSkills.includes(skill.toLowerCase()));

	return Object.entries(companyTeams).reduce((result, [teamName, members]) => {
		const matchingMembers = Object.values(members)
			.filter(({skills}) => hasMatchingSkills(skills))
			.map(({name}) => name)

		if (matchingMembers.length) result[teamName] = matchingMembers

		return result
	}, {})
}

console.log(analyzeTeamSkills(companyTeams, wantedSkills));
/*
Ожидаемый вывод:
{
  'Frontend': ['Alice', 'Bob'], // Alice (JavaScript), Bob (JavaScript)
  'Backend': ['Charlie']        // Charlie (Python)
}
*/

const otherSkills = ['React', 'spring'];
console.log(analyzeTeamSkills(companyTeams, otherSkills));
/*
Ожидаемый вывод:
{
  'Frontend': ['Alice'], // Alice (React)
  'Backend': ['David']   // David (Spring)
}
*/