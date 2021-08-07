FROM node:14 AS production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/api

COPY package.json .
COPY yarn.lock .

RUN yarn install

RUN yarn build

COPY . .

EXPOSE 5000

CMD ["index.js"]