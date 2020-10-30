
exports.up = function(knex) {
  return knex.schema.createTable('shows', table => {
      table.increments('id').unsigned().primary();
      table.string('name').notNullable();
      table.decimal('launchYear', 4, 0).nullable();
      table.decimal('seasons', 3, 0).nullable();
      table.text('synopsis', 'mediumtext').nullable();
      table.string('category').notNullable();
      table.boolean('state').nullable().defaultTo(0);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('shows');
};
