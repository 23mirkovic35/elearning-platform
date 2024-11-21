const express = require("express");
const UserController = require("../controllers/auth.controller");
const userRouter = express.Router();

userRouter.route("/login").post((req, res) => console.log(req.body));

userRouter
  .route("/signup")
  .post((req, res) => new UserController().signup(req, res));

module.exports = userRouter;