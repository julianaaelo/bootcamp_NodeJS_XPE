import express from "express";
import pedidosController from "../controllers/pedidosController.js";

const router = express.Router();

router.post("/criaPedido", pedidosController.criaPedidoController);
router.put("/atualizaPedido/:id", pedidosController.atualizaPedidoController);

export default router;
