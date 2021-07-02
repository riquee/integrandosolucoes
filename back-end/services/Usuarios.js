const Usuarios = require('../models/Usuarios');

module.exports = {
  getAll: Usuarios.getAll,
  create: Usuarios.create,
};
