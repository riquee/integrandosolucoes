const Clientes = require('../schema/Clientes');

module.exports = (req, res, next) => {
  const { Error } = Clientes.validate(req);
  if (Error) next(Error);
  next();
};
