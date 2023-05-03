import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import QuizList from "./pages/QuizList";
import TipsTricks from "./pages/TipsTricks";
import Forum from "./pages/Forum";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Welcome from "./pages/Welcome";
import { Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";

function App() {
  const [data] = useState("");

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
      </Routes>
      <Footer />
    </>
  );
}

export default App;
