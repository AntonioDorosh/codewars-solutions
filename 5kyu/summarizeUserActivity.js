const logs = [
	{
		eventId: 'e001',
		userId: 'userA',
		timestamp: '2025-01-01T10:00:00Z',
		eventType: 'login',
		details: 'Successful login'
	},
	{
		eventId: 'e002',
		userId: 'userB',
		timestamp: '2025-01-01T10:05:00Z',
		eventType: 'logout',
		details: 'User logged out'
	},
	{eventId: 'e003', userId: 'userA', timestamp: '2025-01-01T10:10:00Z', eventType: 'page_view', details: '/dashboard'},
	{eventId: 'e004', userId: 'userC', timestamp: '2025-01-01T10:15:00Z', eventType: 'login', details: 'Failed attempt'},
	{
		eventId: 'e005',
		userId: 'userA',
		timestamp: '2025-01-01T10:20:00Z',
		eventType: 'purchase',
		details: 'Item X bought'
	},
	{eventId: 'e006', userId: 'userB', timestamp: '2025-01-01T10:25:00Z', eventType: 'page_view', details: '/products'},
];

const initialState = {
	totalLogs: 0,
	eventTypeCounts: {
		login: 0,
		page_view: 0,
		purchase: 0
	},
	allDetails: []
}

const summarizeUserActivity = (logs, keyWord) => {
	return logs.reduce((acc, log) => {
	  const { userId, eventType, details } = log;

		if (userId !== keyWord) return acc;

		acc.totalLogs += 1;

		if (acc.eventTypeCounts[eventType] !== undefined) {
			acc.eventTypeCounts[eventType] += 1
		}

		acc.allDetails.push(details);

		return acc
	}, initialState);
};

console.log(summarizeUserActivity(logs, 'userA'))