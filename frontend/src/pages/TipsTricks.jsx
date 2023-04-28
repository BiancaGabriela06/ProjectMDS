import React from "react";
import ArticlesGrid from "../components/ArticleGrid";
import "../css/Article.css";

const TipsTricks = () => {
  const pythonImg = require("../images/python-icon.png");
  const javaImg = require("../images/java-icon.png");
  const javascriptImg = require("../images/javascript-icon.png");
  const articles = [
    {
      id: 1,
      title: "Getting Started with NumPy: A Comprehensive Guide",
      author: "Antonio Radu",
      date: "April 26, 2023",
      content:
        "NumPy is a powerful library for numerical computing in Python that provides a high-performance multidimensional array object, tools for working with these arrays, and a large collection of mathematical functions to operate on them. Whether you're a data scientist, engineer, or hobbyist, NumPy is an essential tool for scientific computing in Python. This comprehensive guide is designed to help you get started with NumPy and become proficient in its use. We'll cover the basics of NumPy's array object, explain how to create and manipulate arrays, and explore NumPy's mathematical functions and statistical tools. By the end of this guide, you'll have a solid understanding of NumPy and be ready to use it in your own data analysis, scientific computing, and machine learning projects.",
      page: "/ArticlePages/NpGuide",
      image: pythonImg,
    },
    {
      id: 2,
      title: "How to Use Decorators in Python: A Beginner's Guide",
      author: "Antonio Radu",
      date: "April 27, 2023",
      content:
        "Decorators are one of the most powerful and useful features of Python, allowing you to modify the behavior of functions or classes without changing their source code. In simple terms, decorators are functions that take another function as input and return a new function that extends or modifies the behavior of the original function. They are commonly used for tasks such as logging, caching, authentication, and profiling, and can make your code more readable, efficient, and maintainable. This beginner's guide will introduce you to the concept of decorators in Python, explain how to use them, and provide practical examples to help you understand their power and flexibility. Whether you're a beginner or an experienced Python programmer, decorators are a powerful tool to add to your arsenal.",
      page: "/ArticlePages/Decorators",
      image: pythonImg,
    },
    {
      id: 3,
      title: "Top 20 Java Interview Questions and Answers",
      author: "Bianca Asavoaei",
      date: "May 1, 2023",
      content:
        "This is an article aimed at preparing Java developers for their upcoming interviews. The article covers the most commonly asked Java interview questions and provides detailed explanations for each question, along with sample code and best practices. From core Java concepts to advanced topics like multi-threading, exception handling, and design patterns, this guide covers all the essential aspects of Java development that interviewers typically test candidates on. Whether you're a beginner or an experienced Java developer, this guide will help you gain confidence and land your dream job.",
      page: "/ArticlePages/JavaQuestions",
      image: javaImg,
    },
    {
      id: 4,
      title: "5 Differences between arrow functions and regular functions",
      author: "Andrada Duluman",
      date: "April 21, 2023",
      content:
        "Arrow functions have become increasingly popular in JavaScript in recent years due to their concise syntax and their ability to capture the this value of their enclosing context. However, there are still some differences between arrow functions and regular functions that developers should be aware of. In this article, we will explore five key differences between arrow functions and regular functions in JavaScript.",
      page: "/ArticlePages/JsFunctions",
      image: javascriptImg,
    },
    {
      id: 5,
      title: "Lambda expressions in Java",
      author: "Antonio Radu",
      date: "April 30, 2023",
      content:
        "Lambda expressions were introduced in Java 8 and have since become a popular way of writing more concise and functional code. They provide a simple syntax for implementing functional interfaces and enable developers to write more expressive and readable code. In this article, we will dive into the world of lambda expressions in Java, exploring their syntax, benefits, and common use cases. Whether you are new to Java or an experienced developer looking to improve your code, this article will provide a comprehensive overview of lambda expressions in Java.",
      page: "/ArticlePages/JavaLambda",
      image: javaImg,
    },
    {
      id: 6,
      title: "Object-Oriented Programming (OOP) in Python",
      author: "Antonia Popovici",
      date: "May 1, 2023",
      content:
        "OOP is a fundamental programming concept that allows developers to organize code into reusable and modular structures. Python supports OOP concepts such as classes, objects, inheritance, and polymorphism, making it a popular language for building large-scale applications. In this article, you could explore the basics of OOP in Python, including creating classes and objects, defining methods and attributes, and implementing inheritance and polymorphism. You could also provide examples of how to apply OOP principles to solve real-world programming problems. This topic is suitable for intermediate level developers who want to deepen their understanding of Python and OOP.",
      page: "/ArticlePages/PythonOOP",
      image: pythonImg,
    },
    {
      id: 7,
      title: "Promises in JavaScript",
      author: "Bianca Asavoaei",
      date: "April 26, 2023",
      content:
        "Asynchronous programming is a key aspect of modern web development, allowing developers to create responsive and efficient applications. Promises are a powerful feature in JavaScript that simplify asynchronous code by providing a way to handle callbacks and manage the flow of data. In this article, we will dive into the world of Promises in JavaScript, exploring their syntax, benefits, and common use cases. We will look at how Promises work, how to create and consume them, and how to handle errors and multiple Promises using Promise.all and Promise.race. Whether you are new to JavaScript or an experienced developer looking to improve your async programming skills, this article will provide a comprehensive overview of Promises in JavaScript.",
      page: "/ArticlePages/JsPromise",
      image: javascriptImg,
    },
    {
      id: 8,
      title: "Java threads tutorial",
      author: "Antonia Popovici",
      date: "April 4, 2023",
      content:
        "Multithreading is an essential feature of Java that enables developers to create concurrent and parallel applications. Java threads allow multiple tasks to be executed simultaneously within a single program, improving performance and responsiveness. In this Java threads tutorial, we will explore the basics of multithreading in Java, including creating and starting threads, synchronizing thread access to shared resources, and using thread pools to manage thread execution. We will also discuss common thread-related issues such as deadlocks, race conditions, and starvation, and how to avoid them using synchronization techniques. Whether you are new to Java or an experienced developer looking to improve your multithreading skills, this tutorial will provide a comprehensive overview of Java threads and their applications.",
      page: "/ArticlePages/JavaThreads",
      image: javaImg,
    },
    {
      id: 9,
      title: "Mastering RegEx in JavaScript: A Comprehensive Guide",
      author: "Bianca Asavoaei",
      date: "May 2, 2023",
      content:
        "Regular Expressions (RegEx) are a powerful feature in JavaScript that allow developers to work with text data in a flexible and efficient way. However, for many developers, RegEx can be a challenging topic to master. In this comprehensive guide, we will dive into the world of RegEx in JavaScript, exploring their syntax, benefits, and common use cases. We will start with the basics of RegEx, including the syntax for creating patterns and using metacharacters, before moving on to more advanced topics such as lookahead and lookbehind assertions, backreferences, and quantifiers.",
      page: "/ArticlePages/JsRegex",
      image: javascriptImg,
    },
    {
      id: 10,
      title: "Java collections tutorial",
      author: "Andrada Duluman",
      date: "April 18, 2023",
      content:
        "Collections are an essential aspect of Java programming, providing a way to manage groups of objects efficiently and easily. Java collections framework provides a set of interfaces and classes that allow developers to manipulate collections of objects, such as lists, maps, and sets. In this Java collections tutorial, we will explore the basics of collections in Java, including creating and manipulating lists, sets, and maps, and how to use different collection types to suit specific programming requirements. We will also cover the common operations and algorithms associated with collections, such as sorting, searching, and filtering. Whether you are new to Java programming or an experienced developer looking to improve your skills, this tutorial will provide a comprehensive overview of Java collections and their applications.",
      page: "/ArticlePages/JavaCollections",
      image: javaImg,
    },
    {
      id: 11,
      title: "Python for Game Development",
      author: "Antonio Radu",
      date: "April 15, 2023",
      content:
        "Python is a versatile programming language that has become increasingly popular for game development. Its simplicity and ease-of-use make it an excellent choice for beginners, while its powerful libraries and frameworks make it a great choice for more experienced developers as well. In this article, we will explore how to use Python and the Pygame library to build 2D games. We will cover topics like creating game objects, handling user input, and using collision detection to make games that are fun and engaging. Whether you're a beginner looking to get started with game development or an experienced developer looking to try a new language, this article is the perfect place to start.",
      page: "/ArticlePages/PythonGame",
      image: pythonImg,
    },
  ];

  return (
    <div>
      <div className="welcome-message">
        <h1 className="he">Welcome to our Programming Tips and Tricks</h1>
        <p className="pa">
          Here, you'll find a wealth of information about programming, software
          development, and technology. Our articles cover a wide range of
          topics, from beginner-level tutorials to advanced programming
          techniques. Whether you're a seasoned developer or just starting out,
          we hope you'll find our articles helpful and informative.
        </p>
      </div>

      <div style={{ marginBottom: "50px" }}>
        <ArticlesGrid articles={articles} />
      </div>
    </div>
  );
};

export default TipsTricks;
