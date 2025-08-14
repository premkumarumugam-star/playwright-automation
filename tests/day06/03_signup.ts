
class signup{

    //properties
    broswername:string;
    broswerversion:string;

    //This is Constructor inside the class file
    constructor(){
    this.broswername="chrome";
    this.broswerversion="601.2032"
    console.log(`The value of name is ${this.broswername}`);
    console.log(`The value of version is ${this.broswerversion}`);

    }

    //method with arguments
    signing(Username:string,Password:string):string{

        return Username+" "+Password;

    }

}

const calsign=new signup();
const cred= calsign.signing("Demosalesmanager","crmsfa");
console.log(`The signing value is ${cred}`);


