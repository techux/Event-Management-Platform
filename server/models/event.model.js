const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    category: {
        type: String,
        required: true,
        default: "Uncategorised"
    },
    location: {
        type: String,
        required: true
    },
    registeredUser: [{
        type: mongoose.Schema.Types.ObjectId,
        default: [],
        ref: 'User'
    }]
},{
    timestamps: true
})

const Event = new mongoose.model('Event', eventSchema);

module.exports = Event ;