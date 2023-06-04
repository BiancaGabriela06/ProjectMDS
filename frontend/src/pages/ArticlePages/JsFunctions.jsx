import React from "react";
import ArticleHeader from "../../components/ArticleHeader";
import Post from "../../components/Post";

/**
 * this article is about a comparison with javascript 
 * regular functions vs arrow functions and here are
 * some exemple in which they differ
 */

function JsFunctions() {
  return (
    <div style={{ marginBottom: "70px" }}>
      <ArticleHeader
        title={`5 Differences between arrow functions and regular functions`}
        subtitle={`Introduction to Arrow Functions and Regular Functions`}
      ></ArticleHeader>

      <Post
        title={`Andrada Duluman`}
        content={`Arrow functions have become increasingly popular in JavaScript in recent years due to their concise syntax and their ability to capture the this value of their enclosing context. However, there are still some differences between arrow functions and regular functions that developers should be aware of. In this article, we will explore five key differences between arrow functions and regular functions in JavaScript.`}
      ></Post>
      <Post
        title={`1. Syntax`}
        content={`The syntax of arrow functions is different from that of regular functions. Arrow functions are defined using the => syntax, whereas regular functions are defined using the function keyword.

Here's an example of a regular function vs an arraw function:`}
        code={`function greet1(name) {
  return "Hello, " + name + "!";
}
const greet2 = (name) => {
  return "Hello, " + name + "!";
}

greet1("Gigel");
greet2("Maria");
`}
        language={`javascript`}
        result={`Hello,  Gigel!
Hello, Maria!`}
      ></Post>
      <Post
        title={`2. this keyword`}
        content={`The this keyword in JavaScript refers to the object that the function belongs to. Arrow functions and regular functions handle the this keyword differently.

In regular functions, the value of this is determined by how the function is called. If the function is called as a method of an object, this refers to that object. However, if the function is called without an object, this refers to the global window object.

Here's an example of a regular function that uses the this keyword:`}
        code={`const person = {
  name: "John",
  greet: function() {
    console.log("Hello, my name is " + this.name + ".");
  }
};

person.greet();
`}
        language={`javascript`}
        result={`Hello, my name is John.`}
      ></Post>
      <Post
        title={``}
        content={`Arrow functions, on the other hand, do not have their own this keyword. Instead, they use the this keyword from the surrounding lexical scope. This means that arrow functions are not suitable for methods that need access to the object they belong to.

Here's an example of an arrow function that uses the this keyword:`}
        code={`const person = {
  name: "John",
  greet: () => {
    console.log("Hello, my name is " + this.name + ".");
  }
};

person.greet();"
`}
        language={`javascript`}
        result={`Hello, my name is undefined`}
      ></Post>
      <Post
        title={`3. Arguments object`}
        content={`The arguments object in JavaScript is an array-like object that contains all the arguments passed to a function. Regular functions have access to the arguments object, but arrow functions do not.

Here's an example of a regular function that uses the arguments object:`}
        code={`function sum() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

sum(1, 2, 3);
`}
        language={`javascript`}
        result={`6`}
      ></Post>
      <Post
        title={``}
        content={`Here's an example of an arrow function that tries to use the arguments object:`}
        code={`const sum = () => {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

sum(1, 2, 3);
`}
        language={`javascript`}
        result={`Uncaught ReferenceError: arguments is not defined`}
      ></Post>
      <Post
        title={`4. Return statements`}
        content={`In regular functions, you can use the return statement to return a value from the function. In arrow functions, the return statement is optional if the function body consists of a single expression.

Here's an example of a regular function with a return statement vs an arrow function without a return statement`}
        code={`function square1(x) {
  return x * x;
}
const square2 = (x) => x * x;

square1(3);
square2(5); 
`}
        language={`javascript`}
        result={`9
25`}
      ></Post>
      <Post
        title={`5. Use cases`}
        content={`Arrow functions are generally used for shorter, simpler functions, whereas regular functions are used for more complex functions.

For example, arrow functions are often used as callbacks in array methods like map, filter, and reduce. Here's an example of using an arrow function with the map method:`}
        code={`const numbers = [1, 2, 3, 4];

const doubled = numbers.map((num) => num * 2);

console.log(doubled);
`}
        language={`javscript`}
        result={`[2, 4, 6, 8]`}
      ></Post>
      <Post
        title={``}
        content={`Regular functions, on the other hand, are used for more complex tasks, such as defining object methods, constructors, and event handlers.`}
        code={`function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.start = function() {
    console.log("Starting the " + this.make + " " + this.model + ".");
  }
}

const myCar = new Car("Toyota", "Corolla", 2020);

myCar.start();
`}
        language={`javascript`}
        result={`Starting the Toyota Corolla.`}
      ></Post>
      <Post
        title={`Conclusion`}
        content={`In conclusion, arrow functions and regular functions have different syntax, handle the this keyword differently, have different access to the arguments object, handle return statements differently, and have different use cases. Understanding the differences between these two types of functions will help you write more efficient and concise JavaScript code.`}
      ></Post>
    </div>
  );
}

export default JsFunctions;
