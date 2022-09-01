import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Anime extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public titre: String

  @column()
  public nb_episode: number

  @column.date()
  public date_sortie: DateTime

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
