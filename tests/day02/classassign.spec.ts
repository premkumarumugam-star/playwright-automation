
// write a function to reverse the string.

// // hints
// 1) convert the input into characters
// 2) loop them in reverse direction
// 3) concate the string
// 4) print the new string

let yourName = "suresh";

const charval=yourName.split("");
console.log(charval);

// let lengthval=charval.length;
// console.log(lengthval);

for (let index = charval.length-1; index >= 0; index--) {
    console.log(charval[index]);
    
}


