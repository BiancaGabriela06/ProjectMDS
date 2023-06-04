import "./App.css";
import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import TipsTricks from "./pages/TipsTricks";
import Forum from "./pages/Forum";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Welcome from "./pages/Welcome";
import { Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import NpGuide from "./pages/ArticlePages/NpGuide";
import Decorators from "./pages/ArticlePages/Decorators";
import JavaQuestions from "./pages/ArticlePages/JavaQuestions";
import JavaCollections from "./pages/ArticlePages/JavaCollections";
import JavaLambda from "./pages/ArticlePages/JavaLambda";
import JavaThreads from "./pages/ArticlePages/JavaThreads";
import JsFunctions from "./pages/ArticlePages/JsFunctions";
import JsPromise from "./pages/ArticlePages/JsPromise";
import JsRegex from "./pages/ArticlePages/JsRegex";
import PythonGame from "./pages/ArticlePages/PythonGame";
import PythonOOP from "./pages/ArticlePages/PythonOOP";
import Quiz from "./pages/Quiz";
import QuizList from "./pages/QuizList";
import Question from "./components/Forum/Question"

function App() {
  const [data, setData] = useState("");

  return (
    <>
      <div className="App">{data}</div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/quiz/:id" element={<Quiz />} />
        <Route path="/quizList" element={<QuizList />} />
        <Route path="/tipstricks" element={<TipsTricks />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/ArticlePages/NpGuide" element={<NpGuide />} />
        <Route path="/ArticlePages/Decorators" element={<Decorators />} />
        <Route path="/ArticlePages/JavaQuestions" element={<JavaQuestions />} />
        <Route
          path="/ArticlePages/JavaCollections"
          element={<JavaCollections />}
        />
        <Route path="/ArticlePages/JavaLambda" element={<JavaLambda />} />
        <Route path="/ArticlePages/JavaThreads" element={<JavaThreads />} />
        <Route path="/ArticlePages/JsFunctions" element={<JsFunctions />} />
        <Route path="/ArticlePages/JsPromise" element={<JsPromise />} />
        <Route path="/ArticlePages/JsRegex" element={<JsRegex />} />
        <Route path="/ArticlePages/PythonGame" element={<PythonGame />} />
        <Route path="/ArticlePages/PythonOOP" element={<PythonOOP />} />

        <Route path="/forum/question/:id" element={<Question />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
