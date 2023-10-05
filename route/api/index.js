const router = require("express").Router();

const UserRouter = require("./userroute");

router.route("/users", UserRouter);

module.exports = router;
