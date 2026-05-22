// Global Scope
var globalVar = "I'm global var";
let globalLet = "I'm global let";
const globalConst = "I'm global const";

console.log(globalVar);
console.log(globalLet);
console.log(globalConst);

// Function Scope
function myFunction() {
    var functionVar = "I'm function var";
    let functionLet = "I'm function let";
    const functionConst = "I'm function const";
    console.log(functionVar);
    console.log(functionLet);
    console.log(functionConst);
}
myFunction();

// Block Scope
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

// Hoisting With Var
console.log(hoistedVar); // undefined (not ReferenceError)
var hoistedVar = "I'm hoisted var";
console.log(hoistedVar); // "I'm hoisted var"

// Hoisting With Let
// console.log(hoistedLet); Uncaught ReferenceError: Cannot access 'hoistedLet' before initialization
let hoistedLet = "I'm hoisted let";
console.log(hoistedLet); // "I'm hoisted let"

// Hoisting With Const
// console.log(hoistedConst); Uncaught ReferenceError: Cannot access 'hoistedConst' before initialization
const hoistedConst = "I'm hoisted const";
console.log(hoistedConst); // "I'm hoisted const"

// Redeclaration

var redeclareVar = "First declaration";
var redeclareVar = "Second declaration";
console.log(redeclareVar); // "Second declaration"

// let redeclareLet = "First declaration";
// let redeclareLet = "Second declaration"; // Uncaught SyntaxError: Identifier 'redeclareLet' has already been declared

// const redeclareConst = "First declaration";
// const redeclareConst = "Second declaration"; // Uncaught SyntaxError: Identifier 'redeclareConst' has already been declared

// Reassignment

var reassignVar = "Initial value";
reassignVar = "Reassigned value";
console.log(reassignVar); // "Reassigned value"

let reassignLet = "Initial value";
reassignLet = "Reassigned value";
console.log(reassignLet); // "Reassigned value"

const reassignConst = "Initial value";
// reassignConst = "Reassigned value"; // Uncaught TypeError: Assignment to constant variable.
console.log(reassignConst); // "Initial value"

// TDZ (Temporal Dead Zone)

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

// When To Use Var, Let, And Const

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

// String Interpolation

const firstName = "Ahmed";
const lastName = "Ali";
const fullName = `${firstName} ${lastName}`;
console.log(fullName);

// Multi-Line Strings
const multiLineString = `Name: Ali
Age: 20
City: Karachi`;
console.log(multiLineString);

// Simple Expressions

const x = 5;
const y = 10;
const sum = `${x} + ${y} = ${x + y}`;
console.log(sum);

// Function Calls

const multiply = (a, b) => a * b;
console.log(`Product of 8 and 7 is ${multiply(8, 7)}`);

// Tagged Template Literals

// Simple Tagged Template
function logTag(strings) {
  console.log(strings[0]); // "Hello World"
}

logTag`Hello World`;


// Uppercase Formatting Tag
function upperTag(strings) {
  return strings[0].toUpperCase();
}

console.log(upperTag`hello world`);

// Conditional Logic

const hours= new Date().getHours();
const greeting = hours < 12 ? "Good Morning" : "Good Afternoon";
console.log(greeting);

// Looping With Template Literals

let itemList = ["Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig", "Grape", "Honeydew", "Indian Fig", "Jackfruit"];
let htmlList = `<ul>
${itemList.map(item => `<li>${item}</li>`).join('')}
</ul>`;
document.writeln(htmlList);

// Escaping Backticks

const escaped = `The backtick character is \` like this`;
console.log(escaped);

// Nesting Template Literals

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

// Simple Condition

let age=22;
let canVote = age >= 18 ? "Yes, you can vote!" : "No, you cannot vote.";
console.log(canVote);

// Even Or Odd

let number=154;
let evenOrOdd= number%2===0 ? 'Even Number': 'Odd Number';
console.log(evenOrOdd);

// Grade Evaluation

let studentMarks=45;
let grade= studentMarks >= 90 ? 'A+' : studentMarks >= 80 ? 'A' : studentMarks >= 70 ? 'B' : studentMarks >= 60 ? 'C' :studentMarks >= 50 ? 'D' : 'F';
console.log(`Your grade is: ${grade}`);

// Login Check

function checkLogin() {
  let username = document.getElementById("username").value;
  let isLoggedIn = username !== "";
  let statusMessage = isLoggedIn ? "Welcome back!" : "Please log in";
  document.getElementById("message").innerText = statusMessage;
}

// Discount Eligibility
let isMember = true;
let purchaseAmount = 250;

let discount = (isMember && purchaseAmount > 100) 
  ? purchaseAmount * 0.10 
  : 0;

console.log(discount);

// Determine Max Value

function maxValue(a, b) {
  return a > b ? a : b;
}
console.log(maxValue(10, 20));

// Greeting Message

function greet(name) {
  return name ? `Hello, ${name}!` : "Hello, guest!";
}
console.log(greet("Ali"));
console.log(greet(""));
console.log(greet());


// Mapping Values

let numbers =[1,2,3,4,5,6,7,8,9,10];
let newNumbers =numbers.map(num => num % 2 === 0 ? num * 2 : num * 3);
console.log(newNumbers);

// Filtering Values

const stringArray = ["cat", "elephant", "dog", "tiger", "bird", "butterfly"];
const longStrings = stringArray.filter(str => str.length > 3);
console.log("Original array:", stringArray);
console.log("Strings with length > 3:", longStrings);

// Copying An Array

const originalArray = [10, 20, 30, 40, 50];
const copiedArray = [...originalArray];
console.log("Original Array:", originalArray);
console.log("Copied Array:", copiedArray);
console.log("Same reference?", originalArray === copiedArray);

// Merging Arrays

const arrayA = [1, 2, 3];
const arrayB = [4, 5, 6];
const mergedArray = [...arrayA, ...arrayB];
console.log(arrayA);
console.log(arrayB);
console.log(mergedArray);



// Adding Elements To Array
const numbers2 = [20, 30, 40];
console.log(numbers2);
const updatedNumbers = [10, ...numbers2, 50];
console.log(updatedNumbers);

// Copying An Object
const originalObject = {
  name: "Ali",
  age: 20,
  city: "Karachi"
};
const copiedObject = { ...originalObject };
console.log("Original Object:", originalObject);
console.log("Copied Object:", copiedObject);
console.log("Same reference?", originalObject === copiedObject);

// Merging Objects

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

// Updating Object Properties

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

// Passing Array Elements As Arguments

function addThreeNumbers(a, b, c) {
  return a + b + c;
}
const numbers3 = [10, 20, 30];
console.log(addThreeNumbers(...numbers3));

// Combining Multiple Arrays

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

// First And Rest (Array)
const destructuringNumbers = [1, 2, 3, 4, 5];
const [first, ...rest] = destructuringNumbers;
console.log(first, rest);

// Skip And Rest (Array)
const colors = ["red", "green", "blue", "yellow", "black"];
const [, , ...remainingColors] = colors;
console.log(remainingColors);

// Object Destructuring With Rest
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

// Combine And Sort Arrays
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

// Rest In Array Destructuring
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

// Array Of Arrays Destructuring
const nested = [[1, 2], [3, 4], [5, 6]];
const [[nestedFirst], [nestedSecond], [nestedThird]] = nested;
console.log(nestedFirst, nestedSecond, nestedThird);

// Object Within Object
const profile = {
  username: "tabish",
  details: { email: "t@gmail.com", address: "Karachi" }
};

const { username, details: { email: profileEmail, address } } = profile;
console.log(username, profileEmail, address);

// Mix Arrays And Objects
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

// Convert Object To Array
const person3 = { firstName: "Ali", lastName: "Khan", age: 25 };
console.log(Object.entries(person3));

// Iterate Entries
const settings2 = { theme: "dark", notifications: true, privacy: "high" };
Object.entries(settings2).forEach(([key, value]) => {
  console.log(key, value);
});

// Filter Keys By Value
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


// Filter And Map
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


// Sort And Reduce
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


// Arrow With Map
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

// Square Numbers
const numbers1 = [1, 2, 3, 4, 5];
const squared = numbers1.map(n => n * n);
console.log(squared);

// Uppercase
const words1 = ["apple", "banana", "cherry"];
const upper = words1.map(w => w.toUpperCase());
console.log(upper);

// Filter Even Numbers
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evens = numbers2.filter(n => n % 2 === 0);
console.log(evens);

// Filter Long Words
const words2 = ["apple", "banana", "cherry", "date"];
const longWords = words2.filter(w => w.length > 5);
console.log(longWords);

// For Each Numbers
const numbers3 = [1, 2, 3, 4, 5];
numbers3.forEach(n => console.log(n));

// For Each Word Length
const words3 = ["apple", "banana", "cherry"];
words3.forEach(w => console.log(w.length));

// Sum Of Numbers
const sumArr = [1, 2, 3, 4, 5];
const sum = sumArr.reduce((acc, val) => acc + val, 0);
console.log(sum);

// Concat Strings
const words4 = ["Hello", "world", "this", "is", "JavaScript"];
const sentence = words4.reduce((acc, val) => acc + " " + val);
console.log(sentence);

// Some (Even Check)
const arr1 = [1, 3, 5, 7, 8];
console.log(arr1.some(n => n % 2 === 0));

// Some (Long Word)
const arr2 = ["apple", "banana", "cherry", "date"];
console.log(arr2.some(w => w.length > 5));

// Every (All Even)
const arr3 = [2, 4, 6, 8, 10];
console.log(arr3.every(n => n % 2 === 0));

// Every (All Long Words)
const arr4 = ["elephant", "giraffe", "hippopotamus"];
console.log(arr4.every(w => w.length > 5));

// Find First Even
const arr5 = [1, 3, 5, 7, 8];
console.log(arr5.find(n => n % 2 === 0));

// Find Long Word
const arr6 = ["apple", "banana", "cherry", "date"];
console.log(arr6.find(w => w.length > 5));

// Find Index Even
console.log(arr5.findIndex(n => n % 2 === 0));

// Find Index Long Word
console.log(arr6.findIndex(w => w.length > 5));

// Simple Promise
function delay(ms) {
  return new Promise(resolve => {
    setTimeout(() => resolve("Hello, world!"), ms);
  });
}

delay(2000).then(console.log);

// Promise Chain
function fetchData() {
  return Promise.resolve({ id: 1, name: "Ali" });
}

fetchData().then(data => console.log(data));

// Error Handling
function fetchUserData() {
  return new Promise((resolve, reject) => {
    const user = { name: "Ali" };

    if (!user.age) reject("Age missing");
    else resolve(user);
  });
}

fetchUserData()
  .then(console.log)
  .catch(console.log);

// Network Request
function getWeather() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.5;

      if (success) resolve("Sunny Weather");
      else reject("Weather API failed");
    }, 1000);
  });
}

getWeather()
  .then(console.log)
  .catch(console.log);

  // Say Hello
async function sayHello() {
  const msg = await delay(2000);
  console.log(msg);
}

sayHello();

// Get User Data
async function getUserData() {
  try {
    const data = await fetchUserData();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

getUserData();

// Fetch User + Posts
function fetchUser() {
  return Promise.resolve({ id: 1, name: "Ali", age: 20 });
}

function fetchPosts() {
  return Promise.resolve(["Post 1", "Post 2", "Post 3"]);
}

async function getUserAndPosts() {
  const user = await fetchUser();
  const posts = await fetchPosts(user.id);

  console.log(user);
  console.log(posts);
}

getUserAndPosts();

// Error Handling
async function getUserInfo() {
  try {
    const user = await fetchUser();
    if (!user) throw new Error("User not found");
    console.log(user);
  } catch (err) {
    console.log(err.message);
  }
}

getUserInfo();

// API Calls
function apiCall() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(Math.floor(Math.random() * 100));
    }, Math.random() * 1000);
  });
}

async function getData() {
  try {
    const a = await apiCall();
    console.log(a);

    const b = await apiCall();
    console.log(b);

    const c = await apiCall();
    console.log(c);
  } catch (err) {
    console.log(err);
  }
}

getData();
