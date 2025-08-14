// single or doubel quotes
let val11="\"PremKumar\"";
let val12='premkumaruMUGAM';

let mess = "Hello Guys , \'welcome to riderninja\'"; // Escape character '\' will be used

console.log(mess);

var sentence = "This is call from Altimetrik";  

//concatenation 
let digit = 35674;
let conc = "World";

const printing = conc+" - " +digit +" : final print";
console.log(printing);
console.log(`This is the value of ${digit}`);

//To print first value
console.log(val12.charAt(0));

//To print last value
console.log(val12.charAt(val12.length-1));

//To find the index 
console.log(val11.indexOf("e"));
console.log(val12.indexOf("q"));

//Substring - prints true or false if present or not 
console.log(val12.includes("em"));

//toupper and lower  case 
console.log(val12.toLocaleUpperCase());
console.log(val12.toLocaleLowerCase());

//slice - cuts and prints the value 
console.log(val12.slice(0,5));
console.log(val12.slice(65,75));

//split - string to char array
console.log(val12.split(""));

const test1="The is,the first";
console.log(test1.split(","));


