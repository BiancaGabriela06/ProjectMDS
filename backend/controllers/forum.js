import db from "../database.js";


export const newpost = (req, res) => {
    const query = "SELECT * from forum_questions where title = ? or content = ?"
     db.query(query, [req.body.title, req.body.content], (err, data) => {
        if(err) {
            return res.json(err)
        }
        if(data.length) {
            return res.status(409).json("Forum question already exists!");
        }

     /// if user doesn't exist insert user
     const query = "INSERT INTO forum_questions (title, content) VALUES (?,?)"
     console.log(req.body.title, req.body.content)

     db.query(query, [req.body.title, req.body.content], (err, data) => {
        if(err) {
            console.log("Aici intra :)");
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

export const viewforum = (req, res) => {
    const query = "SELECT * from forum_questions"
    console.log("Ajunge aici macar la forum");
    console.log(req.body);
    db.query(query, (err, data) => {
        console.log("Se intampla ceva aici? la forum");
        console.log(data);
        if(err) {
            console.log("eroare? forum");
            return res.json(err);
        }
        if(data.length != 0) {
            console.log("Aici??? forum")
            console.log(data);
            return res.json(data);
        }
        console.log("trece de tot? forum");
    }
    );
}
