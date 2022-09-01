import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("olá, seja bem vinda!");
});

app.post("/", (req, res) => {
  res.send("Ola, Post!");
});

app.listen(3000, () => {
  console.log("Api");
});
