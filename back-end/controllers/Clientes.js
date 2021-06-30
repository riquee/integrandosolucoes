const express = require('express');
const rescue = require('express-rescue');
const Clientes = require('../models/Clientes');
const validateMiddle = require('../middlewares/validateClients');
const clientes = express.Router();

clientes.get(
  '/',
  rescue(async (req, res) => {
    const allClients = await Clientes.getAll();
    res.status(200).json({ clientes:  allClients });
  }),
);

clientes.post(
  '/',
  validateMiddle,
  rescue(async (req, res) => {
    const cliente = await Clientes.create(req.body);
    res.status(200).json(cliente);
  }),
);

module.exports = clientes;
