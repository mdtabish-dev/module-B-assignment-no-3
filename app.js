// ==================== GLOBAL SCOPE ====================
var globalVar = "I'm global var";
let globalLet = "I'm global let";
const globalConst = "I'm global const";

console.log(globalVar);
console.log(globalLet);
console.log(globalConst);

// ==================== FUNCTION SCOPE ====================
function myFunction() {
    var functionVar = "I'm function var";
    let functionLet = "I'm function let";
    const functionConst = "I'm function const";
    console.log(functionVar);
    console.log(functionLet);
    console.log(functionConst);
}
myFunction();

// ==================== BLOCK SCOPE ====================
if (true) {
    var blockVar = "I'm block var";
    let blockLet = "I'm block let";
    const blockConst = "I'm block const";
    console.log(blockVar);
    console.log(blockLet);
    console.log(blockConst);
}

console.log(blockVar); // Accessible due to var's function scope
// console.log(blockLet);  Uncaught ReferenceError: blockLet is not defined
// console.log(blockConst); Uncaught ReferenceError: blockConst is not defined   

// ==================== HOISTING WITH VAR ====================
console.log(hoistedVar); // undefined (not ReferenceError)
var hoistedVar = "I'm hoisted var";
console.log(hoistedVar); // "I'm hoisted var"

// ==================== HOISTING WITH LET ====================
// console.log(hoistedLet); Uncaught ReferenceError: Cannot access 'hoistedLet' before initialization
let hoistedLet = "I'm hoisted let";
console.log(hoistedLet); // "I'm hoisted let"

// ==================== HOISTING WITH CONST ====================
// console.log(hoistedConst); Uncaught ReferenceError: Cannot access 'hoistedConst' before initialization
const hoistedConst = "I'm hoisted const";
console.log(hoistedConst); // "I'm hoisted const"

// ==================== REDECLARATION ====================

var redeclareVar = "First declaration";
var redeclareVar = "Second declaration";
console.log(redeclareVar); // "Second declaration"

// let redeclareLet = "First declaration";
// let redeclareLet = "Second declaration"; // Uncaught SyntaxError: Identifier 'redeclareLet' has already been declared

// const redeclareConst = "First declaration";
// const redeclareConst = "Second declaration"; // Uncaught SyntaxError: Identifier 'redeclareConst' has already been declared

// ==================== REASSIGNMENT ====================

var reassignVar = "Initial value";
reassignVar = "Reassigned value";
console.log(reassignVar); // "Reassigned value"

let reassignLet = "Initial value";
reassignLet = "Reassigned value";
console.log(reassignLet); // "Reassigned value"

const reassignConst = "Initial value";
// reassignConst = "Reassigned value"; // Uncaught TypeError: Assignment to constant variable.
console.log(reassignConst); // "Initial value"

// ==================== TDZ (Temporal Dead Zone) ====================

if (true) {
    // console.log(tdzLet); // ReferenceError
    let tdzLet = "TDZ example with let";
    console.log(tdzLet);
}

if (true) {
    // console.log(tdzConst); // ReferenceError
    const tdzConst = "TDZ example with const";
    console.log(tdzConst);
}

// Error: ReferenceError - Cannot access variable before initialization.
// Reason: let and const declaration se pehle use nahi hotay. Is period ko TDZ kehte hain.

// ==================== WHEN TO USE VAR, LET, AND CONST ====================

// var: old JavaScript ya function-scoped variable ke liye
function varExample() {
    var message = "Hello from var";
    console.log(message);
}
varExample();

// let: jab value change karni ho
let marks = 50;
marks = 80;
console.log(marks);

// const: jab value change nahi karni ho
const schoolName = "ABC School";
console.log(schoolName);

// ==================== STRING INTERPOLATION ====================

const firstName = "Ahmed";
const lastName = "Ali";
const fullName = `${firstName} ${lastName}`;
console.log(fullName);

// ==================== MULTI-LINE STRINGS ====================
const multiLineString = `Name: Ali
Age: 20
City: Karachi`;
console.log(multiLineString);

// ==================== SIMPLE EXPRESSIONS ====================

const x = 5;
const y = 10;
const sum = `${x} + ${y} = ${x + y}`;
console.log(sum);

// ==================== FUNCTION CALLS  ====================

const multiply = (a, b) => a * b;
console.log(`Product of 8 and 7 is ${multiply(8, 7)}`);

// ====================TAGGED TEMPLATE LITERALS  ====================

// 1. Simple Tagged Template
function logTag(strings) {
  console.log(strings[0]); // "Hello World"
}

logTag`Hello World`;


// 2. Uppercase Formatting Tag
function upperTag(strings) {
  return strings[0].toUpperCase();
}

console.log(upperTag`hello world`);

//===================== Conditional Logic =====================

const hours= new Date().getHours();
const greeting = hours < 12 ? "Good Morning" : "Good Afternoon";
console.log(greeting);

//===================== Looping with Template Literals =====================

let itemList = ["Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig", "Grape", "Honeydew", "Indian Fig", "Jackfruit"];
let htmlList = `<ul>
${itemList.map(item => `<li>${item}</li>`).join('')}
</ul>`;
document.writeln(htmlList);

// ==================== Escaping backticks ====================

const escaped = `The backtick character is \` like this`;
console.log(escaped);

//===================== Nesting Template Literals ====================

let data = [
  ["Name", "Age", "City"],
  ["Ali", 20, "Karachi"],
  ["Sara", 22, "Lahore"],
  ["Ahmed", 19, "Islamabad"]
];

let table = `
<table border="1">
  ${data.map(row => `
    <tr>
      ${row.map(cell => `<td>${cell}</td>`).join("")}
    </tr>
  `).join("")}
</table>
`;

document.writeln(table);

// ==================== Simple Condition ====================

let age=22;
let canVote = age >= 18 ? "Yes, you can vote!" : "No, you cannot vote.";
console.log(canVote);

//===================== Even or Odd =====================

let number=154;
let evenOrOdd= number%2===0 ? 'Even Number': 'Odd Number';
console.log(evenOrOdd);

//=====================Grade Evaluation====================

let studentMarks=45;
let grade= studentMarks >= 90 ? 'A+' : studentMarks >= 80 ? 'A' : studentMarks >= 70 ? 'B' : studentMarks >= 60 ? 'C' :studentMarks >= 50 ? 'D' : 'F';
console.log(`Your grade is: ${grade}`);

//===================== Login Check ===================== 

function checkLogin() {
  let username = document.getElementById("username").value;
  let isLoggedIn = username !== "";
  let statusMessage = isLoggedIn ? "Welcome back!" : "Please log in";
  document.getElementById("message").innerText = statusMessage;
}

//===================== Discount Eligibility =====================let isMember = true;
let isMember = true;
let purchaseAmount = 250;

let discount = (isMember && purchaseAmount > 100) 
  ? purchaseAmount * 0.10 
  : 0;

console.log(discount);

//===================== Determine max value =====================

function maxValue(a, b) {
  return a > b ? a : b;
}
console.log(maxValue(10, 20));

//===================== Greeting Message =====================

function greet(name) {
  return name ? `Hello, ${name}!` : "Hello, guest!";
}
console.log(greet("Ali"));
console.log(greet(""));
console.log(greet());


//===================== Mapping values =====================

let numbers =[1,2,3,4,5,6,7,8,9,10];
let newNumbers =numbers.map(num => num % 2 === 0 ? num * 2 : num * 3);
console.log(newNumbers);

//===================== filtering values =====================

const stringArray = ["cat", "elephant", "dog", "tiger", "bird", "butterfly"];
const longStrings = stringArray.filter(str => str.length > 3);
console.log("Original array:", stringArray);
console.log("Strings with length > 3:", longStrings);

// COPYING AN ARRAY

const originalArray = [10, 20, 30, 40, 50];
const copiedArray = [...originalArray];
console.log("Original Array:", originalArray);
console.log("Copied Array:", copiedArray);
console.log("Same reference?", originalArray === copiedArray);

// MERGING ARRAYS

const arrayA = [1, 2, 3];
const arrayB = [4, 5, 6];
const mergedArray = [...arrayA, ...arrayB];
console.log(arrayA);
console.log(arrayB);
console.log(mergedArray);



// ADDING ELEMENTS TO ARRAY
const numbers2 = [20, 30, 40];
console.log(numbers2);
const updatedNumbers = [10, ...numbers2, 50];
console.log(updatedNumbers);

// // COPYING AN OBJECT
const originalObject = {
  name: "Ali",
  age: 20,
  city: "Karachi"
};
const copiedObject = { ...originalObject };
console.log("Original Object:", originalObject);
console.log("Copied Object:", copiedObject);
console.log("Same reference?", originalObject === copiedObject);

// // MERGING OBJECTS

const object1 = {
  name: "Product A",
  price: 100,
  category: "Electronics",
  inStock: true
};

const object2 = {
  price: 120,
  color: "Red",
  brand: "Sony",
  inStock: false
};

const mergedObject = { ...object1, ...object2 };
console.log(object1);
console.log(object2);
console.log(mergedObject);

// UPDATING OBJECT PROPERTIES

const user = {
  name: "John Doe",
  age: 28,
  email: "john.old@email.com"
};

console.log(user);

const updatedUser = {
  ...user,
  email: "john.new@email.com",
  address: "123 Main Street, New York, NY 10001"
};

console.log(updatedUser);

//Passing Array Elements as Arguments: 

function addThreeNumbers(a, b, c) {
  return a + b + c;
}
const numbers3 = [10, 20, 30];
console.log(addThreeNumbers(...numbers3));

//Combining Multiple Arrays:

function combineArrays(...arrays) {
  return [].concat(...arrays);
}

const array1st = [1, 2, 3];
const array2nd = [4, 5, 6];
const array3rd = [7, 8, 9];
const result = combineArrays(
 array1st,  array2nd, array3rd
);

console.log("Combined Array:", result);

// Multiply Function
function multiplyAllBy(num, ...args) {
  return args.map(x => x * num);
}
console.log(multiplyAllBy(2, 1, 2, 3));

// Nested Array Shallow Copy
const nestedArray = [[1, 2], [3, 4]];
const copiedNested = [...nestedArray];
copiedNested[0][0] = 99;
console.log(nestedArray, copiedNested);

// Sum Function
function sumAll(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}
console.log(sumAll(1, 2, 3, 4));

// Average Function
function average(...nums) {
  return sumAll(...nums) / nums.length;
}
console.log(average(2, 4, 6));

// First and Rest (Array)
const destructuringNumbers = [1, 2, 3, 4, 5];
const [first, ...rest] = destructuringNumbers;
console.log(first, rest);

// Skip and Rest (Array)
const colors = ["red", "green", "blue", "yellow", "black"];
const [, , ...remainingColors] = colors;
console.log(remainingColors);

// Object Destructuring with Rest
const person = {
  name: "Ali",
  age: 20,
  email: "ali@gmail.com",
  address: "Karachi"
};

const { name: personName, email: personEmail, ...restObj } = person;
console.log(personName, personEmail, restObj);

// Nested Object Destructuring
const student = {
  id: 1,
  name: "Ali",
  grades: [90, 80],
  info: { age: 20, major: "CS" }
};

const { id: studentId, info: { major }, ...restStudent } = student;
console.log(studentId, major, restStudent);

// Filter Even Numbers
function filterEven(...nums) {
  return nums.filter(n => n % 2 === 0);
}
console.log(filterEven(1, 2, 3, 4, 5, 6));

// Combine and Sort Arrays
function combineAndSort(...arrays) {
  return arrays.flat().sort((a, b) => a - b);
}
console.log(combineAndSort([3, 1], [4, 2]));

// Array Destructuring (Basic)
const fruits = ["apple", "banana", "cherry"];
const [firstFruit, secondFruit, thirdFruit] = fruits;
console.log(firstFruit, secondFruit, thirdFruit);

// Skipping Elements
const colors2 = ["red", "green", "blue", "yellow"];
const [primaryColor, , tertiaryColor] = colors2;
console.log(primaryColor, tertiaryColor);

// Rest in Array Destructuring
const numsArr = [1, 2, 3, 4, 5];
const [firstNumber, ...remainingNumbers] = numsArr;
console.log(firstNumber, remainingNumbers);

// Object Destructuring Basic
const person2 = { name: "Ali", age: 20, city: "Karachi" };
const { name: n, age: a, city: c } = person2;
console.log(n, a, c);

// Renaming Variables
const car = { make: "Toyota", model: "Civic", year: 2020 };
const { make: carMake, model: carModel, year: carYear } = car;
console.log(carMake, carModel, carYear);

// Default Values
const settings = { theme: "dark" };
const { theme, language = "English" } = settings;
console.log(theme, language);

// Array of Arrays Destructuring
const nested = [[1, 2], [3, 4], [5, 6]];
const [[nestedFirst], [nestedSecond], [nestedThird]] = nested;
console.log(nestedFirst, nestedSecond, nestedThird);

// Object within Object
const profile = {
  username: "tabish",
  details: { email: "t@gmail.com", address: "Karachi" }
};

const { username, details: { email: profileEmail, address } } = profile;
console.log(username, profileEmail, address);

// Mix Arrays and Objects
const mixedData = {
  id: 1,
  info: [{ name: "Alice" }, { age: 25 }]
};

const { id: mixedDataId, info: [{ name: mixedDataName }, { age: mixedDataAge }] } = mixedData;
console.log(mixedDataId, mixedDataName, mixedDataAge);

// Array Parameter Destructuring
function printCoordinates([x, y]) {
  console.log(x, y);
}
printCoordinates([10, 20]);

// Object Parameter Destructuring
function displayUser({ name, age }) {
  console.log(name, age);
}
displayUser({ name: "Ali", age: 20 });

// Object.keys
const book = { title: "JS", author: "ABC", year: 2020 };
console.log(Object.keys(book));

// Count Properties
const student2 = { name: "Ali", age: 20, grade: "A", school: "XYZ" };
console.log(Object.keys(student2).length);

// Iterate Keys
const product = { name: "Phone", price: 1000, category: "Electronics" };
Object.keys(product).forEach(key => {
  console.log(key, product[key]);
});

// Object.values
const movie = { title: "Inception", director: "Nolan", year: 2010, genre: "Sci-Fi" };
console.log(Object.values(movie));

// Sum Values
const scores = { math: 90, science: 80, english: 70 };
const total = Object.values(scores).reduce((a, b) => a + b, 0);
console.log(total);

// Iterate Values
const accountUser = { username: "ali", email: "a@gmail.com", location: "Karachi" };
Object.values(accountUser).forEach(val => console.log(val));

// Object.entries
const car2 = { make: "Toyota", model: "Corolla", year: 2022 };
console.log(Object.entries(car2));

// Convert Object to Array
const person3 = { firstName: "Ali", lastName: "Khan", age: 25 };
console.log(Object.entries(person3));

// Iterate Entries
const settings2 = { theme: "dark", notifications: true, privacy: "high" };
Object.entries(settings2).forEach(([key, value]) => {
  console.log(key, value);
});

// Filter Keys by Value
const inventory = { apples: 5, bananas: 20, oranges: 15, grapes: 8 };
const resultKeys = Object.keys(inventory).filter(key => inventory[key] > 10);
console.log(resultKeys);

// Convert Celsius to Fahrenheit
const temperatures = { morning: 20, afternoon: 30, evening: 25 };
const fahrenheit = Object.entries(temperatures).map(
  ([key, val]) => [key, (val * 9 / 5) + 32]
);
console.log(fahrenheit);

// Key-Value Swap
const roles = {
  admin: "Ali",
  editor: "Ahmed",
  viewer: "Sara"
};

const swapped = Object.fromEntries(
  Object.entries(roles).map(([key, value]) => [value, key])
);

console.log("Key-Value Swap:", swapped);


// Filter and Map
const number4 = [1,2,3,4,5,6,7,8,9,10];

function filterAndMap(arr, filterFn, mapFn) {
  return arr.filter(filterFn).map(mapFn);
}

const result1 = filterAndMap(
  number4,
  n => n % 2 !== 0,
  n => n * n
);

console.log("Filter and Map:", result1);


// Sort and Reduce
const words = ["apple", "banana", "cherry", "date"];

function sortAndReduce(arr, sortFn, reduceFn) {
  return arr.sort(sortFn).reduce(reduceFn);
}

const result2 = sortAndReduce(
  words,
  (a, b) => a.localeCompare(b),
  (acc, curr) => acc + curr
);

console.log("Sort and Reduce:", result2);


// Simple Callback
function greet2(name, callback) {
  const message = "Hello " + name;
  callback(message);
}

function printGreeting(msg) {
  console.log("Simple Callback:", msg);
}

greet2("Ali", printGreeting);


// Asynchronous Callback
function fetchData(callback) {
  setTimeout(() => {
    const data = "Data mil gaya";
    callback(data);
  }, 2000);
}

function displayData(data) {
  console.log("Async Callback:", data);
}

fetchData(displayData);


// Arrow Function
const add = (a, b) => a + b;

console.log("Arrow Function:", add(3, 5));


// Arrow with Map
const nums = [1,2,3,4,5];

const squared = nums.map(n => n * n);

console.log("Squared:", squared);


// Variable Scope
function outer() {
  let x = 10;

  function inner() {
    console.log("Variable Scope:", x);
  }

  inner();
}

outer();


// Closure
function createCounter() {
  let count = 0;

  return function() {
    count++;
    console.log("Counter:", count);
  };
}

const counter1 = createCounter();
const counter2 = createCounter();

counter1();
counter1();

counter2();


// Default Parameters
function greetDefault(name, message = "Hello") {
  console.log("Default Param:", message + " " + name);
}

greetDefault("Ali");
greetDefault("Ahmed", "Hi");


// Default Parameters Area
function calculateArea(width = 10, height = 5) {
  return width * height;
}

console.log("Area Default:", calculateArea());
console.log("Area Custom:", calculateArea(20, 10));