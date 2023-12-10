// name, email, subject , message

const mongoose = require("mongoose");

const customerMessageSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
    },
    subject: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  { versionKey: false }
);

const customerMessage = mongoose.model(
  "customerMessage",
  customerMessageSchema
);

module.exports = customerMessage;
