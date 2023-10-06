const router = require("express").Router();
const {
  createUser,
  getAll,
  getById,
  update,
  deleteUser,
} = require("../../controllers/UserController");

router.route("/").post(createUser).get(getAll);
router.route("/:id").get(getById).put(update).delete(deleteUser);

module.exports = router;
