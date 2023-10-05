const router = require("express").Router();
const { createUser } = require("../../controllers/UserController");

router.route("/").post(createUser);

module.exports = router;
