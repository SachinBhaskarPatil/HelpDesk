const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, default: "user" } // Default role is "user"
});

const User = mongoose.model("User", userSchema);

module.exports = User;
