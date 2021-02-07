const mongoose = require("mongodb");
const Schema = mongoose.Schema;

const workout = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
      type: String,
      name: String,
      duration: integer,
      weight: integer,
      reps: integer,
      sets: integer,
    },
  ],
});
