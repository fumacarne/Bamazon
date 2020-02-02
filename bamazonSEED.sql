DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;
USE bamazon_db;
CREATE TABLE products (
id INT NOT NULL auto_increment,
product_name VARCHAR (50) NOT NULL,
department_product VARCHAR(50) NOT NULL,
price DECIMAL NOT NULL,
stock_quantity INT NULL,
PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_product,price,stock_quantity)
VALUES ("guitar","music",300,4),
 ("bike","sport",350,10),
 ("tenis table","sport",400,3),
 ("Cellphone","tech",154,30),
 ("iPad","tech",499,19),
 ("Drum Set","music",789,3),
 ("Laptop","tech",240,10),
 ("Running shoes","sport",45,7),
 ("Guitar Amplifier","music",900,2),
 ("Raquet","sport",299,12);


