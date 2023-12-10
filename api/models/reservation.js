// Name, email, date_time,numerOfPeople,Secpical__message

const mongoose = require("mongoose");

const reservationSchema = new mongoose.Schema(
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
    date_time: {
      type: String,
      required: true,
    },
    numberOfPeople: {
      type: String,
      required: true,
    },
    Secpical__message: {
      type: String,
      required: true,
    },
  },
  { versionKey: false }
);

const reservation = mongoose.model("reservation", reservationSchema);

module.exports = reservation;
