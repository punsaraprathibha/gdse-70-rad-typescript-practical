# 🌟 TypeScript Concepts with Examples

This project demonstrates fundamental and advanced TypeScript concepts with simple code examples. You’ll find examples for variable inference, function return types, enums, tuples, generics, and object-oriented features in TypeScript.

---

## ✅ Running the Code

You can compile and run the TypeScript file using:
```
tsc ts-app.ts
node ts-app.js
```

## 📌 1. Variable Inference
TypeScript can automatically infer the type of a variable based on its assigned value.

```ts
let count = 5;      // Inferred as number
let name = "Saman"; // Inferred as string
```

---

## 📌 2. Function Return Type Inference
TypeScript infers the return type of a function based on the returned value.

```ts
function add(a: number, b: number) {
    return a + b; // Inferred return type: number
}
```

---

## 📌 3. Array Type Inference

```ts
let animals = ["Cat", "Dog", "Parrot"]; // string[]
let items = [1, "", true];              // (string | number | boolean)[]
```

---

## 📌 4. Optional Parameters
You can mark function parameters as optional using the `?` operator.

```ts
function greet(name?: string) {
    return name ? `Hello ${name}!` : "Hello Guest!";
}
```

---

## 📌 5. Default Parameters
Default parameter values are used when no value or `undefined` is passed.

```ts
function greetDefault(name: string = "Guest") {
    return `Hello ${name}`;
}
```

---

## 📌 6. Enums
Enums allow you to define a set of named constants.

```ts
enum Direction {
    UP = "UP",
    DOWN = "DOWN",
    LEFT = "LEFT",
    RIGHT = "RIGHT"
}
let move = Direction.UP;
```

---

## 📌 7. Tuples
Tuples are fixed-length arrays with known types.

```ts
type NameAge = readonly [string, number];
let validPerson: NameAge = ["Saman", 25];
```

---

## 📌 8. Generics (Functions)
Generic functions can work with any type.

```ts
function testGenerics<T>(value: T): T {
    return value;
}
testGenerics<string>("Hello");
testGenerics<number>(12);
```

---

## 📌 9. Generics with Interfaces

```ts
interface ApiResponse<T> {
    data: T;
    statusCode: number;
}
let response: ApiResponse<string> = {
    data: "User data added!",
    statusCode: 200
};
```

---

## 📌 10. Object-Oriented Programming in TypeScript

### 🔷 Interfaces and Classes

```ts
interface Animal {
    run(): void;
}

class Human implements Animal {
    private noOfLegs: number;
    private noOfHands: number;

    constructor(noOfLegs: number, noOfHands: number) {
        this.noOfLegs = noOfLegs;
        this.noOfHands = noOfHands;
    }

    getNoOfLegs(): number {
        return this.noOfLegs;
    }

    setNoOfLegs(noOfLegs: number) {
        this.noOfLegs = noOfLegs;
    }

    run(): void {
        console.log("Human is Running..");
    }
}
```

### 🔷 Inheritance and Method Overriding

```ts
class Employee extends Human {
    private empCode: number;
    private empName: string;

    constructor(noOfLegs: number, noOfHands: number, empCode: number, empName: string) {
        super(noOfLegs, noOfHands);
        this.empCode = empCode;
        this.empName = empName;
    }

    getEmpCode(): number {
        return this.empCode;
    }

    getEmpName(): string {
        return this.empName;
    }

    run(): void {
        console.log("Employee is Running..");
    }
}
```

---
