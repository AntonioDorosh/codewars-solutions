const storeProducts = {
	'ITEM1': {name: 'Laptop Pro', price: 1200, quantity: 5},
	'ITEM2': {name: 'Gaming Mouse', price: 70, quantity: 10},
	'ITEM3': {name: 'Keyboard Basic', price: 50, quantity: 20}
};

const catalogProducts = {
	'ITEM1': {name: 'Laptop Pro', description: 'Powerful laptop', recommendedPrice: 1200},
	'ITEM2': {name: 'Gaming Mouse X', description: 'Ergonomic gaming mouse', recommendedPrice: 75}, // name и price отличаются
	'ITEM4': {name: 'Webcam HD', description: 'HD camera', recommendedPrice: 30} // Только в каталоге
};

const findProductDataDiscrepancies = (storeProducts, catalogProducts) => {
	const allUniqueProductKeys = new Set([...Object.keys(storeProducts), ...Object.keys(catalogProducts)]);
	const discrepancies = {};


	for (const productId of allUniqueProductKeys) {
		const storeProduct = storeProducts[productId];
		const catalogProduct = catalogProducts[productId];

		if (storeProduct && catalogProduct) {
			const nameMisMatch = storeProduct.name !== catalogProduct.name ? {
				storeName: storeProduct.name,
				catalogName: catalogProduct.name
			} : undefined

			const priceDiscrepancy = (typeof storeProduct.price === 'number' && typeof catalogProduct.recommendedPrice === 'number')
				? storeProduct.price - catalogProduct.recommendedPrice
				: 0;

			if (nameMisMatch || priceDiscrepancy !== 0) {
				discrepancies[productId] = {nameMisMatch, priceDiscrepancy: priceDiscrepancy || undefined}
			}
		}
	}

	return discrepancies
};

console.log(findProductDataDiscrepancies(storeProducts, catalogProducts));
/*
Ожидаемый вывод:
{
  'ITEM2': {
    nameMismatch: {
      storeName: 'Gaming Mouse',
      catalogName: 'Gaming Mouse X'
    },
    priceDiscrepancy: -5 // 70 - 75
  }
}
*/