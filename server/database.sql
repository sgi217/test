CREATE DATABASE testapp;
USE testapp;

CREATE TABLE users(
id INT AUTO_INCREMENT PRIMARY KEY,
username VARCHAR(50),
password VARCHAR(100)
);

CREATE TABLE results(
id INT AUTO_INCREMENT PRIMARY KEY,
username VARCHAR(50),
score INT
);
