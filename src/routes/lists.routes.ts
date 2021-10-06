import { Application } from 'express'
import { CommonRoutes } from '../common/common.routes'
import { ListsController } from '../lists'

class ListsRoutes extends CommonRoutes {
  constructor(app: Application) {
    super(app)
  }

  configRoutes() {
    this.app.route('/lists')
      .get(ListsController.list)
      .post(ListsController.create)

    this.app.route('/lists/:id')
      .get(ListsController.getById)
      .delete(ListsController.remove)

    return this.app
  }
}

export default ListsRoutes