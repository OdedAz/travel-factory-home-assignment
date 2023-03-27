module.exports = ({ contactsDB, validate, DatabaseTablesSchemes }) => {
    // here after validating we call the db controller to create
    return async function (req, res) {
      const body = validate(DatabaseTablesSchemes.contactScheme, req.body);
      await contactsDB.createContact(body);
      res.status(200).end();
    };
  };
  