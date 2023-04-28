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
      title: "The Rise of Electric Cars",
      author: "Michael Chen",
      date: "April 29, 2023",
      content:
        "Electric cars are becoming more popular as people seek ways to reduce their carbon footprint and save money on gas. In recent years, major car manufacturers have introduced electric models that offer impressive performance and range, making them a viable option for many drivers. In this article, we take a closer look at the rise of electric cars and what the future holds for this exciting technology.",
      page: "/ArticlePages/Test",
      image: javascriptImg,
    },
    {
      id: 5,
      title: "The Benefits of a Plant-Based Diet",
      author: "Emma Johnson",
      date: "April 30, 2023",
      content:
        "Plant-based diets have gained popularity in recent years as people seek ways to improve their health and reduce their impact on the environment. Research has shown that a diet rich in fruits, vegetables, whole grains, and legumes can help lower the risk of chronic diseases such as heart disease and diabetes. In this article, we explore the benefits of a plant-based diet and offer tips for incorporating more plant-based foods into your meals.",
      page: "/ArticlePages/Test",
      image: pythonImg,
    },
    {
      id: 6,
      title: "The Importance of Sleep for Health and Well-Being",
      author: "David Kim",
      date: "May 1, 2023",
      content:
        "Sleep plays a crucial role in our overall health and well-being. Not getting enough sleep can lead to a range of health problems, including obesity, diabetes, and heart disease. In this article, we discuss the importance of sleep and offer tips for getting a good night's rest, including creating a relaxing bedtime routine and avoiding caffeine and screens before bed.",
      page: "/ArticlePages/Test",
      image: pythonImg,
    },
  ];

  return (
    <div>
      <div class="welcome-message">
        <h1 class="he">Welcome to our Programming Tips and Tricks</h1>
        <p class="pa">
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
