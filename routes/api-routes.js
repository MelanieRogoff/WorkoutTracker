const User = require("./../models/userModel.js");
const path = require('path');

module.exports = function(app) {
app.get("/api/workouts", ({ body }, res) => {
// getLastWorkout() 
})

app.put("/api/workouts/:id", (req, res) => {
    //addExercise(data) -- updating & adding 
    User.findOne(req.params.workoutData_id, function(err, workoutData) {
        if (err)
            res.send(err);
        workoutData.save(function(err) {
          if (err) 
            res.send(err)
          res.json({ message: 'Workout updated!'});
      })
    });
});

app.post("/api/workouts", ({body}, res) => { //createWorkout(data = {})
    User.create(body) 
        .then(dbUser => {
            res.json(dbUser);
        })
        .catch(err => {
            res.status(400).json(err);
        });
    });

app.get("/api/workouts/range", (req, res) => {
 // GET for getWorkoutsInRange() -- This appears to get the stats page
    User.find({})
    .sort({ range: -1 })
    .then(dbUser => {
      res.json(dbUser);
    })
    .catch(err => {
     res.status(400).json(err);
    });
});
}
