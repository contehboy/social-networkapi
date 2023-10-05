const User = require("../models/User");

const UserController = {
  // create user
  createUser({ body }, res) {
    User.create(body)
      .then((dbres) => res.json(dbres))
      .catch((err) => console.log(err));
  },
};

module.exports = UserController;
