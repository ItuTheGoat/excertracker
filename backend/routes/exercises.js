const router = require("express").Router();
const {
  getExercises,
  addExercise,
} = require("../controllers/execiseController");

// GET /exercises/
router.route("/").get(getExercises);

// POST /exercises/add
router.route("/add").post(addExercise);

module.exports = router;
