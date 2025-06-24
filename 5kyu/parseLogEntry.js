const webLogs = [
	`192.168.1.10 - - [20/Jun/2025:10:00:01 +0300] "GET /api/data HTTP/1.1" 200 1500`,
	`192.168.1.15 - - [20/Jun/2025:10:00:05 +0300] "POST /api/users HTTP/1.1" 201 200`,
	`192.168.1.10 - - [20/Jun/2025:10:00:10 +0300] "GET /api/data HTTP/1.1" 200 1200`,
	`192.168.1.20 - - [20/Jun/2025:10:00:12 +0300] "GET /static/image.png HTTP/1.1" 404 50`,
	`192.168.1.10 - - [20/Jun/2025:10:00:15 +0300] "GET /api/status HTTP/1.1" 200 100`,
	`192.168.1.15 - - [20/Jun/2025:10:00:20 +0300] "GET /api/data HTTP/1.1" 500 300`,
	`192.168.1.10 - - [20/Jun/2025:10:00:25 +0300] "PUT /api/users/1 HTTP/1.1" 200 80`,
	`203.0.113.1 - - [20/Jun/2025:10:00:30 +0300] "GET /api/data HTTP/1.1" 200 1800`
];

const parseLogEntry = (logs) => {
	return logs.reduce((acc, log) => {
		const spaceIndices = log.indexOf(' ');
		const slicedIps = log.slice(0, spaceIndices).trim();
		const leftBracket = log.indexOf('[');
		const rightBracket = log.indexOf(']')

		if (spaceIndices === -1) {
			return new Error('error')
		}

		if (leftBracket === -1 || rightBracket === -1 || leftBracket >= rightBracket) {
			return acc
		}

		const timestamp = log.slice(leftBracket + 1, rightBracket).trim();
		const logStatus = log.slice(spaceIndices + 1, leftBracket).trim();
		const message = log.slice(rightBracket + 1).trim();
		const statusCode = message.split(' ')[0];
		const responseSize = message.split(' ')[1];

		acc[logStatus] ??= [];

		acc[logStatus].push({
			ip: slicedIps,
			timestamp,
			logStatus,
			statusCode,
			responseSize
		})


		return acc
	}, {})
};

console.log(parseLogEntry(webLogs));