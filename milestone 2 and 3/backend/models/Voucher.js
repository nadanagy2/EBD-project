import mongoose from "mongoose" 

const VoucherSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    price: { type: Number, required: true },
    merchant: { type: String, required: true }
  },
  { timestamps: true }
);
const Voucher = mongoose.model("Voucher", VoucherSchema);

export default Voucher; 