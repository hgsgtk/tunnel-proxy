# Downgrade node to a lower version because nfibers has problem.
# https://stackoverflow.com/questions/67330252/thread-id-key-0x7777-function-find-thread-id-key-file-src-coroutine-cc
FROM node:12
WORKDIR /app
ADD . /app

RUN yarn install

ENTRYPOINT ["./docker-entrypoint.sh"]
