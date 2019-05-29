const express = require('express');

const router = express.Router();

router.post('/product', (request, response) => {
    const title = request.body.title;
    const description = request.body.description;
    const price = request.body.price;
    const rating = request.body.rating;

    const statement = `insert into Product 
        (title, description, price, rating) values
        ('${title}', '${description}', ${price}, ${rating})`;
    const connection = db.connect();
    connection.query(statement, (error, products) => {
        connection.end();
        response.send(utils.createResponse(error, products));
    });
});



module.exports = router;