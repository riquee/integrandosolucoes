const Usuarios = require('../schema/Usuarios');

module.exports = (req, res, next) => {
  const { error } = Usuarios.validate(req.body);
  if (error) next(error);
  next();
};
