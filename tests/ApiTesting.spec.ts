import {test,request,expect} from "@playwright/test" //https://restful-booker.herokuapp.com/apidoc/index.html
import ApiJson from "../testdata/apidata.json" with { type: "json" };

let reqContext2: any 

test.beforeAll("Before all tests", async()=>{
    reqContext2 = await request.newContext({
        baseURL:"https://restful-booker.herokuapp.com",
        extraHTTPHeaders:{
            Accept:"application/json"
        }
    })
})

/////////////////////////////////////////////////////////////////////////////////////////////////////GET


test("GET",async({request})=>{
   const resp1 = await request.get("https://restful-booker.herokuapp.com/booking",{
    headers:{
        Accept:"application/json"
    }
   })
   console.log(await resp1.json())
})

test("GET 2",async()=>{
    const reqContext = await request.newContext({
        baseURL:"https://restful-booker.herokuapp.com",
        extraHTTPHeaders:{
            Accept:"application/json"
        }
    })
   const resp1 = await reqContext.get("/booking")
   console.log(await resp1.json())  
})


test("GET 3",async()=>{
    const resp2 = await reqContext2.get("/booking")
   console.log(await resp2.json())  
})

test("GET 4",async({request})=>{
    const resp2 = await request.get("/booking") //uses baseURL variable on config file
   console.log(await resp2.json())  
})

//ID

test("GET 5",async({request})=>{
    console.log("GET 5")
   const resp1 = await request.get("/booking/116")
   console.log(await resp1.json())  
})

test("GET 6",async({request})=>{
    console.log("GET 6")
   const resp1 = await request.get("/booking?firstname=John&lastname=Smith")
   console.log(await resp1.json())  
})

test("GET 7",async({request})=>{
    console.log("GET 7")    
   const resp1 = await request.get("/booking",{
    params:{
        firstname:"John",
        lastname:"Smith"
    }
   })
   console.log(await resp1.json())  
})

//assertions

test("GET 8",async({request})=>{
    const resp2 = await request.get("/booking/116") 
    console.log(await resp2.json())  
    expect(resp2.status()).toBe(200)
    expect(resp2.ok()).toBeTruthy()
    expect(await resp2.json()).toMatchObject({
    firstname: 'Jane',
    lastname: 'Doe',
    totalprice: 111,
    depositpaid: true,
    bookingdates: { checkin: '2018-01-01', checkout: '2019-01-01' },
    additionalneeds: 'Extra pillows please'
    })
    const jsonresp =await resp2.json()
    expect(jsonresp.firstname).toEqual("Jane")
})

//api vs ui verification 

test("GET 9",async({page,request})=>{
    const resp1 = await request.get("https://api.demoblaze.com/entries")
    const resp2 = await resp1.json() 
    console.log(await resp2.Items[0].title)  
    await page.goto("https://demoblaze.com/")
    await expect(page.getByRole('link', { name: 'Samsung galaxy s6' })).toHaveText(resp2.Items[0].title)
   
})



/////////////////////////////////////////////////////////////////////////////////////////////////////POST

test("POST",async({request})=>{
    const resp1 = await request.post("/booking",{
        data:{ //body
            "firstname" : "Jim",
            "lastname" : "Brown",
            "totalprice" : 111,
            "depositpaid" : true,
            "bookingdates" : {
                "checkin" : "2018-01-01",
                "checkout" : "2019-01-01"
            },
            "additionalneeds" : "Breakfast"
        }
    })
    const jsonResp = await resp1.json()
    console.log(jsonResp)

    //assertions
    expect(resp1.status()).toBe(200)
    expect(resp1.statusText()).toBe("OK")
    expect(resp1.ok()).toBeTruthy()
    expect(jsonResp.booking).toMatchObject({
    firstname: 'Jim',
    lastname: 'Brown',
    totalprice: 111,
    depositpaid: true,
    bookingdates: { checkin: '2018-01-01', checkout: '2019-01-01' },
    additionalneeds: 'Breakfast'
  })
   expect(jsonResp.booking.additionalneeds).toEqual("Breakfast")

})

test("POST 2",async({request})=>{
    const resp1 = await request.post("https://api.demoblaze.com/addtocart",{
        data:{"id":"66a8c86c-db22-6b2f-0178-a111f69230d5","cookie":"user=49045389-690c-0ad9-cf9f-68a4511819ad","prod_id":3,"flag":false}
    })
    expect(resp1.status()).toBe(200)

})

test("PUT",async({request})=>{
    const resp1 = await request.put("/booking/1",{
       headers:{
        Authorization:"Basic YWRtaW46cGFzc3dvcmQxMjM="
       },
       data:{
        "firstname" : "Dario",
        "lastname" : "Guardia",
        "totalprice" : 999,
        "depositpaid" : true,
        "bookingdates" : {
            "checkin" : "2018-01-01",
            "checkout" : "2019-01-01"
        },
        "additionalneeds" : "Pancakes"
    }
    })
    const jsonResp = await resp1.json()
    console.log(jsonResp)
    expect(resp1.status()).toBe(200)
    expect(resp1.statusText()).toBe("OK")
    expect(resp1.ok()).toBeTruthy()
    expect(jsonResp).toMatchObject({
    firstname: 'Dario',
    lastname: 'Guardia',
    totalprice: 999,
    depositpaid: true,
    bookingdates: { checkin: '2018-01-01', checkout: '2019-01-01' },
    additionalneeds: 'Pancakes'
    })
    expect(jsonResp.additionalneeds).toEqual("Pancakes")

    const resp2 = await request.get("/booking/1")
    console.log(await resp2.json())
    expect(await resp2.json()).toMatchObject({
    firstname: 'Dario',
    lastname: 'Guardia',
    totalprice: 999,
    depositpaid: true,
    bookingdates: { checkin: '2018-01-01', checkout: '2019-01-01' },
    additionalneeds: 'Pancakes'
    })


})

test("POST FROM FILE IMPORT",async({request})=>{
    const resp1 = await request.post("/booking",{
        data:ApiJson.postcalldata
    })
    const body = await resp1.text();
    console.log(body);
    const jsonResp = await resp1.json()
    expect(jsonResp.booking).toMatchObject(ApiJson.postcalldata)
    expect(jsonResp.booking.additionalneeds).toEqual(ApiJson.postcalldata.additionalneeds)

})

test("PUT FROM FILE IMPORT",async({request})=>{
    
    const resp1 = await request.put("/booking/1",{
         headers: {
        Authorization: "Basic YWRtaW46cGFzc3dvcmQxMjM="
    },
        data:ApiJson.putcalldata
    })
    console.log(resp1.status());
    console.log(await resp1.text());
    console.log(await resp1.json())
    const jsonResp = await resp1.json()
    expect(jsonResp).toMatchObject(ApiJson.putcalldata)
    expect(jsonResp.firstname).toEqual(ApiJson.putcalldata.firstname)

})

test("PATCH FROM FILE IMPORT", async ({ request }) => {
    const resp1 = await request.patch("/booking/1", {
    headers: {
        Authorization: "Basic YWRtaW46cGFzc3dvcmQxMjM="
    },
        data: ApiJson.patchcalldata
    });
    
    expect(resp1.ok()).toBeTruthy();

    const jsonResp = await resp1.json();
    console.log(jsonResp)

    expect(jsonResp).toMatchObject(ApiJson.patchcalldata);
    expect(jsonResp.firstname).toEqual(ApiJson.patchcalldata.firstname);
});

test("DELETE", async ({ request }) => {
    const resp1 = await request.delete("/booking/2", {
    headers: {
        Authorization: "Basic YWRtaW46cGFzc3dvcmQxMjM="
    }})
    expect(resp1.status()).toBe(201)
    const respText = await resp1.text()
    console.log(respText)
    expect(respText).toEqual("Created")

    const resp2 = await request.get("/booking/2")
    console.log(resp2.status())
    expect(resp2.status()).toBe(404)

})

test("FETCH", async ({ request }) => {
    const resp1 = await request.get("/booking/3")
    const respHeaders = resp1.headers()
    console.log(respHeaders)
    expect(respHeaders.server).toEqual("Heroku")
    expect(respHeaders["x-powered-by"]).toEqual("Express")
    console.log("***************************************************************************************************************************************************")
    const headersArrayValue = resp1.headersArray()
    console.log(headersArrayValue)
    console.log("***************************************************************************************************************************************************")
    expect(headersArrayValue.length).toBe(10)
    headersArrayValue.forEach((header)=>{
        console.log(header.name + "::" + header.value)
    })
   

})




