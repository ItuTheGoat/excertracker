const Exercise = require("../models/exercise.models");

// @desc   Get all the exercises
// @route  GET /execises/
// @access Public
exports.getExercises = async (req, res) => {
  Exercise.find()
    .then((exercises) => res.json(exercises))
    .catch((error) => res.status(401).json("Error: " + error));
};

// @desc   Add an exercise
// @route  POST /execises/add
// @access Public
exports.addExercise = async (req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const duration = req.body.duration;
  const date = req.body.date;

  const newExercise = new Exercise({ username, description, duration, date });

  newExercise
    .save()
    .then(() => res.json("A new exercise was added!"))
    .catch((error) => res.status(401).json("Error: " + error));
};

// @desc   Get a specific exercise
// @route  GET /execises/:id
// @access Public
exports.getExercise = async (req, res) => {
  Exercise.findById(req.params.id)
    .then((exercise) => res.json(exercise))
    .catch((error) => res.status(401).json("Error " + error));
};

// @desc   Delete a specific exercise
// @route  DELETE /execises/:id
// @access Public
exports.deleteExercise = async (req, res) => {
  Exercise.findByIdAndDelete(req.params.id)
    .then((exercise) => res.json("Exercise deleted at id:" + exercise.id))
    .catch((error) => res.status(401).json("Error: " + error));
};

// @desc   Update a exercise
// @route  PUT /execises/:id
// @access Public
exports.updateExercise = async (req, res) => {
  Exercise.findById(req.params.id)
    .then((exercise) => {
      exercise.username = req.body.username;
      exercise.description = req.body.description;
      exercise.duration = req.body.duration;
      exercise.date = req.body.date;

      exercise
        .save()
        .then(() =>
          res.json("Exercise at id: " + req.params.id + " was updated!")
        )
        .catch((error) => res.status(400).json("Error: " + error));
    })
    .catch((error) => res.status(401).json("Error: " + error));
};
