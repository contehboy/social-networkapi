const { Schema, model } = require("mongoose");

const ReactionSchema = new Schema(
  {
    username: {
      type: String,
    },
    reactionText: {
      type: String,
      required: "Reaction is required",
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

module.exports = ReactionSchema;
