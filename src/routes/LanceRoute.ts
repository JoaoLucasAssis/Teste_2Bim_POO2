import { Router } from "express";
import LanceController from "../controllers/LanceController";

const LanceRoute = Router();

LanceRoute.get("/", LanceController.getAll);

LanceRoute.post("/insert", LanceController.insert);

LanceRoute.patch("/update/", LanceController.update);

LanceRoute.delete("/delete/", LanceController.delete);

export default LanceRoute;