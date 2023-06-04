import db from "../database.js";
import bycript from "bcrypt";
import jwt from "jsonwebtoken";


export const profile = (req, res) => {
    
      /// get req.body in console for testing inputs
      console.log(req.body.currentUser, req.body.email, req.body.password, req.body.newpassword)
   
      /// the profile can be partially modified and if the req.body.x is undefiend, that means
      /// the user doesn't want to change it

      /// but if password is written and is not reenter (or the other way around), that's not correct results error
      if((typeof req.body.password != 'undefined' && typeof req.body.newpassword == 'undefined'
      ) || (typeof req.body.password == 'undefined' && typeof req.body.newpassword != 'undefined')){
        console.log("Please enter and reenter password!");
        return res.json({Status: "Error", Error: "Please enter and reenter password!"});
      }

      /// if every field is complete
      if(typeof req.body.email != 'undefined' && typeof req.body.password != 'undefined' && typeof req.body.newpassword != 'undefined')
          {
            /// need to check if passwords match
            if(req.body.password != req.body.newpassword) {
              console.log("The passwords doesn't match!");
              return res.json({Status: "Error", Error: "The passwords doesn't match!"});
            }

            const query = "UPDATE users SET email = ?, password = ? where username = ?";
            
            /// hash the password
            const salt = bycript.genSaltSync(10);
            const hash = bycript.hashSync(req.body.password, salt);
            db.query(query, [req.body.email, hash, req.body.currentUser], (err, data) => {
            if(err) {
                console.log(err);
                return res.json(err);
            }
            else{
                console.log("Data updated succesfuly");
                return res.json({Status: "Succes",  Event: "Data updated succesfully!"})
            }})
          }

          /// if just password needs to be updated
          if(typeof req.body.email == 'undefined' && typeof req.body.password != 'undefined' && typeof req.body.newpassword != 'undefined') 
                {
                  const query = "UPDATE users SET password = ? where username = ?";
                  const salt = bycript.genSaltSync(10);
                 const hash = bycript.hashSync(req.body.password, salt);
                  db.query(query, [hash, req.body.currentUser], (err, data) => {
                  if(err){
                    console.log("Error query update password");
                    return res.json(err);
                  }
                  else
                    {
                      console.log("Password updated succesfuly");
                      return res.json({Status: "Succes",  Event: "Password updated succesfully!"})
                    }
                    })
                }
        /// if just email needs to be updated
        if(typeof req.body.email != 'undefined' && typeof req.body.password == 'undefined' && typeof req.body.newpassword == 'undefined') 
                {
                  const query = "UPDATE users SET email = ? where username = ?";
                  db.query(query, [req.body.email, req.body.currentUser], (err, data) => {
                  if(err){
                    console.log("Error query update email");
                    return res.json(err);
                  }
                  else
                    {
                      console.log("Email updated succesfuly");
                      return res.json({Status: "Succes",  Event: "Email updated succesfully!"})
                    }
                    })
                }       
}
      


