const transactionInfo = '2025-06-23;DEBIT;150.75;USD;Online purchase;user123';

const parseTransaction = (transactionString) => {
	const [date, type, amount, currency, description, userId] = transactionString.split(';');
	const parseAmount = parseFloat(amount)
	const transactionDate = new Date(date);

	if (!transactionDate || !type || !amount || !currency || !description || !userId) {
		throw new Error('Invalid transaction format')
	}

	if (isNaN(parseAmount)) {
		throw new Error('Invalid amount format')
	}

	const normalizedType = type.toUpperCase();

	if (normalizedType !== 'CREDIT' && normalizedType !== 'DEBIT') {
		throw new Error(`Invalid transaction type: '${type}. Must be DEBIT or CREDIT'`)
	}

	return {
		date: transactionDate,
		type,
		amount: parseAmount,
		currency,
		description,
		userId
	}
};

console.log(parseTransaction(transactionInfo))