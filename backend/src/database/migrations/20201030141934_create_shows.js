
exports.up = function(knex) {
  return knex.schema.createTable('shows', table => {
      table.increments('id').unsigned().primary();
      table.string('name').notNullable();
      table.decimal('launchYear', 4, 0).notNullable();
      table.decimal('seasons', 3, 0).notNullable();
      table.text('synopsis', 'mediumtext').notNullable();
      table.string('category').notNullable();
      table.boolean('state').nullable().defaultTo(0);
      table.string('image').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('shows');
};
