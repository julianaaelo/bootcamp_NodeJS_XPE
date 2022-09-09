import express from "express";

// Criar instância do express, populando a variável app;
const app = express();

app.listen(3000, () => {
  console.log("Rodando na porta 3000");
});
