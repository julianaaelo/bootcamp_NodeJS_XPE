import { promises as fs } from "fs";

const { readFile, WriteFile } = fs;

async function getMoreModelsModels() {
  const data = JSON.parse(await readFile("carList.json"));

  let quant = data[0].models[0].length;
  let name = "";
  for (let index = 0; index < data.length; index++) {
    if (data[index].models.length > quant) {
      quant = data[index].models.length;
      name = data[index].brand;
    } else if (data[index].models.length === quant) {
      quant = data[index].models.length;
      name = [name, data[index].brand];
    }
  }
  return name;
}

async function getFewerModelsModel() {
  const data = JSON.parse(await readFile("carList.json"));

  let quant = 99999999;
  let name = "";

  for (let index = 0; index < data.length; index++) {
    if (data[index].models.length < quant) {
      quant = data[index].models.length;
      name = data[index].brand;
    } else if (data[index].models.length === quant) {
      quant = data[index].models.length;
      name = [name, data[index].brand];
    }
  }
  return name;
}

async function getListModelModels(x) {
  const data = JSON.parse(await readFile("carList.json"));

  data.sort((brand) => {
    return brand;
  });
}

getListModelModels();

export default {
  getMoreModelsModels,
  getFewerModelsModel,
};
