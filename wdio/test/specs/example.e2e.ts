describe('Confirm Autify pricing', () => {
    it('should open pricing page', async () => {
        await browser.url('https://autify.com/')

        const link = await browser.$('=Pricing')
        await expect(await link.getAttribute('href')).toEqual('/pricing')
    });
});
