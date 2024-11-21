const express = require("express");
const app = express();
const PORT = 5002;

app.listen(PORT, () => {
  console.log(`Student service is running on port ${PORT}`);
});
