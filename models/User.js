const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      trim: true,
      required: "Username is required",
    },
    email: {
      type: String,
      unique: true,
      match: [/.+@.+\..+/],
      required: "Username is required",
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const User = model("User", UserSchema);

module.exports = User;
