FROM node:latest
WORKDIR /usr/src/app
COPY api .
WORKDIR /usr/src/app/api
RUN npm install
EXPOSE 5000
CMD [ "node", "app.js" ]