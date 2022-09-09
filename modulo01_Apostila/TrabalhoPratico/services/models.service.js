import modelsModel from "../modells/models.model.js";

async function getMoreModelsService() {
  return await modelsModel.getMoreModelsModels();
}

async function getFewerModelsService() {
  return await modelsModel.getFewerModelsModel();
}

export default {
  getMoreModelsService,
  getFewerModelsService,
};
