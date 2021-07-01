const Clientes = require('../models/Clientes');

module.exports = {
  getAll: Clientes.getAll,
  create: Clientes.create,
};
