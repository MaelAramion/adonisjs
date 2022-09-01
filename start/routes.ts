/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'
import Anime from "App/Models/Anime";
import HealthCheck from '@ioc:Adonis/Core/HealthCheck'

Route.get('/','AnimeController.read')
Route.get('/anime','AnimeController.read').as('anime.read')
Route.post('/anime/create','AnimeController.create').as('anime.create')
Route.get('/anime/delete/:id', 'AnimeController.delete').as('anime.delete');
Route.get('/anime/update/:id', 'AnimeController.update').as('anime.update')
Route.post('/anime/do_update/:id','AnimeController.doUpdate').as('anime.doUpdate')

Route.get('/about', async ({ view }) => {
  return view.render('about')
})

Route.get('/register','AuthController.showRegister')
Route.post('/register','AuthController.register')

Route.post('/logout','AuthController.logout')
Route.get('/login','AuthController.showLogin')
Route.post('/login','AuthController.login')

Route.get('/health','HealthController.health')

