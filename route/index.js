const router = require("express").Router();
const indexRoutes = require("./api/index");

router.use("api", indexRoutes);

module.exports = router;
