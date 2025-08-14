

let browser = "Chrome"; //primitive 
let broswername = new String("Chrome"); //object 


// single or doubel quotes
let val1="\"PremKumar\"";
let val2='premkumarumugam';

console.log(val1);


//Concatenation

let testcasename= " Hello how are you";
let testid= 11254678;
const result = testcasename+" - "+testid+" : Testing passed";
console.log(result);
console.log(typeof result);

//back tick 
let id=1245788;
const disc = `these are ${id} of the test cases`;
console.log(disc);

console.log(disc.length);

var  firstname = 'premkumar';

//print first character 
const firtindex= firstname.charAt(0);
console.log(firtindex);

//print last character from string 
const latchar=firstname.charAt(firstname.length-1);
console.log(latchar);


//index of - returns position , will return -1 if value is not found
const indexofone= firstname.indexOf('p');
console.log(indexofone);

const indexoftwo= firstname.indexOf('q');
console.log(indexoftwo);

//substring - returns true or false 
console.log(firstname.includes('pre'));
console.log(firstname.includes('ku'));

//lower and upper
console.log(firstname.toLowerCase());
console.log(firstname.toUpperCase());

//slice - Triming characters 
let resultset="this is prem from altimetrik team india";
console.log(resultset.slice(10,15));

//split - String to char
console.log(firstname.split(""));
