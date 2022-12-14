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

async function atualizaPedidoController(req, res, next) {
  try {
    const { id } = req.params;
    console.log(id);
    const { cliente, produto, valor, entregue } = req.body;
    const pedidoAtualizado = await pedidosService.atualizaPedidosService(
      +id,
      cliente,
      produto,
      valor,
      entregue
    );
    res.send(pedidoAtualizado);
  } catch (err) {
    next(err);
  }
}

async function atualizaStatusPedidoController(req, res, next) {
  try {
    const { id } = req.params;
    const { entregue } = req.body;

    const pedido = await pedidosService.atualizaStatusPedidosService(
      +id,
      entregue
    );
    console.log(pedido);
    res.send(pedido);
  } catch (err) {
    next(err);
  }
}

async function deletarPedidoController(req, res, next) {
  try {
    const { id } = req.params;
    const dataAtualizado = await pedidosService.deletarPedidoService(+id);
    res.end();
  } catch (err) {
    next(err);
  }
}

async function buscarPedidoIdController(req, res, next) {
  try {
    const { id } = req.params;
    const buscarpedido = await pedidosService.buscarPedidoIdService(+id);
    res.send(buscarpedido);
  } catch (err) {
    next(err);
  }
}

async function buscarvalorTotalPedidoController(req, res, next) {
  try {
    const { cliente } = req.query;
    const somaValor = await pedidosService.buscarvalorTotalPedidoService(
      cliente
    );
    res.status(200).json(somaValor);
  } catch (err) {
    next(err);
  }
}

async function buscarvalorTotalPedidoProdutoController(req, res, next) {
  try {
    const { produto } = req.query;
    const somaValor = await pedidosService.buscarvalorTotalPedidoProdutoService(
      produto
    );
    console.log(somaValor);
    res.status(200).json(somaValor);
  } catch (err) {
    next(err);
  }
}

export default {
  criaPedidoController,
  atualizaPedidoController,
  atualizaStatusPedidoController,
  deletarPedidoController,
  buscarPedidoIdController,
  buscarvalorTotalPedidoController,
  buscarvalorTotalPedidoProdutoController,
};
