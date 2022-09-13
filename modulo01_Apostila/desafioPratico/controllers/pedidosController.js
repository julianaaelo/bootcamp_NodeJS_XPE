import pedidosService from "../services/pedidosService.js";

async function criaPedidoController(req, res, next) {
  try {
    let pedido = req.body;
    pedido = await pedidosService.criaPedidosService(pedido);
    res.send(pedido);
  } catch (err) {
    next(err);
  }
}

export default {
  criaPedidoController,
};
