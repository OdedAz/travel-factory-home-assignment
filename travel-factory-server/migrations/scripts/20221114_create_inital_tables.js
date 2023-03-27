exports.up = function (knex) {
  return knex.schema
    .createTable("contacts", (table) => {
      table.increments("id").notNullable().primary();
      table.string("contact_name").notNullable();
      table.string("contact_address").optional();
      table.string("work_place").optional();
      table.string("work_address_line_1").optional();
      table.string("work_address_line_2").optional();
      table.string("contact_phone").notNullable();
      table.string("contact_job_title").optional();
      table.string("contact_logo").optional();
      table.timestamps(true, true);
    })
};

exports.down = function (knex) {
  return knex.schema
    .dropTable("contacts")
};

