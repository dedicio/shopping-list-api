import { Request, Response } from "express"
import CommonController from "../common/common.controller"

class ItemsController extends CommonController {
  async list(req: Request, res: Response) {
    res.status(200).send('list')
  }

  async getById(req: Request, res: Response) {
    res.status(200).send('getById')
  }

  async create(req: Request, res: Response) {
    res.status(201).send('create')
  }

  async remove(req: Request, res: Response) {
    res.status(200).send('remove')
  }

  async getItembyName(req: Request, res: Response) {
    res.status(200).send('getItembyName')
  }
}

export default new ItemsController()