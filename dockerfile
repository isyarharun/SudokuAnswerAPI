FROM node:10

WORKDIR /src/app
COPY package*.json ./
RUN yarn
COPY . .

CMD [ "node", "src/app.js" ]
