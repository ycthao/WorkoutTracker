const mongoose = require("mongodb");
const Schema = mongoose.Schema;

const workout = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: {},
});
