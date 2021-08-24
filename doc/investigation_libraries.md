# Investigation "tunnel" libararies

- <https://github.com/koding/tunnel> 
    - Tunnel is a server/client package that enables to proxy public connections to your local machine over a tunnel connection from the local machine to the public server
    - last commit: 5 years ago
- <https://github.com/mmatczuk/go-http-tunnel>
    - Go HTTP tunnel is a reverse tunnel based on HTTP/2. It enables you to share your localhost when you don't have a public IP.
    - lsat commit: 2 years ago


https://github.com/avelino/awesome-go#networking

- tunneling
    - <https://github.com/xtaci/kcptun>
        - based on KCP
        - In Chinese
- websockets
    - <https://github.com/fanux/lhttp>

## wstunnel

Establish a TCP socket tunnel over web socket connection.

https://www.npmjs.com/package/wstunnel

### Try it

- Install

```
npm install -g wstunnel
```

- Start server

```
wstunnel -s 0.0.0.0:8080 -t 2.2.2.2:33
```

- Try to run the websocket tunnel client

```
$ wstunnel -t 33:2.2.2.2:33 ws://host:8080

events.js:288
      throw er; // Unhandled 'error' event
      ^

Error: listen EACCES: permission denied 127.0.0.1:33
    at Server.setupListenHandle [as _listen2] (net.js:1292:21)
    at listenInCluster (net.js:1357:12)
    at doListen (net.js:1496:7)
    at processTicksAndRejections (internal/process/task_queues.js:85:21)
Emitted 'error' event on Server instance at:
    at emitErrorNT (net.js:1336:8)
    at processTicksAndRejections (internal/process/task_queues.js:84:21) {
  code: 'EACCES',
  errno: 'EACCES',
  syscall: 'listen',
  address: '127.0.0.1',
  port: 33
}
```