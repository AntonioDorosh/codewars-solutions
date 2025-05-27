const logEntries = [
	{ id: 1, timestamp: 1678886400, level: 'INFO', message: 'User logged in', source: 'auth-service' },
	{ id: 2, timestamp: 1678886460, level: 'WARN', message: 'High CPU usage', source: 'billing-service' },
	{ id: 3, timestamp: 1678886520, level: 'ERROR', message: 'Database connection failed', source: 'auth-service' },
	{ id: 4, timestamp: 1678886580, level: 'INFO', message: 'Order processed', source: 'payment-gateway' },
	{ id: 5, timestamp: 1678886640, level: 'WARN', message: 'Disk space low', source: 'file-service' },
	{ id: 6, timestamp: 1678886700, level: 'ERROR', message: 'Auth token expired', source: 'auth-service' },
];

const getTopSourcesByErrorCount = (logs) => {
	const errorCountBySource = logs.reduce((acc, log) => {
	  if (log.level === 'ERROR') {
			acc[log.source] = (acc[log.source] || 0) + 1
		}

		return acc
	}, {});

	const sortedSources = Object.entries(errorCountBySource)
		.sort(([, countA], [, countB]) => countB - countA)
		.slice(0, 3);

	return sortedSources.map(([source, error]) => ({source, errorCount: error}))
};

console.log(getTopSourcesByErrorCount(logEntries))