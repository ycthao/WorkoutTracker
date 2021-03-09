const db = require("../models");
const Workout = require("../models/workout");

module.exports = (app) => {
  // workout call -- getting all workouts
  app.get("/api/workouts", (req, res) => {
    db.Workout.find({}, (err, workouts) => {
      if (err) {
        console.log(err);
      } else {
        res.json(workouts);
      }
    });
  });

  // create call -- creating workout
  app.post("/api/workouts", (req, res) => {
    db.Workout.create({})
      .then((newWorkout) => {
        console.log("created new exercise");
        res.json(newWorkout);
      })
      .catch((err) => {
        console.log("not working");
        res.status(400).json(err);
      });
  });

  // update call -- updating workout
  app.put("/api/workouts/:id", (req, res) => {
    db.Workout.findByIdAndUpdate(req.params.id, { $push: { exercises: req.body } }, { new: true })
      .then((newWorkout) => {
        res.json(newWorkout);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });

  // get workout range
  app.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
      .then((workout) => {
        res.json(workout);
      })
      .catch((err) => {
        res.json(err);
      });
  });
};
