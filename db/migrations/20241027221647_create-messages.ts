import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('messages', (table) => {
        table.uuid('id').primary()
        table.text('username').notNullable()
        table.text('text').notNullable()
        table.text('channel').notNullable()
        table.timestamp('date').defaultTo(knex.fn.now()).notNullable()
      })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('messages')
}

