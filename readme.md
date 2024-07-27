# Basic Kafka JS connection using Docker.

## Setup (Docker)

-   Run Docker on your system.
-   Pull `zookeeper` image from the hub and run `docker compose run -p 2181:2181 zookeeper`.
-   Pull Kafka image and run `docker run -p 9092:9092 \
-e KAFKA_ZOOKEEPER_CONNECT=<your-ip>:2181 \
-e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://<your-ip>:9092 \
-e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 \
confluentinc/cp-kafka`

## Setup (NodeJS)

-   Run `npm install` to install the packages.
-   Replace `<your-ip>` in the `client.js` file.
-   Add topic name.
-   Run `create-topic.js` to create the topic. eg: use `npm run add-topic`.
-   Run producer and consumer using `npm run producer` and `npm run consumer <user-id>`.
