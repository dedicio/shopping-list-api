import ListsRoutes from '../lists/ListsRouter'

export default class Routes {
  #listsRoutes: ListsRoutes = new ListsRoutes()

  constructor(api: Express.Application) {
    this.routerSetup(api)
  }

  routerSetup(api: any): void {
    this.#listsRoutes.routes(api)
  }
}