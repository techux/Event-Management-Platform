const validator = require('email-validator');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true,
        validate: {
            validator: (v)=> validator.validate(v),
            message: (props) => `${props.value} is not a valid email`
        }
    },
    password : {
        type : String,
        required : true
    },
    role : {
        type : String,
        enum : ['attendee', 'guest'],
        default : 'guest'
    }
}, {
    timestamps: true
})

const User = mongoose.model("User", userSchema);

module.exports = User ;