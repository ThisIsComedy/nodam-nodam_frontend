FROM node:18

WORKDIR /app

RUN npm install yarn

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

ENTRYPOINT [ "yarn", "start" ]