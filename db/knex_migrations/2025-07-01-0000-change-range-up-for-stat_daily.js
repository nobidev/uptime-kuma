exports.up = function (knex) {
    return knex.schema
        .alterTable('stat_daily', function (table) {
            table.integer('up').alter();
        });
};

exports.down = function (knex) {
    return knex.schema.alterTable('stat_daily', function (table) {
        table.smallint('up').alter();
    });
};
