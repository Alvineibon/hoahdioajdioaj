CREATE TABLE IF NOT EXISTS `Devices` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) ,
  `owner` VARCHAR(255),
  `producttype` VARCHAR(255),
  PRIMARY KEY (`id`)
);
GRANT ALL PRIVILEGES ON userapi.Devices TO 'userapi'@'%';