const express = require('express');

const router = express.Router();



router.post('/category', (request, response) => {
    const title = request.body.title;
    const description = request.body.description;

    const statement = `insert into Category (title, description) values ('${title}', '${description}')`;
    const connection = db.connect();
    connection.query(statement, (error, result) => {
        connection.end();
        response.send(utils.createResponse(error, result));
    });
});


module.exports = router;