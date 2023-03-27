const Joi = require("joi");

module.exports = ({ contactsDB }) => {
  return async function (req, res) {

    await contactsDB.deleteContact(req.body);

    res.status(200).end();
  };
};
