sudo docker-compose exec kafka sh

./kafka-console-consumer --topic test-topic --bootstrap-server localhost:9092

node index.js