import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'anime'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable()
      table.string('titre').notNullable()
      table.integer('nb_episode').notNullable()
      table.date('date_sortie').notNullable()

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
