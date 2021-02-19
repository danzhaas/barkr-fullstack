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
        address: {
            street:String,
            city:String,
            state:String,
            zip: String
        },
        phone: String
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
    contacts: {
        owner: {
            displayName:{
                type:Boolean,
                default:false
            },
            displayAddress:{
                type:Boolean,
                default:false
            },
            address:String,
            displayPhone:{
                type:Boolean,
                default:false
            },
            phone:String
        },
        vet: {
            vetDisplayed:{
                type:Boolean,
                default:false
            },
            businessName:String,
            address:String,
            phone:String
        },
        emergencyVet: {
            vetDisplayed:{
                type:Boolean,
                default:false
            },
            businessName:String,
            address:String,
            phone:String
        }
    },
    settings: [
        {
            private:{
                type:Boolean,
                default:false
            },
        }
    ],
    dateRegistered: {
        type:Date,
        default:Date.now
    }
});

module.exports = User = mongoose.model('user', UserSchema)