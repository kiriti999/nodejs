# docker exec -it [container_Id] /opt/bitnami/kafka/bin/kafka-console-producer.sh \
docker exec -it $(docker ps -aqf 'ancestor=bitnami/kafka:latest') sh
--broker-list localhost:9092 \
    --topic test
