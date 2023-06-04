import './App.css';
import React, {useEffect, useState} from 'react';
import Navbar  from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Questions from './pages/Questions';
import TipsTricks from './pages/TipsTricks';
import Forum from './pages/Forum';
import Login from './pages/Login';
import Register from './pages/Register';
import Welcome from './pages/Welcome';
import {Routes, Route} from "react-router-dom";
import Profile from './pages/Profile';
import Question from './components/Forum/Question';

function App() {
  
  const [data,setData] = useState("");
  
  return (
    <>
    <div className="App">
      {data}
    </div>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/questions" element={<Questions />} />
      <Route path="/tipstricks" element={<TipsTricks />} />
      <Route path="/forum" element={<Forum />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/profile" element={<Profile />} />

      <Route path="/forum/question/:id" element={<Question />} />

    </Routes>
    <Footer />
    </>
    
  );
}

export default App;
