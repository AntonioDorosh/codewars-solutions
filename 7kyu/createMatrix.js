const createMatrix = (rows, cols) => {
	const matrix = [];
	let count = 1;

	for (let i = 0; i < rows; i++) {
		const row = [];

		for (let j = 0; j < cols; j++) {
			row.push(count++)
		}

		matrix.push(row)
	}

	return matrix
};

const result = createMatrix(3, 3);

console.log(result);