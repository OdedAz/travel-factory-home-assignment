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

  async createContact(req) {
    return this._knex("contacts").insert(req);
  }

  async updateContact(req) {
    return this._knex("contacts").where({ id: req.id }).update(req);
  }
  async deleteContact(req) {
    return this._knex("contacts").where({ id: req.id }).delete();
  }
};