import mysql from "mysql2";

const db = mysql.createConnection({
  database: "mdsdb", // aici
  host: "localhost",
  user: "root",
  password: "mysql123", // si aici modifica fiecare la baza lui de date
});

db.connect((err) => {
  if (err) {
    console.log("Error in DB connection" + JSON.stringify(err, undefined, 2));
  } else {
    console.log("DB Connected successfully");
  }
});

export default db;
