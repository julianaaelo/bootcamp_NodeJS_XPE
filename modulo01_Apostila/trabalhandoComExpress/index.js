import express from "express";

// criar a instancia do express, populando a variável app;
const app = express();
app.use(express.json());
/* Para buscar parâmetro no body da requisição é necessário avisar ao express
que quer usar json. Precisa ir na instância do express e fazer a configuraçã.
*/

//Configuração das rotas

// GET: Obter dados de um recurso;
app.get("/", (req, res) => {
  res.send("Requisição GET");
});

// POST: Criar um novo recurso;
app.post("/", (req, res) => {
  res.send("Requisição POST");
});

// PUT: Atualizar os dados de um determinado recurso;
app.put("/", (req, res) => {
  res.send("Requisição PUT");
});

// DELETE: Excluir determinado recurso;
app.delete("/", (req, res) => {
  res.send("Requisição DELETE");
});

// ALL: Retorna todos os métodos (GET, POST, PUT, DELETE);
app.all("/testeAll", (req, res) => {
  res.send("Requisição ALL");
});

// "?" diz que a letra antes dele não é obrigatória;
app.all("/testeInt?", (req, res) => {
  res.send("Requisição teste '?' ");
});

// "+" quer dizer que a última letra pode se repetir várias vezes;
app.all("/testeSoma+", (req, res) => {
  res.send("Requisição teste '+' ");
});

// "*" quer dizer qualquer coisa;
app.all("/teste*asterisco", (req, res) => {
  res.send("Requisição teste '*' ");
});

// "()" significa que o que está dentro dele é opcional;
app.all("/parentese(teste)?", (req, res) => {
  res.send("Requisição teste 'parentese' ");
});

// Parâmetros no body;

app.all("/testandoBody", (req, res) => {
  const body = req.body;
  res.send(body);
});

// Quando usamos o GET geralmente pegamos parametros na url e usamos a propriedade params;
app.get("/testParam/:id", (req, res) => {
  res.send(req.params.id);
});

// parâmetros via query (Ex: /testeQuery?nome=juliana&idade=26&estudante=true)
app.get("/testeQuery", (req, res) => {
  res.send(req.query);
});
app.listen(3000, () => {
  console.log("API rodando na porta 3000");
});
