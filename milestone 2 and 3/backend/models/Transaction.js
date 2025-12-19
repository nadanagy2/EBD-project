import mongoose from "mongoose" 


const TransactionSchema = new mongoose.Schema(
  {
    childId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    type: { type: String, required: true },
    amount: { type: Number, required: true },
    description: { type: String, required: true },
    jar: { type: String, required: true }
  },
  { timestamps: true }
);
const Transaction = mongoose.model("Transaction", TransactionSchema);

export default Transaction;