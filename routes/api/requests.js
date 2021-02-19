const express = require ('express');
const router = express.Router();
const bcrypt = require('bcryptjs'); // encryption package
const jwt = require('jsonwebtoken');    // js web token
const auth = require ('../../middleware/auth');
const config = require('config');   //allows us to access other json files 
const { check, validationResult } = require('express-validator'); //the methods for request validation

const Request = require('../../models/Request');

// @route   GET api/user/:username/:message_id
// @desc    Check message
// @access  Private
router.get('/', auth, async (req, res) => { // note auth middleware and async because we're making a call to the database
    try {
        const user = await User.findById(req.user.id)  // jwt authorization happens here: the findById method calls req.user we declared in the auth middleware
        .select('-password');  // query for the above user will exclude the password field
        res.json(user); // response inludes the object returned by user document query
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   DELETE api/user/:username/:message_id
// @desc    Delete message
// @access  Private


module.exports = router;