const salesQ1 = { laptops: 10, keyboards: 5, monitors: 3, mice: "out of stock" };
const salesQ2 = { laptops: 7, keyboards: 8, mice: "available", headphones: 2 };
const salesQ3 = { monitors: 4, keyboards: 3, speakers: 1 };

const mergeAndSumObjects = (obj1, obj2, obj3) => {
	const merged = {...obj1, ...obj2, ...obj3};

	const sumValues = (key) => {
		return (obj1[key] || 0) + (obj2[key] || 0) + (obj3[key] || 0)
	};

	return Object.entries(merged).filter(([_, value]) => typeof value === 'number').reduce((acc, [key, _]) => {
		acc[key] = sumValues(key);

		return acc
	}, {})
};

console.log(mergeAndSumObjects(salesQ1, salesQ2, salesQ3))