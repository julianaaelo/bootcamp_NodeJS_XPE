import { promises as fs } from "fs";

const { readFile, writeFile } = fs;

async function getAccounts() {
  const data = JSON.parse(await readFile("accounts.json"));
  return data.accounts;
}

async function getAccountId(id) {
  // faz a leitura do arquivo json;
  const accounts = await getAccounts();
  // o find retorna tudo o que for verdadeiro;
  const account = accounts.filter((account) => account.id == parseInt(id));
  if (account) {
    return account;
  }
  throw new Error("Registro não encontrado.");
  // sobrescreve o data atualizado no arquivo json;
}

async function insertAccount(account) {
  // fazendo a leitura do arquivo json;
  const data = JSON.parse(await readFile("accounts.json"));
  // atualizando o id;
  account = {
    id: data.nextId++,
    name: account.name,
    balance: account.balance,
  };
  // pegar o account do body e adicionar no parametro accounts do arquivo json;
  data.accounts.push(account);
  await writeFile("accounts.json", JSON.stringify(data, null, 2));
  return account;
}

async function deleteAccountId(id) {
  // faz a leitura do arquivo json;
  const data = JSON.parse(await readFile("accounts.json"));
  // o find retorna tudo o que for verdadeiro;
  data.accounts = data.accounts.filter(
    (account) => account.id !== parseInt(id)
  );
  // sobrescreve o data atualizado no arquivo json;
  await writeFile("accounts.json", JSON.stringify(data, null, 2));
}

async function updateAccount(account) {
  // Fazendo a leitura do arquivo json;
  const data = JSON.parse(await readFile("accounts.json"));
  // pegando o conteúdo da posição index que for verdadeira;
  const index = data.accounts.findIndex((a) => a.id === account.id);
  console.log(index);
  if (index === -1) {
    throw new Error("Registro não encontrado.");
  }

  data.accounts[index].name = account.name;
  data.accounts[index].balance = account.balance;

  await writeFile("accounts.json", JSON.stringify(data, null, 2));
  return data.accounts[index];
}

export default {
  getAccounts,
  insertAccount,
  getAccountId,
  deleteAccountId,
  updateAccount,
};
