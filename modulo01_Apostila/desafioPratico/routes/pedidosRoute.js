import express from "express";
import pedidosController from "../controllers/pedidosController.js";

const router = express.Router();

router.post("/criaPedido", pedidosController.criaPedidoController);

export default router;
