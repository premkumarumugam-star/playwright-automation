import { chromium } from "@playwright/test";
import dotenv from "dotenv";
dotenv.config();


async function getaccesstoken() {

    const browser = await chromium.launch();
    const browsercontext = await browser.newContext();
    const requestapi = await browsercontext.request;

    const clientId = process.env.SF_CLIENT_ID as string ;
    const clientSecret = process.env.SF_CLIENT_SECRET as string;
    const username = process.env.SF_USERNAME as string;
    const password = process.env.SF_PASSWORD as string;
  
    const url= "https://login.salesforce.com/services/oauth2/token";

    const tokengenerate = await requestapi.post(url,{
  
  
      headers:{
              "Content-Type": "application/x-www-form-urlencoded",
              "Connection": "keep-alive"
      },
  
      form:{
          "client_id":clientId,
          "client_secret":clientSecret,
          "username":username,
          "password":password,
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