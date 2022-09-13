import express from "express";
import pedidosRouter from "../controllers/pedidosController.js";

const router = express.Router();

router.post("/criaPedido", pedidosRouter.criaPedidoController);
router.put("/atualizaPedido/:id", pedidosRouter.atualizaPedidoController);
router.put(
  "/atualizaStatusPedido/:id",
  pedidosRouter.atualizaStatusPedidoController
);
router.delete("/deletePedido/:id", pedidosRouter.deletarPedidoController);

export default router;
