import ItemsRoutes from './items.routes'
import ListsRoutes from './lists.routes'

export default class Routes {
  #itemsRoutes: ItemsRoutes
  #listRoutes: ListsRoutes

  constructor(app: any) {
    this.#itemsRoutes = new ItemsRoutes(app)
    this.#listRoutes = new ListsRoutes(app)
  }
}