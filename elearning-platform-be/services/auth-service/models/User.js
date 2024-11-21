const mongoose = require("mongoose");

const Schema = mongoose.Schema;
let User = new Schema({
  _id: Object,
  username: String,
  password: String,
});

const user = mongoose.model("User", User, "users");
module.exports = user;
