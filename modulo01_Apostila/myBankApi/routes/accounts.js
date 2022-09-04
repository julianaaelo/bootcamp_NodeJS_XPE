// Importando express;
import express from "express";
import { promises as fs } from "fs";

const { readFile, writeFile } = fs;

// Criando objeto para roteador
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    // armazenando as informações do body;
    let account = req.body;
    // fazendo a leitura do arquivo json;
    const data = JSON.parse(await readFile("accounts.json"));
    // atualizando o id;
    account = { id: data.nextId++, ...account };
    // pegar o account do body e adicionar no parametro accounts do arquivo json;
    data.accounts.push(account);
    await writeFile("accounts.json", JSON.stringify(data));
    console.log(account);
    res.send(data);
  } catch (err) {}
});

router.get("/", async (req, res) => {
  try {
    const data = JSON.parse(await readFile("accounts.json"));
    delete data.nextId;
    res.send(data);
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const data = JSON.parse(await readFile("accounts.json"));
    const account = data.accounts.find(
      (account) => account.id === parseInt(req.params.id)
    );
    res.send(account);
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    // faz a leitura do arquivo json;
    const data = JSON.parse(await readFile("accounts.json"));
    // o find retorna tudo o que for verdadeiro;
    data.accounts = data.accounts.filter(
      (account) => account.id !== parseInt(req.params.id)
    );
    // sobrescreve o data atualizado no arquivo json;
    await writeFile("accounts.json", JSON.stringify(data, null, 2));
    res.end();
    console.log(data);
  } catch {
    res.status(400).send({ error: err.message });
  }
});

// Exportando o roteador;
export default router;
