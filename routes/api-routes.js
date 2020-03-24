const Workout = require("./../models/userModel.js");
const path = require('path');

module.exports = function(app) {
app.get("/api/workouts", (req, res) => { //getLastWorkout() 
//MAKE A FIND BY THAT SORTS BY DATE - DON'T NEED BODY AS IT'S JUST A GET
Workout.find({})
    .sort({ date: +1 })
    .limit(1)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
     res.status(400).json(err);
    });
//JUST A SIMPLE FIND, BUT SORT BY DATE & DO A LIMIT OF 1, BC WE ONLY WANT 1
})

app.put("/api/workouts/:id", (req, res) => { //addExercise(data) - UPDATE & SAVE
    //do req.body in exercises to grab all data (we grab thru req)
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

app.get("/api/workouts/range", (req, res) => { //getWorkoutsInRange() gets info from stats page
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
