// ✔ Data types
// ✔ Functions
// ✔ Arrow functions
// ✔ Objects/Arrays
// ✔ Async-await
// ✔ DOM

// Data types
//Primitive Data Types in JavaScript
// String
// const fname = "John";
// Number
// let age = 25;
// Boolean
// const isLogin = true;
// null
// let selectedItem = null;
// undefined
// let result = undefined;
// Symbol
// const studentId =  Symbol('id');
// BigInt
// const bigNumber =  BigInt(123456789012345678901234567890); 

// Non Primitive Data Tyeps in javascript
// Object 
// const person = {
//     name: "Alia",
//     age:30,
// }

// Array
// const numbers = [1,2,3,4,5];

// Function
// function greet() {
//     console.log("Hello, World!");
// }


//Heap memory example
// jaba bhi heap memory me koi non-primitive data type store hota hai to uska ek reference banta hai stack memory me aur asli data heap memory me store hota hai.
// let obj1 = {name: "Alice", age : 28, city: "New York"};
// let obj2 = obj1; // obj2 me obj1 ka reference store ho gaya hai
// obj2.name = "Bob"; // obj2 ke through humne asli data ko modify kar diya
// console.log(obj1); // {name: "Bob", age : 28, city: "New York"}
// console.log(obj2); // {name: "Bob", age : 28, city: "New York"}
// const userData = {name: "Alice", age : 28, city: "New York"};
// const userData2 = userData;
// userData2.name = "Bob";
// console.log(userData);
// console.log(userData2);

