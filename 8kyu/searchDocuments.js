const documents = [
	{ id: 1, text: 'The quick brown fox jumps over the lazy dog.' },
	{ id: 2, text: 'A dog barks loudly.' },
	{ id: 3, text: 'The cat sleeps soundly.' },
	{ id: 4, text: 'A brown cat chases the mouse.' },
];


const searchDocuments = (documents, keyword) => {
	return documents.filter(({text}) => text.includes(keyword)).map(({id}) => id)
};
console.log(searchDocuments(documents, 'dog')) // [1,2]