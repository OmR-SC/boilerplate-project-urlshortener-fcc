require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { router } = require("./src/v1/routes/shortenerRoute");
const bodyParser = require("body-parser");
const dbConnect = require("./src/config/mongoose");
const app = express();

// Basic Configuration
const port = process.env.PORT || 3000;

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/public", express.static(`${process.cwd()}/public`));

app.get("/", function (req, res) {
  res.sendFile(process.cwd() + "/views/index.html");
});

// Your first API endpoint
app.get("/api/hello", function (req, res) {
  res.json({ greeting: "hello API" });
});

//Routes
app.use("/api", router);

dbConnect();

app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
