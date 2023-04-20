import React, { useState } from "react";
import "../css/Profile.css"
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

const Profile = () => {
    const currentUser = JSON.parse( localStorage.getItem("currentUser"))

    const handleSubmit = (event) => {
      event.preventDefault();
      axios.post('http://localhost:3001/users/profile',  JSON.stringify(currentUser))
         .then(res => {
               if(res.data){
                  
               }
               else{

               }
         })
         .catch(err => console.log(err))
      }

    return (

         <form className="profile">
            <div className="title">
               Profile of {currentUser}
            </div>
            <div className="informations">

            <div className="container">
               <label >Username</label>
               <input required type="text" placeholder="Enter username" id="username" name="username" />
            </div>
            <hr style={{ height: '3px'}}/>
            <div className="container">
               <label >Email</label>
               <input required type="text" placeholder="Enter email" id="username" name="username" />
            </div>
            <hr style={{ height: '3px'}}/>
            <div className="container">
               <label >About</label>
               <input required type="text" placeholder=" " id="username" name="username" />
            </div>
            <hr style={{ height: '3px'}}/>
            <div className="container">
               <label >Completed quiz </label>
                3
            </div>
            
            <div className="container">
               <label >Edit Password </label> 
               <input required type="text" placeholder=" " id="username" name="username" />
               <label >Confirm Password </label>
               <input required type="text" placeholder=" " id="username" name="username" />
            </div>
            <button onClick = {handleSubmit} className="edit">Edit profile</button>

            </div>
            

         </form>
    );
};

export default Profile;