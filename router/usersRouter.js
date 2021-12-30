//external imports
const express = require("express");
const { check } = require("express-validator");

//internal imports
const {
  getUsers,
  addUser,
  removeUser,
} = require("../controller/usersController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");
const avatarUpload = require("../middlewares/users/avatarUpload");
const {
  addUserValidators,
  addUserValidationHandler,
} = require("../middlewares/users/userValidators");

const router = express.Router();

//login page
router.get("/", decorateHtmlResponse("Users"), getUsers);

//add users
router.post(
  "/",
  avatarUpload,
  addUserValidators,
  addUserValidationHandler,
  addUser
);

//remove user
router.delete("/:id", removeUser);

module.exports = router;
