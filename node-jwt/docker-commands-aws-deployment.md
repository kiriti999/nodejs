To build the image: docker build -t kiriti999/node-jwt .

To run the container: docker run --name node-jwt -p 4000:4000 kiriti999/node-jwt

To get names of container: docker ps -a

To stop all containers : docker ps -aq

To stop container by name: docker stop "name of container"

To remove the container: docker rm "name of container"

AWS deployment for node on ECS: https://jaykannaiyan.com/how-to-deploy-node-app-docker-aws/
