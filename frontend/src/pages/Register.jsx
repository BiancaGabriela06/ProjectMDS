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
    
    /// const which set values for inputs
    const handleChange = (e) => {
        setInputs((prev) => ({...prev, [e.target.name]: e.target.value}));

    }
    const [error, setError] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post("http://localhost:3001/auth/register", inputs)
        .then(res => {
            if(res.data.Status === 'Error')
                setError(res.data.Error);
            else
                navigate("/login");
               
        });
        
    }

    return (
        <div className="auth">
            <h2>REGISTRATION</h2>
        
        <form action="#!" id="main">
        <div className='error'>
            {error && error}
        </div>
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
            <div className="gotoregister">
               <span  style={{ color: 'white' }}>Do you have an account? <Link to ="/login"  style={{ color: 'white' }}>Login</Link></span>
            </div>
            
        </form>
        </div>
    )
}

export default Register;