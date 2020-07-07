const router = require("express").Router();
const {
  getExercises,
  addExercise,
  getExercise,
  deleteExercise,
  updateExercise,
} = require("../controllers/execiseController");

// GET /exercises/
router.route("/").get(getExercises);

// POST /exercises/add
router.route("/add").post(addExercise);

// GET 1 /exercise/:id
router.route("/:id").get(getExercise);

// DELETE /exercise/:id
router.route("/:id").delete(deleteExercise);

// UPDATE /exercise/:id
router.route("/:id").put(updateExercise);

module.exports = router;
