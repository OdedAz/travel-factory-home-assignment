const knex = require("knex");

module.exports = class PetsDatabase {
  constructor(config) {
    this._knex = knex(config);
  }

  async testConnection() {
    return this._knex.raw("select 1");
  }

  // CONTACT ENDPOINTS
  async getAllContacts() {
    return this._knex("contacts").select("*");
  }

  async createContact(contact) {
    return this._knex("contacts").insert(contact);
  }

  async updateContact(contact) {
    return this._knex("contacts").where({ id: contact.id }).update(contact);
  }
  async deleteContact(contact) {
    return this._knex("contacts").where({ id: contact.id }).delete();
  }
};