
let browserName="Chrome";

function launchBrowser() {

    if(browserName="chrome"){
        console.log("This is chrome browser");
    }else{
        console.log("This is some other browser");
    }
}

let testType = "regression";

function runTests(){
switch (testType){
case "smoke":
    console.log("This is Smoke Testing");
    break;
    case "sanity":
    console.log("This is sanity Testing");
    break;
    case "regression":
    console.log("This is regression Testing");
    break;
    default :
    console.log("This is Not testing");
    break;

}


}

launchBrowser();
runTests();