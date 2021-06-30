const Joi = require('@hapi/joi');

module.exports = Joi.object({
  cnpj: Joi.string().max(18).required(),
  nomeFantasia: Joi.string().required(),
  razaoSocial: Joi.string().required(),
  cep: Joi.string().max(9).required(),
  endereco: Joi.string().required(),
  numero: Joi.number().required(),
  complemento: Joi.string().required(),
  bairro: Joi.string().required(),
  cidade: Joi.string().required(),
  uf: Joi.string().required(),
});
