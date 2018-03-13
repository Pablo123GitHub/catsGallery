
exports.up = function(knex, Promise) {
   return knex.schema.alterTable('users', function(table) {
       table.boolean('admin').notNullable().defaultTo(false);
       table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'));
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users');
};
