const arr1 = [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }];
const arr2 = [{ id: 2, age: 30 }, { id: 1, age: 25 }];

const mergedArraysByIds = (arr1, arr2) => {
	return arr1.map((el) => {
		const match = arr2.find(({id}) => id === el.id);

		return match ? {...el, ...match} : {...el}
	})
};

console.log(mergedArraysByIds(arr1, arr2))