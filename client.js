const { Kafka } = require("kafkajs");

exports.kafka = new Kafka({
	clientId: "my-app",
	brokers: ["<your-ip>:9092"],
});

exports.allTopics = ["naman-topic"];
