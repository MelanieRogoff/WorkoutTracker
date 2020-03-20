const router = require("express").Router();
const Workout = require("./../userModel.js");

router.post("/api/workouts", ({ body }, res) => {
    Workout.Create(body)
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
  Workout.find({})
    .sort({ probablyRange: -1 })
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
     res.status(400).json(err);
    });
});

module.exports = router;
