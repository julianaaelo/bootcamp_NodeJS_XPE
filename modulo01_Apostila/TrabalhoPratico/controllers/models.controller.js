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

export default {
  getMoreModelsController,
  getFewerModelsController,
};
