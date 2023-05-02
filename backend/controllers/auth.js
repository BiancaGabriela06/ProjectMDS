import db from "../database.js";
import bycript from "bcrypt";
import jwt from "jsonwebtoken";

export const register = (req, res) => {
     //Check existing user
     
     const query = "SELECT * from users where email = ? or username =?"
     db.query(query, [req.body.email, req.body.username], (err, data) => {
        if(err) {
            return res.json(err)
        }
        if(data.length) {
            return res.status(409).json("User already exists!");
        }

     /// hash the password and create the user
     const salt = bycript.genSaltSync(10);
     const hash = bycript.hashSync(req.body.password, salt);

     /// if user doesn't exist insert user
     const query = "INSERT INTO users (username, email, password) VALUES (?,?,?)"
     console.log(req.body.username, req.body.email, hash)

     db.query(query, [req.body.username, req.body.email, hash], (err, data) => {
        if(err) {
            console.log("Aici intra :)");
            console.log(err);
            return res.json(err);
        }
        else {
            console.log("User has been created")
            return res.status(200).json("User has been created");
            
        }
        
     })
     });
}

export const login = (req, res) => {

    ///CHECK USER

    const query = "SELECT * from users where username = ?"
     db.query(query, [req.body.username], (err, data) => {
        if(err) {
            console.log("Eroare la login");
            return res.json({Status: "Error", Error: "Error in database query"});
        }
        
        if(data.length === 0) {
            console.log("User not found");
            return res.json({Status: "Error",  Error: "Wrong username"});
        }
        
        const isPasswordCorrect = bycript.compareSync(
            req.body.password, 
            data[0].password
        );

        if(!isPasswordCorrect) return res.status(400).json("Wrong username or password!");
        else
            {   
                return res.json({Status: "Success"})
        }
        console.log(req.body.username)
        const token = jwt.sign({id:data[0].id}, "jwkey");
        const {password, ...other} = data[0];

        res.cookie("access_token", token, {
            httpOnly: true
        }).status(200).json(other)
     
     });
}

export const logout = (req, res) => {
    res.clearCookie("access_token", {
        sameSite: "none",
        secure: true
    }).status(200).json("User has been logged out.")
};