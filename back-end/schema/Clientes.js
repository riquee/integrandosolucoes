const Joi = require('@hapi/joi');

module.exports = Joi.object({
  cnpj: Joi.string().length(18).required(),
  nomeFantasia: Joi.string().required(),
  razaoSocial: Joi.string().required(),
  cep: Joi.string().length(9).required(),
  endereco: Joi.string().required(),
  numero: Joi.number().strict().required(),
  complemento: Joi.string().required(),
  bairro: Joi.string().required(),
  cidade: Joi.string().required(),
  uf: Joi.string().required(),
});