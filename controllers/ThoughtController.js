const Thought = require("../models/thought");

const ThoughtController = {
  createThought({ body }, res) {
    Thought.create(body)
      .then((dbres) => res.json(dbres))
      .catch((err) => console.log(err));
  },

  getAll(req, res) {
    Thought.find({})
      .then((dbres) => res.json(dbres))
      .catch((err) => console.log(err));
  },

  getById({ params }, res) {
    Thought.findOne({ _id: params.id })
      .then((dbres) => {
        if (!dbres) {
          return res
            .status(404)
            .json({ message: "Thought doesn't exist with this id" });
        }
        res.json(dbres);
      })
      .catch((err) => console.log(err));
  },
  update({ params, body }, res) {
    Thought.findOneAndUpdate({ _id: params.id }, body, {
      new: true,
      runValidators: true,
    })
      .then((dbres) => {
        if (!dbres) {
          return res
            .status(404)
            .json({ message: "Thought doesn't exist with this id" });
        }
        res.json(dbres);
      })
      .catch((err) => console.log(err));
  },
  deleteThought({ params, body }, res) {
    Thought.findOneAndDelete({ _id: params.id })
      .then((dbres) => {
        if (!dbres) {
          return res
            .status(404)
            .json({ message: "Thought doesn't exist with this id" });
        }
        res.json(dbres);
      })
      .catch((err) => console.log(err));
  },
  addReaction({ params, body }, res) {
    Thought.findOneAndUpdate(
      { _id: params.id },
      { $addToSet: { reactions: body } },
      {
        new: true,
        runValidators: true,
      }
    )
      .then((dbres) => {
        if (!dbres) {
          return res
            .status(404)
            .json({ message: "Thought doesn't exist with this id" });
        }
        res.json(dbres);
      })
      .catch((err) => console.log(err));
  },

  removeReaction({ params }, res) {
    Thought.findOneAndUpdate(
      { _id: params.id },
      { $pull: { reactions: { _id: params.reactionId } } },
      {
        new: true,
        runValidators: true,
      }
    )
      .then((dbres) => {
        if (!dbres) {
          return res
            .status(404)
            .json({ message: "Thought doesn't exist with this id" });
        }
        res.json(dbres);
      })
      .catch((err) => console.log(err));
  },
};

module.exports = ThoughtController;