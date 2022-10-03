
 
export const detailsSchema = Joi.object().keys({details: Joi.object().keys({name: Joi.string(), location: Joi.string(), mobile: Joi.number().integer()})})