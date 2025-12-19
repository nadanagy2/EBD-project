import Transaction from "../models/Transaction.js";
import createError from "../utils/createError.js";

async function getTransactions(req, res, next) {
  try {
    const transactions = await Transaction.find().populate("childId");
    res.status(200).json(transactions);
  } catch (err) {
    next(createError(500, "Error fetching transactions"));
  }
}

async function createTransaction(req, res, next) {
  try {
    const transaction = new Transaction(req.body);
    await transaction.save();
    res.status(201).json({ message: "Transaction created", transaction });
  } catch (err) {
    next(createError(500, "Error creating transaction"));
  }
}

async function updateTransaction(req, res, next) {
  try {
    await Transaction.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ message: "Transaction updated" });
  } catch (err) {
    next(createError(500, "Error updating transaction"));
  }
}

async function deleteTransaction(req, res, next) {
  try {
    await Transaction.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Transaction deleted" });
  } catch (err) {
    next(createError(500, "Error deleting transaction"));
  }
}

export {
  getTransactions,
  createTransaction,
  updateTransaction,
  deleteTransaction,
};
