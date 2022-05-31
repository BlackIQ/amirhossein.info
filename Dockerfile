FROM node:latest
WORKDIR /usr/src/app
COPY . .
RUN npm install
EXPOSE 5000
CMD [ "npm", "start" ]