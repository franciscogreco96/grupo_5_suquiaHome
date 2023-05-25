DROP DATABASE IF EXISTS `suquia_home`;

CREATE DATABASE IF NOT EXISTS `suquia_home`;
USE `suquia_home`;


CREATE TABLE `users` (
   `id` INTEGER NOT NULL AUTO_INCREMENT,
   `first_name` VARCHAR(255) NOT NULL,
   `last_name` VARCHAR(255) NOT NULL,
   `email` VARCHAR(255) NOT NULL,
   `password` TEXT NOT NULL,
   `categoria_id` INTEGER NOT NULL,
   `imagen` VARCHAR(255),
   `telefono` INTEGER, 
   `id_carrito_compras` INTEGER NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `usersCategories` (
   `id` INTEGER NOT NULL AUTO_INCREMENT,
   `tipo_categoria` VARCHAR(255) NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `products` (
   `id` INTEGER NOT NULL AUTO_INCREMENT,
   `nombre` VARCHAR(255) NOT NULL,
   `precio` FLOAT NOT NULL,
   `color_id` INTEGER NOT NULL,
   `descripcion` TEXT,
   `categoria_id` INTEGER NOT NULL,
   `imagen` VARCHAR(255),
   `stock` INTEGER,
   `descuento` FLOAT,
   PRIMARY KEY (`id`)
);

CREATE TABLE `productsCategories` (
   `id` INTEGER NOT NULL AUTO_INCREMENT,
   `categoria` VARCHAR(255) NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `productCartDetails` (
   `id` INTEGER NOT NULL AUTO_INCREMENT,
   `producto_id` INTEGER NOT NULL,
   `carrito_compras_id` INTEGER NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `productCarts` (
   `id` INTEGER NOT NULL AUTO_INCREMENT,
   `usuario_id` INTEGER NOT NULL,
   `cantidad_items` INTEGER NOT NULL,
   `precio_total` FLOAT NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `productsColors` (
   `id` INTEGER NOT NULL AUTO_INCREMENT,
   `color` VARCHAR(255) NOT NULL,
   PRIMARY KEY (`id`)
);


ALTER TABLE `users` ADD CONSTRAINT `FK_a963056b-3a6f-44a5-a152-662f4468e6e0` FOREIGN KEY (`id_carrito_compras`) REFERENCES `productCarts`(`id`)  ;


ALTER TABLE `products` ADD CONSTRAINT `FK_fd6cdd7b-f24a-4a22-9b9d-45f47ddb53bb` FOREIGN KEY (`categoria_id`) REFERENCES `productsCategories`(`id`)  ;

ALTER TABLE `products` ADD CONSTRAINT `FK_67e5908a-cf44-40f0-ad32-27fb9defaa1f` FOREIGN KEY (`color_id`) REFERENCES `productsColors`(`id`)  ;

ALTER TABLE `productCartDetails` ADD CONSTRAINT `FK_8694d6d4-e082-44b6-9b98-23b1d5b05d2b` FOREIGN KEY (`producto_id`) REFERENCES `products`(`id`)  ;

ALTER TABLE `productCartDetails` ADD CONSTRAINT `FK_dc952114-4bcb-4cea-9844-37e5872650ae` FOREIGN KEY (`carrito_compras_id`) REFERENCES `productCarts`(`id`)  ;

ALTER TABLE `productCarts` ADD CONSTRAINT `FK_486f01a6-5d4d-4c38-8f47-25553db9a243` FOREIGN KEY (`usuario_id`) REFERENCES `users`(`id`)  ;


ALTER TABLE `users` ADD CONSTRAINT `FK_6dbadf0e-b2cd-4b92-a909-0ce6e7a1b37a` FOREIGN KEY (`categoria_id`) REFERENCES `usersCategories`(`id`) ;



