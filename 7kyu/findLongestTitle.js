const books = [
	{ id: 1, title: "Гарри Поттер" },
	{ id: 2, title: "Война и мир" },
	{ id: 3, title: "Преступление и наказание" },
];

const findLongestTitle = (books) => {
	return books.map((book) => book.title).reduce((acc, currentTitle) => {
		const findBookById = books.find((book) => book.title === currentTitle).id;

		if (currentTitle.length > acc.title.length) {
			acc = {
				id: findBookById,
				title: currentTitle,
			}
		}

		return acc
	}, { id: 0, title: ''})
}

console.log(findLongestTitle(books))