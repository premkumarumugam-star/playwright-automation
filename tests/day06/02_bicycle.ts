
class bicycle{

    //properties
    brand : string = "firefox";
    colour : string = "blue";
    gear : boolean = true;
    wheels : number = 2;

    brake():void{
     let breakpad:string = " present";
     let model:number = 2020;
     console.log(`The brand value is ${this.brand}`);
     console.log(`The colour is ${this.colour}`);
     console.log(`the gear is ${this.gear}`);
     console.log(`The wheels number is ${this.wheels}`);
     console.log(`The brake pad is ${breakpad}`);
     console.log(`The model of bicycle is ${model}`);

    }

}

const cycle = new bicycle();
cycle.brake();