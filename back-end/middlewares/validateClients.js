const Clientes = require('../schema/Clientes');

module.exports = (req, res, next) => {
  const { error } = Clientes.validate(req.body);
  if (error) next(error);
  next();
};
