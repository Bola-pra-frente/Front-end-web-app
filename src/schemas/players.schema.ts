import Joi from 'joi';

export const createPlayerSchema = Joi.object({
  firstName: Joi.string().min(2).max(50).required().messages({
    'string.min': 'Nome deve ter pelo menos 2 caracteres',
    'string.max': 'Nome deve ter no máximo 50 caracteres',
    'any.required': 'Nome é obrigatório'
  }),
  lastName: Joi.string().min(2).max(50).required().messages({
    'string.min': 'Sobrenome deve ter pelo menos 2 caracteres',
    'string.max': 'Sobrenome deve ter no máximo 50 caracteres',
    'any.required': 'Sobrenome é obrigatório'
  }),
  position: Joi.string().valid('GK', 'DF', 'MF', 'FW').required().messages({
    'any.only': 'Posição deve ser GK, DF, MF ou FW',
    'any.required': 'Posição é obrigatória'
  }),
  age: Joi.number().integer().min(14).max(50).required().messages({
    'number.min': 'Idade deve ser pelo menos 14 anos',
    'number.max': 'Idade deve ser no máximo 50 anos',
    'any.required': 'Idade é obrigatória'
  }),
  teamId: Joi.string().optional().messages({
    'string.base': 'ID do time deve ser uma string válida'
  }),
  height: Joi.number().positive().optional().messages({
    'number.positive': 'Altura deve ser um número positivo'
  }),
  weight: Joi.number().positive().optional().messages({
    'number.positive': 'Peso deve ser um número positivo'
  }),
  dominantFoot: Joi.string().valid('LEFT', 'RIGHT', 'BOTH').optional().messages({
    'any.only': 'Pé dominante deve ser LEFT, RIGHT ou BOTH'
  }),
  bio: Joi.string().max(500).optional().messages({
    'string.max': 'Biografia deve ter no máximo 500 caracteres'
  })
});

export const updatePlayerSchema = Joi.object({
  firstName: Joi.string().min(2).max(50).optional(),
  lastName: Joi.string().min(2).max(50).optional(),
  position: Joi.string().valid('GK', 'DF', 'MF', 'FW').optional(),
  age: Joi.number().integer().min(14).max(50).optional(),
  teamId: Joi.string().optional(),
  height: Joi.number().positive().optional(),
  weight: Joi.number().positive().optional(),
  dominantFoot: Joi.string().valid('LEFT', 'RIGHT', 'BOTH').optional(),
  bio: Joi.string().max(500).optional()
});
