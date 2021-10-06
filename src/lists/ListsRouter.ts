import { Router } from 'express'
import { ListsController } from './ListsController'

export default class ListsRoutes {
  #router: Router = Router()
  #listController: ListsController = new ListsController()

  routes(api: any): any {
    this.#router.get('/', this.#listController.findAll)

    this.#router.get('/:id', this.#listController.find)

    this.#router.post('/', this.#listController.create)

    this.#router.patch('/', this.#listController.update)

    this.#router.delete('/', this.#listController.remove)

    api.use('/', this.#router)
  }
}