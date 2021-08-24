# https://github.com/hgsgtk/wstunnel/blob/53cc0adac2816105b3ad17ce416ab107d2975b55/Dockerfile
FROM node:10-stretch

WORKDIR /tmp

COPY . .

RUN yarn install

CMD ["yarn", "run", "server"]
