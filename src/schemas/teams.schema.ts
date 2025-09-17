import Joi from 'joi';

export const createTeamSchema = Joi.object({
  name: Joi.string().min(2).max(100).required().messages({
    'string.min': 'Nome do time deve ter pelo menos 2 caracteres',
    'string.max': 'Nome do time deve ter no máximo 100 caracteres',
    'any.required': 'Nome do time é obrigatório'
  }),
  city: Joi.string().min(2).max(50).optional().messages({
    'string.min': 'Cidade deve ter pelo menos 2 caracteres',
    'string.max': 'Cidade deve ter no máximo 50 caracteres'
  }),
  state: Joi.string().min(2).max(50).optional().messages({
    'string.min': 'Estado deve ter pelo menos 2 caracteres',
    'string.max': 'Estado deve ter no máximo 50 caracteres'
  }),
  country: Joi.string().min(2).max(50).optional().messages({
    'string.min': 'País deve ter pelo menos 2 caracteres',
    'string.max': 'País deve ter no máximo 50 caracteres'
  }),
  founded: Joi.number().integer().min(1800).max(new Date().getFullYear()).optional().messages({
    'number.min': 'Ano de fundação deve ser maior que 1800',
    'number.max': 'Ano de fundação não pode ser no futuro'
  }),
  description: Joi.string().max(1000).optional().messages({
    'string.max': 'Descrição deve ter no máximo 1000 caracteres'
  }),
  website: Joi.string().uri().optional().messages({
    'string.uri': 'Website deve ser uma URL válida'
  })
});

export const updateTeamSchema = Joi.object({
  name: Joi.string().min(2).max(100).optional(),
  city: Joi.string().min(2).max(50).optional(),
  state: Joi.string().min(2).max(50).optional(),
  country: Joi.string().min(2).max(50).optional(),
  founded: Joi.number().integer().min(1800).max(new Date().getFullYear()).optional(),
  description: Joi.string().max(1000).optional(),
  website: Joi.string().uri().optional()
});
