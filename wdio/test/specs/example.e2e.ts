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
