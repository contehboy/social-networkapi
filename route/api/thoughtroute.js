const router = require("express").Router();
const {
  createThought,
  getAll,
  getById,
  update,
  deleteThought,
} = require("../../controllers/ThoughtController");

router.route("/").post(createThought).get(getAll);
router.route("/:id").get(getById).put(update).delete(deleteThought);

module.exports = router;
