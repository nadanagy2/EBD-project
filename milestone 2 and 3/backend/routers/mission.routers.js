import { Router } from "express";
import * as missionController from "../controllers/mission.controller.js";
import { verifyToken, verifyAdmin } from "../Middleware/auth.js";

const router = Router();

router.get("/", verifyToken, missionController.getMissions);
router.post("/", verifyToken, missionController.createMission);
router.put("/:id", verifyToken, missionController.updateMission);

// Admin route for delete all missions
router.delete("/deleteAll", verifyToken, verifyAdmin, async (req, res) => {
  try {
    await Mission.deleteMany({});
    res.status(200).json({ message: "All missions deleted (Admin)" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting all missions" });
  }
});

router.delete("/:id", verifyToken, missionController.deleteMission);

export default router;
