const mongoose = require('mongoose');

const userEventSchema = new mongoose.Schema({
    userId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User' 
    },
    eventId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event'
    },
    status: {
        type: String,
        enum: ['accepted', 'declined', 'pending'],
        default: 'pending'
    }
},{
    timestamps: true
})

const UserEvent = new mongoose.model('UserEvent', userEventSchema);

module.exports = UserEvent;