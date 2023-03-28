const config = require("./lib/services/config");
const app = require("./lib/app");
const ContactsDBController = require("./lib/AppDBController/contactsDBController");
const DatabaseTablesSchemes = require("./lib/JoiDBSchemes/DatabaseTablesSchemes");
const validate = require("./lib/services/Validator");
async function main() {
    try {
        const contactsDB = new ContactsDBController(config.dbCredentials.db);
        await contactsDB.testConnection();

        const services = {
            contactsDB,
            DatabaseTablesSchemes,
            validate
        }
        app(config, services);
    }catch(error){
        console.log(error);
    }
}
main();