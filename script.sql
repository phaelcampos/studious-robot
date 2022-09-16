USE ONLINESTORE
CREATE TABLE ProductOrder (
    order_id varchar(100),
    product_id INT,
    product_quantity INT
);

CREATE TABLE Provider (
    id INT AUTO_INCREMENT PRIMARY KEY,
    site VARCHAR(100)
);

INSERT INTO Provider VALUES(1,"https://fakestoreapi.com");


