# SkillFactory
Entregable numero 1.

Endpoints:
/products - Obtiene todos los productos. Acepta parámetro limit.
/products/:id - Obtiene un producto por ID.
/products/prices - Obtiene los precios de los productos, cumpliendo con el formato solicitado. Acepta parámetro order ASC o DESC.
/products/categories - Retorna un arreglo de objetos que contiene el nombre de cada categoría y un arreglo con los productos pertenecientes a la misma.
/products/categories/expensive - Obtiene los productos mas caros de cada categoría.
/products/categories/:category - Obtiene los productos de una categoria.
/carts - Obtiene todos los carritos. Acepta parámetro limit.
/carts/:id - Obtiene un carrito por id.
/carts/bigcarts - Obtiene los carritos que contengan mas de 2 productos y con el nombre del usuario al que pertenecen.
/users - Obtiene todos los usuarios. Acepta parámetro limit.
/users/:id - Obtiene un usuario por id.
/users/firsts - Obtiene los primeros 3 usuarios ordenados por id.
