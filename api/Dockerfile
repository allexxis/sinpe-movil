FROM node:12-alpine

WORKDIR /api

COPY package.json ./
COPY package-lock.json ./

RUN npm install

EXPOSE 5000

CMD [ "npm","run","start" ]