FROM node:14 as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY . .

EXPOSE 3000

RUN yarn build

CMD ["yarn", "start"]