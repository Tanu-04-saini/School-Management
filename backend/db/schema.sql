CREATE DATABASE IF NOT EXISTS school_db;
USE school_db;

CREATE TABLE schools (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  address VARCHAR(255),
  city VARCHAR(255),
  state VARCHAR(255),
  contact VARCHAR(50),
  email_id VARCHAR(255),
  image VARCHAR(255)
);
