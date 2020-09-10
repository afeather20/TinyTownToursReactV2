


FROM mhart/alpine-node:11 AS builder
WORKDIR /app
ADD  client/package*.json /app/
EXPOSE 3000
RUN yarn install
ADD . ./


FROM mhart/alpine-node
RUN yarn global add serve
WORKDIR /app
CMD yarn run start


