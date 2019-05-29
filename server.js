const express = require('express');
const productRouter = require('./product');
const app = express();
app.use(productRouter);
app.listen(3000, '0.0.0.0', () => {
    console.log(`Server started on port 3000`);
});