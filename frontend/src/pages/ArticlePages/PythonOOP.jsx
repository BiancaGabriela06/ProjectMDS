import React from "react";
import ArticleHeader from "../../components/ArticleHeader";
import Post from "../../components/Post";

/**
 * here we have an article about Object Oriented Programing
 * in Python and we cover basic classes and object creations
 * and some other usefull stuff specific to python
 */

function PythonOOP() {
  return (
    <div style={{ marginBottom: "70px" }}>
      <ArticleHeader
        title={`Object-Oriented Programming (OOP) in Python`}
        subtitle={`Python OOP Demystified: A Hands-On Guide to Object-Oriented Programming`}
      ></ArticleHeader>
      <Post
        title={`Antonia Popovici`}
        content={`OOP is a fundamental programming concept that allows developers to organize code into reusable and modular structures. Python supports OOP concepts such as classes, objects, inheritance, and polymorphism, making it a popular language for building large-scale applications. In this article, you could explore the basics of OOP in Python, including creating classes and objects, defining methods and attributes, and implementing inheritance and polymorphism. You could also provide examples of how to apply OOP principles to solve real-world programming problems. This topic is suitable for intermediate level developers who want to deepen their understanding of Python and OOP.`}
      ></Post>
      <Post
        title={`Classes`}
        content={`In Python, a class is a blueprint or a template for creating objects. A class can contain data and functions, which are called attributes and methods, respectively. In this example, we define a class called Person that has two attributes, name and age, and one method, greet(). The __init__() method is a special method that gets called when an object of the class is created. The self parameter refers to the object that is being created:`}
        code={`class Person:
  def __init__(self, name, age):
      self.name = name
      self.age = age

  def greet(self):
      print(f"Hello, my name is {self.name} and I am {self.age} years old.")`}
        language={`python`}
        result={``}
      ></Post>
      <Post
        title={`Objects`}
        content={`An object is an instance of a class. In Python, we create objects using the class_name() syntax. In this example, we create two objects of the Person class, person1 and person2, with the names "John" and "Jane" and ages 25 and 30, respectively:`}
        code={`person1 = Person("John", 25)
person2 = Person("Jane", 30)
        `}
        language={`python`}
        result={``}
      ></Post>
      <Post
        title={`Attributes`}
        content={`Attributes are data that are stored inside an object. In Python, we access attributes using the dot notation (object.attribute). In this example, we access the name attribute of person1 and the age attribute of person2:`}
        code={`print(person1.name)
print(person2.age)`}
        language={`python`}
        result={`John
Jane`}
      ></Post>
      <Post
        title={`Methods`}
        content={`Methods are functions that are associated with an object. In Python, we define methods inside a class. In this example, we call the greet() method on person1 and person2:`}
        code={`person1.greet()
person2.greet()`}
        language={`python`}
        result={`Hello, my name is John and I am 25 years old.
        Hello, my name is Jane and I am 30 years old.`}
      ></Post>
      <Post
        title={`Inheritance`}
        content={`Inheritance is a feature of OOP that allows us to create a new class based on an existing class. The new class is called the subclass, and the existing class is called the superclass. The subclass inherits all the attributes and methods of the superclass and can also have its own attributes and methods. In this example, we define a subclass called Student that inherits from the Person superclass. The Student subclass has an additional attribute, major, and an additional method, study(). The super() function is used to call the __init__() method of the superclass:`}
        code={`class Student(Person):
    def __init__(self, name, age, major):
        super().__init__(name, age)
        self.major = major

    def study(self):
        print(f"I am studying {self.major}.")

student1 = Student("Mike", 20, "Computer Science")
student1.greet()
student1.study()`}
        language={`python`}
        result={`Hello, my name is Mike and I am 20 years old.
        I am studying Computer Science.`}
      ></Post>
      <Post
        title={`Conclusion`}
        content={`In this article, we covered the basics of OOP in Python, including classes, objects, attributes, methods, and inheritance. Understanding OOP is essential for writing clean, maintainable, and scalable code in Python.`}
      ></Post>
    </div>
  );
}
export default PythonOOP;
