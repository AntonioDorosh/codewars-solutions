const users = [
	{ id: 1, name: 'Alice', age: 25, tags: ['developer', 'team lead'] },
	{ id: 2, name: 'Bob', age: 30, tags: ['developer'] },
	{ id: 3, name: 'Eve', age: 22, tags: ['designer'] },
];


const averageAgeByTag = (users) => {
	const tagMap = users.reduce((acc, {tags, age}) => {
	  tags.forEach((tag) => {
			if (!acc[tag]) acc[tag] = {totalAge: 0, count: 0};
			
			acc[tag].totalAge += age;
			acc[tag].count += 1
	  });
		
		return acc
	}, {});

	return Object.entries(tagMap).reduce((acc, [key, {totalAge, count}]) => {
		const avgAge = Math.round(totalAge / count);

		acc[key] = avgAge

		return acc
	}, {})
};

console.log(averageAgeByTag(users))