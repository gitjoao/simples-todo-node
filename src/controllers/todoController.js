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

exports.find = (req, res) => {
 const todo = todoModels.findById(req.params.id)
  if (todo !== undefined) {
    res.status(200).send(todo);
  } else {
    res.status(400).send('not found');
  }
};

exports.edit = (req, res) => {
  const id = req.params.id
  const newData = req.body['info']
  const existTodo = todoModels.findById(id)
  if (existTodo !== undefined) {
     const todo = todoModels.editById(id, newData)
     res.status(200).send(todo);
   } else {
     res.status(400).send('not found');
   }
 };

 exports.delete = (req, res) => {
  const id = req.params.id
  const existTodo = todoModels.findById(id)
  if (existTodo !== undefined) {
    todoModels.delete(id)
     res.status(204).send();
   } else {
     res.status(400).send('not found');
   }
 };