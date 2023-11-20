import { Router } from "express";
import LeilaoController from "../controllers/LeilaoController";

const LeilaoRoute = Router();

LeilaoRoute.get("/", LeilaoController.getAll);

LeilaoRoute.post("/insert", LeilaoController.insert);

LeilaoRoute.patch("/update/:id", LeilaoController.update);

LeilaoRoute.delete("/delete/:id", LeilaoController.delete);

export default LeilaoRoute;