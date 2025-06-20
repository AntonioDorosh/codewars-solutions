const jsonInputs = [
	'{"id": 1, "name": "Item A", "price": 10.99}',
	'{"id": 2, "name": "Item B", "isAvailable": true}',
	'{"id": 3, "name": "Item C", "details": {"color": "blue"}}',
	'{"id": 4, "name": "Item D", "tags": ["a", "b"]', // Invalid JSON
	'This is not JSON', // Invalid JSON
	'{"id": 5, "name": "Item E"}'
];

const processJsonStrings = (arr) => {
	const data = {
		parsedData: [],
		errors: []
	};

	arr.forEach((item) => {
		try {
			const parsedData = JSON.parse(item);

			data.parsedData.push(parsedData)
		} catch (error) {
			data.errors.push({
				originalString: item,
				errorMessage: error.message
			})
		}
	});

	return data
};

console.log(processJsonStrings(jsonInputs))