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

  const dataOrd = data.sort((a, b) => {
    if (a.models.length === b.models.length) {
      return a.brand.localeCompare(b.brand);
    } else {
      return b.models.length - a.models.length;
    }
  });
  console.log(dataOrd);
  let listModels = [];
  for (let i = 0; i < dataOrd.length; i++) {
    if (listModels.length < x * 2) {
      listModels.push(dataOrd[i].brand, dataOrd[i].models.length);
    }
  }
  return listModels;
}

async function getListMinModelModels(x) {
  const data = JSON.parse(await readFile("carList.json"));

  const dataOrd = data.sort((a, b) => {
    if (a.models.length === b.models.length) {
      return a.brand.localeCompare(b.brand);
    } else {
      return a.models.length - b.models.length;
    }
  });

  let listModels = [];
  for (let i = 0; i < dataOrd.length; i++) {
    if (listModels.length < x * 2) {
      listModels.push(dataOrd[i].brand, dataOrd[i].models.length);
    }
  }
  return listModels;
}

getListMinModelModels();

export default {
  getMoreModelsModels,
  getFewerModelsModel,
  getListModelModels,
  getListMinModelModels,
};
