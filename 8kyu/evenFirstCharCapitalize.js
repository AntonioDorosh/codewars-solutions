const str = 'aaa bbb ccc eee fff';

const evenFirstCharCapitalize = (str) => {
	return str.split(' ').map((char, index) => index % 2 !== 0 ? char.slice(0, 1).toUpperCase() + char.slice(1) : char).join(' ')
};

console.log(evenFirstCharCapitalize(str))