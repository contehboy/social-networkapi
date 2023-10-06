const router = require("express").Router();
const {
  createUser,
  getAll,
  getById,
  update,
  deleteUser,
  addFriend,
  removeFriend,
} = require("../../controllers/UserController");

router.route("/").post(createUser).get(getAll);
router.route("/:id").get(getById).put(update).delete(deleteUser);
router.route("/:id/friend/:friendId").put(addFriend).delete(removeFriend);

module.exports = router;
