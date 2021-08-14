# A tunnel proxy
A tunnel proxy especially for browser testing in private environment from outside

![](./design_doc.svg)

## Set up testing environment

You can set up testing environment by docker-compose.

```
docker-compose up
```

Run webdriverio test by docker container

```
docker-compose run wdio
```

## What is it ?
### Test in local or public system is easy

For example, there are two tests.

```
describe('example.com', () => {
    it('should open remote example.com', async () => {
        await browser.url('http://example.com/')
        const actual = await browser.getUrl()
        await expect(actual).toEqual('http://example.com/')
    });

    it('should open local example.com in same network', async () => {
        const url = 'http://sut-in-local:8080/example'
        await browser.url(url)
        const actual = await browser.getUrl()
        await expect(actual).toEqual(url)
    });
});

```

They will pass because test runner can solve host name.

```
wdio_1             | ------------------------------------------------------------------
wdio_1             | [chrome 92.0.4515.131 linux #0-0] Running: chrome (v92.0.4515.131) on linux
wdio_1             | [chrome 92.0.4515.131 linux #0-0] Session ID: 1a8f1982b0928d7ea1d530e98dc9a8b3
wdio_1             | [chrome 92.0.4515.131 linux #0-0]
wdio_1             | [chrome 92.0.4515.131 linux #0-0] » /test/specs/example.e2e.ts
wdio_1             | [chrome 92.0.4515.131 linux #0-0] example.com
wdio_1             | [chrome 92.0.4515.131 linux #0-0]    ✓ should open remote example.com
wdio_1             | [chrome 92.0.4515.131 linux #0-0]    ✓ should open local example.com in same network
wdio_1             | [chrome 92.0.4515.131 linux #0-0]
wdio_1             | [chrome 92.0.4515.131 linux #0-0] 2 passing (607ms)
wdio_1             |
wdio_1             |
wdio_1             | Spec Files:	 1 passed, 1 total (100% completed) in 00:00:13
```
