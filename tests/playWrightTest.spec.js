const {test}=require('@playwright/test');


test('first Playwright', async ({page})=>{

await page.goto('https://google.com'),
await page.locator('#APjFqb').fill('sagar');
const titles = await page.title();
console.log(titles)


});
//if only keyword used test case exected one in entire spec file
test('only Playwright', async ({page})=>{



    await page.goto('https://google.com');

    const te = await page.getByRole('button', { name: 'Google Search' }).textContent();
    console.log(te)
    
});