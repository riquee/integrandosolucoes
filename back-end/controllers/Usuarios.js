const express = require('express');
const rescue = require('express-rescue');
const Usuarios = require('../services/Usuarios');
const validateMiddle = require('../middlewares/validateUsuarios');
const usuarios = express.Router();

usuarios.get(
  '/',
  rescue(async (req, res) => {
    const allUsers = await Usuarios.getAll();
    res.status(200).json({ usuarios:  allUsers });
  }),
);

usuarios.post(
  '/',
  validateMiddle,
  rescue(async (req, res) => {
    const usuario = await Usuarios.create(req.body);
    res.status(200).json(usuario);
  }),
);

module.exports = usuarios;
