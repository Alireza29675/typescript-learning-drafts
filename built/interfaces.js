function createSquare(config) {
    var newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare = createSquare({ color: "black" });
var point = { x: 10, y: 5 };
// -> ReadonlyArray
var ro = [1, 2, 3, 4];
function createClock(ctor, hour, minute) {
    return new ctor(hour, minute);
}
var DigitalClock = /** @class */ (function () {
    function DigitalClock(h, m) {
    }
    DigitalClock.prototype.tick = function () {
        console.log("beep beep");
    };
    return DigitalClock;
}());
var AnalogClock = /** @class */ (function () {
    function AnalogClock(h, m) {
    }
    AnalogClock.prototype.tick = function () {
        console.log("tick tock");
    };
    return AnalogClock;
}());
var digital = createClock(DigitalClock, 12, 17);
var analog = createClock(AnalogClock, 7, 32);
var square = {};
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;
var jQueryClass = /** @class */ (function () {
    function jQueryClass(query) {
        this.query = query;
    }
    jQueryClass.prototype.print = function () {
        console.log('This is ' + this.query);
    };
    return jQueryClass;
}());
var $ = function (query) {
    return new jQueryClass(query);
};
$.ajax = function (request) {
    console.log("sending request to " + request.link);
};
$('Hello').print();
$.ajax({
    link: "/"
});
