// Importar express;
import express from "express";
// Importando o roteador accounts
import accountsRouter from "./routes/accounts.js";

// Importando File System para criar operações assíncronas e utilizar as promises;
import { promises as fs } from "fs";

// Desestruturando métodos de leitura e criação de arquivo do file system;
const { readFile, writeFile } = fs;

// Criando instância do express;
const app = express();
// Pedindo ao express para utilizar json;
app.use(express.json());

// Criando o caminho da rota
app.use("/account", accountsRouter);

// Iniciando a API e criando arquivo Json para simular o banco de dados.
app.listen(3000, async () => {
  // readFile vai verificar se existe o arquivo json;
  try {
    await readFile("accounts.json");
    console.log("API rodando na porta 3000");
  } catch {
    const initialJson = {
      nextId: 1,
      accounts: [],
    };
    // caso não tenha o arquivo o writeFile irá criar;
    writeFile("accounts.json", JSON.stringify(initialJson)).then(() => {
      console.log("API criada e rodando na porta 3000");
    });
  }
});
