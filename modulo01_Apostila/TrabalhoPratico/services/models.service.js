import modelsModel from "../modells/models.model.js";

async function getMoreModelsService() {
  return await modelsModel.getMoreModelsModels();
}

async function getFewerModelsService() {
  return await modelsModel.getFewerModelsModel();
}

async function getListModelService(x) {
  return await modelsModel.getListModelModels(x);
}

async function getListMinModelService(x) {
  return await modelsModel.getListMinModelModels(x);
}

async function listModelsService(nomeMarca) {
  const brand = await modelsModel.listModelsModel(nomeMarca);
  console.log(brand);
  if (brand) {
    return brand.models;
  } else {
    return [];
  }
}

export default {
  getMoreModelsService,
  getFewerModelsService,
  getListModelService,
  getListMinModelService,
  listModelsService,
};
