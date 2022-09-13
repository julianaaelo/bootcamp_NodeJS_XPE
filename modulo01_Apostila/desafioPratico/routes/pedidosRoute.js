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
router.get("/buscarPedido/:id", pedidosRouter.buscarPedidoIdController);
router.get("/valorTotalPedido", pedidosRouter.buscarvalorTotalPedidoController);
router.get(
  "/valorTotalPedidoproduto",
  pedidosRouter.buscarvalorTotalPedidoProdutoController
);

export default router;
