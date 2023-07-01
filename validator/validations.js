import Joi from "joi"

export const contactValidationSchema = Joi.object({
    email: Joi.string().email().required().messages({
        "string.base": "Email must be a string.",
        "string.email": "Please provide a valid email address.",
        "any.required": "Email is required.",
      }),
})