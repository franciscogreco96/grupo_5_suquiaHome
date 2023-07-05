/* COLORES */

INSERT INTO `productscolors` (`id`,`color`) VALUES (1,'NEGRO');
INSERT INTO `productscolors` (`id`,`color`) VALUES (2,'BLANCO');
INSERT INTO `productscolors` (`id`,`color`) VALUES (3,'MARRON');
INSERT INTO `productscolors` (`id`,`color`) VALUES (4,'AZUL');
INSERT INTO `productscolors` (`id`,`color`) VALUES (5,'ROJO');



/* CATEGORIAS USUARIOS */

INSERT INTO `userscategories` (`id`,`tipo_categoria`) VALUES (1,'Administrador');
INSERT INTO `userscategories` (`id`,`tipo_categoria`) VALUES (2,'Usuario');

/* CATEGORIA PRODUCTOS */

INSERT INTO `productscategories` (`id`,`categoria`) VALUES (1,'MESAS');
INSERT INTO `productscategories` (`id`,`categoria`) VALUES (2,'SILLAS Y SILLONES');
INSERT INTO `productscategories` (`id`,`categoria`) VALUES (3,'HOME DECOR');
INSERT INTO `productscategories` (`id`,`categoria`) VALUES (4,'MUEBLES');
INSERT INTO `productscategories` (`id`,`categoria`) VALUES (5,'CERAMICA');
INSERT INTO `productscategories` (`id`,`categoria`) VALUES (6,'MARMOL');


/* PRODUCTOS */ 

INSERT INTO products (id, nombre,precio,color_id, descripcion, categoria_id, imagen, stock, descuento) VALUES
 (3,"Mesa Neolith Beton + Base de Caño Modelo 'H'",900000,1, "2,40x1,20m",1, "../../img/products/MESA-NEOLITH-BETON.jpg",2,5),
 (4,"Dressoire Granito Negro Brasil Leather + Base madera Paraíso",350000,1, "2,40x1,20m",1, "../../img/products/imagen-1680390493194.jpeg",2,5),
 (5,"Dressoire Mármol Negro Marquina + Base Hierro Negra",41000,1, "2,40x1,20m",1, "../../img/products/DRESSOIRE-MARMOL-NEGRO-MARQUINA.jpg",2,5),
 (6,"Mesa Auxiliar Marmol Carrara + Base Hierro Dorada",900000,1, "2,40x1,20m",1, "../../img/products/MESA-AUXILIAR-MARMOL-CARRARA.jpg",2,10),
 (7,"Mesa Neolith Nero + Base de Madera Modelo 'CUADROS'",100000,1, "2,40x1,20m",1, "../../img/products/MESA-NEOLITH-NERO.jpg",2,12),
 (8,"Silla Matera Blanca",120000,1, "2,40x1,20m",1, "../../img/products/SILLA-MATERA-BLANCA.jpg",2,8),
 (9,"Silla Matera Negra",120000,1, "2,40x1,20m",1, "../../img/products/SILLA-MATERA-NEGRA.jpg",2,12),
 (10,"Sillas Deluxe Natuarls",900000,1, "2,40x1,20m",1, "../../img/products/COMBO-SILLAS-DELUXE.jpg",2,15),
 (11,"Taza + Platito",900000,1, "2,40x1,20m",1,"../../img/products/taza.jpeg",2,7),
 (12, "Mesa Neolith Calacatta + Base de Madera Petiribi Modelo 'W'",900000,1, "2,40x1,20m",1, "../../img/products/mesa-neolith-estatuario-pulido.jpeg",2,10),
 (13,"Mesa Neolith Calacatta + Base de Madera Petiribi Modelo 'H'",75000,1, "2,40x1,20m",1, "../../img/products/mesa-neolitj-calacatta.jpeg",2,4);


/* USUARIOS */

INSERT INTO users (id,first_name,last_name,email,password,categoria_id,imagen,telefono,id_carrito_compras) VALUES 
 (1,'francisco','greco','franciscogreco@marmolessuquia.com','$2a$10$3.FpgHBurAMqjIEY9eVbH.lSuVg0r2lXLx4TGAenIqaua7PiYgyiG',1,'../../img/users/fotoPerfil-1685918601749.png',2147483647,NULL),
 (2,'mauricio','ledesma','mauriledes@gmail.com','$2a$10$MPNE.Xmc1M7OAd6BpA6rjO2k5zdksJuYzTH4VTmOFqkpOsCbF9R.W',2,'../../img/users/fotoPerfil-1687389164511.jpg',2147483647,NULL),
 (3,'juan','guidi','juang@hotmail.com','$2a$10$k.YucTrGpgdglDIvnaLC/OfCMvfFxXNn8NY.Pihk/oGyS6TueOqDK',1,'../../img/users/fotoPerfil-1687389221559.jpg',2147483647,NULL),
 (4,'gaston','alarcia','gastialarcia@gmail.com','$2a$10$/u5ouW7salE//SbDy/32IuAmBh40KS43qQwQ.cVLBfbheAN7FpRuS',2,'../../img/users/fotoPerfil-1687389263719.jpg',2147483647,NULL),
 (5,'milena','merlin','merlinmil@hotmail.com','$2a$10$U3f9uAnJw40t3opRf76q8uJW9wEUjGhW8icvEB3wEL0tdmLTVnbDO',1,'../../img/users/fotoPerfil-1687389304611.png',2147483647,NULL),
 (6,'ron','oliva','oliva@gmail.com','$2a$10$3h0O3J.mpgadEzrbiiFr/.flGKbgWxD5/u5oMQ5sQnjy1Hf5Cq0Oa',2,'../../img/users/fotoPerfil-1687389348307.jpg',2147483647,NULL),
 (7,'roman','gud','gudroman@hotmail.com','$2a$10$YLq9wAfSG0tGAocSDAUV7eroyOvzOV9UoMtgG0LRXpcphj/gRNm1i',2,'../../img/users/fotoPerfil-1687389404344.png',2147483647,NULL),
 (8,'santos','roter','rotersantos@marmolessuquia.com','$2a$10$HQkqrKRFASWK4/fBsCBhveV5jK219kr.PTrzsa0na657vqnipahnK',2,'../../img/users/fotoPerfil-1687389438356.png',2147483647,NULL),
 (9,'pablo','gre','pablogre@marmolessuquia.com','$2a$10$NkkoZ2JUuEjZt0.Q5AnRZuMmc/wt4Hn6jdT1QU4MZcw7We6tSiaQq',1,'../../img/users/fotoPerfil-1687389471940.jpg',2147483647,NULL),
 (10,'luca','mont','lucamont@marmolessuquia.com','$2a$10$Yc9mIn8HZGOGkLunhaRyQ.RmNvIs8.5TxNyLQvkIf0PhqEeecfg8C',1,'../../img/users/fotoPerfil-1687389503294.jpg',2147483647,NULL),
 (11,'franco','monta','montafranco@marmolessuquia.com','$2a$10$MJL1y4yamWTeniqEbNseJOMUMlscLXmtq2QsXmqpD9K4cRcdehVgq',2,'../../img/users/fotoPerfil-1687389539258.jpg',2147483647,NULL);



        
    