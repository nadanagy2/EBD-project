import mongoose from "mongoose"


const WalletSchema = new mongoose.Schema(
  {
    childId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    spendJar: { type: Number, default: 0 },
    saveJar: { type: Number, default: 0 },
    donateJar: { type: Number, default: 0 },
    IsActive: { type: Boolean, default: false }
  },
  { timestamps: true }
);
const Wallet = mongoose.model("Wallet", WalletSchema);

export default Wallet;