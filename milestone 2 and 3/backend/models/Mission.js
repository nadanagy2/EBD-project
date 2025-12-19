import mongoose from "mongoose"

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


export default Mission;