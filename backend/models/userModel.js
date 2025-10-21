import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  name: String,
  bio: String,
  profilePic: String,
  links: [{ platform: String, url: String }],
});

export default mongoose.model("User", userSchema);
