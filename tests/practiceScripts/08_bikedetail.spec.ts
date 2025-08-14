import {Bike} from './07_Intef.spec'

class biking implements Bike{
    Model: string= "Kawasaki";
    EngineSpec(): void {
        console.log("This is Bike from Kawasaki under 1000cc")
    }
    Categoryofbike(Bikename: string, CC: string): string {
        return Bikename +"  "+CC;
    }
    stock(): boolean {
        return true;
    } 

}

const readval = new biking();
console.log(readval.Categoryofbike('Zx6R','650'));
console.log(readval.EngineSpec());
console.log(readval.Model);
console.log(readval.stock());
