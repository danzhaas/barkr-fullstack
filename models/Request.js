const mongoose = require('mongoose');

const RequestSchema = new mongoose.Schema({
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    recipient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    requestType: {
        type: String,
        required:true
    },
    dateSent: {
        type:Date,
        default:Date.now
    },
    response: String,
    dateFulfilled: Date,
    dismissed:Boolean
});

module.exports = Request = mongoose.model('request', RequestSchema)