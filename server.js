const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const Workout = require("./userModel.js");
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutdb", { useNewUrlParser: true });

//INDEX ROUTE
app.get("/", (req, res) => {
  Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

//STATS ROUTE
app.get('/stats', function(req, res) {
    //Code this so user can view the combined weight of multiple exercises on this page
});

app.get('/exercise', function(req, res) {
    //put code for viewing exercises here
})

//Put a post for posting exercises here

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
