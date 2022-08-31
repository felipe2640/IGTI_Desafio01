FROM node:14.17.0-slim

WORKDIR /usr/node/app

COPY . /usr/node/app

RUN npm install









