const mongoose = require('mongoose');

const habitSchema = new mongoose.Schema({
    name: { type: String, required: true },
    dates: [{
        date: String,
        status: String
    }]
}, {
    timestamps: true
});

const Habit = mongoose.model('habit_db', habitSchema);

module.exports = Habit;