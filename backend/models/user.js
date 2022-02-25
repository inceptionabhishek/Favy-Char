const mongoose= require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  date: { type: Date, default: Date.now }
});

const user = mongoose.model("user", userSchema);
module.exports = user;