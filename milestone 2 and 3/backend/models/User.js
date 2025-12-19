import mongoose from "mongoose"

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

export default User;