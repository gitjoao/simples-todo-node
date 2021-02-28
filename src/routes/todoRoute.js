const express = require('express');
const router = express.Router();
const controller = require('../controllers/todoController')
router.get('/', controller.getAll);
router.post('/', controller.create);
router.get('/:id', controller.find);
router.put('/:id', controller.edit);
router.delete('/:id', controller.delete);
module.exports = router;