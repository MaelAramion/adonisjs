import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Anime from 'App/Models/Anime'
import {DateTime} from "luxon";

export default class extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method

    const anime = await Anime.createMany([
      {
        titre: 'One Piece',
        nb_episode : 1025,
        date_sortie: DateTime.fromISO('1999-10-20')
      },
    ]);
  }
}
