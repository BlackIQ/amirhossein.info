#!/bin/bash

# Exit immediately if any command fails
set -e

# Trap errors and print a message before exiting
trap 'echo "❌ Error occurred on line $LINENO. Exiting..."; exit 1' ERR

# Determine environment from tag
echo "Build Docker image | Resume API"
NAME="resume-api"

# Define variables
TAG=$1 # Tag from argument
IMAGE_NAME="${NAME}:${TAG}" # Image name
REGISTRY_ADDRESS="10.1.10.253:5000" # Registry Address

# Check if TAG is set
if [ -z "$TAG" ]; then
  echo "❌ Error: TAG is not set."
  exit 1
fi

# Check if Docker is available
if ! command -v docker &> /dev/null; then
  echo "❌ Error: Docker is not installed or not accessible."
  exit 1
fi

# Building
echo "🔧 Setting up Docker builder..."
docker build \
    --platform linux/amd64 \
    --build-arg NEXT_PUBLIC_API_URL="http://localhost:9332/api" \
    -t $IMAGE_NAME .

# Tagging and pushing
echo "🚀 Building, Tagging and pushing Docker image"
docker tag $IMAGE_NAME ${REGISTRY_ADDRESS}/$IMAGE_NAME # Current TAG
docker push ${REGISTRY_ADDRESS}/$IMAGE_NAME # Current TAG
docker tag $IMAGE_NAME ${REGISTRY_ADDRESS}/${NAME}:latest # Latest
docker push ${REGISTRY_ADDRESS}/${NAME}:latest # Latest

# Say goodbye to build!
echo "✅ Multi-arch build, push, and verification completed!"
