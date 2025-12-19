import Mission from "../models/Mission.js";
import createError from "../utils/createError.js";

async function getMissions(req, res, next) {
  try {
    const missions = await Mission.find().populate("childId");
    res.status(200).json(missions);
  } catch (err) {
    next(createError(500, "Error fetching missions"));
  }
}

async function createMission(req, res, next) {
  try {
    const mission = new Mission(req.body);
    await mission.save();
    res.status(201).json({ message: "Mission created", mission });
  } catch (err) {
    next(createError(500, "Error creating mission"));
  }
}

async function updateMission(req, res, next) {
  try {
    await Mission.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ message: "Mission updated" });
  } catch (err) {
    next(createError(500, "Error updating mission"));
  }
}

async function deleteMission(req, res, next) {
  try {
    await Mission.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Mission deleted" });
  } catch (err) {
    next(createError(500, "Error deleting mission"));
  }
}

export { getMissions, createMission, updateMission, deleteMission };
