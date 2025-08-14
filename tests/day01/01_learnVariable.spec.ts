const browsername = "chrome"; //global variable

//getBrowserVersion(browsername);

function getBrowserVersion(browsername) {
    let browserVersion= "10.11.124.1" ; // function variable 

    if(browsername.startsWith("ch")){
        let color= "red"; //block level variable
        console.log("this is chrome browser")
        
    }
    else{
        console.log("This is not chrome")
    }
    console.log(browserVersion);
    //console.log(color);   
}

getBrowserVersion(browsername);

