const Joi = require('@hapi/joi');

module.exports = Joi.object({ 
  client_id: Joi.required(),
  nome: Joi.string().required(),
  sobrenome: Joi.string().required(),
  telefone: Joi.string().length(15).required(),
  email: Joi.string().required(),
  senha: Joi.string().required(),
});
