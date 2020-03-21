const User = require("./../models/userModel.js");
const path = require('path');

module.exports = function(app) {
app.get("/api/workouts", ({ body }, res) => {
//the front end is fetching info from this path for getLastWorkout()

})

app.put("/api/workouts/:id", (req, res) => {
    //the front end is fetching info from this path for getLastWorkout()
    
    })

app.post("/api/workouts", ({ body }, res) => {
    //createWorkout(data = {}) from api.js needs this
    //have to create stuff here
    User.Create(body) //getting User.Create is not a f(x) -- why?
    .then(dbUser => {
        res.json(dbUser);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

app.get("/api/workouts/range", (req, res) => {
  //getWorkoutsInRange() in api.js relies on this
    User.find({})
    .sort({ probablyRange: -1 })
    .then(dbUser => {
      res.json(dbUser);
    })
    .catch(err => {
     res.status(400).json(err);
    });
});
}
