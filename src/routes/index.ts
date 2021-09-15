import ListsRoutes from '../lists/listsRouter'

export default class Routes {
  #listsRoutes: ListsRoutes = new ListsRoutes()

  constructor(api: any) {
    this.routerSetup(api)
  }

  routerSetup(api: any): void {
    this.#listsRoutes.routes(api)
  }
}