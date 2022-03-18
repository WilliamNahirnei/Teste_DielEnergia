exports.up = function(knex, Promise) {
    return knex.schema.createTable('task', function(t) {
        t.increments('idTask').notNull().primary();
        t.string('titleTask', 50).notNull();
        t.string('descriptionTask', 150).nullable();
        t.dateTime('startDateTask').notNull();
        t.dateTime('endDateTask').notNull();
        t.enum('statusTask', ['SCHEDULED', 'IN PROGRESS', 'FINISHED', 'DELAYED']).notNull().defaultTo('SCHEDULED');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('task');
};