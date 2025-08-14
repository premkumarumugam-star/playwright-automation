var bicycle = /** @class */ (function () {
    function bicycle() {
        //properties
        this.brand = "firefox";
        this.colour = "blue";
        this.gear = true;
        this.wheels = 2;
    }
    bicycle.prototype.brake = function () {
        var breakpad = " present";
        var model = 2020;
        console.log("The brand value is ".concat(this.brand));
        console.log("The colour is ".concat(this.colour));
        console.log("the gear is ".concat(this.gear));
        console.log("The wheels number is ".concat(this.wheels));
        console.log("The brake pad is ".concat(breakpad));
        console.log("The model of bicycle is ".concat(model));
    };
    return bicycle;
}());
var cycle = new bicycle();
cycle.brake();
