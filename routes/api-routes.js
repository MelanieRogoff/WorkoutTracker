const router = require("express").Router();
// Put a model require here

router.post("/api/workouts", ({ body }, res) => {
    //Model.Create(body)
    //.then(dbModelName => {
        //res.json(dbModelName);
    //})
    //.catch(err => {
        //res.status(400).json(err);
    //});
});


router.get("/api/workouts/range", (req, res) => {
  //ModelName.find({})
    //.sort({ probablyRange: -1 })
    //.then(dbModelName => {
     // res.json(dbModelName);
    //})
   // .catch(err => {
   //   res.status(400).json(err);
  //  });
});

module.exports = router;
