#!/bin/sh

# start web socket tunnel client before execution tests
yarn run client &

exec "$@"
