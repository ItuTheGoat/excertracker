const router = require("express").Router();
const { getUsers, addUser } = require("../controllers/userController");

/* GET /users/ */
router.route("/").get(getUsers);

/* POST /users/add */
router.route("/add").post(addUser);

module.exports = router;
