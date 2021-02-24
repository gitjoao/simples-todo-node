const todoModels = require('../models/todoModels')
exports.getAll = (req, res) => {
  const allTodos = todoModels.getAll()
  res.status(200).send(allTodos);
};