"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cardefinition = /** @class */ (function () {
    function cardefinition() {
        this.engine = "inline four";
    }
    cardefinition.prototype.Bodyconfig = function () {
        console.log("This is white colour car");
    };
    ;
    cardefinition.prototype.TyreCongig = function (name, Size) {
        return name + " " + Size;
    };
    ;
    cardefinition.prototype.ServiceDone = function () {
        return true;
    };
    ;
    return cardefinition;
}());
var call = new cardefinition();
console.log(call.engine);
console.log(call.Bodyconfig());
console.log(call.ServiceDone());
console.log(call.TyreCongig("Skoda", 4));
