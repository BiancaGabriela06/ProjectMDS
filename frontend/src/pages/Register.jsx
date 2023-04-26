import React, { useState } from "react";
import "../css/Register.css";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";

const Register = () => {
    
    const navigate = useNavigate();

    const [inputs, setInputs] = useState({
        username: "",
        email: "",
        password: "",
    });
    
    const handleChange = (e) => {
        setInputs((prev) => ({...prev, [e.target.name]: e.target.value}));

    }

    const handleSubmit = () => {
      try{
        axios.post("http://localhost:3001/auth/register", inputs);
        navigate("/login");
      }catch(err){
        console.log(err)
    }
  };


    return (
        <div className="auth">
            <h2>REGISTRATION</h2>
        
        <form action="#!" id="main">
            
            <div className="input-parent">
            <label >Username</label>
            <input required type="text" placeholder="Enter username" id="username" name="username" 
            onChange = {handleChange}/>
            </div>

            <div className="input-parent">
            <label>Email</label>
            <input required type="text" placeholder="Enter email" id="email" name="email" 
            onChange = {handleChange} />
            </div>


            <div className="input-parent">
            <label >Password</label>
            <input required type="password" placeholder="Enter password" id="*********" name="password" 
            onChange = {handleChange} />
             </div>
            <button onClick = {handleSubmit}>Register</button>
            <span className="gotoregister">Do you have an account? <Link to ="/login">Login</Link></span>
            
            
        </form>
        </div>
    )
}

export default Register;