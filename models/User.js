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
        ],
        favorited: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'dog'
            }
        ]
    },
    friends: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'user'
            },
            permissions: String
        }
    ],
    messages: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'message'
        }
    ],
    contacts: {
        vet: {
            businessName:String,
            address:String,
            phone:String
        },
        emergencyVet: {
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
            ownerNameDisplayed:{
                type:Boolean,
                default:false
            },
            ownerAddressDisplayed:{
                type:Boolean,
                default:false
            },
            ownerPhoneDisplayed:{
                type:Boolean,
                default:false
            },
            vetsDisplayed:{
                type:Boolean,
                default:false
            }
        }
    ],
    dateRegistered: {
        type:Date,
        default:Date.now
    }
});

module.exports = User = mongoose.model('user', UserSchema)