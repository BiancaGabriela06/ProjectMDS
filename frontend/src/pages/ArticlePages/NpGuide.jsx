import React from "react";
import ArticleHeader from "../../components/ArticleHeader";
import Post from "../../components/Post";

/**
 * this article is about numpy and all of it's
 * main functionality, documentation, and many many
 * code examples
 */

function NpGuide() {
  return (
    <div style={{ marginBottom: "70px" }}>
      <ArticleHeader
        title={`Getting Started with NumPy: A Comprehensive Guide`}
        subtitle={`Mastering Numerical Computing with NumPy: An In-Depth Tutorial`}
      ></ArticleHeader>
      <Post
        title={`Antonio Radu`}
        content={`NumPy is a powerful library for numerical computing in Python that provides a high-performance multidimensional array object, tools for working with these arrays, and a large collection of mathematical functions to operate on them. Whether you're a data scientist, engineer, or hobbyist, NumPy is an essential tool for scientific computing in Python. This comprehensive guide is designed to help you get started with NumPy and become proficient in its use. We'll cover the basics of NumPy's array object, explain how to create and manipulate arrays, and explore NumPy's mathematical functions and statistical tools. By the end of this guide, you'll have a solid understanding of NumPy and be ready to use it in your own data analysis, scientific computing, and machine learning projects.`}
      ></Post>
      <Post
        title={`Creating Arrays`}
        content={`To get started with NumPy, you'll need to import the library:`}
        code={`import numpy as np
`}
        language={`python`}
        result={``}
      ></Post>
      <Post
        title={``}
        content={`Now, let's create a NumPy array. There are several ways to create arrays in NumPy, but one of the most common is to use the np.array() function. This function takes a Python list or tuple and converts it to a NumPy array:`}
        code={`a = np.array([1, 2, 3])
print(a)
b = np.array([[1, 2, 3], [4, 5, 6]])
print(b)`}
        language={`python`}
        result={`[1 2 3]

        [[1 2 3]
        [4 5 6]]`}
      ></Post>
      <Post
        title={``}
        content={`NumPy also provides several functions for creating arrays with specific values or properties. For example, np.zeros() creates an array filled with zeros, and np.ones() creates an array filled with ones:`}
        code={`c = np.zeros((2, 3))
print(c)

d = np.ones((3, 2))
print(d)
`}
        language={`python`}
        result={`[[0. 0. 0.]
[0. 0. 0.]]

[[1. 1.]
[1. 1.]
[1. 1.]]
`}
      ></Post>
      <Post
        title={`Performing Operations`}
        content={`Once you have created arrays, you can perform operations on them. NumPy provides many mathematical functions that can be used to perform operations on arrays. For example, we can add two arrays together using the + operator:`}
        code={`a = np.array([1, 2, 3])
b = np.array([4, 5, 6])
c = a + b
print(c)
`}
        language={`python`}
        result={`[5 7 9]
`}
      ></Post>
      <Post
        title={``}
        content={`We can also perform element-wise multiplication using the * operator:`}
        code={`a = np.array([1, 2, 3])
b = np.array([4, 5, 6])
c = a * b
print(c)`}
        language={`python`}
        result={`[ 4 10 18]
        `}
      ></Post>
      <Post
        title={`Manipulating Array Shape`}
        content={`In addition to performing operations on arrays, we can also manipulate their shape. NumPy provides many functions for reshaping arrays, such as np.reshape() and np.transpose(). For example, we can reshape a 1D array into a 2D array using np.reshape():`}
        code={`a = np.array([1, 2, 3, 4, 5, 6])
b = np.reshape(a, (2, 3))
print(b)
        `}
        language={`python`}
        result={`[[1 2 3]
        [4 5 6]]
       `}
      ></Post>
      <Post
        title={`Transposing Arrays`}
        content={`In addition to reshaping arrays, NumPy also provides a function for transposing arrays. Transposing an array swaps its rows and columns. For example, if we have a 2x3 matrix, transposing it would give us a 3x2 matrix:`}
        code={`a = np.array([[1, 2, 3], [4, 5, 6]])
b = np.transpose(a)
print(b)`}
        language={`python`}
        result={`[[1 4]
        [2 5]
        [3 6]]
       `}
      ></Post>
      <Post
        title={`Indexing and Slicing`}
        content={`Like Python lists, NumPy arrays can be indexed and sliced to access specific elements or sub-arrays. NumPy uses zero-based indexing, so the first element in an array has an index of 0.

        To access a single element in an array, we can use square brackets and provide the index of the element we want:`}
        code={`a = np.array([1, 2, 3, 4, 5])
print(a[2])
        `}
        language={`python`}
        result={`3
        `}
      ></Post>
      <Post
        title={``}
        content={`We can also use slicing to access a range of elements in an array. Slicing works by specifying a start index, an end index (exclusive), and a step size:`}
        code={`a = np.array([1, 2, 3, 4, 5])
print(a[1:4:2])
        `}
        language={`python`}
        result={`[2 4]
        `}
      ></Post>
      <Post
        title={`Boolean Indexing`}
        content={`NumPy also provides a way to index arrays using Boolean arrays. A Boolean array is an array of the same shape as the original array, but with Boolean values instead of numeric values. We can use a Boolean array to select specific elements of the original array.

        For example, let's say we have an array of temperatures and we want to find all temperatures that are above 80 degrees:`}
        code={`temperatures = np.array([72, 74, 80, 81, 79, 75, 77, 82])
above_80 = temperatures > 80
print(above_80)`}
        language={`python`}
        result={`[False False False  True False False False  True]
        `}
      ></Post>
      <Post
        title={``}
        content={`The result is a Boolean array that is True for temperatures above 80 and False for temperatures below 80. We can use this Boolean array to select the temperatures that are above 80:`}
        code={`hot_temperatures = temperatures[above_80]
print(hot_temperatures)`}
        language={`python`}
        result={`[81 82]
        `}
      ></Post>
      <Post
        title={`Broadcasting`}
        content={`One of the powerful features of NumPy is its ability to perform operations on arrays with different shapes. When performing an operation on two arrays with different shapes, NumPy uses a set of rules called broadcasting to determine how to apply the operation.

        For example, let's say we have a 2x2 matrix and we want to add a scalar value to each element:`}
        code={`a = np.array([[1, 2], [3, 4]])
b = 1
c = a + b
print(c)
        `}
        language={`python`}
        result={`[[2 3]
        [4 5]]
       `}
      ></Post>
      <Post
        title={`Math Functions`}
        content={`NumPy provides a variety of math functions that can be applied to arrays. These functions operate element-wise on the array, which means that they are applied to each element of the array individually. Some of the most commonly used math functions in NumPy include sin, cos, tan, exp, and log.`}
        code={`a = np.array([0, np.pi/2, np.pi])
print(np.sin(a))
print(np.cos(a))
print(np.tan(a))`}
        language={`python`}
        result={`[0.         1.         0.        ]
        [ 1.000000e+00  6.123234e-17 -1.000000e+00]
        [ 0.00000000e+00  1.63312394e+16 -1.22464680e-16]
        `}
      ></Post>
      <Post
        title={``}
        content={`In this example, we create an array of angles and apply the sin, cos, and tan functions to each element of the array. Note that the second element of the cos output is not exactly 0 due to floating point precision limitations.

        NumPy also provides functions for exponentiation and logarithms:`}
        code={`a = np.array([1, 2, 3])
print(np.exp(a))
print(np.log(a))`}
        language={`python`}
        result={`[ 2.71828183  7.3890561  20.08553692]
        [0.         0.69314718 1.09861229]
        `}
      ></Post>
      <Post
        title={`Linear Algebra with linalg module`}
        content={`NumPy also provides a module called linalg that provides a variety of linear algebra functions. One of the most commonly used linear algebra functions is matrix multiplication, which can be performed using the dot function:`}
        code={`a = np.array([[1, 2], [3, 4]])
b = np.array([[5, 6], [7, 8]])
c = np.dot(a, b)
print(c)`}
        language={`python`}
        result={`[[19 22]
        [43 50]]
       `}
      ></Post>
      <Post
        title={``}
        content={`In this example, we create two matrices and perform matrix multiplication using the dot function.

        We can also calculate the determinant and inverse of a matrix using det and inv functions respectively:`}
        code={`a = np.array([[1, 2], [3, 4]])
determinant = np.linalg.det(a)
inverse = np.linalg.inv(a)
print(determinant)
print(inverse)`}
        language={`python`}
        result={`-2.0000000000000004
        [[-2.   1. ]
         [ 1.5 -0.5]]
        `}
      ></Post>
      <Post
        title={`Conclusion`}
        content={`In this article, we covered some of the basics of NumPy, including creating arrays, performing operations on them, manipulating their shape, using math functions, and using the linalg module for linear algebra operations. NumPy is a powerful library that can be used for a variety of scientific computing tasks and provides a wide range of functions for working with arrays and matrices.`}
      ></Post>
    </div>
  );
}

export default NpGuide;
