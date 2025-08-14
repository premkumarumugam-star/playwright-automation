var employees = 'prem'; //explicit
console.log("The name of the employee ".concat(employee));
var age = 32;
console.log("The age of the employee ".concat(age));
var company = 'Altimetrik'; //implicit
console.log("The company name is ".concat(company));
var isleave = true;
console.log("The employee is in leave ".concat(isleave));
var database;
console.log("The value of database ".concat(database));
var unifrom = null;
console.log("The uniform is there ".concat(unifrom));
var idcard;
idcard = true;
idcard = 'premkumar';
idcard = 1203556;
console.log("The id card is ".concat(idcard));
var demension = { x: 10, y: 20 };
console.log(demension);
function browseraction(brow) {
    if (brow === "chrome") {
        console.log("This is chrome broswer");
    }
    else {
        console.log("This is firefox ");
    }
}
browseraction("chrome");
