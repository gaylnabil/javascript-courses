/*****************************************
 * Reverses string values in Array
 * */
const reverseString = (str) => {
  return str === "" ? "" : reverseString(str.substring(1)) + str.charAt(0);
};

const array = ["abcdef", "wxyz", "MNOPQR"];

const result = array.map((str) => reverseString(str));

console.log("result: ", result);

document.getElementById("reverse-array-title").innerHTML =
  "Reverse Array: " + JSON.stringify(array);
document.getElementById("result-reverse-array").innerHTML =
  "Result : " + JSON.stringify(result);

/*********************************
 * get Data from Input Element
 */
let index = 0;
document.getElementById("btn-submit").onclick = () => {
  const username = document.getElementById("input-text").value;
  index++;
  document.getElementById(
    "result-input"
  ).textContent = `Result (${index}): ${username}`;
  console.log("username: ", `Result (${index}): ${username}`);
};

/** *******************************
 * Type conversion = Change the datatype of value to another
 * (string, number, boolean)
 */

let nbr = "33";

console.log(`typeof nbr is: ${typeof nbr}`);

nbr = Number(nbr) + 1;
console.log(`typeof nbr is: ${typeof nbr} and value is ${nbr}`);

/*********************************
 * Using Math in Javascript
 */
let a = 4.9;

console.log("a = ", a);
console.log("Math.round(a) = ", Math.round(a));
console.log("Math.floor(a) = ", Math.floor(a));
console.log("Math.ceil(a) = ", Math.ceil(a));

/*********************************
 * Using useful string properties and methods
 */

let username = "Nabil Gayl";

console.log("username.charAt:", username.charAt(0));
console.log("username.indexOf:", username.indexOf("l"));
console.log("username.lastIndexOf:", username.lastIndexOf("l"));
console.log("username.toLowerCase:", username.toLowerCase());
console.log("username.toUpperCase:", username.toUpperCase());
console.log("username.substring:", username.substring(3));

/*********************************
 * slice()  extract a section of a string and
 *          returns it as a new string without modifying
 *          the original string.
 */
username = "Yousra GAYL";
let firstname = username.slice(0, username.indexOf(" "));
let lastname = username.slice(username.indexOf(" ") + 1);

console.log("Full Name:", firstname + " " + lastname);

/*********************************
 *  Variable scope is where a variable is accessible
 *
 *  let = variables are limited to block scope {}
 *  var = variables are limited to a function(){}
 *
 *  global variables are declared outside any function
 *  (if global, 'var' will CHANGE browser's window properties)
 *
 * Note: it's better to use LET than VAR
 */

let value = "something";

/*********************************
 *  toLocalString() returns a string with a language
 *                  sensitive representation of this date
 *
 *  ex: number.toLocalString(locale, options);
 *     'locale' = specify that language (default value is 'undefined')
 *     'options' = object with formatting options
 */

let number = 10023.57;

const num = number.toLocaleString("en-US"); // fr-FR = 10 023.57; en-US = 10,023.57
console.log("Number: ", num);

let options = { style: "currency", currency: "USD" };

let price = number.toLocaleString("en-US", options);

console.log("Price: ", price);

number = 0.9;

options = { style: "percent", maximumFractionDigits: 2 };

let percent = number.toLocaleString("en-US", options);

console.log("Percent: ", percent);

number = 25.8;
options = { style: "unit", unit: "celsius" };

let temp = number.toLocaleString("en-US", options);

console.log("Temperature: ", temp);

/*********************************
 *  Array is a table that can store multiple values
 */

let fruits = ["apple", "orange", "banana", "apricot"];

console.log("First element: ", fruits[0]);

fruits.push("coconut"); // add element in the end

console.log("Fruits: ", fruits);

fruits.pop(); // Remove the last element

console.log("Fruits: ", fruits);
fruits.unshift("mango"); // Add element to the beginning
console.log("Fruits: ", fruits);
fruits.shift(); // Remove the first element
console.log("Fruits: ", fruits);

for (const i in fruits) {
  // Using for..in loop => 'i is the index of the element in array
  const element = fruits[i];

  console.log(`Fruits[${i}] = ${element}`);
}

console.log("*************************");
for (const fruit of fruits) {
  // Using for..of loop => 'fruit' is the element in array
  console.log(`Element = ${fruit}`);
}

/*********************************
 * Spread Operator (...array) = Allow an iterable such as an array
 *                   or string to be expanded in places where
 *                   zero or more arguments are expected
 *                   (Unpacks the elements of the array)
 */

console.log("**************************");

let numbers = [24, 70, 32, 42, 15, 60, 100, 58];

const max = Math.max(...numbers);
console.log("Max:", max);

// add all elements of the 2nd array to the 1st array
let animations = ["One piece", "Attack on Titan"];
let movies = ["One piece RED", "Conan Film", "Bleach Film"];

animations.push(...movies);

let series = ["Monster", "Death Note", "Noblesse"];

// Other method to merge 'animations' and 'series' array

let newArray = [].concat(animations, series);

console.log("newArray using concatenate:", newArray);

/*********************************
 * Rest Parameters = Represents the indefinite number of parameters
 *                   (Packs arguments into arrays)
 */
console.log("**************************");
const sum = (...args) => {
  // array.reduce() => reduces an array to a single value;
  // accumulator = Total of values
  // array.reduce(CallbackFunction(accumulator, currentValue){}, initialValue);
  return args.reduce(
    (preview, current) => preview + current,
    (initialValue = 0)
  );
};

const total = sum(70, 20, 30, 40);

console.log("Rest Parameters:", total);

const getUrl = (...args) => {
  // array.reduce() => reduces an array to a single value;
  // accumulator = Total of values
  // array.reduce(CallbackFunction(accumulator, currentValue){}, initialValue);
  return args.join("/", args);
};

const urlPath = getUrl("wholesalers", 1, "stocks", "beers");

console.log("URL args Parameters:", urlPath);

/*********************************
 * Callback = A function passed as argument
 *            to another function.
 *    Ensures that the function is not going to rub
 *    before a task is completed.
 *    Helps us develop asynchronous code.
 *    (When one function has to wait for a task to complete)
 *    that helps us avoid errors and potential problems
 *    Ex: Wait for a file to load
 */
console.log("**************************");
const subtraction = (a, b, func) => {
  func(a - b);
};

const displayResult = (result) => {
  console.log("Results of callback passed as argument:", result);
};

subtraction(168, 33, displayResult);

/*********************************
 * array.forEach() = method executes a provided function one
 *                   for each element in the array.
 * */

console.log("**************************");
let names = ["chris", "vanessa", "nabil"];

const capitalize = (element, index, array) => {
  array[index] = element[0].toUpperCase() + element.substr(1);
};

names.forEach(capitalize);

console.log("Using array.forEach() to capitalize the name", names);

/*********************************
 * array.map() = method executes a provided callback function
 *                   for each element in the array and create
 *                   a new array.
 * */
console.log("**************************");

let data = [2, 3, 4, 5, 6, 7, 8, 9, 10];

const squares = data.map((number) => Math.pow(number, 2));

console.log("Using array.map() to square every numbers:", squares);

/*********************************
 * array.filter() = Creates a new array elements with specific
 *                  condition provided by the function.
 * */
console.log("**************************");

const pairs = data.filter((number) => number % 2 == 0);
console.log("Using array.filter() to get pair numbers:", pairs);

/*********************************
 * function expression = Allows us to create an anonymous function
 *                       that doesn’t have any function name
 * */
console.log("**************************");

const greeting = function () {
  console.log("Hello world!");
};

greeting();

/*********************************
 * Arrow function = Compact alternative to traditional function expression
 * */
console.log("**************************");

const sayHello = (name) => {
  console.log(`Hello ${name}`);
};

sayHello("Nabil");

/*********************************
 * Nested function = Functions inside other functions.
 *                   Outer functions have access to inner functions
 *                   Inner functions are "hidden" from outside
 *                   the outer function.
 *                   used in closures
 * */
console.log("**************************");

const login = (username, userInbox) => {
  const displayUsername = (name) => {
    console.log(`Welcome ${name}`);
  };
  const displayUserInbox = (number) => {
    console.log(`You have ${number} new messages`);
  };

  displayUsername(username);
  displayUserInbox(userInbox);
};

login("Sakazaki", 22);

/*********************************
 * Map = Object that holds key/value pairs of any data type.
 * */
console.log("**************************");

const dataStore = new Map([
  ["t-shirt", 25],
  ["socks", 10],
  ["underwear", 19],
]);

console.log("dataStore.get('t-shirt'):", dataStore.get("t-shirt"));

dataStore.set("hat", 30); // add pair element in Map Object
dataStore.delete("hat"); // delete pair element with key in Map Object

console.log("dataStore.has('socks'):", dataStore.has("socks"));

dataStore.forEach((value, key) => {
  console.log(`Name: ${key} => Price: ${value}`);
});

/*********************************
 * Object = A group of attributes and methods properties.
 * */
console.log("**************************");

const car = {
  model: "Audit",
  color: "Blue",
  year: 2023,

  drive: function () {
    console.log(`You drive the car ${this.model}`);
  },
  brake: function () {
    console.log("You step on the brakes");
  },
};

console.log(`Car: ${car.model}, ${car.color}, ${car.year}`);

car.drive();

/*********************************
 * Object = A blueprint for creating objects.
 *          define what properties and methods
 *          they have to use constructor for unique properties.
 * */
console.log("**************************");

class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  get Name() {
    return this._name;
  }

  set Name(name) {
    this._name = name;
  }

  get Age() {
    return this._age;
  }

  set Age(age) {
    this._age = age;
  }
  toString() {
    return `${this.Name} => ${this.Age}`;
  }
}

class User extends Person {
  constructor(name, age, email) {
    super(name, age);

    this._email = email;
  }

  get Email() {
    return this._email;
  }

  toString() {
    return `${super.toString()} => ${this.Email}`;
  }
}

const usr = new User("Nabil", 38, "gaylnabil@gmail.com");

console.log(usr.toString());

/*********************************
 * error = Object with a description of something wrong
 * throw = exception thrown an user defined error message
 * */
console.log("**************************");

try {
  let x = 12;
  let y = 0;
  const r = x / y;

  if (y == 0) throw new Error("Could not divide by zero !!!");

  console.log("Result Divide:", r);
} catch (error) {
  console.error("Error Divide:", error);
} finally {
  console.log("This always Executes in finally block");
}

/*********************************
 * setTimeout() = Invokes after number of milliseconds
 *                It's asynchronous function
 *                (Does not pause execution)
 * */

console.log("**************************");
const GetDateTime = () => {
  document.getElementById("result-time").innerHTML = "";
  setTimeout(() => {
    const date = new Date();
    document.getElementById("result-time").innerHTML =
      date.toLocaleString("en-US");
  }, 2000);
};

document.getElementById("btn-time").onclick = function () {
  GetDateTime();
};

/*********************************
 * setInterval() = Method calls a function at specified intervals
 *                 (in milliseconds).
 *                 Continues calling the function until
 *                 clearInterval() is called or the window is closed.
 **/

console.log("**************************");

const CurrentDateTime = () => {
  setInterval(() => {
    const date = new Date();
    document.getElementById("result-refresh-time").innerHTML =
      date.toLocaleString("en-US");
  }, 1000);
};

CurrentDateTime();
