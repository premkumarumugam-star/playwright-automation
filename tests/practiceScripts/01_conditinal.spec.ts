let browsernew = "chrome" ;
const call = getbroswerdetails();
console.log(call);


function getbroswerdetails(){

    if(browsernew.startsWith("chr")){
        console.log("This is chrome browser")
    }
    else if (browsernew.startsWith("fire")){
        console.log("This is firefox browser")
    }
    else{
        console.log("This is unknown browser")
    }

    switch(browsernew){
        case "chrome" :
        return "101.20.3450202";
        case "firefox" :
        return "101.20.34.2023";    
}

}



// function getBrowserVersion(){

//     if(browser === 'chrome'){
//         return "120.23.9921";
//     } else if (browser === 'firefox'){
//         return "119.28.11";
//     } else if (browser === 'edge'){
//         return "120.18.17";
//     } else{
//         return "unsupported browser"
//     }

// }

let browser = "chrome";
let version  = getBrowserVersionOptimized();
console.log(version)

function getBrowserVersionOptimized() {
    switch (browser) {
        case "chrome":
            return "120.23.9921"; 
        case "firefox":
            return "119.28.11";
        default:
            return "unsupported browser";
    }
}
