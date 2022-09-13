import pedidosModel from "../models/pedidosModel.js";

async function criaPedidosService(pedido) {
  return await pedidosModel.criaPedidosModel(pedido);
}

export default {
  criaPedidosService,
};
