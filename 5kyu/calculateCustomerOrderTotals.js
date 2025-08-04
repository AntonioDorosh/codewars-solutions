// const str = 'programming';
// const subStr = 'gram';
//
// const containsSubstring = (str, subStr) => {
// 	return !!str.includes(subStr)
// };
//
// console.log(containsSubstring(str, subStr))

// const orders = [
// 	{
// 		orderId: 101,
// 		customerName: 'Anna',
// 		status: 'delivered',
// 		items: [{productName: 'Laptop', price: 1200}, {productName: 'Mouse', price: 25}]
// 	},
// 	{orderId: 102, customerName: 'Bob', status: 'pending', items: [{productName: 'Keyboard', price: 75}]},
// 	{orderId: 103, customerName: 'Anna', status: 'shipped', items: [{productName: 'Monitor', price: 300}]},
// 	{
// 		orderId: 104,
// 		customerName: 'Charlie',
// 		status: 'delivered',
// 		items: [{productName: 'Webcam', price: 50}, {productName: 'Headphones', price: 100}]
// 	},
// ];
//
// const ordersAggregation = (orders) => {
// 	const initialState = {
// 		ordersInfo: [],
// 		customersSummary: {}
// 	}
//
// 	return orders.reduce((acc, order) => {
// 		const { orderId, items, status, customerName } = order;
//
// 		const totalOrderAmount = items.reduce((sum, {price}) => {
// 			return sum + price
// 		}, 0)
//
// 		acc.ordersInfo.push({
// 			orderId,
// 			totalOrderAmount
// 		})
//
// 		if (!acc.customersSummary[customerName]) acc.customersSummary[customerName] = {totalOrders: 0, totalSpent: 0, deliveredOrdersCount: 0}
//
// 		acc.customersSummary[customerName].totalOrders += 1;
// 		acc.customersSummary[customerName].totalSpent += totalOrderAmount
// 		if (status === 'delivered') {
// 			acc.customersSummary[customerName].deliveredOrdersCount += 1
// 		}
//
// 		return acc
//
// 	}, initialState);
// };
//
// console.log(ordersAggregation(orders));

// const transactions = [
// 	{ id: 1, category: 'food', amount: 50, date: '2024-03-10' },
// 	{ id: 2, category: 'transport', amount: 20, date: '2024-03-10' },
// 	{ id: 3, category: 'food', amount: 30, date: '2024-03-11' },
// 	{ id: 4, category: 'utilities', amount: 100, date: '2024-03-11' },
// 	{ id: 5, category: 'food', amount: 25, date: '2024-03-12' },
// 	{ id: 6, category: 'transport', amount: 15, date: '2024-03-12' },
// ];
//
// const fn = (transactions) => {
// 	const result = {};
//
// 	for (const transaction of transactions) {
// 		const date = new Date(transaction.date).toISOString().slice(0, 10);
//
// 		if (!result[date]) result[date] = 0;
//
// 		result[date] += transaction.amount
// 	}
//
// 	return result
// };
//
// console.log(fn(transactions))
// //{
// //   '2024-03-10': 70,  // (50 + 20)
// //   '2024-03-11': 130, // (30 + 100)
// //   '2024-03-12': 40   // (25 + 15)
// // }

// const users = [
// 	{ id: 1, name: 'Alice', email: 'alice@example.com' },
// 	{ id: 2, name: 'Bob', email: 'bob@example.com' },
// 	{ id: 3, name: 'Charlie', email: 'charlie@example.com' },
// ];
//
// const usersById  = (users, id) => {
// 	const hasMapUsers = new Map();
//
// 	users.forEach((user) => {
// 		hasMapUsers.set(user.id, user)
// 	});
//
// 	return [...hasMapUsers.values()].find((value) => value.id === id)
// };
//
// console.log(usersById (users, 2))

// const books = [
// 	{ title: 'Book A', author: 'Author X', year: 2000 },
// 	{ title: 'Book B', author: 'Author Y', year: 2010 },
// 	{ title: 'Book C', author: 'Author X', year: 2005 },
// 	{ title: 'Book D', author: 'Author Z', year: 2015 },
// 	{ title: 'Book E', author: 'Author Y', year: 2012 },
// ];
//
// const booksByAuthor = (books) => {
// 	return books.reduce((hashMapBooks, book) => {
// 	  if (!hashMapBooks.has(book.author)) hashMapBooks.set(book.author, []);
//
// 		hashMapBooks.get(book.author).push(book)
//
// 		return hashMapBooks
// 	}, new Map());
// };
//
// console.log(booksByAuthor(books));

// const products = [
// 	{ id: 1, name: 'Laptop', category: 'Electronics', inStock: true },
// 	{ id: 2, name: 'Chair', category: 'Furniture', inStock: false },
// 	{ id: 3, name: 'Monitor', category: 'Electronics', inStock: true },
// 	{ id: 4, name: 'Desk', category: 'Furniture', inStock: true },
// 	{ id: 5, name: 'Mouse', category: 'Electronics', inStock: false },
// ];
//
// const productsByCategoryAndStock  = (products) => {
// 	const groupByCategory = products.reduce((acc, product) => {
// 		const { category, inStock } = product;
// 	  const key = `${category}_${inStock}`;
//
// 		if (!acc[key]) acc[key] = [];
//
// 		acc[key].push(product)
//
// 		return acc
// 	}, {});
//
// 	const searchKey = `Electronics_true`;
//
// 	return groupByCategory[searchKey] || []
// }
//
// console.log(productsByCategoryAndStock(products));

// const initialProducts = [
// 	{ id: 101, name: 'T-Shirt', color: 'red', size: 'M', price: 25 },
// 	{ id: 102, name: 'Jeans', color: 'blue', size: 'L', price: 60 },
// 	{ id: 103, name: 'T-Shirt', color: 'blue', size: 'S', price: 20 },
// ];
//
// const getProductById = (products, id) => {
// 	const findById = products.filter((product) => product.id === id);
//
// 	return findById.length > 0 ? findById[0] : null;
// };
//
// console.log(getProductById(initialProducts, 102)) // { id: 102, name: 'Jeans', color: 'blue', size: 'L', price: 60 }

// const inventory = [
// 	{ id: 'prodA', name: 'Laptop Pro', category: 'Electronics', price: 1500, quantityInStock: 5 },
// 	{ id: 'prodB', name: 'Mechanical Keyboard', category: 'Accessories', price: 120, quantityInStock: 20 },
// 	{ id: 'prodC', name: 'Gaming Mouse', category: 'Accessories', price: 70, quantityInStock: 8 },
// 	{ id: 'prodD', name: '4K Monitor', category: 'Electronics', price: 400, quantityInStock: 3 },
// 	{ id: 'prodE', name: 'Webcam HD', category: 'Accessories', price: 50, quantityInStock: 15 },
// 	{ id: 'prodF', name: 'External SSD', category: 'Electronics', price: 100, quantityInStock: 1 }, // Дефицитный
// ];
//
// const getLowStockItems = (inventory) => {
// 	let total = 0;
// 	const onlyElectronics = inventory.filter((item) => item.quantityInStock <= 5);
//
// 	for (const element of onlyElectronics) {
// 		total += element.price
// 	}
//
// 	return Math.round(total / onlyElectronics.length)
// };
//
// console.log(getLowStockItems(inventory))

//
// const projects = [
// 	{projectId: 'p1', name: 'Website Redesign', status: 'active', team: ['empA', 'empC']},
// 	{projectId: 'p2', name: 'Mobile App Development', status: 'pending', team: ['empB']},
// 	{projectId: 'p3', name: 'Database Optimization', status: 'completed', team: ['empA', 'empB', 'empD']},
// ];
//
// const employees = [
// 	{employeeId: 'empA', name: 'Alice', role: 'Developer', experience: 5},
// 	{employeeId: 'empB', name: 'Bob', role: 'Tester', experience: 3},
// 	{employeeId: 'empC', name: 'Charlie', role: 'Designer', experience: 7},
// 	{employeeId: 'empD', name: 'David', role: 'DBA', experience: 6},
// ];
//
// const getProjectTeamDetails = (id) => {
// 	const projectsById = new Map();
// 	projects.forEach((item) => projectsById.set(item.projectId, item));
//
// 	const employeesById = new Map();
// 	employees.forEach((emp) => employeesById.set(emp.employeeId, emp));
//
// 	const project = projectsById.get(id);
//
// 	if (!project) {
// 		return []
// 	}
//
// 	const teamEmployeesIds = project.team;
//
// 	const teamDetails = teamEmployeesIds.map((employeeId) => {
// 		const employee = employeesById.get(employeeId);
//
// 		if (employee) {
// 			return {
// 				employeeId: employee.employeeId,
// 				name: employee.name,
// 				role: employee.role
// 			}
// 		} else {
// 			return null
// 		}
// 	})
//
// 	return teamDetails.filter(Boolean)
// };
//
// console.log(getProjectTeamDetails('p3'));

// const userDataStrings = [
// 	"101:Alice Smith:alice@example.com:Admin",
// 	"102:Bob Johnson:bob@example.com:User",
// 	"103:Charlie Brown:charlie@example.com:Admin",
// 	"104:David Lee:david@example.com:Guest",
// ];
//
// const parseUserData = (data) => {
// 	return data.reduce((acc, item) => {
// 	  const [ id, name, email, role ] = item.split(':');
//
// 		acc.push({
// 			id: parseInt(id, 10),
// 			name,
// 			email,
// 			role
// 		})
//
// 		return acc
// 	}, []);
// };
//
// const findUsersByEmailDomain = (cb) => {
// 	return cb.filter((user) => user.email.includes('example.com'))
// };
//
// parseUserData(userDataStrings)
//
// console.log(findUsersByEmailDomain(parseUserData(userDataStrings)))

//
// let itemsByCategory = new Map();
// let itemsById = new Map();
// let inventory = [];
//
//
// const initializeInventorySystem = (initialItems) => {
// 	// Очищаем существующие данные и индексы, если они есть
// 	inventory = [];
// 	itemsById = new Map();
// 	itemsByCategory = new Map();
//
// 	// Добавляем каждый начальный товар через нашу функцию addItem
// 	initialItems.forEach(item => addProduct(item));
// };
//
// const addProduct = (item) => {
// 	if (itemsById.has(item.itemId)) {
// 		return false
// 	}
//
// 	inventory.push(item)
//
// 	itemsById.set(item.itemId, item)
//
// 	const {category} = item;
// 	if (!itemsByCategory.has(category)) itemsByCategory.set(category, []);
//
// 	itemsByCategory.get(category).push(item);
//
// 	return true
// };
//
// const newProduct = {itemId: 'C003', name: 'iPhone 16 Pro max', category: 'Electronics', price: 1600, stock: 100};
//
// const initialInventory = [
// 	{ itemId: 'A001', name: 'Laptop Pro', category: 'Electronics', price: 1200, stock: 10 },
// 	{ itemId: 'B002', name: 'Mechanical Keyboard', category: 'Accessories', price: 150, stock: 25 },
// ];
//
// console.log("--- Инициализация инвентаря ---");
// initializeInventorySystem(initialInventory);
// console.log("productsById после инициализации:", itemsById);
// console.log("productsByColor после инициализации:", itemsByCategory);
//
// // Добавляем новый товар
// console.log("\n--- Добавление нового товара C003 (Monitor) ---");
// const newItem1 = { itemId: 'C003', name: 'Gaming Monitor', category: 'Electronics', price: 300, stock: 5 };
// addProduct(newItem1);
// console.log("itemsById после добавления:", itemsById);
// console.log("itemsByCategory после добавления:", itemsByCategory);
// // Проверка: 'Electronics' должен теперь содержать Laptop Pro и Gaming Monitor
//
// // Добавляем еще один товар в новую категорию
// console.log("\n--- Добавление нового товара D004 (Desk) ---");
// const newItem2 = { itemId: 'D004', name: 'Standing Desk', category: 'Furniture', price: 500, stock: 8 };
// addProduct(newItem2);
// console.log("itemsById после добавления:", itemsById);
// console.log("itemsByCategory после добавления:", itemsByCategory);
// // Проверка: Должна появиться новая категория 'Furniture'
//
// // Попытка добавить товар с существующим ID
// console.log("\n--- Попытка добавить товар с существующим ID A001 ---");
// const duplicateItem = { itemId: 'A001', name: 'Old Laptop', category: 'Electronics', price: 1000, stock: 5 };
// addProduct(duplicateItem); // Должно вывести предупреждение
// console.log("itemsById после попытки дублирования:", itemsById); // Должен остаться старый A001

// const salesTransactions = [
// 	{transactionId: 't1', productId: 'prodA', quantity: 2, price: 100, date: '2025-05-01', customerId: 'cust1'},
// 	{transactionId: 't2', productId: 'prodB', quantity: 1, price: 250, date: '2025-05-01', customerId: 'cust2'},
// 	{transactionId: 't3', productId: 'prodA', quantity: 1, price: 100, date: '2025-05-02', customerId: 'cust1'},
// 	{transactionId: 't4', productId: 'prodC', quantity: 3, price: 50, date: '2025-05-02', customerId: 'cust3'},
// 	{transactionId: 't5', productId: 'prodB', quantity: 2, price: 250, date: '2025-05-03', customerId: 'cust2'},
// ];
//
// const customerPurchaseHistory = (salesTransactions) => {
// 	return salesTransactions.reduce((acc, currentValue) => {
// 		acc.dailyRevenue += currentValue.price
// 		acc.averageDailyRevenue = acc.dailyRevenue / salesTransactions.length
//
// 		return acc
// 	}, {dailyRevenue: 0, averageDailyRevenue: 0}).averageDailyRevenue
// };
//
// console.log(customerPurchaseHistory(salesTransactions))

// const transactions = [
// 	{ id: 1, userId: "u1", category: "Food", amount: 50 },
// 	{ id: 2, userId: "u2", category: "Transport", amount: 25 },
// 	{ id: 3, userId: "u1", category: "Food", amount: 30 },
// 	{ id: 4, userId: "u3", category: "Entertainment", amount: 70 },
// 	{ id: 5, userId: "u2", category: "Transport", amount: 15 },
// ];
//
// const aggregateTransactions = (transactions, groupByField) => {
// 	return transactions.reduce((acc, currentValue) => {
// 	  acc[currentValue[groupByField]] ??= {totalAmount: 0, count: 0, transactions: []};
// 		acc[currentValue[groupByField]].totalAmount += currentValue.amount;
// 		acc[currentValue[groupByField]].count += 1;
//
// 		acc[currentValue[groupByField]].transactions.push(currentValue);
//
// 		return acc
// 	}, {});
// };
//
//
// console.log(JSON.stringify(aggregateTransactions(transactions, 'category'), null, 2))

// class Product {
// 	constructor(name, price, quantity) {
// 		this._name = name;
// 		this._price = price;
// 		this._quantity = quantity;
// 	}
//
// 	getTotalPrice() {
// 		return this._price * this._quantity
// 	}
// }
//
// class Inventory {
// 	constructor() {
// 		this._products = [];
// 	}
//
// 	addProduct(product) {
// 		if (!(product instanceof Product)) {
// 			throw new Error('Invalid product type. Only Product instances can be added.');
// 		} else {
// 			this._products.push(product)
// 		}
// 	}
//
// 	removeProduct(productName) {
// 		const findProductIndex = this._products.findIndex((product) => product._name === productName);
//
// 		if (findProductIndex !== -1) {
// 			this._products.splice(findProductIndex, 1)
// 		} else {
// 			return `Product not found`
// 		}
// 	}
//
// 	findProduct(productName) {
// 		const result = this._products.find((product) => product._name === productName);
//
// 		if (result) {
// 			return result
// 		} else {
// 			return `Product ${productName} not found`
// 		}
// 	}
//
// 	listProducts() {
// 		return this._products.map((p) => ({
// 			name: p._name,
// 			price: p._price,
// 			quantity: p._quantity,
// 			totalPrice: p.getTotalPrice()
// 		}))
// 	}
// }
//
// const milk = new Product('Milk', 1.5, 10);
// const phone = new Product('iPhone', 999, 50);
// const bread = new Product('bread', 2.0, 5);
//
// const storeInventory = new Inventory();
//
// storeInventory.addProduct(milk);
// storeInventory.addProduct(phone);
// storeInventory.addProduct(bread);
//
// console.log('--- Initial Inventory ---');
// console.log(storeInventory.listProducts());
//
// console.log('\n--- Finding Products ---');
// const foundPhone = storeInventory.findProduct('iPhone');
// console.log(foundPhone); // Должен вернуть объект Product
//
// const notFoundItem = storeInventory.findProduct('Laptop');
// console.log(notFoundItem); // Должен вернуть "Product 'Laptop' not found."
//
// console.log('\n--- Removing Products ---');
// console.log(storeInventory.removeProduct('Milk')); // Должно удалить молоко
// console.log(storeInventory.removeProduct('Tablet')); // Попытка удалить несуществующий товар
//
// console.log('\n--- Inventory After Removal ---');
// console.log(storeInventory.listProducts()); // Проверить, что молоко удалено

// const users = [
// 	{id: 1, name: "Alice", status: "active", age: 25},
// 	{id: 2, name: "Bob", status: "inactive", age: 30},
// 	{id: 3, name: "Charlie", status: "active", age: 35},
// ];
//
// const products = [
// 	{id: 101, name: "Laptop", category: "Electronics", price: 1200},
// 	{id: 102, name: "Keyboard", category: "Electronics", price: 75},
// 	{id: 103, name: "Book", category: "Books", price: 20},
// ];
//
// const createDataFilter = (items, property, value) => {
// 	return items.filter((item) => {
// 		if (item[property] === value) {
// 			return item
// 		}
// 	})
// };
//
// const filterActiveUsers = createDataFilter(users, "status", "active");
//  // [{ id: 1, name: "Alice", status: "active", age: 25 }, { id: 3, name: "Charlie", status: "active", age: 35 }]
// console.log(filterActiveUsers)
// const filterElectronics = createDataFilter(products, "category", "Electronics");
//  // [{ id: 101, name: "Laptop", category: "Electronics", price: 1200 }, { id: 102, name: "Keyboard", category: "Electronics", price: 75 }]
// console.log(filterElectronics)

// const joinNumbersFromRange = (from, to) => {
// 	let result = '';
// 	for (let i = from; i <= to; i++) {
// 		result += i.toString();
// 	}
//
// return result;
// };
//
// console.log(joinNumbersFromRange(5, 10))

// const simulateApiCall = (text, delay) => {
// 	return new Promise((resolve) => {
// 		setTimeout(() => {
// 			console.log(text);
// 			resolve(text)
// 		}, delay)
// 	})
// };
//
// const runParallelTasks = async(task1, task2, task3) => {
// 	try {
// 		return await Promise.all([task1, task2, task3])
// 	} catch (e) {
// 		console.log(e)
// 	}
// };
//
// const task1Promise = simulateApiCall('Loading images', 2000);
// const task2Promise = simulateApiCall('Loading scripts', 1000);
// const task3Promise = simulateApiCall('Loading styles', 1500);
//
// runParallelTasks(task1Promise, task2Promise, task3Promise)
// 	.then((results) => {
// 		console.log('All tasks completed, result:', results)
// 	}).catch((e) => {
// 	console.log(e)
// })

// const salesQ1 = { laptops: 10, keyboards: 5, monitors: 3, mice: "out of stock" };
// const salesQ2 = { laptops: 7, keyboards: 8, mice: "available", headphones: 2 };
// const salesQ3 = { monitors: 4, keyboards: 3, speakers: 1 };
//
// const mergeAndSumObjects = (obj1, obj2, obj3) => {
// 	const merged = {...obj1, ...obj2, ...obj3};
//
// 	const sumValues = (key) => {
// 		return (obj1[key] || 0) + (obj2[key] || 0) + (obj3[key] || 0);
// 	}
//
// 	return Object.entries(merged).filter(([_, value]) => typeof value === 'number').reduce((acc, [key, _]) => {
//
// 		acc[key] = sumValues(key);
//
// 		return acc
// 	}, {})
// }
//
// console.log(mergeAndSumObjects(salesQ1, salesQ2, salesQ3));

const consoleLog = (fn) => {
	console.log(fn);
	return fn;
};

// const isPalindrome = (text) => {
// 	let j = text.length - 1;
//
// 	console.log(j)
//
// 	for (let i = 0; i < text.length / 2; i++) {
//
// 		if (text[i] !== text[j]) {
// 			return false
// 		}
//
// 		j--;
// 	}
//
// 	return true
// };
//
// consoleLog(isPalindrome('racecar'))
// consoleLog(isPalindrome('Rama'))

// const capitalizeWords = (str) => {
// 	let result = '';
// 	const splitWords = str.split(' ');
//
// 	for (let i = 0; i < splitWords.length; i++) {
// 		const element = splitWords[i];
//
// 		if (element.length > 0) {
// 			result += element.charAt(0).toUpperCase() + element.slice(1)
// 		}
//
// 		if (i < splitWords.length - 1) {
// 			result += ' '
// 		}
// 	}
//
// 	return result
// };
// consoleLog(capitalizeWords("hello world"))

// const removeDuplicates = (str) => {
// 	let result = '';
//
// 	for (let i = 0; i < str.length; i++) {
// 		const element = str[i]
// 		const index = str.indexOf(element)
// 		if (index === i) {
// 			result += str[i]
// 		}
// 	}
//
// 	return result
// };
//
// consoleLog(removeDuplicates('hello'))


// const findLongestWord = (str) => {
// 	let result = '';
// 	const splitWords = str.split(' ');
//
// 	for (let i = 0; i < splitWords.length; i++) {
// 		const element = splitWords[i];
//
// 		if (element.length > result.length) {
// 			result = element
// 		}
// 	}
// 	return result
// };
// consoleLog(findLongestWord("The quick brown fox jumped over the lazy dog"))

// const parseUrl = (url) => {
// 	const parser = new URL(url);
//
// 	return {
// 		protocol: parser.protocol,
// 		host: parser.host,
// 		port: parser.port || '80',
// 		path: parser.pathname,
// 		params: Object.fromEntries(parser.searchParams.entries()),
// 	}
// }
//
// consoleLog(parseUrl("https://www.example.com:8080/path/to/page?param1=value1&param2=value2"))

// const removeAllOccurrences = (str, target) => {
// 	let result = '';
// 	let index = 0;
//
// 	while (index < str.length) {
// 		const foundIndex = str.indexOf(target, index);
//
// 		if (foundIndex !== -1) {
// 			result += str.slice(index, foundIndex);
// 			index = foundIndex + target.length;
// 		} else {
// 			result += str.slice(index);
// 			break;
// 		}
// 	}
//
// 	return result;
// };
//
// consoleLog(removeAllOccurrences('banana', 'na'))

/*
function miniMaxSum(arr) {
	// Write your code here
	const max = arr.slice(1).reduce((acc, num) => acc + num, 0);
	const min = arr.slice(0,4).reduce((acc, num) => acc + num, 0);

	return [min, max].join(' ')
}

console.log(miniMaxSum([1, 2, 3, 4, 5]));*/

// const myPromiseAllSettled = (promises) => {
// 	const mapPromises = promises.map((promise) => {
// 		return promise.then((resolve) => {
// 			return {
// 				status: 'fulfilled',
// 				value: resolve,
// 			}
// 		}).catch((reject) => {
// 			return {
// 				status: 'rejected',
// 				reason: reject
// 			}
// 		})
// 	})
//
// 	return Promise.all(mapPromises)
// };
//
// myPromiseAllSettled([
// 	Promise.resolve(1),
// 	Promise.reject(new Error('Error occurred')),
// 	Promise.resolve(3),
// 	Promise.reject(new Error('Another error'))
// ]).then((res) => {
// 	res.forEach((result) => {
// 		if (result.status === 'fulfilled') {
// 			console.log(`Fulfilled with value: ${result.value}`);
// 		} else {
// 			console.log(`Rejected with reason: ${result.reason.message}`);
// 		}
// 	})
// })

// const debounce = (func, delay) => {
//
// 	let timeoutId;
//
// 	return function(...args) {
// 		if (timeoutId) {
// 			clearTimeout(timeoutId);
// 		}
//
// 		timeoutId = setTimeout(() => {
// 			func.apply(this, args);
// 		}, delay);
// 	};
// };
//
// const logMessage = (message) => {
// 	console.log(`Debounced message: ${message}`);
// };
//
// const debouncedLogMessage = debounce(logMessage, 2000);
//
// console.log(debouncedLogMessage('Hello, World!'));

// const tree = {
// 	value: 1,
// 	children: [
// 		{
// 			value: 2,
// 			children: [
// 				{ value: 4, children: [] },
// 				{ value: 5, children: [] }
// 			]
// 		},
// 		{
// 			value: 3,
// 			children: [
// 				{ value: 6, children: [] }
// 			]
// 		}
// 	]
// };
//
// const traverseTreeDFS = (tree) => {
// 	for (const treeKey in tree) {
// 		if (treeKey === 'value') {
// 			console.log(tree[treeKey])
// 		} else if (treeKey === 'children' && Array.isArray(tree[treeKey])) {
// 			tree[treeKey].forEach((child) => {
// 				traverseTreeDFS(child);
// 			});
// 		}
// 	}
// };
//
// traverseTreeDFS(tree)
//
// console.log('Depth-First Search Traversal of the Tree:');

// class Subject {
// 	constructor() {
// 		this.observers = [];
// 	}
//
// 	addObserver(observer) {
// 		this.observers.push(observer);
// 	}
//
// 	removeObserver(observer) {
// 		this.observers = this.observers.filter(obs => obs !== observer);
// 	}
//
// 	notifyObservers(data) {
// 		this.observers.forEach(observer => observer.update(data));
// 	}
// }
//
// class Observer {
// 	constructor(name) {
// 		this.name = name;
// 	}
//
// 	update(data) {
// 		console.log(`${this.name} received data: ${data}`);
// 	}
// }
//
// const subject = new Subject();
//
// const observer1 = new Observer('Observer 1');
//
// const observer2 = new Observer('Observer 2');
//
// subject.addObserver(observer1);
//
// subject.addObserver(observer2);
//
// subject.notifyObservers('Hello Observers!');
//
// subject.removeObserver(observer1);
//
// subject.notifyObservers('Observer 1 has been removed.'); // Only Observer 2 should receive this notification

// const twoSum = (arr, target) => {
// 	let left = 0;
// 	let right = arr.at(-1);
//
// 	while (left < right) {
// 		const currentNum = arr[left] + arr[right];
//
// 		if (currentNum === target) {
// 			return [left, right]
// 		} else if (currentNum < target) {
// 			left++;
// 		} else {
// 			right--;
// 		}
// 	}
//
// 	return [];
// };
//
// console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1] (потому что nums[0] + nums[1] == 9)

// const curry = (fn) => {
// 	return function (a) {
// 		return function (b) {
// 			return function (c) {
// 				return fn(a, b, c)
// 			}
// 		}
// 	}
// };
//
// const sum = (a, b, c) => {
// 	return a + b + c
// };
//
// const curriedSum = curry(sum);
//
// console.log(curriedSum(1)(2)(3))

// const func = (arr) => {
// 	const result = [];
//
// 	for (const arrElement of arr) {
// 		if (Array.isArray(arrElement)) {
// 			result.push(...func(arrElement))
// 		} else {
// 			result.push(arrElement)
// 		}
// 	}
//
// 	const sortedArray = result.sort((a, b) => a - b);
//
// 	return sortedArray.filter((item, _, array) => array.indexOf(item) === array.lastIndexOf(item))
// };
//
// console.log(func([1, [2, 7, 8], [3, 4, [5, [6, 7]]]]));


// const fn = () => {
// 	const result = [];
//
// 	for (let i = 0; i < 1; i++) {
// 		const innerArray = [];
// 		for (let j = 0; j < i + 1; j++) {
// 			innerArray.push('x');
// 		}
// 		result.push(innerArray);
// 	}
//
// 	for (let i = 1; i < 5; i++) {
// 		const innerArray = [];
// 		for (let j = 0; j < i + 1; j++) {
// 			innerArray.push('x');
// 		}
// 		result.push(innerArray);
// 	}
//
// 	return result;
// };
//
// consoleLog(fn()) //

//[
// 	['x'],
// 	['x', 'x'],
// 	['x', 'x', 'x'],
// 	['x', 'x', 'x', 'x'],
// 	['x', 'x', 'x', 'x', 'x'],
// ]

// const arr = [1,2,3,4,5];
//
// const func = (arr, currentIndex) => {
// 	let nextIndex = currentIndex + 1;
//
// 	nextIndex = nextIndex % arr.length;
//
// 	return arr[nextIndex]
// };
//
// console.log(func(arr, 1));

// const rawLogs = [
// 	"1678886400000 [INFO] User logged in successfully.",
// 	"1678886410000 [WARN] Disk space low.",
// 	"1678886420000 [ERROR] Database connection failed. Retrying...",
// 	"1678886430000 [INFO] User viewed product page.",
// 	"1678886440000 [DEBUG] Debugging network request.",
// 	"1678886450000 [ERROR] Failed to fetch data from external API.",
// 	"1678886460000 [INFO] Order placed: ORD123.",
// 	"INVALID_LOG_ENTRY [ERROR] Malformed entry." // Для теста ошибок парсинга
// ];
//
// const generateLogSummary = (logs) => {
// 	return logs.reduce((acc, log) => {
// 		const leftBracket = log.indexOf('[');
// 		const rightBracket = log.lastIndexOf(']');
//
// 		if (leftBracket === -1 || rightBracket === -1 || leftBracket >= rightBracket) {
// 			acc.errors.push(`Invalid log entry: ${log}`);
// 			return acc;
// 		}
//
// 		const timestamp = log.slice(0, leftBracket).trim();
// 		const logStatus = log.slice(leftBracket + 1, rightBracket).trim();
// 		const message = log.slice(rightBracket + 1).trim();
//
// 		const logEntry = {
// 			timestamp,
// 			logStatus,
// 			message
// 		}
//
// 		if (!acc[logStatus]) {
// 			acc[logStatus] = [];
// 		}
//
// 		acc[logStatus].push(logEntry);
//
// 		return acc
// 	}, {})
// };
//
// console.log(generateLogSummary(rawLogs))

// const sampleText = "Hello world! This is a test. Hello again, world.";
//
// const analyzeText = (sampleText) => {
// 	const cleanAndLowerText = sampleText.replace(/[^\w\s]/gi, '').toLowerCase();
// 	const splitByChars = cleanAndLowerText.split(' ').filter((word) => word !== '');
// 	const totalWords = splitByChars.length;
// 	const uniqueWordsSet  = new Set()
// 	const wordFrequency = {};
//
// 	splitByChars.forEach((word) => {
// 		uniqueWordsSet.add(word);
//
// 		wordFrequency[word] = (wordFrequency[word] || 0) + 1
// 	});
//
// 	return {
// 		totalWords,
// 		uniqueWords: uniqueWordsSet .size,
// 		wordFrequency
// 	}
// };
//
// console.log(analyzeText(sampleText));

// const sentence = "JavaScript is a fun language. I love JavaScript!";
//
// const findWordPositions = (sentence, searchTarget) => {
// 	const firstIndex = sentence.indexOf(searchTarget);
// 	const lastIndex = sentence.lastIndexOf(searchTarget);
// 	const found = sentence.includes(searchTarget)
//
// 	return {
// 		found,
// 		firstIndex,
// 		lastIndex
// 	}
// };
//
// consoleLog(findWordPositions(sentence, 'JavaScript'))

// const fullText = "The quick brown fox jumps over the lazy dog.";
//
// const extractSubstring = (mainString, startIndex, endIndex) => {
// 	return mainString.slice(startIndex, endIndex)
// };
//
// consoleLog(extractSubstring(fullText, 0, 3))

// const tokenize = (docId, text) => {
// 	const words = text.match(/\b\w+\b/g) || [];
// 	const tokens = new Map();
//
// 	words.forEach((word) => {
// 		const lowerCaseWord = word.toLowerCase();
// 		if (tokens.has(lowerCaseWord)) {
// 			tokens.set(lowerCaseWord, tokens.get(lowerCaseWord) + 1);
// 		} else {
// 			tokens.set(lowerCaseWord, 1);
// 		}
// 	});
//
// 	return Array.from(tokens, ([token, count]) => ({
// 		docId,
// 		token,
// 		count
// 	}));
// };
//
//
// console.log(tokenize("doc1", "JavaScript is a programming language. It is widely used for web development."))
// console.log(tokenize("doc2", "Python is another popular language for data science and AI."))

// const isPalindrome = (str) => {
// 	const normalizedStr = str.toLowerCase();
// 	let left = 0;
// 	let right = normalizedStr.at(-1);
//
// 	while (left < right) {
// 		if (normalizedStr[left] !== normalizedStr[right]) {
// 			return false
// 		}
// 		left++;
// 		right--;
// 	}
//
// 	return true
// };
//
// console.log(isPalindrome('Madam'))

// #1
// const reverseString = (str) => {
// 	let result = '';
//
// 	for (let i = str.length - 1; i >= 0; i--) {
// 		const strElement = str[i];
//
// 		result += strElement
// 	}
//
// 	return result
// }
//
// console.log(reverseString('hello'));
//
// const isPalindrome = (str) => {
// 	const normalizeString = str.toLowerCase();
// 	let left = 0;
// 	let right = normalizeString.length - 1;
//
// 	while (left < right) {
// 		if (normalizeString[left] !== normalizeString[right]) {
// 			return false
// 		}
//
// 		left++;
// 		right--
// 	}
//
// 	return true
// };
//
// console.log(isPalindrome('Madam'))
//
// const countVowels = (str) => {
// 	const vowels = 'aeiou';
//
// 	return str.split('').reduce((acc, char) => {
// 		if (vowels.includes(char)) {
// 			acc += 1
// 		}
//
// 		return acc
// 	}, 0)
// };
//
// console.log(countVowels('programming'))
//
// const findMax = (arr) => {
// 	let max = arr[0];
//
// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i] > max) {
// 			max = arr[i]
// 		}
// 	}
//
// 	return max
// };
//
// console.log(findMax([1, 5, 2, 8, 3]))
//
// const removeDuplicates = (arr) => [...new Set(arr)]
//
// console.log(removeDuplicates([1, 2, 2, 3, 1, 4]))
//
// const findMostFrequent = (arr) => {
// 	const countChars = arr.reduce((map, num) => {
// 		if (map.has(num)) {
// 			map.set(num, map.get(num) + 1)
// 		} else {
// 			map.set(num, 1)
// 		}
//
// 		return map
// 	}, new Map())
//
// 	let mostFrequentElement;
// 	let maxCount = 0;
//
// 	for (const [element, count] of countChars.entries()) {
// 		if (count > maxCount) {
// 			maxCount = count;
// 			mostFrequentElement = element
// 		}
// 	}
//
// 	return mostFrequentElement
// };
//
// console.log(findMostFrequent([1, 3, 2, 1, 3, 1]))
//
// const flattenArray = (arr) => {
// 	const result = [];
//
// 	arr.forEach((item) => {
// 		if (Array.isArray(item)) {
// 			result.push(...flattenArray(item))
// 		} else {
// 			result.push(item)
// 		}
// 	});
//
// 	return result
// };
//
// console.log(flattenArray([1, [2, 3], [4, [5]]]))
//
// const debounce = (myFn, delay) => {
// 	let timer;
// 	return (...args) => {
// 		const context = this;
// 		clearTimeout(timer);
// 		timer = setTimeout(() => {
// 			myFn.apply(context, args)
// 		}, delay)
// 	}
// };
//
// const saveInput = () => {
// 	console.log('Saving data')
// };
//
// const processChange = debounce(() => saveInput());
//
// console.log(processChange())
//
// function curry(f) {
// 	return function (a) {
// 		return function (b) {
// 			return function (c) {
// 				return f(a, b, c);
// 			}
// 		};
// 	};
// }
//
// function sum(a, b, c) {
// 	return a + b + c;
// }
//
// let curriedSum = curry(sum);
//
// console.log(curriedSum(1)(2)(3));

// function sum() {
// 	let total = 0;
//
// 	for (let i = 0; i < arguments.length; i++) {
// 		const element = arguments[i];
//
// 		if (typeof element === 'number') {
// 			total += element
// 		}
// 	}
//
// 	return total
// }
//
// const result = sum.apply(undefined, [1, 2, 3, '4', 5]);
//
// console.log(result)

// const inputString = 'Привет мир';
//
// const stringChanger = (str) => {
// 	let result = '';
// 	const letters = ['а', 'е', 'ё', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я'];
//
// 	for (const strElement of str) {
// 		if (letters.includes(strElement)) {
// 			result += strElement.toUpperCase()
// 		} else {
// 			result += strElement.toLowerCase()
// 		}
// 	}
//
// 	return result
// };
//
// console.log(stringChanger(inputString))

// const students = [
// 	{ name: 'Анна', score: 85, grade: '10A' },
// 	{ name: 'Борис', score: 92, grade: '11Б' },
// 	{ name: 'Вика', score: 78, grade: '10A' },
// 	{ name: 'Глеб', score: 88, grade: '11Б' },
// 	{ name: 'Дима', score: 95, grade: '10A' }
// ];
//
// const solution = (students) => {
// 	const groupByGrade = students.reduce((acc, student) => {
// 		const { score, grade } = student;
// 		acc[grade] ??= [];
//
// 		acc[grade].push(score)
//
// 		return acc
// 	}, {})
//
// 	return Object.entries(groupByGrade).reduce((acc, [key, value]) => {
// 		const avgScore = value.reduce((total, score) => total + score, 0) / value.length;
//
// 		acc[key] = avgScore;
//
// 		return acc
// 	}, {})
// };
//
// console.log(solution(students));

// const users = [
// 	{id: 1, name: 'Иван'},
// 	{id: 2, name: 'Мария'}
// ];
// const transactions = [
// 	{userId: 1, amount: 100},
// 	{userId: 2, amount: 50},
// 	{userId: 1, amount: 200},
// 	{userId: 2, amount: 75}
// ];
//
// const solution = (users, transactions) => {
// 	return users.map((user) => {
// 		const { id, name } = user;
// 		const userTransactions = transactions.filter(({userId}) => userId === id).map(({amount}) => amount);
// 		const totalAmount = userTransactions.reduce((total, amount) => total + amount, 0);
//
// 		return {
// 			id,
// 			name,
// 			transactions: userTransactions,
// 			totalAmount
// 		}
// 	})
// };
//
// console.log(solution(users, transactions))

//[
//   { id: 1, name: 'Иван', transactions: [100, 200], totalAmount: 300 },
//   { id: 2, name: 'Мария', transactions: [50, 75], totalAmount: 125 }
// ]

// const salesData = [
// 	{ product: 'Ноутбук', region: 'Север', sales: 1200 },
// 	{ product: 'Мышь', region: 'Юг', sales: 150 },
// 	{ product: 'Ноутбук', region: 'Юг', sales: 800 },
// 	{ product: 'Клавиатура', region: 'Север', sales: 300 }
// ];
//
// const salesAggregation = (salesData) => {
// 	return salesData.reduce((acc, {product, region, sales}) => {
// 		acc[region] ??= {};
// 		acc[region][product] ??= 0;
//
// 		acc[region][product] += sales;
//
// 		return acc
// 	}, {});
// };
//
// console.log(salesAggregation(salesData))

// const events = [
// 	{ timestamp: '2023-01-01T10:00:00Z', value: 10 },
// 	{ timestamp: '2023-01-01T11:30:00Z', value: 15 },
// 	{ timestamp: '2023-01-02T09:00:00Z', value: 20 },
// 	{ timestamp: '2023-01-02T14:00:00Z', value: 5 }
// ];
//
// const solution = (events) => {
// 	return events.reduce((acc, event) => {
// 	  const slicedTimeStamp = new Date(event.timestamp).toISOString().slice(0, 10);
//
// 		acc[slicedTimeStamp] ??= 0;
//
// 		acc[slicedTimeStamp] += event.value
//
// 		return acc
// 	}, {});
// };
//
// console.log(solution(events));

// const kebabCase = 'myVariableName';
//
// const formatToKebabCase = (str) => {
// 	return str.split('').map((char, index) => {
// 		return char.toUpperCase() === char
// 			? `${index !== 0 ? '-' : ''}${char.toLowerCase()}`
// 			: char
// 	}).join('')
// };
//
// consoleLog(formatToKebabCase(kebabCase))

// let name = 'global';
// const obj = {
// 	name: 'local',
// 	getName: function () {
// 		return () => this.name
// 	}
// }
//
// const getNameFn = obj.getName();
//
// console.log(getNameFn())

// const initialProduct = {
// 	name: 'Keyboard',
// 	price: 75,
// 	available: true
// };
//
// const productUpdates = {
// 	price: 80,
// 	color: 'black',
// 	available: false
// };
//
// const updateProduct = (initialProduct, productUpdates) => {
// 	return Object.entries(productUpdates).reduce((acc, [key, value]) => {
// 		if (key in acc) {
// 			acc[key] = value
// 		} else {
// 			acc[key] = value
// 		}
//
// 		return acc
// 	}, {...initialProduct})
// };
//
// const updatedProduct = updateProduct(initialProduct, productUpdates);
// console.log(updatedProduct);
// // Ожидаемый вывод: { name: 'Keyboard', price: 80, available: false, color: 'black' }
// console.log(initialProduct);
// // Ожидаемый вывод: { name: 'Keyboard', price: 75, available: true } (должен остаться неизменным)

// const isEvenOrOdd = (num) => {
// 	return num % 2 === 0 ? 'Четное' : 'Нечетное'
// };
//
// console.log(isEvenOrOdd(4))
// console.log(isEvenOrOdd(7))
// console.log(isEvenOrOdd(0))

// const findMax = (arr) => {
// 	return arr.length === 0 ? undefined : arr.reduce((max, curr) => curr > max ? curr : max, arr[0])
// };
//
// console.log(findMax([1, 5, 2, 8, 3])); // Ожидаемый вывод: 8
// console.log(findMax([-1, -5, -2]));  // Ожидаемый вывод: -1
// console.log(findMax([]));            // Ожидаемый вывод: undefined


// const words = ['apple', 'banana', 'cat', 'dog', 'elephant'];
//
// const filterLongStrings = (words, wordLength) => {
// 	return words.filter((word) => word.length >= wordLength)
// };
// console.log(filterLongStrings(words, 5)); // Ожидаемый вывод: ['apple', 'banana', 'elephant']
// console.log(filterLongStrings(words, 3)); // Ожидаемый вывод: ['apple', 'banana', 'cat', 'dog', 'elephant']
// console.log(filterLongStrings([], 2));   // Ожидаемый вывод: []

// const users = [
// 	{ id: 1, name: 'Alice', active: true },
// 	{ id: 2, name: 'Bob', active: false },
// 	{ id: 3, name: 'Charlie', active: true }
// ];
//
// function updateItemInArray(users, idKey, idValue, updates) {
// 	return users.map((user) => user[idKey] === idValue ? {...user, ...updates} : user)
// }
//
// const updatedUsers = updateItemInArray(users, 'id', 2, { active: true, email: 'bob@example.com' });
// console.log(updatedUsers);

// function countWords(string) {
// 	const trimmedString = string.trim();
//
// 	if (!trimmedString) return 0;
//
// 	return trimmedString.split(/\s+/).length
// }
//
// console.log(countWords("Привет, мир!"));           // Ожидаемый вывод: 2
// console.log(countWords("   JavaScript - это круто   ")); // Ожидаемый вывод: 4
// console.log(countWords("ОдинокоеСлово"));         // Ожидаемый вывод: 1
// console.log(countWords(""));                      // Ожидаемый вывод: 0

// function multiplyAll(numbers) {
//
// 	if (!numbers.length) return 1;
//
// 	return numbers.reduce((acc, num) => acc * num, 1);
// }
//
// console.log(multiplyAll([1, 2, 3, 4]));  // Ожидаемый вывод: 24
// console.log(multiplyAll([5, 0, 10]));   // Ожидаемый вывод: 0
// console.log(multiplyAll([]));           // Ожидаемый вывод: 1

// function findSecondLargest(numbers) {
// 	if (numbers.length < 2) return undefined;
//
// 	const uniqueNumbers = [...new Set(numbers)].sort((a, b) => b - a);
//
// 	return uniqueNumbers.length < 2 ? undefined : uniqueNumbers[1]
// }
//
// console.log(findSecondLargest([10, 40, 30, 20, 50])); // Ожидаемый вывод: 40
// console.log(findSecondLargest([5, 5, 5]));             // Ожидаемый вывод: undefined
// console.log(findSecondLargest([10, 20]));             // Ожидаемый вывод: 10
// console.log(findSecondLargest([]));                   // Ожидаемый вывод: undefined

// const products = [
// 	{ name: 'Laptop', price: 1200 },
// 	{ name: 'Mouse', price: 25 },
// 	{ name: 'Keyboard', price: 75 },
// 	{ name: 'Monitor', price: 300 }
// ];
//
// function filterByRange(arr, propName, min, max) {
// 	return arr.filter((item) => typeof item[propName] && item[propName] >= min && item[propName] <= max)
// }
//
// console.log(filterByRange(products, 'price', 50, 200));
// // Ожидаемый вывод: [{ name: 'Keyboard', price: 75 }]
//
// console.log(filterByRange(products, 'price', 0, 100));
// // Ожидаемый вывод: [{ name: 'Mouse', price: 25 }, { name: 'Keyboard', price: 75 }]
//
// console.log(filterByRange(products, 'price', 1000, 2000));
// // Ожидаемый вывод: [{ name: 'Laptop', price: 1200 }]

// function hasUniqueChars(str) {
// 	if (str.length === 0) return true;
//
// 	const charSet = new Set();
//
// 	for (const char of str) {
// 		if (charSet.has(char)) {
// 			return false; // Найден повторяющийся символ
// 		}
// 		charSet.add(char);
// 	}
//
// 	return true; // Все символы уникальны
// }
//
// console.log(hasUniqueChars('abcdefg'));  // Ожидаемый вывод: true
// console.log(hasUniqueChars('hello'));    // Ожидаемый вывод: false (повторяется 'l')
// console.log(hasUniqueChars('abcdeA'));   // Ожидаемый вывод: true
// console.log(hasUniqueChars(''));         // Ожидаемый вывод: true

// let myTasks = [];
//
// function addTask(tasks, description) {
// 	const newTask = {
// 		id: tasks.length + 1,
// 		description,
// 		isCompleted: false
// 	}
//
// 	return [...tasks, newTask]
// }
//
// myTasks = addTask(myTasks, "Купить молоко");
// myTasks = addTask(myTasks, "Сделать домашнее задание");
// myTasks = addTask(myTasks, "Позвонить другу");
//
// console.log('addTask', myTasks);
// /*
// Ожидаемый вывод (id будут отличаться):
// [
//   { id: ..., description: "Купить молоко", completed: false },
//   { id: ..., description: "Сделать домашнее задание", completed: false },
//   { id: ..., description: "Позвонить другу", completed: false }
// ]
// */
//
// function toggleTaskCompleted(tasks, id) {
// 	return tasks.map((task) => task.id === id ? {...task, isCompleted: !task.isCompleted} : task)
// }
//
// myTasks = toggleTaskCompleted(myTasks, myTasks[0].id); // Завершаем первую задачу
// console.log('toggleTaskCompleted', myTasks);
// // Ожидаемый вывод: первая задача теперь completed: true
//
// function getCompletedTasks(tasks) {
// 	return tasks.filter((task) => task.isCompleted)
// }
//
// const completed = getCompletedTasks(myTasks);
// console.log('completed', completed);
// // Ожидаемый вывод: массив с одной завершенной задачей
//
// function deleteTask(tasks, id) {
// 	return tasks.filter((task) => task.id !== id)
// }
//
// myTasks = deleteTask(myTasks, myTasks[1].id); // Удаляем вторую задачу
// console.log('deleteTask', myTasks);
// // Ожидаемый вывод: массив из двух задач (первой и третьей)

// const countElements = (items) => {
// 	return items.reduce((acc, currentValue) => {
// 		acc[currentValue] = (acc[currentValue] || 0) + 1
//
// 		return acc
// 	}, {})
// };
//
// const findMostFrequent = (items) => {
// 	const result = countElements(items);
// 	const entries = Object.entries(result);
//
// 	let maxCount = 0;
// 	let mostFrequentElement;
//
// 	for (const [element, count] of entries) {
// 		if (count > maxCount) {
// 			maxCount = count;
// 			mostFrequentElement = element
// 		}
// 	}
//
// 	return mostFrequentElement
// };
//
// console.log(findMostFrequent([1, 3, 1, 3, 2, 1]));      // Ожидаемый вывод: 1
// console.log(findMostFrequent(['apple', 'banana', 'apple', 'orange', 'banana', 'apple'])); // Ожидаемый вывод: 'apple'
// console.log(findMostFrequent([1, 2, 3, 4, 5]));         // Ожидаемый вывод: 1 (или первый элемент, если все уникальны)
// console.log(findMostFrequent([]));                     // Ожидаемый вывод: undefined
// console.log(findMostFrequent([7]));                     // Ожидаемый вывод: 7

// const findMissingNumber = (array) => {
// 	const n = array.length + 1; // N - это длина массива + 1
// 	const expectedSum = (n * (n + 1)) / 2; // Формула суммы первых N натуральных чисел
// 	const actualSum = array.reduce((acc, num) => acc + num, 0); // Сумма элементов массива
//
// 	return expectedSum - actualSum; // Недостающее число
// };
//
//
// console.log(findMissingNumber([1, 2, 4, 5]));        // Ожидаемый вывод: 3
// console.log(findMissingNumber([5, 1, 3, 2]));        // Ожидаемый вывод: 4
// console.log(findMissingNumber([10, 8, 6, 7, 5, 4, 2, 3, 1])); // Ожидаемый вывод: 9
// console.log(findMissingNumber([1]));                // Ожидаемый вывод: undefined (или обработать как ошибку, если N=1, а массив [1])
// // Примечание: для findMissingNumber([1]) ожидается, что N=2 и 2 отсутствует.
// // Если N=1, то массив должен быть [1], и ничего не отсутствует.
// // Для простоты, предположим, что N >= 2, и всегда одно число отсутствует.
// // Если массив [1], а N=1, то ничего не отсутствует.
// // Если N=2, а массив [1], то отсутствует 2.
// // Давайте уточним: N - это длина массива + 1.
// // Например, для [1, 2, 4, 5], N = 4 (длина массива) + 1 = 5. Диапазон [1, 5]. Недостает 3.


// const users = [
// 	{ id: 1, name: 'Alice', age: 30 },
// 	{ id: 2, name: 'Bob', age: 24 },
// 	{ id: 3, name: 'Alice', age: 35 } // Этого пользователя 'Alice' должно заменить предыдущего
// ];
//
// function arrayToObject(users, keyProp) {
// 	return users.reduce((acc, obj) => {
// 	  const groupKey = obj[keyProp];
//
// 		acc[groupKey] = obj
//
// 		return acc
// 	}, {});
// }
//
// console.log('by id', arrayToObject(users, 'id'));
// /*
// Ожидаемый вывод:
// {
//   '1': { id: 1, name: 'Alice', age: 30 },
//   '2': { id: 2, name: 'Bob', age: 24 },
//   '3': { id: 3, name: 'Alice', age: 35 }
// }
// */
//
// console.log('by name', arrayToObject(users, 'name'));
// /*
// Ожидаемый вывод:
// {
//   'Alice': { id: 3, name: 'Alice', age: 35 }, // Последняя 'Alice'
//   'Bob': { id: 2, name: 'Bob', age: 24 }
// }
// */
//
// console.log('not mutable', users); // Исходный массив должен остаться неизменным


// const salesData = [
// 	{product: 'A', category: 'Electronics', price: 100, quantity: 2},
// 	{product: 'B', category: 'Books', price: 20, quantity: 5},
// 	{product: 'C', category: 'Electronics', price: 150, quantity: 1},
// 	{product: 'D', category: 'Books', price: 30, quantity: 3},
// 	{product: 'E', category: 'Electronics', price: 50, quantity: 4, discount: true} // discount не должно влиять на price/quantity
// ];
//
// // Сумма quantity по category
// console.log(groupAndAggregate(salesData, 'category', 'quantity', 'sum'));
// /*
// Ожидаемый вывод:
// {
//   'Electronics': 7, // 2 + 1 + 4
//   'Books': 8        // 5 + 3
// }
// */
//
// // Средняя price по category
// console.log(groupAndAggregate(salesData, 'category', 'price', 'average'));
/*
Ожидаемый вывод:
{
  'Electronics': 100, // (100 + 150 + 50) / 3
  'Books': 25        // (20 + 30) / 2
}
*/

// Что если aggregateProp не число?
// const mixedData = [
// 	{type: 'A', value: 10},
// 	{type: 'B', value: 'hello'},
// 	{type: 'A', value: 20}
// ];
//
// function groupByKeyItems(items, groupProp) {
// 	return items.reduce((acc, item) => {
// 		const groupKey = item[groupProp];
//
// 		acc[groupKey] ??= [];
//
// 		acc[groupKey].push(item)
//
// 		return acc
// 	}, {});
// }
//
// function groupAndAggregate(mixedData, groupProp, aggregateProp, operation) {
// 	const groupedResult = groupByKeyItems(mixedData, groupProp);
// 	const entries = Object.entries(groupedResult);
//
// 	return entries.reduce((acc, [key, value]) => {
// 		if (operation === 'sum') {
// 			acc[key] = value.reduce((sum, item) => typeof item[aggregateProp] === 'number' ? sum + item[aggregateProp] : sum, 0)
// 		}
//
// 		return acc
// 	}, {})
// }
//
// console.log(groupAndAggregate(mixedData, 'type', 'value', 'sum'));
// /*
// Ожидаемый вывод:
// {
//   'A': 30, // 10 + 20
//   'B': 0   // 'hello' игнорируется, суммируется 0 (или можно оставить поле 'B': NaN/undefined,
//            // но для 'sum' 0 или отсутствие поля чаще всего логично)
//            // Для этой задачи: игнорируем нечисловые значения
// }
// */

// const userActions = [
// 	{ userId: 'u1', activityType: 'login', duration: 100 },
// 	{ userId: 'u2', activityType: 'viewPage', duration: 500 },
// 	{ userId: 'u1', activityType: 'viewPage', duration: 200 },
// 	{ userId: 'u3', activityType: 'login', duration: 150 },
// 	{ userId: 'u2', activityType: 'click', duration: 100, invalidProp: 'abc' }, // invalidProp не влияет
// 	{ userId: 'u1', activityType: 'logout', duration: 300 },
// 	{ userId: 'u1', activityType: 'error', duration: 'invalid' } // Нечисловое duration
// ];
//
//
// const analyzeUserPerformance = (usersActions, keyProp) => {
// 	const aggregatedData = usersActions.reduce((acc, user) => {
// 	  const key = user[keyProp];
// 		const { duration } = user;
//
// 		acc[key] ??= {totalDuration: 0, actionCount: 0};
//
// 		if (typeof duration === 'number') {
// 			acc[key].totalDuration += duration;
// 		}
//
// 		acc[key].actionCount += 1;
//
// 		return acc
// 	}, {});
//
// 	for (const key in aggregatedData) {
// 		const group = aggregatedData[key];
//
// 		if (group.actionCount > 0) {
// 			group.averageDuration = group.totalDuration / group.actionCount
// 		} else {
// 			group.averageDuration = 0
// 		}
// 	}
//
// 	return aggregatedData
// };
//
// console.log(analyzeUserPerformance(userActions, 'userId'));
// /*
// Ожидаемый вывод:
// {
//   'u1': { totalDuration: 600, actionCount: 3, averageDuration: 200 }, // 100 + 200 + 300 (invalid ignored), count 3
//   'u2': { totalDuration: 600, actionCount: 2, averageDuration: 300 }, // 500 + 100, count 2
//   'u3': { totalDuration: 150, actionCount: 1, averageDuration: 150 }  // 150, count 1
// }
// */
//
// console.log(analyzeUserPerformance(userActions, 'activityType'));
// /*
// Ожидаемый вывод:
// {
//   'login': { totalDuration: 250, actionCount: 2, averageDuration: 125 },
//   'viewPage': { totalDuration: 700, actionCount: 2, averageDuration: 350 },
//   'click': { totalDuration: 100, actionCount: 1, averageDuration: 100 },
//   'logout': { totalDuration: 300, actionCount: 1, averageDuration: 300 },
//   'error': { totalDuration: 0, actionCount: 1, averageDuration: 0 } // 'invalid' duration
// }
// */

/*
const orders = [
	{
		orderId: 'A1',
		customer: 'Alice',
		items: [
			{productId: 'P001', productName: 'Laptop', quantity: 1, pricePerUnit: 1200},
			{productId: 'P002', productName: 'Mouse', quantity: 2, pricePerUnit: 25}
		]
	},
	{
		orderId: 'A2',
		customer: 'Bob',
		items: [
			{productId: 'P001', productName: 'Laptop', quantity: 1, pricePerUnit: 1200},
			{productId: 'P003', productName: 'Keyboard', quantity: 1, pricePerUnit: 75}
		]
	},
	{
		orderId: 'A3',
		customer: 'Alice',
		items: [
			{productId: 'P002', productName: 'Mouse', quantity: 1, pricePerUnit: 25},
			{productId: 'P004', productName: 'Monitor', quantity: 1, pricePerUnit: 300}
		]
	},
	{
		orderId: 'A4',
		customer: 'Charlie',
		items: [
			{productId: 'P001', productName: 'Laptop', quantity: 1, pricePerUnit: 1200},
			{productId: 'P005', productName: 'Headphones', quantity: 2, pricePerUnit: 50, notes: 'gift'}
		]
	},
	{
		orderId: 'A5',
		customer: 'David',
		items: [
			{productId: 'P002', productName: 'Mouse', quantity: 3, pricePerUnit: 25}
		]
	}
];

function flattenAndAggregateProducts(orders) {
	const productAggregatesMap = orders.reduce((accMap, order) => {
		if (order.items) {
			order.items.forEach((item) => {
				const { productName, productId, quantity, pricePerUnit } = item;
				const isValidQuantity = typeof quantity === 'number' && !isNaN(quantity);
				const isValidPrice = typeof pricePerUnit === 'number' && !isNaN(pricePerUnit);

				if (!productId || !isValidQuantity || !isValidPrice) return;

				let productAggregate = accMap.get(productId);

				productAggregate ??= {
					productName,
					totalQuantity: 0,
					totalValue: 0
				}

				accMap.set(productId, productAggregate);


				productAggregate.totalQuantity += quantity;
				productAggregate.totalValue += quantity * pricePerUnit
			})
		}

		return accMap
	}, new Map())

	return Object.fromEntries(productAggregatesMap)
}

console.log(flattenAndAggregateProducts(orders));*/
// /*
// Ожидаемый вывод:
// {
//   'P001': { productName: 'Laptop', totalQuantity: 3, totalValue: 3600 }, // 1+1+1=3, (1*1200)+(1*1200)+(1*1200)=3600
//   'P002': { productName: 'Mouse', totalQuantity: 6, totalValue: 150 },   // 2+1+3=6, (2*25)+(1*25)+(3*25)=150
//   'P003': { productName: 'Keyboard', totalQuantity: 1, totalValue: 75 },
//   'P004': { productName: 'Monitor', totalQuantity: 1, totalValue: 300 },
//   'P005': { productName: 'Headphones', totalQuantity: 2, totalValue: 100 }
// }
// */

// function fetchUserApi(id) {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			if (id % 2 === 0) {
// 				reject(new Error(`User with id ${id} not found`));
// 			} else {
// 				resolve({
// 					id,
// 					name: `User ${id}`,
// 					email: `user${id}@example.com`
// 				})
// 			}
// 		}, 500)
// 	})
// }
//
// async function fetchUsers(ids) {
// 	const result = [];
//
// 	for (const id of ids) {
// 		try {
// 			const user = await fetchUserApi(id);
// 			result.push(user);
// 		} catch (error) {
// 			console.error(`Error fetching user with id ${id}:`, error.message);
// 			result.push({ id, error: error.message });
// 		}
// 	}
//
// 	return result;
// }
//
// fetchUsers([1, 2, 3, 4, 5])
// 	.then(users => {
// 		console.log('Fetched users:', users);
// 	})
// 	.catch(error => {
// 		console.error('Error fetching users:', error);
// 	});

// const products1 = [
// 	{ id: 1, name: 'Laptop', category: 'Electronics' },
// 	{ id: 2, name: 'Book', category: 'Books' },
// 	{ id: 3, name: 'Mouse', category: 'Electronics' },
// 	{ id: 4, name: 'Keyboard', category: 'electronics' } // Обратите внимание на регистр
// ];
//
// function countUniqueCategories(products) {
// 	const uniqueCategory = new Set();
//
// 	for (const product of products) {
// 		const { category } = product;
//
// 		if (!uniqueCategory.has(category)) {
// 			uniqueCategory.add(category)
// 		}
// 	}
//
// 	return uniqueCategory.size
// }
//
// console.log(countUniqueCategories(products1));
// // Ожидаемый вывод: 3 (Electronics, Books, electronics)
//
// const products2 = [
// 	{ id: 5, name: 'Shirt', category: 'Apparel' },
// 	{ id: 6, name: 'Pants', category: 'Apparel' }
// ];
// console.log(countUniqueCategories(products2));
// // Ожидаемый вывод: 1
//
// const products3 = [];
// console.log(countUniqueCategories(products3));
// // Ожидаемый вывод: 0

// const salesData = [
// 	{ productId: 'A', price: 100, quantity: 2, isRefund: false },
// 	{ productId: 'B', price: 50, quantity: 3, isRefund: false },
// 	{ productId: 'C', price: 200, quantity: 1, isRefund: true },  // Возврат, вычитаем 200 * 1 = 200
// 	{ productId: 'D', price: 10, quantity: 5, isRefund: false },
// 	{ productId: 'E', price: 100, quantity: 'abc', isRefund: false } // Невалидное quantity
// ];
//
// function calculateTotalRevenue(salesData) {
// 	return salesData.reduce((acc, data) => {
// 	  const { productId, price, quantity, isRefund } = data;
// 		const isValidQuantity = typeof quantity === 'number' && !isNaN(quantity);
// 		const isValidPrice = typeof price === 'number' && !isNaN(price);
//
// 		if (!productId || !isValidPrice || !isValidQuantity) return acc;
//
// 		acc[productId] ??= 0;
// 		const totalRevenue = quantity * price;
//
// 		if (isRefund) {
// 			acc[productId] -= totalRevenue
// 		} else {
// 			acc[productId] += totalRevenue
// 		}
//
// 		return acc
// 	}, {});
// }
// console.log(calculateTotalRevenue(salesData));
// // Ожидаемый вывод: (100*2) + (50*3) - (200*1) + (10*5) = 200 + 150 - 200 + 50 = 200
//
// const emptySales = [];
// console.log(calculateTotalRevenue(emptySales));
// // Ожидаемый вывод: 0

// const findLongestWord = (str) => {
// 	return str
// 		.split(/\W+/)
// 		.filter(word => word.length > 0)
// 		.reduce((longest, current) => current.length > longest.length ? current : longest, "");
// };
//
// console.log(findLongestWord("The quick brown fox jumped over the lazy dog."));
// // Ожидаемый вывод: "jumped"
//
// console.log(findLongestWord("A B CDE FGH."));
// // Ожидаемый вывод: "CDE"
//
// console.log(findLongestWord("Hello, world!"));
// // Ожидаемый вывод: "Hello"
//
// console.log(findLongestWord(""));
// // Ожидаемый вывод: ""
//
// console.log(findLongestWord("   "));
// // Ожидаемый вывод: ""

// const warehouseA = {
// 	'P001': 10,
// 	'P002': 5,
// 	'P003': 12
// };
//
// const warehouseB = {
// 	'P002': 8,
// 	'P003': 3,
// 	'P004': 7
// };
//
// function mergeInventory(warehouseA, warehouseB) {
// 	return Object.keys(warehouseA).reduce((acc, key) => {
// 		acc[key] = warehouseA[key];
//
// 		if (key in warehouseB) {
// 			acc[key] += warehouseB[key]
// 		}
//
// 		return acc
// 	}, {...warehouseB})
// }
//
// console.log(mergeInventory(warehouseA, warehouseB));
// /*
// Ожидаемый вывод:
// {
//   'P001': 10,  // Только из A
//   'P002': 13,  // 5 (из A) + 8 (из B)
//   'P003': 15,  // 12 (из A) + 3 (из B)
//   'P004': 7    // Только из B
// }
// */
//
// const emptyWarehouse = {};
// console.log(mergeInventory(warehouseA, emptyWarehouse));
// /*
// Ожидаемый вывод:
// {
//   'P001': 10,
//   'P002': 5,
//   'P003': 12
// }
// */

// const newsletterSubscribers = {
// 	'user1': { name: 'Alice', email: 'alice@example.com' },
// 	'user2': { name: 'Bob', email: 'bob@example.com' },
// 	'user3': { name: 'Charlie', email: 'charlie@example.com' }
// };
//
// const platformUsers = {
// 	'user2': { name: 'Bob', email: 'bob@example.com' },
// 	'user3': { name: 'Charlie', email: 'charlie@example.com' },
// 	'user4': { name: 'David', email: 'david@example.com' }
// };
//
// function findCommonSubscribers(list1, list2) {
// 	const commonSubscribers = [];
//
// 	for (const key in list1) {
// 		if (list2[key] && list1[key].email === list2[key].email) {
//
// 			commonSubscribers.push({
// 				name: list1[key].name,
// 				email: list1[key].email
// 			});
// 		}
// 	}
//
// 	return commonSubscribers;
// }
//
// console.log(findCommonSubscribers(newsletterSubscribers, platformUsers));
// /*
// Ожидаемый вывод (порядок элементов в массиве может быть другим):
// [
//   { name: 'Bob', email: 'bob@example.com' },
//   { name: 'Charlie', email: 'charlie@example.com' }
// ]
// */
//
// const listA = {
// 	'u1': { name: 'Alice' }, // Нет email
// 	'u2': { name: 'Bob', email: 'b@mail.com' }
// };
//
// const listB = {
// 	'u1': { name: 'Alice', email: 'a@mail.com' },
// 	'u2': { name: 'Bob', email: 'b@mail.com' }
// };
// console.log(findCommonSubscribers(listA, listB));
// /*
// Ожидаемый вывод:
// [
//   { name: 'Bob', email: 'b@mail.com' } // 'u1' не попадет, так как в listA у него нет email
// ]
// */

const customerOrders = {
	'cust1': [
		{productId: 'P001', quantity: 2},
		{productId: 'P002', quantity: 1}
	],
	'cust2': [
		{productId: 'P001', quantity: 3},
		{productId: 'P003', quantity: 2}
	],
	'cust3': [
		{productId: 'P004', quantity: 1} // P004 нет в productPrices
	],
	'cust4': [
		{productId: 'P001', quantity: 'invalid'} // Невалидное quantity
	]
};

const productPrices = {
	'P001': 100,
	'P002': 50,
	'P003': 200
};

function calculateCustomerOrderTotals(customerOrders, productPrices) {
	const result = {};
	const customerEntries = Object.entries(customerOrders);

	for (const [customerId, orders] of customerEntries) {
		if (!Array.isArray(orders) || orders.length === 0) continue;

		const total = orders.reduce((sum, order) => {
			const { productId, quantity } = order;
			const price = productPrices[productId];
			const isValidQuantity = typeof quantity === 'number' && !isNaN(quantity);
			const isValidPrice = typeof price === 'number' && !isNaN(price);

			if (isValidQuantity && isValidPrice) {
				sum += price * quantity
			}

			return sum
		}, 0)

		if (total > 0) {
			result[customerId] = total
		}
	}

	return result
}

console.log(calculateCustomerOrderTotals(customerOrders, productPrices));
/*
Ожидаемый вывод:
{
  'cust1': 250, // (2 * 100) + (1 * 50)
  'cust2': 700  // (3 * 100) + (2 * 200)
}
*/