import { chromium } from "@playwright/test";

import logindata from "../../test-data/salesforcedata.json";


async function getaccesstoken() {

  const browser = await chromium.launch();
  const browsercontext = await browser.newContext();
  const requestapi = await browsercontext.request;

  const tokengenerate = await requestapi.post(logindata.url,{


    headers:{
            "Content-Type": "application/x-www-form-urlencoded",
            "Connection": "keep-alive"
    },

    form:{
        "client_id":logindata.clientid,
        "client_secret":logindata.clientsecret,
        "username":logindata.username,
        "password":logindata.password,
        "grant_type":"password"

    }

  });
  
  const tokengeneratevalue = await tokengenerate.json();
  console.log(tokengeneratevalue);

  return{
     accesstoken:tokengeneratevalue.access_token,
     inst_url : tokengeneratevalue.instance_url

  }
} 

export {getaccesstoken};