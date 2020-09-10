FROM mhart/alpine-node:11 AS builder
WORKDIR /app
COPY . .
EXPOSE 3000
RUN yarn run build

FROM mhart/alpine-node
RUN yarn global add serve
WORKDIR /app
COPY --from=builder /app/build .
CMD yarn run start

