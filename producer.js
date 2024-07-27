const { kafka, allTopics } = require("./client");
const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

// Create an async function to connect the producer.
(async function () {
	const producer = kafka.producer();

	console.log("Connecting Producer");
	await producer.connect();
	console.log("Producer Connected Successfully");

	rl.setPrompt("> ");
	rl.prompt();

	rl.on("line", async function (line) {
		const [name, message] = line.split(" ");

		// Send the message to the Kafka topic.
		await producer.send({
			topic: allTopics[0], // Use allTopics index 0 for the topic.
			messages: [
				{
					partition: message.toLowerCase() === "hello" ? 0 : 1,
					key: "naman-key",
					value: JSON.stringify({ name: name, message }),
				},
			],
		});
	}).on("close", async () => {
		// Disconnect the producer when the readline interface is closed.
		await producer.disconnect();
	});
})();
