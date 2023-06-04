import React, { useState , useEffect} from "react";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    
    const navigate = useNavigate();
    
    ///values to give to axios.post
    const [values, setValues] = useState({
        username: "",
        password: "",
    });

    ///error given by backend
    const [error, setError] = useState("");
    
    const handleSubmit = (event) => {
        event.preventDefault();
        
        axios.post('http://localhost:3001/auth/login', values)
        .then(res => {
            if(res.data.Status === 'Success'){
                localStorage.setItem('currentUser', JSON.stringify(values.username));
                navigate("/welcome");
            }
            else{
                setError(res.data.Error)
            }
        })
        .catch(err => console.log(err))
        
    }

    return (
        <div className="auth">
        
            <h2>LOGIN</h2>
        
        <form onSubmit = {handleSubmit} action="#!" id="main">
        <div className='error'>
            {error && error}
        </div>
            <div className="input-parent">
            <label >Username</label>
            <input required type="text" placeholder="Enter username" id="username" name="username" 
            onChange = {e => setValues({...values, username: e.target.value})}/>
            </div>

            <div className="input-parent">
            <label >Password</label>
            <input required type="password" placeholder="Enter password" id="*********" name="password" 
            onChange = {e => setValues({...values, password: e.target.value})} />
             </div>
            <button onClick = {handleSubmit}>Login</button>
            <span className="gotoregister" >Don't have an account? <Link to ="/register" className="register">Register</Link></span>
            
            
        </form>
        </div>
    )
}

export default Login;