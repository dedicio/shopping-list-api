import { Request, Response, Router } from 'express';

export default class ListsRoutes {
  #router: Router = Router()

  public routes(api: any): any {
    this.#router.get('/', async (req: Request, res: Response): Promise<Response> => {
      return res.status(200).send({
        message: 'Hello World!',
      })
    })

    api.use('/', this.#router)
  }
}