const items = [
	{category: 'books', tags: ['novel', 'classic', 'drama']},
	{category: 'books', tags: ['drama', 'fantasy']},
	{category: 'movies', tags: ['action', 'drama']}
];

const groupTagsAndCategory = (items) => {
	return items.reduce((acc, {category, tags}) => {
		const uniqueTags = new Set();

		if (!acc.has(category)) {
			acc.set(category, uniqueTags);
		}

		const categoryTags = acc.get(category);
		tags.forEach((tag) => categoryTags.add(tag))

		return acc
	}, new Map())
};

const result = groupTagsAndCategory(items);

console.log(result)