import { Application } from 'express'
import { CommonRoutes } from '../common/common.routes'
import { ItemsController } from '../items'

class ItemsRoutes extends CommonRoutes {
  constructor(app: Application) {
    super(app)
  }

  configRoutes() {
    this.app.route('/items')
      .get(ItemsController.list)
      .post(ItemsController.create)

    this.app.route('/items/:id')
      .get(ItemsController.getById)
      .patch(ItemsController.update)
      .delete(ItemsController.remove)

    this.app.route('/items/:name')
      .post(ItemsController.getItembyName)

    return this.app
  }
}

export default ItemsRoutes