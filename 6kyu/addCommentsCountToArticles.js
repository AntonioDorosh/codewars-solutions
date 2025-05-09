const articles = [
	{ id: 1, title: 'JavaScript Tips' },
	{ id: 2, title: 'React Patterns' },
];

const comments = [
	{ articleId: 1, text: 'Nice!' },
	{ articleId: 1, text: 'Helpful' },
	{ articleId: 2, text: 'Great read' },
];


const addCommentsCountToArticles = (articles, comments) => {
	return articles.reduce((acc, article) => {
	  const { id } = article;

		const commentsCount = comments.reduce((acc, {articleId}) => {
		  if (id === articleId) acc += 1

			return acc
		}, 0);

		return [...acc, {...article, commentsCount}]
	}, []);
};

console.log(addCommentsCountToArticles(articles, comments))

//[
//   { id: 1, title: 'JavaScript Tips', commentsCount: 2 },
//   { id: 2, title: 'React Patterns', commentsCount: 1 }
// ]