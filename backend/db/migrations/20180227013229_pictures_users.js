exports.up = function(knex, Promise) {

  return Promise.all([

    knex.schema.createTable('pictures', function(table){
        table.increments('pid').primary();
        table.string('iconUrl');
        table.integer('likes');
        table.string('description');
        table.integer('author_id')
            .references('id')
            .inTable('users');
    })
  ])
};
exports.down = function(knex, Promise) {
    return Promise.all([
      knex.schema.dropTable('pictures')
    ])
};
