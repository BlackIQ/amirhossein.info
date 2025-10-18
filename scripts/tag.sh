#!/bin/bash

TAG=$1
MESSAGE=$2

if [ -z "$TAG" ]; then
  echo "Error: TAG is not provided."
  echo "Usage: $0 <tag> <message>"
  exit 1
fi

if [ -z "$MESSAGE" ]; then
  echo "Error: MESSAGE is not provided."
  echo "Usage: $0 <tag> <message>"
  exit 1
fi

# Create the tag
git tag -a "$TAG" -m "$MESSAGE"
