import express from "express";
import modelsController from "../controllers/models.controller.js";

const router = express.Router();

router.get("/maisModelos", modelsController.getMoreModelsController);
router.get("/menosModelos", modelsController.getFewerModelsController);
router.get("/listaMaisModelos/:x", modelsController.getListModelController);
router.get("/listaMenosModelos/:x", modelsController.getListMinModelController);
router.post("/listaModelos", modelsController.listModelsController);
// router.get("/menosModelos", modelsController);

export default router;
