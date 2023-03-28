exports.up = function (knex) {
  return knex.schema
    .createTable("contacts", (table) => {
      table.increments("id").notNullable().primary();
      table.string("contact_name").notNullable();
      table.string("contact_address");
      table.string("work_place");
      table.string("work_address_line_1");
      table.string("work_address_line_2");
      table.string("contact_phone").notNullable();
      table.string("contact_job_title");
      table.string("contact_logo");
      table.timestamps(true, true);
    })
};

exports.down = function (knex) {
  return knex.schema
    .dropTable("contacts")
};

