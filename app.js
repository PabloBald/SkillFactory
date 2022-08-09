const express = require('express');
const app = express();
const port = process.env.PORT || 3000
const productsRoutes = require('./routes/productsRoutes');
const errorHandler = require('./middlewares/errorHandler');

app.use('/products',productsRoutes);
app.use('/',errorHandler.notFound);

app.listen(port,()=>{
    console.log(`Listening at http://localhost:${port}`);
})