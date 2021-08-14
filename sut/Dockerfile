FROM golang:1.16-alpine

WORKDIR /app

RUN apk add --no-cache git

ENV GO111MODULE=off

COPY . .
ARG REVISION="default"

RUN go build -o server

CMD ["./server"]