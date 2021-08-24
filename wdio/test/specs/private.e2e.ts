describe('example.com', () => {
    it('should open private example.com in different network', async () => {
        // const url = 'http://sut-in-private:8080/example' want to request sut-in-private:8080
        const url = 'http://wstunnel-in-cloud:3331/example'
        await browser.url(url)
        const actual = await browser.getUrl()
        await expect(actual).toEqual(url)
    });
});
