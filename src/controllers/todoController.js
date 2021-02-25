const todoModels = require('../models/todoModels')
const { v4: uuidv4 } = require('uuid');
exports.getAll = (req, res) => {
  const allTodos = todoModels.getAll()
  res.status(200).send(allTodos);
};

exports.create = (req, res) => {
  const newTodo = {
    id: uuidv4(),
    info: req.body['info']
  }
  todoModels.save(newTodo)
  res.status(201).send(newTodo);
};