const sayHello = function (name) {
  console.log("Hello, " + name);
}

sayHello("kitty");
sayHello("puppy");
sayHello("squirrel")


// this is an eample of PRINTING to the console.
const sayHelloToConsole = function (name) {
  console.log("Hello, " + name);
}

sayHelloToConsole('John');


const returnSayHello = function (name) {
  return "Hello, " + name;
}

const greeting = returnSayHello('jonnyboy')

console.log(greeting);