const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root", // your MySQL username
  password: "Tanu@123", // your MySQL password
  database: "school_db", 
});

db.connect((err) => {
  if (err) {
    console.log("MySQL Connection Error:", err);
  } else {
    console.log("MySQL Connected Successfully");
  }
});

module.exports = db;
