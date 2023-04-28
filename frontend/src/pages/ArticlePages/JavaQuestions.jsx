import React from "react";

function JavaQuestions() {
  const questions = [
    {
      id: 1,
      question: "What is Java?",
      answer:
        "Java is a high-level, object-oriented, platform-independent programming language that is used to create a variety of applications, from simple desktop programs to complex enterprise systems.",
    },
    {
      id: 2,
      question: "What are the basic data types in Java?",
      answer:
        "Java has eight primitive data types: byte, short, int, long, float, double, boolean, and char.",
    },
    {
      id: 3,
      question: "What is the difference between a class and an object?",
      answer:
        "A class is a blueprint for creating objects, while an object is an instance of a class.",
    },
    {
      id: 4,
      question: "What is inheritance in Java?",
      answer:
        "Inheritance is a mechanism in Java that allows one class to inherit the properties and methods of another class.",
    },
    {
      id: 5,
      question:
        "What is the difference between an abstract class and an interface?",
      answer:
        "An abstract class is a class that cannot be instantiated and can contain both abstract and non-abstract methods, while an interface is a collection of abstract methods that define a contract for implementing classes.",
    },
    {
      id: 6,
      question: "What is a package in Java?",
      answer:
        "A package is a way of organizing related classes and interfaces in Java.",
    },
    {
      id: 7,
      question: "What is a constructor in Java?",
      answer:
        "A constructor is a special method that is called when an object is created and is used to initialize its state.",
    },
    {
      id: 8,
      question: "What is method overloading in Java?",
      answer:
        "Method overloading is a feature in Java that allows multiple methods with the same name but different parameters to exist in the same class.",
    },
    {
      id: 9,
      question:
        "What is the difference between static and non-static methods in Java?",
      answer:
        "Static methods belong to the class and can be called without creating an instance of the class, while non-static methods belong to an object of the class and can only be called through an instance of the class.",
    },
    {
      id: 10,
      question: "What is the purpose of the final keyword in Java?",
      answer:
        "The final keyword is used to make a variable, method, or class immutable or unchangeable.",
    },
    {
      id: 11,
      question: "What is a thread in Java?",
      answer:
        "A thread is a lightweight process that can run concurrently with other threads in a program.",
    },
    {
      id: 12,
      question: "What is a synchronized block in Java?",
      answer:
        "A synchronized block is a section of code that is executed by only one thread at a time, to prevent data corruption in a multi-threaded environment.",
    },
    {
      id: 13,
      question: "What is exception handling in Java?",
      answer:
        "Exception handling is a mechanism in Java that allows a program to handle errors or exceptions in a graceful and controlled manner.",
    },
    {
      id: 14,
      question: "What is a collection in Java?",
      answer:
        "A collection is a framework in Java that provides an interface for storing and manipulating a group of objects.",
    },
    {
      id: 15,
      question: "What is the difference between a list and a set in Java?",
      answer:
        "A list is an ordered collection that allows duplicate elements, while a set is an unordered collection that does not allow duplicate elements.",
    },
    {
      id: 16,
      question: "What is the purpose of the equals() method in Java?",
      answer:
        "The equals() method is used to compare the equality of two objects based on their values.",
    },
    {
      id: 17,
      question: "What is a lambda expression in Java?",
      answer:
        "A lambda expression is a short block of code that represents a function and can be used as a parameter or return value in a method.",
    },
    {
      id: 18,
      question: "What is the purpose of the static keyword in Java?",
      answer:
        "The static keyword is used to make a variable or method belong to the class rather than an instance of the class.",
    },
    {
      id: 19,
      question: "What is the purpose of the this keyword in Java?",
      answer:
        "The this keyword is used to refer to the current object in a class\nWhat is the difference between Comparable and Comparator in Java?",
    },
    {
      id: 20,
      question: "What is the difference between Comparable and Comparator?",
      answer:
        "Comparable and Comparator are two interfaces in Java that are used to sort collections of objects. Comparable is used to define the natural ordering of a class, while Comparator is used to define custom ordering of objects.",
    },
  ];

  return (
    <div>
      <p>
        This is an article aimed at preparing Java developers for their upcoming
        interviews. The article covers the most commonly asked Java interview
        questions and provides detailed explanations for each question, along
        with sample code and best practices. From core Java concepts to advanced
        topics like multi-threading, exception handling, and design patterns,
        this guide covers all the essential aspects of Java development that
        interviewers typically test candidates on. Whether you're a beginner or
        an experienced Java developer, this guide will help you gain confidence
        and land your dream job.
      </p>
      {questions.map((question) => (
        <div key={question.id}>
          <p>{question.question}</p>
          <p> {question.answer}</p>
        </div>
      ))}
    </div>
  );
}

export default JavaQuestions;
