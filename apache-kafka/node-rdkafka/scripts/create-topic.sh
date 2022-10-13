# Run the below commands:
# docker exec -it [container_Id] sh
# Get the container name using:
#docker exec -it $(docker ps | grep 'bitnami/kafka:latest' | awk '{ print $1 }') sh
# or
# docker exec -it $(docker ps -aqf 'ancestor=bitnami/kafka:latest') sh

docker exec -it $(docker ps -aqf 'ancestor=bitnami/kafka:latest') sh
/opt/bitnami/kafka/bin/kafka-topics.sh --create --bootstrap-server localhost:9092 --replication-factor 1 --partitions 1 --topic test
