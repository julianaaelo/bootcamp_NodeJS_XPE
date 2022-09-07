import accountModels from "../models/account.models.js";

async function createAccount(account) {
  return await accountModels.insertAccount(account);
}

async function getAccounts() {
  return await accountModels.getAccounts();
}

async function getAccountId(id) {
  return await accountModels.getAccountId(id);
}

async function deleteAccountId(id) {
  return await accountModels.deleteAccountId(id);
}

async function updateAccount(account) {
  return await accountModels.updateAccount(account);
}

async function updateBalance(account) {
  const [acc] = await accountModels.getAccountId(account.id);
  console.log(acc);
  acc.balance = account.balance;

  return await accountModels.updateAccount(acc);
}

export default {
  createAccount,
  getAccounts,
  getAccountId,
  deleteAccountId,
  updateAccount,
  updateBalance,
};
