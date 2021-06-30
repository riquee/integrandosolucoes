const express = require('express');
const Clientes = require('../models/Clientes');

const clientes = express.Router();

clientes.get('/', async (req, res) => {
  const allClients = await Clientes.getAll();
  res.status(200).json({ allClients });
});

module.exports = clientes;
