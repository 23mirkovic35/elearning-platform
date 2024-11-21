const { fork } = require("child_process");
const services = require("./constants/services");
const express = require("express");
const app = express();
const PORT = 5000;

const startElearningPlatformServices = () => {
  services.forEach(({ path }) => {
    fork(path);
  });
};

app.listen(PORT, () => {
  console.log(`Main app is running on port ${PORT}`);
  startElearningPlatformServices();
});
