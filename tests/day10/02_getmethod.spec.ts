import {test} from '@playwright/test'


test("This is Get call",async({request})=>{

    const response = await request.get("https://dev196326.service-now.com/api/now/table/incident/e87d3e27c32826106e47b01ed401311c",{

        headers:{
           "Content-Type" : "application/json",
           "Authorization" : "Basic YWRtaW46NF5ONEIvSW9Ca21j"
        },


    });


    const responsebody = await response.json();

    console.log(responsebody);
    console.log(response.status);

    const headersvalue = response.headers();
    console.log(` The header value of content type is ${headersvalue["content-type"]}`);

    console.log(`The Incident number is ${responsebody.result.task_effective_number}`);







})