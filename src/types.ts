// -> Generic Array Tyoe
let list: Array<number> = [1, 2, 3];

// -> Tuples
let x: [string, number];
x = ["hello", 10];

// -> ENUMS
enum Color {Red = 1, Green, Blue}
//console.log(Color.Red);

// -> Type Assertions
let someValue: any = "7";
let toNumber: number = someValue as number;