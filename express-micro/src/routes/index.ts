import { Application } from "express";
import { IndexController } from "../controllers";

function setRoutes(app: Application) {
  const indexController = new IndexController();
  app.get('/', indexController.getIndex.bind(indexController));
}

export { setRoutes };