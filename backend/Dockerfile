# Use the Node base image
FROM node:20-alpine

# Install cURL
RUN apk add --no-cache curl

# Set the working directory in the container
WORKDIR /app

# Copy the rest of the application code to the container
COPY . .

# Install dependencies
RUN npm install

# Expose the container port
EXPOSE 8000

# Start the Next.js application
CMD ["npm", "start"]
