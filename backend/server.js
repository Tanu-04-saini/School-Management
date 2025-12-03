const express = require("express");
const cors = require("cors");
const multer = require("multer");
const db = require("./db"); // your mysql connection
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

// Serve images statically
app.use("/schoolImages", express.static(path.join(__dirname, "uploads/schoolImages")));

// Configure multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Multer will create the folder automatically if recursive: true
    cb(null, path.join(__dirname, "uploads/schoolImages"));
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

// POST — Add School
app.post("/addSchool", upload.single("image"), (req, res) => {
  const { name, address, city, state, contact, email_id } = req.body;

  if (!req.file) {
    return res.json({ status: "error", message: "Image required" });
  }

  const image = req.file.filename;

  const sql =
    "INSERT INTO schools (name, address, city, state, contact, image, email_id) VALUES (?, ?, ?, ?, ?, ?, ?)";

  db.query(
    sql,
    [name, address, city, state, contact, image, email_id],
    (err) => {
      if (err) return res.json({ status: "error", err });
      res.json({ status: "success" });
    }
  );
});

// GET — Show all schools
app.get("/showSchools", (req, res) => {
  db.query("SELECT * FROM schools", (err, results) => {
    if (err) return res.json({ status: "error", err });
    res.json(results);
  });
});

// START SERVER
app.listen(3000, () => console.log("Backend running on port 3000"));
