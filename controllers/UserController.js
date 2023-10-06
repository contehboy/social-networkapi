const User = require("../models/User");

const UserController = {
  // create user
  createUser({ body }, res) {
    User.create(body)
      .then((dbres) => res.json(dbres))
      .catch((err) => console.log(err));
  },

  getAll(req, res) {
    User.find({})
      .then((dbres) => res.json(dbres))
      .catch((err) => console.log(err));
  },

  getById({ params }, res) {
    User.findOne({ _id: params.id })
      .then((dbres) => {
        if (!dbres) {
          return res
            .status(404)
            .json({ message: "User doesn't exist with this id" });
        }
        res.json(dbres);
      })
      .catch((err) => console.log(err));
  },
  update({ params, body }, res) {
    User.findOneAndUpdate({ _id: params.id }, body, {
      new: true,
      runValidators: true,
    })
      .then((dbres) => {
        if (!dbres) {
          return res
            .status(404)
            .json({ message: "User doesn't exist with this id" });
        }
        res.json(dbres);
      })
      .catch((err) => console.log(err));
  },
  deleteUser({ params, body }, res) {
    User.findOneAndDelete({ _id: params.id })
      .then((dbres) => {
        if (!dbres) {
          return res
            .status(404)
            .json({ message: "User doesn't exist with this id" });
        }
        res.json(dbres);
      })
      .catch((err) => console.log(err));
  },
};

module.exports = UserController;
