CREATE TABLE `user` (
	user_id INT PRIMARY KEY AUTO_INCREMENT,
	full_name VARCHAR(50),
	email VARCHAR(30),
	password VARCHAR(20)
);

CREATE TABLE restaurant (
	res_id INT PRIMARY KEY AUTO_INCREMENT,
	res_name VARCHAR(50),
	image VARCHAR(255),
	description VARCHAR(255)
);

CREATE TABLE food_type (
	type_id INT PRIMARY KEY AUTO_INCREMENT,
	type_name VARCHAR(50)
);

CREATE TABLE food (
	food_id INT PRIMARY KEY AUTO_INCREMENT,
	food_name VARCHAR(50),
	image VARCHAR(255),
	price FLOAT,
	description VARCHAR(50),
	type_id INT,
	FOREIGN KEY (type_id) REFERENCES food_type(type_id)
);

CREATE TABLE sub_food (
	sub_id INT PRIMARY KEY AUTO_INCREMENT,
	sub_name VARCHAR(50),
	sub_price FLOAT,
	food_id INT,
	FOREIGN KEY (food_id) REFERENCES food (food_id)
);

CREATE TABLE `order` (
	amount INT,
	code VARCHAR(50),
	arr_sub_id VARCHAR(100),
	user_id INT,
	food_id INT,
	FOREIGN KEY (user_id) REFERENCES `user`(user_id),
	FOREIGN KEY (food_id) REFERENCES food(food_id)
);

CREATE TABLE like_res (
	date_like DATETIME,
	user_id INT,
	res_id INT,
	FOREIGN KEY (user_id) REFERENCES `user`(user_id),
	FOREIGN KEY (res_id) REFERENCES restaurant(res_id)
);

CREATE TABLE rate_res (
	amount INT,
    date_rate DATETIME,
    user_id INT,
    res_id INT,
    FOREIGN KEY (user_id) REFERENCES user(user_id),
    FOREIGN KEY (res_id) REFERENCES restaurant(res_id)
);

INSERT INTO `user` (full_name, email, password) VALUES
('Nguyen Van A', 'a@gmail.com', '123'), ('Tran Thi B', 'b@gmail.com', '123'),
('Le Van C', 'c@gmail.com', '123'), ('Pham Thi D', 'd@gmail.com', '123'),
('Hoang Van E', 'e@gmail.com', '123'), ('Vu Thi F', 'f@gmail.com', '123'),
('Dang Van G', 'g@gmail.com', '123'), ('Do Thi H', 'h@gmail.com', '123'),
('Bui Van I', 'i@gmail.com', '123'), ('Ly Thi J', 'j@gmail.com', '123'),
('Ngo Van K', 'k@gmail.com', '123'), ('Phan Thi L', 'l@gmail.com', '123'),
('Truong Van M', 'm@gmail.com', '123'), ('Dinh Thi N', 'n@gmail.com', '123'),
('Lam Van O', 'o@gmail.com', '123'), ('Mai Thi P', 'p@gmail.com', '123'),
('Trinh Van Q', 'q@gmail.com', '123'), ('Luong Thi R', 'r@gmail.com', '123'),
('Kieu Van S', 's@gmail.com', '123'), ('Ha Thi T', 't@gmail.com', '123');

INSERT INTO restaurant (res_name, Image, description) VALUES
('Pizza Hut', 'pizza.jpg', 'Pizza ngon'), ('KFC', 'kfc.jpg', 'Ga ran'),
('Lotteria', 'lotteria.jpg', 'Burger'), ('Haidilao', 'hdl.jpg', 'Lau trung quoc'),
('Phở Hùng', 'pho.jpg', 'Pho truyen thong'), ('Kichi Kichi', 'kichi.jpg', 'Lau bang chuyen'),
('Gogi House', 'gogi.jpg', 'Nuong Han Quoc'), ('Manwah', 'manwah.jpg', 'Lau Dai Loan'),
('Sumo BBQ', 'sumo.jpg', 'Nuong Nhat Ban'), ('The Coffee House', 'tch.jpg', 'Ca phe'),
('Highlands Coffee', 'highlands.jpg', 'Tra sen'), ('Phuc Long', 'phuclong.jpg', 'Tra sua'),
('Sukiya', 'sukiya.jpg', 'Com thit bo'), ('Pepper Lunch', 'pepper.jpg', 'Bit tet'),
('Texas Chicken', 'texas.jpg', 'Ga ran My'), ('Jollibee', 'jollibee.jpg', 'Mi y'),
('King BBQ', 'king.jpg', 'Vua nuong'), ('Thai Express', 'thai.jpg', 'Do an Thai'),
('Sushibar', 'sushi.jpg', 'Sushi tuoi'), ('Wrap & Roll', 'wrap.jpg', 'Goi cuon');

INSERT INTO food_type (type_name) VALUES
('Fast Food'), ('Vietnamese'), ('Japanese'), ('Korean'), ('Chinese'),
('Drinks'), ('Dessert'), ('Healthy'), ('Bakery'), ('Pizza'),
('Pasta'), ('Seafood'), ('BBQ'), ('Hotpot'), ('Snack'),
('Thai Food'), ('Steak'), ('Coffee'), ('Tea'), ('Vegan');

INSERT INTO food (food_name, image, price, description, type_id) VALUES
('Pizza Hai San', 'p1.jpg', 150000, 'Ngon', 10), ('Ga Ran 2 Mieng', 'k1.jpg', 79000, 'Gion', 1),
('Bun Bo Hue', 'b1.jpg', 55000, 'Cay', 2), ('Kimbap', 'kb1.jpg', 45000, 'Han Quoc', 4),
('Sashimi Salmon', 's1.jpg', 200000, 'Tuoi', 3), ('Tra Dao', 'td1.jpg', 35000, 'Mat', 19),
('Banh Mi Thit', 'bm1.jpg', 25000, 'Gion', 2), ('Com Tam', 'ct1.jpg', 45000, 'Suon nuong', 2),
('Lau Thai', 'lt1.jpg', 300000, 'Chua cay', 14), ('Mochi', 'mc1.jpg', 20000, 'Ngot', 7),
('Burger Bo', 'bg1.jpg', 65000, 'Dam da', 1), ('Salad Uc Ga', 'sl1.jpg', 85000, 'Healthy', 8),
('Mi Y Carbonara', 'my1.jpg', 110000, 'Beo', 11), ('Dimsum', 'ds1.jpg', 50000, 'Trung Hoa', 5),
('Tom Nuong', 'tn1.jpg', 180000, 'Hai san', 12), ('Bo Bit Tet', 'st1.jpg', 250000, 'Mem', 17),
('Espresso', 'es1.jpg', 30000, 'Dam da', 18), ('Tra Sua Tran Chau', 'ts1.jpg', 45000, 'Ngot', 19),
('Goi Cuon Tom Thit', 'gc1.jpg', 30000, 'Thanh dam', 2), ('Banh Ngot Phap', 'bn1.jpg', 40000, 'Thom', 9);

INSERT INTO sub_food (sub_name, sub_price, food_id) VALUES
('Them Pho Mai', 20000, 1), ('Them Tuong Ot', 0, 2), ('Them Bun', 10000, 3),
('Them Kim Chi', 5000, 4), ('Them Mu tat', 0, 5), ('Them Thach', 7000, 6),
('Them Cha', 10000, 7), ('Them Trung', 8000, 8), ('Them Bo Vien', 15000, 9),
('Size Lon', 10000, 10), ('Them Thit Bo', 30000, 11), ('Them Sot Salad', 5000, 12),
('Them Bac-on', 15000, 13), ('Them Hanh Phi', 2000, 14), ('Them Muoi Tieu', 0, 15),
('Them Khoai Tay Chien', 25000, 16), ('Them Duong', 0, 17), ('Them Tran Chau', 10000, 18),
('Them Mam Nem', 5000, 19), ('Them Kem', 15000, 20);

INSERT INTO like_res (user_id, res_id, date_like) VALUES
(1, 1, NOW()), (1, 2, NOW()), (1, 3, NOW()), (2, 1, NOW()), (2, 4, NOW()),
(3, 2, NOW()), (3, 5, NOW()), (4, 1, NOW()), (5, 1, NOW()), (6, 6, NOW()),
(7, 7, NOW()), (8, 8, NOW()), (9, 9, NOW()), (10, 10, NOW()), (1, 5, NOW()),
(1, 6, NOW()), (2, 2, NOW()), (3, 1, NOW()), (4, 2, NOW()), (5, 2, NOW());

INSERT INTO rate_res (user_id, res_id, amount, date_rate) VALUES
(1, 1, 5, NOW()), (2, 2, 4, NOW()), (3, 3, 3, NOW()), (4, 4, 5, NOW()), (5, 5, 2, NOW()),
(6, 6, 4, NOW()), (7, 7, 5, NOW()), (8, 8, 3, NOW()), (9, 9, 4, NOW()), (10, 10, 5, NOW()),
(11, 11, 4, NOW()), (12, 12, 5, NOW()), (13, 13, 3, NOW()), (14, 14, 4, NOW()), (15, 15, 5, NOW()),
(16, 16, 2, NOW()), (17, 17, 4, NOW()), (18, 18, 3, NOW()), (19, 19, 5, NOW()), (20, 20, 4, NOW());

INSERT INTO `order` (user_id, food_id, amount, code, arr_sub_id) VALUES
(1, 1, 2, 'ORD001', '1,2'), (1, 3, 1, 'ORD002', '3'), (2, 2, 3, 'ORD003', ''),
(3, 5, 1, 'ORD004', '5'), (4, 10, 5, 'ORD005', '10'), (5, 15, 2, 'ORD006', '15'),
(6, 4, 1, 'ORD007', '4'), (7, 8, 2, 'ORD008', '8'), (8, 12, 1, 'ORD009', '12'),
(9, 16, 1, 'ORD010', '16'), (10, 20, 3, 'ORD011', '20'), (1, 1, 1, 'ORD012', '1'),
(11, 2, 2, 'ORD013', ''), (12, 3, 1, 'ORD014', '3'), (13, 4, 2, 'ORD015', '4'),
(14, 5, 1, 'ORD016', '5'), (15, 6, 4, 'ORD017', '6'), (1, 7, 2, 'ORD018', '7'),
(1, 8, 1, 'ORD019', '8'), (2, 9, 2, 'ORD020', '9');

-- Câu 1:
SELECT u.user_id, u.full_name AS `Họ tên`, COUNT(l.res_id) AS `Tổng số lượt thích`
FROM `user` u 
INNER JOIN like_res l ON u.user_id = l.user_id
GROUP BY u.user_id
ORDER BY `Tổng số lượt thích` DESC
LIMIT 5

-- Câu 2:
SELECT r.res_id, r.res_name AS `Tên nhà hàng`, COUNT(l.user_id) AS `Tổng số lượt thích`
FROM restaurant r
INNER JOIN like_res l ON r.res_id = l.res_id
GROUP BY r.res_id
ORDER BY `Tổng số lượt thích` DESC
LIMIT 2

-- Câu 3:
SELECT u.full_name AS `Họ tên`, COUNT(o.food_id) AS `Số lần mua hàng`
FROM `order` o
INNER JOIN `user` u ON o.user_id = u.user_id
GROUP BY u.user_id
ORDER BY `Số lần mua hàng` DESC
LIMIT 1

-- Câu 4:
SELECT u.user_id, u.full_name
FROM `user` u
LEFT JOIN `order` o ON u.user_id = o.user_id
LEFT JOIN like_res l ON u.user_id = l.user_id
LEFT JOIN rate_res r ON u.user_id = r.user_id
WHERE o.user_id IS NULL 
  AND l.user_id IS NULL 
  AND r.user_id IS NULL
  
ALTER TABLE `order` ADD COLUMN `order_id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY FIRST

-- Thêm khóa chính phức hợp cho bảng like_res
ALTER TABLE `like_res` MODIFY COLUMN `user_id` INT NOT NULL;
ALTER TABLE `like_res` MODIFY COLUMN `res_id` INT NOT NULL;
ALTER TABLE `like_res` ADD PRIMARY KEY (`user_id`, `res_id`);

-- Thêm khóa chính phức hợp cho bảng rate_res
ALTER TABLE `rate_res` MODIFY COLUMN `user_id` INT NOT NULL;
ALTER TABLE `rate_res` MODIFY COLUMN `res_id` INT NOT NULL;
ALTER TABLE `rate_res` ADD PRIMARY KEY (`user_id`, `res_id`);