#!/bin/bash

# Read the tag from the argument
CI_COMMIT_TAG=$1

# Determine environment from tag
echo "🔄 Starting deployment for Resume UI: $CI_COMMIT_TAG"

cd /apps/resume || exit 1  # Exit if the directory doesn't exist

echo "📦 Pulling latest image..."
docker compose -p resume pull backend # Pull the latest image

echo "♻️ Restarting Dispatcher service..."
docker compose -p resume up -d --no-deps --force-recreate backend # Restart only backend

echo "✅ Deployment completed successfully!"
