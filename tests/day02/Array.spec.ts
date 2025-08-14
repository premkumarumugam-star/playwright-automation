

let brow=[];

console.log(brow.length);

let browsers=['chrome','edge','firefox'];
console.log(browsers[0]);
console.log(browsers[10]);

let valu="Premkumar";
console.log(valu.indexOf('P'));

browsers[3]="opera"; 
browsers[8]="apple";
console.log(browsers);
console.log(browsers.length);

//mixed bag

let mixed = ['1','2','3','chrome','edge','true',['prem','kumar']];
console.log(mixed.length);
console.log(mixed[6]);

//string to array
let constbrow="chrome,firefox,edge";
const broww=constbrow.split(",");
console.log(broww);

//array to string

const joined=broww.join("-");
console.log(joined);

//add and remove from array from last index

let newbrow= ['chrome','edge','fire'];
newbrow.push('opera');
console.log(newbrow);

newbrow.pop();
newbrow.pop();
console.log(newbrow);

//add and remove at starting of array

newbrow.unshift('apple');
console.log(newbrow);

newbrow.shift();
console.log(newbrow);

let num = ['1','3','6','5'];
num.sort();
console.log(num);

//spread syntax = copying array
let arr1=['chrome','firefox'];
let arr2=[...arr1,'opera','apple'];

console.log(arr2);







