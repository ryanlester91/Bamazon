DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
	item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(100) NULL,
    department_name VARCHAR(100) NULL,
    price DECIMAL(10,2) NULL,
    stock_quantity INT NULL,
    PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("TORO 22-in. 60-V Lithium-Ion Lawn Mower", "Garden & Outdoor", 319.00, 8);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Purina ONE Natural Dry Dog Food", "Pet Supplies", 27.50, 22);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Blood on the Badge by Det. Sgt. Ron Harris", "Books", 12.00, 3);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Yaesu FT-857D Amateur Radio", "Electronics", 879.00, 4);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Dark Souls 3", "Video Games", 35.00, 17);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("PlayStation 4 Console", "Video Games", 220.00, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("TV Puppet Pals 1971 Lunchbox", "Toys & Collectibles", 199.99, 3);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Fender Player Stratocaster", "Music Instruments", 679.50, 25);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Strong Bad Action Figure", "Video Games", 30.00, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Spaceballs the Flamethrower", "Toys & Collectibles", 449.99, 15);

SELECT * FROM products;




