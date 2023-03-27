const Joi = require("joi");

module.exports = ({ contactsDB, validate, DatabaseTablesSchemes }) => {
  return async function (req, res) {
    const body = validate(DatabaseTablesSchemes.contactScheme, req.body);

    await contactsDB.updateContact(body);

    res.status(200).end();
  };
};
