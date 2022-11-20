const express = require("express");
const app = express();
const cors = require("cors");

const routes = require("./routes/routes");

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/api", routes);

require("dotenv").config();
require("./database/connect")();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is runnning on port ${PORT}`);
});
