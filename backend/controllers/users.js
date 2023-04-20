import db from "../database.js";

export const profile = (req, res) => {
    const query = "SELECT * from users where username = ?"
    console.log("Ajunge aici macar");
    console.log(req.body);
    db.query(query, [req.body.currentUser], (err, data) => {
        console.log("Se intampla ceva aici?");
        console.log(data);
        if(err) {
            console.log("eroare?");
            return res.json(err);
        }
        if(data.length != 0) {
            console.log("Aici???")
            console.log(data);
            return res.json(data);
        }
        console.log("trece de tot?");
    }
     );
}