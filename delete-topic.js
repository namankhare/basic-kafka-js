const { kafka, allTopics } = require("./client");

// Create an async function to delete topics.
(async function () {
	// Create an admin connection.
	const admin = kafka.admin();
	console.log("Admin connecting...");

	// Connect to the admin, to delete the topics.
	await admin.connect();
	console.log("Admin Connection Success...");

	console.log("Deleting Topics:", allTopics);

	// Delete all the topics, by passing the array of topics.
	await admin.deleteTopics({
		topics: allTopics,
	});

	console.log("Topics Deleted Successfully:", allTopics);

	console.log("Disconnecting Admin...");
	await admin.disconnect();
})();
