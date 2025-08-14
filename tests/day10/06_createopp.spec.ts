import { expect, test } from "@playwright/test";
import { getaccesstoken } from "./authhelper.spec";

let accessTokenvalue:string;
let inst_urlvalue:string;

test("using token from function", async()=>{

       const authtoken = await getaccesstoken();
       accessTokenvalue=authtoken.accesstoken;
       inst_urlvalue=authtoken.inst_url;

})


test("Test to create a new opportunity",async ({request}) =>{

    let date = "25/12/2023";
    let parts = date.split('/');//[25 , 12, 2023]
    let formattedDate = `${parts[2]}-${parts[1]}-${parts[0]}`;
    let opportunity_url = `${inst_urlvalue}/services/data/v63.0/sobjects/Opportunity/`;

    const createopp = await request.post(opportunity_url,{

        headers:{
            "Authorization" : `Bearer ${accessTokenvalue}`,
            "Connection": "keep-alive"
        },

        data:{

            "Name": "Playwright_JS_PREM",
            "Type": "Existing Customer - Upgrade",
            "CloseDate": formattedDate,
            "StageName": "Prospecting"
        }
    }
)

     const oppresponse = await createopp.json();
     console.log(`The Response is ${oppresponse}`);
     console.log(`The status code is ${createopp.status()}`);
     expect(createopp.status()).toBe(201);


})
