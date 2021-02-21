const mongoose = require('mongoose');

const DogSchema = new mongoose.Schema({
    ownerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    dogStats: {
        name: {
            type: String,
            required:true
        },
        sex: String,
        breeds:[
            {
                breed:String
            }
        ],
        yearBorn:Number,
        from:String
    },
    bio: {
        type: String,
        required:true
    },
    photos: {
        thumbnail:{
            data: Buffer,
            contentType: String
        },
        profile:{
            data: Buffer,
            contentType: String
        },
        // album:[
        //     {
        //         photo: {
        //             data: Buffer,
        //             contentType: String
        //         },
        //         caption:String
        //     }
        // ]
    },
    commands:[
        {
            name: {
                type:String,
                required: true
            },
            image: {
                data: Buffer,
                contentType: String
            },
            description:String,
            dateLearned:Date
        }
    ],
    routine:[
        {
            detail: String
        }
    ],
    supplies:[
        {
            detail: String
        }
    ],
    notes:[
        {
            detail: String
        }
    ],
    dateRegistered: {
        type:Date,
        default:Date.now
    }
});

module.exports = Dog = mongoose.model('dog', DogSchema)