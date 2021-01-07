FROM node:12-alpine

WORKDIR /api

ENV KEY=key
ENV SECRET=secret

COPY package.json ./
COPY package-lock.json ./

RUN npm install

EXPOSE 5000

CMD [ "npm","start" ]