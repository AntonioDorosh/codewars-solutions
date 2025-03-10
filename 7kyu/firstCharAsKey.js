const text = "Это пример текста с разными словами и буквами";

const firstCharAsKey = (str) => {
	const result = {};
	const arr = str.split(' ');

	for (const arrElement of arr) {
		const firstChar = arrElement[0].toLowerCase()

		if (!result[arrElement]) {
			result[arrElement] = [];
		}

		result[arrElement].push(firstChar)
	}

	return result
};

firstCharAsKey(text)
//{
// 	"э": ["Это"],
// 	"п": ["пример"],
// 	"т": ["текста"],
// 	"с": ["с"],
// 	"р": ["разными"],
// 	"с": ["словами"],
// 	"и": ["и"],
// 	"б": ["буквами"]
// }
