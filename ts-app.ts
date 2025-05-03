
// function greet(name: string): string {
//     return `Hello ${name}`;
// }
//
// console.log(greet("Typescript"));

// 1. Define/Declare a Variable (Variable Inference)
function testVariableInference() {
    let count = 5;
    let name = "Saman";
}

// 2. Function Return Type Inference
function add(a: number, b: number) {
    return a + b;
}

// Array Related Inference
function testArrayInference(){
    let animals
        = ["Cat", "Dog", "Parrot"];

    let items
        = [1, "", true];
}


// Optional Parameters in Functions
function greet(name?: string) {
    if (name) {
        return `Hello ${name}!`;
    } else {
        return "Hello Guest!";
    }
}
console.log(greet("Saman"));
console.log(greet());


// Default Parameters
function greetDefault(name: string = "Guest"):string {
    return `Hello ${name}`;
}

console.log(greetDefault("Saman"));
console.log(greetDefault());

// Enums
function testEnums() {
    // Enum Declaration
    enum Direction {
        UP= "UP",
        DOWN = "DOWN",
        LEFT = "LEFT",
        RIGHT = "RIGHT"
    }
    let move = Direction.UP;
    console.log(move);
}
testEnums();

// Tuples
function testTuples() {
    let person: [string, number]
        = ["Saman", 25];
    console.log(person);
    console.log(person[0]);
    console.log(person[1]);
}
testTuples();

// Generics with Functions
function testGenerics<T>(value: T): T {
    return value;
}
let output1
    = testGenerics<string>("Hello");
let output2
    = testGenerics<number>(12);
console.log(output1);
console.log(output2);

// Generics with Interfaces
function testGenericsWithInterface() {
    interface ApiResponse<T> {
        data: T;
        statusCode: number;
    }

    let response: ApiResponse<string> = {
        data: "User data added!",
        statusCode: 200
    }
    console.log(response);
}
testGenericsWithInterface();

// Object-Oriented Features
// in TS
interface Animal {
    run(): void;
}

class Human implements Animal {
    private noOfLegs: number;
    private noOfHands: number;
    public constructor(
        noOfLegs: number,
        noOfHands: number) {
        this.noOfLegs = noOfLegs;
        this.noOfHands = noOfHands;
    }

    public getNoOfLegs(): number {
        return this.noOfLegs;
    }

    public setNoOfLegs(
        noOfLegs: number) {
        this.noOfLegs = noOfLegs;
    }

    run(): void {
        console.log(
            "Human is Running..")
    }
}

class Employee extends Human {
    private empCode: number;
    private empName: string;

    public constructor(noOfLegs: number,
                       noOfHands: number,
                       empCode: number,
                       empName: string) {
        super(noOfLegs, noOfHands);
        this.empCode = empCode;
        this.empName = empName;
    }

    public getEmpCode():number {
        return this.empCode;
    }
    public getEmpName():string {
        return this.empName;
    }

    run(): void {
        console.log(
            "Employee is Running..")
    }
}

let employee = new Employee(
    2,
    2,
    100,
    "Saman");
console.log(employee.getEmpCode());
console.log(employee.getEmpName());

console.log(employee.getNoOfLegs());
employee.run();






