import db from "../database.js";

// create a new forum question in database
export const newpost = (req, res) => {
    // check if the question already exists in database
    const query = "SELECT * from forum_questions where title = ? or content = ?"
     db.query(query, [req.body.title, req.body.content], (err, data) => {
        if(err) {
            return res.json(err)
        }
        if(data.length) {
            return res.status(409).json("Forum question already exists!");
        }

     // if it doesn't exist insert question
     const query = "INSERT INTO forum_questions (title, content, username) VALUES (?,?,?)"
     console.log(req.body.title, req.body.content, req.body.username)

     db.query(query, [req.body.title, req.body.content, req.body.username], (err, data) => {
        if(err) {
            console.log(err);
            return res.json(err);
        }
        else {
            console.log("Forum question has been created")
            return res.status(200).json("Forum question has been created");
        }
        
     })
     });
}

// select all forum questions from databse
export const viewforum = (req, res) => {
    const query = "SELECT * from forum_questions"
    console.log(req.body);
    db.query(query, (err, data) => {
        console.log(data);
        if(err) {
            return res.json(err);
        }
        if(data.length != 0) {
            console.log(data);
            return res.json(data);
        }
    }
    );
}

// select all answers for forum from database
export const viewforumanswers = (req, res) => {
    const query = "SELECT * from forum_answers"
    console.log(req.body);
    db.query(query, (err, data) => {
        console.log(data);
        if(err) {
            return res.json(err);
        }
        if(data.length != 0) {
            console.log(data);
            return res.json(data);
        }
    }
    );
}

// create a neaw answer for a forum question in database
export const newanswer = (req, res) => {
     const query = "INSERT INTO forum_answers (id_question, content, username) VALUES (?,?,?)"
     console.log(req.body.id_question, req.body.content, req.body.username)

     db.query(query, [req.body.id_question, req.body.content, req.body.username], (err, data) => {
        if(err) {
            console.log(err);
            return res.json(err);
        }
        else {
            console.log("Answer has been created")
            return res.status(200).json("Answer has been created");
        }
        
     })
};
