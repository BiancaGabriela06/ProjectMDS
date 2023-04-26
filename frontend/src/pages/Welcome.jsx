import React from "react";
import "../css/Welcome.css"

const Welcome = () => {
    const user =  JSON.parse( localStorage.getItem("currentUser"));
    return (
        <div className="welcomepage">
             <h1>Welcome, {user} !</h1>
        </div>
         
    );
};

export default Welcome;