const { kafka, allTopics } = require("./client");

const group = process.argv[2];

// Define an IIFE to encapsulate the code.
(async () => {
	// Create a consumer with the specified group ID.
	const consumer = kafka.consumer({ groupId: group });

	// Connect to the Kafka broker.
	await consumer.connect();

	// Subscribe to the topic from the beginning.
	await consumer.subscribe({ topics: allTopics, fromBeginning: true });

	// Start consuming messages.
	await consumer.run({
		eachMessage: async ({
			topic,
			partition,
			message,
			heartbeat,
			pause,
		}) => {
			// Log the consumed message.
			console.log(
				`${group}: [${topic}]: PART:${partition}:`,
				message.value.toString()
			);
		},
	});
})();
