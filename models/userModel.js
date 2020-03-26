const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const opts = { toJSON: { virtuals: true } }; //opts is necessary for virtual
 
const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: new Date().getTime()
    },
  exercises: [//doesn't need to be in same order as seeds in NoSQL
      { 
      type: {
        type: String, 
        trim: true
    },
    name: {
        type: String,
        trim: true,
        required: "Name is Required"
    },
    duration: {
        type: Number,
        required: "Number is Required"
    },
    weight: {
        type: Number,
        required: "Number is Required"
    },
    reps: {
        type: Number,
        required: "Number is Required"
    },
    sets: {
        type: Number,
        required: "Number is Required"
    },
    distance: { //ONLY IF EXERCISE IS CARDIO
        type: Number
    }
}]
},
opts);

//This adds the durations together to get the totalDuration
WorkoutSchema.virtual('totalDuration').get(function() { //virtual adds it to schema
    let totalDuration = 0;
    for (let i = 0; i < this.exercises.length; i++) {
        totalDuration = totalDuration + this.exercises[i].duration;
}
    return totalDuration;
})
  
const Workout = mongoose.model("User", WorkoutSchema);

module.exports = Workout;
