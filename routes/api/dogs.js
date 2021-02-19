const express = require ('express');
const router = express.Router();
const bcrypt = require('bcryptjs'); // encryption package
const jwt = require('jsonwebtoken');    // js web token
const auth = require ('../../middleware/auth');
const config = require('config');   //allows us to access other json files 
const { check, validationResult } = require('express-validator'); //the methods for request validation

const Dog = require('../../models/Dog');

// @route   GET api/dogs/edit/:id
// @desc    Get specific dog by id for editing
// @access  Private
router.get('/edit/:id', auth, async (req, res) => { // note auth middleware and async because we're making a call to the database
    try {
        const dog = await Dog.findById(req.params.id)  // jwt authorization happens here: the findById method calls req.user we declared in the auth middleware
        res.json(dog); // response inludes the object returned by user document query
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   POST api/dogs/add
// @desc    Register dog for user
// @access  Private

// @route   PUT api/dogs/:id
// @desc    Edit dog (add picture, add notes, )
// @access  Private

// @route   DELETE api/dogs/:id
// @desc    Delete dog
// @access  Private

// @route   GET api/dogs/  
// @desc    Get all dogs
// @access  Public

// @route   GET api/dogs/:id
// @desc    Get specific dog by id
// @access  Public

// @route   GET api/dogs/:name
// @desc    Get specific dog by name
// @access  Public

// @route   GET api/dogs/:owner
// @desc    Get specific dog by owner info
// @access  Public


module.exports = router;