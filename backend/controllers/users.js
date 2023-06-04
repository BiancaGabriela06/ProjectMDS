import db from "../database.js";

export const profile = (req, res) => {
  const query = "SELECT * from users where username = ?";
  console.log(req.body);
  db.query(query, [req.body.currentUser], (err, data) => {
    console.log(data);
    if (err) {
      console.log("eroare?");
      return res.json(err);
    }
    if (data.length != 0) {
      console.log(data);
      return res.json(data);
    }
  });
};
