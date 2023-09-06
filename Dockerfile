FROM node:alpine

WORKDIR "/core"

ENV PATH="./node_modules/.bin:$PATH"

COPY . .

RUN npm install

CMD [ "npm", "start" ]