const { Schema, model } = require("mongoose");

const ThoughtSchema = new Schema(
  {
    username: {
      type: String,
    },
    thoughtText: {
      type: String,
      required: "Thought is required",
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

const Thought = model("Thought", ThoughtSchema);

module.exports = Thought;
