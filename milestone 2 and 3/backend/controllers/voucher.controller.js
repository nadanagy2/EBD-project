import Voucher from "../models/Voucher.js";
import createError from "../utils/createError.js";

async function getVouchers(req, res, next) {
  try {
    const vouchers = await Voucher.find();
    res.status(200).json(vouchers);
  } catch (err) {
    next(createError(500, "Error fetching vouchers"));
  }
}

async function createVoucher(req, res, next) {
  try {
    const voucher = new Voucher(req.body);
    await voucher.save();
    res.status(201).json({ message: "Voucher created", voucher });
  } catch (err) {
    next(createError(500, "Error creating voucher"));
  }
}

async function updateVoucher(req, res, next) {
  try {
    await Voucher.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ message: "Voucher updated" });
  } catch (err) {
    next(createError(500, "Error updating voucher"));
  }
}

async function deleteVoucher(req, res, next) {
  try {
    await Voucher.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Voucher deleted" });
  } catch (err) {
    next(createError(500, "Error deleting voucher"));
  }
}

export { getVouchers, createVoucher, updateVoucher, deleteVoucher };
