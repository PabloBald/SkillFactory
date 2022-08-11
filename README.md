# SkillFactory
<h2>Entregable  1</h2>

<h3><strong>Endpoints</strong>:</h3>

<h4>Products</h4>
<b><i>/products</i></b> - Obtiene todos los productos. Acepta parámetro limit.<br/>
<b><i>/products/:id</i></b> - Obtiene un producto por ID.<br/>
<b><i>/products/prices</i></b> - Obtiene los precios de los productos, cumpliendo con el formato solicitado. Acepta parámetro order ASC o DESC.<br/>
<b><i>/products/categories</i></b> - Retorna un arreglo de objetos que contiene el nombre de cada categoría y un arreglo con los productos pertenecientes a la misma.<br/>
<b><i>/products/categories/expensive</i></b> - Obtiene los productos mas caros de cada categoría.<br/>
<b><i>/products/categories/:category</i></b> - Obtiene los productos de una categoria.<br/>
<h4>Carts</h4>
<b><i>/carts</i></b> - Obtiene todos los carritos. Acepta parámetro limit.<br/>
<b><i>/carts/:id</i></b> - Obtiene un carrito por id.<br/>
<b><i>/carts/bigcarts</i></b> - Obtiene los carritos que contengan mas de 2 productos y con el nombre del usuario al que pertenecen.<br/>
<h4>Users</h4>
<b><i>/users</i></b> - Obtiene todos los usuarios. Acepta parámetro limit.<br/>
<b><i>/users/:id</i></b> - Obtiene un usuario por id.<br/>
<b><i>/users/firsts</i></b> - Obtiene los primeros 3 usuarios ordenados por id.<br/>
