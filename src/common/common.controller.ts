import { Request, Response } from "express";

abstract class CommonController {
  constructor() { }

  abstract list(req: Request, res: Response): Promise<void>

  abstract getById(req: Request, res: Response): Promise<void>

  abstract create(req: Request, res: Response): Promise<void>
  
  abstract remove(req: Request, res: Response): Promise<void>
}

export default CommonController