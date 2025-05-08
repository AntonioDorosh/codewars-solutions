const sales = [
	{region: 'North', manager: 'Alice', revenue: 1000},
	{region: 'North', manager: 'Bob', revenue: 500},
	{region: 'South', manager: 'Alice', revenue: 700},
	{region: 'South', manager: 'Charlie', revenue: 800},
	{region: 'South', manager: 'Alice', revenue: 400},
];

const salesByRegion = (sales) => {
	const regionMap = sales.reduce((acc, {region, manager, revenue}) => {
		if (!acc[region]) acc[region] = {};

		if (!acc[region][manager]) acc[region][manager] = 0

		acc[region][manager] += revenue

		return acc
	}, {})

	return Object.entries(regionMap).reduce((result, [key, value]) => {
		const filteredManagers = Object.entries(value).filter(([_, revenue]) => revenue > 1000);

		if (filteredManagers.length > 0) result[key] = Object.fromEntries(filteredManagers)

		return result
	}, {})
};

console.log(salesByRegion(sales))

//{
//	South: {
//		Alice: 1100
//	}
//}
