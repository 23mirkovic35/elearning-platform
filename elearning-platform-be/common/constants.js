const PORT = {
  MAIN_PORT: 5000,
  AUTH_PORT: 5001,
  FRONTEND_PORT: 4200,
};

module.exports = {
  db: {
    name: "mongodb",
    url: "mongodb://localhost:27017/elearning-platform",
  },
  corsOptions: {
    origin: `http://localhost:${PORT.FRONTEND_PORT}`,
  },
  ...PORT,
};
