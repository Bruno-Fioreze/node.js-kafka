const { Kafka } = require('kafkajs')


const main = async () => {

    const kafka = new Kafka({
    clientId: 'my-app',
    brokers: ['localhost:9092'],
    })

    const producer = kafka.producer()

    await producer.connect()
    await producer.send({
    topic: 'test-topic',
    messages: [
        { value: 'Hello KafkaJS user!', hello: "waht"},
        { value: 'Hello KafkaJS2 user!'},
    ],
    })

    await producer.disconnect()
}

main()