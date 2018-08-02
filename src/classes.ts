// -> super.method
class Animal {
    name: string;
    constructor(theName: string) { this.name = theName; }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Snake extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}

class Horse extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 45) {
        console.log("Galloping...");
        super.move(distanceInMeters);
    }
}

let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");


// -> Private attributes and methods
class Animal2 {
    private name: string;
    constructor(theName: string) { this.name = theName; }
}

class Rhino extends Animal2 {
    constructor() { super("Rhino"); }
}

let animal = new Animal2("Goat");
let rhino = new Rhino();


// -> Readonly Properties
class Octopus {
    readonly numberOfLegs: number = 8;
    constructor(readonly name: string) {

    }
}


// -> Abstract Classes (We cannot make objects from abstracts, they've designed to be extended)

abstract class Department {

    constructor(public name: string) {
    }

    printName(): void {
        console.log("Department name: " + this.name);
    }

    abstract printMeeting(): void; // must be implemented in derived classes
}

class AccountingDepartment extends Department {

    constructor() {
        super("Accounting and Auditing"); // constructors in derived classes must call super()
    }

    printMeeting(): void {
        console.log("The Accounting Department meets each Monday at 10am.");
    }

    generateReports(): void {
        console.log("Generating accounting reports...");
    }
}

let department: Department;
department = new AccountingDepartment();
department.printName();
department.printMeeting();