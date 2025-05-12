const users = [
	{ id: 1, name: 'Alice', tags: ['developer', 'react'] },
	{ id: 2, name: 'Bob', tags: ['designer'] },
	{ id: 3, name: 'Devon', tags: ['backend'] },
	{ id: 4, name: 'Eve', tags: ['fullstack-developer'] },
];


const filterUsers = (users, dev) => {
	return users.filter((user) => {
		const devLowerCaseChars = dev.toLowerCase()
		const nameMatches = user.name.toLowerCase().includes(devLowerCaseChars);
		const tagMatches = user.tags.some((tag) => tag.toLowerCase().includes(devLowerCaseChars))

	  return nameMatches || tagMatches;
	});
};
console.log(filterUsers(users, 'dev'));
//[
//   { id: 1, name: 'Alice', tags: ['developer', 'react'] },      // тег содержит "dev"
//   { id: 3, name: 'Devon', tags: ['backend'] },                 // имя содержит "dev"
//   { id: 4, name: 'Eve', tags: ['fullstack-developer'] }        // тег содержит "dev"
// ]
