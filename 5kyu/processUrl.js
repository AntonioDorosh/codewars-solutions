const urlsToProcess = [
	"https://api.example.com/data1",
	"https://api.example.com/data2",
	"https://api.example.com/data3",
	"https://api.example.com/data4",
	"https://api.example.com/data5",
	"https://api.example.com/data6",
	"https://api.example.com/data7"
];

const simulateFetchData = async(url) => {
	const delay = Math.random() * 1000 + 500;
	await new Promise((resolve) => setTimeout(resolve, delay))

	if (Math.random() < 0.2) {
		throw new Error(`Failed to fetch data ${url}`)
	}

	return `Data from ${url}`
};

const processUrls = async(urlsProcess) => {
	const promises = urlsProcess.map((url) => simulateFetchData(url));

	const results = await Promise.allSettled(promises);
	const finalResult = {
		successful: [],
		failed: []
	}

	results.forEach((url, index) => {
		if (url.status === 'fulfilled') {
			finalResult.successful.push(url.value)
		} else {
			finalResult.failed.push({
				url: urlsProcess[index],
				error: url.reason.message
			})
		}
	});

	return finalResult
}

console.log("Starting URL processing...");

processUrls(urlsToProcess)
	.then(result => {
		console.log("--- Processing Complete ---");
		console.log("Successful results:", result.successful);
		console.log("Failed results:", result.failed);
	})
	.catch(error => {
		console.error("An unexpected error occurred:", error);
	});