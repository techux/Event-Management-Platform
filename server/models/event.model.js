const mongoose = require('mongoose');
var slugify = require('slugify')
const { customAlphabet } = require('nanoid');
const alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const eventSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        default: "https://i.ibb.co/PGsFNDn/default-events.jpg"
    },
    date: {
        type: Date,
        required: true
    },
    slug: {
        type: String,
        unique: true
    }
    ,
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

eventSchema.pre('save', function(next) {
    if (this.isNew) {       
        this.slug = slugify(this.name.toLowerCase(),{strict:true}) +"-"+ customAlphabet(alphabet, 10)();
    }
    next();
})

const Event = new mongoose.model('Event', eventSchema);

module.exports = Event ;