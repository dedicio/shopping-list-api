import { Request, Response } from 'express'
import { BaseController } from '../common/BaseController'
import IList from './IList'

export class ListsController extends BaseController {
  findAll(req: Request, res: Response): void {    
    const lists: IList[] = [
      {
        id: "as09d",
        items: [
          "a",
          "b",
        ],
      },
      {
        id: "2093ri",
        items: [
          "a",
          "b",
        ],
      },
    ]

    res.status(200).send({ data: lists })
  }

  find(req: Request, res: Response): void {
    const list: IList = {
      id: "as09d",
      items: [
        "a",
        "b",
      ],
    }
      
    res.status(200).send({
      status: 200,
      data: list,
    })
  }

  create(req: Request, res: Response): void {
    const list: IList = req.body 
    
    res.status(201).send({
      status: 201,
      data: list
    })
  }

  update(req: Request, res: Response): void {
    const list: IList = {
      id: "as09d",
      items: [
        "a",
        "b",
      ],
    }

    res.status(201).send({
      status: 200,
      data: list,
    })
  }

  remove(req: Request, res: Response): void {
    res.status(201).send({
      status: 200,
      message: "List deleted",
    })
  }
}