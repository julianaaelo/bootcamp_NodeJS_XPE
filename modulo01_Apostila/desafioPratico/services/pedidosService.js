import pedidosModel from "../models/pedidosModel.js";

async function criaPedidosService(pedido) {
  return await pedidosModel.criaPedidosModel(pedido);
}

async function atualizaPedidosService(id, cliente, produto, valor, entregue) {
  return await pedidosModel.atualizaPedidosModel(
    id,
    cliente,
    produto,
    valor,
    entregue
  );
}

export default {
  criaPedidosService,
  atualizaPedidosService,
};
