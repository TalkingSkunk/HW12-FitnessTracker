const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const regimenSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            name: {
                type: String,
                trim: true,
                required: "You need to enter the exercise name."
            },
            type: {
                type: String,
                trim: true,
                required: "You need to type exercise type."
            },
            weight: {
                type: Number
            },
            sets: {
                type: Number
            },
            reps: {
                type: Number
            },
            duration: {
                type: Number
            },
            distance: {
                type: Number
            }
        }
    ]
});

const Regimen = mongoose.model("Regimen", regimenSchema)

module.exports = Regimen;