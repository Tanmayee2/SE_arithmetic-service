FROM node:20.11.0-alpine

WORKDIR /Users/tanmayee/documents/SE/numbers-app/arithmetic-service/src/app
COPY package*.json ./
RUN npm ci --omit=dev
COPY ./src ./src

CMD npm start