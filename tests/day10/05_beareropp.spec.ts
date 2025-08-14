import { expect, test } from "@playwright/test";

import testdata from "../../test-data/salesforcedata.json";

let accessToken: any;
let inst_url: any;

test('Get Access token from Salesforce app',async ({request}) => {
    
    const generatingToken = await request.post(testdata.url,{
        headers:{

            "Content-Type": "application/x-www-form-urlencoded",
            "Connection": "keep-alive"
        },

        //Body is form type
        form:{
            "grant_type": "password",
            "client_id": testdata.clientid,
            "client_secret": testdata.clientsecret,
            "username": testdata.username,
            "password": testdata.password

        }
    
    });

    const generatingTokenJSON = await generatingToken.json();
    //console.log(generatingTokenJSON);
    
    accessToken = generatingTokenJSON.access_token;
    inst_url = generatingTokenJSON.instance_url;
    console.log("Bearer " +accessToken);
    console.log(inst_url);
    
});