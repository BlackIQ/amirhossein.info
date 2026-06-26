FROM node:alpine

RUN apk add --no-cache curl

WORKDIR /app

COPY . .

RUN npm install --production

EXPOSE 8000

CMD ["npm", "start"]
