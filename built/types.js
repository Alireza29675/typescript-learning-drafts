// -> Generic Array Tyoe
var list = [1, 2, 3];
// -> Tuples
var x;
x = ["hello", 10];
// -> ENUMS
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
//console.log(Color.Red);
// -> Type Assertions
var someValue = "7";
var toNumber = someValue;
