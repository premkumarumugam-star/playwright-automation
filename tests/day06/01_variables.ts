

let employee : string = 'prem'; //explicit
console.log(`The name of the employee ${employee}`);

let age:number = 32;
console.log(`The age of the employee ${age}`);

let company = 'Altimetrik' ; //implicit
console.log(`The company name is ${company}`);


let isleave:boolean= true ;
console.log(`The employee is in leave ${isleave}`);

let database:undefined;
console.log(`The value of database ${database}`);

let unifrom:null = null;
console.log(`The uniform is there ${unifrom}`)

let idcard:any;

idcard= true;
idcard= 'premkumar';
idcard= 1203556;

console.log(`The id card is ${idcard}`);

type point = {
   x:number;
   y:number;

};

let demension:point={x:10,y:20};

console.log(demension);

type browsername= "chrome"|"firefox" ;

function browseraction(brow:browsername):void{

if(brow==="chrome"){

    console.log("This is chrome broswer");
}
else 
{
    console.log("This is firefox ");
}

}

browseraction("chrome");


