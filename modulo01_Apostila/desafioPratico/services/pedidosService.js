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

async function atualizaStatusPedidosService(id, entregue) {
  return await pedidosModel.atualizaStatusPedidosModel(id, entregue);
}

async function deletarPedidoService(id) {
  return await pedidosModel.deletarPedidoModel(id);
}

async function buscarPedidoIdService(id) {
  return await pedidosModel.buscarPedidoIdModel(id);
}

export default {
  criaPedidosService,
  atualizaPedidosService,
  atualizaStatusPedidosService,
  deletarPedidoService,
  buscarPedidoIdService,
};
