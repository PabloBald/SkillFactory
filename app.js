const express = require('express');
const app = express();
const port = process.env.PORT || 3000
const productsRoutes = require('./routes/productsRoutes');

app.use('/',productsRoutes)
app.listen(port,()=>{
    console.log(`Listening at http://localhost:${port}`);
})