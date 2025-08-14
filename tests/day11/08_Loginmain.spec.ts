export class LoginPage{


   usernameField : String ;
   passwordField : String;
   loginButton : any;

   constructor (){
      this.usernameField = "#username";
      this.passwordField = "#password";
      this.loginButton = "#Login";

   }

    async login(page:any , username:string , password:string){
          await page.fill(this.usernameField,username);
          await page.fill(this.passwordField, password);
          await page.click(this.loginButton);

    }



}