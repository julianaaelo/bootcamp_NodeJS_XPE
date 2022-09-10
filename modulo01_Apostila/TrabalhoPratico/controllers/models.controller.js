import modelsService from "../services/models.service.js";

async function getMoreModelsController(_req, res, next) {
  try {
    res.send(await modelsService.getMoreModelsService());
  } catch (err) {
    next(err);
  }
}

async function getFewerModelsController(_req, res, next) {
  try {
    res.send(await modelsService.getFewerModelsService());
  } catch (err) {
    next(err);
  }
}

async function getListModelController(req, res, next) {
  try {
    res.send(await modelsService.getListModelService(req.params.x));
  } catch (err) {
    next(err);
  }
}

async function getListMinModelController(req, res, next) {
  try {
    res.send(await modelsService.getListMinModelService(req.params.x));
  } catch (err) {
    next(err);
  }
}

async function listModelsController(req, res, next) {
  try {
    res.send(await modelsService.listModelsService(req.body.nomeMarca));
  } catch (err) {
    next(err);
  }
}

export default {
  getMoreModelsController,
  getFewerModelsController,
  getListModelController,
  getListMinModelController,
  listModelsController,
};
