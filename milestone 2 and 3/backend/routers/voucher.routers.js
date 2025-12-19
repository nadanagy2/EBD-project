import { Router } from "express";
import * as voucherController from "../controllers/voucher.controller.js";
import { verifyToken, verifyAdmin } from "../Middleware/auth.js";

const router = Router();

router.get("/", verifyToken, voucherController.getVouchers);
router.post("/", verifyToken, voucherController.createVoucher);
router.put("/:id", verifyToken, voucherController.updateVoucher);

// Admin route for delete all vouchers
router.delete("/deleteAll", verifyToken, verifyAdmin, async (req, res) => {
  try {
    await Voucher.deleteMany({});
    res.status(200).json({ message: "All vouchers deleted (Admin)" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting all vouchers" });
  }
});

router.delete("/:id", verifyToken, voucherController.deleteVoucher);

export default router;
