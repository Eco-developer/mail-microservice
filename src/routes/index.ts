import { Router } from "express";
import { sendRoutes } from "./send-routes";

const routes = Router();
sendRoutes(routes);

export { routes };