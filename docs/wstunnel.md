# wstunnel

Establish a TCP socket tunnel over web socket connection.

- <https://www.npmjs.com/package/wstunnel>
- <https://github.com/mhzed/wstunnel>

![](./wstunnel_overview.svg)

## Install

```
npm install -g wstunnel
```

or Docker

TBD

### Help

```
$ wstunnel

Run websocket tunnel server or client.
To run server: wstunnel -s 0.0.0.0:8080
To run client: wstunnel -t localport:host:port ws[s]://wshost:wsport
Client via http proxy: wstunnel -t localport:host:port -p http://[user:pass@]host:port ws[s]://wshost:wsport
Client via socks proxy: wstunnel -t localport:host:port -p socks://[user:pass@]ip:port ws[s]://wshost:wsport

Connecting to localhost:localport is the same as connecting to host:port on wshost

For security, you can "lock" the tunnel destination on server side, for eample:
wstunnel -s 0.0.0.0:8080 -t host:port
Server will tunnel incomming websocket connection to host:port only, so client can just run
wstunnel -t localport ws://wshost:port
If client run:
wstunnel -t localport:otherhost:otherport ws://wshost:port
* otherhost:otherport is ignored, tunnel destination is still "host:port" as specified on server.

In client mode, you can bind stdio to the tunnel by running:
wstunnel -t stdio:host:port ws[s]://wshost:wsport
This allows the command to be used as ssh proxy:
ssh -o ProxyCommand="wstunnel -c -t stdio:%h:%p https://wstserver" user@sshdestination
Above command will ssh to "user@sshdestination" via the wstunnel server at "https://wstserver"

Options:
-s             run as server, listen on [localip:]localport                 [string]
--tunnel, -t   run as tunnel client, specify [localip:]localport:host:port
--proxy, -p    connect via a http or socks proxy server in client mode
-c, --anycert  accept any certificates                                      [boolean]  [default: false]
--http         force to use http tunnel                                     [boolean]
```

## Launch

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