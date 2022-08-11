const express = require('express');
const app = express();
const port = process.env.PORT || 3000
const productsRoutes = require('./src/routes/productsRoutes');
const cartsRoutes = require('./src/routes/cartRoutes');
const usersRoutes = require('./src/routes/usersRoutes');
const errorHandler = require('./src/middlewares/errorHandler');
const dateLogger = require('./src/middlewares/date')

app.use(dateLogger)
app.use('/products', productsRoutes);
app.use('/carts', cartsRoutes);
app.use('/users',usersRoutes);
app.use(errorHandler.notFound);

app.listen(port,()=>{
    console.log(`Listening at http://localhost:${port}`);
})