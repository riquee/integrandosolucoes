const express = require('express');
const rescue = require('express-rescue');
const Clientes = require('../models/Clientes');
const validateMiddle = require('../middlewares/validateClients');
const clientes = express.Router();

clientes.get(
  '/',
  rescue(async (req, res) => {
    const allClients = await Clientes.getAll();
    res.status(200).json({ allClients });
  }),
);

clientes.post(
  '/',
  validateMiddle,
  rescue(async (req, res, next) => {
    res.status(200).json({ client: req.body });
  }),
);

module.exports = clientes;
