const express = require('express');
const router = express.Router();
router.get('/', function (req, res, next) {
    res.status(200).send({
        title: "Node Express API",
        version: "0.0.1",
        get: "Route to list all itens GET - /todo",
        post: "Route to create itens POST - /todo body with property 'info' JSON",
        getIten: "Route to get item GET - /todo/{id}",
        put: "Route to edit item PUT - /todo/{id} body with property 'info' JSON",
        delete: "Route to delete item DELETE - /todo/{id}",
    });
});
module.exports = router;