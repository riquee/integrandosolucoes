const Joi = require('@hapi/joi');

module.exports = Joi.object({
  clientId: Joi.number().required(),
  nome: Joi.string().required(),
  sobrenome: Joi.string().required(),
  telefone: Joi.string().required(),
  email: Joi.string().required(),
  senha: Joi.string().required(),
});
