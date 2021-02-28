const todo = [
  {
    id: 'c9224bbc-ba26-462b-9e5a-0fc514826f66',
    info: 'Crie um todo'
  }
]; 
exports.getAll = () => { return todo }

exports.save = (newTodo) => { todo.push(newTodo)}

exports.findById = (id) => {return todo.find(e => e.id == id) }

exports.editById = (id, newItem) => { 
  const todoItem = todo.find(e => e.id == id)
  todoItem.info = newItem
  return todoItem
}

exports.delete = (id) => { 
  const todoItem = todo.find(e => e.id == id)
  const index = todo.indexOf(todoItem)
  if (index > -1) {
    todo.splice(index, 1)
  }
}