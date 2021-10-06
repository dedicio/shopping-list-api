import { Application } from "express";

export abstract class CommonRoutes {
  app: Application

  constructor(app: Application) {
    this.app = app
    this.configRoutes()
  }

  abstract configRoutes(): Application
}