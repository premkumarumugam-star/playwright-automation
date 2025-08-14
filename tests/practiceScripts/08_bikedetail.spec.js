"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var biking = /** @class */ (function () {
    function biking() {
        this.Model = "Kawasaki";
    }
    biking.prototype.EngineSpec = function () {
        console.log("This is Bike from Kawasaki under 1000cc");
    };
    biking.prototype.Categoryofbike = function (Bikename, CC) {
        return Bikename + "  " + CC;
    };
    biking.prototype.stock = function () {
        return true;
    };
    return biking;
}());
var readval = new biking();
console.log(readval.Categoryofbike('Zx6R', '650'));
console.log(readval.EngineSpec());
console.log(readval.Model);
console.log(readval.stock());
