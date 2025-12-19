import { Router } from "express";
import * as walletController from "../controllers/wallet.controller.js";
import { verifyToken, verifyAdmin } from "../Middleware/auth.js";

const router = Router();

router.get("/", verifyToken, walletController.getWallets);
router.post("/", verifyToken, walletController.createWallet);
router.put("/:id", verifyToken, walletController.updateWallet);

// Admin route to delete all wallets
router.delete("/deleteAll", verifyToken, verifyAdmin, async (req, res) => {
  try {
    await Wallet.deleteMany({});
    res.status(200).json({ message: "All wallets deleted (Admin)" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting all wallets" });
  }
});

router.delete("/:id", verifyToken, walletController.deleteWallet);

export default router;
