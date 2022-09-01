// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import {HttpContextContract} from "@ioc:Adonis/Core/HttpContext";
import Anime from 'App/Models/Anime';

export default class AnimeController {
  public async index({}: HttpContextContract) {

  }

  public async create({request, response, session}: HttpContextContract) {

    let data = request.all();

    let anime = new Anime();

    anime.titre = data.titre;
    anime.date_sortie = data.date_sortie;
    anime.nb_episode = data.nb_episode;

    await anime.save();

    session.flash('notification', 'Animé ajouté !');

    return response.redirect('/anime');
  }

  public async read({view}: HttpContextContract) {
    const animes = await Anime.all();

    console.log(animes);

    return view.render('welcome', {animes});
  }

  public async update({params, view}: HttpContextContract) {
    const anime = await Anime.find(params.id);

    return view.render('update', {anime})
  }

  public async doUpdate({request, response, params, session}: HttpContextContract) {
    let data = request.all();

    const anime = await Anime.find(params.id)


    anime.titre = data.titre;
    anime.nb_episode = data.nb_episode;
    anime.date_sortie = data.date_sortie

    console.log('titre nouveau : ' + anime.titre)

    await anime.save();

    session.flash('notification', 'Animé modifié !');

    return response.redirect('/anime/update/' + params.id)
  }

  public async delete({params, response, session}: HttpContextContract) {
    const anime = await Anime.find(params.id);

    await anime.delete();

    session.flash('suppression', 'Animé supprimé !');

    return response.redirect('/anime');
  }
}
