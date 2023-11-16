FROM node:21

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./

RUN node -v
RUN npm --version

RUN npm install yarn@1.22.21 --global
RUN yarn install

COPY . ./

ENTRYPOINT [ "yarn", "start" ]