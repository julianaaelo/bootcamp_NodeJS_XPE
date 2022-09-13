import express from "express";
import pedidosRouter from "./routes/pedidosRoute.js";

const app = express();
app.use(express.json());
app.use("/", pedidosRouter);

app.listen(3000, () => {
  console.log("Aplicação rodando na porta 3000");
});
