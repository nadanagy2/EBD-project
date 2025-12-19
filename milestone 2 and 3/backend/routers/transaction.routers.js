import { Router } from "express";
import * as transactionController from "../controllers/transaction.controller.js";
import { verifyToken, verifyAdmin } from "../Middleware/auth.js";

const router = Router();

router.get("/", verifyToken, transactionController.getTransactions);
router.post("/", verifyToken, transactionController.createTransaction);
router.put("/:id", verifyToken, transactionController.updateTransaction);

// Admin route for delete all transactions
router.delete("/deleteAll", verifyToken, verifyAdmin, async (req, res) => {
  try {
    await Transaction.deleteMany({});
    res.status(200).json({ message: "All transactions deleted (Admin)" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting all transactions" });
  }
});

router.delete("/:id", verifyToken, transactionController.deleteTransaction);

export default router;
