const Users = require("../models/user.model");

// @desc   Get the Users
// @route  GET /users/
// @access Public
exports.getUsers = async (req, res) => {
  // Get all the users from the users model
  Users.find()
    .then((users) => res.json(users))
    .catch((error) => res.status(401).json("Error: " + error));
};

// @desc   Add a User
// @route  POST /users/add
// @access Public
exports.addUser = async (req, res, next) => {
  const username = req.body.username;

  const newUser = new Users({ username });

  newUser
    .save()
    .then(() => res.json("User added"))
    .catch((error) => res.status(401).json("Error: " + error));
};
