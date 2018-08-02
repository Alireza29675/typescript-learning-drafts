// -> Interface with optional properties
interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): {color: string; area: number} {
    let newSquare = {color: "white", area: 100};
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

let mySquare = createSquare({ color: "black" });


// -> Readonly Properties
interface Point {
    readonly x: number;
    readonly y: number;
}
const point: Point = { x: 10, y: 5 }


// -> ReadonlyArray
let ro: ReadonlyArray<number> = [1, 2, 3, 4];


// -> Clock Example
interface ClockConstructor {
    new (hour: number, minute: number): ClockInterface;
}
interface ClockInterface {
    tick();
}

function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
    return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface {
    constructor(h: number, m: number) { }
    tick() {
        console.log("beep beep");
    }
}
class AnalogClock implements ClockInterface {
    constructor(h: number, m: number) { }
    tick() {
        console.log("tick tock");
    }
}

let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);


// -> Extending Interfaces
interface Shape {
    color: string;
}

interface PenStroke {
    penWidth: number;
}

interface Square extends Shape, PenStroke {
    sideLength: number;
}

let square = <Square>{};
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;


// -> Hybrid Types
interface Request {
    link: string;
}
interface jQuery {
    (query: string): any;
    ajax(request: Request): any;
    delay: number;
}
class jQueryClass {
    private query: string;
    constructor (query) {
        this.query = query;
    }
    print () {
        console.log('This is ' + this.query);
    }
}
const $ = <jQuery>function (query: string) {
    return new jQueryClass(query)
} 
$.ajax = function (request: Request) {
    console.log(`sending request to ${request.link}`)
}

$('Hello').print();
$.ajax({
    link: "/"
} as Request)