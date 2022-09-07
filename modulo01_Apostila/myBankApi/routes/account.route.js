// Importando express;
import express from "express";
// Importação do controller;
import accountController from "../controllers/account.controller.js";

// Criando objeto para roteador - Criação da instância do Router;
const router = express.Router();

// Configuração dos Endpoints
router.post("/", accountController.createAccount);
router.get("/", accountController.getAccount);
router.get("/:id", accountController.getAccountId);
router.delete("/:id", accountController.deleteAccount);
router.put("/", accountController.putAccount);
router.patch("/updateBalance", accountController.patchAccount);

router.use((err, req, res, next) => {
  global.logger.error(`${err.message}`);
  res.status(400).send({ error: err.message });
});

// Exportando o roteador;
export default router;
