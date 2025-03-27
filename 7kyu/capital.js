const findCap = (arr) => arr.map(({country, capital}) => `The capital ${country} is ${capital}`);

console.log(findCap([
	{
		country: 'Spain',
		capital: 'Madrid'
	}
]))
