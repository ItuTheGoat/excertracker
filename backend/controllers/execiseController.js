const Execise = require("../models/exercise.models");
const Exercise = require("../models/exercise.models");

// @desc   Get all the exercises
// @route  GET /execises/
// @access Public
exports.getExercises = async (req, res) => {
  Exercise.find()
    .then((exercises) => res.json(exercises))
    .catch((error) => res.status(401).json("Error: " + error));
};

// @desc  Add an exercise
// @route  POST /execises/add
// @access Public
exports.addExercise = async (req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const duration = req.body.duration;
  const date = req.body.date;

  const newExercise = new Execise({ username, description, duration, date });

  newExercise
    .save()
    .then(() => res.json("A new exercise was added!"))
    .catch((error) => res.status(401).json("Error: " + error));
};
