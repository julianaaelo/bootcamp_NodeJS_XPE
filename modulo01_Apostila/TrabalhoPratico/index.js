import express from "express";
import modelsRoute from "./routes/models.route.js";

// Criar instância do express, populando a variável app;
const app = express();
app.use(express.json());

app.use("/", modelsRoute);

app.listen(3000, () => {
  console.log("Rodando na porta 3000");
});
