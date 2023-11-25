const {test,expect}=require('@playwright/test');
test.describe('main class', async()=>{

test.beforeEach('before test',()=>{

    console.log('Before each test')
})
test.afterEach('before test',()=>{

    console.log('After each test')
})

test("google visual test", async ({page})=>{


await page.goto('http:\\google.com')
await page.screenshot({path: 'google.png'})
expect(await page.screenshot()).toMatchSnapshot('landing.png')


})

test("google  test", async ({page})=>{


    await page.goto('http:\\google.com')
    await page.screenshot({path: 'google1.png'})
    // expect(await page.screenshot()).toMatchSnapshot('landing.png')
    
    
    })
const people = ['Alice', 'Bob'];
for (const name of people) {
  test(`testing with ${name}`, async () => {
    // ...
  });
  // You can also do it with test.describe() or with multiple tests as long the test name is unique.
}

})
