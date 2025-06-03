class AsyncTaskQueue {
	constructor(concurrency) {
		this.concurrency = concurrency;
		this.running = 0;
		this.queue = [];
	}

	async runTask(task) {
		if (this.running >= this.concurrency) {
			await new Promise((resolve) => this.queue.push(resolve));
		}
		this.running++;
		try {
			await task();
		} finally {
			this.running--;
			if (this.queue.length > 0) {
				this.queue.shift()();
			}
		}
	}

	addTask(task) {
		return this.runTask(task);
	}
}


const queue = new AsyncTaskQueue(2);

const createTask = (i) => async () => {
	console.log(`Task ${i} started`);
	await new Promise((resolve) => setTimeout(resolve, 1000));
	console.log(`Task ${i} completed`);
};

for (let i = 1; i <= 5; i++) {
	queue.addTask(createTask(i));
}