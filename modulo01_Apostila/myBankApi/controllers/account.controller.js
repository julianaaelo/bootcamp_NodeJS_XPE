import accountService from "../services/account.services.js";

async function createAccount(req, res, next) {
  try {
    // armazenando as informações do body;
    let account = req.body;
    if (!account.name || account.balance == null) {
      throw new Error("Name e Balance são obrigatórios.");
    }

    account = await accountService.createAccount(account);
    res.send(account);
    logger.info(`POST / account - ${JSON.stringify(account)}`);
  } catch (err) {
    next(err);
  }
}

async function getAccount(req, res, next) {
  try {
    res.send(await accountService.getAccounts());
    logger.info(`GET / account`);
  } catch (err) {
    next(err);
  }
}

async function getAccountId(req, res, next) {
  try {
    res.send(await accountService.getAccountId(req.params.id));
    logger.info(`GET / account/:id`);
  } catch (err) {
    next(err);
  }
}

async function deleteAccount(req, res, next) {
  try {
    await accountService.deleteAccountId(req.params.id);
    res.end();
    logger.info(`DELETE / account/:id - ${req.params.id}`);
  } catch {
    next(err);
  }
}

async function putAccount(req, res, next) {
  try {
    // Armazenando a requisição do body;
    const account = req.body;
    if (!account.id || !account.name || account.balance == null) {
      throw new Error("Id, Name e Balance são obrigatórios.");
    }
    res.send(await accountService.updateAccount(account));
    logger.info(`PUT / account - ${JSON.stringify(account)}`);
  } catch (err) {
    next(err);
  }
}

async function patchAccount(req, res, next) {
  try {
    // Armazenando a requisição do body;
    const account = req.body;
    if (!account.id || account.balance == null) {
      throw new Error("Id e Balance são obrigatórios.");
    }
    res.send(await accountService.updateBalance(account));
    logger.info(`PATCH / account/updateBalance - ${JSON.stringify(account)}`);
  } catch (err) {
    next(err);
  }
}

export default {
  createAccount,
  getAccount,
  getAccountId,
  deleteAccount,
  putAccount,
  patchAccount,
};
