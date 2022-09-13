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

export default {
  criaPedidosModel,
};
