import * as Joi from 'joi';

export const joiValidationSchema = Joi.object({
  NODE_ENV: Joi.string()
    .valid('development', 'production', 'test', 'provision')
    .default('development'),
  PORT: Joi.number().default(3001),
  MONGODB_URI: Joi.string().required(),
  DEFAULT_LIMIT: Joi.number().default(5),
});
