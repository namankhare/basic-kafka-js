const { kafka, allTopics } = require("./client");

// Create an async function to create topics.
(async function () {
	// Create an admin connection.
	const admin = kafka.admin();
	console.log("Admin connecting...");

	// Connect to the admin.
	admin.connect();
	console.log("Admin Connection Success...");

	// Loop all the topics and create them.
	for (let topic of allTopics) {
		console.log(`Creating Topic ${topic}`);

		// Create the topic, with 2 partitions.
		await admin.createTopics(
			{
				topics: [
					{
						topic: topic,
						numPartitions: 2,
					},
				],
			},
			{
				validateOnly: false,
			}
		);

		console.log(`Topic Created Success ${topic}`);
	}

	console.log("Disconnecting Admin..");
	await admin.disconnect();
})();
