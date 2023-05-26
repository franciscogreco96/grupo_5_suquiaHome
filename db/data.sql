/* COLORES */

INSERT INTO `productscolors` (`id`,`color`) VALUES (1,'NEGRO');
INSERT INTO `productscolors` (`id`,`color`) VALUES (2,'BLANCO');
INSERT INTO `productscolors` (`id`,`color`) VALUES (3,'MARRON');
INSERT INTO `productscolors` (`id`,`color`) VALUES (4,'AZUL');
INSERT INTO `productscolors` (`id`,`color`) VALUES (5,'ROJO');

/* CATEGORIAS USUARIOS */

INSERT INTO `userscategories` (`id`,`tipo_categoria`) VALUES (1,'Administrador');
INSERT INTO `userscategories` (`id`,`tipo_categoria`) VALUES (2,'Usuario');productscategories

/* CATEGORIA PRODUCTOS */

INSERT INTO `productscategories` (`id`,`categoria`) VALUES (1,'INTERIOR');
INSERT INTO `productscategories` (`id`,`categoria`) VALUES (2,'EXTERIOR');
INSERT INTO `productscategories` (`id`,`categoria`) VALUES (3,'BAZAR');
INSERT INTO `productscategories` (`id`,`categoria`) VALUES (4,'SILLAS');
INSERT INTO `productscategories` (`id`,`categoria`) VALUES (5,'MESAS');


/* PRODUCTOS */ 

INSERT INTO products (id, nombre,precio,color_id, descripcion, categoria_id, imagen, stock, descuento) VALUES
 (3,"Mesa Neolith Beton + Base de Caño Modelo 'H'",900000,1, "2,40x1,20m",1, "../../img/products/MESA-NEOLITH-BETON.jpg",2,5),
 (4,"Dressoire Granito Negro Brasil Leather + Base madera Paraíso",350000,1, "2,40x1,20m",1, "../../img/products/imagen-1680390493194.jpeg",2,5),
 (5,"Dressoire Mármol Negro Marquina + Base Hierro Negra",41000,1, "2,40x1,20m",1, "../../img/products/DRESSOIRE MARMOL NEGRO MARQUINA.jpg",2,5),
 (6,"Mesa Auxiliar Marmol Carrara + Base Hierro Dorada",900000,1, "2,40x1,20m",1, "../../img/products/MESA AUXILIAR MARMOL CARRARA.jpg",2,10),
 (7,"Mesa Neolith Nero + Base de Madera Modelo 'CUADROS'",100000,1, "2,40x1,20m",1, "../../img/products/MESA NEOLITH NERO.jpg",2,12),
 (8,"Silla Matera Blanca",120000,1, "2,40x1,20m",1, "../../img/products/SILLA MATERA BLANCA.jpg",2,8),
 (9,"Silla Matera Negra",120000,1, "2,40x1,20m",1, "../../img/products/SILLA MATERA NEGRA.jpg",2,12),
 (10,"Sillas Deluxe Natuarls",900000,1, "2,40x1,20m",1, "../../img/products/COMBO SILLAS DELUXE.jpg",2,15),
 (11,"Taza + Platito",900000,1, "2,40x1,20m",1,"../../img/products/taza.jpeg",2,7),
 (12, "Mesa Neolith Calacatta + Base de Madera Petiribi Modelo 'W'",900000,1, "2,40x1,20m",1, "../../img/products/mesa neolith estatuario pulido.jpeg",2,10),
 (13,"Mesa Neolith Calacatta + Base de Madera Petiribi Modelo 'H'",75000,1, "2,40x1,20m",1, "../../img/products/mesa neolitj calacatta.jpeg",2,4)

        
    