const {test,expect}=require('@playwright/test');


test("Get Test", async ({request})=>{


   const rs= await request.get('https://reqres.in/api/users?page=2')

  expect(rs.status()).toBe(200)
  expect(await rs.text()).toContain('avatar')
    console.log(await rs.json)

}


);

// Post testing tutorial

test("Post api method test", async ({request}) => {
const resp =request.post('https://reqres.in/api/users',{data:{
    "name": "sagar",
    "job": "leader"
}})

const text =(await resp).text()

expect(await text).toContain('sagar1')
expect((await resp).status()).toBe(201)
}
);