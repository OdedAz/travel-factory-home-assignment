const Joi = require("joi");

module.exports = {
    contactScheme: Joi.object().keys({
        id: Joi.number().optional(),
        contact_name: Joi.string().required(),
        contact_address: Joi.string().allow(null, ''),
        work_place: Joi.string().allow(null, ''),
        work_address_line_1: Joi.string().allow(null, ''),
        work_address_line_2: Joi.string().allow(null, ''),
        contact_phone: Joi.string()
          .pattern(/^[+()0-9\s-]*$/).required(),
        contact_job_title: Joi.string().allow(null, ''),
        contact_logo: Joi.string().allow(null, ''),
      }),
}