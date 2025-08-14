import { car } from "./04_Interface";

class cardefinition implements car{

    engine = "inline four";


    Bodyconfig():void{

         console.log("This is white colour car")
    };

    TyreCongig(name:string,Size:number):string{

        return name +" "+Size;
    };

      ServiceDone(){
        return true;
      };



}
const call = new cardefinition();
console.log(call.engine);
console.log(call.Bodyconfig());
console.log(call.ServiceDone());
console.log(call.TyreCongig("Skoda",4));