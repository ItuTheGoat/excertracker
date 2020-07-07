/* This is where we will create the Schema for the user model */
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

/* This is where we create user model */
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      minlength: 3,
    },
  },
  {
    timestamps: true,
  }
);

/* Get the user model and export it */
const User = mongoose.model("User", userSchema);
module.exports = User;
