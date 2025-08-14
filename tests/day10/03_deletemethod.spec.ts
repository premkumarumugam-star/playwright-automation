import {test} from '@playwright/test'


test("This is Get call",async({request})=>{

    const response = await request.delete("https://dev196326.service-now.com/api/now/table/incident/eb44cfebc32826106e47b01ed4013110",{

        headers:{
           "Content-Type" : "application/json",
           "Authorization" : "Basic YWRtaW46NF5ONEIvSW9Ca21j"
        },


    });


    console.log(`The status code is ${response.status()}`);

})