# Use the Node base image as the build stage
FROM node:alpine AS build

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json to the container
COPY package.json .

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the Next.js app
RUN npm run build

# Use the Node base image for the production stage
FROM node:alpine AS production

# Set the working directory in the container
WORKDIR /app

# Copy the built application from the build stage
COPY --from=build /app ./

# Expose the container port
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "start"]
