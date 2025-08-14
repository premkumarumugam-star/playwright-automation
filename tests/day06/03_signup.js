var signup = /** @class */ (function () {
    //This is Constructor inside the class file
    function signup() {
        this.broswername = "chrome";
        this.broswerversion = "601.2032";
        console.log("The value of name is ".concat(this.broswername));
        console.log("The value of version is ".concat(this.broswerversion));
    }
    //method with arguments
    signup.prototype.signing = function (Username, Password) {
        return Username + " " + Password;
    };
    return signup;
}());
var calsign = new signup();
var cred = calsign.signing("Demosalesmanager", "crmsfa");
console.log("The signing value is ".concat(cred));
