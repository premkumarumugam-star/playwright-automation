import {test} from '@playwright/test'


test("This is post call",async({request})=>{

    const response = await request.post("https://dev222555.service-now.com/api/now/table/incident",{

        headers:{
           "Content-Type" : "application/json",
           "Authorization" : "Basic YWRtaW46TUlob0BrUyE2d1k3"
        },

        data:{
            "short_description" : "Creating from POSTMAN"
        }

    });

    const responsebody = await response.json();
    
    console.log(responsebody);

    console.log(response.status);


    const headersvalue = response.headers();
    console.log(` The header value of content type is ${headersvalue["content-type"]}`);

    console.log(`The Incident number is ${responsebody.result.task_effective_number}`);



})