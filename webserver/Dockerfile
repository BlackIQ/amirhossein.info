# Use the official NGINX base image with Alpine Linux
FROM nginx:alpine

# Copy config files
COPY config/* /etc/nginx/conf.d/

# Copy the custom nginx.conf
COPY nginx.conf /etc/nginx/nginx.conf

# Create SSL directory
RUN mkdir -p /etc/nginx/ssl

# Create files directory
RUN mkdir -p /var/www/files

# Copy SSL files
COPY ssl /etc/nginx/ssl

# Expose the container ports
EXPOSE 443
EXPOSE 80