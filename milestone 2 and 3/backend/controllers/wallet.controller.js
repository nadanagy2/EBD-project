import Wallet from "../models/Wallet.js";
import createError from "../utils/createError.js";

async function getWallets(req, res, next) {
  try {
    const wallets = await Wallet.find().populate("childId");
    res.status(200).json(wallets);
  } catch (err) {
    next(createError(500, "Error fetching wallets"));
  }
}

async function createWallet(req, res, next) {
  try {
    const wallet = new Wallet(req.body);
    await wallet.save();
    res.status(201).json({ message: "Wallet created", wallet });
  } catch (err) {
    next(createError(500, "Error creating wallet"));
  }
}

async function updateWallet(req, res, next) {
  try {
    await Wallet.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ message: "Wallet updated" });
  } catch (err) {
    next(createError(500, "Error updating wallet"));
  }
}

async function deleteWallet(req, res, next) {
  try {
    await Wallet.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Wallet deleted" });
  } catch (err) {
    next(createError(500, "Error deleting wallet"));
  }
}

export { getWallets, createWallet, updateWallet, deleteWallet };
