const supplierData = {
	'SupplierA': { 'P101': 15.00, 'P102': 22.50, 'P103': 5.00 },
	'SupplierB': { 'P102': 21.00, 'P104': 10.00 },
	'SupplierC': { 'P101': 14.50, 'P102': 23.00, 'P105': 8.00 },
	'SupplierD': { 'P101': 15.00, 'P102': 'invalid' } // P102 у D - не число
};

function compareSupplierPrices(productPricesBySupplier, targetProductId) {
	let totalPrice = 0;
	let priceCount = 0;
	let minPrice = Infinity;
	let maxPrice = -Infinity;
	const suppliersAvailable = [];
	let bestSupplier = '';

	for (const [supplierName, supplierInventory] of Object.entries(productPricesBySupplier)) {
		const price = supplierInventory[targetProductId];

		if (typeof price === 'number' && !isNaN(price)) {
			totalPrice += price;
			priceCount++;

			if (price < minPrice || (price === minPrice && supplierName < bestSupplier)) {
				minPrice = price;
				bestSupplier = supplierName
			}
			maxPrice = Math.max(maxPrice, price);
			suppliersAvailable.push(supplierName)
		}
	}

	if (priceCount === 0) return null

	return {
		minPrice,
		maxPrice,
		averagePrice: totalPrice / priceCount,
		suppliersAvailable: suppliersAvailable.sort(),
		bestSupplier
	}
}

console.log(compareSupplierPrices(supplierData, 'P102'));
/*
Ожидаемый вывод:
{
  minPrice: 21,
  maxPrice: 23,
  averagePrice: 22.166666666666668, // (22.50 + 21.00 + 23.00) / 3
  suppliersAvailable: ['SupplierA', 'SupplierB', 'SupplierC'],
  bestSupplier: 'SupplierB'
}
*/