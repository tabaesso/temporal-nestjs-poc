import { Application } from "express";
import { IndexController } from "../controllers";

function setRoutes(app: Application) {
  const indexController = new IndexController();
  app.post('/start-workflow/:name', indexController.startWorkflow.bind(indexController));
} 

export { setRoutes };