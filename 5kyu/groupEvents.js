const events = [
	{ title: 'Event 1', date: '2024-01-01' },
	{ title: 'Event 2', date: '2024-01-02' },
	{ title: 'Event 3', date: '2024-01-01' },
];

const groupEvents = (events) => {
	return events.reduce((acc, event) => {
		const { date, title } = event;
	  const eventGroupKey = new Date(date).toISOString().slice(0, 10);

		acc[eventGroupKey] ??= [];

		acc[eventGroupKey].push(title)

		return acc
	}, {});
};

console.log(groupEvents(events))
// Задача: Верни { '2024-01-01': [Event 1, Event 3], '2024-01-02': [Event 2] }