const mongoose = require("mongoose");
const user = require("../models/User.js");

class UserController {
  login = (req, res) => {
    const { username, password } = req.body;
    console.log(username, password);
  };

  signup = (req, res) => {
    const { username, password } = req.body;
    const newUser = new user({
      _id: new mongoose.Types.ObjectId(),
      username: username,
      password: password,
    });
    newUser
      .save()
      .then((_) => res.json())
      .catch((error) => console.log(error));
  };
}

module.exports = UserController;
