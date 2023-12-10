
const mongoose = require("mongoose");

const subscriberSchema = new mongoose.Schema({
    
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
  },
  role: {
    type: String,
    enum: ["user"],
    default: "user",
  },
},
{ versionKey: false });

const subscriber = mongoose.model("subscriber", subscriberSchema);

module.exports = subscriber;
