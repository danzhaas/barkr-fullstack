const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type:String,
        required:true,
        unique:true
    },
    email: {
        type:String,
        required: true,
        unique:true
    },
    password: {
        type:String,
        required:true
    },
    personal: {
        name: {
            type:String,
            required:true
        },
        ZIP: Number
    },
    dogs: {
        owned: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'dog'
            }
        ]
        // favorited: [
        //     {
        //         type: mongoose.Schema.Types.ObjectId,
        //         ref: 'dog'
        //     }
        // ]
    },
    // friends: [
    //     {
    //         user: {
    //             type: mongoose.Schema.Types.ObjectId,
    //             ref: 'user'
    //         },
    //         permissions: String
    //     }
    // ],
    // messages: [
    //     {
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: 'message'
    //     }
    // ],
    private:{
        type:Boolean,
        default:false
    },
    contacts: {
        owner: {
            displayed:{
                type:Boolean,
                default:false
            },
            address:String,
            phone:String
        },
        vet: {
            displayed:{
                type:Boolean,
                default:false
            },
            businessName:String,
            address:String,
            phone:String
        },
        emergencyVet: {
            displayed:{
                type:Boolean,
                default:false
            },
            businessName:String,
            address:String,
            phone:String
        }
    },
    dateRegistered: {
        type:Date,
        default:Date.now
    }
});

module.exports = User = mongoose.model('user', UserSchema)