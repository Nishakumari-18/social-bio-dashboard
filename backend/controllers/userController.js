import User from "../models/userModel.js";

export const createOrUpdateUser = async (req, res) => {
  const { username, name, bio, profilePic, links } = req.body;
  try {
    const user = await User.findOneAndUpdate(
      { username },
      { name, bio, profilePic, links },
      { new: true, upsert: true }
    );
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username });
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
