// Importar express;
import express from "express";
// Importando o roteador accounts
import accountsRouter from "./routes/accounts.js";
import winston from "winston";

const { combine, timestamp, label, printf } = winston.format;
const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});

global.logger = winston.createLogger({
  level: "silly",
  transports: [
    new winston.transports.File({
      filename: "my-bank-api.log",
    }),
  ],
  format: combine(label({ label: "my-bank-api" }), timestamp(), myFormat),
});

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
    global.logger.info("API rodando na porta 3000");
  } catch {
    const initialJson = {
      nextId: 1,
      accounts: [],
    };
    // caso não tenha o arquivo o writeFile irá criar;
    writeFile("accounts.json", JSON.stringify(initialJson))
      .then(() => {
        global.logger.info("API criada e rodando na porta 3000");
      })
      .catch((err) => {
        logger.error(err);
      });
  }
});
