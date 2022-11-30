FROM node:16.18.1-slim

WORKDIR /usr/src/app

COPY ./pacakage*.json ./

COPY . . 

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]

