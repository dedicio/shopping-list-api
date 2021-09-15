import { Router } from 'express';
import ListsController from './listsController';

export default class ListsRoutes {
  #router: Router = Router()
  #listController: ListsController = new ListsController()

  public routes(api: any): any {
    this.#router.get('/', this.#listController.get)

    api.use('/', this.#router)
  }
}