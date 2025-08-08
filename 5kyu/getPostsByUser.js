const users = [
	{id: 1, name: 'Иван', email: 'ivan@example.com'},
	{id: 2, name: 'Мария', email: 'maria@example.com'},
	{id: 3, name: 'Петр', email: 'petr@example.com'}
];

const posts = [
	{id: 101, title: 'Мой первый пост', authorId: 1},
	{id: 102, title: 'Путешествие в горы', authorId: 2},
	{id: 103, title: 'Заметки о JS', authorId: 1}
];


const getPostsByUser = (users, posts) => {
	const postByAuthor = posts.reduce((acc, post) => {
	  const { id, title, authorId } = post;

		acc[authorId] ??= [];

		acc[authorId].push({
			id,
			title,
			authorId
		})

		return acc
	}, {});

	return users
		.filter(({id}) => postByAuthor[id])
		.map(({id, name, email}) => ({
			id,
			name,
			email,
			posts: postByAuthor[id]
		}))
};

console.log(getPostsByUser(users, posts));

//[
//   {
//     "id": 1,
//     "name": "Иван",
//     "email": "ivan@example.com",
//     "posts": [
//       { "id": 101, "title": "Мой первый пост", "authorId": 1 },
//       { "id": 103, "title": "Заметки о JS", "authorId": 1 }
//     ]
//   },
//   {
//     "id": 2,
//     "name": "Мария",
//     "email": "maria@example.com",
//     "posts": [
//       { "id": 102, "title": "Путешествие в горы", "authorId": 2 }
//     ]
//   }
// ]