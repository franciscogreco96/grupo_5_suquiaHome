CREATE DATABASE IF NOT EXISTS `suquia_home`;
USE `suquia_home`;


CREATE TABLE `users` (
   `id` INTEGER NOT NULL,
   `first_name` VARCHAR(255) NOT NULL,
   `last_name` VARCHAR(255) NOT NULL,
   `email` VARCHAR(255) NOT NULL,
   `password` TEXT NOT NULL,
   `categoria_id` TEXT NOT NULL,
   `imagen` BOOL,
   `telefono` NUMERIC,
   `id_carrito_compras` INTEGER NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `usersCategory` (
   `id` INTEGER NOT NULL,
   `tipo_categoria` VARCHAR(255) NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `products` (
   `id` INTEGER NOT NULL,
   `nombre` VARCHAR(255) NOT NULL,
   `precio` FLOAT NOT NULL,
   `color_id` VARCHAR(255) NOT NULL,
   `descripcion` TEXT,
   `categoria_id` INTEGER NOT NULL,
   `imagen` BOOL,
   `stock` INTEGER,
   `descuento` FLOAT,
   PRIMARY KEY (`id`)
);

CREATE TABLE `productsCategory` (
   `id` INTEGER NOT NULL,
   `categoria` VARCHAR(255) NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `productCartDetail` (
   `id` INTEGER NOT NULL,
   `producto_id` INTEGER NOT NULL,
   `carrito_compras_id` INTEGER NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `productCart` (
   `id` INTEGER NOT NULL,
   `usuario_id` INTEGER NOT NULL,
   `cantidad_items` INTEGER NOT NULL,
   `precio_total` INTEGER NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `productsColor` (
   `id` INTEGER NOT NULL,
   `color` VARCHAR(255) NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `products_users` (
   `id` INTEGER NOT NULL,
   `product_id` INTEGER NOT NULL,
   `user_id` INTEGER NOT NULL,
   PRIMARY KEY (`id`)
);



ALTER TABLE `users` ADD CONSTRAINT `FK_a963056b-3a6f-44a5-a152-662f4468e6e0` FOREIGN KEY (`id_carrito_compras`) REFERENCES `productCart`(`id`)  ;

ALTER TABLE `products` ADD CONSTRAINT `FK_fd6cdd7b-f24a-4a22-9b9d-45f47ddb53bb` FOREIGN KEY (`categoria_id`) REFERENCES `productsCategory`(`id`)  ;

ALTER TABLE `products` ADD CONSTRAINT `FK_67e5908a-cf44-40f0-ad32-27fb9defaa1f` FOREIGN KEY (`color_id`) REFERENCES `productsColor`(`id`)  ;

ALTER TABLE `productCartDetail` ADD CONSTRAINT `FK_8694d6d4-e082-44b6-9b98-23b1d5b05d2b` FOREIGN KEY (`producto_id`) REFERENCES `products`(`id`)  ;

ALTER TABLE `productCartDetail` ADD CONSTRAINT `FK_dc952114-4bcb-4cea-9844-37e5872650ae` FOREIGN KEY (`carrito_compras_id`) REFERENCES `productCart`(`id`)  ;

ALTER TABLE `products_users` ADD CONSTRAINT `FK_6fd35e41-a0fb-4e99-9a3c-aa125975ee33` FOREIGN KEY (`product_id`) REFERENCES `products`(`id`)  ;

ALTER TABLE `products_users` ADD CONSTRAINT `FK_0da4f09f-a58b-4104-8a15-09aa9e6f6c9e` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`)  ;