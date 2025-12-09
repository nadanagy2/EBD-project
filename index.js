import express from "express";
import mongoose from "mongoose";

const app = express();
app.use(express.json());

/* ====================================================
   MONGODB CONNECTION
   ==================================================== */



/* ====================================================
   MONGOOSE MODELS
   ==================================================== */

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    password: { type: String, required: true },
    age: { type: Number, required: true },
    Parent_phone: { type: Number, required: true }
  },
  { timestamps: true }
);
const User = mongoose.model("User", UserSchema);

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

const VoucherSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    price: { type: Number, required: true },
    merchant: { type: String, required: true }
  },
  { timestamps: true }
);
const Voucher = mongoose.model("Voucher", VoucherSchema);

const MissionSchema = new mongoose.Schema(
  {
    childId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    description: { type: String, required: true },
    rewardXP: { type: Number, required: true },
    rewardAmount: { type: Number, required: true },
    rewardJar: { type: String, required: true },
    status: { type: String, default: "pending" }
  },
  { timestamps: true }
);
const Mission = mongoose.model("Mission", MissionSchema);

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


/* ====================================================
   USER ROUTES
   ==================================================== */
app.get("/api/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

app.post("/api/users", async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.json({ message: "User created", user });
});

app.put("/api/users/:id", async (req, res) => {
  await User.findByIdAndUpdate(req.params.id, req.body);
  res.json({ message: "User updated" });
});

app.delete("/api/users/:id", async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: "User deleted" });
});


/* ====================================================
   WALLET ROUTES
   ==================================================== */
app.get("/api/wallets", async (req, res) => {
  const wallets = await Wallet.find().populate("childId");
  res.json(wallets);
});

app.post("/api/wallets", async (req, res) => {
  const wallet = new Wallet(req.body);
  await wallet.save();
  res.json({ message: "Wallet created", wallet });
});

app.put("/api/wallets/:id", async (req, res) => {
  await Wallet.findByIdAndUpdate(req.params.id, req.body);
  res.json({ message: "Wallet updated" });
});

app.delete("/api/wallets/:id", async (req, res) => {
  await Wallet.findByIdAndDelete(req.params.id);
  res.json({ message: "Wallet deleted" });
});


/* ====================================================
   MISSION ROUTES
   ==================================================== */
app.get("/api/missions", async (req, res) => {
  const missions = await Mission.find().populate("childId");
  res.json(missions);
});

app.post("/api/missions", async (req, res) => {
  const mission = new Mission(req.body);
  await mission.save();
  res.json({ message: "Mission created", mission });
});

app.put("/api/missions/:id", async (req, res) => {
  await Mission.findByIdAndUpdate(req.params.id, req.body);
  res.json({ message: "Mission updated" });
});

app.delete("/api/missions/:id", async (req, res) => {
  await Mission.findByIdAndDelete(req.params.id);
  res.json({ message: "Mission deleted" });
});


/* ====================================================
   VOUCHER ROUTES
   ==================================================== */
app.get("/api/vouchers", async (req, res) => {
  const vouchers = await Voucher.find();
  res.json(vouchers);
});

app.post("/api/vouchers", async (req, res) => {
  const voucher = new Voucher(req.body);
  await voucher.save();
  res.json({ message: "Voucher created", voucher });
});

app.put("/api/vouchers/:id", async (req, res) => {
  await Voucher.findByIdAndUpdate(req.params.id, req.body);
  res.json({ message: "Voucher updated" });
});

app.delete("/api/vouchers/:id", async (req, res) => {
  await Voucher.findByIdAndDelete(req.params.id);
  res.json({ message: "Voucher deleted" });
});


/* ====================================================
   TRANSACTION ROUTES
   ==================================================== */
app.get("/api/transactions", async (req, res) => {
  const tx = await Transaction.find().populate("childId");
  res.json(tx);
});

app.post("/api/transactions", async (req, res) => {
  const tx = new Transaction(req.body);
  await tx.save();
  res.json({ message: "Transaction created", tx });
});

app.put("/api/transactions/:id", async (req, res) => {
  await Transaction.findByIdAndUpdate(req.params.id, req.body);
  res.json({ message: "Transaction updated" });
});

app.delete("/api/transactions/:id", async (req, res) => {
  await Transaction.findByIdAndDelete(req.params.id);
  res.json({ message: "Transaction deleted" });
});


app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

await mongoose.connect("mongodb+srv://habibaaahmed904_db_user:crbChsL9gtYloYKV@ebdcluster.onyxcwp.mongodb.net/FinQuest?appName=EBDcluster");
app.listen(3000, () => console.log("Server running at http://localhost:3000"));