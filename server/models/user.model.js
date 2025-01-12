const validator = require('email-validator');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    username: {
        type: String,
        required: true,
        unique: true
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
        enum : ['regular', 'guest'],
        default : 'guest'
    },
    // expiresAt: { 
    //     type: Date, 
    //     default: function() { 
    //         if (this.role === 'guest') { 
    //             return new Date(Date.now() + 2 * 60 * 60 * 1000); // 2 hours from now 
    //         } 
    //         return undefined; 
    //     } 
    // }
}, {
    timestamps: true
})

const User = mongoose.model("User", userSchema);

module.exports = User ;