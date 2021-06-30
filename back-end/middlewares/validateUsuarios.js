const Usuarios = require('../schema/Usuarios');

module.exports = (req, res, next) => {
  const { Error } = Usuarios.validate(req);
  if (Error) next(Error);
  next();
};
