import React, { useState, useEffect } from "react";
import "../css/Profile.css"
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

const Profile = () => {

   /// values to give to backend
   const [values, setValues] = useState({
      currentUser: "",
      email: "",
      password: "",
      newpassword: "",
   })
   
   /// profile page need to contain name of user
   const user = JSON.parse( localStorage.getItem("currentUser"))

   useEffect(() => {
      setValues({currentUser: user});
   }, [user]);

   const [message, setMessage] = useState("");

   /// after submit this constant handleSubmit 
   const handleSubmit = (event) => {
      event.stopPropagation();
      axios.post('http://localhost:3001/users/profile', values)
        .then(res => {
         if(res.data.Status === 'Succes')
              {
               setMessage(res.data.Event);
              }
         else if(res.data.Status === 'Error')
               { 
                  setMessage(res.data.Error);
               }
        })
        .catch(err => console.log(err));
    }
    

    return (

         <form onSubmit = {handleSubmit} action="#!" className="profile">
            
            <div className="title">
               Profile of {values.currentUser}
            </div>
            <div className="informations">
                
            <div className="container">
         
               <label >Edit Email</label>
               <input type="text" placeholder="Enter new email" id="email" name="email"
               onChange = {e => setValues({...values, email: e.target.value})}/>
            </div>
            
            <div className="container">
               <label >Edit Password </label> 
               <input  type="password" placeholder="Enter new password " id="password" name="password"
               onChange = {e => setValues({...values, password: e.target.value})}/> 
               <label >Confirm Password </label>
               <input  type="password" placeholder="Reenter new password" id="newpassword" name="newpassword"
                onChange = {e => setValues({...values, newpassword: e.target.value})}/> 
            </div>
            <button onClick = {handleSubmit} className="edit">Edit profile</button>
            </div>
         <div className="message">
               {message && message}
         </div>

         </form>
    );
};

export default Profile;