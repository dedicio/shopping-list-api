import { Request, Response } from 'express';
import ListsRepository from './listsRepositoy';

export default class ListsController {
  #listRepository: ListsRepository = new ListsRepository()

  get(req: Request, res: Response) {
    return this.#listRepository
      .get()
      .then(lists => {
        return res.status(200).send({
          message: lists,
        })
      })
    
  }
}