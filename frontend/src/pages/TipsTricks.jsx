import React from "react";
import ArticlesGrid from "../components/ArticleGrid";
import "../css/Article.css";

const TipsTricks = () => {
  const articles = [
    {
      id: 1,
      title: "My First Article",
      author: "John Doe",
      date: "April 26, 2023",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut semper lacus. Sed in justo in nisl vestibulum imperdiet vel a sapien.",
    },
    {
      id: 2,
      title: "My Second Article",
      author: "Jane Smith",
      date: "April 27, 2023",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut semper lacus. Sed in justo in nisl vestibulum imperdiet vel a sapien.",
    },
    {
      id: 3,
      title: "The Benefits of Meditation",
      author: "Samantha Lee",
      date: "April 28, 2023",
      content:
        "Meditation has become increasingly popular in recent years as people seek ways to reduce stress and improve their overall well-being. Research has shown that regular meditation can help lower blood pressure, reduce anxiety and depression, and even improve cognitive function. In this article, we explore the benefits of meditation and how to get started with a regular practice.",
    },
    {
      id: 4,
      title: "The Rise of Electric Cars",
      author: "Michael Chen",
      date: "April 29, 2023",
      content:
        "Electric cars are becoming more popular as people seek ways to reduce their carbon footprint and save money on gas. In recent years, major car manufacturers have introduced electric models that offer impressive performance and range, making them a viable option for many drivers. In this article, we take a closer look at the rise of electric cars and what the future holds for this exciting technology.",
    },
    {
      id: 5,
      title: "The Benefits of a Plant-Based Diet",
      author: "Emma Johnson",
      date: "April 30, 2023",
      content:
        "Plant-based diets have gained popularity in recent years as people seek ways to improve their health and reduce their impact on the environment. Research has shown that a diet rich in fruits, vegetables, whole grains, and legumes can help lower the risk of chronic diseases such as heart disease and diabetes. In this article, we explore the benefits of a plant-based diet and offer tips for incorporating more plant-based foods into your meals.",
    },
    {
      id: 6,
      title: "The Importance of Sleep for Health and Well-Being",
      author: "David Kim",
      date: "May 1, 2023",
      content:
        "Sleep plays a crucial role in our overall health and well-being. Not getting enough sleep can lead to a range of health problems, including obesity, diabetes, and heart disease. In this article, we discuss the importance of sleep and offer tips for getting a good night's rest, including creating a relaxing bedtime routine and avoiding caffeine and screens before bed.",
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

      <ArticlesGrid articles={articles} />
    </div>
  );
};

export default TipsTricks;
