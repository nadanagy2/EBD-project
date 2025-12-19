import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

/* =======================
   ROUTES
   ======================= */
import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";
import walletRoutes from "./routes/wallet.routes.js";
import missionRoutes from "./routes/mission.routes.js";
import voucherRoutes from "./routes/voucher.routes.js";
import transactionRoutes from "./routes/transaction.routes.js";

/* =======================
   MIDDLEWARE
   ======================= */
import errorHandler from "./Middleware/errorHandler.js";

dotenv.config();

const app = express();

/* =======================
   GLOBAL MIDDLEWARE
   ======================= */
app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:5173", // frontend
    credentials: true,
  })
);

/* =======================
   API ROUTES
   ======================= */
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/wallets", walletRoutes);
app.use("/api/missions", missionRoutes);
app.use("/api/vouchers", voucherRoutes);
app.use("/api/transactions", transactionRoutes);

/* =======================
   ERROR HANDLER (LAST)
   ======================= */
app.use(errorHandler);

/* =======================
   DATABASE + SERVER
   ======================= */
const PORT = process.env.PORT || 3000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB!");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}!`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err.message);
  });
