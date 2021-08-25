# https://github.com/hgsgtk/wstunnel/blob/53cc0adac2816105b3ad17ce416ab107d2975b55/Dockerfile
FROM node:10-stretch

WORKDIR /tmp

COPY . .

RUN yarn install

# client cannot respond to curl request from host and depended service
# $ curl http://127.0.0.1:3331
#   curl: (52) Empty reply from server
# https://github.com/hgsgtk/tunnel-proxy/blob/1c9c367d5aaee87948d7d3d25e5775da56e866e3/docker-compose.yml#L58
# When I ran a container created by this Dockerfile, I also got the same error.
# docker run -p 3331:3331 wstunnel-client
#  yarn run v1.22.5
#  $ wstunnel -t 3331 ws://wstunnel-in-private:3330

# When I launched wstunnel on local, it works.
# $ curl http://127.0.0.1:3331
# Temporarily, I launched wstunnel in wdio container.
CMD ["yarn", "run", "client"]
