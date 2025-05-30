#!/bin/bash

# Exit immediately if any command fails
set -e

# Trap errors and print a message before exiting
trap 'echo "❌ Error occurred on line $LINENO. Exiting..."; exit 1' ERR

# Determine environment from tag
echo "Build Docker image | Trace UI"
NAME="trace-ui"

# Check if CI_COMMIT_TAG is set
if [ -z "$CI_COMMIT_TAG" ]; then
  echo "❌ Error: CI_COMMIT_TAG is not set. Please ensure this is run in a GitLab CI environment with a tag."
  exit 1
fi

# Define variables
IMAGE_NAME="${NAME}:${CI_COMMIT_TAG}" # Image name
REGISTRY_ADDRESS="192.168.10.16:5000" # Registry Address

# Enable experimental features (if needed)
export DOCKER_CLI_EXPERIMENTAL=enabled

# Check if Docker is available
if ! command -v docker &> /dev/null; then
  echo "❌ Error: Docker is not installed or not accessible."
  exit 1
fi

# Create or use a buildx builder
echo "🔧 Setting up Docker Buildx builder..."
if ! docker buildx create --name multiarch-builder --use 2>/dev/null; then
  echo "⚠️ Builder creation failed, attempting to use existing builder..."
  docker buildx use multiarch-builder || {
    echo "❌ Error: Failed to create or use multiarch-builder."
    exit 1
  }
fi

# Start multi-architecture build
echo "🚀 Building and pushing Docker image for multiple architectures..."
docker buildx build \
  --platform linux/amd64,linux/arm64 \
  -t "${REGISTRY_ADDRESS}/${IMAGE_NAME}" \
  -t "${REGISTRY_ADDRESS}/${NAME}:latest" \
  --push . || {
    echo "❌ Error: Docker build or push failed."
    exit 1
  }

# Verify the push (optional but recommended)
echo "🔍 Verifying image in registry..."
if ! docker pull "${REGISTRY_ADDRESS}/${IMAGE_NAME}"; then
  echo "❌ Error: Failed to verify image ${REGISTRY_ADDRESS}/${IMAGE_NAME} in registry."
  exit 1
fi

# Clean up builder (optional, to avoid dangling builders)
echo "🧹 Cleaning up builder..."
docker buildx rm multiarch-builder || {
  echo "⚠️ Warning: Failed to remove multiarch-builder, continuing..."
}

# Say goodbye to build!
echo "✅ Multi-arch build, push, and verification completed!"