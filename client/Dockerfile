FROM node:12-alpine

WORKDIR /client

COPY package.json ./

RUN npm install

EXPOSE 3000

CMD [ "npm","run", "start" ]