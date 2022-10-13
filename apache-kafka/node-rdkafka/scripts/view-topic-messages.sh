# docker exec -it [container_Id] sh
docker exec -it $(docker ps -aqf 'ancestor=bitnami/kafka:latest') sh
/opt/bitnami/kafka/bin/kafka-console-consumer.sh \
    --bootstrap-server localhost:9092 \
    --from-beginning \
    --topic test
