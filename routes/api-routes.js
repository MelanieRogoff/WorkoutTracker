const Workout = require("./../models/userModel.js");

module.exports = function(app) {
app.get("/api/workouts", (req, res) => { //getLastWorkout() 
Workout.find({}) //Using .find({}) to get the last workout
    .then(dbWorkout => { //dbWorkout is also the name of the array
        res.json(dbWorkout); 
    })
    .catch(err => {
     res.status(400).json(err);
    });
})

app.put("/api/workouts/:id", (req, res) => { //addExercise(data) - UPDATE & SAVE
    Workout.findByIdAndUpdate(req.params.id, {$push: { exercises: req.body} }, { new: true}, function (err, data) { //put req.body in exercises to grab all data from frontend
        if (err) {
            res.send(err); //info sent from our backend to frontend is always res
        } else {
            res.send(data)
        }
    }) 
});

app.post("/api/workouts", ({body}, res) => { //createWorkout(data = {})
    Workout.create(body) 
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
    });

app.get("/api/workouts/range", (req, res) => { //getWorkoutsInRange() gets info from stats page
    Workout.find({})
    .sort({ day: -1 })
    .limit(7)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
     res.status(400).json(err);
    });
});
}
