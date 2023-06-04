import React from "react";
import { Link, useMatch, useNavigate, useResolvedPath } from "react-router-dom";
import '../css/Home.css';

const Home = () => {
    return (
      <div class="main">

      
    <div className="introduction">
        Don't miss out on this opportunity to enhance your interview skills 
        and boost your career prospects. Join ByteBoost today and embark on your journey 
        towards interview success in the exciting world of Information Technology!
    </div>
    <div className="background">
       
        <div  className="question" >
                <h4>LOGIN TO EXPLORE OUR WEBSITE</h4>
                <CustomLink to ="/login" className="click">LOGIN</CustomLink>
        </div>
        <div className="question">
                <h4>DON'T YOU HAVE AN ACCOUNT?</h4>
                <CustomLink to ="/register" className="click">CLICK HERE</CustomLink>
        </div>
    </div>
    </div>  
  
);
}

function CustomLink({to, children, ...props}){
    const resolvedPath = useResolvedPath (to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true})
 
     return (
         <li className={ isActive ? "active" : ""}>
             <Link to = {to} {...props} >
                 {children}
             </Link>
         </li>
     )
     
 }

export default Home;