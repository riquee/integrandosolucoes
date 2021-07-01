const Joi = require('@hapi/joi');

module.exports = Joi.object({
  client_id: Joi.number().strict().required(),
  nome: Joi.string().required(),
  sobrenome: Joi.string().required(),
  telefone: Joi.string().required(),
  email: Joi.string().required(),
  senha: Joi.string().required(),
});
