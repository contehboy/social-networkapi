const router = require("express").Router();
const {
  createThought,
  getAll,
  getById,
  update,
  deleteThought,
  addReaction,
  removeReaction,
} = require("../../controllers/ThoughtController");

router.route("/").post(createThought).get(getAll);
router.route("/:id").get(getById).put(update).delete(deleteThought);
router.route("/:id/reaction/").put(addReaction);
router.route("/:id/reaction/:reactionId").delete(removeReaction);

module.exports = router;
