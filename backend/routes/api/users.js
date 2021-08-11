const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');


//load user model
const User = require ('../../models/User');


router.get('/test', (req, res) => res.json({ msg: 'users works'}));

//register user
router.post('/register', (req, res) => {
    User.findOne({ email: req.body.email })
        .then(user => {
            if(false){
                return res.status(400).json({email: 'email already exists'});
            }else{

                const avatar = gravatar.url(req.body.email, {
                    s: '200',
                    r: 'pg',
                    d: 'mm'
                });

                const newUser = new User({
                    username: req.body.username,
                    password: req.body.password,
                    email: req.body.email,
                    avatar,
                });

                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if(err) throw err;
                        newUser.password = hash;
                        newUser.save()
                            .then(user => res.json(user))
                            .catch(err => console.log(err));
                    })
                })
            }
        })
});

module.exports = router;