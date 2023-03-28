import express from "express";
import cors from "cors";
import mysql from 'mysql2'

const app = express();
app.use(cors());

const mysqlConnection = mysql.createConnection({
    database: "mdsDB",
    host: "localhost",
    user: "root",
    password: "mysql123"
})

mysqlConnection.connect((err) => {
    if(err){
         console.log('Error in DB connection' + JSON.stringify(err,undefined,2) );
    }
    else{
         console.log('DB Connected successfully' )
    }
})

app.get("/getData", (req, res) => {
    res.send("Hello");
})
app.listen(5000, () => 
    console.log("App is listening"));