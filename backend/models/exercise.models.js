/* This is where we will create the Schema for the user model */
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

/* This is where we create user model */
const execiseSchema = new Schema(
  {
    username: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: Number, required: true },
    date: { type: Date, required: true },
  },
  {
    timestamps: true,
  }
);

/* Get the user model and export it */
const Exercise = mongoose.model("Exercise", execiseSchema);
module.exports = Exercise;
