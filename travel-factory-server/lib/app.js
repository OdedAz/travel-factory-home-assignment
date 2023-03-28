const express = require("express");
const cors = require("cors");
require("express-async-errors");

const ContactsController = require("./controllers/contactsController");

module.exports = (config, services) => {
  const app = express();
  app.use(cors());
  app.use(express.json());

  app.use("/contacts", ContactsController(services))

  app.use((err, req, res, next) => {
    console.log(err);
    res.status(500);
  });

  app.listen(config.dbCredentials.port, () => {
    console.log(`start listening on port: ${config.dbCredentials.port}`);
  });
};
