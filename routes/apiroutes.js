const db = require("../models");

module.exports = (app) => {
  // workout call -- getting all workouts
  app.get("/api/workouts", (req, res) => {
    db.Workout.find({}, (err, workouts) => {
      if (err) {
        console.log(err);
      } else {
        console.log("working");
        res.json(workouts);
      }
    });
  });

  // create call -- creating workout
  app.post("/api/workouts", (req, res) => {});

  // update call -- updating workout
  app.put("/api/workouts/:id", (req, res) => {});
};
