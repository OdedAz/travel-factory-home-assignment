const router = require('express').Router();

const CreateContactHandler = require("../handlers/contacts/create");
const GetContactsHandler = require("../handlers/contacts/get_all");
const UpdateHandler = require("../handlers/contacts/update");
const DeleteHandler = require("../handlers/contacts/delete");

module.exports = (services) => {
    // All the routers for that handler
    router.get('/get_all', GetContactsHandler(services))
    router.post('/create', CreateContactHandler(services))
    router.patch('/update', UpdateHandler(services))
    router.delete('/delete', DeleteHandler(services))

    return router;

}