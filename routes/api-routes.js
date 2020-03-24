const Workout = require("./../models/userModel.js");
const path = require('path');

module.exports = function(app) {
app.get("/api/workouts", ({ body }, res) => {
// getLastWorkout() 
})

app.put("/api/workouts/:id", (req, res) => {
    //addExercise(data) -- updating & adding  ---- do req.body in exercises to grab all of the data (we grab thru req)
    //ANYTHING COMING FROM FRONT END IS A REQ, SO YOU NEED TO DO REQ.BODY
    //INFO WE WANT TO SEND TO FRONTEND IS THE RES, SO RES.SEND
    Workout.findByIdAndUpdate(req.params.id, {$push: { exercises: req.body} }, { new: true}, function (err, data) {
        if (err) {
            res.send(err);
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

app.get("/api/workouts/range", (req, res) => {
 // GET for getWorkoutsInRange() -- This appears to get the stats page
    Workout.find({})
    .sort({ range: -1 })
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
     res.status(400).json(err);
    });
});
}
