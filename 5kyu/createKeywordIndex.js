const documentList = [
	{id: 101, text: 'The quick brown fox jumps over the lazy dog.'},
	{id: 102, text: 'A dog is a man`s best friend.'},
	{id: 103, text: 'Foxes are a type of dog.'}
];


const createKeywordIndex = (documentList) => {
	return documentList.reduce((acc, document) => {
		const {id, text} = document;
		const cleanText = text.replace(/[^\w\s]|/g, '').toLowerCase();
		const words = cleanText.split(/\s+/);

		words.forEach((word) => {
			if (word.length > 0) {
				acc[word] ??= [];

				if (!acc[word].includes(id)) {
					acc[word].push(id)
				}
			}
		});

		return acc
	}, {})
};
console.log(createKeywordIndex(documentList));
/*
Ожидаемый вывод:
{
  the: [101, 103],
  quick: [101],
  brown: [101],
  fox: [101, 103],
  jumps: [101],
  over: [101],
  lazy: [101],
  dog: [101, 102, 103],
  a: [102, 103],
  is: [102, 103],
  mans: [102],
  best: [102],
  friend: [102],
  foxes: [103],
  are: [103],
  type: [103],
  of: [103]
}
*/