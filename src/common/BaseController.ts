import { Request, Response } from 'express'

export abstract class BaseController {
  abstract findAll (req: Request, res: Response): void
  abstract find(req: Request, res: Response): void
  abstract create(req: Request, res: Response): void
  abstract update(req: Request, res: Response): void
  abstract remove(req: Request, res: Response): void
}
