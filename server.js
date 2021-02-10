// Calling dependencies
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const mongojs = require("mongojs");

const databaseUrl = "workout";
const collections = ["workouts"];
const db = mongojs(databaseUrl, collections);

const PORT = process.env.PORT || 8080;

const Workout = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

// require("./router/apiroutes.js")(app);
// require("./router/htmlroutes.js")(app);

module.exports = function (app) {
  app.get("/", (req, res) => {
    console.log("index");
    res.sendFile(path.join(__dirname, "public/index.html"));
  });

  app.get("/stats", (req, res) => {
    console.log("status");
    res.sendFile(path.join(__dirname, "public/stats.html"));
  });

  app.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "public/exercise.html"));
  });
};

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
