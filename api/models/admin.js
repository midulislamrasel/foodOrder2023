
const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
    
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  role: {
    type: String,
    enum: ["admin"],
    default: "admin",
  },
});

const admin = mongoose.model("admin", adminSchema);

module.exports = admin;
