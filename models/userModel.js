const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  exercises: [{ //doesn't need to be in same order as seeds in NoSQL
    name: {
        type: String,
        trim: true,
        required: "Name is Required"
    },
    workoutType: {
        type: String, 
        trim: true
    },
    weight: {
        type: Number,
        required: "Number is Required"
    },
    sets: {
        type: Number,
        required: "Number is Required"
    },
    reps: {
        type: Number,
        required: "Number is Required"
    },
    duration: {
        type: Number,
        required: "Number is Required"
    },
    distanceTraveled: { //ONLY IF EXERCISE IS CARDIO
        type: Number
    }
}]
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
