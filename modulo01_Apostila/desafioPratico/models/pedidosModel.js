// Aqui acontece a comunicação com o banco de dados, por isso importamos as promises;
import { promises as fs } from "fs";

const { readFile, writeFile } = fs;

async function criaPedidosModel(pedido) {
  const data = JSON.parse(await readFile("pedidos.json"));

  pedido = {
    id: data.nextId++,
    cliente: pedido.cliente,
    produto: pedido.produto,
    valor: pedido.valor,
    entregue: false,
    timestamp: new Date(),
  };

  data.pedidos.push(pedido);
  await writeFile("pedidos.json", JSON.stringify(data, null, 2));
  return pedido;
}

async function atualizaPedidosModel(id, cliente, produto, valor, entregue) {
  const data = JSON.parse(await readFile("pedidos.json"));

  let pedido = data.pedidos.findIndex((p) => p.id == id);
  if (pedido === -1) {
    return "Pedido não encontrado!";
  }

  let pedidoAtualizado = {
    id: id,
    cliente: cliente,
    produto: produto,
    valor: valor,
    entregue: entregue,
    timestamp: data.pedidos[pedido].timestamp,
  };

  data.pedidos[pedido] = pedidoAtualizado;

  await writeFile("pedidos.json", JSON.stringify(data, null, 2));

  return pedidoAtualizado;
}

async function atualizaStatusPedidosModel(id, entregue) {
  const data = JSON.parse(await readFile("pedidos.json"));

  let pedido = data.pedidos.findIndex((p) => p.id == id);
  if (pedido === -1) {
    return "Pedido não encontrado!";
  }

  let pedidoAtualizado = {
    id: id,
    cliente: data.pedidos[pedido].cliente,
    produto: data.pedidos[pedido].produto,
    valor: data.pedidos[pedido].valor,
    entregue: entregue,
    timestamp: data.pedidos[pedido].timestamp,
  };

  data.pedidos[pedido] = pedidoAtualizado;

  await writeFile("pedidos.json", JSON.stringify(data, null, 2));
  return pedidoAtualizado;
}

async function deletarPedidoModel(id) {
  const data = JSON.parse(await readFile("pedidos.json"));

  data.pedidos = data.pedidos.filter((p) => p.id !== id);
  await writeFile("pedidos.json", JSON.stringify(data, null, 2));
}

export default {
  criaPedidosModel,
  atualizaPedidosModel,
  atualizaStatusPedidosModel,
  deletarPedidoModel,
};