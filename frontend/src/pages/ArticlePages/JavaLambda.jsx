import React from "react";
import ArticleHeader from "../../components/ArticleHeader";
import Post from "../../components/Post";

function JavaLambda() {
  return (
    <div style={{ marginBottom: "70px" }}>
      <ArticleHeader
        title="Lambda expressions in Java"
        subtitle="Creating Concise and Readable Code with Lambda Expressions in Java"
      ></ArticleHeader>
      <Post
        title="Antonio Radu"
        content={`They provide a simple syntax for implementing functional interfaces and enable developers to write more expressive and readable code. In this article, we will dive into the world of lambda expressions in Java, exploring their syntax, benefits, and common use cases. Whether you are new to Java or an experienced developer looking to improve your code, this article will provide a comprehensive overview of lambda expressions in Java.`}
      ></Post>
      <Post
        title={`Begining`}
        content={`Java 8 introduced a new feature called lambda expressions, which allow you to write more concise and readable code by expressing functionality as a method argument, or by creating small, anonymous functions. In this article, we will introduce you to lambda functions in Java, explain how they work, and provide some examples to help you get started.

What is a Lambda Function in Java?

A lambda function in Java is a compact, anonymous function that can be used to implement single-method interfaces or functional interfaces, which are interfaces with a single abstract method. Lambda functions are similar to anonymous inner classes, but they are more concise and easier to read.

The syntax of a lambda function consists of a set of parameters, an arrow operator, and a body. The parameters specify the inputs to the function, while the body specifies the operations to be performed on the inputs. Here is an example of a lambda function that takes two integers as inputs and returns their sum: (int a, int b) -> a + b

This lambda function takes two parameters, a and b, and returns their sum using the + operator.

Using Lambda Functions in Java

To use a lambda function in Java, you first need to define a functional interface with a single abstract method. Here is an example of a functional interface that represents a binary operator. This lambda function takes two integer inputs and returns their sum. You can use this lambda function just like any other method that implements the BinaryOperator interface:
`}
        code={`int result = add.apply(2, 3);
System.out.println(result); 
`}
        language={`java`}
        result={`5`}
      ></Post>
      <Post
        title={``}
        content={`This code creates a new BinaryOperator object called add that implements the lambda function (a, b) -> a + b. It then uses the apply method to apply the lambda function to the inputs 2 and 3, which produces the result 5.

Lambda Functions with Multiple Statements

Lambda functions can also have multiple statements in their bodies. Here is an example of a lambda function that prints the sum of two integers:`}
        code={`BinaryOperator<Integer> addAndPrint = (a, b) -> {
  int sum = a + b;
  System.out.println(sum);
  return sum;
};
`}
        language={`java`}
        result={``}
      ></Post>
      <Post
        title={`Lambda Functions with Method References`}
        content={`In addition to using lambda functions with explicit bodies, you can also use method references to refer to existing methods. Method references are shorthand for lambda expressions that call a single existing method.

Here is an example of a lambda function that uses a method reference to refer to the toUpperCase method of the String class:`}
        code={`Function<String, String> toUpperCase = String::toUpperCase;
String result = toUpperCase.apply("hello");
System.out.println(result);`}
        language={`java`}
        result={`"HELLO"
`}
      ></Post>
      <Post
        title={`A Practical Example`}
        content={`This example that demonstrates how to use lambda functions with the Comparator interface to sort a list of objects.
      In this code, we create a list of strings called names and initialize it with some values. We then use the Collections.sort method to sort the list in ascending order using a lambda function (a, b) -> a.compareTo(b).

      The lambda function takes two string inputs a and b, and returns an integer value that represents their comparison. In this case, we use the compareTo method of the String class to compare the strings lexicographically.
      
      Finally, we print the sorted names list using the System.out.println method.
      
      This example demonstrates how lambda functions can be used to sort a list of objects in a concise and readable way, without the need for creating a separate comparator class.`}
        code={`List<String> names = Arrays.asList("John", "Jane", "Mike", "Sara");

// Sort the names list in ascending order using a lambda function
Collections.sort(names, (a, b) -> a.compareTo(b));

// Print the sorted names list
System.out.println(names);
`}
        language={`java`}
        result={`[Jane, John, Mike, Sara]
`}
      ></Post>
    </div>
  );
}

export default JavaLambda;
