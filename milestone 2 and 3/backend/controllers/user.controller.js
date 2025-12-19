import User from "../models/User.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import createError from "../utils/createError.js";

/* ===============================
   REGISTER
================================ */
async function register(req, res, next) {
  try {
    const { username, password, age, Parent_phone } = req.body;

    const hashedPassword = bcryptjs.hashSync(password, 10);

    const newUser = new User({
      username,
      password: hashedPassword,
      age,
      Parent_phone,
    });

    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    next(createError(500, "Error registering user"));
  }
}

/* ===============================
   LOGIN
================================ */
async function login(req, res, next) {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user) return next(createError(404, "User not found"));

    const isPasswordCorrect = bcryptjs.compareSync(password, user.password);
    if (!isPasswordCorrect) return next(createError(401, "Invalid credentials"));

    const token = jwt.sign(
      { id: user._id, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    const { password: pwd, ...userData } = user._doc;

    res
      .cookie("access_token", token, { httpOnly: true, maxAge: 86400000 })
      .status(200)
      .json(userData);
  } catch (err) {
    next(createError(500, "Error logging in"));
  }
}

/* ===============================
   LOGOUT
================================ */
async function logout(req, res, next) {
  try {
    res
      .clearCookie("access_token")
      .status(200)
      .json({ message: "Logged out successfully" });
  } catch (err) {
    next(createError(500, "Error logging out"));
  }
}

/* ===============================
   GET CURRENT USER
================================ */
async function getCurrentUser(req, res, next) {
  try {
    if (!req.user) return next(createError(401, "Not authenticated"));
    res.status(200).json(req.user);
  } catch (err) {
    next(createError(500, "Error fetching current user"));
  }
}

export { register, login, logout, getCurrentUser };
