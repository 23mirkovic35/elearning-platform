const express = require("express");
const UserController = require("../controllers/auth.controller");
const userRouter = express.Router();

userRouter
  .route("/login")
  .post((req, res) => new UserController().login(req, res));

userRouter
  .route("/signup")
  .post((req, res) => new UserController().signup(req, res));

module.exports = userRouter;
