const Joi = require('@hapi/joi');

module.exports = Joi.object({
  cnpj: Joi.string().length(18).required(),
  nome_fantasia: Joi.string().required(),
  razao_social: Joi.string().required(),
  cep: Joi.string().length(9).required(),
  endereco: Joi.string().required(),
  numero: Joi.required(),
  complemento: Joi.optional(),
  bairro: Joi.string().required(),
  cidade: Joi.string().required(),
  uf: Joi.string().required(),
});
