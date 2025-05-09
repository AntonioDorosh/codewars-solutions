const posts = [
	{ id: 1, author: 'Alice', content: 'Hello world' },
	{ id: 2, author: 'Bob', content: 'Hi!' },
	{ id: 3, author: 'Alice', content: 'Another post' },
	{ id: 4, author: 'Charlie', content: 'Cool stuff' },
	{ id: 5, author: 'Bob', content: 'More content' },
];

const groupPostsByAuthor = (posts) => {
	const groupByAuthor = posts.reduce((acc, post) => {
		const { author } = post;
		
		if (!acc[author]) acc[author] = [];
		
		acc[author].push(post)
		
		return acc
	}, {})
	
	return Object.entries(groupByAuthor).reduce((acc, [key, value]) => {
		acc[key] = {
			count: value.length,
			posts: value
		}
		
		return acc
	}, {})
};

console.log(groupPostsByAuthor(posts));
// TODO: Вернуть объект вида:
// {
//   Alice: { count: 2, posts: [...] },
//   Bob: { count: 2, posts: [...] },
//   Charlie: { count: 1, posts: [...] }
// }