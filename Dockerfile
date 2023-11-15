FROM node:21

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./

RUN npm --version

RUN npm install yarn --global --force
RUN yarn install --immutable --immutable-cache --check-cache

COPY . ./

ENTRYPOINT [ "yarn", "start" ]