# Variables
IMAGE_NAME=resume-client
TAG=latest
CONTAINER_NAME=resume-client

# Build the Docker image
build:
	docker build -t $(IMAGE_NAME):$(TAG) .

# Run the Docker container
run:
	docker run --name $(CONTAINER_NAME) --detach --network application-network --restart always $(IMAGE_NAME):$(TAG)

# Stop the Docker container
stop:
	docker stop $(CONTAINER_NAME) && docker rm $(CONTAINER_NAME)

# Clean up
clean:
	docker rmi $(IMAGE_NAME):$(TAG)

all: stop clean build run
