const j = ['a', 'b', 'c']; 

exports.getAll = (req, res) => {
  res.status(201).send(j);
};